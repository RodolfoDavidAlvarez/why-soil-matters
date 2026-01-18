import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Subtle texture background */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none"
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-20 md:mb-32">
          <div className="inline-block mb-6 px-4 py-1.5 bg-[#264027] text-white text-sm font-medium tracking-wide">
            ARIZONA SOIL SCIENCE
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] text-[#1a1a16] max-w-4xl">
            Why Soil Matters
          </h1>
          <p className="text-xl md:text-2xl text-[#8b6f47] max-w-2xl leading-relaxed font-medium">
            The biological foundation of regenerative agriculture in the Southwest desert
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {topics.map((topic, index) => (
            <Link
              key={topic.slug}
              href={`/${topic.slug}`}
              className="group relative block p-8 md:p-10 border-2 border-[#1a1a16] hover:border-[#264027] transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(38,64,39,1)] bg-white"
              style={{
                animation: `slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s both`
              }}
            >
              <div className="mb-4 text-sm font-bold tracking-wider text-[#8b6f47]">
                0{index + 1}
              </div>
              <h2 className="text-2xl md:text-3xl mb-4 leading-tight text-[#1a1a16] group-hover:text-[#264027] transition-colors">
                {topic.title}
              </h2>
              <p className="text-[#4a4a40] leading-relaxed mb-6">
                {topic.preview}
              </p>
              <div className="flex items-center gap-2 text-[#264027] font-semibold group-hover:gap-4 transition-all">
                <span>Read article</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-24 pt-12 border-t-2 border-[#1a1a16] text-center">
          <p className="text-[#4a4a40] text-lg">
            A resource by{' '}
            <a
              href="https://soilseedandwater.com"
              className="text-[#264027] font-semibold hover:text-[#1a2f1c] underline decoration-2 underline-offset-4"
            >
              Soil Seed & Water
            </a>
          </p>
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
