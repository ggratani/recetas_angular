import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'recipes',
    loadChildren: () => import('@modules/recipes/recipes.module').then(m => m.RecipesModule )
  },
  {
    path:'favorites',
    loadChildren: () => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule )
  },
  {
    path:'history2',
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule )
  },
  {
    path:'detail/:id',
    loadChildren: () => import('@modules/detail/detail.module').then(m => m.DetailModule )
  },
  {
    path:'admin',
    loadChildren: () => import('@modules/admin/admin.module').then(m => m.AdminModule ),
    // canActivate: [AdminGuard]
  },
  {
    path:'**',
    redirectTo: '/recipes'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
