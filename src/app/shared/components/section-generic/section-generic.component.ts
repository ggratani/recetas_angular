import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})

export class SectionGenericComponent implements OnInit {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'small'
  @Input() dataRecipes: Array<RecipeModel> = []

  
  constructor() {
    
  }

  ngOnInit(): void {
  }
}
