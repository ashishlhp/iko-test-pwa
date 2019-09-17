import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@app/shared/shared.module'
import { TravelComponent } from './travel.component';
import { Angulartics2Module, } from 'angulartics2';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TravelList } from './constant'
import { By } from '@angular/platform-browser';
import { PlaceComponent } from '@app/travel/component/place/place.component';

describe('TravelComponent', () => {
  let component: TravelComponent;
  let fixture: ComponentFixture<TravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        Angulartics2Module.forRoot(),
        RouterModule.forRoot([]),
        TranslateModule.forRoot(),
        SharedModule
      ],
      declarations: [ TravelComponent ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should be at least 3 places', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const find = fixture.debugElement.queryAll(By.directive(PlaceComponent)).length;
    expect(find).toBeGreaterThan(3);
  });
});
