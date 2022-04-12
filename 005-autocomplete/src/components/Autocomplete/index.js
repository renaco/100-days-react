import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { URL_SERVICE } from "./../../settings/constant";

export const Autocomplete = () => {
  const inputRef = useRef()
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {

    inputRef.current.focus();

    const getData = async () => {
      const response = await axios.get(URL_SERVICE);
      setItems(response.data.data);
    };
    getData();
  }, []);

  const handleChange = (evt) => {
    let matches = []
    if (evt.length > 0) {
      matches = items.filter(item => {
        const regex = new RegExp(`${evt}`, 'gi')
        return item.email.match(regex);
      })
    }
    setSuggestions(matches)
    setQuery(evt)
  }

  const suggestHandler = (evt) => {
    setQuery(evt)
    setSuggestions([])
  }

  return (
    <div>
      <input onChange={event => handleChange(event.target.value)} value={query} onBlur={(() => {
        setTimeout(() => {
          setSuggestions([])
        })
      })} ref={inputRef} />
      {suggestions && suggestions?.map((suggestion, i) =>
        <div key={i} onClick={() => suggestHandler(suggestion.email)}>{suggestion.email}</div>
      )}
    </div>
  );
};
