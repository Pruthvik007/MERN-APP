import "./App.css";
import Router from "./Router";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { MessageContext } from "./Helpers/Context";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Toast from "./Components/Common/Toast";

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    toast.success(message, {
      toastId: "success1",
    });
    setMessage(null);
  }, [message]);
  return (
    <div className="App">
      <MessageContext.Provider value={{ message, setMessage }}>
        <Provider store={store}>
          <Router />
        </Provider>
        <Toast />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
