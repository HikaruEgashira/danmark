import { useObservable } from "@vueuse/rxjs";
import { combineLatest, interval, Observable, scan } from "rxjs";
import { observable } from "fp-ts-rxjs";
import { pipe } from "fp-ts/lib/function";
import { commentObserver } from "../plugins/instances";
import type { Comment } from "../plugins/commentObserver";

export interface StyledComment extends Comment {
  top: number;
  fontSize: number;
  visibleTime: number;
}

const makeStyledComment = (comment: Comment): StyledComment => {
  const top = Math.random() * 90 + 5;
  const fontSize = Math.random() * 10 + 10;
  const visibleTime = fontSize;
  return {
    ...comment,
    top,
    fontSize,
    visibleTime,
  };
};

const concat = <T>($: Observable<T>): Observable<T[]> =>
  $.pipe(scan((acc: T[], curr: T) => [...acc, curr], []));
const filterOldComments = (comments: StyledComment[]) =>
  comments.filter((comment) => Date.now() - comment.createdAt < 15 * 1000);

const styledCommentAll$ = pipe(
  commentObserver,
  observable.map(makeStyledComment),
  concat
);
const filteredStyledComment$ = pipe(
  combineLatest([styledCommentAll$, interval(1000)]),
  observable.map(([comments]) => filterOldComments(comments))
);

export const useComments = () => useObservable(filteredStyledComment$);
