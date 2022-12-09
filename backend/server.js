const express= require('express')
const {notFound,errorHandler} = require('./middleware/errorMiddleware')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const app =express()
var cors = require('cors')
dotenv.config();
app.use(cors());
connectDB();
app.use(express.json())

app.get('/',(req,res)=>{
 res.send('không có cái api nào ở đây hết')
})
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT||5000
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}...`)
})
