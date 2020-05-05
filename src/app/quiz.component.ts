import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
quizForm: FormGroup;
quizData;

    constructor(private api: ApiService) {}

ngOnInit(){
    this.api.quizSelected.subscribe(quiz => this.quizData = quiz);
    this.api.quizSelected.subscribe(quiz => this.quizForm.patchValue(quiz));

    this.quizForm = new FormGroup({
        title: new FormControl('')
    });
}

postQuiz(quiz){
    this.api.postQuiz(quiz);
}

putQuiz(quiz){
    //MAP FORM VALUES TO THE QUESTION OBJECT PASSED IN
    this.quizData.title = quiz.title;
    this.api.putQuiz(this.quizData);
}

//Resets the form
newQuiz(){
    this.quizData = null;
    this.quizForm.reset();
}
}