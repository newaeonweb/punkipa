import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersComponent } from './games.component';

describe('GamesComponent', () => {
  let component: BeersComponent;
  let fixture: ComponentFixture<BeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
