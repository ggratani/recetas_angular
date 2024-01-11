import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<string[]>([]);
  favorites$: Observable<string[]> = this.favoritesSubject.asObservable();

  getFavorites(): string[] {
    return this.favoritesSubject.value;
  }

  agregarFavorito(recetaId: string): void {
    const favoritesActuales = this.favoritesSubject.value;
    if (!favoritesActuales.includes(recetaId)) {
      const nuevosFavoritos = [...favoritesActuales, recetaId];
      this.favoritesSubject.next(nuevosFavoritos);
    }
  }

  eliminarFavorito(recetaId: string): void {
    const favoritesActuales = this.favoritesSubject.value;
    const nuevosFavoritos = favoritesActuales.filter((id) => id !== recetaId);
    this.favoritesSubject.next(nuevosFavoritos);
  }
}
