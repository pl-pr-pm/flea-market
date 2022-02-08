import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core'; // decoratorで取得いｓたメタデータを取得するもの
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredStatuses = this.reflector.get<string[]>(
      'statuses',
      context.getHandler(),
    );
    if (!requiredStatuses) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    return requiredStatuses.some((status) => user.status.includes(status)); // userのstatusがメタデータにん保存されているいずれかのstatusと一致していれば、実行を許可
  }
}
