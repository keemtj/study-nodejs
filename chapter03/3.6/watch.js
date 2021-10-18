/**
 * 파일/폴더의 변경 사항을 감시하는 watch 메서드
 */
const fs = require("fs");

fs.watch("./target.txt", (eventType, filename) => {
  console.log(eventType, filename);
});

/**
 * node watch.js
 * 내용물 수정 후 change 이벤트가 두 번씩 발생
 * change target.txt
 * change target.txt
 * 파일명 변경 또는 파일 삭제 후 rename 이벤트 발생
 * rename target.txt
 * rename 이벤트가 발생한 후에는 더 이상 watch가 수행되지 않음
 */
