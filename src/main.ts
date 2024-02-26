import * as electron from 'electron';
import path from 'path';
import * as resedit from 'resedit'
;
import { lol } from './other.ts';

export const bound = <T,>(_method: unknown, context: ClassMethodDecoratorContext<T>) => {
  const methodName = context.name as keyof T;
  if (context.private) {
    throw new Error(`'bound' cannot decorate private properties like ${methodName as string}.`);
  }
  context.addInitializer(function () {
    this[methodName] = (this[methodName] as Function).bind(this); // eslint-disable-line @typescript-eslint/ban-types
  });
};

console.log(resedit.version)

console.log(lol)

class A {
  @bound
  b() {
    console.log('b')
  }
}

new A().b()

// // Handle creating/removing shortcuts on Windows when installing/uninstalling.
// if (require('electron-squirrel-startup')) {
//   electron.app.quit();
// }

const createWindow = () => {
  console.log(electron.app.getAppPath())
  const preloadPath = path.resolve(electron.app.getAppPath(), '.vite/build/preload.js')
  console.log(preloadPath)
  // Create the browser window.
  const mainWindow = new electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: preloadPath,
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(`.vite/renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron.app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron.app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electron.app.quit();
  }
});

electron.app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (electron.BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
