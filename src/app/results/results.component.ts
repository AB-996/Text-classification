import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.results = this.dataService.getResults();
    console.log(this.results);
  }

  back() {
    this.dataService.reset();
    this.router.navigate(['/']);

  }

}
