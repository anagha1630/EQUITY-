import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RsuComponent } from './components/rsu/rsu.component';
import { EsopComponent } from './components/esop/esop.component';
import { VestComponent } from './components/vest/vest.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'rsu', component: RsuComponent },
  { path: 'esop', component: EsopComponent },
  { path: 'vest', component: VestComponent },
  { path: '**', redirectTo: '/login' }
];