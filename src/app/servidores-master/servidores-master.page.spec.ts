import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServidoresMasterPage } from './servidores-master.page';

describe('ServidoresMasterPage', () => {
  let component: ServidoresMasterPage;
  let fixture: ComponentFixture<ServidoresMasterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServidoresMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
