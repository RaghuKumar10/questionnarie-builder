import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire-builder',
  templateUrl: './questionnaire-builder.component.html',
  styleUrls: ['./questionnaire-builder.component.scss'],
})
export class QuestionnaireBuilderComponent implements OnInit {
  showQuestionTypes: boolean;
  showQustionnaireBuilder: boolean;

  questionnaire: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  addQuestions() {
    this.showQuestionTypes = true;
  }

  previewEventHandler(question: any) {
    this.questionnaire.push(question);
  }

  showBuilder() {
    this.showQustionnaireBuilder = true;
  }

  hello(question: any) {
    alert('hello');
  }
}
