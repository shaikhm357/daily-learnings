import { useState } from "react";

const UserTable = ({ users }) => {
  const [searchInp, setSearchInp] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortAsc, setSortAsc] = useState(true);

  // fiter the user and sort
  const filtered = users
    .filter(
      (usr) =>
        usr.name.toLowerCase().includes(searchInp.toLowerCase()) ||
        usr.email.toLowerCase().includes(searchInp.toLowerCase()) ||
        usr.role.toLowerCase().includes(searchInp.toLowerCase())
    )
    .sort((a, b) => {
      const valA = a[sortField].toLowerCase();
      const valB = b[sortField].toLowerCase();
      const direction = sortAsc ? 1 : -1;
      return valA < valB ? -direction : valA > valB ? direction : 0;
    });

  // handle sort
  const handleSort = (field) => {
    if (field == sortField) {
      setSortAsc((prev) => !prev);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="Search by name or email..."
        onChange={(e) => setSearchInp(e.target.value)}
      />
      {filtered.length == 0 ? (
        <p>No users match your search</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("name")}>
                Name {sortField == "name" && (sortAsc ? "⬆️" : "⬇️")}
              </th>
              <th onClick={() => handleSort("email")}>
                Email {sortField == "email" && (sortAsc ? "⬆️" : "⬇️")}{" "}
              </th>
              <th onClick={() => handleSort("role")}>
                Role {sortField == "role" && (sortAsc ? "⬆️" : "⬇️")}
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((usr) => (
              <tr key={usr.id}>
                <td>{usr.name}</td>
                <td>{usr.email}@357</td>
                <td>{usr.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;
