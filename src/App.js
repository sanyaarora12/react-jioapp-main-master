import { AuthProvider } from "./Components/auth";
import Routers from "./Components/Routers";

function App() {
  return (
    <body>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </body>
  );
}

export default App;
