import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsForumComponent } from './topics-forum.component';

describe('TopicsForumComponent', () => {
  let component: TopicsForumComponent;
  let fixture: ComponentFixture<TopicsForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicsForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicsForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
