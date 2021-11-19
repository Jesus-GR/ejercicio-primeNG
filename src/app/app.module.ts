import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*************Importaciones de primeNG *******************************/
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {PanelModule} from 'primeng/panel';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import {CardModule} from 'primeng/card';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import {ChartModule} from 'primeng/chart';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { ChipModule } from 'primeng/chip';
import { DonutComponent } from './donut/donut.component';
import { RadarChartDemoComponent } from './radar-chart-demo/radar-chart-demo.component';
import { Ejercicio1conGRIDComponent } from './ejercicio1con-grid/ejercicio1con-grid.component';
import { Ejercicio2conGRIDComponent } from './ejercicio2con-grid/ejercicio2con-grid.component';
import { Ejercicio3conGRIDComponent } from './ejercicio3con-grid/ejercicio3con-grid.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';
import {TableModule} from 'primeng/table';





@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component,
    DonutComponent,
    RadarChartDemoComponent,
    Ejercicio1conGRIDComponent,
    Ejercicio2conGRIDComponent,
    Ejercicio3conGRIDComponent,
    Ejercicio4Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ToolbarModule,
    PanelModule,
    CardModule,
    ChartModule,
    AvatarModule,
    AvatarGroupModule,
    ChipModule,
    TableModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
