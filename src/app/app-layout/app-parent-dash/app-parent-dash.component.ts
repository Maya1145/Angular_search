import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from "../serviceFloder/search.service";

@Component({
  selector: 'app-parent-dash',
  templateUrl: './app-parent-dash.component.html',
  styleUrls: ['./app-parent-dash.component.css']
})

export class AppParentDashComponent implements OnInit {
  public parentTitle = "Search Company Details";
  public results: any[] = [];

  constructor(public _searchService: SearchService,public route: ActivatedRoute,
  public router: Router) {}

  ngOnInit() {
  }

  onSearchChange(searchValue: string) {
    if (searchValue.length >= 3) {
      this._searchService.search(searchValue).subscribe(
        search => {
          let temp = JSON.parse(search['_body']);
          this.results = temp['searchResults'];
        },
        error => {
          console.log(error);
        });
    }
  }
  submit(result) {
    this._searchService.changeMessage(result);
    this.router.navigate(['/companyDetails']);
  }
}

