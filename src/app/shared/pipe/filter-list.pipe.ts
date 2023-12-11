import { Pipe, PipeTransform } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(value: Array<any>): RecipeModel[] {
    let unicos = new Set();
    let sinDuplucados = value.filter(receta => {
      const esDuplicado = unicos.has(receta.name);
      unicos.add(receta.name);
      return !esDuplicado;
    })

    return sinDuplucados
  }

}


