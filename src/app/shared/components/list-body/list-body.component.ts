import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';

@Component({
  selector: 'app-list-body',
  templateUrl: './list-body.component.html',
  styleUrls: ['./list-body.component.css']
})

export class ListBodyComponent implements OnInit{

  @Input() recipes: Array<RecipeModel> = []
    
  constructor() {}

  ngOnInit(): void {

  }

}
