import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairePreviewComponent } from './questionnaire-preview.component';

describe('QuestionnairePreviewComponent', () => {
  let component: QuestionnairePreviewComponent;
  let fixture: ComponentFixture<QuestionnairePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnairePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnairePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
