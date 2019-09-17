import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ManhinhchinhComponent } from './manhinhchinh/manhinhchinh.component';
import { MenuComponent } from './menu/menu.component';
import { Menu2Component } from './menu2/menu2.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';

import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { GiohangComponent } from './giohang/giohang.component';
import { ChitietfComponent } from './chitietf/chitietf.component';
import { Lab3Component } from './lab3/lab3.component';

@NgModule({
  declarations: [
    AppComponent,
    ManhinhchinhComponent,
    MenuComponent,
    Menu2Component,
    Bai1Component,
    Bai2Component,
    Bai3Component,
    ProductsComponent,
    DetailComponent,
    GiohangComponent,
    ChitietfComponent,
    Lab3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,

    RouterModule.forRoot([
      // { path: "", component: Bai1Component },
      { path: 'page1', component: MenuComponent },
      { path: 'page1/bai1', component: Bai1Component },
      // 
      { path: 'page2', component: Menu2Component },
      { path: 'page3', component: Lab3Component },
      // { path: 'page2/homelab2', component: Homelab2Component },
      // { path: 'student', component: Homelab2Component },
      { path: 'student/:id', component: ChitietfComponent },
      // 
      { path: 'page1/bai2', component: Bai2Component },
      { path: 'page1/bai3', component: Bai3Component },
      { path: 'page1/bai4', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:productId', component: DetailComponent },
      { path: 'cart', component: GiohangComponent },
      // { path: '**', redirectTo: '', pathMatch: 'full' }

    ], { enableTracing: true })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
