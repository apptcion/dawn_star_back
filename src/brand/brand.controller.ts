import { Controller, Get, Query } from '@nestjs/common';
import { BrandService } from './brand.service';

@Controller('brand')
export class BrandController {
    constructor(private readonly brandService:BrandService){}

}
