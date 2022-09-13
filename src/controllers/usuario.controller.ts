import { Request, Response } from 'express';
import connection from '../db/connection';
import bcrypt from 'bcrypt'

export const addUsuario = async (req: Request, res: Response) => {

    const { nombre, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    connection.query('INSERT INTO usuarios set ?', { nombre:nombre, password: hashedPassword }, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json({
                msg: 'Add Usuario',
            })
        }
    })

}