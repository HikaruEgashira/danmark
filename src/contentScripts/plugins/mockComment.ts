// commentObserverに依存する
// 外部から参照されない

import { pipe } from "fp-ts/function";
import { observable } from "fp-ts-rxjs";
import { interval, Observable } from "rxjs";
import type { Comment } from "./commentObserver";
import { CommentObserver, makeComment } from "./commentObserver";

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
  const interval$ = interval(2000);
  const comments$ = pipe(
    interval$,
    observable.map<number, Comment>(() =>
      makeComment("mock")(
        commentList[Math.floor(Math.random() * commentList.length)]
      )
    )
  );

  comments$.subscribe(subscriber);
});
