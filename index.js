import express from 'express'
import bodyParser from 'body-parser'
import { v4 as uuidv4 } from 'uuid'
import userRouter from './router/user.js'

const app=express()
const PORT=5000
app.use(bodyParser.json())
app.use('/',userRouter)
app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`))