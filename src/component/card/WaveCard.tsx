import { clsx } from "@nextui-org/shared-utils";

interface WaveCardProps {
  className?: string;
  children?: React.ReactNode;
  duration?: 2 | 4 | 6 | 8;
}

const WaveCard = ({ children, duration, className }: WaveCardProps) => {
  const waveClassList = {
    2: "animate-wave-2",
    4: "animate-wave-4",
    6: "animate-wave-6",
    8: "animate-wave-8",
  };

  const randomDelay = waveClassList[duration];

  return (
    <div
      className={clsx(
        `w-fit bg-background/60 dark:bg-default-100/50 flex flex-col items-center justify-center p-2 m-2 rounded-md shadow-lg ${randomDelay}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default WaveCard;
