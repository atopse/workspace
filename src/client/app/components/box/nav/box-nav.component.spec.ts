import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxNavComponent } from './box-nav.component';

describe('BoxNavComponent', () => {
  let component: BoxNavComponent;
  let fixture: ComponentFixture<BoxNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
