import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { LoginPage } from '../login/login.page';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignupPage {
  signUpData = {
    name: '',
    surname: '',
    nickname: '',
    email: '',
    birthDate: '',
    password: '',
    confirmPassword: '',
    position: '', // Stores user position as "latitude;longitude"
    picture: null // Stores the file for the profile picture
  };

  constructor(private alertController: AlertController, private http: HttpService, private router:Router) {}

  // Method for handling picture selection
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.signUpData.picture = file;
  }

  // Method to get user position
  async getPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log(coordinates);
      return `${coordinates.coords.latitude};${coordinates.coords.longitude}`;
    } catch (error:any) {
      if (error.code === 1) {
        console.error("Geolocation Error: Permission denied");
        return "";
      } else {
        console.error("Geolocation Error:", error.message);
       }
      return null; // Return null if location could not be retrieved
    }
  }

  // Method to validate passwords
  async validatePasswords() {
    if (this.signUpData.password !== this.signUpData.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Passwords do not match',
        buttons: ['OK']
      });
      await alert.present();
      return false;
    }
    return true;
  }

  // Submit handler
  async onSubmit() {
    const passwordsValid = await this.validatePasswords();
    if (!passwordsValid) return;

    this.signUpData.position = (await this.getPosition()) || "";
    // Process the sign-up data (e.g., send it to your backend)
    console.log('Sign-Up Data:', this.signUpData);


    this.http.post('user/signUp', { 
      mail:this.signUpData.email,
      username: this.signUpData.nickname,
      birthDate:this.signUpData.birthDate,
      name:this.signUpData.name,
      surname:this.signUpData.surname,
      position:this.signUpData.position, 
      password:this.signUpData.password })
    .subscribe((response: any) => {
      if(!response.error){
        // console.log(response)
        localStorage.setItem("token", response.token);
        console.log(localStorage.getItem("token"));
        
        
        this.router.navigate(['/home']);
      }else{
        console.log("Error: ",response.error);
      }

    },(error: any) => {
      console.error('Errore POST:', error)
    });
  }
  }

