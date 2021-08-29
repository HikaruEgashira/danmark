// commentObserverに依存する
// 外部から参照されない

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

// 1. Commentのインターフェイスに沿って値を整える
const makeMockComment = (): Comment => {
  const provider = "mock";
  const message = commentList[Math.floor(Math.random() * commentList.length)];
  return makeComment(provider)(message);
};

// 2. Observable<Comment>を作成
export const mockObserver: CommentObserver = new Observable((subscriber) => {
  const interval$ = interval(500);
  const comments$ = interval$.pipe(observable.map(makeMockComment));
  comments$.subscribe(subscriber);
});
