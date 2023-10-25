import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Header2Component } from './componentes/header2/header2.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  // {
  //   path: 'main',
  //   component: Header2Component,
  // },
  // {
  //   path: '',
  //   redirectTo: './main',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '**',
  //   redirectTo: './main',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'products',
  //   component: ProductsComponent,
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
