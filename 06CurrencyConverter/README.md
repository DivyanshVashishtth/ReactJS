Here is the complete, single-block `README.md` for your **Currency Converter** project (`06currencyConverter`).

You can copy everything inside this block with one click and overwrite the existing file in that folder:

```markdown
# Currency Converter (React + Vite)

A dynamic and responsive Currency Converter application built with React and styled using Tailwind CSS. This project focuses on handling external API data, managing complex form states, and building custom reusable hooks.

## 🚀 Features

*   **Real-Time Exchange Rates:** Fetches live conversion data dynamically from a currency API.
*   **Custom Reusable Hook:** Features a custom `useCurrencyInfo` hook designed specifically for handling API fetch requests and caching currency data.
*   **Swap Functionality:** Instantly swaps the "From" and "To" currencies along with their respective amounts with a single click.
*   **Component Reusability:** Utilizes a modular `InputBox` component repeated for both origin and destination currency fields.

## 🛠️ Concepts Learned & Applied

*   **Custom React Hooks:** Created a custom hook to encapsulate data fetching logic and lifecycle side-effects.
*   **`useEffect` & `useState` Hooks:** Managed currency rates, user inputs, and controlled components effortlessly.
*   **Component Architecture:** Designed reusable UI components with flexible props for labels, amounts, currency selections, and disabled states.
*   **Keys in Loops:** Implemented proper unique `key` attributes when rendering the currency dropdown option lists to optimize React's virtual DOM reconciliation.

## 📦 Getting Started

To run this specific project locally on your machine, follow these steps:

### 1. Navigate to the project directory
If you are in the root repository folder, move into the currency converter project folder:
```bash
cd 06currencyConverter

```

### 2. Install dependencies

Install the required packages (React, Vite, Tailwind CSS):

```bash
npm install

```

### 3. Run the development server

Start the local server to view the application in your browser:

```bash
npm run dev

```

Once the server starts, open `http://localhost:5173` (or the port provided in your terminal) to view the project!

## ⚙️ Built With

* [React](https://react.dev/) - Frontend JavaScript library
* [Vite](https://vitejs.dev/) - Next-generation frontend tooling
* [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

```

```