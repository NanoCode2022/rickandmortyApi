import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rickandmorty-practica';
  constructor(private route:Router){}
  onClick(){
    this.route.navigateByUrl('/home')
  }

  onCards(){
    this.route.navigateByUrl('/characters')
  }
}
