import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginData = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private http:HttpService) {}

  login() {
    // console.log('Login data:', this.loginData);
    
    this.http.post('user/login', { mail:this.loginData.username, password:this.loginData.password })
    .subscribe((response: any) => {
      if(!response.error){
        localStorage.setItem("token", response.token);
        this.router.navigate(['/home']);

      }else{
        console.log()
        console.log("errata");
      }
    //TODO gestione password sbagliata

    },(error: any) => {
      console.error('Errore POST:', error)
    });
  }

  // Method to navigate to the SignUp page
  goToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
