import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoffeePage } from './coffee.page';

describe('CoffeePage', () => {
  let component: CoffeePage;
  let fixture: ComponentFixture<CoffeePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
