import { useTheme } from "next-themes";
import { colors } from "src/styles/colors";

interface SectionTitleProp {
  title?: string;
  subTitle?: string;
}

export const CustomSectionTitle = ({ title, subTitle }: SectionTitleProp) => {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? colors.dark : colors.light;
  return (
    <div className="mb-4">
      {title && (
        <div
          className="inline px-2 text-2xl font-bold"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0) 66%, ${bgColor} 33%)`,
          }}
        >
          {title.toLocaleUpperCase()}
        </div>
      )}
      {subTitle && <div className="pt-2 text-sm font-semibold">{subTitle}</div>}
    </div>
  );
};
