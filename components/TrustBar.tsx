export default function TrustBar() {
const items = [
  "⭐ 5★ Service",
  "⚡ Fast Response",
  "📍 Brighton & Hove",
  "💬 Free Quotes",
  "🛠 Professional Installation",
  "🏡 Domestic & Commercial",
];

  return (
    <section className="bg-black border-y border-yellow-500/20">
      <div className="max-w-7xl mx-auto py-6 px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {items.map((item) => (
            <div
              key={item}
              className="text-yellow-400 font-semibold tracking-wide"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}