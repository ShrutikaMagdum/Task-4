import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { ChartComponent } from "./chart/chart.component";


const routes : Routes =[
   
    { path : 'chart', component : ChartComponent},
    
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}