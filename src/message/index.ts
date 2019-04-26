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

  private successSvg = '<svg class="lite-msg-iconfont"  viewBox="0 0 1024 1024" width="20" height="20"><path d="M511.9987352 144.77138748c-202.50107941 0-366.65862397 164.15754456-366.65862397 366.65862397 0 202.49180392 164.15754456 366.65187891 366.65862397 366.6518789 202.50192233 0 366.65946771-164.15923123 366.65946771-366.6518789C878.65820291 308.92893204 714.50065753 144.77138748 511.9987352 144.77138748L511.9987352 144.77138748zM738.85923636 420.22931455l-246.30166379 246.29238912c-2.41401983 2.41654943-6.7547016 6.14592691-6.7547016 6.14592692s-3.79936175 4.40476391-6.21506745 6.8204696l-12.9588077 12.95796478c-7.16027014 7.16027014-18.76577701 7.16027014-25.92857675 0L285.14245032 536.89062417c-7.16195681-7.16027014-7.16195681-18.76577701 0-25.92014502l12.9613373-12.9613373c7.16279975-7.15774054 18.76661993-7.15774054 25.92773383 0l129.63192242 129.62686322L699.97100897 381.33602795c7.15774054-7.15352509 18.76661993-7.15352509 25.92436047 0l12.96302317 12.96892612C746.01866357 401.45932126 746.01866357 413.06988732 738.85923636 420.22931455L738.85923636 420.22931455zM738.85923636 420.22931455" fill="#1afa29" ></path></svg>';

  // private mesMap = {};

  private constructor() {
    //
  }

  public success() {
    //
  }

  public warning() {
    //
  }

  public error() {
    //
  }

  public loading() {
    //
  }

  public cancel() {
    //
  }

  public send(icon: string, msg: string) {
    this.mountDiv();
    this.WrapperDiv!.appendChild(this.createMessage(this.id++, icon, msg));
  }

  public setZindex(z: string) {
    if (this.WrapperDiv) {
      this.WrapperDiv.style.zIndex = z;
    }
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
    mesDiv.id = id.toString();
    mesDiv.innerHTML = `
    ${icon}
    <span class='lite-message-text'>${msg}</span>
    `;
    return mesDiv;
  }

}

export const message = Message.Instance;
