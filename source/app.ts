/// <reference path="app-window.ts"/>

import {autoinject} from 'aurelia-framework'
import {Router, RouterConfiguration} from 'aurelia-router'
import {AppMenu} from './app-menu';
import {AppWindow} from './app-window';

@autoinject
export class App extends AppWindow {
  router: Router;  
  appMenu: AppMenu;
  
  constructor(appMenu: AppMenu)
  {   
    super()
    this.appMenu = appMenu;
  }
  
  

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'dashboard'], name: 'dashboard', moduleId: 'pages/dashboard', nav: true, title: 'Dashboard' }
    ]);

    this.router = router;
  }  
}