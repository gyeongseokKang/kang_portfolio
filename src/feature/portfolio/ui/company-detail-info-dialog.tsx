"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface CompanyDetailInfoDialogProps {
  company: string;
  companyLabel: string;
}

export default function CompanyDetailInfoDialog({
  company,
  companyLabel,
}: CompanyDetailInfoDialogProps) {
  const t = useTranslations("Experience");
  const companyDetailInfo: Record<
    string,
    { src: string; alt: string; tag?: string[] }[]
  > = {
    carchap: [
      {
        src: "/video/carchap_service.mp4",
        alt: "Carchap - Detail 1 ",
        tag: ["Carchap", "Mobile App", "Transportation"],
      },
      {
        src: "/images/company/carchap-detail-1.png",
        alt: "Carchap - Detail 1 ",
        tag: ["Carchap", "Mobile App", "Android"],
      },
      {
        src: "/images/company/carchap-detail-2.png",
        alt: "Carchap - Detail 1 ",
        tag: ["Carchap", "Mobile App", "IOS"],
      },
    ],
    tmax: [
      {
        src: "/images/company/tmax-detail-1.gif",
        alt: "Tmax - Detail 1 ",
        tag: ["HyperData", "Data Analysis", "Data Visualization"],
      },
      {
        src: "/images/company/tmax-detail-4.gif",
        alt: "Tmax - Detail 4",
        tag: ["HyperData", "Data Analysis", "Data export"],
      },
      {
        src: "/images/company/tmax-detail-2.gif",
        alt: "Tmax - Detail 2",
        tag: ["HyperData", "Data Visualization", "Chart"],
      },
      {
        src: "/images/company/tmax-detail-3.gif",
        alt: "Tmax - Detail 3",
        tag: ["HyperData", "Data Visualization", "Chart", "Filtering"],
      },

      {
        src: "/images/company/tmax-detail-5.gif",
        alt: "Tmax - Detail 5",
        tag: ["HyperData", "Data Analysis", "Data Visualization", "No-code"],
      },
    ],
    gaudiolab: [
      {
        src: "/images/company/gaudiolab-detail-1.gif",
        alt: "Gaudio Lab - Detail 1 ",
        tag: ["Gaudio Studio Pro", "Web Media Editor", "Audio Processing"],
      },
      {
        src: "/images/company/gaudiolab-detail-2.gif",
        alt: "Gaudio Lab - Detail 2",
        tag: ["Gaudio Studio Pro", "Web Media Editor", "Local-first App"],
      },
      {
        src: "/images/company/gaudiolab-detail-3.gif",
        alt: "Gaudio Lab - Detail 3",
        tag: ["Gaudio Text Sync", "Web Media Editor", "Audio Processing"],
      },
      {
        src: "/images/company/gaudiolab-detail-4.gif",
        alt: "Gaudio Lab - Detail 4",
        tag: ["Homepage", "Homepage CMS", "Design System"],
      },
      {
        src: "/images/company/gaudiolab-detail-5.gif",
        alt: "Gaudio Lab - Detail 5",
        tag: ["Homepage", "Homepage CMS", "Puck Editor"],
      },
      {
        src: "/images/company/gaudiolab-detail-6.gif",
        alt: "Gaudio Lab - Detail 6",
        tag: ["Gaudio Studio", "Web Player", "Recording", "FFmpeg"],
      },
    ],
  } as const;

  const targetCompanyDetailInfo = companyDetailInfo[company] ?? [];

  if (
    !Array.isArray(targetCompanyDetailInfo) ||
    targetCompanyDetailInfo.length === 0
  ) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Detail</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{companyLabel}</DialogTitle>
          <DialogDescription>{t("detail.description")}</DialogDescription>
        </DialogHeader>
        <div className="w-full flex justify-center">
          <Carousel>
            <CarouselContent className="max-w-[70vw] sm:max-w-[400px]">
              {targetCompanyDetailInfo?.map((item, idx) => (
                <CarouselItem key={idx}>
                  {item.src.endsWith(".mp4") ? (
                    <video
                      className="select-none object-contain w-full aspect-video"
                      src={item.src}
                      controls
                      autoPlay
                      muted
                      width={400}
                    />
                  ) : (
                    <Image
                      className="select-none object-contain w-full "
                      src={item.src}
                      alt={item.alt}
                      width={400}
                      height={300}
                    />
                  )}

                  {item.tag && (
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {item.tag.map((tag, idx) => (
                        <Badge key={tag} variant="outline">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
