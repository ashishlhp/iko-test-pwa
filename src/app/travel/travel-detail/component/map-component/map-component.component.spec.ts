import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgmCoreModule } from '@agm/core';
import { MapComponentComponent } from './map-component.component';

describe('MapComponentComponent', () => {
  let component: MapComponentComponent;
  let fixture: ComponentFixture<MapComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapComponentComponent],
      imports:[
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAa3G0k7RwdqwGTwp0XuYYZbyrCPoDjR2s'
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
