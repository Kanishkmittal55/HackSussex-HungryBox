const express = require('express')
const PORT = process.env.PORT;

const app = express()

app.get('/',(req,res) => {
    res.json({message:'Welcome to the Smart Shleves API'})
})

app.listen(PORT, ()=> console.log(`Server started on PORT ${PORT}`))