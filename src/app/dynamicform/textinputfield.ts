import { Field } from './field';

// TextInputField extends field and sets the control type to a text input
export class TextInputField extends Field<string> {
    controlType = 'textbox';
}