import remarkGfm from "remark-gfm";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function ProductDescription({ content }: { content: string }) {
  const renderOptions = {
    parseFrontmatter: false,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
  };
  return (
    <>
      <div className="p-4 bg-white border rounded-md border-sky-300">
        <div className="py-1">
          <p className="font-bold text-lg text-sky-800 uppercase">
            Product Description
          </p>
        </div>
        <div className="py-1">
          <div
            className="prose prose-quoteless prose-neutral dark:prose-invert max-w-none text-normal
             prose-table:border dark:prose-table:border-neutral-600 mt-4  prose-th:bg-gray-300 dark:prose-th:bg-neutral-700 dark:even:prose-tr:bg-neutral-700"
          >
            <MDXRemote
              source={content}
              options={renderOptions}
            />
          </div>
        </div>
      </div>
    </>
  );
}
