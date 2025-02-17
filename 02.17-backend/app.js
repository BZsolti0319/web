import express from "express";
import cors from "cors";
import { initializeDB } from "./database.js";
import novenyekRouter from "./routes/novenyek.js"
import {readFile} from "fs/promises"

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/novenyek", novenyekRouter);

app.use((err, req, res ,next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({message: err.message});
});

const startServer = async () =>{
    await initializeDB();
    app.listen(3020, () => console.log("Server is running on port 3020"));
}

startServer();