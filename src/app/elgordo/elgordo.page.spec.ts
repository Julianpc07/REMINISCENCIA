import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElgordoPage } from './elgordo.page';

describe('ElgordoPage', () => {
  let component: ElgordoPage;
  let fixture: ComponentFixture<ElgordoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElgordoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
