import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EleccionMasterPage } from './eleccion-master.page';

describe('EleccionMasterPage', () => {
  let component: EleccionMasterPage;
  let fixture: ComponentFixture<EleccionMasterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EleccionMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
