import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserStatus } from '../user-status.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(16)
  @MinLength(4)
  @IsString()
  username: string;
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(UserStatus)
  status: UserStatus;
}
