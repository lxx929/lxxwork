class EventBus {
  constructor() {
    this.event = {};
  }
  on(eventname, ck) {
    if (this.event[eventname] instanceof Array) {
      this.event[eventname].push(ck);
    } else {
      //第一次
      this.event[eventname] = [ck];
    }
    console.log(eventname, ck);
  }
  emit(eventname, ...arg) {
    console.log(this.event, arg); //[ck,ck2]
    this.event[eventname] &&
      this.event[eventname].map(item => {
      return item(...arg);
      });
  }
}
export default new EventBus();
