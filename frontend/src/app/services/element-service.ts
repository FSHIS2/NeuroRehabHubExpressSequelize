import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  
  endPoint = "http://localhost:8080/api/elements";

  constructor(private httpClient: HttpClient) { }

  getElements(){
    return this.httpClient.get(this.endPoint);
  }

  // element-service.ts (reemplazar create)
  create(element: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("name", element.name);
    body.append("treatment", element.treatment);
    body.append("description", element.description);

    return this.httpClient.post(this.endPoint, body.toString(), { headers });
  }
}
