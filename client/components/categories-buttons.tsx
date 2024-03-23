import ButtonDrop from "./button-drop";

const data = [
  { text: "Groceries" },
  { text: "Premium Fruits" },
  { text: "Home & Kitchen" },
  { text: "Fashion" },
  { text: "Electronics" },
  { text: "Beauty" },
  { text: "Home Improvement" },
  { text: "Sports, Toys & Luggage" },
];
export default function CategoriesButtons() {
  return (
    <div className="border-t flex justify-between border-b py-2 px-20">
      {data.map((d) => (
        <>
          <ButtonDrop title={d.text} />
        </>
      ))}
    </div>
  );
}
