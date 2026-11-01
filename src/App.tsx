import ColorSchema from "@/components/ColorSchema";
import { useState } from "react";
import { motion } from "motion/react";

interface ColorItem {
  hex: {
    value: string;
    clean: string;
  };
}

function App() {
  const [colorSchema, setColorSchema] = useState([]);
  const [color, setColor] = useState("#f20707");
  const [schema, setSchema] = useState("");

  const cleanHex = color.replace("#", "");

  const url = `https://www.thecolorapi.com/scheme?hex=${cleanHex}&format=json&mode=${schema}&count=5`;

  const fetchData = async () => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("can't fetch data");
      }

      const data = await res.json();
      const hexColor = data.colors.map((item: ColorItem) => item.hex);
      setColorSchema(hexColor);
    } catch (err) {
      console.error(err);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleSchemaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSchema(e.target.value);
  };

  return (
    <section className="bg-white p-4 mt-2 md:max-w-6xl md:mx-auto">
      <header className="flex gap-2 md:w-full md:justify-between md:px-4">
        <div>
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="m-auto w-12 h-10 md:w-18 md:h-12"
          />
        </div>
        <select
          value={schema}
          onChange={handleSchemaChange}
          className="border border-gray-300 px-2 rounded-md shadow h-8 m-auto capitalize md:m-0 md:w-96 md:text-lg"
        >
          <option value={"monochrome"}>monochrome</option>
          <option value={"monochrome-dark"}>monochrome-dark</option>
          <option value={"monochrome-light"}>monochrome-light</option>
          <option value={"analogic"}>analogic</option>
          <option value={"complement"}>complement</option>
          <option value={"analogic-complement"}>analogic-complement</option>
          <option value={"triad"}>triad</option>
          <option value={"quad"}>quad</option>
        </select>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={fetchData}
          className="border border-gray-300 text-xs px-4 m-auto rounded-md shadow h-8 md:m-0 md:text-lg"
        >
          Get Color Scheme
        </motion.button>
      </header>
      <ColorSchema schema={colorSchema} />
    </section>
  );
}

export default App;
