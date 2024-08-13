import { decode } from 'jsonwebtoken'
import db from '../database/db_connect.js'
import bcrypt from 'bcryptjs'

export const setUser = async ({ email, password, rol, lenguage }) => {
  const query = 'INSERT INTO usuarios (email, password, rol, lenguage ) VALUES ( $1, $2, $3, $4 )'// se evita retornar el mensaje para no exponer la clave.
  password = bcrypt.hashSync(password) // se hashea antes de guardar.
  await db(query, [email, password, rol, lenguage])
}

export const getUser = async (authorization) => {
  const [, token] = authorization.split(' ')
  const { email } = decode(token)
  const query = 'SELECT email, rol, lenguage FROM usuarios WHERE email = $1'
  const { rows } = await db(query, [email])
  return rows
}
