// domainsと外部ライブラリにのみ依存
// 外部から参照するときは type import を使う

import { Observable } from "rxjs";
import { v4 as uuid } from "uuid";
export interface Comment {
  id: string;
  name: string;
  message: string;
  createdAt: number;
}

export const makeComment =
  (name: string) =>
  (message: string): Comment => ({
    id: uuid(),
    name,
    message,
    createdAt: Date.now(),
  });

export type CommentObserver = Observable<Comment>;
