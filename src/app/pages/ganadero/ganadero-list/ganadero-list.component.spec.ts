import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanaderoListComponent } from './ganadero-list.component';

describe('GanaderoListComponent', () => {
  let component: GanaderoListComponent;
  let fixture: ComponentFixture<GanaderoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanaderoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanaderoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
