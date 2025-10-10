import Image from "next/image";
import { Door } from "@/data/doors";

type DoorCardProps = {
  door: Door;
};

const styleBadges: Record<Door["style"], string> = {
  modern: "Современный стиль",
  classic: "Классика",
  loft: "Лофт"
};

export function DoorCard({ door }: DoorCardProps) {
  return (
    <article className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary hover:bg-white hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
        <Image
          fill
          src={door.imageUrl}
          alt={door.name}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1280px) 275px, (min-width: 1024px) 30vw, (min-width: 780px) 45vw, 80vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <header className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">{door.name}</h3>
            <p className="mt-1 text-base text-slate-600">{door.finish}</p>
          </div>
          <span className="badge whitespace-nowrap bg-primary/10 text-xs tracking-wide text-primary">
            {styleBadges[door.style]}
          </span>
        </header>

        <p className="text-sm leading-relaxed text-slate-500">{door.description}</p>

        <div className="flex items-center gap-3">
          {door.colors.map((color) => (
            <span
              key={color}
              className="h-9 w-9 rounded-full border border-white shadow-inner"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <footer className="mt-auto flex items-center justify-between rounded-2xl bg-slate-50/80 px-5 py-4">
          <div>
            <p className="text-sm text-slate-500">Стоимость</p>
            <p className="text-lg font-semibold text-primary">{door.price}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">Срок изготовления</p>
            <p className="text-lg font-semibold text-slate-800">{door.leadTime}</p>
          </div>
        </footer>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
}
