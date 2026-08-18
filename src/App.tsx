import "./App.css";
import UserTable from "./components/UserTable";
// import LiveWindowSize from "./components/LiveWindowSize";
// import DebouncedSearch from "./components/DebouncedSearch";
// import NestedCircle from "./components/NestedCircle";
// import Alert from "./components/Alert";
// import RegistrationForm from "./components/RegistrationForm";
// import DebouncedSearch from "./components/DebouncedSearch";
// import Counter from "./components/Counter";
// import CheckBoxGroup from "./components/CheckBoxGroup";
// import Todo from "./components/Todo";

function App() {
  // const [showSuccess, setShowSuccess] = useState(true);
  // const [showError, setShowError] = useState(true);
  // const [showWarning, setShowWarning] = useState(true);
  // const [showInfo, setShowInfo] = useState(true);

  const users = [
    { id: 1, name: "Jhon", email: "jhon@gmail.com", role: "Developer" },
    { id: 2, name: "Mahboob", email: "mahboob@gmail.com", role: "Accountant" },
    { id: 3, name: "Jane", email: "jane@gmail.com", role: "Electrician" },
    { id: 4, name: "Jasmine", email: "jasmine@gmail.com", role: "Accountant" },
    { id: 5, name: "Sara", email: "sara@gmail.com", role: "CA" },
    { id: 6, name: "Doe", email: "doe@gmail.com", role: "CA" },
    { id: 7, name: "DC", email: "dc@gmail.com", role: "Technician" },
    { id: 8, name: "Manoj", email: "manoj@gmail.com", role: "Electrician" },
    { id: 9, name: "Sib", email: "tain@gmail.com", role: "Developer" },
  ];

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
      {/* <RegistrationForm /> */}
      {/* <LiveWindowSize /> */}

      <UserTable users={users} />
    </>
  );
}

export default App;
