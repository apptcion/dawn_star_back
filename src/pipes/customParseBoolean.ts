import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { stringify } from "querystring";

@Injectable()
export class customParseBooleanPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        return Boolean(value)
    }
}