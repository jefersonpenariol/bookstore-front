import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria-read/categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.scss']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }
  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.categoria).subscribe((resposta) => {
      this.service.showMessage('Categoria Criada com Sucesso!');
      this.router.navigate(['categorias']);
    }, err => {
      for(let i = 0; i <  err.error.errors.length; i++){
       this.service.showMessage(err.error.errors[i].mensagem);
      }
    });
  }

  cancel():void{
    this.router.navigate(['categorias']);
  }
}
