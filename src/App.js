import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
function App() {
	// For Toggle Div
	// const [Toggle, setToggle] = useState(false);
	// const [show, setShow] = useState(true);
	// return (
	// 	<>
	// 		<div className="container">
	// 			<p className="lead">Welcome to React</p>
	// 			<button className="btn btn-primary" onClick={() => setToggle(!Toggle)}>
	// 				Click to Toggle
	// 			</button>
	// 			{Toggle ? <p>I am Visible.</p> : null}
	// 		</div>
	// 		{/* <div className="App">
	// 			{show ? <h1>Hello World!</h1> : null}
	// 			<button onClick={() => setShow(true)}>Show</button>
	// 			<button onClick={() => setShow(false)}>Hide</button>
	// 		</div> */}
	// 	</>
	// );

	const [mode, setMode] = useState("light");

	const [alert, setAlert] = useState(null);
	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1800);
	};
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#121212";
			showAlert("Dark mode enabled!", "success");
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light mode enabled!", "success");
		}
	};
	return (
		<>
			<Navbar
				title="Text'er"
				about="About Us"
				mode={mode}
				toggleMode={toggleMode}
			/>
			<Alert alert={alert} />
			<div className="container my-2">
				<TextForm
					showAlert={showAlert}
					placeholder="Enter your text here..."
					TextFormHeading="Enter the text you want to analyze."
					mode={mode}
				/>
			</div>
		</>
	);
}

export default App;
