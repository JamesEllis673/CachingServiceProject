import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCachingComponent } from './local-caching.component';

describe('LocalCachingComponent', () => {
  let component: LocalCachingComponent;
  let fixture: ComponentFixture<LocalCachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalCachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalCachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
