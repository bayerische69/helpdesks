import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import { connectDB } from './config/db.js';
import { connect } from 'mongoose';
import cookieParser from 'cookie-parser';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cookieParser());
app.use(express.json());

app.use(rateLimiter)

// router (endpoints)
app.use("/api/v1", routes)


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})
