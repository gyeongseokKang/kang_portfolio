import { useTheme } from "next-themes";
import { MdOutlineWorkOutline } from "react-icons/md";
import { colors } from "src/styles/colors";

interface TitleliProp {
  title?: string;
  list?: string[];
  direction?: "left" | "right";
}

export const Titleli = ({
  title,
  list = [],
  direction = "left",
}: TitleliProp) => {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? colors.dark : colors.light;
  return (
    <div className="flex flex-col flex-wrap items-start justify-between">
      {title && (
        <span
          className="inline px-2 font-bold"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0) 66%, ${bgColor} 33%)`,
          }}
        >
          {title.toLocaleUpperCase()}
        </span>
      )}
      <div className="flex flex-col flex-1 gap-1 p-2">
        {list.map((item) => (
          <div className="flex items-center gap-1">
            <MdOutlineWorkOutline size={12} />
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
