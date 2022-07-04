import { FilmsService } from './../../services/films.service';
import { FilmsInterface } from './../../models/films.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  public filmList: FilmsInterface[] = [];

  constructor(private filmsService: FilmsService, private router: Router) { }

  ngOnInit(): void {
    this.filmsService.getFilms().subscribe((data:any) => {
      this.filmList = data
    })
  }

  editFilm(film: any) {
    this.filmsService.editItem(film);
    this.router.navigate(["/gestion"]);
  }

}
