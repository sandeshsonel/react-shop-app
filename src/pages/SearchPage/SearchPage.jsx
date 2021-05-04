import React, { useState, useRef, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import Loader from "src/components/Loader/Loader";
import axios from "axios";
const SearchPage = (props) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sugesstions, setSuggesstionResult] = useState([]);
  const inputRef = useRef(null);

  async function fetchData(filter) {
    try {
      const queryResult = await axios.get(`http://localhost:8000/api/v1/products/searchQuery/${filter}`);
      setSuggesstionResult(queryResult.data.suggestions);
      setLoading(false);
    } catch (error) {}
  }

  const debounceLoadData = useCallback(debounce(fetchData, 1000), []);

  useEffect(() => {
    if (input.length > 3) {
      debounceLoadData(input);
    }
  }, [input]);

  return (
    <div className="mt-16 px-3 lg:px-0 md:px-0 sm:px-2 xl:px-0">
      {input.length > 3 && loading && (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <Loader />
        </div>
      )}
      <div className="flex items-center justify-between px-3 py-2 xl:py-3 rounded bg-gray-100">
        <div className="flex items-center space-x-3 w-full">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 xl:w-6 text-gray-500 fill-current" viewBox="0 0 512 512">
              <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
            </svg>
          </div>
          <div className="w-full">
            <input
              onChange={(e) => {
                setInput(e.target.value);
                setLoading(true);
              }}
              value={input}
              autoFocus={true}
              className="bg-gray-100 w-full xl:text-base outline-none"
              ref={inputRef}
              type="text"
              placeholder="Search your products..."
            />
          </div>
        </div>
        {input.length > 0 && (
          <div onClick={() => setInput("")} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 xl:w-6 text-gray-600 fill-current" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368" />
            </svg>
          </div>
        )}
      </div>
      <div className=" mt-4">
        {sugesstions &&
          sugesstions.map((sug) => (
            <div className="hover:bg-gray-100 cursor-pointer">
              <div className="flex items-center justify-between px-2 py-2">
                <p>{sug.name}</p>
                <span>{sug.length}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
