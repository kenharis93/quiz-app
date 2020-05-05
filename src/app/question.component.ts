import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

    question: FormGroup;
    questionData;
    quizId: Number;
    constructor(private api: ApiService, private route: ActivatedRoute) {}

ngOnInit(){
    this.quizId = parseInt(this.route.snapshot.paramMap.get('quizId'));
    this.api.questionSelected.subscribe(question => this.questionData = question);
    this.api.questionSelected.subscribe(question => this.question.patchValue(question));

    this.question = new FormGroup({
        text: new FormControl(''),
        correctAnswer: new FormControl(''),
        answer1: new FormControl(''),
        answer2: new FormControl(''),
        answer3: new FormControl('')
    });
}
    post(question) {
        question.quizId = this.quizId;
        this.api.postQuestion(question);
    }

    /*this works by using questionData pulled from backend which contains the ID, 
    then passing the new values to this object and returning it back to the back end
    */
    put(question){
        //MAP FORM VALUES TO THE QUESTION OBJECT PASSED IN
        this.questionData.text = question.text;
        this.questionData.correctAnswer = question.correctAnswer;
        this.questionData.answer1 = question.answer1;
        this.questionData.answer2 = question.answer2;
        this.questionData.answer3 = question.answer3;
        this.api.putQuestion(this.questionData);
    }

    //Resets the form, clears temporary questionData
    newQuestion(){
        this.questionData = null;
        this.question.reset();
    }
}