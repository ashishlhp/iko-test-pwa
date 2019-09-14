import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shell/header/header.component';
import { PlaceComponent } from '@app/travel/component/place/place.component';
import { LoaderComponent } from './loader/loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, NgbModule, RouterModule, TranslateModule],
  declarations: [LoaderComponent, HeaderComponent, PlaceComponent],
  entryComponents: [HeaderComponent, PlaceComponent],
  exports: [LoaderComponent, HeaderComponent, PlaceComponent]
})
export class SharedModule {}
