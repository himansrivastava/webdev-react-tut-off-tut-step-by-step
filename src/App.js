import logo from "./logo.svg";
import "./App.css";

function App() {
	const element = <h1>Hello, World</h1>;
	// This syntax is neither js not HTML. This is jsx.

	// React embraces the fact that rendering logic is inherently coupled
	// with other UI logic:
	// Instead of artificially separating technologies by putting markup and
	// logic in separate files, React separates concerns with loosely coupled
	// units called “components” that contain both.
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> {element}
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
