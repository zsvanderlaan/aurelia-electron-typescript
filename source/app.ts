import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;

  menuConfig: Array<Object> = [
    {
      title: "File",
      href: "#",
      items: [
        {
          title: "Open",
          execute: ()=>{console.log("Clicked Open ")}
        }        
      ]
    }
  ];

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'dashboard'], name: 'dashboard', moduleId: 'pages/dashboard', nav: true, title: 'Dashboard' }
    ]);

    this.router = router;
  }
}