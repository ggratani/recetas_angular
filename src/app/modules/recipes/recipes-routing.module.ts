import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';

const routes: Routes = [
  {
    path:'',
    component: RecipesPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
