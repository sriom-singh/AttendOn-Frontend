import React, { useEffect, useState } from "react";

export function Counter({ end, duration, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span className="text-2xl font-sans-serif font-semibold text-foreground">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <div className="flex items-center gap-10 md:gap-16 py-2">
      <div>
        <Counter end={500} duration={2000} suffix="+" />
        <p className="text-xs text-muted-foreground">Companies onboarded</p>
      </div>
      <div>
        <Counter end={98} duration={2000} suffix="%" />
        <p className="text-xs text-muted-foreground">Uptime guarantee</p>
      </div>
      <div>
        <Counter end={200} duration={2500} suffix="k+" />
        <p className="text-xs text-muted-foreground">Users</p>
      </div>
    </div>
  );
}
