const { Router } = require('express');

const {getAllGameshandler} = require("../handlers/allVideoGamesHandler");
const {getVideogameById}=require("../handlers/videoGamesByID")




const router = Router();


// router.get('/videogames', async (req, res)=>{

//     res.send("hola")

// })


router.get ('/videogames', getAllGameshandler)//get 
module.exports = router;

router.get ('/:id', getVideogameById) //get 
module.exports = router;


// router.get ('/videogames/name?', getvideoGamesByName) //get 
// module.exports = router;

// router.post ('/videogames', createGame) //post, by body
// module.exports = router;

// router.get ('/genres', getAllGenres) //get in api
// module.exports = router;
