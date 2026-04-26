import React from 'react';

interface ProductsPageProps {
  onNavigate: (path: string) => void;
}

const products = [
  {
    name: 'InboxToSheet',
    tagline: 'Stop copying emails into spreadsheets by hand.',
    description:
      'Four Google Apps Scripts that read your incoming emails, pull out the data, and drop it into the right tab of your spreadsheet automatically. Every five minutes. Without you touching anything. Works with Gmail and Outlook. No coding required.',
    price: '$67',
    priceNote: 'One-time payment',
    includes: [
      '4 complete automation scripts',
      'Step-by-step setup instructions',
      'Security hardening with daily backups',
      'Daily validation and error flagging',
      'Excel to Google Sheets migration tool',
      'AI customization prompt — no coding needed',
    ],
    accent: 'terracotta',
    color: 'bg-terracotta/10',
    borderColor: 'border-terracotta/20',
    btnColor: 'bg-terracotta hover:bg-terracotta/90',
    url: 'https://jaywalker73.gumroad.com/l/inbox2sheets',
  },
  {
    name: 'FolderSort',
    tagline: 'Your messy folders, organized once and for all.',
    description:
      'A desktop app that scans your folders and sorts everything into clean structures based on rules you set once. Preview mode shows you where everything will go before anything moves. Full undo built in. Works on Windows with no Python installation required.',
    price: '$97',
    priceNote: 'One-time payment',
    includes: [
      'Windows desktop app — no install needed',
      'Keyword rule builder — set it once',
      'Preview mode before anything moves',
      'Full undo with backup manifest',
      'Auto-Sort watcher — new files sorted automatically',
      'Duplicate and temp file cleanup advisor',
    ],
    accent: 'honey',
    color: 'bg-honey/10',
    borderColor: 'border-honey/20',
    btnColor: 'bg-honey hover:bg-honey/90',
    url: 'https://jaywalker73.gumroad.com/l/foldersort',
  },
];

const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-cream pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-terracotta mb-4">
            Products
          </p>
          <h1 className="text-4xl md:text-5xl font-accent font-bold text-charcoal leading-tight mb-6">
            Tools that do the tedious work.
          </h1>
          <p className="text-lg text-charcoal/70 max-w-2xl">
            One-time purchases. No subscriptions. Built for people who are tired of
            doing by hand what a script can do in the background.
          </p>
        </div>

        {/* Product Cards */}
        <div className="flex flex-col gap-10">
          {products.map((product) => (
            <div
              key={product.name}
              className={`rounded-2xl border ${product.borderColor} ${product.color} p-8 md:p-10`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                {/* Left: info */}
                <div className="flex-1">
                  <h2 className={`text-2xl font-accent font-bold text-${product.accent} mb-2`}>
                    {product.name}
                  </h2>
                  <p className="text-base font-semibold text-charcoal mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-charcoal/70 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-charcoal/80">
                        <span className={`text-${product.accent} mt-0.5 shrink-0`}>&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: price + CTA */}
                <div className="flex flex-col items-start md:items-end gap-4 md:min-w-[160px]">
                  <div className="text-right">
                    <div className="text-3xl font-accent font-bold text-charcoal">
                      {product.price}
                    </div>
                    <div className="text-sm text-charcoal/50">{product.priceNote}</div>
                  </div>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${product.btnColor} text-cream font-semibold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap`}
                  >
                    Get {product.name}
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 pt-10 border-t border-charcoal/10 text-center">
          <p className="text-charcoal/50 text-sm mb-4">
            Need something custom built for your workflow?
          </p>
          <button
            onClick={() => onNavigate('start')}
            className="text-terracotta font-medium text-sm hover:underline"
          >
            Start a project with us
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductsPage;
