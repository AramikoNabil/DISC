import AppRouter from "./router/AppRouter";
import HttpsRedirect from "react-https-redirect";

function App() {
  return (
    <HttpsRedirect>
      <AppRouter />
    </HttpsRedirect>
  );
}

export default App;
