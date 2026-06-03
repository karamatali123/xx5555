import SectionHeading from "./SectionHeading";

const UI_POINTS = [
  {
    title: "Clean and Simple Layout",
    body: "Home screen shows balance, deposit, and game categories clearly.",
  },
  {
    title: "Simple Navigation System",
    body: "Top menu for Home, Slots, Casino, Card Games, Sports, and Promotions.",
  },
  {
    title: "Organised Game Categories",
    body: "Games grouped by type — slots, fish, live casino, and cards.",
  },
  {
    title: "Responsive Design",
    body: "Works on most Android phones from 6.0 and above.",
  },
  {
    title: "Quick Account Access",
    body: "Personal Center for deposit, withdrawal, rewards, and settings.",
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

        <div className="space-y-6">
          {UI_POINTS.map((item) => (
            <article key={item.title}>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
