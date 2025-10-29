//import hoverable resume component
//import spotify component
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./components/shadcn-ui/menubar"

import Link from "next/link" //for the gh, linkedin links

import Resume from './components/resume/Resume'
import localFont from "next/font/local"

const mochiFont = localFont({
  src: './fonts/Mochibop-Demo.ttf', 
  variable: '--font-mochi',
});

const djournalFont = localFont({
  src: './fonts/djournal.regular.ttf',
});

//intro, more personalized resume, projects, + spotify widget @ bottom
//hidden widgets (once u click on all the lil guys, u unlock the switch in the header!)

export default function Home() {
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <main className="flex flex-col mt-40 mb-50 h-1/2">
        <h1 className="text-6xl text-center">
        <span className={`${mochiFont.className}`}>hi!</span>
        <div className="h-10"></div>
        <span className={`${djournalFont.className}`}>I'm Valentina</span>
        </h1>
        <h2 className="text-2xl mt-20 text-center">i'm a ____ @ _____</h2>
      </main>
      {/* resume section */}
      <section className="min-h-1/2">
      {/* have component be here */}
      <Resume/>
      </section>
      {/* spotify widg section */}
      <footer className="min-h-1/2"></footer>
      </div>
  );
}
