export class Route {
  constructor(path = '') {
    this._route = path;
  }

  getRoute() {
    return this._route;
  }

  init() {
    console.log('not implemented');
  }

  response(status, data) {
    console.log(status, data);
    return {
      success: status,
      data: data
    };
  }
}
