import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-coffee-types',
  templateUrl: './coffee-types.page.html',
  styleUrls: ['./coffee-types.page.scss'],
})
export class CoffeeTypesPage implements OnInit {

  constructor(private http: HttpService) { }
  public coffeeTypes:any  =[]
  
  ngOnInit() {

    
    this.http.get('coffee_type/getAllCoffees', { })
    .subscribe((response: any) => {
      // console.log('Risposta POST con axios:', response);
      this.coffeeTypes=response.data
      console.log(this.coffeeTypes)
      localStorage.setItem("token", response.token);
    },(error: any) => {
      console.error('Errore POST:', error)
    });
  }

}
