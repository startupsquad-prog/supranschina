
import { useEffect, useState } from "react";

export default function TestimonialsMarquee() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_AIRTABLE_TABLE_NAME_Home_Review}`,
          {
            headers: { Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}` },
          }
        );
        const data = await res.json();
        const formatted = (data.records || []).map((r) => ({
          name: r.fields.Name || "Anonymous",
          image: r.fields.Image?.[0]?.url || "https://via.placeholder.com/150",
          text: r.fields.Text || "",
        }));
        setTestimonials(formatted);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTestimonials();
  }, []);

  const truncate = (t, n = 28) => {
    const a = (t || "").split(" ");
    return a.length <= n ? t : a.slice(0, n).join(" ") + "...";
  };

  // duplicate for seamless loop
  const items = [...testimonials, ...testimonials];

  if (!testimonials.length) return null;

  return (
    <section className="bg-white py-16">
      <h2 className="text-3xl font-bold text-center mb-6">
        Don’t believe us? <br />
        <span>See what our <span className="text-red-600">customers</span> wanna say</span>
      </h2>

      <div className="overflow-hidden">
        <div className="marquee flex gap-4 items-stretch">
          {items.map((it, idx) => (
            <article
              key={idx}
              className="min-w-[250px] sm:min-w-[270px] bg-white border border-red-500 p-5 rounded-xl shadow flex flex-col justify-between"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full mr-3 border-2 border-red-500 overflow-hidden">
                  <img src={it.image} alt={it.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold">{it.name}</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2">{truncate(it.text, 28)}</p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </article>
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-gray-800 mt-6">
        Trusted by <span className="text-red-600 font-semibold">Over 10,000</span> Entrepreneurs
      </p>

      <style>{`
        .marquee {
          display: flex;
          align-items: stretch;
          gap: 16px;
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
        /* hover/touch: pause */
        .marquee:hover, .marquee:active { animation-play-state: paused; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); } /* because content is duplicated */
        }

        /* speed tweak on small screens */
        @media (max-width: 640px) {
          .marquee { animation-duration: 15s; }
        }
      `}</style>
    </section>
  );
}
