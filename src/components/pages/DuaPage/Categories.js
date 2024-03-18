"use client";

import categoryItemImage from "@/assets/fever-man.png";
import Box from "@/components/regular/Carts/Box";
import { magnifyGlassIcon } from "@/components/utils/icon-svg";
import Image from "next/image";
import { useState } from "react";

export default function Categories() {
  // Dua categories items
  const [categories, setCategories] = useState([
    {
      title: "introduction to dua",
      subcategory: [
        {
          id: "d1",
          title: "The servant is dependent on his Lord #1",
          dua: "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
          reference: "Surah Al-Fatir 35:15",
        },
        {
          id: "d2",
          title: "Conditions for Dua to be successful",
          dua: "Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): “And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.",
          arabic:
            "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
          transliteration: `Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu`,
          Translation: `There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.`,
          audio: true,
          reference: "Bukhari: 844",
        },
      ],
    },
  ]);

  return (
    <Box className="!p-0 max-w-[400px]">
      <h2 className="py-[18px] text-center bg-primary rounded-t-[10px] text-white text-lg">
        Categories
      </h2>

      {/* search categories input */}
      <div className="px-4">
        <SearchCategories />
      </div>

      {/* show items */}
      <div className="p-4 pt-0 flex items-center justify-center flex-col">
        <CategoriesItem />
        <CategoriesItem />
      </div>
    </Box>
  );
}

// categories items
function CategoriesItem({}) {
  return (
    <button className="w-full p-3 flex items-center justify-between gap-7 hover:bg-secondary rounded-[10px] divide-x-2">
      <div className="w-full flex items-center justify-start gap-5 text-left">
        <figure className="w-[60px] h-[60px] rounded-[10px] bg-semiGray p-2.5">
          <Image src={categoryItemImage} alt="category item" />
        </figure>
        <div>
          <h3 className={`text-primary text-lg font-semibold`}>
            Introduction to Dua
          </h3>
          <p>Subcategory: {`11`} </p>
        </div>
      </div>

      <div className="pl-2.5">
        <h4 className="text-lg font-semibold">15</h4>
        <p>Duas</p>
      </div>
    </button>
  );
}

// Search Categories
function SearchCategories({}) {
  return (
    <div className="flex items-center justify-center p-1 rounded-[10px] border border-lightGray/5 my-4">
      <label
        htmlFor="searchInput"
        className="p-2.5 cursor-pointer rounded-[10px]"
      >
        {magnifyGlassIcon}
      </label>
      <input
        id="searchInput"
        className="text-lg focus:outline-none p-3"
        type="text"
        placeholder="Search by Categories"
      />
    </div>
  );
}
