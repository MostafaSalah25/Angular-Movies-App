import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchmovie'
})
export class SearchmoviePipe implements PipeTransform {

  transform( movies:any[] , word:string ): any {
    return movies.filter(  function (onemovie:any){ 

      return onemovie.original_title.toLowerCase().includes(word.toLowerCase());
    } )
  }

}
