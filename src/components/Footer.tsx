import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-2xl font-serif text-foreground mb-1">
              The TRECS Institute
            </h3>
            <p className="text-base text-gray-500">
              &copy; {new Date().getFullYear()} The TRECS Institute. All rights
              reserved.
            </p>
          </div>

          <div className="text-right">
            <Link
              href="/contact"
              className="text-xl font-serif text-foreground hover:text-green-dark transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
