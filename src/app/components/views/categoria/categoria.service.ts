import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria-read/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl: string  = environment.baseUrl;
  constructor(private http:HttpClient, private snake: MatSnackBar) { }

  findAll(): Observable<Categoria[]>{
    const url =  this.baseUrl + '/categorias';
    console.log(url);
    return this.http.get<Categoria[]>(url);
  }

  findById(id: String): Observable<Categoria>{
    const url = this.baseUrl + '/categorias/' + id;
    return this.http.get<Categoria>(url);
  }
  create(categoria:Categoria): Observable<Categoria>{
    const url = this.baseUrl + '/categorias';
    return this.http.post<Categoria>(url, categoria);
  }

  showMessage(mensagem: string): void{
    this.snake.open(mensagem, "Ok");
  }

  delete(id: String):Observable<void>{
    const url = this.baseUrl + '/categorias/' + id;
    return this.http.delete<void>(url);
  }

  update(categoria: Categoria):Observable<void>{
    const url = this.baseUrl + '/categorias/' + categoria.id;
    return this.http.put<void>(url, categoria)
  }
}
