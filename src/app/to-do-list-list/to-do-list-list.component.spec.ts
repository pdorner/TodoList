import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListListComponent } from './to-do-list-list.component';

describe('ToDoListListComponent', () => {
  let component: ToDoListListComponent;
  let fixture: ComponentFixture<ToDoListListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
