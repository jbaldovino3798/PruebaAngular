import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../app/components/main/main.component';
import { DogAddComponent } from '../app/components/dog-add/dog-add.component';
import { DogListComponent } from '../app/components/dog-list/dog-list.component';
import { DogEditComponent } from '../app/components/dog-edit/dog-edit.component';

const routes: Routes = [
  {path : '', component: MainComponent},
  {path : 'main', component: MainComponent},
  {path : 'add', component: DogAddComponent},
  {path : 'list', component: DogListComponent},
  {path : 'edit', component : DogEditComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
