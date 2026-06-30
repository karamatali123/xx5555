import { APK_SIZE, APK_VERSION, MIN_ANDROID, PAGE_LAST_UPDATED } from "@/lib/constants";

export const APP_INFO = [
  { label: "App Name", value: "XX555" },
  { label: "Version", value: APK_VERSION },
  { label: "Size", value: APK_SIZE },
  { label: "Platform", value: `Android ${MIN_ANDROID}+` },
  { label: "Developer", value: "XX555.Com.pk" },
  { label: "Category", value: "Slots, Cards And Aviator" },
  { label: "Price", value: "Free" },
  { label: "Updated", value: PAGE_LAST_UPDATED },
] as const;
