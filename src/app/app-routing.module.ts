import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio1conGRIDComponent } from './ejercicio1con-grid/ejercicio1con-grid.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { Ejercicio2conGRIDComponent } from './ejercicio2con-grid/ejercicio2con-grid.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { Ejercicio3conGRIDComponent } from './ejercicio3con-grid/ejercicio3con-grid.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';

const routes: Routes = [
  {path:'', redirectTo:'AppComponent', pathMatch:'full'},
  {path:'ejercicio1', component:Ejercicio1Component},
  {path:'ejercicio2', component:Ejercicio2Component},
  {path:'ejercicio3', component:Ejercicio3Component},
  {path:'ejercicio1grid', component:Ejercicio1conGRIDComponent},
  {path:'ejercicio2grid',component:Ejercicio2conGRIDComponent},
  {path:'ejercicio3grid', component:Ejercicio3conGRIDComponent},
  {path:'ejercicio4', component: Ejercicio4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
