import Image from "next/image";
import { Menu, ShoppingBag, Search } from "lucide-react";

export default function Header() {
return (
<>
{/* Barre d'informations */}
<div className="bg-[#3F6663] text-white">
<div className="max-w-7xl mx-auto px-6 py-3 flex justify-center gap-8 text-sm font-medium flex-wrap">
<span>📍 Paris</span>
<span>📞 07 52 08 73 72</span>
<span>Lun - Sam : 10h - 18h45</span>
</div>
</div>

{/* Navigation */}
<header className="bg-white">
<div className="max-w-7xl mx-auto px-8 py-2 grid grid-cols-3 items-center">

<div className="flex items-center justify-start">
<button>
<Menu size={34} className="text-[#3F6663]" />
</button>
</div>

<div className="flex items-center justify-center">
<Image
src="/logo-header.png"
alt="Oh! My Louison Cakes"
width={100}
height={100}
priority
/>
</div>

<div className="flex items-center justify-end gap-5">
<Search className="text-[#3F6663]" size={28} />
<ShoppingBag className="text-[#3F6663]" size={28} />
</div>

</div>
</header>

</>
);
}