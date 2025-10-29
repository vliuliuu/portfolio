//import hoverable resume component
//import spotify component
import Resume from './components/resume/Resume'
import localFont from "next/font/local"

const mochiFont = localFont({
  src: './fonts/Mochibop-Demo.ttf', 
  variable: '--font-mochi',
});

const djournalFont = localFont({
  src: './fonts/djournal.regular.ttf',
});

export default function Home() {
  return (
    <div>
      <main className="flex flex-col mt-40 h-screen">
        <h1 className="text-6xl text-center">
        <span className={`${mochiFont.className}`}>hi!</span>
        <div className="h-10"></div>
        <span className={`${djournalFont.className}`}>I'm Valentina</span>
        </h1>
        <h2 className="text-2xl mt-20 text-center">i'm a ____ @ _____</h2>
      </main>
      {/* resume section */}
      <section className="min-h-screen">
      {/* have component be here */}
      <Resume/>
      </section>
      {/* spotify widg section */}
      <footer className="min-h-screen"></footer>
      </div>
  );
}
