import Lottie from "lottie-react";
import laptop from "@/public/assets/laptopanimation.json";

const LaptopAnimation = () => {
  return (
    <Lottie
      animationData={laptop}
      autoplay
      loop
      style={{
        width: "100%",
        height: "100%",
        filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))",
      }}
    />
  );
};

export default LaptopAnimation;
