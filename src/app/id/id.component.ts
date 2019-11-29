import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class IdComponent implements OnInit {

  Items: string[] | any;
  constructor(private httpService: HttpClient, private router: Router, private AR: ActivatedRoute) { }
  p: number = 1;
  ngOnInit() {
     this.httpService.get('./assets/ItemsArray.json').subscribe(
      data => {
        this.Items = data as string[];	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );

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
