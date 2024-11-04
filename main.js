import express from 'express'
import dotenv from 'dotenv'
import siteRoutes from './src/routes/siteRoutes.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api', siteRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})