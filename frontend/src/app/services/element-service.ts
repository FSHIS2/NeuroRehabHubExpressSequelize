import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  
  endPoint = "http://localhost:8080/api/elements";

  constructor(private httpClient: HttpClient) { }

  getElements(){
    return this.httpClient.get(this.endPoint);
  }
}
