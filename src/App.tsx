import TagCard from "./components/tag-card";
import { TanstackProvider } from "./providers/tanstack-provider";

function App() {
  return (
    <TanstackProvider>
      <TagCard />
    </TanstackProvider>
  );
}

export default App;
