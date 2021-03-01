import express from 'express'; 
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {NotFound,ErrorHandler} from './middleware/errorMiddleware.js'

dotenv.config()
const app =express();

connectDB()

app.use(express.json())
app.get('/',(req,res)=>
{res.send('API is running ....')})


app.use('/api/products',productRoutes)
app.use('/api/users', userRoutes)

app.use(NotFound)

app.use(ErrorHandler)





const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))

