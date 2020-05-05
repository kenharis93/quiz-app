import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

    //observable
    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    private selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();
   
    constructor(private http: HttpClient) {}

    postQuestion(question){
        this.http.post('https://localhost:44377/api/questions', question)
        .subscribe(res => {
            console.log(res);
        })
    }

    getQuestions(quizId){
        console.log(quizId);
        return this.http.get('https://localhost:44377/api/questions/' + quizId);
    }

    putQuestion(question){
        this.http.put('https://localhost:44377/api/questions/'+ question.id, question)
        .subscribe(res => {
            console.log(res);
        })
    }

    //this method is for passing the data from the calling component 
    //to the service to store as an observable, which allows another component to have 
    //access to this data
    selectQuestion(question){
        this.selectedQuestion.next(question);
    }

    postQuiz(quiz){
        this.http.post('https://localhost:44377/api/quizzes', quiz)
        .subscribe(res => {
            console.log(res);
        })
    }

    getQuizzes(){
        return this.http.get('https://localhost:44377/api/quizzes');
    }

    putQuiz(quiz){
        this.http.put('https://localhost:44377/api/quizzes/'+ quiz.id, quiz)
        .subscribe(res => {
            console.log(res);
        })
    }

    //this method is for passing the data from the calling component 
    //to the service to store as an observable, which allows another component to have 
    //access to this data
    selectQuiz(quiz){
        this.selectedQuiz.next(quiz);
    }
}