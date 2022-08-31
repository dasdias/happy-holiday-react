// import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import style from './App.css'; // удалить

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
};

function App() {
  return (
    <div style={wrapper}>
      <Header/>
      <div style={style.card}>
        <div className={style.wrapper}>
          <img className={style.image} src="" alt="" />
          <p className={style.felicitation}>
            Поздравляю с днем рожденья!
            Пусть будет жизнь полна веселья,
            Не будет грусти и хлопот,
            А только счастье круглый год!

            Желаю творческих успехов,
            Прекрасных дней, улыбок, смеха.
            Любви, душевного тепла,
            Как сказка, чтобы жизнь была!
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
