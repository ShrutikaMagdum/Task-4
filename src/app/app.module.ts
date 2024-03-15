import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { ChartModule } from 'primeng/chart';


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChartComponent } from "./chart/chart.component";
 
@NgModule({
    declarations:[
        AppComponent,
        HeaderComponent,
        ChartComponent,
    ],
    imports : [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ChartModule
    ],
    providers: [
  ],
    bootstrap: [AppComponent],
})
export class AppModule {}