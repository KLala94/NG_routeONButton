import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ItemsListComponent } from './items-list/items-list.component';

//forms
import { FormsModule }    from '@angular/forms';
//router
import { AppRoutingModule } from './app-routing.module';
//http
import { HttpClientModule } from '@angular/common/http';
//mat angular material
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
import { IdComponent } from './id/id.component';
import { RoutePipe } from './route.pipe';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ItemsListComponent,
    FooterComponent,
    IdComponent,
    RoutePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
