import viewRenderer from './View';
import DocumentManager from './DocumentManager';
import event from './EventEmitter';

export default class App {
  constructor() {
    viewRenderer();
    this.eventRegister();
    this.docMan = new DocumentManager();
  }

  eventRegister() {
    event.on('onclick', (data) => {
      console.log(data);
    });
  }

  start() {
    console.log('Start!');
  }
}

