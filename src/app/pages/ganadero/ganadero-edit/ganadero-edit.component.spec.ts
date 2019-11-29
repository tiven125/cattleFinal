import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanaderoEditComponent } from './ganadero-edit.component';

describe('GanaderoEditComponent', () => {
  let component: GanaderoEditComponent;
  let fixture: ComponentFixture<GanaderoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanaderoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanaderoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
