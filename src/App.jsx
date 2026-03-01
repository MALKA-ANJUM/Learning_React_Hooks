import UseState from "./Practice/UseState";
import ControlledForm from "./Practice/ControlledForm";
import UncontrolledForm from "./Practice/UncontrolledForm";
import ArrayMethod from "./Practice/ArrayMethod";
import Intreview from "./Practice/Intreview";
import UseStateHooks from "./Practice/UseStateHooks";
import { useState } from "react";

function App() {
	let step = 3;
	const [value, setValue] = useState("");
	console.log(value);
	
	return (
		<>
			<UseState />
			<Intreview step={step} onSend={setValue} />
		</>
	)
}

export default App;
