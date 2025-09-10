
import { useEffect, useState } from "react";
import axios from "axios";

// Airtable credentials from .env
const airtableToken = import.meta.env.VITE_AIRTABLE_TOKEN;
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME_Navbar_Text;

const AIRTABLE_URL = `https://api.airtable.com/v0/${baseId}/${tableName}`;

export default function TopBanner() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(AIRTABLE_URL, {
          headers: {
            Authorization: `Bearer ${airtableToken}`,
          },
        });
        setRecords(res.data.records || []);
      } catch (err) {
        console.error("Error fetching TopBanner data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-red-600 text-white text-xs sm:text-sm font-medium h-8 sm:h-10 overflow-hidden relative">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          .marquee-track {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 690s linear infinite;
          }

          .marquee-content {
            display: inline-block;
            white-space: nowrap;
            padding-right: 4rem; /* spacing between loops */
          }
        `}
      </style>

      <div className="absolute top-1/2 transform -translate-y-1/2 w-full overflow-hidden">
        <div className="marquee-track">
          {[...Array(50)].map((_, copyIndex) => (
            <span key={copyIndex} className="marquee-content">
              {records.map((record, index) => (
                <span key={index} className="mr-16 inline-block">
                  {record.fields?.Text}{" "}
                  <span className="font-bold">{record.fields?.Date}</span>.{" "}
                  <a href="#" className="underline hover:text-gray-200">
                    Register Now!
                  </a>{" "}
                  🚀 Don’t miss this opportunity!
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
