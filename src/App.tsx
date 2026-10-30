import ColorSchema from "@/components/ColorSchema";

function App() {
  return (
    <section className="bg-white p-4">
      <header className="flex gap-2">
        <div>
          <input type="color" className="m-auto w-12 h-10" />
        </div>
        <select className="border border-gray-300 rounded-md shadow h-8 m-auto capitalize">
          <option>monochrome</option>
          <option>monochrome-dark</option>
          <option>monochrome-light</option>
          <option>analogic</option>
          <option>complement</option>
          <option>analogic-complement</option>
          <option>triad</option>
          <option>quad</option>
        </select>
        <button className="border border-gray-300 text-xs px-4 m-auto rounded-md shadow h-8 focus:bg-gray-300">
          Get Color Scheme
        </button>
      </header>
      <ColorSchema />
    </section>
  );
}

export default App;
