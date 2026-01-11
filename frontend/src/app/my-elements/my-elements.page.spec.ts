import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyElementsPage } from './my-elements.page';

describe('MyElementsPage', () => {
  let component: MyElementsPage;
  let fixture: ComponentFixture<MyElementsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyElementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
