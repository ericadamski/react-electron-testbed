import needle from 'needle';
import { Route } from './route.api';
import { RouteFactory } from './route.factory';

export class Photo extends Route {
  constructor(size = { h: 1080, w: 1920 }) {
    super('get-photo');

    console.log(size, this);
    this._path = `https://unsplash.it/${size.w}/${size.h}/?random`;
    this._handler = RouteFactory.generate(this._route, this._getPhoto);
  }

  init() {
    this._handler();
  }

  _getPhoto(event, args) {
    needle.get(this._path, (err, response) =>
      event.sender.send(
        (err) ?
          this.response(false, err) :
          this.response(true, response.body)));
  }
}
