import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { pohtosData } from '../models/photo';

@Injectable({
  providedIn: 'root'

})
export class PhotosService {

  constructor(private http: HttpClient) {


  }
  getPhotos(){
    return this.http.get<pohtosData[]>('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
  }
}
