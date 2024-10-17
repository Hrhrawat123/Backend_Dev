const express=require('express')
//require module js

const app=express()
const port=5000
//ports like in computere 65000 ports some free ports server listen  on some port
app.get('/',(req,res)=>{
    res.send('hello')
})
app.get('/twitter',(req,res)=>{
    res.send("your are logged in");

})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})