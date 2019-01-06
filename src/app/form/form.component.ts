import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [
    trigger('simpleAnimation', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class FormComponent implements OnInit {

  questions = [];
  userAnswers = [];
  i = 0;


  inputText;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.questions = this.dataService.questions;
    this.i = this.dataService.current;
  }

  goBack() {
    this.i -= 1;
    if (this.i < 0) {
      this.i = 0;
    }
    if (this.dataService.findAnswer(this.i)) {
      this.inputText = this.dataService.findAnswer(this.i).answer;
    }
  }

  goNext(form: NgForm) {
    if (!form.invalid) {
      this.dataService.addAnswer({
        question: this.questions[this.i],
        answer: form.value.answer
      }, this.i);
      this.i += 1;
      if (this.questions.length <= this.dataService.getLength()) {
        this.dataService.sendAnswers();
      } else {
        if (this.dataService.findAnswer(this.i)) {
          this.inputText = this.dataService.findAnswer(this.i).answer;
        } else {
          form.resetForm();
        }
      }
    }
  }

}
