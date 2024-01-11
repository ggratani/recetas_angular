import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from '@core/models/recipe.model';
import { SearchDetailService } from '@modules/detail/services/search-detail.service';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})

export class DetailPageComponent {
  constructor(private route: ActivatedRoute, private searchDetail : SearchDetailService) {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.receiveData(id)
      // console.log(this.recipe)
    });
  }

  recipe: any = {}
  isLoading: boolean = true;

  async receiveData(event: string): Promise<void> {
    console.log(event);
    const data = await firstValueFrom(this.searchDetail.searchById$(event));
    this.recipe = data[0];
    this.isLoading = false
    console.log("filtro",this.recipe);
  }
  
}
