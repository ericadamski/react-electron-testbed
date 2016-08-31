import { ipcRenderer } from 'electron';
import { Observable } from 'rxjs/Observable';

export default class Request {
  constructor(route) {
    this._route = route;
  }

  send(data = { empty: true }) {
    ipcRenderer.send(this._route, data);
    this._receive();
    return this.notifier;
  }

  _receive() {
    this.notifier = new Observable(observer => {
      ipcRenderer.on(this._route, (event, args) => {
        observer.next(args);
        observer.complete();
      });
    });
  }

  destroy() {
    ipcRenderer.removeAllListener(this._route);
  }
}
