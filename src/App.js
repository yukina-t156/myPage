import kani from './images/kani_loop.PNG';
import './App.css';

function App() {
  return (
    <div>
    <header>
      ヘッダー予定地
    </header>
    <main>
      <h1>工事中</h1>
      <p>只今作成中です。今しばらくお待ちください。</p>
    </main>

    <div class="kani">
      <img src={kani}></img>
    </div>
    <footer>フッター予定地</footer>
    </div>
  );
}

export default App;
