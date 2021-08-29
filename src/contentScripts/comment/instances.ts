// このディレクトリ全体に依存する
// 外部から参照される

// import { observable } from "fp-ts-rxjs";
import { pipe } from "fp-ts/lib/function";
import { merge } from "rxjs";
import type { CommentObserver } from "./commentObserver";
import { mockObserver } from "./mockComment";

export const commentObserver: CommentObserver = pipe(
  merge(mockObserver)
  // observable.filter(() => true) // 不適切なコメントを除外
);
