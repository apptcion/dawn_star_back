import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { stringify } from "querystring";

@Injectable()
export class CustomParseBooleanPipe implements PipeTransform {
  transform(value: string): boolean {
    return value.trim().toLowerCase() === 'true' || value === '1';
  }
}