import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajesPlayerPage } from './personajes-player.page';

describe('PersonajesPlayerPage', () => {
  let component: PersonajesPlayerPage;
  let fixture: ComponentFixture<PersonajesPlayerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
