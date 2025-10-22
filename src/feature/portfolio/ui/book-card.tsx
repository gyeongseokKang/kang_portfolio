"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BookCard() {
  return (
    <Card className={"max-w-[360px]"}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Book
          <Button variant={"outline"} size={"icon-sm"} asChild>
            <Link
              href="https://product.kyobobook.co.kr/detail/S000218081064"
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon />
            </Link>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Image
          src="/images/book.jpg"
          alt="Handy"
          width={300}
          height={410}
          className="rounded-xl"
        />
        <div className="flex gap-2 flex-wrap">
          <Badge variant={"secondary"}>#Book</Badge>
          <Badge variant={"secondary"}>#Frontend</Badge>
          <Badge variant={"secondary"}>#Next.js</Badge>
          <Badge variant={"secondary"}>#TS, JS</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
