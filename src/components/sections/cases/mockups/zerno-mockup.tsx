const MENU = [
  ["Флэт уайт", "290"],
  ["Раф лаванда", "320"],
  ["Круассан", "180"],
] as const;

export function ZernoMockup() {
  return (
    <div className="flex h-full flex-col bg-[#1d3a2c] text-[#f1e7d0]">
      <div className="relative flex h-[59%] flex-col px-[5cqw] pt-[3cqw]">
        <div className="flex items-center justify-between text-[1.6cqw]">
          <span className="font-mock-serif text-[3.2cqw] italic">зерно</span>
          <span className="flex gap-[3cqw] opacity-70">
            <span>Меню</span>
            <span>Зёрна</span>
            <span>Адрес</span>
          </span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="max-w-[80%] font-mock-serif text-[7cqw] leading-[1] italic">Кофе, ради которого встают раньше</p>
          <span className="mt-[3cqw] rounded-full bg-[#d9a441] px-[3cqw] py-[1.3cqw] text-[1.7cqw] font-semibold text-[#1d3a2c]">
            Заказать с собой
          </span>
        </div>
        <span className="absolute top-[18%] right-[6%] flex h-[11cqw] w-[11cqw] rotate-12 items-center justify-center rounded-full border-[0.3cqw] border-[#d9a441] text-center text-[1.4cqw] leading-tight text-[#d9a441]">
          с 7:00
          <br />
          каждый день
        </span>
        <svg viewBox="0 0 40 40" className="absolute bottom-[6%] left-[6%] w-[9cqw] text-[#d9a441]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 18h20v8a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8zM28 20h3a4 4 0 0 1 0 8h-3M14 8q2 3 0 6M20 6q2 3 0 6" />
        </svg>
      </div>
      <div className="grid h-[41%] grid-cols-3 gap-[2cqw] bg-[#f1e7d0] px-[5cqw] py-[4cqw] text-[#1d3a2c]">
        {MENU.map(([item, price]) => (
          <div key={item} className="flex flex-col justify-between border-t-[0.3cqw] border-[#1d3a2c] pt-[1.5cqw]">
            <span className="font-mock-serif text-[2.8cqw] italic">{item}</span>
            <span className="text-[2cqw] font-semibold">{price} ₽</span>
          </div>
        ))}
      </div>
    </div>
  );
}
