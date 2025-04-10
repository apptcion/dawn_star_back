import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { ManageModule } from './manage/manage.module';
import { BrandModule } from './brand/brand.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    LoginModule, ProductModule, AuthModule, ManageModule, BrandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}