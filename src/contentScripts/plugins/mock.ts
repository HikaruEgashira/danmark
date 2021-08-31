// commentObserverに依存する
// 外部から参照されない

import { observable } from "fp-ts-rxjs";
import { interval, Observable } from "rxjs";
import type { Comment, CommentObserver } from "./observer";
import { makeComment } from "./observer";

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

// 1. Commentのインターフェイスに沿って値を整える
const makeMockComment = (): Comment => {
  const name = "mock";
  const message = commentList[Math.floor(Math.random() * commentList.length)];
  return makeComment(name)(message);
};

// 2. Observable<Comment>を作成
const mockObserver: CommentObserver = new Observable((subscriber) => {
  const interval$ = interval(500);
  const comments$ = interval$.pipe(observable.map(makeMockComment));
  comments$.subscribe(subscriber);
});

export default mockObserver;
