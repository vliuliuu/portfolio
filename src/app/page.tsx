//import hoverable resume component
//import spotify component
import Resume from './components/resume/Resume'
import localFont from "next/font/local"
const djournalFont = localFont({
  src: './fonts/djournal.regular.ttf',
});

export default function Home() {
  return (
    <div>
      <main className="flex justify-center p-24 h-screen">
        <h1 className="text-6xl text-center">
        <span className="text-6xl">hi!</span>
        <div className="h-15"></div>
        <span className={`${djournalFont.className}`}>I'm Valentina</span>
        </h1>
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
