import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-coffe-type-card',
  templateUrl: './coffe-type-card.component.html',
  styleUrls: ['./coffe-type-card.component.scss'],
})

export class CoffeTypeCardComponent  implements OnInit {

  constructor() { }
  @Input() coffee!: { 
    name: string;
    origin: string; 
    process: string; 
    productor:string;
    harvest_date:string;
    roasting_day:string;
    roasting_degree:string,
    variety:string,
    region:string,
    altitude:number
  };


  ngOnInit() {}

}
