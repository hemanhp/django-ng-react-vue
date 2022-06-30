import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsItemComponent } from './topics-item.component';

describe('TopicsItemComponent', () => {
  let component: TopicsItemComponent;
  let fixture: ComponentFixture<TopicsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
