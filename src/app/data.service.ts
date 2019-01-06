import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  answers = [];
  results = {};
  public questions = ['Were you satisfied with product you purchased? Give us a short review',
  'Were you satisfied with our Customer Service? Give us a short review',
  'Would you like to do buisness again with us? Give us a short review'];
  public current = 0;
  constructor(private http: HttpClient, private router: Router) { }

  getAnswers() {
    return [...this.answers];
  }

  getResults() {
    return  {...this.results};
  }

  addAnswer(answer, i) {
    this.answers[i] = answer;
  }

  findAnswer(i) {
    return this.answers[i];
  }

  getLength() {
    return this.answers.length ? this.answers.length : 0;
  }

  sendAnswers() {
    this.http.post('analyze', this.answers).subscribe(res => {
      this.results = res;
      this.answers = [];
      this.router.navigate(['/results']);
    });
  }

  reset() {
    this.answers = [];
    this.results = {};
  }
}
