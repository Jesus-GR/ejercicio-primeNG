import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio1conGRIDComponent } from './ejercicio1con-grid.component';

describe('Ejercicio1conGRIDComponent', () => {
  let component: Ejercicio1conGRIDComponent;
  let fixture: ComponentFixture<Ejercicio1conGRIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio1conGRIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio1conGRIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
