import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesokiloCreateComponent } from './pesokilo-create.component';

describe('PesokiloCreateComponent', () => {
  let component: PesokiloCreateComponent;
  let fixture: ComponentFixture<PesokiloCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesokiloCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesokiloCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
