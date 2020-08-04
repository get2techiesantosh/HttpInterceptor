import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'HttpInterceptor';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        console.log(data);
      });

    this.http
      .get('http://jsonplaceholder.typicode.com/posts/2')
      .subscribe((data) => {});

      this.http.get('http://jsonplaceholder.typicode.com/posts/2/comments')
      .subscribe(data =>{

      });
  }
}
