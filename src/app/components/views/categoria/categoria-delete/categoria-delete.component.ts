import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../categoria-read/categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.scss']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao:''
  }

  constructor(private service: CategoriaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById():void{
    this.service.findById(this.categoria.id!).subscribe((resposta) =>{
      this.categoria = resposta;
    });
  }
}