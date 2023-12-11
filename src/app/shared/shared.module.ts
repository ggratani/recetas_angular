import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { FilterListPipe } from './pipe/filter-list.pipe';
import { DetailModule } from '@modules/detail/detail.module';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    ImgBrokenDirective,
    FilterListPipe,
    PlayListBodyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    NavBarComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    ImgBrokenDirective,
    FilterListPipe,
    PlayListBodyComponent,
  ]
})
export class SharedModule { }
