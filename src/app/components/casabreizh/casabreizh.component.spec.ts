import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasabreizhComponent } from './casabreizh.component';

describe('CasabreizhComponent', () => {
  let component: CasabreizhComponent;
  let fixture: ComponentFixture<CasabreizhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasabreizhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasabreizhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
