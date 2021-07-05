import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria-read/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl: string  = environment.baseUrl;
  constructor(private http:HttpClient) { }

  findAll(): Observable<Categoria[]>{
    const url =  this.baseUrl + '/categorias';
    console.log(url);
    return this.http.get<Categoria[]>(url);
  }
}
