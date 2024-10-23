import express from 'express';
import { poolPromise } from '../utils/db.js'; 
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/adminlogin', async (req, res) => {
    try {
        const pool = await poolPromise;
        const { email, password } = req.body;

        // Update the query to use the correct column name for the email
        const result = await pool.request()
            .input('EmailID', sql.VarChar, email) // Use 'EmailID' to match your column name
            .input('Password', sql.VarChar, password)
            .query('SELECT * FROM HR_EMPLOYEE_PERSONAL_INFO WHERE EMAIL_ID = @EmailID AND password = @Password');

        if (result.recordset.length > 0) {
            const token = jwt.sign({ role: "admin", email }, "jwt_secret_key", { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ loginStatus: true });
        } else {
            return res.json({ loginStatus: false, Error: "wrong email or password" });
        }
    } catch (err) {
        console.error("Query error", err);
        return res.json({ loginStatus: false, Error: "Query error" });
    }
});

export { router as adminRouter };
