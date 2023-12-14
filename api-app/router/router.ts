const Express = require("express")
const router = Express.Router()


router.get("/",(req:any,res:any)=>{
      res.status(200).send("olá mundo")
})


module.exports= router