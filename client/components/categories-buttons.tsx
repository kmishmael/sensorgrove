import ButtonDrop from "./button-drop";
import Link from 'next/link';

export default function CategoriesButtons({ categories }: { categories: any }) {
  return (
    <div className="border-t flex gap-3 border-b py-2">
      {categories.map((d: any) => (
        <Link href={`/category/{d.slug}`} key={d.slug}>
          <ButtonDrop title={d.name} />
        </Link>
      ))}
    </div>
  );
}
