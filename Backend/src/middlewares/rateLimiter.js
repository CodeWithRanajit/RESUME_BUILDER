import { rateLimit } from "express-rate-limit";
import { RATE_LIMIT } from "../constants.js";

const apiLimit = rateLimit({
    windowMs: RATE_LIMIT.WINDOW_MS,
    limit: RATE_LIMIT.MAX_REQUESTS,
    message: "Too many requests, please try again later.",
})

export default apiLimit;