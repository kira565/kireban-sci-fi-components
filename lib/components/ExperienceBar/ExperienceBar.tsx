export interface ExperienceBarProps {
  width?: string;
  height?: string;
}

export const ExperienceBar: React.FC<ExperienceBarProps> = () => {
  return <div></div>;
};

// 🗾 Альтернативные варианты формулировок:
// “Where it started. Where it grew. Where it’s headed.”

// “Japan is not a stop. It’s the summit.”

// “Everything leads to this.”

// “My final destination: Japan.”

// “Vision-driven move — not relocation, but arrival.”

// Элемент	Идея
// Панель внизу	Название: "My Developer Journey"
// Этапы:	◉ Москва → ◉ Никосия → ★ Япония (звёздочка — как цель)
// Для Японии	Подпись: “My long-term goal — to grow and contribute in Japan.”
// Эффект при клике	Камера центрирует маркер, globe замирает, лёгкий glow на маркере
// Дополнительно	Может быть маленький текст: “Final Destination” под маркером Японии
