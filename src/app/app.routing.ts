import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { HeroDetailComponent } from "app/hero-detail/hero-detail.component";
import { SearchComponent } from "app/search/search.component";

const appRoutes: Routes = [
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

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);