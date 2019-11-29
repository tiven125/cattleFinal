import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BovinoCreateComponent } from './bovino-create.component';

describe('BovinoCreateComponent', () => {
  let component: BovinoCreateComponent;
  let fixture: ComponentFixture<BovinoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BovinoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BovinoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
