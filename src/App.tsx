import TagsCard from "./components/tags-card";
import { TanstackProvider } from "./providers/tanstack-provider";

function App() {
  return (
    <TanstackProvider>
      <TagsCard />
    </TanstackProvider>
  );
}

export default App;
