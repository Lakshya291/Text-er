import React, { useState } from "react";
// import { Buffer } from "node:buffer";

export default function TextForm(props) {
	const [Text, setText] = useState("");

	// This func makes function uppercase on button click
	const handleUp = () => {
		let newText = Text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to uppercase!", "success");
	};

	// This func makes function lowercase on button click
	const handleLow = () => {
		let newText = Text.toLowerCase();
		setText(newText);
		props.showAlert("Converted to lowercase!", "success");
	};

	//this func capitalizes the first letter of first word of each sentence.
	const handleSenCl = () => {
		let newText = Text.toLowerCase();
		let words = newText.split(". ");

		for (let i = 0; i < words.length; i++) {
			words[i] = words[i][0].toUpperCase() + words[i].substring(1);
		}
		words.join(". ");
		setText(words.join(". "));

		props.showAlert("Sentence case applied!", "success");
	};

	//this func capitalizes first letter of each word
	const handleCapWord = () => {
		let newText = Text.toLowerCase();
		let words = newText.split(" ");

		for (let i = 0; i < words.length; i++) {
			words[i] = words[i][0].toUpperCase() + words[i].substring(1);
		}
		words.join(". ");
		setText(words.join(" "));

		props.showAlert("Each word capitalized", "success");
	};

	// //this func encodes text
	// const handleEn = () => {
	// 	console.log(Buffer.from(Text, "latin1"));
	// 	// setText(newText);
	// };

	// //this func decodes text
	// const handleDec = () => {
	// 	let newText = Text;
	// 	console.log(newText.toString("latin1"));
	// 	// setText(newText);
	// };

	//this func removes extra spaces from the text.
	const handleDelExSpace = () => {
		setText(Text.trim().replace(/ +(?= )/g, ""));
		props.showAlert("Extra spaces trimmed!", "success");
	};

	// this func handles copy
	const handleCopy = () => {
		navigator.clipboard.writeText(Text);
		props.showAlert("Copied to clipboard!", "success");
	};

	//thi func clear the text area
	const handleClear = () => {
		setText("");
		props.showAlert("Text cleared!", "success");
	};

	// This function handles all the changes occurring in textarea
	const handleOnChange = (e) => {
		setText(e.target.value);
	};

	return (
		<>
			<div
				className="container mt-3"
				style={{
					color: props.mode === "dark" ? "white" : "black",
				}}
			>
				<h2>{props.TextFormHeading}</h2>
				<div className="mb-3">
					<textarea
						id="myBox"
						className="form-control"
						placeholder={props.placeholder}
						rows="4"
						value={Text}
						style={{
							backgroundColor: props.mode === "dark" ? "#212529" : "white",
							color: props.mode === "dark" ? "white" : "black",
						}}
						onChange={handleOnChange}
					></textarea>
				</div>

				<button
					className="btn border border-dark mx-2 my-2"
					style={{
						backgroundColor: props.mode === "dark" ? "#BB86FC" : "white",
						color: props.mode === "dark" ? "white" : "black",
					}}
					onClick={handleUp}
				>
					Uppercase
				</button>
				<button
					className="btn border border-dark mx-2 my-2"
					style={{
						backgroundColor: props.mode === "dark" ? "#BB86FC" : "white",
						color: props.mode === "dark" ? "white" : "black",
					}}
					onClick={handleLow}
				>
					Lowercase
				</button>
				<button
					className="btn border border-dark mx-2 my-2"
					style={{
						backgroundColor: props.mode === "dark" ? "#BB86FC" : "white",
						color: props.mode === "dark" ? "white" : "black",
					}}
					onClick={handleSenCl}
				>
					Sentence Case
				</button>
				<button
					className="btn border border-dark mx-2 my-2"
					style={{
						backgroundColor: props.mode === "dark" ? "#BB86FC" : "white",
						color: props.mode === "dark" ? "white" : "black",
					}}
					onClick={handleCapWord}
				>
					Capitalize each word
				</button>

				{/* <button
					className="btn border border-dark mx-2 my-2"
					style={{
						backgroundColor: props.mode === "dark" ? "#BB86FC" : "white",
						color: props.mode === "dark" ? "white" : "black",
					}}
					onClick={handleEn}
					>
					Encode
					</button>
					<button
					className="btn border border-dark mx-2 my-2"
					style={{
						backgroundColor: props.mode === "dark" ? "#BB86FC" : "white",
						color: props.mode === "dark" ? "white" : "black",
					}}
					onClick={handleDec}
					>
					Decode
				</button> */}
				<button
					className="btn border border-dark mx-2 my-2"
					style={{
						backgroundColor: props.mode === "dark" ? "#BB86FC" : "white",
						color: props.mode === "dark" ? "white" : "black",
					}}
					onClick={handleDelExSpace}
				>
					Remove extra Spaces
				</button>

				<button
					className="btn border border-dark mx-2 my-2"
					style={{
						backgroundColor: props.mode === "dark" ? "#BB86FC" : "white",
						color: props.mode === "dark" ? "white" : "black",
					}}
					onClick={handleCopy}
				>
					Copy Text
				</button>
				<button
					className="btn border border-dark mx-2 my-2"
					style={{
						backgroundColor: props.mode === "dark" ? "#BB86FC" : "white",
						color: props.mode === "dark" ? "white" : "black",
					}}
					data-bs-toggle="modal"
					data-bs-target="#clearAlertModal"
				>
					Clear Text
				</button>

				{/* Modal */}
				<div
					className="modal fade"
					id="clearAlertModal"
					data-bs-backdrop="static"
					data-bs-keyboard="false"
					tabIndex="-1"
					aria-labelledby="staticBackdropLabel"
					aria-hidden="true"
					style={{
						color: "black",
					}}
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="staticBackdropLabel">
									Alert!
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">Do you want to clear text?</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									No, I want to re-check.
								</button>
								<button
									type="button"
									className="btn btn-primary"
									data-bs-dismiss="modal"
									style={{
										backgroundColor:
											props.mode === "dark" ? "#BB86FC" : "white",
										color: props.mode === "dark" ? "white" : "black",
									}}
									onClick={handleClear}
								>
									Yes, I'm Sure.
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Code */}
			<div
				className="container my-4"
				style={{
					color: props.mode === "dark" ? "white" : "black",
				}}
			>
				<h4>Your Text Summary</h4>
				{Text.match(/^\s*$/) ? (
					<p>0 words and 0 characters.</p>
				) : (
					<p>
						{Text.trim().split(" ").length} words and{" "}
						{Text.replace(/\s+/g, "").length} characters.
					</p>
				)}
				<p>
					It will take{" "}
					<b>
						{(
							Math.round(0.005 * Text.trim().split(" ").length * 100) / 100
						).toFixed(1)}{" "}
						Minutes
					</b>{" "}
					or{" "}
					<b>
						{Math.round(0.005 * Text.trim().split(" ").length * 60).toFixed(1)}{" "}
						Seconds
					</b>{" "}
					to read this paragraph.
				</p>
				<h4>Preview Text</h4>
				<p className="border border-secondary border-2 border-opacity-25 rounded-2 lead p-2">
					{Text.match(/^\s*$/)
						? "Enter Something in the text box above to preview it here."
						: Text}
				</p>
			</div>
		</>
	);
}
