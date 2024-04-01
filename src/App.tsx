import TagsCard from "./components/tag-card";
import { TanstackProvider } from "./providers/tanstack-provider";

function App() {
  return (
    <TanstackProvider>
      <TagsCard />
    </TanstackProvider>
  );
}

export default App;
