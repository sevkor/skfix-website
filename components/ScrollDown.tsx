"use client";

const sections = [
  "hero",
  "services",
  "why-choose",
  "contact-cta",
  "footer",
];

export default function ScrollDown() {
  const scrollNext = () => {
    const current = window.scrollY + window.innerHeight / 3;

    for (const id of sections) {
      const section = document.getElementById(id);

      if (!section) continue;

      if (section.offsetTop > current) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }
    }

    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollNext}
      className="fixed right-8 bottom-10 z-50 flex flex-col items-center group"
    >
      <span className="text-[11px] uppercase tracking-[4px] text-white mb-5 leading-none text-center">
        Scroll
        <br />
        Down
      </span>

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 shadow-lg transition duration-300 group-hover:scale-110 group-hover:bg-yellow-300 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </button>
  );
}