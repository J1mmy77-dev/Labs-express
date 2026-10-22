import { Request, Response, NextFunction } from 'express';
import { ICreateUsuarioDTO } from '../dtos/loanUsuarios.dtos';

const isCreateUsuarioDTO = (value: unknown): value is ICreateUsuarioDTO => {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        return false;
    }

    const loan = value as Record<string, unknown>;
    return (
        typeof loan.aula === 'string' && loan.aula.trim() !== '' &&
        typeof loan.nombreUsuario === 'string' && loan.nombreUsuario.trim() !== '' &&
        typeof loan.contraseñaUsuario === 'string' && loan.contraseñaUsuario.trim() !== '' &&
        typeof loan.rolUsuario === 'string' && loan.rolUsuario.trim() !== ''
    );
};

export const validateLoanUsuarios = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isCreateUsuarioDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos del usuario inválidos.'
        });
        return;
    }
    next();
};