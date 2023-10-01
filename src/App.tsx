import { useEffect } from "react";
import "./App.css";

import useFetchFlagText from "./hooks/useFetchFlagText";
import TypewriterEffect from "./components/TypewriterEffect";

/**
 * 
 * How to get Hidden html
 * 
 
const codes = document.getElementsByTagName("code");

let flagLink = "";

for (const code of codes) {
	const divs = code.getElementsByTagName("div");
	
	for (const div of divs) {
		const spans = div.getElementsByTagName("span");
		
		for (const span of spans) {
			const is = span.getElementsByTagName("i");
			
			for (const i of is) {
				flagLink += i.getAttribute("value");
			}
		}
	}
}

console.log(flagLink);

 */

const flagLink =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/637261";

function App() {
  const { flag, loading, fetchFlag } = useFetchFlagText();

  useEffect(() => {
    fetchFlag(flagLink);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? "Loading" : <TypewriterEffect text={flag} />}
      </header>
    </div>
  );
}

export default App;
