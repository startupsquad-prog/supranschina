
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          `https://api.airtable.com/v0/${
            import.meta.env.VITE_AIRTABLE_BASE_ID
          }/${import.meta.env.VITE_AIRTABLE_TABLE_NAME_Home_Review}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
            },
          }
        );

        const data = await response.json();

        const formatted = data.records.map((record) => ({
          name: record.fields.Name || "Anonymous",
          image:
            record.fields.Image?.[0]?.url ||
            "https://via.placeholder.com/150",
          text: record.fields.Text || "",
        }));

        setTestimonials(formatted);
      } catch (error) {
        console.error("❌ Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Helper function to truncate long text
  const truncateText = (text, wordLimit = 34) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <section className="bg-white py-16 text-center">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mb-2">
        Don’t believe us? <br />
        <span>
          See what our <span className="text-red-600">customers</span> wanna say
        </span>
      </h2>

      {/* Swiper Slider */}
      <div className="my-10 px-4">
        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          loop={true}
          grabCursor={false}
          allowTouchMove={false}
          slidesPerView={"auto"}
          spaceBetween={20}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          observer={true}
          observeParents={true}
          className="w-full"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-white border border-red-500 p-7 rounded-xl shadow-lg flex flex-col justify-between !w-[270px] min-h-[300px] max-h-[300px]"
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full mr-3 border-2 border-red-500 overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-md font-semibold">{item.name}</h3>
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-gray-700 mb-4 line-clamp-6 text-justify">
                {truncateText(item.text, 30)}
              </p>

              {/* Star Rating */}
              <div className="flex justify-center text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Footer Text */}
      <p className="text-sm text-gray-800">
        Trusted by{" "}
        <span className="text-red-600 font-semibold">Over 10,000</span>{" "}
        Entrepreneurs around the Globe
      </p>
    </section>
  );
}
