
import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

const airtableToken = import.meta.env.VITE_AIRTABLE_TOKEN;
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME_Home_Photo;

const AIRTABLE_URL = `https://api.airtable.com/v0/${baseId}/${tableName}`;

export default function HeroSectionSlider() {
  const [desktopImages, setDesktopImages] = useState([]);
  const [currentDesktopIndex, setCurrentDesktopIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(AIRTABLE_URL, {
          headers: { Authorization: `Bearer ${airtableToken}` },
        });

        const records = res.data.records;

        const getSortedImages = (record) => {
          let imgs = [];
          Object.keys(record.fields).forEach((field) => {
            if (field.startsWith("Photo")) {
              const photo = record.fields[field];
              if (Array.isArray(photo) && photo[0]?.url) {
                imgs.push({
                  url: photo[0].url,
                  order: parseInt(field.replace("Photo", "")) || 0,
                });
              }
            }
          });
          return imgs.sort((a, b) => a.order - b.order).map((i) => i.url);
        };

        if (records[0]) setDesktopImages(getSortedImages(records[0]));
      } catch (err) {
        console.error("Error fetching Airtable images:", err);
      }
    };

    fetchData();
  }, []);

  // Auto-slide for desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDesktopIndex((prev) =>
        desktopImages.length ? (prev + 1) % desktopImages.length : 0
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [desktopImages]);

  return (
    <div className="relative w-full h-[85vh] hidden sm:block overflow-hidden">
      {desktopImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx}`}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
            idx === currentDesktopIndex
              ? "translate-x-0"
              : idx < currentDesktopIndex
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        />
      ))}

      {/* Arrows */}
      <button
        onClick={() =>
          setCurrentDesktopIndex((prev) =>
            prev === 0 ? desktopImages.length - 1 : prev - 1
          )
        }
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 p-3 rounded-full shadow-lg z-10"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={() =>
          setCurrentDesktopIndex((prev) => (prev + 1) % desktopImages.length)
        }
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 p-3 rounded-full shadow-lg z-10"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {desktopImages.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === currentDesktopIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
