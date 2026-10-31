interface ColorItem {
  value: string;
  clean: string;
}

interface SchemaProps {
  schema: ColorItem[];
}

export default function ColorSchema({ schema }: SchemaProps) {
  return (
    <section className="">
      <div className="grid grid-cols-5 w-full text-white text-center">
        {schema.map((hex) => (
          <div
            key={hex.clean}
            className="relative h-96"
            style={{ backgroundColor: hex.value }}
          >
            <p className="absolute bottom-0 w-full mx-auto bg-white text-black p-2 select-all">
              {hex.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
