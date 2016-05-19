import {autoinject} from 'aurelia-framework'
import {Router, RouterConfiguration} from 'aurelia-router'
import {AppMenu} from './app-menu';

@autoinject
export class App {
  router: Router;  
  appMenu: AppMenu;
  
  constructor(appMenu: AppMenu)
  {    
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