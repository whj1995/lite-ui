import { errorSvg, loadingHtml, successSvg, warningSvg } from './icon';
import './style.styl';

class Message {

  public static get Instance() {
    if (!this._instance) {
      this._instance = new this();
    }
    return this._instance;
  }

  private static _instance: Message;

  private WrapperDiv: HTMLDivElement | undefined;

  private id = 0;

  private mesMap: { [id: string]: number } = {};

  private constructor() {
    this.checkTimeOut = this.checkTimeOut.bind(this);
    this.mountDiv();
  }

  public success(msg: string, time = 3000) {
    return this.send(successSvg, msg, time);
  }

  public warning(msg: string, time = 3000) {
    return this.send(warningSvg, msg, time);
  }

  public error(msg: string, time = 3000) {
    return this.send(errorSvg, msg, time);
  }

  public loading(msg: string, time = 3000) {
    return this.send(loadingHtml, msg, time);
  }

  public cancel(id: number) {
    this.deleteMsg(id);
  }

  public setZindex(z: string) {
    if (this.WrapperDiv) {
      this.WrapperDiv.style.zIndex = z;
    }
  }

  private send(icon: string, msg: string, time: number) {
    const id = this.id++;
    this.mesMap[id] = Date.now() + time;
    this.WrapperDiv!.appendChild(this.createMessage(id, icon, msg));
    Object.keys(this.mesMap).length === 1 && this.checkTimeOut();
    return id;
  }

  private mountDiv() {
    if (this.WrapperDiv) {
      return;
    }
    this.WrapperDiv = document.createElement('div');
    this.WrapperDiv.classList.add('lite-message-container');
    document.body.appendChild(this.WrapperDiv);
  }

  private createMessage(id: number, icon: string, msg: string) {
    const mesDiv = document.createElement('span');
    mesDiv.classList.add('lite-message');
    mesDiv.id = this.getId(id);
    mesDiv.innerHTML = `${icon}<span class='lite-message-text'>${msg}</span>`;
    return mesDiv;
  }

  private getId(id: number) {
    return `lite-message${id}`;
  }

  private checkTimeOut() {
    Object.keys(this.mesMap).forEach((id) => {
      if (Date.now() >= this.mesMap[id]) {
        this.deleteMsg(Number(id));
      }
    });
    Object.keys(this.mesMap).length > 0 && window.requestAnimationFrame(this.checkTimeOut);
  }

  private deleteMsg(id: number) {
    const child = document.getElementById(this.getId(id));
    if (this.WrapperDiv && child) {
      this.WrapperDiv.removeChild(child);
      delete this.mesMap[id];
    }
  }
}

export const message = Message.Instance;
