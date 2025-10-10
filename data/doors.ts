export type Door = {
  id: string;
  name: string;
  price: string;
  description: string;
  finish: string;
  style: "modern" | "classic" | "loft";
  colors: string[];
  imageUrl: string;
  leadTime: string;
};

export const doors: Door[] = [
  {
    id: "aurora-pro",
    name: "Aurora Pro",
    price: "от 28 900 ₽",
    description:
      "Сверхтонкий алюминиевый профиль, стекло safe-glass с шелкографией. Идеально для современных интерьеров.",
    finish: "матовый шпон ясень / стекло grafit",
    style: "modern",
    colors: ["#1F2933", "#E8E3DC", "#94A3B8"],
    imageUrl:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=900&q=80",
    leadTime: "21 день"
  },
  {
    id: "modena",
    name: "Modena",
    price: "от 24 500 ₽",
    description:
      "Лаконичное полотно с горизонтальными фрезеровками и скрытыми петлями. Отличается устойчивостью к царапинам.",
    finish: "премиальный CPL ламинированный шпон",
    style: "modern",
    colors: ["#242B3D", "#C4A484", "#D8D8D8"],
    imageUrl:
      "https://images.unsplash.com/photo-1596079890748-73ced5f0dc4c?auto=format&fit=crop&w=900&q=80",
    leadTime: "18 дней"
  },
  {
    id: "versailles",
    name: "Versailles",
    price: "от 32 700 ₽",
    description:
      "Резные молдинги, ручная патина и инкрустация. Создаёт атмосферу роскоши в классических интерьерах.",
    finish: "эмаль soft-touch / золочёные молдинги",
    style: "classic",
    colors: ["#F8F4ED", "#C79A63", "#A78B7D"],
    imageUrl:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
    leadTime: "30 дней"
  },
  {
    id: "loftline",
    name: "LoftLine",
    price: "от 21 900 ₽",
    description:
      "Брутальная дверь с металлическим каркасом и вставками из термодерева. Встраивается заподлицо со стеной.",
    finish: "термодерево орех / графитовый металл",
    style: "loft",
    colors: ["#3B2F2F", "#6D4C41", "#F5DEB3"],
    imageUrl:
      "https://images.unsplash.com/photo-1616628182503-9a5cb8d0bdf3?auto=format&fit=crop&w=900&q=80",
    leadTime: "16 дней"
  },
  {
    id: "nordic-light",
    name: "Nordic Light",
    price: "от 23 400 ₽",
    description:
      "Полотно с алюминиевым обрамлением и сатинированным стеклом. Пропускает свет, сохраняя приватность.",
    finish: "белый шпон дуба / белое сатинированное стекло",
    style: "modern",
    colors: ["#F5F5F0", "#C5D5E4", "#9AA5B1"],
    imageUrl:
      "https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&fit=crop&w=900&q=80",
    leadTime: "14 дней"
  },
  {
    id: "atelier",
    name: "Atelier",
    price: "от 26 200 ₽",
    description:
      "Фасады с натуральным шпоном и геометрической фактурой. Легко интегрируется с невидимыми плинтусами.",
    finish: "натуральный шпон ореха / магнитный замок",
    style: "modern",
    colors: ["#2E1E0F", "#A47C48", "#E0C9A6"],
    imageUrl:
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=900&q=80",
    leadTime: "20 дней"
  }
];
