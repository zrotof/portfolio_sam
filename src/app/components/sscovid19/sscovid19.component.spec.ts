import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Sscovid19Component } from './sscovid19.component';

describe('Sscovid19Component', () => {
  let component: Sscovid19Component;
  let fixture: ComponentFixture<Sscovid19Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Sscovid19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sscovid19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
