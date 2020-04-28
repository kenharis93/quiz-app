import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

    question: FormGroup;
    questionData;
    constructor(private api: ApiService) {}

ngOnInit(){
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
        this.api.postQuestion(question);
    }
}