import { useObservable } from "@vueuse/rxjs";
import { scan } from "rxjs";
import { observable } from "fp-ts-rxjs";
import { commentObserver } from "./plugins/instances";
import type { Comment } from "./plugins/commentObserver";

export interface StyledComment extends Comment {
  top: number;
}

const getTop = () => Math.random() * 90 + 5;
const makeStyledComment = (comment: Comment): StyledComment => ({
  ...comment,
  top: getTop(),
});

const filterOldComments = (CommentList: StyledComment[]) =>
  CommentList.filter((comment) => Date.now() - comment.createdAt < 20 * 1000);

export const useComments = () =>
  useObservable(
    commentObserver.pipe(
      scan(
        (acc: StyledComment[], curr: Comment) => [
          ...acc,
          makeStyledComment(curr),
        ],
        []
      ),
      observable.map(filterOldComments)
    )
  );
