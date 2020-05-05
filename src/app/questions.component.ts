import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css']
})

export class QuestionsComponent {
    question = {};
    questions;
    quizId;

    constructor(private api: ApiService, private route: ActivatedRoute) {}

    ngOnInit(){
        this.quizId = parseInt(this.route.snapshot.paramMap.get('quizId'));

        this.api.getQuestions(this.quizId).subscribe(res => { 
            this.questions = res;
        });
    }

    updateQuestion(question){
        this.api.selectQuestion(question);
        console.log(question);
    }

}