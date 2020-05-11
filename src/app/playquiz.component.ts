import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FinishedComponent } from './finished.component';

@Component({
    selector: 'playQuiz',
    templateUrl: './playquiz.component.html',
    styleUrls: ['./playquiz.component.css']
})

export class PlayQuizComponent implements OnInit {

    quizId;
    questions;


constructor(private api: ApiService, private route: ActivatedRoute, private dialog: MatDialog) {}

    ngOnInit(){
        this.quizId = parseInt(this.route.snapshot.paramMap.get('quizId'));

        this.api.getQuestions(this.quizId).subscribe(res => { 
            this.questions = res;
            

            this.questions.forEach(q => {
              q.answers = [q.correctAnswer, q.asnwer1, q.asnwer2, q.asnwer3];
              shuffle(q.answers);
            });

        });
    }

  finish(){
    var correct = 0;
    var total = 0;
    this.questions.forEach( q => {
      total++;
      if (q.correctAnswer == q.selectedAnswer){
      correct++
      }
    });
    const dialogRef = this.dialog.open(FinishedComponent, {
      data: { correct, total }
    });
    console.log(correct, total);
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}

function shuffle(a){
  for (let i= a.legnth; i; i--){
    let j = Math.floor(Math.random() * i);
    [a[i-1], a[j]] = [a[j], a[i-1]];
  }
}

