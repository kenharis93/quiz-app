import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question.component';
import { QuestionsComponent } from './questions.component';
import { HomeComponent } from './home.component';
import { QuizComponent } from './quiz.component';
import { QuizzesComponent } from './quizzes.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'question/:quizId', component: QuestionComponent},
  { path: 'questions', component: QuestionsComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'quizzes', component: QuizzesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
