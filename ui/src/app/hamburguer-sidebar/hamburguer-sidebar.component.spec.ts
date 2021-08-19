import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguerSidebarComponent } from './hamburguer-sidebar.component';

describe('HamburguerSidebarComponent', () => {
  let component: HamburguerSidebarComponent;
  let fixture: ComponentFixture<HamburguerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburguerSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburguerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
