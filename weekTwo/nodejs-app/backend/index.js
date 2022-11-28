import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api', (req, res) => {
    return res.json({
        "message": "TALENT PLUS"
    })
})


app.listen(PORT, ()=> {
    console.log(`API running at port: ${PORT}`);
})
