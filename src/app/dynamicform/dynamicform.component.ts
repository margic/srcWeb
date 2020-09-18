import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from './field';
import { DynamicFormService } from './dynamicform.service';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css'],
  providers: [DynamicFormService]
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: Field<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: DynamicFormService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}