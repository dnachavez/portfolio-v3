import { TextFlip } from "@/components/text-flip"
import { USER } from "@/features/portfolio/data/user"

import { AvatarElectricEffect } from "./avatar-electric-effect"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom border-x border-line">
      {/* <div className="absolute top-[-3.5px] left-[-4.5px] size-2 rounded-xs border bg-popover" /> */}
      {/* <div className="absolute top-[-3.5px] right-[-4.5px] size-2 rounded-xs border bg-popover" /> */}

      <div className="flex">
        <div className="shrink-0 border-r border-line">
          <div className="mx-0.5 my-0.75">
            <AvatarElectricEffect>
              <img
                className="hidden size-30 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40 [html.light_&]:block"
                alt="Avatar"
                src="/images/dnachavez-avatar.png"
                fetchPriority="high"
              />
              <img
                className="hidden size-30 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40 [html.dark_&]:block"
                alt="Avatar"
                src="/images/dnachavez-avatar-dark.png"
                fetchPriority="high"
              />
            </AvatarElectricEffect>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex grow items-end pb-1 pl-4">
            <div
              className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800"
              aria-hidden
            >
              {"text-3xl "}
              <span className="inline dark:hidden">text-zinc-950</span>
              <span className="hidden dark:inline">text-zinc-50</span>
              {" font-medium"}
            </div>
          </div>

          <div className="border-t border-line">
            <div className="flex items-center gap-2 pl-4">
              <h1 className="-translate-y-px text-3xl font-semibold tracking-tight">
                {USER.displayName}
              </h1>

              <VerifiedIcon
                className="size-4.5 text-info select-none"
                aria-label="Verified"
              />

              {/* {USER.namePronunciationUrl && (
                <PronounceMyName
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              )} */}
            </div>

            <div className="h-12.5 border-t border-line py-1 pl-4 sm:h-9">
              <TextFlip
                className="font-pixel-square text-sm text-balance text-muted-foreground"
                variants={{
                  initial: { y: -10, opacity: 0 },
                  animate: { y: -1, opacity: 1 },
                  exit: { y: 10, opacity: 0 },
                }}
                interval={1.5}
              >
                {USER.flipSentences}
              </TextFlip>
            </div>
          </div>
        </div>

        <div className="hidden items-center border-l border-line md:flex">
          <iframe
            src="https://www.devs100.com/access-card/embed?name=Dan%20Chavez&member_id=47"
            width="240"
            height="350"
            className="origin-center scale-50"
            style={{
              border: 0,
              borderRadius: "16px",
              overflow: "hidden",
              margin: "-87.5px -60px",
            }}
            title="DEVS100 Access Card"
          />
        </div>
      </div>

      <div className="flex items-center justify-center border-t border-line py-3 md:hidden">
        <iframe
          src="https://www.devs100.com/access-card/embed?name=Dan%20Chavez&member_id=47"
          width="240"
          height="350"
          style={{
            border: 0,
            borderRadius: "16px",
            overflow: "hidden",
          }}
          title="DEVS100 Access Card"
        />
      </div>
    </div>
  )
}
