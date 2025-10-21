import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  name: string = "Fourth advise";
  treatment: string = "General";
  description: string = "Take time to plan the sessions";

  constructor(private router: Router) { }

  goToMyElements() {
    this.router.navigateByUrl("/my-elements");
  }

}
