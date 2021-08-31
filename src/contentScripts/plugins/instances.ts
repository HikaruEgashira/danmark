// このディレクトリ全体に依存する
// 外部から参照される

import { merge } from "rxjs";
import type { Comment, CommentObserver } from "./observer";

/**
 * plugins
 */

import mockObserver from "./mock";

// 3. pluginを追加する
export const commentObserver: CommentObserver = merge<[Comment]>(
  mockObserver
  /** 作成したプラグインはここに追加する */
);
