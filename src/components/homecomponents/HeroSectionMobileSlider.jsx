
import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

const airtableToken = import.meta.env.VITE_AIRTABLE_TOKEN;
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME_Home_Photo;
const AIRTABLE_URL = `https://api.airtable.com/v0/${baseId}/${tableName}`;

export default function HeroSectionMobileSlider() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(
          `${AIRTABLE_URL}?filterByFormula=${encodeURIComponent("({Name}='2CTA')")}`,
          {
            headers: { Authorization: `Bearer ${airtableToken}` },
          }
        );

        const records = res.data.records;

        if (records.length > 0) {
          const record = records[0];
          const fetchedImages = [];

          Object.keys(record.fields).forEach((field) => {
            if (field.startsWith("Photo")) {
              const photoArray = record.fields[field];
              if (Array.isArray(photoArray) && photoArray[0]?.url) {
                fetchedImages.push({
                  url: photoArray[0].url,
                  order: parseInt(field.replace("Photo", "")) || 0,
                });
              }
            }
          });

          fetchedImages.sort((a, b) => a.order - b.order);
          setImages(fetchedImages.map((f) => f.url));
        }
      } catch (error) {
        console.error("Error fetching Airtable images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[41vh] overflow-hidden sm:hidden m-0 p-0">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx}`}
          className={`absolute inset-0 w-full  object-cover transition-transform duration-1000 ease-in-out block ${
            idx === currentIndex
              ? "translate-x-0"
              : idx < currentIndex
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
          style={{ margin: 0, padding: 0 }}
        />
      ))}

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white p-2 rounded-full z-10"
      >
        <ChevronLeft className="text-black w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white p-2 rounded-full z-10"
      >
        <ChevronRight className="text-black w-5 h-5" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === currentIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
