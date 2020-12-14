import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { MenuComponent } from './menu/menu.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelDetailComponent,
    LayoutComponent,
    HotelFormComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot ([
      {path: '', component: HotelsComponent},
      {path: 'detail/:hotelId', component: HotelDetailComponent},
      {path: 'add-hotel', component: HotelFormComponent},
      {path: 'edit-hotel/:id', component: HotelFormComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
