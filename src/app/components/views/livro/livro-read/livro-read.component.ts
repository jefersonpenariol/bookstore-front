import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.scss']
})
export class LivroReadComponent implements OnInit {

  displayedColumns: string[] = ["id", "titulo", "livros", "acoes"]; 

  livros: Livro[] = [];

  id_categoria: string = '';

  constructor(private service: LivroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_categoria = this.route.snapshot.paramMap.get('id_categoria')!;
    this.findAllByCategoriaId();
  }

  findAllByCategoriaId():void{
    this.service.findAllByCategoriaId(this.id_categoria).subscribe((resposta) => {
      this.livros = resposta;
    });
  }

  navegarParaLivroCreate():void{
    this.router.navigate(['categorias/' + this.id_categoria + '/livros/create'])
  }
}
