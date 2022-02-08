import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../model/employee.model';

@Pipe({
  name: 'idToName'
})
export class IdToNamePipe implements PipeTransform {

  transform(value: number, departments: Department[]): string | undefined {
    return departments?.find(x => x.id == value)?.name;
  }

}
