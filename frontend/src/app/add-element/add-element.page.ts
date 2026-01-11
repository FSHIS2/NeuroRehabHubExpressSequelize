import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElementService } from '../services/element-service';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.page.html',
  styleUrls: ['./add-element.page.scss'],
  standalone: false
})
export class AddElementPage implements OnInit {

  isSubmitted: boolean = false;
  capturedPhoto: string = "";
  elementForm: FormGroup;
  constructor(public formBuilder: FormBuilder,
    private elementService: ElementService,
    private photoService: PhotoService,
    private router: Router
  ) {
    this.elementForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      treatment: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    })
  }

  ionViewWillEnter() {
    this.elementForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
  }

  getFormControl(field: string) {
    return this.elementForm.get(field);
  }

  /*createElement() {
    if (this.elementForm.valid) {
      console.log('Formulario válido:', this.elementForm.value);
      this.elementService.create(this.elementForm.value).subscribe(response => {
        this.router.navigateByUrl("/my-elements");
      });
    } else {
      console.log('Formulario no válido');
    }
  }*/
  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath ? data.webPath : "";
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = "";
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.elementForm.valid) {
      console.log('Please provide all the required values!')
      return;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.elementService.create(this.elementForm.value, blob).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl("/my-elements");
      })
    }
  }
}


