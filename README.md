# Seminar Manager


## 📌 О проекте
Seminar Manager — это веб-приложение на React для управления семинарами. Оно позволяет просматривать, добавлять, редактировать и удалять семинары, а также управлять их расписанием.

## 🚀 Функционал
- 📋 Отображение списка семинаров
- ✏️ Редактирование существующих семинаров
- 🗑️ Удаление семинаров
- 🔄 Управление состоянием с Redux Toolkit
- ⚡ Работа с REST API

## 🛠️ Технологии
- React
- TypeScript
- Redux Toolkit
- JSON Server (для моковых данных)
- Tailwind CSS (для стилизации)

## 🔧 Установка и запуск

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/your-username/seminar-manager.git
   cd my-app
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Запустите JSON Server:**
   ```bash
   npx json-server --watch db.json --port 5000
   ```

4. **Запустите проект:**
   ```bash
   npm run dev
   ```

## 📜 API
Приложение использует JSON Server как бэкенд. Пример структуры данных в `db.json`:
```json
{
  "seminars": [
    {
      "id": 1,
      "title": "React Basics",
      "description": "Основы работы с React.",
      "date": "2024-02-10",
      "time": "10:00",
      "photo": "https://via.placeholder.com/150"
    }
  ]
}
```


