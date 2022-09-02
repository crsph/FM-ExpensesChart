import { useState } from "react";
// import { Provider } from "react-redux";
import { Provider } from "../components/ContextObject";
// import { wrapper, store } from "../store/store";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const { expense } = pageProps;
  const [monthlyExpense] = useState(expense);

  return (
    <>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
