import { useState, useEffect,useRef, createContext } from "react";



function Counter() {
    const [count, setCount] = useState(0);

    // 1. useState() - Managing Data in a Component
    const increase = () => {
        setCount(count + 1);
    };


    // 2. useEffect() - Performing Side Effects
    //"Do something after React renders."
    useEffect(() => {
    console.log("Count changed");
}, [count]);

    return (
        <>
            <h1>{count}</h1>

            <button onClick={increase}>
                +
            </button>
            <br /><br /><br /><br />
        </>
    );
}

//3. useRef() - Accessing HTML Elements
function Login() {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input ref={inputRef} />

            <button onClick={focusInput}>
                Focus Input
            </button>
        </>
    );
}

// 4. useContext() - Sharing Data Globally 
// createContext() → Create a context.
// Provider → Provide data.
// useContext() → Consume (use) the data.

const ThemeContext = createContext();

const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(
      theme === "light"
        ? "dark"
        : "light"
    );
  };

  return (
    <ThemeContext.Provider value={theme}>

      <button onClick={toggleTheme}>
        Change Theme
      </button>

    </ThemeContext.Provider>
  );

  function Navbar() {

  const theme =
    useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor:
          theme === "dark"
            ? "black"
            : "white",

        color:
          theme === "dark"
            ? "white"
            : "black"
      }}
    >
      Navbar Theme: {theme}
    </div>
  );
}

// User Example of useContext()
const UserContext = createContext();
<UserContext.Provider
  value={{
    name: "Mudassir",
    role: "Teacher"
  }}
>
  <Dashboard />
</UserContext.Provider>
const user =
  useContext(UserContext);



export { Counter, Login };