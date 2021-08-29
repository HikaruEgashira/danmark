// このディレクトリ全体に依存する
// 外部から参照される

import { pipe } from "fp-ts/lib/function";
import { merge } from "rxjs";
import type { Comment } from "./commentObserver";
import { mockObserver } from "./mock";

// 3. pluginを追加する
export const commentObserver = pipe(
  merge<[Comment]>(mockObserver /** 作成したプラグインはここに追加する */)
);
