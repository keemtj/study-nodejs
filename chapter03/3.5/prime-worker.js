/**
 * 8개의 thread(worker)가 일을 나누어 처리하는 코드
 * 소수의 개수를 구하는 작업은 정해진 범위를 스레드들이 일정하게 나눠서 수행할 수 있기 때문에 일을 나누어 하기가 비교적 쉽습니다
 * 어떠한 일은 공유하고 있는 데이터가 많아 일을 나누기가 어렵습니다
 */
const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

const min = 2;
let primes = [];

function findPrimes(start, range) {
  let isPrime = true;
  const end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = min; j < Math.sqrt(end); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}

if (isMainThread) {
  const max = 100;
  const threadCount = 8;
  const threads = new Set();
  const range = Math.ceil((max - min) / threadCount); // thread 개수만큼 범위를 나눔
  let start = min;

  console.time("prime");
  for (let i = 0; i < threadCount - 1; i++) {
    // threadCount - 1만큼 thread에 data 분담
    const wStart = start;
    threads.add(
      new Worker(__filename, { workerData: { start: wStart, range } })
    );
    start += range;
  }
  // 마지막 thread에 workerData 전달
  threads.add(
    new Worker(__filename, {
      workerData: { start, range: range + ((max - min + 1) % threadCount) },
    })
  );
  // thread 각각의 업무가 끝나는 순간 worker 종료
  for (let worker of threads) {
    worker.on("error", (err) => {
      throw err;
    });
    worker.on("exit", () => {
      threads.delete(worker);
      if (threads.size === 0) {
        // 모든 worker(thread)가 끝나면 업무 종료
        console.timeEnd("prime");
        console.log("job done, result:", primes.length);
      }
    });
    worker.on("message", (msg) => {
      primes = primes.concat(msg);
    });
  }
} else {
  console.log("worker data:", workerData);
  findPrimes(workerData.start, workerData.range);
  parentPort.postMessage(primes);
}
