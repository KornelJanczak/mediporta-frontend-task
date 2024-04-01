import TagsCard from "./components/tags-card";
import { TanstackProvider } from "./providers/tanstack-provider";

function App() {
  return (
    <TanstackProvider>
      <main>
        <TagsCard />
      </main>
    </TanstackProvider>
  );
}

export default App;
