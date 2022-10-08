
import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

	useEffect(() => {
		tg.ready();
	}, [])

	const onClose = () => {
		tg.close()
	}

	return (
		<div className="App">
			<p>Артур ти класний, але Маша краща за тебе </p>
			<h1>Привіт, Маша, ти класно вигляда</h1>
			<button onClick={onClose}> Тиць сюди </button >
		</div>
	);
}

export default App;
