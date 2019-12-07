import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ItemsListComponent } from '../items-list/items-list.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ItemInterface } from '../item';
import { Array } from './Array';
@Component({
  selector: 'app-id',
  template: `
  <div >
    <h1>{{Item.title}}</h1>
    <p>{{Item.text}}</p>
  </div>

`,
  styleUrls: ['./id.component.scss']
})
export class IdComponent implements OnInit {
  Item: ItemInterface;
  constructor(private httpService: HttpClient, private router: Router, private AR: ActivatedRoute) { }
  p: number = 1;
  ngOnInit() {

     this.AR.params.subscribe((p)=>{
          let id = p['id']
          let result = Array.filter.call(Array,(v)=>v.ID == id)
          if (result.length > 0) {
            this.Item = result[0]
          }
      })

  }
  routeid(i){
    // tslint:disable-next-line: no-unused-expression
    i === this.router.url;
  }
  write(i) {
    // tslint:disable-next-line: max-line-length
    document.write(`<h2>', i.title, '</h2>',
         '<p style="color: black;
         width:80%; text-align: justify;
         background-color: greenyellow;
         font-size: 30px; text-align: center;">', i.text, '</p>`);
  }
}
