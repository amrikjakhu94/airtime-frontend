import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetweetsComponent } from './retweets.component';

describe('RetweetsComponent', () => {
  let component: RetweetsComponent;
  let fixture: ComponentFixture<RetweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
