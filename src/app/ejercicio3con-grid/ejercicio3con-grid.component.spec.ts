import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio3conGRIDComponent } from './ejercicio3con-grid.component';

describe('Ejercicio3conGRIDComponent', () => {
  let component: Ejercicio3conGRIDComponent;
  let fixture: ComponentFixture<Ejercicio3conGRIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio3conGRIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio3conGRIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
