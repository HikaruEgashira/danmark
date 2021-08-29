// domainsと外部ライブラリにのみ依存
// 外部から参照するときは type import を使う

import { Observable } from "rxjs";
import { v4 as uuid } from "uuid";
export interface Comment {
  id: string;
  provider: string;
  message: string;
  createdAt: number;
}

export const makeComment =
  (provider: string) =>
  (message: string): Comment => ({
    id: uuid(),
    message,
    provider,
    createdAt: Date.now(),
  });

export interface CommentObserver extends Observable<Comment> {}
