import { Component } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Quiz } from '../quiz.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  quizzes: Quiz[];

  constructor(private questionsService: QuestionsService) {
    this.questionsService.getQuizzes()
      .subscribe(quizzes => { this.quizzes = quizzes; });
  }

}
