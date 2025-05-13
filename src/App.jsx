
import { useState } from "react";

const days = [
  {
    title: "День 1 — Пробуждение Женщины Уровня",
    content: `
🔮 Утро:
• Активация аффирмациями
• Танец энергии
• Зеркальная фраза силы

☀️ День:
• Фильтр "женщины с выбором"
• Письмо из будущего

🌙 Вечер:
• Честное письмо «где я себя обесценила»
• Очищение водой

🎧 Самопрограммирование:
Сегодня я не надеюсь. Я выбираю...
(и т.д. полный текст)
    `
  },
  {
    title: "День 2 — Сексуальность и Притяжение",
    content: `
☀️ Утро:
• Прикосновение к телу
• Танец желания
• Мантра тела

☀️ День:
• Отслеживание запретов
• Ощущения, а не цели
• Замедление и ритм

🌙 Вечер:
• Ванна или масла
• Письмо желаний
• Медитация "Я — желание"

🎧 Самопрограммирование:
Я не боюсь своей энергии. Я не играю — я живу...
    `
  },
  {
    title: "День 3 — Финансовое Мышление",
    content: `
☀️ Утро:
• Мысленное заземление в изобилии
• Аффирмации
• Настройка «я источник»

☀️ День:
• Внутреннее изобилие
• Письмо от лица денег
• Проявление в мир

🌙 Вечер:
• Как поступила бы Женщина Уровня
• Благодарность
• Манифестация принятия

🎧 Самопрограммирование:
Я не прошу — я позволяю. Я магнит для изобилия...
    `
  }
];

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">💎 Притяжение Мужчины Уровня</h1>

      {!selectedDay && (
        <div className="flex flex-col gap-4">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(day)}
              className="p-4 rounded-2xl shadow border text-left hover:bg-gray-100"
            >
              <h2 className="text-lg font-semibold">{day.title}</h2>
            </button>
          ))}
        </div>
      )}

      {selectedDay && (
        <div className="space-y-4">
          <button
            onClick={() => setSelectedDay(null)}
            className="text-blue-600 underline"
          >
            ← Назад
          </button>
          <h2 className="text-xl font-semibold">{selectedDay.title}</h2>
          <pre className="whitespace-pre-wrap text-sm">{selectedDay.content}</pre>
        </div>
      )}
    </div>
  );
}
