import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MateooPage } from './mateoo.page';

describe('MateooPage', () => {
  let component: MateooPage;
  let fixture: ComponentFixture<MateooPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MateooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
