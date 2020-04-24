const express = require('express')
const bodyparser = require('body-parser')
const gtts = require('gtts.js').gTTS

const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index')
})
app.set('view engine','ejs')

app.post('/',(req,res)=>{

    const text = req.body.text
    const  speech = new gtts(text)
    speech.save("output.mp3").then(()=>{
        res.download("output.mp3")
    })
    .catch((err)=>{
        console.log(err)
    })
})
app.listen(5000,()=>{
    console.log('server is hosted upon port 5000')

})