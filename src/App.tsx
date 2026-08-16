import { useState } from "react";
import "./App.css";
// import DebouncedSearch from "./components/DebouncedSearch";
// import NestedCircle from "./components/NestedCircle";
import Alert from "./components/Alert";
import RegistrationForm from "./components/RegistrationForm";
// import DebouncedSearch from "./components/DebouncedSearch";
// import Counter from "./components/Counter";
// import CheckBoxGroup from "./components/CheckBoxGroup";
// import Todo from "./components/Todo";

function App() {
  const [showSuccess, setShowSuccess] = useState(true);
  const [showError, setShowError] = useState(true);
  const [showWarning, setShowWarning] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  return (
    <>
      {/* <Counter /> */}
      {/* <CheckBoxGroup /> */}
      {/* <Todo /> */}
      {/* <DebouncedSearch /> */}
      {/* <NestedCircle /> */}
      {/* // Usage — flexible through props */}
      {/* {showSuccess && (
        <Alert
          type="success"
          title="Saved!"
          onClose={() => setShowSuccess(false)}
        >
          <p>Your changes have been saved successfully.</p>
        </Alert>
      )}
      {showError && (
        <Alert
          type="error"
          title="Error"
          closable={false}
          onClose={() => setShowError(false)}
        >
          <p>Something went wrong. Please try again.</p>
        </Alert>
      )}
      {showInfo && (
        <Alert title="Note" onClose={() => setShowInfo(false)}>
          <p>This defaults to "info" type.</p>
        </Alert>
      )}
      {showWarning && (
        <Alert
          type="warning"
          title="Warning"
          onClose={() => setShowWarning(false)}
        >
          <p>This defaults to "warn" type.</p>
        </Alert>
      )} */}
      <RegistrationForm />
    </>
  );
}

export default App;
