import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { AdminService } from '@modules/admin/services/admin.service';
import { RecipeService } from '@modules/recipes/services/recipe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit, OnDestroy{
  showEditFields: boolean = false;
  listResults: Array<RecipeModel> = []
  // miFormulario = new FormGroup({
  //   id: new FormControl(''),
  //   nombre: new FormControl(''),
  //   description: new FormControl(''),
  //   imagePath: new FormControl(''),
  // });
  miFormulario: FormGroup = new FormGroup({});

  constructor(private recipeService: RecipeService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.miFormulario = new FormGroup(
      {
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(6)
        ]),
        description: new FormControl('', [
          Validators.required,
          Validators.minLength(10)
        ]),
        imagePath: new FormControl(''),
        ingredientes: new FormControl('', [
          Validators.required,
          Validators.minLength(6)
        ]),
        _id: new FormControl(''),
      }
    )
  }

  // Método para acceder a los campos del formulario
  get f() {
    return this.miFormulario.controls;
  }

  onSubmit() {
    if (this.miFormulario.valid) {
      console.log(this.miFormulario.value);
      if (this.showEditFields !== true){
        this.agregarRecipe()
      } 
      else {
        this.enviarEdicion()
      }
      this.miFormulario.reset();
    } 
    else {
      this.miFormulario.markAllAsTouched();
    }
  }

  async loadDataAll(): Promise<void> {
    const recipes = await this.recipeService.getAllRecipes$().toPromise();
    
    if (recipes !== undefined) {
      this.listResults = recipes;
    } else {
      console.error('No se pudieron cargar las recetas');
      this.listResults = [];
    }
  }

  editarReceta(recipe: any) {
    console.log(recipe)
    this.miFormulario.setValue({
      nombre: recipe.name,
      description: recipe.description,
      imagePath: recipe.imagePath,
      ingredientes: "",
      _id: recipe._id
    });
    console.log(this.miFormulario)
    this.showEditFields = true;
  }

  async enviarEdicion() : Promise<any> {
    try{
      const { nombre, description, ingredientes, imagePath, _id } = this.miFormulario.value
      await this.adminService.editRecipe$(nombre, description, ingredientes, imagePath, _id).toPromise()
      this.showEditFields = false;
      this.loadDataAll()
    }
    catch (error){
      console.log(error)
    }
  }

  async agregarRecipe() : Promise<any> {
    try{
      const { nombre, description, ingredientes, imagePath } = this.miFormulario.value
      await this.adminService.addRecipe$(nombre, description, ingredientes, imagePath).toPromise()
      
      this.showEditFields = false;
      this.loadDataAll()
    }
    catch(error:any){
      console.log(error.error.errors)
    }
    
  }

  async deleteRecipe(recipe:any) : Promise<any> {

    const confirmed = window.confirm('¿Estás seguro de que quieres eliminar esta pista?');
    console.log(recipe._id)
    if (confirmed) {
      try {
        // Llamada al servicio y espera por la promesa
        const resultado = await this.adminService.deleteRecipe$(recipe._id).toPromise();
        
        // Si la eliminación fue exitosa, puedes manejarlo aquí
        console.log('Receta eliminada:', resultado);
      } catch (error) {
        // Si ocurre un error, se muestra una ventana de alerta al usuario
        alert('Ocurrió un error al eliminar la receta.');
        console.error('Error al eliminar la receta:', error);
      }
      
      this.showEditFields = false;
      this.loadDataAll()
    }

  }

  ngOnDestroy(): void {
  }
}
