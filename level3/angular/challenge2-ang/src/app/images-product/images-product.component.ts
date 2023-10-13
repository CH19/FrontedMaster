import { Component, OnInit } from '@angular/core';

import {pohtosData} from '../models/photo';
import { PhotosService} from '../services/photos.service'

// modulo necesario para importar objetos que utilizan o hacen peticiones http
import {HttpClientModule} from '@angular/common/http'
@Component({
  selector: 'app-images-product',
  templateUrl: './images-product.component.html',
  styleUrls: ['./images-product.component.css'],

})
export class ImagesProductComponent implements OnInit {

   AllPhotos: pohtosData[] = []

  constructor(public photoService: PhotosService){

  }

  ngOnInit(){
    // cuando el componente se cree se hace la peticion a los servicios http para obtener la data de las imagenes
    this.photoService.getPhotos().subscribe(photos =>{ this.AllPhotos = photos; console.log(this.AllPhotos);}, err => console.log(err))

  }
}
