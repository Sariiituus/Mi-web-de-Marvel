import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';



@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  public filmForm!: FormGroup;
  public newFilm = this.filmsService.filmData;
  public filmID = this.filmsService.filmData.id;
  


  // public contactForm: FormGroup;
  // public enviado: Boolean = false;

  constructor(private formBuilder : FormBuilder, private filmsService: FilmsService, private router: Router) {


    // this.contactForm = this.formBuilder.group({
    //   name: ['', [Validators.required, Validators.maxLength(20)]],
    //   email: ['', [Validators.required, Validators.email]],
    //   message: ['', [Validators.required, Validators.maxLength(140)]],
    // });
  }

  ngOnInit(): void {
    this.filmsService.clearFilm();
    this.filmForm = this.formBuilder.group({
      title: [this.newFilm.title, [Validators.required, Validators.maxLength(25)]],
      premiere: [this.newFilm.premiere, [Validators.required]],
      type: [this.newFilm.type, [Validators.required]],
      photo: [this.newFilm.photo, [Validators.required]],
      score: [this.newFilm.score, [Validators.required]],
    })


    this.filmForm.valueChanges.subscribe((changes) => {
      this.newFilm = changes;
      console.log(this.newFilm);
      console.log(this.filmForm.valid);
    })
  }


  public onSubmit() {
    if(this.filmID !== ""){
      //IMPORTANTE!!: poner subscribe porque si no no funciona el http
      this.filmsService.editFilm(this.filmID, this.newFilm).subscribe();
    } else {
      this.filmsService.postFilm(this.newFilm).subscribe();
      alert("Film creada correctamente");
    }

    this.filmForm.reset();

    this.router.navigate(["/films"])
  }

   

  // onSubmit(): void {
   /*  this.enviado = true;
    console.log(this.contactForm.get('name')!!.value);
    console.log(this.contactForm.get('email')!!.value);
    console.log(this.contactForm.get('message')!!.value);

  
    this.enviado = false; */
  }

