import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})

export class SectionGenericComponent implements OnInit {
  @Input() title: string = ''
  @Input() mode: 'small' = 'small'
  @Input() dataRecipes: Array<RecipeModel> = []

  currentPage: number = 1;
  pageSize: number = 4;
  totalItems: number = 100; 
  maxSize: number = 4;
  
  constructor() {
    
  }

  ngOnInit(): void {
  }
}
