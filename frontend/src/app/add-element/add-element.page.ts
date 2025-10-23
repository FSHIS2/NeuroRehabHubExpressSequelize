import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElementService } from '../services/element-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.page.html',
  styleUrls: ['./add-element.page.scss'],
  standalone: false
})
export class AddElementPage implements OnInit {

  elementForm: FormGroup;
  constructor(public formBuilder: FormBuilder,
    private elementService: ElementService,
    private route: Router
  ) {
    this.elementForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      treatment: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    })
   }

  ngOnInit() {
  }

  createElement() {
    if(this.elementForm.valid) {
      console.log('Formulario válido:', this.elementForm.value);
      this.elementService.create(this.elementForm.value).subscribe(response => {
        this.route.navigateByUrl("/my-elements");
      });
    } else {
      console.log('Formulario no válido');
    }
  }

  getFormControl(field: string) {
    return this.elementForm.get(field);
  }

}
