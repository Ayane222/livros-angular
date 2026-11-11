import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora';
import { ControleLivrosService } from '../controle-livros';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.html',
  styleUrls: ['./livro-dados.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro();
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    if (this.editoras.length > 0) {
      this.livro.codEditora = this.editoras[0].codEditora;
    }
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n').filter(a => a.trim() !== '');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}
