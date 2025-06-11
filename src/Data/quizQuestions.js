const quizQuestions = [
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    options: [
      "var myVar;",        // correct
      "variable myVar;",
      "v myVar;",
      "declare myVar;"
    ],
    answer: 0
  },
  {
    question: "Which method is used to add an element at the end of an array in JavaScript?",
    options: [
      "push()",            // correct
      "pop()",
      "shift()",
      "unshift()"
    ],
    answer: 0
  },
  {
    question: "What does React use to pass data between components?",
    options: [
      "Props",
      "State",
      "Context",
      "All of the above"   // correct
    ],
    answer: 3
  },
  {
    question: "How do you create a React component using a function?",
    options: [
      "function MyComponent() { return <div>Hello</div>; }",  // correct
      "class MyComponent extends React.Component {}",
      "let MyComponent = new React.Component()",
      "const MyComponent = React.createComponent()"
    ],
    answer: 0
  },
  {
    question: "Which hook is used for managing state in functional React components?",
    options: [
      "useEffect",
      "useState",           // correct
      "useContext",
      "useReducer"
    ],
    answer: 1
  },
  {
    question: "What will `console.log(typeof NaN)` output in JavaScript?",
    options: [
      "'number'",          // correct
      "'NaN'",
      "'undefined'",
      "'object'"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of keys in React lists?",
    options: [
      "To uniquely identify elements for efficient re-rendering",  // correct
      "To style the elements",
      "To add event listeners",
      "To set HTML attributes"
    ],
    answer: 0
  },
  {
    question: "Which lifecycle method runs after the first render in a class component?",
    options: [
      "componentDidUpdate",
      "componentDidMount",    // correct
      "componentWillUnmount",
      "render"
    ],
    answer: 1
  },
  {
    question: "What is JSX in React?",
    options: [
      "A CSS preprocessor",
      "A syntax extension to JavaScript",   // correct
      "A testing framework",
      "A package manager"
    ],
    answer: 1
  },
  {
    question: "How do you prevent a form submission from refreshing the page in React?",
    options: [
      "event.preventDefault()",  // correct
      "return false;",
      "event.stopPropagation()",
      "submit.prevent()"
    ],
    answer: 0
  }
];

export default quizQuestions;
