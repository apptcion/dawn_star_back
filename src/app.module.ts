import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { ManageModule } from './manage/manage.module';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [LoginModule, ProductModule, AuthModule, ManageModule, BrandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}