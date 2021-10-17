const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  // 부모일 때
  const threads = new Set();
  threads.add(
    new Worker(__filename, {
      workerData: { start: 1 }, // worker에게 data를 보냄
    })
  );
  threads.add(
    new Worker(__filename, {
      workerData: { start: 2 }, // worker에게 data를 보냄
    })
  );
  for (let worker of threads) {
    worker.on("message", (message) => console.log("from worker", message)); // worker로부터 받은 데이터를 출력함
    worker.on("exit", () => {
      threads.delete(worker); // worker의 실행을 종료함(threads.size - 1)
      if (threads.size === 0) {
        console.log("job done"); // worker가 모두 종료되어 메시지를 전송함
      }
    });
  }
} else {
  // 워커일 때
  const data = workerData; // parent로부터 workerData를 받음
  parentPort.postMessage(data.start + 100); // 받은 데이터에 100을 더해 parent에게 돌려줌
}
