import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#f5f1e8]">
      {/* Colorful texture background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23264027' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>

      {/* Decorative color blocks */}
      <div className="fixed top-20 right-0 w-32 h-32 bg-[#264027] opacity-10 pointer-events-none"></div>
      <div className="fixed bottom-40 left-0 w-24 h-24 bg-[#8b6f47] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-20 md:mb-32">
          <div className="inline-block mb-6 px-5 py-2 bg-[#264027] text-[#f5f1e8] text-sm font-bold tracking-widest border-2 border-[#1a1a16] shadow-[4px_4px_0px_0px_rgba(26,26,22,1)]">
            ARIZONA SOIL SCIENCE
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] text-[#1a1a16] max-w-4xl" style={{textShadow: '3px 3px 0px rgba(139, 111, 71, 0.2)'}}>
            Why Soil Matters
          </h1>
          <p className="text-xl md:text-2xl text-[#264027] max-w-2xl leading-relaxed font-bold">
            The biological foundation of regenerative agriculture in the Southwest desert
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {topics.map((topic, index) => {
            const colors = [
              { bg: 'bg-[#e8f4e8]', border: 'border-[#264027]', accent: '#264027', shadow: 'rgba(38, 64, 39, 1)' },
              { bg: 'bg-[#fff8e8]', border: 'border-[#8b6f47]', accent: '#8b6f47', shadow: 'rgba(139, 111, 71, 1)' },
              { bg: 'bg-[#e8efe8]', border: 'border-[#3c5233]', accent: '#3c5233', shadow: 'rgba(60, 82, 51, 1)' },
              { bg: 'bg-[#fef5e8]', border: 'border-[#a07855]', accent: '#a07855', shadow: 'rgba(160, 120, 85, 1)' },
              { bg: 'bg-[#eaf3ea]', border: 'border-[#264027]', accent: '#264027', shadow: 'rgba(38, 64, 39, 1)' },
              { bg: 'bg-[#f9f3e8]', border: 'border-[#8b6f47]', accent: '#8b6f47', shadow: 'rgba(139, 111, 71, 1)' },
            ];
            const color = colors[index];

            return (
              <Link
                key={topic.slug}
                href={`/${topic.slug}`}
                className={`group relative block p-8 md:p-10 border-3 ${color.border} hover:border-[#1a1a16] transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 ${color.bg}`}
                style={{
                  animation: `slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s both`,
                  boxShadow: `5px 5px 0px 0px ${color.shadow}`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `8px 8px 0px 0px ${color.shadow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `5px 5px 0px 0px ${color.shadow}`;
                }}
              >
                <div className="mb-4 text-sm font-bold tracking-wider" style={{color: color.accent}}>
                  0{index + 1}
                </div>
                <h2 className="text-2xl md:text-3xl mb-4 leading-tight text-[#1a1a16] transition-colors">
                  {topic.title}
                </h2>
                <p className="text-[#4a4a40] leading-relaxed mb-6">
                  {topic.preview}
                </p>
                <div className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all" style={{color: color.accent}}>
                  <span>Read article</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        <footer className="mt-24 pt-16 border-t-3 border-[#1a1a16]">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-[#264027] p-8 border-3 border-[#1a1a16] shadow-[6px_6px_0px_0px_rgba(26,26,22,1)]">
              <h3 className="text-2xl font-bold text-[#f5f1e8] mb-4">About Soil Seed & Water</h3>
              <p className="text-[#e8f4e8] leading-relaxed mb-4">
                Arizona's leading producer of biological soil amendments. We convert organic waste streams into premium compost,
                vermicast, and microbial inoculants for regenerative agriculture.
              </p>
              <a
                href="https://soilseedandwater.com"
                className="inline-flex items-center gap-2 text-[#f5f1e8] font-bold border-2 border-[#f5f1e8] px-5 py-2 hover:bg-[#f5f1e8] hover:text-[#264027] transition-all"
              >
                Visit SSW
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="bg-[#8b6f47] p-8 border-3 border-[#1a1a16] shadow-[6px_6px_0px_0px_rgba(26,26,22,1)]">
              <h3 className="text-2xl font-bold text-white mb-4">Organic Soil Wholesale</h3>
              <p className="text-[#f5f1e8] leading-relaxed mb-4">
                Bulk organic soil amendments delivered across the Southwest. Premium worm castings, compost blends,
                and biological inputs for commercial growers and landscapers.
              </p>
              <a
                href="https://organicsoilwholesale.com"
                className="inline-flex items-center gap-2 text-white font-bold border-2 border-white px-5 py-2 hover:bg-white hover:text-[#8b6f47] transition-all"
              >
                Shop Wholesale
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center py-8 border-t-2 border-[#1a1a16]">
            <p className="text-[#4a4a40] text-sm">
              Educational resource by <strong className="text-[#1a1a16]">Soil Seed & Water</strong> ·
              Biological soil amendments for Arizona agriculture · Est. 2020
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}

const topics = [
  {
    slug: 'fertilizer-loss',
    title: 'Why 60% of Your Fertilizer Never Reaches Your Crops',
    preview: 'The biological bridge is broken. Here\'s the science behind nutrient loss and how to fix it.'
  },
  {
    slug: 'usda-composting-bet',
    title: 'The Composting Secret That Just Won a $700 Million Bet',
    preview: 'What 3,000 composters at COMPOST2026 know that most farmers don\'t.'
  },
  {
    slug: 'dead-soil-water',
    title: 'Dead Soil Can\'t Hold Water',
    preview: 'Arizona\'s water crisis isn\'t just about rain. It\'s about what\'s happening 6 inches underground.'
  },
  {
    slug: 'gcu-garden-program',
    title: 'The Free GCU Program Teaching Phoenix How to Grow Food',
    preview: '500+ residents are learning regenerative gardening. Here\'s what they\'re discovering.'
  },
  {
    slug: 'compost-math',
    title: 'One Inch of Compost. 20,000 Gallons of Water Saved.',
    preview: 'The math behind compost that changes everything for Arizona growers.'
  },
  {
    slug: 'heat-soil-biology',
    title: '115°F and Your Soil is Dying',
    preview: 'Summer heat kills more than plants. Here\'s how to protect your soil biology.'
  }
]
