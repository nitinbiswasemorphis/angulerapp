import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroService } from './hero.service';
import { ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'products', component: HeroesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    HeroService,
    ProductService,
    /* . . . */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
