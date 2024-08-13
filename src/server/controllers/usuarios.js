import * as psql from '../models/usuarios.js'

export const setUser = (req, res) => {
  psql.setUser(req.body)
    .then(() => res.status(201).json({ status: true, code: 201, message: 'Creado con exito' }))
    .catch((error) => res.status(409).json({ status: false, code: 409, message: `usuario existe ${error}` }))
}

export const getUser = (req, res) => {
  psql.getUser(req.header('Authorization'))
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json({ status: false, code: 400, message: err }))
}
