import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from './field';

@Component({
  selector: 'app-dynamicformfield',
  templateUrl: './dynamicformfield.component.html',
  styleUrls: ['./dynamicformfield.component.css']
})
export class DynamicFormFieldComponent {
  @Input() field: Field<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
}