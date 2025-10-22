import Image from "next/image";
import { Door } from "@/data/doors";

type DoorCardProps = {
  door: Door;
};

const styleLabels: Record<Door["style"], string> = {
  modern: "Современная коллекция",
  classic: "Классическая коллекция",
  loft: "Коллекция в стиле лофт"
};

export function DoorCard({ door }: DoorCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white pb-24 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <div className="aspect-[3/4]">
          <Image
            fill
            src={door.imageUrl}
            alt={door.name}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width: 1440px) 280px, (min-width: 1024px) 22vw, (min-width: 768px) 32vw, 88vw"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent opacity-60 transition-opacity group-hover:opacity-75" />
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-primary shadow">
          {door.price}
        </span>
      </div>

      <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4 rounded-[26px] bg-white/95 px-5 py-4 shadow-xl transition-transform duration-300 group-hover:translate-y-0">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{styleLabels[door.style]}</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{door.name}</h3>
          <p className="mt-1 text-sm text-slate-600">{door.finish}</p>
          <div className="mt-3 flex items-center gap-2">
            {door.colors.map((color) => (
              <span
                key={color}
                className="h-5 w-5 rounded-full border border-white/70 shadow-inner"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        <a
          href="#consultation"
          className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition hover:bg-primary-dark"
          aria-label={`Оформить заявку на ${door.name}`}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7 4L13 10L7 16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
