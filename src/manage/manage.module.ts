import { Module } from '@nestjs/common';
import { ManageController } from './manage.controller';
import { ManageService } from './manage.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Banner, BannerSchema } from 'src/schema/banner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Banner.name, schema: BannerSchema}
    ])
  ],
  controllers: [ManageController],
  providers: [ManageService]
})
export class ManageModule {}
