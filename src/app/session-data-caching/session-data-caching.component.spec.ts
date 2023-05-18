import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDataCachingComponent } from './session-data-caching.component';

describe('SessionDataCachingComponent', () => {
  let component: SessionDataCachingComponent;
  let fixture: ComponentFixture<SessionDataCachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionDataCachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionDataCachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
