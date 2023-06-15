
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {

  return (
    <div className="w-full h-screen bg-red-600 flex flex-col justify-center items-center gap-10">
      <Button />
      <Input
        type="text"
      />
    </div>

  );
}

export default App;
