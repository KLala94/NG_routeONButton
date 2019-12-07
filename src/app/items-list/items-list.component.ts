import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Array } from '../id/Array';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {


  Items = Array;

  constructor(private httpService: HttpClient, private router: Router, private AR: ActivatedRoute) { }
  p = 1;
  ngOnInit() {
    //  this.httpService.get('./assets/ItemsArray.json').subscribe(
    //   data => {
    //     this.Items = data as string[];	 // FILL THE ARRAY WITH DATA.
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log(err.message);
    //   }
    // );

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

