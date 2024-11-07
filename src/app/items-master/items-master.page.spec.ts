import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsMasterPage } from './items-master.page';

describe('ItemsMasterPage', () => {
  let component: ItemsMasterPage;
  let fixture: ComponentFixture<ItemsMasterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
