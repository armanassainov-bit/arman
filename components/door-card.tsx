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
    <article className="group flex h-full flex-col items-center rounded-[28px] border-2 border-primary/15 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-xl">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {styleLabels[door.style]}
      </span>

      <div className="relative mt-3 w-full max-w-[210px] overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50">
        <div className="aspect-[3/7] relative">
          <Image
            fill
            src={door.imageUrl}
            alt={door.name}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width: 1280px) 220px, (min-width: 1024px) 18vw, (min-width: 768px) 26vw, 80vw"
          />
        </div>
      </div>

      <p className="mt-5 text-3xl font-semibold text-primary">{door.price}</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{door.name}</h3>
      <p className="mt-1 text-sm text-slate-600">{door.finish}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">{door.description}</p>

      <div className="mt-4 flex items-center justify-center gap-2">
        {door.colors.map((color) => (
          <span
            key={color}
            className="h-6 w-6 rounded-full border border-slate-200 shadow-inner"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <div className="mt-5 w-full space-y-3">
        <button
          type="button"
          className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
        >
          В корзину
        </button>
        <a
          href="#consultation"
          className="inline-flex items-center justify-center text-sm font-medium text-primary underline-offset-4 transition hover:text-primary-dark hover:underline"
        >
          Купить в 1 клик
        </a>
      </div>

      <p className="mt-6 text-xs text-slate-500">Срок изготовления: {door.leadTime}</p>
    </article>
  );
}
