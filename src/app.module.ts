import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ItemsModule, ConfigModule.forRoot(), TypeOrmModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
