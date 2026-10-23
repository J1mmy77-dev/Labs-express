export type UserRole = 'estudiante' | 'docente' | 'administrador';

export interface CreateUserDto {
  nombre: string;
  correo: string;
  documento: string;
  rol: UserRole;
  contrasena: string;
}
