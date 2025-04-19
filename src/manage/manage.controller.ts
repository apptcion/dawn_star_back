import { Controller, DefaultValuePipe, Get, Query } from '@nestjs/common';
import { ManageService } from './manage.service';

@Controller('manage')
export class ManageController {
    constructor(private readonly manageService:ManageService){}

    @Get('/getBanner')
    getBanner(@Query('type', new DefaultValuePipe('')) type: string){
        return this.manageService.getBanner(type)
    }
}
