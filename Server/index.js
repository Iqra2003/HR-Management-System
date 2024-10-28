import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoute.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173", // Update this to match your frontend's URL
    methods: ['GET', 'POST', 'PUT'],
    credentials: true // Allow credentials if you need them (like cookies)
}));

app.use(express.json());
app.use('/auth', adminRouter);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
