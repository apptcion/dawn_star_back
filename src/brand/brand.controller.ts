import { Controller, Get, Query } from '@nestjs/common';
import { BrandService } from './brand.service';

@Controller('brand')
export class BrandController {
    constructor(private readonly brandService:BrandService){}

    @Get('/getALL')
    getALL(){
        return this.brandService.getALL();
    }

    @Get('/getALLProd')
    getALLProd(@Query('brand') brandName: string){
        return this.brandService.getALLProd(brandName)
    }

}
