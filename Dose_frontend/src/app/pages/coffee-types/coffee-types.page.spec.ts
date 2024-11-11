import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoffeeTypesPage } from './coffee-types.page';

describe('CoffeeTypesPage', () => {
  let component: CoffeeTypesPage;
  let fixture: ComponentFixture<CoffeeTypesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeTypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
