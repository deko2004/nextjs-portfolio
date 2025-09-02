"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// تحميل Lottie والأنيميشن فقط إذا ظهر العنصر
const MyAnimation = dynamic(() => import("./MyAnimation"), {
  ssr: false,
  loading: () => <div className="h-40" />, // عنصر مؤقت
});

export default function MyAnimationLazy() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{show && <MyAnimation />}</div>;
}
