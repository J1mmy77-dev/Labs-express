import { Router, Request, Response } from "express"

export class LoanController{
    public static CreateLoan = (req:Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'El registro de prestamos todavia no esta implementado'
        });
    };

    public static getLoansByFilter = (req: Request, res: Response): void => {
        // TODO: tomar los filtros de req.query, llamar al servicio y responder con los resultados.
        res.status(501).json({
        success: false,
        message: 'La consulta del historial todavía no está implementada.'
        });
    };

    public static getLoanById = (req: Request, res: Response): void => {
        const { id } = req.params;
        // TODO: pasar id a la operación de consulta y responder con el préstamo encontrado.
        res.status(501).json({
        success: false,
        message: `La consulta del préstamo ${id} todavía no está implementada.`
        });
    };

    public static acceptLoanInventory = (req: Request, res: Response): void => {
        const { id } = req.params;
        // TODO: pasar id a la operación de aceptación y responder con el resultado.
        res.status(501).json({
        success: false,
        message: `La aceptación del préstamo ${id} todavía no está implementada.`
        });
    };

    public static getLoansUsers = (req: Request, res: Response): void => {
        // TODO: pasar id a la operación de aceptación y responder con el resultado.
        res.status(200).json({
        success: true,
        message: `lista de usuarios `,
        perfil_estudiantes: [
            {user: `pedro`, id: `102039490`},
            {user: `sanchez`, id: `3920384829`}
        ], 
        perfil_profesores: [],
        perfil_administrador: []
        
        });
    };

    public static addNewUser = (req: Request, res: Response): void => {
        res.status(501).json({
        success: false,
        message: `Falta la implementacion del formulario para registro`
        });
    };

    public static getUserById = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
        success: false,
        message: `Usuario no encontrado: ${id}`
        });
    };

    public static updateUser = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
        success: false,
        message: `Usuario no encontrado para actualizar: ${id}`
        });
    };

    public static deleteUser = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
        success: false,
        message: `Usuario no encontrado para eliminar: ${id}`
        });
    };

    public static getListLabs = (req: Request, res: Response): void => {

        res.status(501).json({
        success: false,
        message: `Lista no encontrada de laboratorios y espacios fisicos`
        });
    };

    public static postLabs = (req: Request, res: Response): void => {

        res.status(501).json({
        success: false,
        message: `Formulario de registro no encontrado`
        });
    };

    public static updateLabs = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
        success: false,
        message: `Laboratorio o Espacio no encontrado: ${id}`
        });
    };

    public static newGroupLab = (req: Request, res: Response): void => {
        
        res.status(501).json({
        success: false,
        message: `Formulario de registro para equipo no encontrado`
        });
    };

    public static listGroupExists = (req: Request, res: Response): void => {
        
        res.status(501).json({
        success: false,
        message: `Lista de grupos existentes en los laboratorios no encontrada`
        });
    };

    public static updateGroup = (req: Request, res: Response): void => {
        const { id } = req.params;
        res.status(501).json({
        success: false,
        message: `Formulario de actualizacion no encontrado: ${id}`
        });
    };
}