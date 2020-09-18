import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Field } from './field';

export class DynamicFormService {
    constructor() { }

    toFormGroup(fields: Field<string>[]) {
        const group: any = {};

        fields.forEach(field => {
            group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
                : new FormControl(field.value || '');
        });
        return new FormGroup(group);
    }
}