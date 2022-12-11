import { useState } from "react";
import Header from "./Header";
import Modal from "./Modal";


function App() {
  const [open, setOpen] = useState(false)
  return (
    <div>
     <Header setOpen={setOpen} open={open} />
     {open && <Modal setOpen={setOpen} />}
    </div>
  );
}

export default App;
