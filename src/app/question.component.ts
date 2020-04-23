import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})

export class QuestionComponent implements OnInit {
question: FormGroup;

    constructor(private api: ApiService) {}

ngOnInit(){
    this.question = new FormGroup({
        text: new FormControl('')
    });
}
    post(question) {
        this.api.postQuestion(question);
    }
}