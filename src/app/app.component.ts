import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'random';
  demo = 'aakjdjkqkdwqj';
  constructor(private readonly httpClient: HttpClient) {}
  count = 0;
  lists = [1, 2, 3, 4, 5];
  ngOnInit(): void {
    this.httpClient.get('https://api.github.com/users').subscribe((data) => {
      console.log(data, 'users');
    });
  }

  increase(event: number) {
    console.log(event);
    this.count++;
  }
}
