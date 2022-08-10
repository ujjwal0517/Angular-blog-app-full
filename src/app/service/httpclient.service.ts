import { getLocaleDateFormat } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { getSafePropertyAccessString } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  private uri = "http://localhost:8080/post"
  constructor(private http: HttpClient) { }
  getPosts(){
    return this.http.get(this.uri)
  }
}
