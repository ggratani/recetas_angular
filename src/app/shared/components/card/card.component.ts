import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() mode: 'small' = "small";
  @Input() recipe!: RecipeModel;


  constructor(private router: Router) {

  }

  ngOnInit(): void {
    
  }

  mostrarDetalle(recipe: any) {
    console.log(recipe)
    console.log(recipe._id)
    this.router.navigate(['detail', recipe._id])
  }

}
