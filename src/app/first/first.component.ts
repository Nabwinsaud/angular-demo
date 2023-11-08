import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = this.route.snapshot.queryParams['name'];
    console.log(id);
  }
}
