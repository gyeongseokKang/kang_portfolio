import {
  Button,
  Card,
  CardBody,
  CardProps,
  Image,
  Slider,
} from "@nextui-org/react";
import { clsx } from "@nextui-org/shared-utils";
import { FC } from "react";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FaPauseCircle } from "react-icons/fa";
import { IoShuffleOutline } from "react-icons/io5";
import { PiMusicNoteFill } from "react-icons/pi";
import { RiRepeatOneLine } from "react-icons/ri";
import getExperiencedYear from "src/utils/getExperiencedYear";

export interface SamplePlayerCardProps extends CardProps {}

export const SamplePlayerCard: FC<SamplePlayerCardProps> = ({
  className,
  ...otherProps
}) => {
  return (
    <Card
      isBlurred
      className={clsx(
        "inline-block border-none bg-background/60 dark:bg-default-100/50 animate-wave-6",
        className
      )}
      shadow="sm"
      {...otherProps}
    >
      <CardBody>
        <div className="grid items-center justify-center grid-cols-6 gap-6 md:grid-cols-12 md:gap-4">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover max-w-28"
              height={80}
              width={"100%"}
              // shadow="lg"
              src="/images/intro/myface.jpg"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-0">
                <div className="text-sm font-semibold text-foreground/80">
                  쿠팡플레이에서 근무중
                </div>
                <div className="mt-2 text-xs text-foreground/80">
                  시니어 프론트엔드 엔지니어
                </div>
                <div className="text-xs font-medium ">
                  Monetization팀에서 글로벌팀과 협업중
                </div>
              </div>
              <div className="animate-ping">
                <PiMusicNoteFill size={12} />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <Slider
                color="foreground"
                size="sm"
                step={0.01}
                maxValue={1}
                minValue={0}
                defaultValue={0.4}
                className="max-w-md"
              />
              <div className="flex justify-between">
                <p className="text-sm text-foreground/50">22/07</p>
                <p className="text-sm text-foreground/50">
                  {"+" + getExperiencedYear().가우디오일한날짜 + "days"}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center w-full">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <RiRepeatOneLine className="text-foreground/80" size={20} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <CgPlayTrackPrev size={20} />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <FaPauseCircle size={40} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <CgPlayTrackNext size={20} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <IoShuffleOutline className="text-foreground/80" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
