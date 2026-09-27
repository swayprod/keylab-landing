import { Star } from "lucide-react";

const DOCTORS = [
  { name: "Анна Кравец", role: "Ортодонт", tone: "#9fd6ce" },
  { name: "Илья Сомов", role: "Имплантолог", tone: "#b9d9f0" },
  { name: "Мария Лим", role: "Детский врач", tone: "#f1d3c4" },
] as const;

const SERVICES = ["Имплантация от 34 000 ₽", "Виниры от 22 000 ₽", "Детская от 2 500 ₽"] as const;

export function DentaMockup() {
  return (
    <div className="flex h-full flex-col bg-[#f2f8f7] text-[#0c3b3a]">
      <div className="flex h-[59%] flex-col px-[5cqw] pt-[3cqw]">
        <div className="flex items-center justify-between text-[1.6cqw]">
          <span className="font-mock-serif text-[2.8cqw] font-semibold">Денталаб</span>
          <span className="flex gap-[3cqw] opacity-70">
            <span>Услуги</span>
            <span>Врачи</span>
            <span>Цены</span>
          </span>
          <span className="rounded-full bg-[#0f766e] px-[2.2cqw] py-[0.9cqw] text-white">Записаться</span>
        </div>
        <div className="mt-[5cqw] grid flex-1 grid-cols-[1.25fr_1fr] gap-[4cqw]">
          <div>
            <p className="font-mock-serif text-[6.4cqw] leading-[1.02] tracking-[-0.02em]">Улыбка без страха и боли</p>
            <p className="mt-[2.2cqw] max-w-[85%] text-[1.8cqw] leading-snug opacity-70">
              Лечим под микроскопом и даём гарантию 5 лет на каждую работу
            </p>
            <span className="mt-[3.5cqw] inline-block rounded-full bg-[#0c3b3a] px-[3cqw] py-[1.4cqw] text-[1.7cqw] text-white">
              Записаться онлайн
            </span>
          </div>
          <div className="relative mb-[4cqw]">
            <div className="absolute inset-0 rounded-[42%_58%_55%_45%] bg-[#cfe9e5]" />
            <div className="absolute inset-[16%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff,#9fd6ce)]" />
            <div className="absolute bottom-[6%] -left-[5cqw] rounded-[1.6cqw] bg-white px-[2.2cqw] py-[1.6cqw] text-[1.45cqw] shadow-[0_1.2cqw_3cqw_-1cqw_rgb(12_59_58/0.35)]">
              <span className="block opacity-60">Свободно сегодня</span>
              <span className="mt-[0.5cqw] block font-semibold">14:00 · 16:30 · 18:00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[41%] flex-col gap-[3cqw] px-[5cqw] py-[4cqw]">
        <div className="flex gap-[1.5cqw]">
          {SERVICES.map((service) => (
            <span key={service} className="rounded-full border-[0.2cqw] border-[#0c3b3a]/15 px-[1.8cqw] py-[0.8cqw] text-[1.4cqw]">
              {service}
            </span>
          ))}
        </div>
        <div className="grid flex-1 grid-cols-[repeat(3,1fr)_1.4fr] gap-[2cqw]">
          {DOCTORS.map((doctor) => (
            <div key={doctor.name} className="flex flex-col rounded-[2cqw] bg-white p-[1.8cqw]">
              <span className="aspect-square w-[45%] rounded-full" style={{ background: `radial-gradient(circle at 40% 35%, #ffffff, ${doctor.tone})` }} />
              <span className="mt-auto font-mock-serif text-[2cqw] leading-tight">{doctor.name}</span>
              <span className="text-[1.3cqw] opacity-60">{doctor.role}</span>
            </div>
          ))}
          <div className="flex flex-col justify-between rounded-[2cqw] bg-[#0c3b3a] p-[2.2cqw] text-white">
            <span className="flex gap-[0.4cqw] text-[#f5c86b]">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} className="h-[1.8cqw] w-[1.8cqw] fill-current" strokeWidth={0} />
              ))}
            </span>
            <span className="font-mock-serif text-[2cqw] leading-snug italic">«Впервые не боялась идти к стоматологу»</span>
            <span className="text-[1.3cqw] opacity-60">Ольга, 4,9 на Картах</span>
          </div>
        </div>
      </div>
    </div>
  );
}
