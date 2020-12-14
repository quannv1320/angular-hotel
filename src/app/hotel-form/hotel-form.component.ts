import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {
  hotelForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    image: new FormControl('',[
      Validators.required,
      Validators.pattern('/\(gif|jpe?g|tiff|png|webp|bmp)$/i')
    ]),
    address: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),

    description: new FormControl('',[
      Validators.required
    ]),
    phone: new FormControl('',[
      Validators.required
    ])
  });

  get name() { return this.hotelForm.get('name'); };
  get address() { return this.hotelForm.get('address'); }



  constructor(
    private hotelService: HotelService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(prams => {
      let hotelId = prams.get('id');
      this.hotelService.getHotelById(hotelId).subscribe(data => {
        this.hotelForm.setValue(data);
      })
    })
  }

  saveHotel(){
    if(this.hotelForm.value.id == null){
      //thêm mới
      this.hotelService.addNewHotel(this.hotelForm.value).subscribe
      (data => {
        console.log(data);
        this.router.navigate(['']);
      })
    }else{
      //cập nhật
      this.hotelService.updateHotel(this.hotelForm.value).subscribe
      (data => {
        console.log(data);
        this.router.navigate(['']);
      })
    }
  }

}
