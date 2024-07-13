import Data from "../model/data.js";

// Get all data
export const getAllData = async (req, res) => {
    try {
        const data = await Data.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// Create new data
export const insertData = async (data) => {
    try{
        const result = await Data.create(data)
        return result
    }
    catch (error) {
        throw new Error(error.message)
    }

}

// Delete all data
export const deleteAllData = async (req, res) => {
    try {
        await Data.deleteMany()
        res.status(200).json({ message: "All data deleted successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

