import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtlComponent } from './ttl.component';

describe('TtlComponent', () => {
  let component: TtlComponent;
  let fixture: ComponentFixture<TtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
