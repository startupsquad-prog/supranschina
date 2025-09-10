
import img1 from "../../assets/images/L1.png";
import img2 from "../../assets/images/L2.png";
import img3 from "../../assets/images/L3.png";
import img4 from "../../assets/images/L4.png";
import img5 from "../../assets/images/L5.png";
import img6 from "../../assets/images/L6.png";
import img7 from "../../assets/images/L6.png";
import img8 from "../../assets/images/L8.png";
import img9 from "../../assets/images/L9.png";
import img10 from "../../assets/images/L10.png";
import img11 from "../../assets/images/L11.png";
import img12 from "../../assets/images/L12.png";
import img13 from "../../assets/images/L13.png";
import img14 from "../../assets/images/L6.png";
import img15 from "../../assets/images/L15.png";
import img16 from "../../assets/images/L16.png";
import img17 from "../../assets/images/L17.png";

// ✅ Animation styles
const styles = `
  @keyframes scroll-left {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }

  @keyframes scroll-right {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0%); }
  }

  .marquee-left {
    animation: scroll-left 60s linear infinite;
  }

  .marquee-right {
    animation: scroll-right 55s linear infinite;
  }
`;

const imagesRow1 = [img1, img2, img3, img4, img5, img6, img13, img14];
const imagesRow2 = [img7, img8, img9, img10, img11, img12, img15, img16, img17];

// ✅ Reusable scrolling row
const RedBoxRow = ({ images, direction }) => {
  const repeatedImages = [...images, ...images, ...images];
  return (
    <div className="overflow-hidden w-full py-4 sm:py-6">
      <div
        className={`flex gap-6 sm:gap-10 w-max ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
      >
        {repeatedImages.map((img, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-xl w-40 h-20 sm:w-56 sm:h-28 flex items-center justify-center shadow-sm border border-gray-200"
          >
            <img
              src={img}
              alt={`scroll-box-${idx}`}
              className="max-w-[90%] max-h-[80%] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Main component
const ScrollingBoxes = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-4 pt-10 sm:pt-16">
      <style>{styles}</style>

      <h1 className="text-2xl sm:text-4xl font-semibold mb-4 sm:mb-6 text-center">
        Businesses Empowered by{" "}
        <span className="text-red-600 font-bold">SUPRANS</span>
      </h1>

      <RedBoxRow images={imagesRow1} direction="left" />
      <RedBoxRow images={imagesRow2} direction="right" />
    </div>
  );
};

export default ScrollingBoxes;
