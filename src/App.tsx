import TagList from "./components/tag-list";
import { TanstackProvider } from "./providers/tanstack-provider";

function App() {
  return (
    <TanstackProvider>
      <TagList />
    </TanstackProvider>
  );
}

export default App;
