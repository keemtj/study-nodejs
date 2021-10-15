/**
 * ES2015(ES6)가 도입되면서 자바스크립트도 자체 모듈 시스템 문법이 생겼습니다.
 * 이 문법은 노드의 모듈 시스템과 조금 다릅니다.
 * 본문의 func.js를 ES2015 모듈 스타일로 바꿔보겠습니다.
 */

import { odd, even } from "./var";

function checkOddOrEven(num) {
  if (num % 2) {
    // 홀수면
    return odd;
  }
  return even;
}

export default checkOddOrEven;
