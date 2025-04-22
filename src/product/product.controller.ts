import { Controller, DefaultValuePipe, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private readonly productService:ProductService){}

    @Get('/getALL')
    getALL(@Query('type', new DefaultValuePipe(null)) type: string | null){
        return this.productService.getALL(type)
    }

    @Get('/search')
    search(@Query('keyword') keyword: string){
        return this.productService.search(keyword)
    }

    @Get("/getInfo")
    getInfo(@Query('id') id: string){
        return this.productService.getOne(id)
    }
}