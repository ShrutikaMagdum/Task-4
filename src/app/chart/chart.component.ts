import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent  {
  
    value1: number = 0;
    value2: number = 0;
    chartData: any;
    totalErrors: string = '';
    data: any;
    options: any;
    
    onValueChange(){
        if(this.value1 + this.value2 > 100){
          this.totalErrors = 'Incorrect Value';
          }else{
            this.totalErrors = '';
          if(this.value1){
            this.value2 = 100 - this.value1;
          }else if(this.value2){
            this.value1 = 100 - this.value2;
          }
       }
    }
          
  generateChart(){

    this.data = {
    labels: ['Box1', 'Box2'],
    datasets: [
        {
          data: [this.value1, this.value2],
          backgroundColor: ['#ee6cb6','#186395'],
          hoverBackgroundColor: ['#ee6cb6','#186395']
        }
      ]
    }
  }
}

                    
                    