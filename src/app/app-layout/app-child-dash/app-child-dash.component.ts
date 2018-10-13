import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from "../serviceFloder/search.service";

@Component({
  selector: 'app-child-dash',
  templateUrl: './app-child-dash.component.html',
  styleUrls: ['./app-child-dash.component.css']
})
export class AppChildDashComponent implements OnInit {
  public childTitle = "Company Detail";
  public message;
  constructor(public _searchService: SearchService, public route: ActivatedRoute, public router: Router) {
  }
  ngOnInit() {
    this._searchService.currentMessage.subscribe(message => this.message = message)
  }

  gotoSearchComapny(){
    this.router.navigate(['/searchdetails']);
  }
}
