# Editing The Study Verse

All live product details and source links are in [data/site.ts](data/site.ts). Edit this file, then run `pnpm run typecheck && pnpm run build`.

## Chemistry masterclass

- `masterclass.price` and `capacity` control displayed values. Update the Stripe Price separately so the checkout amount matches the site.
- `status` is `booking-soon`, `scheduled` or `sold-out`. The booking button also requires payment configuration. Never enable booking before the final date and legal text are approved.
- `dateConfirmed` is currently `false`. Once the schedule is final, set it to `true` and update `dates`, `dateLabel`, `dailyTime` and `timeLabel` in the same config. The current provisional language is deliberate.
- `recording` is `tbc`. Do not say a recording is included until approved.
- `presenter.confirmed` is `false`. Do not publish a presenter or grade claim until verified.
- `deliveryPlatform` is `TBC`. Keep a private attendee URL out of public code and config.

## Community and links

- `community.fallbackMembers` and `fallbackOnline` are the snapshot values from Ash. The live Discord invite API is read by the community page and `/api/discord`; the UI labels fallback numbers as a snapshot.
- `socials` and `creatorPosts` hold the public profile and content URLs. The latest Discord invite is `C5SgDQVyDA`.

## Newsletter

The form uses the current Resend Contacts and Segments API when `RESEND_API_KEY` and `RESEND_SEGMENT_ID` are configured. `RESEND_AUDIENCE_ID` works as a legacy alias. Until then it shows a clear unavailable message. Consent is required and never preselected.

## Source of truth

- [Drive assets](https://drive.google.com/drive/folders/10RqMsWBrk1dlmaszP5U8Px76MHMhYqLW?usp=drive_link)
- [Discord](https://discord.gg/C5SgDQVyDA)
- [TikTok](https://www.tiktok.com/@4zhfn)
- [Instagram, verified current @4zhfn profile](https://www.instagram.com/4zhfn/)
- [YouTube](https://www.youtube.com/@4zhfn)
- [Linktree](https://linktr.ee/4zhfn)
- [Instagram Reel](https://www.instagram.com/reel/DU0ByqkjAhV/?stkn=azg4Nzg3c2lsbndn)
- [TikTok 1](https://vm.tiktok.com/ZGdQbjtV1/)
- [TikTok 2](https://vm.tiktok.com/ZGdQbNmhv/)
- [TikTok 3](https://vm.tiktok.com/ZGdQqwH3n/)
- [TikTok 4](https://vm.tiktok.com/ZGdQb6Vmx/)
- [Community TikTok](https://vm.tiktok.com/ZGdQqvcy1/)
- [React Bits](https://reactbits.dev/get-started/index)
- [Apple](https://www.apple.com/)
- [MyEdSpace](https://myedspace.co.uk/products/ultimate-choose)

The originally supplied Instagram profile URL `https://www.instagram.com/studywith4zhfn/` displayed “Profile isn't available” during the 26 September 2026 link check. The supplied Reel links to Ash's working `@4zhfn` profile, which the site now uses.
