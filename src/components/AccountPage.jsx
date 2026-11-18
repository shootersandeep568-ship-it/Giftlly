import { useState } from "react";
import { ArrowLeft, Check, UserRound } from "lucide-react";

const readProfile = () => {
  try { return JSON.parse(window.localStorage.getItem("gifty-profile") || "{}"); }
  catch { return {}; }
};

const AccountPage = ({ onContinueShopping, onOpenAdmin }) => {
  const [profile, setProfile] = useState(readProfile);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    window.localStorage.setItem("gifty-profile", JSON.stringify(profile));
    setSaved(true);
  };

  const updateField = (field, value) => {
    setProfile((previous) => ({ ...previous, [field]: value }));
    setSaved(false);
  };

  return (
    <section className="min-h-[70vh] bg-[linear-gradient(135deg,#fffafb,#fbf2f2)] px-5 py-12 text-[#3a1220] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[.25em] text-[#a63a5f]"><UserRound size={16}/> Your details</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Your account</h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#7a4a5a]">Save your contact details for a more personal gifting experience on this device.</p>
        <div className="mt-9 grid overflow-hidden border border-[#c2547a]/20 bg-white/80 shadow-[0_20px_55px_rgba(166,58,95,.08)] md:grid-cols-[.8fr_1.2fr]">
          <div className="flex flex-col justify-center bg-[#3a1825] p-7 text-white sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b28e]/45 text-[#d6b28e]"><UserRound size={21}/></span>
            <h2 className="mt-6 font-serif text-3xl">A little more personal.</h2>
            <p className="mt-3 text-sm leading-7 text-white/65">Keep the details you use for gifting handy. Your information stays saved in this browser.</p>
          </div>
          <form onSubmit={handleSubmit} className="p-6 sm:p-10">
            <label className="block text-xs font-medium uppercase tracking-[.15em] text-[#7a4a5a]">Your name<input required value={profile.name || ""} onChange={(event) => updateField("name", event.target.value)} placeholder="Enter your name" className="mt-2 block w-full border border-[#c2547a]/25 bg-white px-4 py-3 text-sm normal-case tracking-normal text-[#3a1220] outline-none transition focus:border-[#a63a5f]"/></label>
            <label className="mt-5 block text-xs font-medium uppercase tracking-[.15em] text-[#7a4a5a]">Email address<input required type="email" value={profile.email || ""} onChange={(event) => updateField("email", event.target.value)} placeholder="you@example.com" className="mt-2 block w-full border border-[#c2547a]/25 bg-white px-4 py-3 text-sm normal-case tracking-normal text-[#3a1220] outline-none transition focus:border-[#a63a5f]"/></label>
            <label className="mt-5 block text-xs font-medium uppercase tracking-[.15em] text-[#7a4a5a]">Phone number <span className="font-normal normal-case tracking-normal text-[#a88b94]">(optional)</span><input type="tel" value={profile.phone || ""} onChange={(event) => updateField("phone", event.target.value)} placeholder="Enter your phone number" className="mt-2 block w-full border border-[#c2547a]/25 bg-white px-4 py-3 text-sm normal-case tracking-normal text-[#3a1220] outline-none transition focus:border-[#a63a5f]"/></label>
            <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-[#a63a5f] px-6 py-3.5 text-xs font-semibold uppercase tracking-[.16em] text-white transition hover:bg-[#8f2a4b]">{saved ? <><Check size={16}/> Details saved</> : "Save my details"}</button>
            {saved && <p role="status" className="mt-3 text-center text-xs text-[#8d5266]">Your profile details are saved in this browser.</p>}
          </form>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4"><button onClick={onContinueShopping} className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-[#7a4a5a] hover:text-[#a63a5f]"><ArrowLeft size={15}/> Back to gifts</button><button onClick={onOpenAdmin} className="border-b border-[#c2547a]/40 pb-1 text-[10px] font-medium uppercase tracking-[.16em] text-[#8b6873] hover:border-[#a63a5f] hover:text-[#a63a5f]">Open admin panel</button></div>
      </div>
    </section>
  );
};

export default AccountPage;
