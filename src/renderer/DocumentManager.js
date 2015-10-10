import fs from 'fs-plus';
import event from './EventEmitter';

export default class DocumentEmitter {
  constructor() {
    this.eventRegister();
  }

  eventRegister() {
    event.on('onClickLoadButton', this.loadDocuments.bind(this));
  }

  loadDocuments() {
    const dir = `${__dirname}/../togetter.wiki`;
    const fileTree = fs.listTreeSync(dir);
    console.log(fileTree);
  }
}
