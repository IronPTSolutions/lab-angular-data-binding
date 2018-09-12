import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodFilter',
  pure: false
})
export class FoodFilterPipe implements PipeTransform {

  transform(foods: Object[], key: string, pattern: string): Object[] {
    if (!foods) {
      return [];
    }
    if (!pattern || !key) {
      return foods;
    }

    console.log(pattern);

    const filterPattern = new RegExp(pattern, 'i');
    return foods.filter(item => item[key].match(filterPattern));
  }

}
