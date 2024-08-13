import Express from 'express'
import cors from 'cors'
import { usuarios, login, error } from './router/index.js'
import morgan from 'morgan'

const app = Express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(Express.json())
app.use(morgan('dev'))

app.disable('x-powered-by')

app.use('/usuarios', usuarios)
app.use('/login', login)
app.use('*', error)

app.listen(PORT, () => console.log(`Informacion de la API:\nRuta Login : http://localhost:${PORT}/login\nRuta Usuarios : http://localhost:${PORT}/Usuarios`))
