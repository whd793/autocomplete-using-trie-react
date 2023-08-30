import "./styles.css";
import { useState } from "react";
import Trie from "./Trie";

export default function App() {
  return (
    <div className="App">
      <Autocomplete
        words={[
          "apple",
          "answer",
          "ask",
          "andrew",
          "banana",
          "orange",
          "origami"
        ]}
      />
    </div>
  );
}

const Autocomplete = ({ words }) => {
  const [suggestions, setSuggestions] = useState(false);
  const [swords, setSwords] = useState([]);

  const trie = new Trie();
  words.forEach((word) => trie.insert(word));

  const handleChange = (e) => {
    setSuggestions(true);
    console.log(e.target.value);
    setSwords(trie.findWordsWithPrefix(e.target.value));
    // console.log(trie.findWordsWithPrefix(e.target.value));
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <div className={suggestions ? "suggestions active" : "suggestions"}>
        {swords.map((w) => {
          return <div>{w}</div>;
        })}
      </div>
    </div>
  );
};
