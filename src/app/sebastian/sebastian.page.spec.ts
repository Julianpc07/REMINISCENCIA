import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SebastianPage } from './sebastian.page';

describe('SebastianPage', () => {
  let component: SebastianPage;
  let fixture: ComponentFixture<SebastianPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SebastianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
