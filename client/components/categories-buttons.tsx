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
export default function CategoriesButtons({ categories }: { categories: any }) {
  return (
    <div className="border-t flex gap-3 border-b py-2">
      {categories.map((d: any) => (
        <div key={d.slug}>
          <ButtonDrop title={d.name} />
        </div>
      ))}
    </div>
  );
}
