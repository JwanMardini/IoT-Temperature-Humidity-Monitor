# RaspberryPi-IoT-Dashboard

An IoT project using a Raspberry Pi Pico W to monitor temperature and humidity, sending data to a backend server and displaying it in a real-time React dashboard.

## Features

- Real-time temperature and humidity monitoring
- LED indicators for temperature status
- REST API for data communication
- WebSocket for real-time updates
- React frontend for data visualization

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Python](https://www.python.org/) installed
- [Raspberry Pi Pico W](https://www.raspberrypi.org/products/raspberry-pi-pico/) with MicroPython
- [MongoDB](https://www.mongodb.com/) for the backend database

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/JwanMardini/RaspberryPi-IoT-Dashboard.git
    cd RaspberryPi-IoT-Dashboard/server
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following content:
    ```env
    MONGO_URL=your_mongo_url
    PORT=your_port
    ```

4. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```sh
    cd ../client
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following content:
    ```env
    VITE_WS_URL=your_websocket_url
    ```

4. Start the frontend development server:
    ```sh
    npm run dev
    ```

### Raspberry Pi Pico W Setup

1. Flash MicroPython on the Raspberry Pi Pico W.
2. Copy the Python script to the Pico W and ensure the necessary libraries are included.
3. Create `keys.py` file in lib folder
4. Update the URL in the `keys.py` file to point to your backend server.
5. Update WIFI_SSID in the `keys.py` file
6. Update WIFI_PASS in the `keys.py` file

## Usage

1. Power on the Raspberry Pi Pico W.
2. Access the React dashboard via the frontend development server.

## Architecture

### Components

- **Raspberry Pi Pico W**: Collects temperature and humidity data and sends it to the backend.
- **Backend**: An Express.js server with a MongoDB database to store and serve data.
- **Frontend**: A React application to visualize the data in real-time.

### Data Flow

1. Pico W reads data from the DHT sensor.
2. Data is sent to the backend server via a POST request.
3. Backend stores the data in MongoDB.
4. Frontend fetches data from the backend and displays it.
5. WebSocket used for real-time updates to the dashboard.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
