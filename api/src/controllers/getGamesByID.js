const axios = require("axios")
const {APIKEY}= require("../routes/endPoints")
let url = `https://api.rawg.io/api/games?key=f75be4e2cb4544419da44cd68a192f24`
const {videogame}=require("../controllers/allVideoGames")