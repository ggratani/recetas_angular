import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {

  @Input() mode: 'small' | 'big' = "small";
  @Input() recipe!: RecipeModel;


  constructor(private router: Router) {

  }

  ngOnInit(): void {
    
  }

  mostrarDetalle(recipe: any) {
    console.log(recipe._id)
    this.router.navigate(['detail', recipe._id])
  }

}
