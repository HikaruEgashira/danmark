// このディレクトリ全体に依存する
// 外部から参照される

import { pipe } from "fp-ts/lib/function";
import { merge } from "rxjs";
import type { Comment } from "./commentObserver";
import { mockObserver } from "./mockComment";

// const timer = (stack: Comment[]) => {
//   setTimeout(() => {
//     stack.shift();
//   }, 20000);
// };

export const commentObserver = pipe(
  merge<[Comment]>(mockObserver)

  // observable.filter(() => true) // 不適切なコメントを除外
);
