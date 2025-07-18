# 製造業デジタル推進サイト - DX Solutions

製造業のデジタル変革を支援する専門企業のWebサイトです。

## 機能

- **レスポンシブデザイン**: スマートフォン、タブレット、デスクトップに対応
- **モダンUI**: グラデーションとアニメーションを使用した現代的なデザイン
- **Unsplash API統合**: 動的な画像読み込み機能
- **インタラクティブ要素**: FAQ、モバイルメニュー、フォーム検証
- **5ページ構成**: ホーム、サービス、事例、会社情報、お問い合わせ

## ページ構成

1. **ホーム (index.html)**: 会社概要、強み、実績
2. **サービス (services.html)**: IoT統合、AI・機械学習、クラウド化
3. **事例 (cases.html)**: 導入事例、お客様の声
4. **会社情報 (about.html)**: 会社概要、価値観、経営陣
5. **お問い合わせ (contact.html)**: お問い合わせフォーム、FAQ

## セットアップ

### Unsplash API設定

1. [Unsplash Developer](https://unsplash.com/developers) でアカウントを作成
2. 新しいアプリケーションを作成してAccess Keyを取得
3. `js/script.js`の`UNSPLASH_ACCESS_KEY`を実際のキーに置き換え

```javascript
const UNSPLASH_ACCESS_KEY = 'your-actual-access-key-here';
```

### ローカル開発

1. このディレクトリでローカルサーバーを起動:
```bash
python -m http.server 8000
# または
npx serve
```

2. ブラウザで `http://localhost:8000` にアクセス

## ファイル構成

```
/
├── index.html          # ホームページ
├── services.html       # サービスページ
├── cases.html          # 事例ページ
├── about.html          # 会社情報ページ
├── contact.html        # お問い合わせページ
├── css/
│   └── style.css       # メインスタイルシート
├── js/
│   └── script.js       # JavaScript機能
└── README.md           # このファイル
```

## 技術仕様

- **HTML5**: セマンティックマークアップ
- **CSS3**: Flexbox、Grid、アニメーション
- **JavaScript ES6+**: モジュール、async/await
- **Unsplash API**: 画像取得
- **レスポンシブデザイン**: モバイルファースト

## カスタマイズ

### 色の変更
`css/style.css`の変数を修正:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
}
```

### 画像の変更
`js/script.js`の`loadUnsplashImage()`の検索クエリを修正

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。