import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

