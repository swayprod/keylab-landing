const PRODUCTS = [
  { name: "Кресло Noa", price: "38 900", shape: "M8 30V16a8 8 0 0 1 16 0v14M6 22h20v8H6zM9 30v6M23 30v6" },
  { name: "Лампа Sol", price: "12 400", shape: "M10 18 16 6l6 12zM16 18v14M11 34h10" },
  { name: "Стол Tor", price: "56 000", shape: "M4 14h24v4H4zM8 18v16M24 18v16" },
] as const;

export function FormaMockup() {
  return (
    <div className="flex h-full flex-col bg-[#efe6d8] text-[#2a2019]">
      <div className="flex h-[59%] flex-col px-[5cqw] pt-[3cqw]">
        <div className="flex items-center justify-between text-[1.6cqw] tracking-[0.12em] uppercase">
          <span className="font-mock-condensed text-[3cqw] font-bold tracking-[0.2em]">Форма</span>
          <span className="flex gap-[3cqw] opacity-70">
            <span>Каталог</span>
            <span>Коллекции</span>
            <span>Корзина · 2</span>
          </span>
        </div>
        <div className="mt-[4cqw] grid flex-1 grid-cols-[1.1fr_1fr] gap-[4cqw] pb-[4cqw]">
          <div className="flex flex-col justify-between">
            <p className="font-mock-condensed text-[8.4cqw] leading-[0.9] font-bold tracking-[-0.01em] uppercase">
              Мебель, которая остаётся
            </p>
            <span className="self-start border-b-[0.3cqw] border-[#b5562e] pb-[0.6cqw] text-[1.8cqw] font-semibold text-[#b5562e]">
              Смотреть коллекцию →
            </span>
          </div>
          <div className="relative flex items-end rounded-[1.5cqw] bg-[#dccbb2] p-[2.5cqw]">
            <svg viewBox="0 0 64 36" className="absolute inset-x-[10%] top-[18%] w-[80%] text-[#8a5a3b]" fill="currentColor">
              <rect x="2" y="12" width="60" height="16" rx="6" />
              <rect x="8" y="2" width="48" height="14" rx="6" opacity="0.8" />
              <rect x="6" y="28" width="3" height="8" />
              <rect x="55" y="28" width="3" height="8" />
            </svg>
            <span className="relative rounded-full bg-[#2a2019] px-[2cqw] py-[1cqw] text-[1.5cqw] text-[#efe6d8]">
              Диван Oslo — 84 900 ₽
            </span>
          </div>
        </div>
      </div>
      <div className="grid h-[41%] grid-cols-3 gap-[2cqw] bg-[#e5d9c6] px-[5cqw] py-[4cqw]">
        {PRODUCTS.map((product) => (
          <div key={product.name} className="flex flex-col rounded-[1.5cqw] bg-[#efe6d8] p-[2cqw]">
            <svg viewBox="0 0 32 38" className="mx-auto h-[55%] text-[#8a5a3b]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={product.shape} />
            </svg>
            <span className="mt-auto font-mock-condensed text-[2.2cqw] font-bold uppercase">{product.name}</span>
            <span className="text-[1.5cqw] opacity-70">{product.price} ₽</span>
          </div>
        ))}
      </div>
    </div>
  );
}
