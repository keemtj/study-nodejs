/**
 * createReadStream의 내부적인 이벤트 처럼 on('data', 콜백), on('end', 콜백)이 있지만
 * 직접 이벤트를 만들고, 호출하고, 삭제할 수 있다
 * on('data'), on('end')같은 경우 겉으로 이벤트를 호출하는 코드는 없지만
 * 내부적으로는 chunk를 전달할 때마다 data 이벤트를 emit하고 있다
 */
const EventEmitter = require("events");

const myEvent = new EventEmitter();
myEvent.addListener("event1", () => {
  console.log("이벤트 1");
});
// event2같이 이벤트 하나에 이벤트 여러 개를 달아줄 수도 있다
myEvent.on("event2", () => {
  console.log("이벤트 2");
});
myEvent.on("event2", () => {
  console.log("이벤트 2 추가");
});
myEvent.once("event3", () => {
  console.log("이벤트 3");
}); // 한 번만 실행됨

myEvent.emit("event1"); // 이벤트 호출
myEvent.emit("event2"); // 이벤트 호출

// event3을 연속 두번 호출했지만 once이기 때문에 한 번만 호출된다
myEvent.emit("event3"); // 이벤트 호출
myEvent.emit("event3"); // 실행 안 됨

myEvent.on("event4", () => {
  console.log("이벤트 4");
});
// event4가 호출되기 전에 리스너를 제거했으므로 event4의 콜백은 호출되지 않는다
myEvent.removeAllListeners("event4");
myEvent.emit("event4"); // 실행 안 됨

const listener = () => {
  console.log("이벤트 5");
};
myEvent.on("event5", listener);
myEvent.removeListener("event5", listener);
myEvent.emit("event5"); // 실행 안 됨

console.log(myEvent.listenerCount("event2"));

/**
 * on(이벤트명, 콜백): 이벤트명과 콜백을 연결(하는 동작을 이벤트 리스닝이라고 한다)
 * addListener(이벤트명, 콜백): on과 기능이 같다
 * emit(이벤트명): 이벤트를 호출하는 메서드
 * once(이벤트명, 콜백): 한 번만 실행되는 이벤트, 한 번 실행된 후 연결이 제거된다
 * removeAllListeners(이벤트명): 이벤트에 연결된 모든 이벤트 리스너를 제거한다
 * removeListener(이벤트명, 리스너): 이벤트에 연결된 리스너를 하나씩 제거, 리스너를 반드시 넣어야 한다
 * off(이벤트명, 콜백): Node v10에서 추가된 메서드, removeListener와 기능이 같다
 * listenerCount(이벤트명): 현재 리스너가 몇 개 연결되어 있는지 확인
 */
