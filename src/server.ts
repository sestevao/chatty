import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.json({message: 'Ola NLW#05', })
})

app.post('/users', (req,res) => {
  return res.json({message: "Utilizador guardado com sucesso!", })
})

app.listen(3333, () => console.log('server is running...'))