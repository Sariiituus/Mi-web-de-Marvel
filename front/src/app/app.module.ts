import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmsComponent } from './pages/films/films.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    FooterComponent,
    HomeComponent,
    FilmsComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
