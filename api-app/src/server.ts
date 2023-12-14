

const Server=require('./app')
const PORT=process.env.Port || 3000

Server.listen(PORT,()=>{
    console.log("servidor rodando..."+PORT)
})


module.exports= Server