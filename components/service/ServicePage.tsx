type ServicePageProps = {
  title: string;
  description: string;
};

export default function ServicePage({
  title,
  description,
}: ServicePageProps) {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">

      <section className="max-w-6xl mx-auto px-6 pt-40 pb-24">

        <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
          SKFIX Services
        </p>

        <h1 className="text-5xl md:text-7xl font-black mt-6">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300">
          {description}
        </p>

        <div className="mt-12 flex flex-wrap gap-5">

          <button className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-black hover:scale-105 transition">
            Get a Free Quote
          </button>

          <button className="rounded-full border border-yellow-400 px-8 py-4 font-bold text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
            Call Now
          </button>

        </div>

      </section>

    </main>
  );
}