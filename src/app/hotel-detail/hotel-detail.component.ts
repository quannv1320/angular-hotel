import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';


@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  hotelData = {
    id: 0,
    description:"",
    address: "",
    image: "",
    name: "",
    phone: ""
  };
  constructor(
    private hotelService: HotelService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(params => {
      let hotelId = params.get('hotelId');
      this.hotelService.getHotelById(hotelId).subscribe(data => {
        console.log(data);
        this.hotelData = data;
      })
    })
  }

  removeHotel(){
    let conf = confirm('Chắc chưa?');
    if(conf){
      this.hotelService.removeHotelById(this.hotelData.id).subscribe(data => {
        this. router.navigate(['']);
      });
    }
  }

}
