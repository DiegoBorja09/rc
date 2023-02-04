import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
    
  }
  highcharts1= Highcharts;

  chartOptions1: Highcharts.Options = {
    
    title: {
      text: 'Grafica de notas del estudiante en barra'
    },
        
    series: [{
      name: 'Porcentanje de Notas',
      colorByPoint: true,
      type: "column",
      data: [{
        name: 'Nota 1',
        y: 5,
        sliced: true,
        selected: true
      }, {
        name: 'Nota 2',
        y: 3
      }, {
        name: 'Nota 3',
        y: 4
      }]
    }]
    
  }

 
  highcharts2= Highcharts;

  chartOptions2: Highcharts.Options = {
    
    title: {
      
 text: 'Grafica de notas del estudiante en torta'
    },
        
    series: [{
      name: 'Porcentanje de Notas',
      colorByPoint: true,
      type: "pie",
      data: [{
        name: 'Nota 1',
        y: 5,
        sliced: true,
        selected: true
      }, {
        name: 'Nota 2',
        y: 3
      }, {
        name: 'Nota 3',
        y: 4
      }]
    }]
    
  }
}
