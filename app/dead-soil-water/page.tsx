import Link from 'next/link'

export default function DeadSoilWater() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-green-600 hover:text-green-700 mb-8 inline-block">
          ← Back to all topics
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Dead Soil Can't Hold Water. Here's What Happens Next.
          </h1>
          <p className="text-xl text-gray-600">
            Arizona's water crisis isn't just about rain. It's about what's happening 6 inches underground.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The Water Crisis Everyone Knows</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Arizona is in a water crisis. The Colorado River is shrinking. Lake Mead is at historic lows.
              Groundwater levels have dropped 600+ feet in some agricultural areas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Everyone knows this. What most don't know:
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold mb-4">
              Your soil is either saving water or wasting it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The Soil-Water Connection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Healthy soil can hold up to 20 times its weight in water. Dead soil can't.
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Living Soil</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Organic matter acts like a sponge</li>
                  <li>• Fungal networks create water-storing aggregates</li>
                  <li>• Holds 20,000+ gallons per acre per 1% organic matter increase</li>
                  <li>• Reduces irrigation needs by 30-50%</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="font-bold text-red-900 mb-2">Dead Soil</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Water runs off or drains straight through</li>
                  <li>• No structure to hold moisture</li>
                  <li>• Requires constant irrigation</li>
                  <li>• Creates runoff and erosion</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The Math: What 1% Organic Matter Means</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here's the number that changes everything:
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <p className="text-lg font-semibold text-yellow-900 mb-2">The 20,000 Gallon Rule</p>
              <p className="text-yellow-800 mb-4">
                Every 1% increase in soil organic matter = 20,000 gallons more water retention per acre.
              </p>
              <p className="text-yellow-800 text-sm">
                Most Arizona farmland has &lt;1% organic matter. Healthy soil should be 3-5%.
                That's a 40,000-80,000 gallon difference per acre.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              On a 100-acre farm, increasing organic matter from 1% to 3% means storing an additional
              <strong> 4 million gallons</strong> of water in your soil.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Arizona's Groundwater Crisis by the Numbers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The AG Mayes lawsuit against industrial farms revealed alarming data:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>600+ foot drop</strong> in groundwater levels in La Paz and Pinal counties since 1980
              </li>
              <li>
                <strong>40% of Arizona's agricultural water</strong> comes from groundwater (not surface water)
              </li>
              <li>
                <strong>Saudi-owned farms</strong> pumped millions of gallons to grow alfalfa for export—depleting aquifers
              </li>
              <li>
                <strong>$11M settlement</strong> to restrict foreign ag operations in critical groundwater areas
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The pattern: Extract groundwater → Grow crops in dead soil → Water runs through without retention →
              Pump more water. It's a death spiral.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">How Organic Matter Holds Water</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Organic matter improves water retention through three mechanisms:
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">1. Direct Absorption</h3>
                <p className="text-gray-700">
                  Organic matter is hygroscopic—it physically absorbs and holds water like a sponge.
                  Humus (stable organic matter) can hold 90% of its weight in water.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">2. Soil Structure</h3>
                <p className="text-gray-700">
                  Fungal networks and organic matter create soil aggregates—small clumps that create pore spaces.
                  These pores trap and slowly release water to plant roots.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">3. Microbial Activity</h3>
                <p className="text-gray-700">
                  Living soil produces sticky substances (glomalin, polysaccharides) that bind soil particles together
                  and increase water-holding capacity.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-green-900 mb-4">What Happens When Soil Dies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Without organic matter, soil structure collapses. Here's the cascade:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Water runs off the surface</strong> instead of infiltrating
              </li>
              <li>
                <strong>Irrigation water drains straight through</strong> to groundwater without being stored
              </li>
              <li>
                <strong>Plants experience constant drought stress</strong> even with frequent watering
              </li>
              <li>
                <strong>More irrigation is applied</strong> to compensate, depleting aquifers faster
              </li>
              <li>
                <strong>Erosion increases</strong> because loose soil washes away
              </li>
              <li>
                <strong>Salt accumulation</strong> from poor drainage makes land unusable
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed font-semibold">
              This is happening right now across Arizona farmland.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The Solution: Rebuild Soil Organic Matter</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can't fix Arizona's water crisis at the state level. But you can fix it on your farm:
            </p>
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Step 1: Baseline Testing</h3>
                <p className="text-gray-700 mb-2">
                  Get a soil test that measures organic matter percentage. Most Arizona farms are 0.5-1%.
                  Your goal: 3-5%.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Step 2: Compost Application</h3>
                <p className="text-gray-700 mb-2">
                  Apply 1-2 inches of quality compost per acre annually. This adds 5-10 tons of organic matter
                  directly into the soil.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Step 3: Cover Cropping</h3>
                <p className="text-gray-700 mb-2">
                  Plant cover crops during off-season. Roots add organic matter deep in the soil profile and prevent erosion.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Step 4: Reduce Tillage</h3>
                <p className="text-gray-700 mb-2">
                  Every tillage pass destroys soil structure and burns organic matter. Reduce tilling to preserve what you build.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Real Results: Water Savings</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Growers who rebuild soil organic matter report:
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">30-50%</div>
                <div className="text-sm text-gray-600">Reduction in irrigation needs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">20,000+</div>
                <div className="text-sm text-gray-600">Gallons saved per acre per 1% OM increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2-4x</div>
                <div className="text-sm text-gray-600">Longer intervals between waterings</div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-green-600 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Download: Water Retention Protocol</h2>
              <p className="mb-6">
                Get our Arizona-specific guide to rebuilding soil organic matter for maximum water retention.
                Includes compost application rates, cover crop recommendations, and irrigation adjustments.
              </p>
              <a
                href="https://soilseedandwater.com/protocols"
                className="inline-block bg-white text-green-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Download Free Protocol
              </a>
            </div>
          </section>

          <footer className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Questions about improving water retention on your farm?
              <a href="mailto:ralvarez@soilseedandwater.com" className="text-green-600 hover:underline ml-1">
                Contact Soil Seed & Water
              </a> for a consultation.
            </p>
          </footer>
        </div>
      </article>
    </main>
  )
}
