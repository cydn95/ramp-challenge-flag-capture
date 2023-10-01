import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  text: string;
  delay?: number;
}

const TypewriterEffect = ({ text, delay = 500 }: TypewriterEffectProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, delay);

    if (count >= text.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [text, count, delay]);

  return <>{text.substring(0, count)}</>;
};

export default TypewriterEffect;
