import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/in-memory-data.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroService } from "app/hero.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
