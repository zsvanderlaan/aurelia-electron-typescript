import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {      
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'dashboard'], name: 'dashboard', moduleId: 'pages/dashboard',      nav: true, title: 'Dashboard' }
    ]);

    this.router = router;
  }
}