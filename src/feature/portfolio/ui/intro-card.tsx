"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function IntroCard() {
  const headline = "편리함을 추구하는 개발자 강경석(Handy)입니다";
  const paragraphs = [
    "쿠팡플레이에서 시니어 프론트엔드 엔지니어로 근무하고 있습니다.\n이전에는 통합 모빌리티 서비스 가출한을 창업하고, BIt로 하이퍼미디어(티맥스소프트)를 만들었습니다. 또한 가우디오랩에서 프론트엔드 리드로 다양한 제품을 만들고 유지보수했습니다.",
    "현재는 웹, 앱을 넘어 백엔드도 경험하며 풀스택을 추구하고 있습니다.\n이를 위해 supabase, prisma 같은 서비스를 정형화하여 효율성 향상인 엘릭서로 빠르게 학습중입니다.",
    "시니어 개발자로서 프로세스 정립에 힘쓰고, 자동화를 통해 효율을 향상한 업무에 관심을 가지고 있습니다.\n그와 함께 좋은 팀을 꾸려가는 것에 관심이 생기기 시작했네요.",
  ] as const;
  return (
    <Card
      className={
        "border-muted/40 bg-card/70 backdrop-blur-md shadow-sm rounded-2xl max-w-[360px]"
      }
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold tracking-widest text-muted-foreground">
          {headline}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2 text-sm md:text-base text-muted-foreground">
          {paragraphs.map((p, i) => (
            <p key={i} className="whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
