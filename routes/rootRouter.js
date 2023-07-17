import express from "express"
import movieRouter from "./movieRouter.js";

const rootRouter = new express.Router()

rootRouter.use("/api/v1/movies", movieRouter);



export default rootRouter