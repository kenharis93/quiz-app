import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})

export class QuestionComponent implements OnInit {
form: FormGroup;

ngOnInit(){
    this.form = new FormGroup({
        question: new FormControl('')
    });
}
    post(question) {
        console.log(question);
    }
}