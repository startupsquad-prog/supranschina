// src/pages/Page1.jsx
import { useState, useEffect } from "react";
import axios from "axios";

const airtableToken = import.meta.env.VITE_AIRTABLE_TOKEN;
// const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
// const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME_Navbar_Text;

const AIRTABLE_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_AIRTABLE_TABLE_NAME_Navbar_Text}`;

export default function TopBannerNavbar() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [records, setRecords] = useState([]);

  // ✅ Fetch data
  const fetchData = async () => {
    try {
      const res = await axios.get(AIRTABLE_URL, {
        headers: {
          Authorization: `Bearer ${airtableToken}`,
        },
      });
      setRecords(res.data.records);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  // ✅ Submit data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text || !date) return alert("Both fields are required.");

    try {
      await axios.post(
        AIRTABLE_URL,
        {
          fields: {
            Text: text,
            Date: date,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${airtableToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setText("");
      setDate("");
      fetchData(); // refresh
    } catch (err) {
      console.error("Error posting data:", err);
    }
  };

  // ✅ Delete record
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${AIRTABLE_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${airtableToken}`,
        },
      });
      fetchData(); // refresh
    } catch (err) {
      console.error("Error deleting record:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Page 1: Manage Airtable Data</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {records.map((record) => (
          <li key={record.id}>
            <strong>{record.fields.Text}</strong> - {record.fields.Date}
            <button
              onClick={() => handleDelete(record.id)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
