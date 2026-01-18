import Link from 'next/link'

export default function Protocols() {
  const protocols = [
    {
      category: 'Wine Grapes & Vineyards',
      color: { bg: 'bg-[#fff8e8]', border: 'border-[#8b6f47]', accent: '#8b6f47' },
      items: [
        { name: 'Wine Grape Vineyard Protocol', file: 'Wine-Grape-Vineyard-Protocol.pdf', region: 'General Arizona' },
        { name: 'Willcox Wine Grape Vineyard Protocol', file: 'Willcox-Wine-Grape-Vineyard-Protocol.pdf', region: 'Willcox AVA Specific' },
      ]
    },
    {
      category: 'Citrus & Avocado Groves',
      color: { bg: 'bg-[#e8f4e8]', border: 'border-[#264027]', accent: '#264027' },
      items: [
        { name: 'Avocado Grove Protocol', file: 'Avocado-California-Grove-Protocol.pdf', region: 'California/Warm Climates' },
        { name: 'Orange Grove Protocol', file: 'Orange-Arizona-Grove-Protocol.pdf', region: 'Arizona Specific' },
      ]
    },
    {
      category: 'Orchards & Tree Crops',
      color: { bg: 'bg-[#eaf3ea]', border: 'border-[#3c5233]', accent: '#3c5233' },
      items: [
        { name: 'Pistachio Orchard Protocol', file: 'Pistachio-Arizona-Orchard-Protocol.pdf', region: 'Arizona Desert' },
        { name: 'Stone Fruit Orchard Protocol', file: 'Stone-Fruit-Arizona-Orchard-Protocol.pdf', region: 'Arizona' },
      ]
    },
    {
      category: 'Native & Restoration',
      color: { bg: 'bg-[#f9f3e8]', border: 'border-[#a07855]', accent: '#a07855' },
      items: [
        { name: 'Sonoran Native Tree Protocol', file: 'Sonoran-Native-Tree-Protocol.pdf', region: 'Desert Restoration' },
      ]
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#f5f1e8]">
      {/* Texture background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23264027' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>

      <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#1a1a16] hover:border-[#264027] hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(38,64,39,1)] transition-all mb-12 bg-white font-semibold"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        <header className="mb-16 md:mb-20">
          <div className="inline-block mb-6 px-5 py-2 bg-[#264027] text-[#f5f1e8] text-sm font-bold tracking-widest border-2 border-[#1a1a16] shadow-[4px_4px_0px_0px_rgba(26,26,22,1)]">
            PROTOCOLS & RESOURCES
          </div>
          <h1 className="text-5xl md:text-7xl mb-8 leading-[1.05] text-[#1a1a16]">
            Soil Biology Protocols
          </h1>
          <p className="text-2xl text-[#264027] leading-relaxed font-bold max-w-3xl">
            Crop-specific protocols for rebuilding soil biology in Arizona's unique desert climate.
            Each protocol includes application rates, timing, and monitoring strategies.
          </p>
        </header>

        <div className="space-y-12">
          {protocols.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-3xl font-bold text-[#1a1a16] mb-6">{category.category}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((protocol, index) => (
                  <a
                    key={index}
                    href={`/${protocol.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`card-hover group block p-6 border-3 ${category.color.border} hover:border-[#1a1a16] transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 ${category.color.bg}`}
                    style={{
                      boxShadow: `5px 5px 0px 0px ${category.color.accent}`,
                      ['--shadow-color' as any]: category.color.accent
                    }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1a1a16] mb-2 group-hover:text-[#{category.color.accent}]">
                          {protocol.name}
                        </h3>
                        <p className="text-sm text-[#4a4a40] font-medium">
                          {protocol.region}
                        </p>
                      </div>
                      <svg className="w-8 h-8 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: category.color.accent}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all" style={{color: category.color.accent}}>
                      <span>View PDF</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t-2 border-[#1a1a16]">
          <div className="bg-[#264027] p-8 md:p-12 border-3 border-[#1a1a16] shadow-[8px_8px_0px_0px_rgba(26,26,22,1)]">
            <h2 className="text-3xl font-bold text-[#f5f1e8] mb-4">Need a Custom Protocol?</h2>
            <p className="text-[#e8f4e8] leading-relaxed mb-6 text-lg">
              These protocols are designed for Arizona's desert agriculture. If you're growing a crop not listed here,
              or need site-specific recommendations, we offer custom protocol development based on soil testing and your
              specific growing conditions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:ralvarez@soilseedandwater.com"
                className="inline-flex items-center gap-2 text-[#f5f1e8] font-bold border-2 border-[#f5f1e8] px-6 py-3 hover:bg-[#f5f1e8] hover:text-[#264027] transition-all"
              >
                Request Custom Protocol
              </a>
              <a
                href="https://organicsoilwholesale.com"
                className="inline-flex items-center gap-2 text-[#f5f1e8] font-bold border-2 border-[#f5f1e8] px-6 py-3 hover:bg-[#f5f1e8] hover:text-[#264027] transition-all"
              >
                Shop Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
