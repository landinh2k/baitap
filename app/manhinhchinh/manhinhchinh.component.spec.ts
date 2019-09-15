import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhinhchinhComponent } from './manhinhchinh.component';

describe('ManhinhchinhComponent', () => {
  let component: ManhinhchinhComponent;
  let fixture: ComponentFixture<ManhinhchinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManhinhchinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManhinhchinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
