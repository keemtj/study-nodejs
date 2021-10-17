/**
 * node에서 멀티 스레드 방식으로 작업하는 방법
 * Main Thread: 기존에 동작하던 싱글 스레드를 메인 스레드 또는 부모 스레드라고 부릅니다
 * main thread에서 worker를 생성하고 worker가 보낸 메시지를 받습니다
 * worker에서 parent가 보낸 메시지를 받습니다
 */

const { Worker, isMainThread, parentPort } = require("worker_threads");

console.log("isMainThread:", isMainThread);
if (isMainThread) {
  // 부모일 때
  const worker = new Worker(__filename);
  worker.on("message", (message) =>
    console.log("message from worker:", message)
  );
  worker.on("exit", () => console.log("worker exit"));
  worker.postMessage("ping");
} else {
  // 워커일 때
  parentPort.on("message", (value) => {
    console.log("message from parent(mainThread):", value);
    parentPort.postMessage("pong");
    parentPort.close();
  });
}
