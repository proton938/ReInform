import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDocsComponent } from './get-docs.component';

describe('GetDocsComponent', () => {
  let component: GetDocsComponent;
  let fixture: ComponentFixture<GetDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
