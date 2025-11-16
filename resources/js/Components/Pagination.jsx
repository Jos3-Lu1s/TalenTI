import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
  return (
    <div className="flex justify-center mt-6 space-x-2">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url || "#"}
          className={`
            px-3 py-1 rounded-md border
            ${link.active ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}
          `}
          dangerouslySetInnerHTML={{ __html: link.label }}
        />
      ))}
    </div>
  );
}
