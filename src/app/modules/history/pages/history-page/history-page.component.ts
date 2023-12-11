import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { SearchService } from '@modules/history/services/search.service';
import { RecipeService } from '@modules/recipes/services/recipe.service';
import { Observable, of } from 'rxjs';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})

export class HistoryPageComponent implements OnInit {
  listResults: Array<RecipeModel> = []

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  async receiveData(event: string): Promise<void> {
    console.log(event);
    const data = await firstValueFrom(this.searchService.searchRecipes$(event));
    this.listResults = data;
    console.log("filtro",this.listResults);
  }

}