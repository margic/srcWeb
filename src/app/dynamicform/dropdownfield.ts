import { Field } from './field';

// TextInputField extends field and sets the control type to a text input
export class DropdownField extends Field<string> {
    controlType = 'dropdown';
}