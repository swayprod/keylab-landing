const SLOTS = [
  { time: "10:00", state: "free" },
  { time: "12:30", state: "picked" },
  { time: "14:00", state: "free" },
  { time: "16:00", state: "busy" },
] as const;

const PRICES = [
  ["Диагностика", "0 ₽"],
  ["Замена масла", "1 490 ₽"],
  ["Шиномонтаж", "2 200 ₽"],
] as const;

const SLOT_STYLES = {
  free: "border border-black/15",
  picked: "bg-[#f5c400] font-bold",
  busy: "border border-black/10 opacity-35 line-through",
} as const;

export function GarageMockup() {
  return (
    <div className="flex h-full flex-col bg-[#0f0f0f] text-white">
      <div className="flex h-[59%] flex-col px-[5cqw] pt-[3cqw]">
        <div className="flex items-center justify-between text-[1.6cqw]">
          <span className="flex items-center gap-[1cqw] font-mock-condensed text-[3cqw] font-bold italic uppercase">
            <span className="h-[2.4cqw] w-[2.4cqw] bg-[#f5c400]" />
            Гараж 77
          </span>
          <span className="opacity-70">+7 495 777-77-77</span>
          <span className="bg-[#f5c400] px-[2.2cqw] py-[0.9cqw] font-bold text-black uppercase">Записаться</span>
        </div>
        <div className="mt-[4cqw] grid flex-1 grid-cols-[1.3fr_1fr] gap-[4cqw]">
          <div>
            <p className="font-mock-condensed text-[9cqw] leading-[0.88] font-bold italic uppercase">
              Ремонт
              <br />
              за <span className="text-[#f5c400]">1 день</span>
            </p>
            <p className="mt-[2.5cqw] text-[1.8cqw] opacity-70">Диагностика бесплатно · Гарантия 1 год</p>
          </div>
          <div className="self-start bg-white p-[2.5cqw] text-black">
            <span className="block font-mock-condensed text-[2.4cqw] font-bold uppercase">Запись на сегодня</span>
            <span className="mt-[2cqw] grid grid-cols-2 gap-[1.2cqw] text-center text-[1.6cqw]">
              {SLOTS.map((slot) => (
                <span key={slot.time} className={`py-[1cqw] ${SLOT_STYLES[slot.state]}`}>
                  {slot.time}
                </span>
              ))}
            </span>
            <span className="mt-[2cqw] block bg-black py-[1.2cqw] text-center text-[1.6cqw] font-bold text-white uppercase">
              Подтвердить
            </span>
          </div>
        </div>
        <div className="h-[1.4cqw] bg-[repeating-linear-gradient(-45deg,#f5c400_0_1.4cqw,#0f0f0f_1.4cqw_2.8cqw)]" />
      </div>
      <div className="flex h-[41%] flex-col justify-center gap-[2.2cqw] px-[5cqw]">
        {PRICES.map(([service, price]) => (
          <div key={service} className="flex items-baseline gap-[1.5cqw] text-[2.4cqw]">
            <span className="font-mock-condensed font-bold uppercase">{service}</span>
            <span className="flex-1 border-b-[0.25cqw] border-dotted border-white/30" />
            <span className="text-[#f5c400]">{price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
