import { Injectable } from '@angular/core';

import { DropdownField } from './dropdownfield';
import { Field } from './field';
import { TextInputField } from './textinputfield';
import { of } from 'rxjs';

export class DynamicFormFieldService {
    getFields() {

        const questions: Field<string>[] = [

            new DropdownField({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' },
                    { key: 'new', value: 'New' }
                ],
                order: 3
            }),

            new TextInputField({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),

            new TextInputField({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ];

        return of(questions.sort((a, b) => a.order - b.order));
    }
}