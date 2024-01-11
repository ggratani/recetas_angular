import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';


@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})

export class FavoritesPageComponent implements OnInit {
  recetas = [
    { _id: '1', nombre: 'Receta 1' },
    { _id: '2', nombre: 'Receta 2' },
  ];

  favorites$ = this.favoritesService.favorites$;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {}

  toggleFavorito(recetaId: string): void {
    if (this.isFavorite(recetaId)) {
      this.favoritesService.eliminarFavorito(recetaId);
    } else {
      this.favoritesService.agregarFavorito(recetaId);
    }
  }

  isFavorite(recetaId: string): boolean {
    const favorites = this.favoritesService.getFavorites();
    return favorites.includes(recetaId);
  }

  getNameRecipe(recetaId: string): string {
    const receta = this.recetas.find((r) => r._id === recetaId);
    return receta ? receta.nombre : '';
  }
}
