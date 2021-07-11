import { Component, OnInit } from '@angular/core';
import { ApiService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-task2';
  articles: any;
  public data = [];
  public noData: any;

  constructor(
  private api: ApiService 
  ){ }

 ngOnInit() {
    this.api.getAll().subscribe((results) =>  {
    console.log(results)
    this.articles = results['articles'];
    
  })
  }
}