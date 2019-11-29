import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
@Pipe({
  name: 'route'
})
export class RoutePipe implements PipeTransform {
  constructor( private router: Router) { }
  transform(value: any, ...args: any[]): any {
    return value === this.router.url;
  }

}
