import Link from 'next/link'

export default function CompostMath() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-green-600 hover:text-green-700 mb-8 inline-block">
          &larr; Back to all topics
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            One Inch of Compost. 20,000 Gallons of Water Saved. The Math.
          </h1>
          <p className="text-xl text-gray-600">
            The numbers behind compost that change everything for Arizona growers.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">National Compost Awareness Week</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              May 4-10 is National Compost Awareness Week—a time to highlight the science behind why compost works.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This isn't about feel-good sustainability. It's about hard numbers that directly impact your bottom line.
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
              <p className="text-lg font-semibold text-green-900 mb-2">The Core Formula</p>
              <p className="text-green-800 text-2xl font-bold mb-4">
                1 inch compost = 5-10% organic matter increase = 20,000 gallons water retention per acre
              </p>
              <p className="text-green-800 text-sm">
                This is the math the USDA uses to justify $700M in regenerative agriculture funding.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Breaking Down the Numbers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Let's walk through the calculation step by step:
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Step 1: Compost Volume</h3>
                <p className="text-gray-700 mb-2">
                  1 inch of compost across 1 acre = approximately 135 cubic yards
                </p>
                <p className="text-gray-700 text-sm">
                  Math: 1 acre = 43,560 sq ft. At 1 inch depth = 3,630 cubic feet = 135 cubic yards
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Step 2: Organic Matter Increase</h3>
                <p className="text-gray-700 mb-2">
                  135 cubic yards of compost increases soil organic matter by 5-10%
                </p>
                <p className="text-gray-700 text-sm">
                  This assumes incorporation into the top 6 inches of soil (the active root zone)
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Step 3: Water Holding Capacity</h3>
                <p className="text-gray-700 mb-2">
                  Each 1% increase in organic matter = 20,000 gallons more water retention per acre
                </p>
                <p className="text-gray-700 text-sm">
                  This is a conservative estimate based on USDA soil science research
                </p>
              </div>
              <div className="bg-green-600 text-white p-6 rounded-lg">
                <h3 className="font-bold mb-2">Total Result</h3>
                <p className="text-lg mb-2">
                  1 inch of compost per acre = 100,000 - 200,000 gallons additional water storage
                </p>
                <p className="text-sm">
                  That's enough to reduce irrigation needs by 30-50% in most Arizona crops
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The ROI Calculation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here's what this means in dollar terms for a typical Arizona operation:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 my-8">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Item</th>
                    <th className="border border-gray-300 p-3 text-right">100-Acre Farm</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Compost cost (1 inch/acre)</td>
                    <td className="border border-gray-300 p-3 text-right">$30,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Annual water cost savings (40%)</td>
                    <td className="border border-gray-300 p-3 text-right font-bold text-green-600">$20,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Fertilizer reduction (30%)</td>
                    <td className="border border-gray-300 p-3 text-right font-bold text-green-600">$9,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Yield increase (15%)</td>
                    <td className="border border-gray-300 p-3 text-right font-bold text-green-600">$25,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 p-3 font-bold">Total Year 1 Return</td>
                    <td className="border border-gray-300 p-3 text-right font-bold text-green-600 text-lg">$54,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-bold">ROI (Year 1)</td>
                    <td className="border border-gray-300 p-3 text-right font-bold text-green-600 text-lg">180%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 text-sm italic">
              Note: Numbers based on average Arizona vegetable/row crop operations. Results vary by crop, soil type, and management.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Why the Math Works: The Science</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The 20,000 gallons per 1% organic matter rule is based on soil physics:
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">Organic Matter is Hygroscopic</h3>
                <p className="text-gray-700">
                  Humus (stabilized organic matter) can hold up to 90% of its weight in water. It acts like a sponge,
                  absorbing and slowly releasing moisture to plant roots.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">Improved Soil Structure</h3>
                <p className="text-gray-700">
                  Organic matter binds soil particles into aggregates, creating pore spaces that trap and hold water.
                  Sandy Arizona soils without organic matter drain like a sieve.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">Biological Water Management</h3>
                <p className="text-gray-700">
                  Soil microbes produce sticky compounds (glomalin, polysaccharides) that further improve water retention
                  and prevent erosion.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Compost vs. Synthetic Inputs: Side-by-Side Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 my-8">
                <thead className="bg-gray-700 text-white">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Factor</th>
                    <th className="border border-gray-300 p-3">Synthetic Fertilizer</th>
                    <th className="border border-gray-300 p-3">Compost</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Nutrient availability</td>
                    <td className="border border-gray-300 p-3 text-center">Immediate (but temporary)</td>
                    <td className="border border-gray-300 p-3 text-center bg-green-50">Slow-release (3-6 months)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Soil biology impact</td>
                    <td className="border border-gray-300 p-3 text-center bg-red-50">Kills microbes</td>
                    <td className="border border-gray-300 p-3 text-center bg-green-50">Builds microbes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Water retention</td>
                    <td className="border border-gray-300 p-3 text-center">No improvement</td>
                    <td className="border border-gray-300 p-3 text-center bg-green-50">+20,000 gal/acre per 1% OM</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Soil structure</td>
                    <td className="border border-gray-300 p-3 text-center bg-red-50">Degrades over time</td>
                    <td className="border border-gray-300 p-3 text-center bg-green-50">Improves aggregation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Carbon sequestration</td>
                    <td className="border border-gray-300 p-3 text-center bg-red-50">Releases CO2</td>
                    <td className="border border-gray-300 p-3 text-center bg-green-50">Stores carbon for decades</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Long-term cost</td>
                    <td className="border border-gray-300 p-3 text-center bg-red-50">Increases annually</td>
                    <td className="border border-gray-300 p-3 text-center bg-green-50">Decreases as biology builds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10 bg-yellow-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-yellow-900 mb-4">The Hidden Benefit: Fertilizer Efficiency</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here's the number most people miss:
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold mb-4">
              Compost doesn't replace fertilizer in year 1. It makes your existing fertilizer 2-3x more effective.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Remember the 60% fertilizer loss problem? That's because soil microbes aren't there to convert nutrients
              into plant-available forms. Compost rebuilds that microbial population.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Result: You can reduce fertilizer inputs by 20-30% in year 1 and still see yield increases. By year 3,
              fertilizer costs drop 50%+ as biological systems fully establish.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Application Timing for Maximum Impact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you apply compost matters as much as how much you apply:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="font-bold text-green-900 mb-2">Best: Pre-Season Application</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Apply 2-4 weeks before planting
                </p>
                <p className="text-gray-700 text-sm">
                  Gives microbes time to establish and begin nutrient cycling before crop needs peak
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-blue-900 mb-2">Good: Fall/Winter Application</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Apply during off-season
                </p>
                <p className="text-gray-700 text-sm">
                  Allows organic matter to stabilize and integrate before spring planting
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">Okay: Mid-Season Top-Dress</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Apply around established plants
                </p>
                <p className="text-gray-700 text-sm">
                  Provides slow-release nutrients but won't improve water retention until next season
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="font-bold text-red-900 mb-2">Avoid: Peak Summer Heat</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Don't apply during 110°F+ weather
                </p>
                <p className="text-gray-700 text-sm">
                  Extreme heat kills beneficial microbes before they can establish
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Calculate Your Savings</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-bold text-green-900 mb-4 text-xl">Quick ROI Calculator</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your farm size (acres):</label>
                    <p className="text-gray-700 text-sm">Example: 100 acres</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Current annual water cost:</label>
                    <p className="text-gray-700 text-sm">Example: $50,000</p>
                  </div>
                </div>
                <div className="border-t border-gray-300 pt-4 mt-4">
                  <p className="text-gray-700 mb-2"><strong>Estimated savings with 1 inch compost application:</strong></p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                    <li>Water cost reduction (40%): <strong className="text-green-600">$20,000/year</strong></li>
                    <li>Fertilizer reduction (30%): <strong className="text-green-600">$9,000/year</strong></li>
                    <li>Yield increase (15%): <strong className="text-green-600">$25,000/year</strong></li>
                    <li>Total annual benefit: <strong className="text-green-600 text-lg">$54,000</strong></li>
                  </ul>
                  <p className="text-gray-700 mt-4 text-sm">
                    Compost cost: $30,000 (one-time) | Year 1 ROI: <strong className="text-green-600">180%</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-green-600 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Download: Compost Application Protocol</h2>
              <p className="mb-6">
                Get our step-by-step guide to compost application for Arizona farms, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Exact application rates by crop type</li>
                <li>Timing recommendations for Arizona's growing seasons</li>
                <li>Water savings calculations for your operation</li>
                <li>ROI projections and cost-benefit analysis</li>
              </ul>
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
              Need help sourcing quality compost for your operation?
              <a href="mailto:ralvarez@soilseedandwater.com" className="text-green-600 hover:underline ml-1">
                Contact Soil Seed & Water
              </a> for Arizona-produced biological soil amendments and application consulting.
            </p>
          </footer>
        </div>
      </article>
    </main>
  )
}
