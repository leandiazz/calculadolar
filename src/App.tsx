import { Home } from "./components/Home";

function App() {
  return (
    <main className="flex h-screen items-center justify-center bg-blue-200">
      <div className="m-auto h-full max-h-96 max-w-screen-lg flex-1 px-4">
        <div className="h-full w-full rounded-3xl bg-white p-8 shadow-lg">
          <Home />
        </div>
      </div>
    </main>
  );
}

export default App;
