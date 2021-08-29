// 何にも依存しないただのデータ型
// 外部から参照するときは type import を使う

import { Observable } from "rxjs";

export interface Comment {
  id: number;
  provider: string;
  message: string;
  top: number;
}

export interface CommentObserver extends Observable<Comment[]> {}
