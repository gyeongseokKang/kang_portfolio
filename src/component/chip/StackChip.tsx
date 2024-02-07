import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

interface StackChipProp {
  title?: string;
  stackList: string[];
  size?: number;
}

export const StackChip = ({ title, stackList, size = 25 }: StackChipProp) => {
  return (
    <div className="mt-2">
      {title && <span className="text-sm"># {title}</span>}
      <div className="flex flex-row flex-wrap gap-1">
        {stackList.map((stack, index) => (
          <Tooltip content={stack}>
            <div className="flex flex-row items-center gap-1">
              <Image
                src={`/icons/${stack.toLowerCase()}.svg`}
                height={size}
                width={size}
                alt={stack}
              />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
