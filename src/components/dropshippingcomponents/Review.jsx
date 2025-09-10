
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

export default function Review() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${encodeURIComponent(
            import.meta.env.VITE_AIRTABLE_TABLE_NAME_Home_Review
          )}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
            },
          }
        );

        const data = await res.json();
        console.log("Airtable response:", data);

        const formatted = data.records.map((record) => ({
          id: record.id,
          name: record.fields?.Name || "Anonymous",
          text: record.fields?.Text || "No review provided.",
          photo:
            record.fields?.Image?.[0]?.url ||
            "https://via.placeholder.com/100x100.png?text=User",
        }));

        setReviews(formatted);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#730000] to-[#730000] py-1 text-center text-white">
      <h2 className="text-3xl font-bold mb-2 pt-10">
        Don’t believe us? <br />
        <span>
          See what our <span className="text-black">customers</span> wanna say
        </span>
      </h2>

      <div className="my-10 px-4">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={30}
          loop={true}
          freeMode={true} // 👈 smooth scrolling
          grabCursor={false}
          allowTouchMove={false} // 👈 user touch disable
          slidesPerView={"auto"} // 👈 auto adjust
          speed={5000} // 👈 speed of movement
          autoplay={{
            delay: 0, // 👈 no delay, continuous
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {reviews.map((item) => (
            <SwiperSlide
              key={item.id}
              className="bg-white border border-red-500 p-6 rounded-xl shadow-lg mx-2 text-black flex flex-col justify-between !w-[300px]" // 👈 fixed width for auto slide
            >
              <div className="flex items-center mb-4">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover border-2 border-red-600"
                />
                <h3 className="text-md font-semibold">{item.name}</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4 flex-grow">{item.text}</p>
              <div className="flex justify-center text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
