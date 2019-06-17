class EventBus {
  //格式： add:[fn1,fn2,fn3]
  constructor() {
    this.event = {};
  }
  on(eventname, callback) {
    //eventname事件名，callback 回调
    if (this.event[eventname] instanceof Array) {
      this.event[eventname].push(callback);
    } else {
      this.event[eventname] = [callback];
    }
    console.log(eventname, callback);
  }
  emit(eventname, ...arg) {
    console.log(eventname, arg);
    this.event[eventname] &&
      this.event[eventname].map(item => {
        item(...arg);
      });
  }
}

export default new EventBus();
