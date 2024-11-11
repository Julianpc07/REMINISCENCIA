import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServidoresPlayerPage } from './servidores-player.page';

describe('ServidoresPlayerPage', () => {
  let component: ServidoresPlayerPage;
  let fixture: ComponentFixture<ServidoresPlayerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServidoresPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
