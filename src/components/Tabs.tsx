import { useState } from "react";
import State from "./State";
import ArkPassive from "./ArkPassive";
import Skills from "./Skills";
import CollectPoints from "./CollectPoints";
import Owned from "./Owned";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    { name: "종합", content: <State /> },
    { name: "아크패시브", content: <ArkPassive /> },
    { name: "스킬", content: <Skills /> },
    { name: "수집형 포인트", content: <CollectPoints /> },
    { name: "보유캐릭터", content: <Owned /> },
  ];

  return (
    <>
      <ul className="tab_menu_list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setCurrentTab(index)}
            className={
              currentTab === index ? "tab_menu_item isActive" : "tab_menu_item"
            }
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <div className="tab_content">
        <p>{tabs[currentTab].content}</p>
      </div>
    </>
  );
};

export default Tabs;
