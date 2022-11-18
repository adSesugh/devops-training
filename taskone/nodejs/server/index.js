import express from "express"
import mysql from 'mysql2'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT | 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const db = mysql.createPool({
    host: 'db', // the host name MYSQL_DATABASE: node_mysql
    user: 'root', // database user MYSQL_USER: MYSQL_USER
    password: 'Pass@123', // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
    database: 'books' // database name MYSQL_HOST_IP: mysql_db
})

app.get('/api', (req, res) => {
    res.json({
        'message': 'TALENT PLUS'
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})