import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElitesvComponent } from './elitesv.component';

describe('ElitesvComponent', () => {
  let component: ElitesvComponent;
  let fixture: ComponentFixture<ElitesvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElitesvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElitesvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
