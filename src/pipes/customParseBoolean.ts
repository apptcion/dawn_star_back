import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class customParseBooleanPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        if(value == 'true'){
            return true
        }else{
            return false
        }
    }
}