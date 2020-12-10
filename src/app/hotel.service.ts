import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://5fcf89501f2374001663092d.mockapi.io/hotels';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  getHotels(): Observable<any>{
    return this.http.get<any>(apiUrl);
  }
  getHotelById(hotelId: any): Observable<any>{
    let url = `${apiUrl}/${hotelId}`;
    return this.http.get<any>(url);
  }

  removeHotelById(hotelId: any): Observable<any>{
    let url = `${apiUrl}/${hotelId}`;
    return this.http.delete<any>(url);
  }

  addNewHotel(hotelObject: any): Observable<any>{
    return this.http.post<any>(apiUrl, hotelObject);
  }
  
  updateHotel(hotelObject: any): Observable<any>{
    let url = `${apiUrl}/${hotelObject.id}`;
    return this.http.put<any>(url, hotelObject);
  }
}
