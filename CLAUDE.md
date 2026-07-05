# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイドラインを提供します。

## プロジェクト概要

**dash-board** はダッシュボードアプリです。詳細な仕様は今後の開発の中で追記していきます。

- リポジトリURL: https://github.com/benizmrn-dotcom/taskboard.git

## 技術スタック

- React

## 開発上の注意

- 新しい依存関係（npm パッケージなど）を追加する場合は、必要性を明確にしてから導入すること。
- コンポーネントは責務ごとに分割し、表示（UI）とデータ取得・状態管理のロジックは分離して管理すること。

## デプロイ

- GitHub Pagesで公開する。`main` へのpushをトリガーに `.github/workflows/deploy.yml` が自動でビルド・デプロイする。
- 公開URL: https://benizmrn-dotcom.github.io/taskboard/
- リポジトリの Settings > Pages > Source を「GitHub Actions」に設定しておくこと（初回のみ手動設定が必要）。
- Viteの `base` はリポジトリ名に合わせて `/taskboard/` を設定済み（`vite.config.js`）。

## Git運用ルール

- コードに変更を加えるたびに、必ず変更内容をコミットし、GitHubへプッシュすること。
- コミットメッセージは変更内容が分かるように簡潔に記述すること。
- 作業を中断・完了する際は、プッシュし忘れがないか必ず確認すること。
