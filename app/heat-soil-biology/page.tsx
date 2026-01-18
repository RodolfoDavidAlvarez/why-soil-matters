import Link from 'next/link'

export default function HeatSoilBiology() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-green-600 hover:text-green-700 mb-8 inline-block">
          &larr; Back to all topics
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            115°F and Your Soil is Dying. Unless...
          </h1>
          <p className="text-xl text-gray-600">
            Summer heat kills more than plants. Here's how to protect your soil biology.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The Arizona Summer Reality</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Phoenix regularly hits 115°F+ from June through August. In 2025, we saw <strong>53 days above 110°F</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Everyone knows this heat stresses plants. What most growers don't realize:
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold mb-4">
              At 115°F air temperature, soil surface temperatures can exceed 140°F. That's lethal for most beneficial microbes.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <p className="text-lg font-semibold text-red-900 mb-2">The Hidden Cost of Summer Heat</p>
              <p className="text-red-800">
                Every summer without soil protection, you lose months of biological buildup. The microbes you spent all spring
                establishing die in the heat. Next season, you start from zero.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">What Heat Does to Soil Biology</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soil microorganisms have temperature limits:
            </p>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-700 text-white">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Organism</th>
                    <th className="border border-gray-300 p-3">Optimal Temp</th>
                    <th className="border border-gray-300 p-3">Death Temp</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Beneficial bacteria</td>
                    <td className="border border-gray-300 p-3 text-center">70-95°F</td>
                    <td className="border border-gray-300 p-3 text-center bg-red-50">120-130°F</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Mycorrhizal fungi</td>
                    <td className="border border-gray-300 p-3 text-center">60-85°F</td>
                    <td className="border border-gray-300 p-3 text-center bg-red-50">110-120°F</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Protozoa</td>
                    <td className="border border-gray-300 p-3 text-center">65-90°F</td>
                    <td className="border border-gray-300 p-3 text-center bg-red-50">115-125°F</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Earthworms</td>
                    <td className="border border-gray-300 p-3 text-center">55-75°F</td>
                    <td className="border border-gray-300 p-3 text-center bg-red-50">95-105°F</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed">
              When soil surface temps hit 140°F, nearly all beneficial biology in the top 2 inches dies.
              That's your most biologically active soil layer—gone.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The Cycle That Kills Productivity</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here's what happens on most Arizona farms every summer:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Spring:</strong> You apply compost, inoculants, and build soil biology. Things are looking good.
              </li>
              <li>
                <strong>Early Summer (May-June):</strong> Microbial populations are thriving. Nutrient cycling is strong.
              </li>
              <li>
                <strong>Peak Summer (July-Aug):</strong> Unprotected soil hits 130-140°F. Microbes die. Earthworms flee or die.
              </li>
              <li>
                <strong>Fall:</strong> You replant, but the biological infrastructure is gone. Nutrients aren't cycling. Plants struggle.
              </li>
              <li>
                <strong>Repeat next year.</strong> You're on a biological treadmill—spending money to rebuild what heat destroys.
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The 3 Biological Protections</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soil biology can survive Arizona summers—but only with protection. Three strategies work:
            </p>
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="font-bold text-green-900 mb-2">1. Mulch: The Thermal Shield</h3>
                <p className="text-gray-700 mb-4">
                  4-6 inches of organic mulch can reduce soil surface temperature by 15-25°F.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                  <li><strong>Wood chips:</strong> Best for long-term heat protection, lasts 12-18 months</li>
                  <li><strong>Straw:</strong> Cheaper, good for annual crops, lasts 6-9 months</li>
                  <li><strong>Compost mulch:</strong> Dual function—cools soil AND feeds microbes</li>
                  <li><strong>Living mulch:</strong> Low-growing cover crops (clover, buckwheat) shade soil</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-blue-900 mb-2">2. Shade Structures: Physical Barriers</h3>
                <p className="text-gray-700 mb-4">
                  30-50% shade cloth can reduce temperatures by 10-15°F while still allowing photosynthesis.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                  <li><strong>Best for:</strong> High-value crops (tomatoes, peppers, greens)</li>
                  <li><strong>Installation:</strong> Permanent structures or seasonal shade cloth on hoops</li>
                  <li><strong>Bonus:</strong> Reduces plant heat stress, extends growing season</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">3. Water Retention: Cool from Within</h3>
                <p className="text-gray-700 mb-4">
                  Soil with high organic matter stays cooler because water has high heat capacity.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                  <li><strong>Moist soil = cooler soil:</strong> Dry soil heats 30-40% faster than moist soil</li>
                  <li><strong>Drip irrigation timing:</strong> Water early morning to cool soil before peak heat</li>
                  <li><strong>Organic matter:</strong> Holds moisture longer, providing continuous cooling effect</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The Science: Why Living Soil Stays Cooler</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This isn't just about protection—healthy soil is naturally more heat-resistant:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-green-900 mb-2">Living Soil</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                  <li>High organic matter = high water-holding capacity</li>
                  <li>Water cools soil through evaporation</li>
                  <li>Soil aggregates create air pockets (insulation)</li>
                  <li>Microbial activity produces moisture (biological cooling)</li>
                  <li>Result: <strong className="text-green-600">10-15°F cooler than dead soil</strong></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-900 mb-2">Dead Soil</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                  <li>Low organic matter = poor water retention</li>
                  <li>Compacted structure = no air insulation</li>
                  <li>Dry soil conducts heat rapidly to depth</li>
                  <li>No biological activity to moderate temperature</li>
                  <li>Result: <strong className="text-red-600">Surface temps exceed 140°F</strong></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Summer Application Strategy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              How to apply biological inputs during Arizona summers:
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">Timing is Everything</h3>
                <p className="text-gray-700">
                  <strong>Best time:</strong> Early morning (5-7 AM) before soil heats up. Microbes have 2-3 hours
                  to establish before lethal temps.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Never:</strong> Mid-day (11 AM - 4 PM) when soil surface is 130°F+. You're literally
                  sterilizing the biology you're trying to add.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">Immediate Protection</h3>
                <p className="text-gray-700">
                  Apply mulch immediately after biological inputs. Don't leave soil exposed even for a day.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-green-900 mb-2">Water In</h3>
                <p className="text-gray-700">
                  Light irrigation after application moves microbes below the lethal heat zone. They establish
                  in cooler soil layers (4-8 inches deep) and migrate up as conditions moderate.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">The ROI of Summer Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Protecting soil biology through summer isn't an expense—it's compound interest on your soil investment:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 my-8">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Scenario</th>
                    <th className="border border-gray-300 p-3">Year 1</th>
                    <th className="border border-gray-300 p-3">Year 2</th>
                    <th className="border border-gray-300 p-3">Year 3</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 p-3 font-semibold">No summer protection</td>
                    <td className="border border-gray-300 p-3 text-center">Start from zero</td>
                    <td className="border border-gray-300 p-3 text-center">Start from zero</td>
                    <td className="border border-gray-300 p-3 text-center">Start from zero</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 p-3 font-semibold">With mulch + protection</td>
                    <td className="border border-gray-300 p-3 text-center">Build biology</td>
                    <td className="border border-gray-300 p-3 text-center">Biology 2x stronger</td>
                    <td className="border border-gray-300 p-3 text-center">Biology 4x stronger</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed">
              By year 3, farms with year-round soil protection have <strong>4x the microbial biomass</strong> of farms
              that let summer heat reset their biology. That translates to 40-50% lower input costs and 15-20% higher yields.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Real Results: Summer Soil Protection</h2>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="text-center bg-green-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">15-25°F</div>
                <div className="text-sm text-gray-600">Temperature reduction with 4-6" mulch</div>
              </div>
              <div className="text-center bg-green-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">80%+</div>
                <div className="text-sm text-gray-600">Microbe survival rate with protection</div>
              </div>
              <div className="text-center bg-green-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">30-40%</div>
                <div className="text-sm text-gray-600">Reduction in irrigation needs (cooler soil = less evaporation)</div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-green-900 mb-4">June Preparation Checklist</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Don't wait until July to protect your soil. Prepare in June before peak heat:
            </p>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">☐</span>
                  <span className="text-gray-700">Order mulch materials (wood chips, straw, or compost) - 4-6" depth needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">☐</span>
                  <span className="text-gray-700">Test irrigation system - ensure even coverage for cooling moisture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">☐</span>
                  <span className="text-gray-700">Install shade structures for high-value crops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">☐</span>
                  <span className="text-gray-700">Apply compost + microbial inoculants in early morning (before heat)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">☐</span>
                  <span className="text-gray-700">Mulch immediately after biological application</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">☐</span>
                  <span className="text-gray-700">Set irrigation timers for early morning (5-7 AM) to cool soil before peak heat</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-green-600 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Download: Summer Soil Protection Protocol</h2>
              <p className="mb-6">
                Get our Arizona-specific guide to protecting soil biology through extreme summer heat, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Mulch type selection and application rates</li>
                <li>Shade structure design and installation</li>
                <li>Summer irrigation timing and frequency</li>
                <li>Early warning signs of biological die-off</li>
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
              Need help sourcing summer soil protection materials?
              <a href="mailto:ralvarez@soilseedandwater.com" className="text-green-600 hover:underline ml-1">
                Contact Soil Seed & Water
              </a> for mulch, shade solutions, and heat-tolerant biological inputs.
            </p>
          </footer>
        </div>
      </article>
    </main>
  )
}
