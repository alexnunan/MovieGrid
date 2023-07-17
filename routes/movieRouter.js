import express from "express"
import openMovieApiClient from "../apiclient.js"

const movieRouter = new express.Router()

movieRouter.get("/", async (req,res) => {
    try{
        const actorName = "jesse%20plemons"
        const actorID = await openMovieApiClient.getActorID(actorName)
        console.log(actorID)
        const actorFilmography = await openMovieApiClient.getActorFilmography(actorID)
        return res.status(200).json({ movies: actorFilmography})
    }  catch (err) {
        return res.status(500).json({ errors: err })
      }
})

export default movieRouter