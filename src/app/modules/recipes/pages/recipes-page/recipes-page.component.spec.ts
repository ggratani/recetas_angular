import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesPageComponent } from './recipes-page.component';
import { RecipeService } from '@modules/recipes/services/recipe.service';

describe('RecipesPageComponent', () => {
  let component: RecipesPageComponent;
  let fixture: ComponentFixture<RecipesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesPageComponent]
    });
    fixture = TestBed.createComponent(RecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar el componente y cargar las recetas', () => {
    spyOn(component, 'loadDataAll');
    component.ngOnInit();
    expect(component.loadDataAll).toHaveBeenCalled();
  });

  it('debería realizar tareas de limpieza al destruirse el componente', () => {
    // Agrega expectativas según sea necesario para verificar la limpieza
    component.ngOnDestroy();
    // Ejemplo: expect(algo).toBeAlgo();
  });
  

});
