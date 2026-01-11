import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  endPoint = "http://localhost:8080/api/elements";

  constructor(private httpClient: HttpClient) { }

  getElements() {
    return this.httpClient.get(this.endPoint);
  }

  create(element: any, blob: any) {
  const formData = new FormData();

  formData.append('name', element.name);
  formData.append('treatment', element.treatment);
  formData.append('description', element.description);
  formData.append('file', blob); 

  return this.httpClient.post(this.endPoint, formData);
}

  delete(id: any) {
    return this.httpClient.delete(`${this.endPoint}/${id}`);
  }

  update(element: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("name", element.name);
    body.append("treatment", element.treatment);
    body.append("description", element.description);

    return this.httpClient.put(`${this.endPoint}/${element.id}`, body.toString(), { headers });
  }
}

