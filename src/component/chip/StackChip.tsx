import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

interface StackChipProp {
  title?: string;
  stackList: string[];
}

export const StackChip = ({ title, stackList }: StackChipProp) => {
  return (
    <div className="mt-2">
      {title && <span className="text-sm"># {title}</span>}
      <div className="flex flex-row flex-wrap gap-1">
        {stackList.map((stack, index) => (
          <Tooltip content={stack}>
            <div className="flex flex-row items-center gap-1">
              <Image
                src={`/icons/${stack.toLowerCase()}.svg`}
                height={25}
                width={25}
                alt={stack}
              />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
