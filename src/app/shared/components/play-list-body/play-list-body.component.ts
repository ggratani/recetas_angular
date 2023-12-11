import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})

export class PlayListBodyComponent implements OnInit{

  @Input() recipes: Array<RecipeModel> = []
    
  constructor() {}

  ngOnInit(): void {

  }

}
