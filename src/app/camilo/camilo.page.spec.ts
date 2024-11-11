import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamiloPage } from './camilo.page';

describe('CamiloPage', () => {
  let component: CamiloPage;
  let fixture: ComponentFixture<CamiloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CamiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
