
import insta from "../../assets/images/insta.jpeg";
import linkdn from "../../assets/images/linkdn.jpeg";
import x from "../../assets/images/x.jpeg";
import youtube from "../../assets/images/youtube.jpeg";
import fb from "../../assets/images/fb.jpeg";

const socialMedia = [
  { icon: x, link: "https://x.com/imsuprans", row: "top" },
  { icon: youtube, link: "https://www.youtube.com/channel/UCPaf9OniHYTpjYPs3_K-B9w", row: "top" },
  { icon: linkdn, link: "https://www.linkedin.com/in/suprans?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", row: "top" },
  { icon: fb, link: "https://www.facebook.com/supranschina", row: "bottom" },
  { icon: insta, link: "https://www.instagram.com/suprans.china?igsh=MTd2cmprbjhoMGhibA%3D%3D", row: "bottom" },
];

export default function SocialMediaLinks() {
  return (
    <>
      <style>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .floating {
          animation: floatUpDown 4s ease-in-out infinite;
        }
      `}</style>

      <div className="text-center py-12 relative">
        <h2 className="text-xl md:text-2xl font-medium mb-12">
          Check Us Out on your Favourite{" "}
          <span className="text-red-600 font-semibold">Social Media</span>{" "}
          Platforms
        </h2>

        <div className="flex flex-col items-center gap-8 relative">
          {/* Top Row */}
          <div className="flex gap-6 md:gap-60 flex-wrap justify-center relative z-10">
            {socialMedia
              .filter((s) => s.row === "top")
              .map((s, i) => (
                <a
                  href={s.link}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                >
                  <div className="bg-red-100 p-1 rounded-xl shadow-md">
                    <div className="bg-gradient-to-tr from-red-500 to-red-300 p-1 rounded-xl">
                      <img
                        src={s.icon}
                        alt="social"
                        className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-contain bg-white floating"
                      />
                    </div>
                  </div>
                </a>
              ))}
          </div>

          {/* Bottom Row */}
          <div className="flex gap-6 md:gap-60 flex-wrap justify-center relative z-10">
            {socialMedia
              .filter((s) => s.row === "bottom")
              .map((s, i) => (
                <a
                  href={s.link}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                >
                  <div className="bg-red-100 p-1 rounded-xl shadow-md">
                    <div className="bg-gradient-to-tr from-red-500 to-red-300 p-1 rounded-xl">
                      <img
                        src={s.icon}
                        alt="social"
                        className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-contain bg-white floating"
                      />
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
