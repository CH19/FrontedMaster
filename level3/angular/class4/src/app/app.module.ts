import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header2Component } from './componentes/header2/header2.component';
import { ProductsComponent } from './products/products.component';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { RoutesComponent } from './routes/routes.component';
const routes: Routes = [
  {
    path: 'main',
    component: Header2Component,
  },
  {
    path: '',
    redirectTo: './main',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: './main',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsComponent,
  }

];
@NgModule({
  declarations: [
    AppComponent,
    Header2Component,
    ProductsComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
