import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: `I'm the content of the Section 1`
  },
  {
    tab: "Section 2",
    content: `I'm the content of the Section 2`
  }
];

const useTabs = (initTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initTab);

  if (!allTabs || !Array.isArray(allTabs)) return;

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      {content.map((section, index) => {
        return (
          <button onClick={() => changeItem(index)} key={index}>
            {section.tab}
          </button>
        );
      })}
      <div>{currentItem.content}</div>
    </div>
  );
}
