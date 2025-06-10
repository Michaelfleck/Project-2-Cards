import Header from "./components/shared/header";
import { useState } from "react";
import Card from "./Card";
import { data } from "./static/Cards";
import ReferenceLight from "../design/desktop-design-light.jpg";

const FilterBtn = ({ selected, handleSelect, label }) => {
  return (
    <button
      aria-selected={selected ? "true" : "false"}
      className="aria-selected:bg-red-500 aria-selected:text-white aria-selected:hover:text-white aria-selected:hover:bg-red-500 border border-[#e2e9f1] dark:border-transparent rounded-3xl px-4 py-1.5 cursor-pointer text-zinc-700 bg-[#fbfdfd] hover:bg-[#f7f9fc] hover:text-zinc-700 dark:hover:text-white dark:text-white dark:bg-[#2f354b] dark:hover:bg-[#525769]"
      onClick={() => handleSelect(label)}
    >
      {label}
    </button>
  );
};

const filter = [
  {
    id: 0,
    label: "All"
  },
  {
    id: 1,
    label: "Active"
  },
  {
    id: 2,
    label: "Inactive"
  },
]


function App() {
  const [selected, setSelected] = useState("All"); // All
  const [mode, setMode] = useState("dark");
  const [cards, setCards] = useState(data) // [{}]

  function handleSelect(itemSelected) {
    setSelected(itemSelected);
  }

  function toggleMode() {
    setMode(mode === "dark" ? "light" : "dark");
    console.log(mode);
  }

  // Light top #ebf2fc
  // Light bottom #effbf9

  function toggleCardStatus(id, status) { // 0, Active
    const tempCards = cards.map((card, index) => 
      index === id ? { ...card, status } : card
    )
    setCards(tempCards)
  }

  function handleDelete(id) {
    const tempCards = cards.filter((card) => card.id !== id);
    setCards(tempCards)
  }

  const filteredCards = cards.filter((card) => {
    if (selected === "All") return true;
    return card.status === selected;
  })

  return (
    <div className={mode === "dark" ? "dark" : "light"}>
      <div className="min-h-screen bg-gradient-to-t dark:bg-gradient-to-b from-[#ebf2fc] dark:from-[#050a1d] to-[#effbf9] dark:to-[#0a1542]">
        <div className="mx-auto max-w-7xl">
          <Header mode={mode} toggleMode={toggleMode} />
          <div
            className={`flex justify-between items-center ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            <h1 className="text-3xl font-bold">Extensions List</h1>
            <div className="flex justify-between items-center gap-4">
              {filter?.map((item) => (
                <FilterBtn
                  selected={selected === item.label} // "All" === "All" => true
                  handleSelect={handleSelect}
                  label={item.label}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 py-4">
            {filteredCards?.map((item) => (
              <Card key={item.id} id={item.id} label={item.label} description={item.description} icon={item.icon} status={item.status} toggleCardStatus={toggleCardStatus} handleDelete={handleDelete} mode={mode}/>
            ))}
          </div>
        </div>
      </div>
      <img src={ReferenceLight}>
      </img>
    </div>
  );
}

export default App;
