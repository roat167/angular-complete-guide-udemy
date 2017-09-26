import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // changing the input of the pipe will trigger recalculation
  // changing the data won't trigger the pipe 
  // (This is angular behavior for performance matter, by not rerunning everytime the data on the page changes)
  // you can reinforce this behavior, but you becarefull of perform
  // using 'pure:false' in pipe property will change the behavior
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArr = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArr.push(item);
      }
    }
    return resultArr;
  }

}
