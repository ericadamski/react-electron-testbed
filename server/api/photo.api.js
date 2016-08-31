import needle from 'needle';
import { Route } from './route.api';
import { RouteFactory } from './route.factory';

export class PhotoRoute extends Route {
  constructor(size = { h: 1080, w: 1920 }) {
    super('get-photo');
    this._path = `https://unsplash.it/${size.w}/${size.h}/?random`;
    this._handler = RouteFactory.generate(this._route, (event, args) => this._getPhoto(event, args));
  }

  init() {
    console.log(`init ${this._route}`);
    this._handler();
  }

  _getPhoto(event, args) {
    needle.get(this._path, (err, response) => {
      console.log(response);
      event.sender.send(this._route,
        (err) ?
          this.response(false, err) :
          this.response(true, response.body.toString('base64')));
        });
  }
}
