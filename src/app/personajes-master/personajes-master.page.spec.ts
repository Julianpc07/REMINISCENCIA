import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajesMasterPage } from './personajes-master.page';

describe('PersonajesMasterPage', () => {
  let component: PersonajesMasterPage;
  let fixture: ComponentFixture<PersonajesMasterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
