import laptop from "@/public/assets/laptopanimation.json";
import Lottie from "lottie-react";

const MyAnimation = () => {
  return (
    <div className="w-full flex justify-center items-center py-2 sm:py-4">
      <div className="relative">
        {/* دائرة خلفية للتأثير البصري */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl scale-110 animate-pulse"></div>

        {/* الأنيميشن */}
        <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
          <Lottie
            animationData={laptop}
            loop={true}
            style={{
              width: "100%",
              height: "100%",
              filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default MyAnimation;
