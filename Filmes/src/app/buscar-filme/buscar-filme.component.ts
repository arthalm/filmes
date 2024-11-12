import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmeService } from '../filme.service';
import { Filme } from '../model/filme';

@Component({
  selector: 'app-buscar-filme',
  templateUrl: './buscar-filme.component.html',
  styleUrl: './buscar-filme.component.css'
})
export class BuscarFilmeComponent {

  formBuscaFilme: FormGroup;
  filme: Filme | undefined;

  constructor(private fb: FormBuilder, private fs: FilmeService) {
    this.formBuscaFilme = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]]
    });

    this.filme = undefined;
  };

  buscar() {
    const titulo = this.formBuscaFilme.value.titulo;
    this.filme = this.fs.buscarFilmePorTitulo(titulo);
  };
};
