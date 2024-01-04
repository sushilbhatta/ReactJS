import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    // selectedButton => 'component' 'jsx' 'props' 'state';
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div className='tab-content'>
        {/* here selectedTopic is 'string' type. */}
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title='Examples' id='examples'>
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        {/* here the TabButton 
      component is the parent and the content inside the tab button is 'children' a special prop that React provide.
      here the children can simply be text, jsx code html code  */}
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton selectedTopic='props' onClick={() => handleSelect("props")}>
          Props
        </TabButton>
        <TabButton selectedTopic='state' onClick={() => handleSelect("state")}>
          State
        </TabButton>
        {/* using the arroe function is a common
      way to pass the argument to the function in react as 
      calling function by reference ie handleSelect()  directly
      is not allowed .*/}
      </menu>
      {tabContent}
    </Section>
  );
}
