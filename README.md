# [Dev-Stack]

## Description
A short description of your project explaining what it does, the problem it solves, and its main purpose.

## Technologies Used
* React
* JavaScript / TypeScript
* CSS / Tailwind CSS
* HTML5

## Features
* Feature 1: Fast and responsive user interface
* Feature 2: Interactive data rendering using JSON
* Feature 3: Clean and modern component structure

---

## React Q&A

### i. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like code directly inside JavaScript files. React uses it because it makes the code much easier to read, write, and understand compared to traditional JavaScript DOM manipulation.

### ii. What is the difference between props and state?
* **Props (Properties):** These are passed from a parent component to a child component and are **read-only** (immutable).
* **State:** This is managed **within** the component itself, can be updated over time, and triggers a re-render when it changes.

### iii. What does the useState hook do, and where did you use it in this project?
`useState` is a React Hook that lets you add state to functional components. It gives you a current state value and a function to update it. In this project, it was used to manage dynamic UI states (like tracking input values, toggling elements, or storing fetched data).

### iv. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` lets you perform side effects in functional components (like fetching data, timers, or manual DOM updates). It was needed to load the JSON data when the component first mounts so that the app fetches the data asynchronously without blocking the render process.

### v. Why does every item in a .map() list need a unique key prop?
React uses `key` props to efficiently identify which items have changed, been added, or been removed in a list. This helps React update the virtual DOM correctly and improves rendering performance.

### vi. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means displaying different UI elements or components based on certain conditions (like `if` statements or ternary operators). For example, showing an empty message when there is no data:
\`\`\`jsx
{items.length === 0 ? <p>No items found!</p> : <ItemList items={items} />}
\`\`\`

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
* **Parent to Child:** Passed via **props** (e.g., `<Child data={parentData} />`).
* **Child to Parent:** Passed using a **callback function** provided by the parent via props. The child calls this function and passes data as an argument to update the parent's state.
*