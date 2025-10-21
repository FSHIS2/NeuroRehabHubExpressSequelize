import { Component, OnInit } from '@angular/core';
import { ElementService } from '../services/element-service';
@Component({
  selector: 'app-my-elements',
  templateUrl: './my-elements.page.html',
  styleUrls: ['./my-elements.page.scss'],
  standalone: false
})
export class MyElementsPage implements OnInit {

  elements: any = []

  constructor(private elementService: ElementService) { }

  ngOnInit() {
    this.getAllElements();
  }

  getAllElements() {
    this.elementService.getElements().subscribe(response => {
      this.elements = response;
    });
  }
}
