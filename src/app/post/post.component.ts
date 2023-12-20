import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Todo } from '../model';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  @Input()
  posts: Todo[] = [];
}
