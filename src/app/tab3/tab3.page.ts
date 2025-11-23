import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

interface QuizQuestion {
  text: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    CommonModule,
  ],
})
export class Tab3Page {
  questions: QuizQuestion[] = [
    {
      text: "O que é 'Texto Alternativo' (Alt Text) em uma imagem?",
      options: [
        'Uma legenda decorativa',
        'A descrição da imagem lida por leitores de tela',
        'Um link para outra página',
      ],
      correctIndex: 1,
      explanation:
        'O texto alternativo descreve a imagem para tecnologias assistivas, como leitores de tela, ajudando na acessibilidade.',
    },
    {
      text: 'Qual princípio WCAG garante que o conteúdo possa ser usado apenas com o teclado?',
      options: ['Perceptível', 'Operável', 'Compreensível'],
      correctIndex: 1,
      explanation:
        'O princípio Operável trata de navegação por teclado, tempo adequado e evitar conteúdo que cause convulsões.',
    },
    {
      text: 'Por que a inclusão digital é importante?',
      options: [
        'Porque só beneficia empresas de tecnologia',
        'Porque garante acesso igualitário a serviços e informações',
        'Porque deixa os sites mais “bonitos”',
      ],
      correctIndex: 1,
      explanation:
        'Inclusão digital garante que todas as pessoas possam participar da sociedade da informação de forma justa.',
    },
  ];

  currentIndex = 0;
  selectedIndex: number | null = null;
  score = 0;

  answerStatus: 'correct' | 'incorrect' | null = null;
  showFinalScreen = false;

  get currentQuestion(): QuizQuestion {
    return this.questions[this.currentIndex];
  }

  get isLastQuestion(): boolean {
    return this.currentIndex === this.questions.length - 1;
  }

  selectOption(index: number) {
    if (this.selectedIndex !== null) {
      return;
    }

    this.selectedIndex = index;

    const isCorrect = index === this.currentQuestion.correctIndex;
    this.answerStatus = isCorrect ? 'correct' : 'incorrect';

    if (isCorrect) {
      this.score++;
    }
  }

  nextQuestion() {
    if (this.isLastQuestion) {
      this.showFinalScreen = true;
      return;
    }

    this.currentIndex++;
    this.selectedIndex = null;
    this.answerStatus = null;
  }

  restartQuiz() {
    this.currentIndex = 0;
    this.selectedIndex = null;
    this.score = 0;
    this.answerStatus = null;
    this.showFinalScreen = false;
  }
}
