import TextReveal from "../animation/textReveal"
import NavLink from "./links"

export default function Footer() {

    const d = new Date()
    const timeString = d.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit"
    })
    const status = (timeString >= "8:30 am" && timeString <= "5:00 pm") ? "Open" : "Close";

    return (
        <footer className="w-full min-h-screen flex flex-col bg-white">
            <div className="flex justify-between items-center p-5 border-b border-muted-light">
                <div className="flex flex-col">
                    <TextReveal>
                        <h4 className="font-oswald text-8xl uppercase">built with</h4>
                    </TextReveal>
                    <TextReveal>
                        <h4 className="font-oswald text-8xl uppercase">intention</h4>
                    </TextReveal>
                </div>
                <div className="flex flex-col items-end">
                    <TextReveal>
                        <h4 className="font-oswald text-8xl uppercase">designed</h4>
                    </TextReveal>
                    <TextReveal>
                        <h4 className="font-oswald text-8xl uppercase">for impact</h4>
                    </TextReveal>
                </div>
            </div>
            <div className="w-full flex flex-col justify-evenly">
                <div className="flex justify-between py-6 px-10">
                    <ul className="ml-5 flex flex-col gap-2.5 text-4xl uppercase font-main font-bold tracking-widest">
                        <NavLink id="links" label="home" href="/" />
                        <NavLink id="links" label="works" href="/works" />
                        <NavLink id="links" label="studio" href="/studio" />
                        <NavLink id="links" label="contact" href="/contact" />
                    </ul>
                    <p className="text-sm">
                        [ INFO ]<br/>
                        27 Axis Street, Maidenpool 1357<br/>
                        studio@naverabithuka.example<br/>
                        +00 (01) 5550 1234<br/>
                        Monday to Friday, 8:30 am - 5:00 pm
                    </p>
                </div>
                <h4 className="mb-5 text-8xl text-center font-bold tracking-widest font-main uppercase">nevara bithuka</h4>
                <div className="flex justify-between items-center px-10 py-5">
                    <p>© 2026 NAVERA BITHUKA · {timeString} · { status }</p>
                    <p className="">
                        Developed By <a href="https://thureinphyoko.com/" target="_blank" rel="noopener noreferrer" className="underline">Thu Rein Phyo Ko / Ryan</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}