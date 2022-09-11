import React from "react";

function Alert(props) {
	return (
		<div style={{ height: "50px" }}>
			{props.alert && (
				<div
					className={`alert alert-${props.alert.type} fade show`}
					role="alert"
				>
					<strong>{props.alert.type.toUpperCase()}:</strong> {props.alert.msg}
				</div>
			)}
		</div>
	);
}

export default Alert;
