import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionnaireBuilderComponent } from './questionnaire-builder/questionnaire-builder.component';
import { QuestionnaireFormComponent } from './questionnaire-form/questionnaire-form.component';
import { QuestionnairePreviewComponent } from './questionnaire-preview/questionnaire-preview.component';

@NgModule({
  declarations: [AppComponent, QuestionnaireBuilderComponent, QuestionnaireFormComponent, QuestionnairePreviewComponent],
  imports: [BrowserModule, CommonModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
