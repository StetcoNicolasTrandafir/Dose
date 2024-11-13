import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profile', url: '/profile', icon: 'mail' },
    { title: 'Home', url: '/home', icon: 'paper-plane' },
    { title: 'Agenda', url: '/coffee-types', icon: 'heart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router:Router) {}

  logout(){
    localStorage.setItem("token", "")
    this.router.navigate(['/login']);
  }
}
