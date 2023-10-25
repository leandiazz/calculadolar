import { Home } from "./components/Home";

function App() {
  return (
    <main className="flex h-screen items-center justify-center bg-blue-200">
      <div className="mx-auto max-w-screen-md flex-1 px-4">
        <div className="grid w-full flex-1 rounded-3xl bg-white p-8 shadow-lg">
          <Home />
        </div>
      </div>
    </main>
  );
}

export default App;
