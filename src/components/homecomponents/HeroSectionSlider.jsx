
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

        // Parse photos and their corresponding links from the first record
        if (records.length > 0) {
          const record = records[0].fields;

          let imgs = [];

          // Loop over all keys in the record fields
          Object.keys(record).forEach((field) => {
            if (field.startsWith("Photo")) {
              // Extract photo number: e.g. Photo1 -> 1
              const photoNumber = field.replace("Photo", "");

              const photoField = record[field];
              // Get photo URL if exists
              const photoUrl = Array.isArray(photoField) && photoField[0]?.url ? photoField[0].url : null;

              // Find corresponding link field (e.g. Photo1Link)
              const linkFieldName = `Photo${photoNumber}Link`;
              const linkUrl = record[linkFieldName] || "#"; // fallback to "#" if no link

              if (photoUrl) {
                imgs.push({
                  url: photoUrl,
                  order: parseInt(photoNumber, 10),
                  link: linkUrl,
                });
              }
            }
          });

          // Sort images by their Photo number
          imgs.sort((a, b) => a.order - b.order);

          setDesktopImages(imgs);
        }
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

  if (!desktopImages.length) return <div>Loading...</div>;

  return (
    <div className="relative w-full h-[85vh] hidden sm:block overflow-hidden">
      {desktopImages.map((img, idx) => (
        <a
          key={idx}
          href={img.link}
          target="_blank" // Open in new tab, remove if you want same tab
          rel="noopener noreferrer"
          className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${
            idx === currentDesktopIndex
              ? "translate-x-0"
              : idx < currentDesktopIndex
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          <img
            src={img.url}
            alt={`Slide ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </a>
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
