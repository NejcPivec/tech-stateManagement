import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
  data: any = [];
  loading = false;
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.data = [{}];
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/photos').subscribe({
      next: (response) => {
        this.data = response;
        this.loading = false;
      }
    })
  }

}
