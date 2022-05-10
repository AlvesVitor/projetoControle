
import ContextProvider from "./src/context";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  console.disableYellowBox = true;
  return (
    <ContextProvider>
      <AppRoutes />
    </ContextProvider>
  );
}

