import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-coffee-types',
  templateUrl: './coffee-types.page.html',
  styleUrls: ['./coffee-types.page.scss'],
})
export class CoffeeTypesPage implements OnInit  {

  constructor(private http: HttpService) { }
  ngOnInit(): void {
  //  console.log("pd");
  }
  public coffeeTypes:any  =[]
  
  ionViewWillEnter() {
    console.log("eeeeeeeee");
    
    this.http.get('coffee_type/getMyCoffees', { })
    .subscribe((response: any) => {
      // console.log('Risposta POST con axios:', response);
      this.coffeeTypes=response.data
      console.log(this.coffeeTypes)
      // localStorage.setItem("token", response.token);
    },(error: any) => {
      console.error('Errore POST:', error)
    });
  }

}
