// commentObserverに依存する
// 外部から参照されない

import { interval, map, Observable } from "rxjs";
import type { Comment, CommentObserver } from "./commentObserver";
import { getTop, timer } from "./commentUtils";

const commentList = [
  "うぽつ",
  "うまそう",
  "おいしそう",
  "おお",
  "なるほど",
  "すき",
  "ここすき",
  "！？",
  "おつ",
  "88888888",
];

export const mockObserver: CommentObserver = new Observable((subscriber) => {
  let id = 0;
  const stack = reactive<Comment[]>([]);
  const interval$ = interval(2000);
  const comments$ = interval$.pipe(
    map(() => {
      stack.push({
        id: id++,
        provider: "mock",
        message: commentList[Math.floor(Math.random() * commentList.length)],
        top: getTop(),
      });
      timer(stack);
      return stack;
    })
  );
  comments$.subscribe(subscriber);
});
