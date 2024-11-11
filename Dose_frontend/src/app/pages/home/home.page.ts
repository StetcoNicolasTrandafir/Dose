import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.post('coffee_type/prova', { }, {  })
      .subscribe((response: any) => {
        console.log('Risposta POST con axios:', response);
      },(error: any) => {
        console.error('Errore POST:', error)
      });
  }

}
