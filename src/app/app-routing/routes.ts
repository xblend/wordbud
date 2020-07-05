import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LearnComponent } from '../learn/learn.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';




export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'learn', component: LearnComponent},
    {path: 'about', component: AboutusComponent},
    {path: 'contact', component: ContactusComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]