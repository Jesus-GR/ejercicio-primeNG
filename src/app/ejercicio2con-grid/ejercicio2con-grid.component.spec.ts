import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio2conGRIDComponent } from './ejercicio2con-grid.component';

describe('Ejercicio2conGRIDComponent', () => {
  let component: Ejercicio2conGRIDComponent;
  let fixture: ComponentFixture<Ejercicio2conGRIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio2conGRIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio2conGRIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
