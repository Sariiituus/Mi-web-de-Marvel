import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private httpClient: HttpClient) { }

  public filmData = {
    title: "",
    premiere: "",
    type: "",
    photo: "",
    score: "",
    id: ""
  }

  public clearFilm() {
    this.filmData = {
      title: "",
      premiere: "",
      type: "",
      photo: "",
      score: "",
      id:""
    }
  }

  public editItem(item:any){
    this.filmData = item
  }

  // Funcion para traer los films
  public getFilms() {
    return this.httpClient.get("http://localhost:3000/films")
  }

   // Funcion para crear un nuevo film
  public postFilm(newFilm: any) {
    return this.httpClient.post("http://localhost:3000/films", newFilm)
  }
  // Funcion para editar un film
  public editFilm (filmID: any, editedFilm: any){
    return this.httpClient.put("http://localhost:3000/films/" + filmID, editedFilm)
  } 
}

