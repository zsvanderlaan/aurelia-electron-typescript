import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-dialog')
    .developmentLogging();
            
  aurelia.start().then(() => aurelia.setRoot());
}