import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearServidorPage } from './crear-servidor.page';

describe('CrearServidorPage', () => {
  let component: CrearServidorPage;
  let fixture: ComponentFixture<CrearServidorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearServidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
