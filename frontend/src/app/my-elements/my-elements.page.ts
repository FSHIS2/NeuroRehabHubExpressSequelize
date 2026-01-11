import { Component, OnInit } from '@angular/core';
import { ElementService } from '../services/element-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-elements',
  templateUrl: './my-elements.page.html',
  styleUrls: ['./my-elements.page.scss'],
  standalone: false
})
export class MyElementsPage {

  elements: any = []

  constructor(private elementService: ElementService, private router: Router) { }

  ionViewWillEnter() {
    this.getAllElements();
  }

  getAllElements() {
    this.elementService.getElements().subscribe(response => {
      this.elements = response;
    });
  }

  deleteElement(id: any) {
    this.elementService.delete(id).subscribe(response => {
      this.getAllElements();
    })
  }

  updateElement(id: any) {
    this.elementService.update(id).subscribe(response => {
      this.getAllElements();
    })
  }

  addElements() {
    this.router.navigateByUrl("/add-element");
  }

  goHome() {
    this.router.navigateByUrl("/home");
  }
}
