import React, { useState } from 'react';

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

const useTabs = (initTab,allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initTab);

 return {
   currentItem:allTabs[currentIndex],
   changeItem:setCurrentIndex
 }


}

const App = () => {
  const {currentItem,changeItem} = useTabs(0,content)

  return (
    <div className="App">
      {
        content.map((item,index)=> <button onClick={()=> changeItem(index)} key={index}>{item.tab}</button>)
      }
      <div>
        {
          currentItem.content
        }
      </div>
    </div>
  );
}

export default App;
