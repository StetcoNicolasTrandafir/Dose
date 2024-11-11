import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrewsPage } from './brews.page';

describe('BrewsPage', () => {
  let component: BrewsPage;
  let fixture: ComponentFixture<BrewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
