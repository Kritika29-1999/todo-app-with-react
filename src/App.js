import { useState } from "react";
import JournalForm from "./JournalForm";
import "./styles.css";

export default function App() {
  const [entries, setEntries] = useState([]);
  const addEntry = (title, journal) => {
    const newEntry = { title, journal, id: Date.now() };
    setEntries([...entries, newEntry]);
  };
  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };
  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-blue-600">My Daily Journal</h1>
      <JournalForm onAddEntry={addEntry} />
      <div>
        <h2> Your Entries </h2>
        {entries.map((entry) => (
          <div key={entry.id}>
            <h3>{entry.title}</h3>
            <p>{entry.journal}</p>
            <button class="myButtonClass" onClick={() => deleteEntry(entry.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
