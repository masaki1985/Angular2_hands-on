import { NgModule } from '@angular/core';
//import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { HeroDetailComponent } from "app/hero-detail/hero-detail.component";
import { SearchComponent } from "app/search/search.component";

const routes: Routes = [
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {};