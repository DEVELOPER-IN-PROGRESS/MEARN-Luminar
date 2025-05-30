import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path :'', component:AppComponent},
    {path :'register', component:RegisterComponent},
    { path: 'login', component:LoginComponent}
];