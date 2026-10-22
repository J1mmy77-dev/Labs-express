import { Request, Response, NextFunction } from 'express';
import { ICreateNewLabsDTO } from '../dtos/loan_Nlabs_areas.dtos';

const isCreateNewLabsDTO = (value: unknown): value is ICreateNewLabsDTO => {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        return false;
    }

    const loan = value as Record<string, unknown>;
    return (
        typeof loan.aula === 'string' && loan.aula.trim() !== '' &&
        typeof loan.nombreLaboratorio === 'string' && loan.nombreLaboratorio.trim() !== '' &&
        typeof loan.capacidadLaboratorio === 'string' && loan.capacidadLaboratorio.trim() !== '' 
    );
};

export const validateLoanNewLabs = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isCreateNewLabsDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos del laboratorio inválidos.'
        });
        return;
    }
    next();
};