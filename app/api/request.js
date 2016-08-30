import { ipcRenderer } from 'electron';
import { Observable } from 'rxjs/Observable';

export default class Request {
  constructor(route) {
    this._route = route;
  }

  send(data = { empty: true }) {
    ipcRenderer.send(this._route, data);
    return this._receive();
  }

  _receive() {
    this.notifier = new Observable(observer => {
      ipcRenderer.on(this._route, (event, arg) => {
        observer.next(arg);
      });
    });
  }

  destroy() {
    ipcRenderer.removeAllListener(this._route);
  }
}
