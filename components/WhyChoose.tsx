import {
  Clock3,
  Wrench,
  BadgeCheck,
  MessageSquareQuote,
} from "lucide-react";

const items = [
  {
    icon: Clock3,
    title: "Fast Response",
    text: "Quick response across Brighton & Hove.",
  },
  {
    icon: MessageSquareQuote,
    title: "Direct Communication",
    text: "Speak directly with the professional who will carry out your project from start to finish.",
  },
  {
    icon: Wrench,
    title: "Free Quotes",
    text: "Clear pricing with no hidden costs.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Workmanship",
    text: "Attention to detail and reliable service you can trust.",
  },
];

export default function WhyChoose() {
  return (
    <section
  id="why-choose"
  className="bg-[#111111] py-24 px-6"
>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
            Why Choose SKFIX
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            Reliable Service You Can Trust
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-black border border-yellow-500/20 p-8 text-center hover:border-yellow-400 transition"
              >
                <Icon
                  size={48}
                  className="mx-auto text-yellow-400 mb-6"
                />

                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}