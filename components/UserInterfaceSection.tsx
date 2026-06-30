import InternalLink from "@/components/seo/InternalLink";
import SectionHeading from "./SectionHeading";

const UI_POINTS = [
  {
    title: "Home dashboard",
    body: "The landing screen shows your PKR balance, quick Deposit/Withdraw buttons, and scrolling banners for active promotions. Game categories appear as icon tiles below — tap any tile to enter that lobby.",
  },
  {
    title: "Top navigation bar",
    body: "Persistent menu links to Home, Slots, Casino, Card Games, Sports, and Promotions. The search icon filters games by name — useful when the lobby lists hundreds of slot titles from JILI and Pragmatic Play.",
  },
  {
    title: "Game category pages",
    body: "Each category loads a filtered grid with thumbnail art, provider badge, and minimum bet indicator. Live casino tables show seat availability and dealer name before you join.",
  },
  {
    title: "Personal Center",
    body: "Access via the profile icon: view transaction history, change password, bind JazzCash/Easypaisa wallet, check VIP level, and open the reward center for daily login bonuses.",
  },
  {
    title: "Mobile performance",
    body: "The APK is 7.11 MB and runs on Android 6.0+. Interface scales to 5–7 inch screens common in Pakistan. Dark backgrounds reduce battery drain during long Aviator sessions.",
  },
];

export default function UserInterfaceSection() {
  return (
    <section
      id="user-interface"
      className="scroll-mt-20 bg-slate-50 py-14"
      aria-labelledby="user-interface-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          id="user-interface-heading"
          title="User Interface of XX555 Game APK"
        />

        <p className="mb-6 text-slate-700">
          XX555 uses a standard casino-app layout familiar to anyone who has used
          similar earning apps in Pakistan. The interface is in English with PKR
          currency throughout. Below is what you will see after{" "}
          <InternalLink href="#registration-login">XX555 login</InternalLink> —
          preview the actual screens in our{" "}
          <InternalLink href="#screenshots">screenshots carousel</InternalLink>.
        </p>

        <div className="space-y-5">
          {UI_POINTS.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-1 leading-relaxed text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
