import { useState } from "react";

function JournalForm({ onAddEntry }) {
  const [journal, updateJournal] = useState("");
  const [title, updateTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onAddEntry(title, journal);
    updateJournal("");
    updateTitle("");
  }
  return (
    <div>
      <h2> New Entry </h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Title"
          value={title}
          onChange={(e) => updateTitle(e.target.value)}
        />
        <br />
        <textarea
          value={journal}
          onChange={(e) => updateJournal(e.target.value)}
          placeholder="Write your thoughts here..."
        />
        <button type="submit">Add Entry </button>
      </form>
    </div>
  );
}

export default JournalForm;
