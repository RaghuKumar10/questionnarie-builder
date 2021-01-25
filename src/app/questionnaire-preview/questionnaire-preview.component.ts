import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire-preview',
  templateUrl: './questionnaire-preview.component.html',
  styleUrls: ['./questionnaire-preview.component.scss'],
})
export class QuestionnairePreviewComponent implements OnInit {
  @Input() questionnaire: any[];
  constructor() {}

  ngOnInit(): void {}
}
