import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogAddComponent } from './components/dog-add/dog-add.component';
import { DogListComponent } from './components/dog-list/dog-list.component';

import { DataService} from './services/data.service';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DogEditComponent } from './components/dog-edit/dog-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DogAddComponent,
    DogListComponent,
    MainComponent,
    HeaderComponent,
    DogEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
