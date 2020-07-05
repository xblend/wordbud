import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LearnComponent } from '../learn/learn.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { BasicComponent } from '../basic/basic.component';
import { IntermediateComponent } from '../intermediate/intermediate.component';
import { AdvanceComponent } from '../advance/advance.component';




export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'learn', component: LearnComponent},
    {path: 'about', component: AboutusComponent},
    {path: 'contact', component: ContactusComponent},
    {path: 'learn/basic', component: BasicComponent},
    {path: 'learn/intermediate', component: IntermediateComponent},
    {path: 'learn/advance', component: AdvanceComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]