# danmark

めっちゃpluggableなニコニコメント chrome拡張

## プラグインの追加方法

1. `src/contentScript/plugins`以下にファイルを作成します。（`example.ts`）

```ts
// 1. Commentのインターフェイスに沿って値を整える
const makeExampleComment = (fetchData): Comment => {
  const provider = "example";
  const message = fetchData.data();
  return makeComment(provider)(message);
};

// 2. Observable<Comment>を作成
export const exampleObserver: CommentObserver = new Observable((subscriber) => {
  const comments$ = fetchData$.pipe(observable.map(makeExampleComment));
  comments$.subscribe(subscriber);
});
```

2. 同じフォルダにある`instances.ts`にプラグインを追加

```ts
// 3. pluginを追加する
export const commentObserver = pipe(
  merge<[Comment]>(mockObserver /** 作成したプラグインはここに追加する */)
);
```

エラーがあれば型エラーが出ます。🔔
