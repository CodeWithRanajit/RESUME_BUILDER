import { ApiError } from "../utils/ApiError.js";


const errorHandler = (err, req, res, next) => {

    let error = err;


    if (!(error instanceof ApiError)) {

        error = new ApiError(
            error.statusCode || 500,
            error.message || "Internal Server Error"
        );
    }


    // Log complete error internally
    if (process.env.NODE_ENV === "production") {
        console.error(error);
    }


    const response = {
        success: false,
        message: error.message,
        data: null,
        errors: error.errors || []
    };


    // Only development gets stack
    if (process.env.NODE_ENV === "development") {
        response.stack = error.stack;
    }


    return res
        .status(error.statusCode)
        .json(response);
};


export default errorHandler;