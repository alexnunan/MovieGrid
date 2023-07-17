import got from 'got'

class openMovieApiClient {
    static async getActorID(actorName){
        try{
            const url = `https://api.tmdb.org/3/search/person?&query=${actorName}`
            const apiResponse = await got(url)
            const responseBody = JSON.parse(apiResponse.body)
            const actorID = responseBody.results.id
            return actorID
        } catch (error) {
            return { error: error.message };
          }
    }

    static async getActorFilmography(actorID){
        try{
            const url = `https://api.themoviedb.org/3/person/${actorID}/movie_credits?`
            const apiResponse = await got(url)
            const responseBody = JSON.parse(apiResponse.body)
            const actorFilmography = [] 
            responseBody.cast.map((movie) => {
                actorFilmography.push(movie.title)
            })
            return actorFilmography
        }  catch (error) {
            return { error: error.message };
          }
    }
}

export default openMovieApiClient