import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { TodoComponent } from './todo/todo.component';
import { DataTableComponent } from './data-table/data-table.component';

export type Toggle = 'profile' | 'editor';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PostComponent,
    TodoComponent,
    DataTableComponent,
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService],
})
export class AppComponent {
  title = 'hello-world';

  toggle: Toggle = 'profile';

  get isProfile() {
    return this.toggle === 'profile';
  }

  get isEditor() {
    return this.toggle === 'editor';
  }
  toggleProfileEditor(type: Toggle) {
    this.toggle = type;
  }

  #todoProvider = inject(TodoService);

  data: any = {};

  ngOnInit() {
    this.#todoProvider.fetchData().subscribe((res) => (this.data = res));
  }
}
