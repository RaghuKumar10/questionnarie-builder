import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.scss'],
})
export class QuestionnaireFormComponent implements OnInit {
  model: any = {};

  contentType: any = {
    number: /^[0-9]+$/,
    text: '',
    alphaNumeric: /^[a-zA-Z0-9]*$/,
  };

  @Output()
  previewQuestionnaireEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onPreview(obj: any) {
    if (this.model.type === 'textarea') this.model.rows = 5;
    this.model.pattern = this.contentType[this.model.patternType];
    this.previewQuestionnaireEvent.emit({ ...this.model });
  }
}
