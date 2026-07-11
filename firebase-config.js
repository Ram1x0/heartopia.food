// ==========================================================
// Firebaseコンソール → プロジェクトの設定 → 全般 → マイアプリ
// で表示される firebaseConfig の値に、下記を書き換えてください
// ==========================================================
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxezSwvcXUfAubLe3Y3Jmocq7bEbTo2pU",
  authDomain: "live-counter-69c4e.firebaseapp.com",
  databaseURL: "https://live-counter-69c4e-default-rtdb.firebaseio.com",
  projectId: "live-counter-69c4e",
  storageBucket: "live-counter-69c4e.firebasestorage.app",
  messagingSenderId: "721899438171",
  appId: "1:721899438171:web:0706b6ded97554ffee7f7e",
  measurementId: "G-MWNSJDEF7T"
};

// カウンターの識別子。
// 複数のカウンターを使い分けたい場合は overlay.html / control.html を開くURLに
// ?id=好きな名前 を付けてください（省略時は "main"）
const COUNTER_ID = new URLSearchParams(location.search).get('id') || 'main';
