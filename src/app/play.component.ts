import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
    selector: 'play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {

quizzes;

    constructor(private api: ApiService) {}

    ngOnInit(){
        this.api.getAllQuizzes().subscribe(res => { 
            this.quizzes = res;
        });
    }
}

