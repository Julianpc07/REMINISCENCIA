import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NpcsMasterPage } from './npcs-master.page';

describe('NpcsMasterPage', () => {
  let component: NpcsMasterPage;
  let fixture: ComponentFixture<NpcsMasterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcsMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
