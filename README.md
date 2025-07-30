# 📘 React Dictionary App

A sleek and simple ReactJS Dictionary App that fetches word definitions, synonyms, antonyms, examples, and pronunciation using the [Free Dictionary API](https://dictionaryapi.dev/). It includes:

- 🔍 Real-time word search
- 🔊 Audio pronunciation
- 📚 Multiple meanings display
- ⚠️ Error handling with toast notifications
- ⏳ Loading spinner for UX

---

## 🖼 Demo

> Live App 👉 [Click here to try it](https://your-deployment-link.vercel.app)

---

## 🚀 Features

- Search any English word and get:
  - Part of speech
  - Definition(s)
  - Example(s)
  - Synonyms and Antonyms
  - Audio pronunciation
- Responsive and accessible UI
- Toast notifications for user guidance and error handling
- Loader spinner while fetching results

---

## 🛠️ Tech Stack

| Tech          | Description                    |
|---------------|--------------------------------|
| React         | Frontend UI                    |
| Axios         | API Calls                      |
| React Toastify| Notification handling          |
| React Icons   | Speaker icon and search icon   |
| React Loader Spinner | Loader animation         |
| CSS           | Styling                        |

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/react-dictionary-app.git
cd react-dictionary-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the App
```bash
npm run dev
```
Now open http://localhost:5173 in your browser.

---

## 🔧 File Structure
```css
src/
├── Components/
│   ├── Dictionary/
│   │   ├── Dictionary.jsx
│   │   └── Dictionary.css
│   └── SearchBox/
│       ├── SearchBox.jsx
│       └── SearchBox.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

---

## 📸 Screenshots

![Desktop](./public/screenshots/desktop.png)
> Desktop View

![Mobile](./public/screenshots/mobile.png)
> Mobile View

---

## Request
| Search Word | Result                              |
| ----------- | ----------------------------------- |
| `Ananya`    | ✖ No result (404 handled)           |
| `love`      | ✅ Multiple meanings + pronunciation |

---

## 🌐 API Used
- Free Dictionary API

---

## 💡 Future Improvements
- Light/Dark mode toggle
- Save recent/favorite searches
- Multi-language support

---

## 📄 License
This project is open-source and available under the MIT License.

---

## 🧑‍💻 Author
Made with ❤️ by [Surender Gupta](https://linkedin.com/in/surender-gupta)

