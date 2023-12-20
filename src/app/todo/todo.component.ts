import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormArray,
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, JsonPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todoForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.formBuilder.group({
      street: ['', Validators.required],
      city: [''],
      zip: [''],
      state: [''],
    }),
    socialLinks: this.formBuilder.array([this.formBuilder.control('')]),
  });

  getTodoForm() {
    return this.todoForm;
  }

  get socialLinks() {
    return this.todoForm.get('socialLinks') as FormArray;
  }

  addSocialLinks() {
    this.socialLinks.push(this.formBuilder.control(''));
  }
  onSubmit() {
    console.log('form submitted', this.todoForm.value);
  }

  constructor(private formBuilder: FormBuilder) {}
}
