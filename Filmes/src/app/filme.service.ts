import { Injectable } from '@angular/core';
import { Filme } from './model/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private filmes = [{
    Title: 'Batman',
    Year: '1989',
    Director: 'Tim Burton',
    Genre: 'Ação, Aventura',
    Country: 'EUA',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYzZmZWViM2EtNzhlMi00NzBlLWE0MWEtZDFjMjk3YjIyNTBhXkEyXkFqcGc@._V1_SX300.jpg'
  }, {
    Title: 'A Substância',
    Year: '2024',
    Director: 'Coralie Fargeat',
    Genre: 'Drama, Horror',
    Country: 'Reino Unido',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZDQ1NGE5MGMtYzdlZC00ODExLWJlMDMtNWU4NjA5OWYwMDEwXkEyXkFqcGc@._V1_SX300.jpg'
  }, {
    Title: "Ainda Estou Aqui",
    Year: '2024',
    Director: 'Walter Salles',
    Genre: 'Biografia, Drama, História',
    Country: 'Brasil',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNjY3NzMzYWItNTZiNi00YzZjLWJiOTMtYmVmN2MzZTlmOGEwXkEyXkFqcGc@._V1_SX300.jpg'
  }]

  constructor() { }

  buscarFilmePorTitulo(titulo: string): Filme | undefined {
    return this.filmes.find(f => f.Title.toLowerCase() === titulo.trim().toLowerCase())
  }
}
