import { ipcMain } from 'electron';

export class RouteFactory {
  static setPrefix (prefix = '') {
    this.prefix = prefix;
  }

  static generate(route, then) {
    return () => ipcMain.on(`${this.prefix || ''}${route}`, then);
  }
}
