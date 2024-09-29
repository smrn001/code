import CodeEditor from "./CodeEditor";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className=" bg-bg min-h-screen text-gray-500 px-6 py-8">
      <Navbar></Navbar>
      <CodeEditor></CodeEditor> 
      <Footer></Footer>
    </div>
  );
}
