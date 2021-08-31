import { useObservable } from "@vueuse/rxjs";
import { combineLatest, interval, Observable, scan } from "rxjs";
import { observable } from "fp-ts-rxjs";
import { commentObserver } from "../plugins/instances";
import type { Comment } from "../plugins/observer";

/**
 * Domains
 */

export interface StyledComment extends Comment {
  top: number;
  fontSize: number;
  visibleTime: number;
}

const makeStyledComment = (comment: Comment): StyledComment => {
  const randomRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const top = randomRange(5, 95);
  const fontSize = randomRange(10, 20);
  const visibleTime = fontSize;
  return {
    ...comment,
    top,
    fontSize,
    visibleTime,
  };
};

/**
 * Hooks
 */
const ANIMATOIN_DURATION = 20;
const INTERVAL = 5;

const concat = <T>($: Observable<T>): Observable<T[]> =>
  $.pipe(scan<T, T[]>((acc, curr) => [...acc, curr], []));
const filterOldComments: (comments: StyledComment[]) => StyledComment[] = (
  comments
) =>
  comments.filter((comment) => {
    const now = Date.now();
    const spend = now - comment.createdAt;
    const lifeTime = (ANIMATOIN_DURATION - INTERVAL) * 1000;
    return spend < lifeTime;
  });

const styledComments$ = commentObserver.pipe(
  observable.map(makeStyledComment),
  concat
);
const comments$ = combineLatest([
  styledComments$,
  interval(INTERVAL * 1000),
]).pipe(observable.map(([comments]) => filterOldComments(comments)));

export const useComments = () => useObservable(comments$);
