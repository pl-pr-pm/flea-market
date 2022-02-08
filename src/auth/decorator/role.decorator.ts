import { SetMetadata } from '@nestjs/common';

// 認可対象のロールを受け取って保存する
export const Role = (...statuses: string[]) =>
  SetMetadata('statuses', statuses); // Key: Value
