
import { useEffect, useState } from "react";
import axios from "axios";

const airtableToken = import.meta.env.VITE_AIRTABLE_TOKEN;
// const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
// const tableName = "homephoto"; // 👈 your table name

const AIRTABLE_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_AIRTABLE_TABLE_NAME_Home_Photo}`;

export default function HeroSectionPhoto() {
  const [record, setRecord] = useState(null);
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");

  // ✅ Fetch first record
  const fetchData = async () => {
    try {
      const res = await axios.get(AIRTABLE_URL, {
        headers: { Authorization: `Bearer ${airtableToken}` },
      });

      if (res.data.records.length > 0) {
        setRecord(res.data.records[0]);
        setName(res.data.records[0].fields?.Name || "");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Upload & replace photos + update Name
  const handleUpload = async () => {
    if (!record) return;

    try {
      const attachments = Array.from(files).map((file) => ({
        url: URL.createObjectURL(file), // ⚠️ only demo, use real hosted URL
      }));

      const updateFields = { Name: name }; // 👈 include Name

      attachments.forEach((att, idx) => {
        updateFields[`Photo${idx + 1}`] = [att];
      });

      await axios.patch(
        `${AIRTABLE_URL}/${record.id}`,
        { fields: updateFields },
        {
          headers: {
            Authorization: `Bearer ${airtableToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      setFiles([]);
      fetchData();
    } catch (err) {
      console.error("Error uploading:", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🏠 Home Photos</h2>

      {/* Name Input */}
      <input
        type="text"
        value={name}
        placeholder="Enter album name"
        onChange={(e) => setName(e.target.value)}
        className="border px-3 py-2 rounded mb-4 w-full"
      />

      {/* File Input */}
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => setFiles(e.target.files)}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Upload & Replace
      </button>

      {/* Show Photos */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">
          {record?.fields?.Name || "No Name"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((num) => {
            const field = record?.fields?.[`Photo${num}`];
            const url = field?.[0]?.url;

            return (
              <div
                key={num}
                className="border rounded-lg overflow-hidden shadow-md text-center"
              >
                {url ? (
                  <img
                    src={url}
                    alt={`Photo ${num}`}
                    className="w-full h-40 object-cover"
                  />
                ) : (
                  <div className="h-40 flex items-center justify-center text-gray-500">
                    Empty
                  </div>
                )}
                <p className="p-2 font-medium">Photo {num}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
