import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ImageService {

  constructor(private http: Http) { }
  getImages(): Observable<Image[]> {
    return this.http.get('http://localhost:8888/cursoangular/public/api/v1/images').map((response: Response) => response.json());
  }

  addImage(image: Object): Observable<image[]> {
    return this.http.post('http://localhost:8888/cursoangular/public/api/v1/images', image)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || { message: "Error del servidor" }));
  }

  getImage(id: String): Observable<image[]> {
    return this.http.get('http://localhost:8888/cursoangular/public/api/v1/images/' + id)
      .map((response: Response) => response.json());
  }
}
