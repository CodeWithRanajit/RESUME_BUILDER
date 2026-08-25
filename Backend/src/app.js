import express from "express";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import apiLimit from "./middlewares/rateLimiter.js";


const app = express();


// using helmet for better security
app.use(helmet());

// using cors
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

// using ratelimiter
app.use("/api", apiLimit);


// using body parser
app.use(express.json({
    limit: "100kb"
}));

app.use(express.urlencoded({
    extended: true,
    limit: "100kb"
}));

app.use(cookieParser());

app.use(compression());


// health check route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy",
    })
});



// import all routes
import healthcheckRouter from "./routes/healthcheck.routes.js";
import errorHandler from "./middlewares/errorHandler.js";
import userRouter from "./routes/user.routes.js";

// route declearation
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/auth/users", userRouter);



//error handler
app.use(errorHandler);

export default app;
