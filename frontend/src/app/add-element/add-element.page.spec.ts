import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddElementPage } from './add-element.page';

describe('AddElementPage', () => {
  let component: AddElementPage;
  let fixture: ComponentFixture<AddElementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddElementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
