import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElegirRolPage } from './elegir-rol.page';

describe('ElegirRolPage', () => {
  let component: ElegirRolPage;
  let fixture: ComponentFixture<ElegirRolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirRolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
