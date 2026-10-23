import { Request, Response, NextFunction } from 'express';
import { ICreateEquipmentDTO } from '../dtos/equipment.dto';

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim() !== '';

const isPositiveInteger = (value: unknown): value is number =>
  typeof value === 'number' && Number.isInteger(value) && value > 0;

const isCreateEquipmentDTO = (
  value: unknown
): value is ICreateEquipmentDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const equipment = value as Record<string, unknown>;
  return (
    isNonEmptyString(equipment.nombre) &&
    isNonEmptyString(equipment.marca) &&
    isNonEmptyString(equipment.serial) &&
    isPositiveInteger(equipment.ambienteId) &&
    isNonEmptyString(equipment.estadoOperativo)
  );
};

export const validateCreateEquipment = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isCreateEquipmentDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos del equipo inválidos.'
    });
    return;
  }

  next();
};
