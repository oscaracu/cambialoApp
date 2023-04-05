import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword, IsUrl } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsStrongPassword()
    password: string;

    @IsNotEmpty()
    @IsString()
    nombre_completo: string;

    @IsUrl()
    foto_perfil: string;

    @IsString()
    direccion: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    telefono: string

}
