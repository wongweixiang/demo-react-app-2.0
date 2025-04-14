import { CSSProperties, FC } from "react";

import { clsx } from "clsx";

export type SkeletonProps = {
  className?: string;
  style?: CSSProperties;
};

const Skeleton: FC<SkeletonProps> = (props) => {
  const { className, style } = props;

  return (
    <div
      className={clsx(
        "relative overflow-hidden bg-[var(--bg-color)] after:absolute after:inset-0 after:animate-[loading-skeleton-bg_1.5s_infinite] after:translate-x-[-100%] after:bg-[linear-gradient(90deg,rgba(var(--glow-color),0),rgba(var(--glow-color),.3),rgba(var(--glow-color),0))]",
        className
      )}
      style={
        {
          "--glow-color": "255, 255, 255",
          "--bg-color": "rgba(255, 255, 255, 0.05)",
          ...style,
        } as CSSProperties
      }
    ></div>
  );
};

export default Skeleton;
