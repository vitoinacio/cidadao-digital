import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButtons, IonButton, IonIcon, IonCard,IonCardContent, IonCardTitle, IonCardHeader, IonFab,IonFabButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle,IonContent, ExploreContainerComponent, IonButtons,IonButton, IonIcon, IonCard, IonCardContent,IonCardTitle, IonCardHeader, IonFab, IonFabButton]
})
export class Tab2Page {

  constructor() {}

  scrollToTop(content: IonContent) {
    content.scrollToTop(400);
  }

}
