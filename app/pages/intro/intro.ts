import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MainPage} from '../main/main';

@Component({
    templateUrl: './build/pages/intro/intro.html'
})

export class IntroPage {

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "img/ica-slidebox-img-1.png"
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "img/ica-slidebox-img-2.png"
    },
    {
      title: "What is Ionic Platform?",
      description: "The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "img/ica-slidebox-img-3.png"
    }
  ];

  constructor(public nav: NavController) {
    this.nav = nav;
  }

  goMainPage() {
    this.nav.setRoot(MainPage);
  }

}
