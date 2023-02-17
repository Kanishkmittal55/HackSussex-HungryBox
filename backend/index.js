const express = require('express')
const colors= require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db')
const app = express()

// Connect to Database
connectDB()

app.use(express.json())
 

app.get('/',(req,res) => {
    res.status(200).json({message:'Welcome to the Smart Shleves API'})
})

// Routes
app.use('/api/users',require('./Routes/userRoutes'))

app.use(errorHandler)


app.listen(PORT, ()=> console.log(`Server started on PORT ${PORT}`.yellow))