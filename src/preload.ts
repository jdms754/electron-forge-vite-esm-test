import electron from 'electron';

const LolApi = {
  writeA: () => console.log('a'),
};

electron.contextBridge.exposeInMainWorld('lolApi', LolApi);

declare global {
  interface Window {
    lolApi: typeof LolApi;
  }
}
