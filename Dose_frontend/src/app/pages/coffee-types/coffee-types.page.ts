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

    let token:string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsInVzZXIiOiJHaW5vUGlubyIsImlhdCI6MTczMTM1MzE2OSwiZXhwIjoxNzQxMzUzMTY4fQ.E8Rhlk4ef84LYAlNjE8NFfke1UsmDsvhDT4x0aFBHEs";
    localStorage.setItem("token", token);
    
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
