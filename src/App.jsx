import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleSelect(selectedButton) {
    // selectedButton => 'component' 'jsx' 'props' 'state';
    setSelectedTopic(selectedButton);
    // console.log(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            {/* here the TabButton 
            component is the parent and the content inside the tab button is 'children' a special prop that React provide.
            here the children can simply be text, jsx code html code  */}
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
            {/* using the arroe function is a common
            way to pass the argument to the function in react as 
            calling function by reference ie handleSelect()  directly
            is not allowed .*/}
          </menu>
          <div className='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
