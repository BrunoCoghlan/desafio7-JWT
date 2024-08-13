import { Router } from 'express'
import { getUser, setUser } from '../controllers/usuarios.js'
import { authToken } from '../middleware/authToken.js'

const usuarios = (Router())

usuarios.post('/', setUser)
usuarios.get('/', authToken, getUser)

export default usuarios
