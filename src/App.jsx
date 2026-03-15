import UseState from "./Practice/UseState";
import ControlledForm from "./Practice/ControlledForm";
import UncontrolledForm from "./Practice/UncontrolledForm";
import ArrayMethod from "./Practice/ArrayMethod";
import Intreview from "./Practice/Intreview";
import UseStateHooks from "./Practice/UseStateHooks";
import { useState } from "react";
import useToggle from "./CustomHooks/useToggle";

function App() {
	let step = 3;
	const [value, setValue] = useState("");
	const [toggle, toggleValue] = useToggle(true)
	
	
	return (
		<>
			{/* Custom hooks */}
			<button onClick={toggleValue}>Toggle Heading</button>
			<button onClick={() => toggleValue(false)}>hide Heading</button>
			<button onClick={() => toggleValue(true)}>show Heading</button>

			{
				toggle ? <h1>this is the heading</h1> : null
			}
			{/* Custom Hooks ends */}

			<hr />

			<UseState />
			<Intreview step={step} onSend={setValue} />
		</>
	)
}

export default App;
