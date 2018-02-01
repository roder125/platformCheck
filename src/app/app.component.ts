import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then((source) => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (platform.is('android')) {
        console.log("running on Android device!");
        statusBar.styleDefault();
        splashScreen.hide();
      }
      if (platform.is('ios')) {
          console.log("running on iOS device!");
          statusBar.styleDefault();
          splashScreen.hide();
      }
      if (platform.is('mobileweb')) {
          console.log("running in a browser on mobile!");
          statusBar.styleDefault();
          splashScreen.hide();
      }
      if (platform.is('core')) {
        console.log("running in a browser on desktop!");
      }
    });
  }
}

