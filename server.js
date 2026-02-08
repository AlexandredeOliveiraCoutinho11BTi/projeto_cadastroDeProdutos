
import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'

const app = express()

app.use(express.json())
app.use(cors())

const connection = mysql.createConnection({
    host: 'benserverplex.ddns.net',
    user: 'alunos',
    password: 'senhaAlunos',
    database: 'web_03mb'
})

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco:', err.message)
    } else {
        console.log('Conectado ao banco de dados com sucesso!')
    }
})


app.post('/products', (req, res) => {

    const { name, price, description, category } = req.body
    const query = 'INSERT INTO producuts_alexandre (name, price, description, category) VALUES (?, ?, ?, ?)'

    connection.query(query, [name, price, description, category], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao cadastrar', details: err.message })
        }
        return res.status(201).json({ message: 'Produto cadastrado com sucesso!' })
    })
})


app.get('/products', (req, res) => {
    const query = 'SELECT * FROM producuts_alexandre'

    connection.query(query, (err, results) => {
        if (err) {  
            return res.status(500).json({ error: 'Erro ao listar', details: err.message })
        }
        return res.json(results)
    })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})