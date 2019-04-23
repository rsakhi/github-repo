import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgnaisationComponent } from './orgnaisation.component';

describe('OrgnaisationComponent', () => {
  let component: OrgnaisationComponent;
  let fixture: ComponentFixture<OrgnaisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgnaisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgnaisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
