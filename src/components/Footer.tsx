export default function Footer() {
  return (
    <footer className="mt-16 md:mt-24">
      <hr className="section-divider" />
      <div className="mx-auto max-w-page px-6 md:px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg text-accent">AK</span>
          <span className="text-xs text-muted">© {new Date().getFullYear()} Aryan Kumar</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="w-1 h-1 rounded-full bg-accent/30" />
          <span>Crafted with intention & caffeine</span>
        </div>
      </div>
    </footer>
  );
}
