import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})



export class Header1Component {
  mercadoLibre = {
    logo: 'https://play-lh.googleusercontent.com/lO0-UT9yyZ55shpgJVKcBxYGd1MWwdsxoK1GjNcd9FkcYHX4yjjj5OqktP0O1rVoTwU=w240-h480',
    url: 'https://www.mercadolibre.com',
  }
  promo = '¡oferta!';
  data = [1,2,3,4,5];
  // user = {
  //   username: optionsUser.User,
  //   favs: optionsUser.MisFavoritos,
  // }
  // optionsMenu = {
  //   favs: optionsUser.Favoritos,
  //   notifications: optionsUser.Notificaciones,
  // }
  }

