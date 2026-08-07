import React, { useEffect, useState } from "react";

const DebouncedSearch = () => {
  // create states for input search loding and result
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  // call the github api
  useEffect(() => {
    if (!searchInput) return;

    let canceled = false;
    setLoading(true);

    fetch(`https://api.github.com/search/users?q=${searchInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (!canceled) {
          setResult(data.items || []);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!canceled) setLoading(false);
      });

    return () => {
      canceled = true;
    };
  }, [searchInput]);

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search github users..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {loading && <p>Searching...</p>}
      {!loading && result.length > 0 && (
        <ul>
          {result.map((user) => {
            return (
              <li key={user.id}>
                <img
                  src={user.avatar_url}
                  alt={user.loging}
                  width={32}
                  height={32}
                />
                {user.login}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DebouncedSearch;
