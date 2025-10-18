import { ChevronRightIcon, Rss } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Link } from "@/i18n/navigation";

export function BlogInfoItem() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <Item variant="outline" size="sm" asChild>
        <Link
          href="https://all-dev-kang.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <ItemMedia>
            <Rss className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>편리함을 추구하는 핸디의 지식 블로그</ItemTitle>
            <ItemDescription>
              <Badge variant="outline">#Blog</Badge>
              <Badge variant="outline">#0.7M View</Badge>
              <Badge variant="outline">#400 posts</Badge>
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4 group-hover:translate-x-2 transition-all group-hover:size-6" />
          </ItemActions>
        </Link>
      </Item>
    </div>
  );
}
