import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoute.js";
import "./utils/db.js"
// import { poolPromise } from './utils/db.js'; // Ensure you're importing the poolPromise

const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
}));

app.use(express.json());
app.use('/auth', adminRouter);

app.listen(4000, async () => {
    try {
        // await poolPromise; // Ensure that the connection pool is established
        console.log("Server is running on http://localhost:3000");
    } catch (err) {
        console.error("Database connection error", err);
    }
});
