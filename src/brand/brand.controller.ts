import { Controller, DefaultValuePipe, Get, Query } from '@nestjs/common';
import { BrandService } from './brand.service';
import { customParseBooleanPipe } from 'src/pipes/customParseBoolean';

@Controller('brand')
export class BrandController {
    constructor(private readonly brandService:BrandService){}

    @Get('/getALL')
    getALL(@Query("getProd", new DefaultValuePipe(false), customParseBooleanPipe) getProd: boolean){
        return this.brandService.getALL(getProd);
    }

    @Get('/getALLProd')
    getALLProd(@Query('brand') brandName: string){
        return this.brandService.getALLProd(brandName)
    }

}
