import { Request, Response } from 'express';

export class UserController {

    public static getUsers = (req: Request, res: Response): void => {
        // TODO: llamar al servicio para obtener el listado completo y responder con los usuarios.
        res.status(501).json({
            success: false,
            message: 'El listado de usuarios todavía no está implementado.'
        });
    };

    public static createUser = (req: Request, res: Response): void => {
        // TODO: llamar al servicio con req.body y responder 201 con el usuario creado.
        res.status(501).json({
            success: false,
            message: 'El registro de usuarios todavía no está implementado.'
        });
    };

    public static getUserById = (req: Request, res: Response): void => {
        const { id } = req.params;
        // TODO: pasar id a la operación de consulta y responder con el usuario encontrado.
        res.status(501).json({
            success: false,
            message: `La consulta del usuario ${id} todavía no está implementada.`
        });
    };

    public static updateUser = (req: Request, res: Response): void => {
        const { id } = req.params;
        // TODO: pasar id y los campos parciales de req.body (rol, estado o contraseña) al servicio.
        res.status(501).json({
            success: false,
            message: `La actualización parcial del usuario ${id} todavía no está implementada.`
        });
    };

    public static deleteUser = (req: Request, res: Response): void => {
        const { id } = req.params;
        // TODO: pasar id a la operación de eliminación lógica (marcar como inactivo) y responder.
        res.status(501).json({
            success: false,
            message: `La eliminación lógica del usuario ${id} todavía no está implementada.`
        });
    };
}