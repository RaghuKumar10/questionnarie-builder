import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  controls: any[] = [];
  model: any = {};

  contentType: any = {
    number: /^[0-9]+$/,
    text: /^[a-zA-Z]+$/,
  };

  onSubmit(obj: any) {
    if (this.model.type === 'textarea') this.model.rows = 5;
    this.model.pattern = this.contentType[this.model.pattern];
    this.controls.push({ ...this.model });
    console.log('info', this.controls);
    obj.form.reset();
  }
}
