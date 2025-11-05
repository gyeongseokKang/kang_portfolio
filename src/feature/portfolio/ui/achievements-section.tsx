"use client";

import { BadgeCheck, Image as ImageIcon, Trophy } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SectionLayout from "./section-layout";

export default function AchievementsSection() {
  const t = useTranslations("Achievements");
  const awards: Array<{
    year: string;
    entries: Array<{
      name: string;
      grade: string;
      details: string;
      images?: string[];
    }>;
  }> = [
    {
      year: "2023",
      entries: [
        {
          name: "가우디오랩",
          grade: "PIETTIC 중 Integrity 수상",
          details: "신뢰도 높은 협업, 높은 수준의 업무수행으로 인한 수상",
        },
      ],
    },
    {
      year: "2021",
      entries: [
        {
          name: "티맥스 표창장",
          grade: "우수사원상",
          details: "시각화·통계 플랫폼 관련 공로",
          images: ["tmaxAward2021.jpg"],
        },
        {
          name: "우리은행 온택트 공모전",
          grade: "우수상",
          details: "DR.폴리오: 금융공학 모델 + AI 기반 포트폴리오 생성·추천",
          images: ["wooribangAward.jpeg"],
        },
      ],
    },
    {
      year: "2019",
      entries: [
        {
          name: "청년 스타트업 어워즈, 경기도 대학생 융합 창업지원 공모전, 흑석캠퍼스타운 창업경진대회, 스마트시티즌 챌린지 외",
          grade: "대상, S등급, 대상, 최우수상 외",
          details: "카찹: 통합 모빌리티 플랫폼",
          images: [
            "startupAward.jpg",
            "gyeonggiAward.jpeg",
            "campusTownAward.jpg",
            "smartCitizenAward.jpeg",
            "STU_Award.png",
          ],
        },
      ],
    },
    {
      year: "2018",
      entries: [
        {
          name: "한국통신학회 추계종합학술발표회",
          grade: "우수논문상",
          details: "[UC-LAB] GAN + DNN 기반 Anomaly Detection 연구",
          images: ["bestPaper2018.jpg", "poster.jpg"],
        },
      ],
    },
  ];

  const certifications: Array<{
    title: string;
    images?: string[];
  }> = [
    {
      title: "정보처리기사 & 산업기사",

      images: [
        "InformationProcessingEngineer.png",
        "InformationProcessingIndustryEngineer.png",
      ],
    },
    {
      title: "정보기기운용기능사",
      images: ["InformationEquipmentManagementTechnician.png"],
    },
    {
      title: "SQLD, ADSP",
      images: ["sqld.png", "adsp.png"],
    },
  ];

  return (
    <SectionLayout
      id="Achievements"
      title="Achievements"
      description={t("subtitle")}
    >
      <Accordion className="w-full" defaultValue={["awards"]} type="multiple">
        <AccordionItem value="awards">
          <AccordionTrigger>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-3">
                <Trophy className="size-4 text-muted-foreground" />
                <div className="text-left font-semibold text-base">Awards</div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 space-y-6">
            {awards.map((year) => (
              <div key={year.year} className="space-y-2">
                <div className="text-sm font-semibold text-muted-foreground">
                  {year.year}
                </div>
                <ul className="list-disc pl-4 space-y-2">
                  {year.entries.map((e) => (
                    <li key={e.name} className="text-sm">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <span className="font-medium">{e.name}</span>
                          <span className="mx-2">-</span>
                          <span className="font-medium">{e.grade}</span>
                          <div className="pl-4 text-secondary-foreground">
                            ㄴ {e.details}
                          </div>
                        </div>
                        {e.images && e.images.length > 0 && (
                          <Dialog>
                            <DialogTrigger className="inline-flex items-center text-muted-foreground hover:text-foreground text-xs px-2 py-1 border rounded-md">
                              <ImageIcon className="size-4" />
                              <span className="ml-1">View</span>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[520px] ">
                              <DialogHeader>
                                <DialogTitle>{e.name}</DialogTitle>
                              </DialogHeader>
                              {e.images.length > 1 ? (
                                <div className="w-full flex justify-center">
                                  <Carousel className="w-10/12">
                                    <CarouselContent>
                                      {e.images.map((img) => (
                                        <CarouselItem
                                          key={img}
                                          className="w-10/12"
                                        >
                                          <div className="relative  aspect-[4/3]">
                                            <Image
                                              src={`/images/award/${img}`}
                                              alt={e.name}
                                              fill
                                              className="object-contain"
                                              sizes="(max-width: 768px) 90vw, 700px"
                                            />
                                          </div>
                                        </CarouselItem>
                                      ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                  </Carousel>
                                </div>
                              ) : (
                                <div className="relative w-full aspect-[4/3]">
                                  <Image
                                    src={`/images/award/${e.images[0]}`}
                                    alt={e.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 640px) 90vw, 560px"
                                  />
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="certs">
          <AccordionTrigger>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-3">
                <BadgeCheck className="size-4 text-muted-foreground" />
                <div className="text-left font-semibold text-base">
                  Certifications
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4">
            <ul className="list-disc pl-4 space-y-2">
              {certifications.map((c) => (
                <li key={c.title} className="text-sm">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <span className="font-medium">{c.title}</span>
                    </div>
                    {c.images && c.images.length > 0 && (
                      <Dialog>
                        <DialogTrigger className="inline-flex items-center text-muted-foreground hover:text-foreground text-xs px-2 py-1 border rounded-md">
                          <ImageIcon className="size-4" />
                          <span className="ml-1">View</span>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[520px]">
                          <DialogHeader>
                            <DialogTitle>{c.title}</DialogTitle>
                          </DialogHeader>
                          {c.images.length > 1 ? (
                            <div className="w-full flex justify-center">
                              <Carousel className="w-10/12">
                                <CarouselContent>
                                  {c.images.map((img) => (
                                    <CarouselItem key={img}>
                                      <div className="relative w-full aspect-[4/3]">
                                        <Image
                                          src={`/images/certificate/${img}`}
                                          alt={c.title}
                                          fill
                                          className="object-contain"
                                          sizes="(max-width: 768px) 90vw, 700px"
                                        />
                                      </div>
                                    </CarouselItem>
                                  ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                              </Carousel>
                            </div>
                          ) : (
                            <div className="relative w-full aspect-[4/3]">
                              <Image
                                src={`/images/certificate/${c.images[0]}`}
                                alt={c.title}
                                fill
                                className="object-contain"
                                sizes="(max-width: 640px) 90vw, 560px"
                              />
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </SectionLayout>
  );
}
