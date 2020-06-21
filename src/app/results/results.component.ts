import { Component, OnInit, Input } from '@angular/core';
import { Answers, Question } from '../quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() questions: Question[];
  @Input() answers: Answers;


  progressInPercent(givenAnswers: any, numOfAll: any) {
    let numberOfCorrect = givenAnswers.filter(function (a) { return a['correct'] === true; }).length;
    return ((numberOfCorrect / numOfAll) * 100);
  }
}
