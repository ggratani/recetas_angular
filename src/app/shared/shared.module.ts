import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardComponent } from './components/card/card.component';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { FilterListPipe } from './pipe/filter-list.pipe';
import { DetailModule } from '@modules/detail/detail.module';
import { ListBodyComponent } from './components/list-body/list-body.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SectionGenericComponent,
    CardComponent,
    ImgBrokenDirective,
    FilterListPipe,
    ListBodyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    NavBarComponent,
    SectionGenericComponent,
    CardComponent,
    ImgBrokenDirective,
    FilterListPipe,
    ListBodyComponent,
  ]
})
export class SharedModule { }
