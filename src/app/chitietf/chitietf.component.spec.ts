import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietfComponent } from './chitietf.component';

describe('ChitietfComponent', () => {
  let component: ChitietfComponent;
  let fixture: ComponentFixture<ChitietfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
