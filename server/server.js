import express from 'express';
import { WebSocketServer } from 'ws';
import mongoose from 'mongoose';
import { insertData, deleteAllData } from './controller/dataController.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express();
const wsServer = new WebSocketServer({ noServer: true });
const clients = new Set();


// WebSocket server event listeners
wsServer.on('connection', (socket, req) => {
    const ip = req.socket.remoteAddress;
    console.log(`New client connected: ${ip}`);
    clients.add(socket);
    console.log(`Total connected clients: ${clients.size}`);

    socket.on('message', message => {
        console.log(`Message from ${ip}: ${message}`);
        socket.send(`You said: ${message}`);
    });

    socket.on('close', () => {
        console.log('Client disconnected: ' + ip)
        clients.delete(socket);
        console.log(`Total connected clients: ${clients.size}`);
    });
});

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


// Notify all connected clients of new data
const notifyClients = (data) => {
    clients.forEach(client => {
        if (client.readyState === 1) {
            client.send(JSON.stringify(data));
        }
    });
};


app.post('/IoT', async (req, res) => {
    const newData = req.body;
    try{
        const result = await insertData(newData);
        notifyClients(result);
        res.status(200).json({
            message: 'Data sent successfully',
            data: result,
            succcess: true
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        });
    }

});

app.delete('/IoT', deleteAllData)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(`${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(500).send('Something went wrong!');
});

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

// Upgrade HTTP server to WebSocket server
server.on('upgrade', (request, socket, head) => {
    wsServer.handleUpgrade(request, socket, head, socket => {
        wsServer.emit('connection', socket, request);
    });
});

