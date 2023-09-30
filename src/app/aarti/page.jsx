/** @format */
"use client";
import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Link from "next/link";
import ArtiCard from "@/components/Arti/ArtiCard";

export default function Arti() {
  let arti = [
    {
      title: "श्रीदेवी जी की आरती",
      description: [
        "जगजननी जय ! जय ! माँ ! जगजननी जय ! जय !",
        "भयहारिणि, भवतारिणि, भवभामिनि जय ! जय !! जगo",
        "तू ही सत-चित-सुखमय शुद्ध ब्रह्मरुपा ।",
        "सत्य सनातन सुन्दर पर-शिव सुर-भूपा ।।1।। जगo",
        "आदि अनादि अनामय अविचल अविनाशी ।",
        "अमल अनन्त अगोचर अज आनँदराशी ।।2।। जगo",
        "अविकारी, अघहारी, अकल, कलाधारी ।",
        "कर्त्ता विधि, भर्त्ता हरि, हर सँहारकारी ।।3।। जगo",
        "तू विधिवधु, रमा, तू उमा, महामाया ।",
        "मूल प्रकृति विद्या तू, तू जननी, जाया ।।4।। जगo",
        "राम, कृष्ण तू, सीता, व्रजरानी राधा ।",
        "तू वाण्छाकल्पद्रुम, हारिणि सब बाधा ।।5।। जगo",
        "दश विद्या, नव दुर्गा, नानाशस्त्रकरा ।",
        "अष्टमातृका, योगिनि, नव नव रूप धरा ।।6।। जगo",
        "तू परधामनिवासिनि, महाविलासिनि तू ।",
        "तू ही श्मशानविहारिणि, ताण्डवलासिनि तू ।।7।। जगo",
        "सुर-मुनि-मोहिनि सौम्या तू शोभाssधारा ।",
        "विवसन विकट-सरुपा, प्रलयमयी धारा ।।8।। जगo",
        "तू ही स्नेह-सुधामयि, तू अति गरलमना ।",
        "रत्नविभूषित तू ही, तू ही अस्थि-तना ।।9।। जगo",
        "मूलाधारनिवासिनि, इह-पर-सिद्धिप्रदे ।",
        "कालातीता काली, कमला तू वरदे ।।10।। जगo",
        "शक्ति शक्तिधर तू ही नित्य अभेदमयी ।",
        "भेदप्रदर्शिनि वाणी विमले ! वेदत्रयी ।।11।। जगo",
        "हम अति दीन दुखी मा ! विपत-जाल घेरे ।",
        "हैं कपूत अति कपटी, पर बालक तेरे ।।12।। जगo",
        "निज स्वभाववश जननी ! दयादृष्टि कीजै ।",
        "करुणा कर करुणामयि ! चरण-शरण दीजै ।।13।। जगo",
      ],
    },
    {
      title: "माँ भगवती आरती",
      description: [
        "जय अम्बे गौरी, माँ जय श्यामा गौरी ।",
        "तुमको निशदिन ध्यावत हरि ब्रह्मा शिवरी ॥ जय अम्बे...",
        "मांग सिन्दुर विराजत टीको मृगद को ।",
        "उज्जवल से दोउ नैना, चन्द्रवदन नीको ॥ जय अम्बे...",
        "कनक समान कलेवर रक्ताम्बर राजै ।",
        "रक्त-पुष्प गल माल, कण्ठन पर साजै ॥ जय अम्बे...",
        "केहरि वाहन राजत, खड्ग खपर धारी ।",
        "सुर-नर-मुनि-जन सेवत, तिनके दुःखहारी ॥ जय अम्बे...",
        "कानन कुण्डल शोभित, नासाग्रे मोती ।",
        "कोटिक चन्द्र दिवाकर सम राजत ज्योति ॥ जय अम्बे...",
        "शुम्भ निशुम्भ विदारे महिषासुर-घाती ।",
        "धुम्रविलोचन नैना निशिदिन मतमाती ॥ जय अम्बे...",
        "चण्ड मुण्ड संहारे शोणितबीज हरे ।",
        "मधु कैटभ दोउ मारे सुर भयहीन करे ॥ जय अम्बे...",
        "बह्माणी, रुदाणी तुम कमलारानी ।",
        "आगम-निगम-बखानी, तुम शिव पटरानी ॥ जय अम्बे...",
        "चौंसठ योगिनि गावत, नृत्व करत भैरुँ ।",
        "बाजत ताल मृदंगा औ बातज डमरु ॥ जय अम्बे...",
        "तुम ही जग की माता, तुम ही हो भरता ।",
        "भक्तन कि दुख हरता सुख सम्पति करता ॥ जय अम्बे...",
        "भुजा चार अति शोभित, वर-मुद्रा धारी ।",
        "मनवांछित फल पावत, सेवत नर-नारी ।। जय अम्बे...",
        "कंचन थाल विराजत, अगरू कपूर बाती ।",
        "मालकेतु में राजत, कोटिरतन ज्योति ।। जय अम्बे...",
        "मां अम्बे जी की आरती जो कोई नर गावै ।",
        "कहत शिवानन्द स्वामी, सुख सम्पति पावे || जय अम्बे...",
      ],
    },
    {
      title: "आरती",
      description: [
        "माँ दुर्गे दुर्गतिनाशिनी हम अनपढ़ निपट, अनारी छि ।",
        "कृपा भीखहित द्वारा अहाँ के, आयल एक भिखारी छि |",
        "परम अबोध विषम पुनिपापि हम अत्यंत अधिकामी छि ।",
        "कहब कतेक अपन अपगुण पुनि नामि बनल कुगामि छि ||",
        "किंतु पुत्र थिकहुं अहां के केहनो अत्याचारी छि ।",
        "माँ दुर्गे दुर्गतिनाशिनी हम अनपढ़ निपट अनारी छि ।",
        "अहाँ सनक करूणामयी मैया कतहुँ दृष्टि नहि अबईत अछि ।",
        "हो कुपुत्र माता न कुमाता वेद,संतगुण गबईत अछि ।",
        "एहि आशा बल से निर्भय हम, यद्यपि दुर्व्यवहारी छि । माँ दुर्गे....",
        "हो यदि बौक बकलेलो बेटा माता रखथिन्ह कोरे में ।",
        "माय-बाप-बेटा कै नाता बान्हल प्रेमक डोरी में ||",
        "कृपा करू माँ अहिक, जाल में फसल सरस संसारी छि | माँ दुर्गे....",
        "महादिन की लडहम पूजय सब साधन सँ छि मारल ।",
        "खाली हाथे मुक बनल माँ सकल ठाम सँ छि हारल ।",
        "मधूकर पद पदमक परिमल कँ प्यासल एक पुजारी छि । माँ दुर्गे...",
      ],
    },
    {
      title: "माँ भगवतीक आरती",
      description: [
        "जय शिव प्रिये शंकर प्रिये, जय मंगले मंगल करू ।",
        "जय अम्बिके जय त्रयमिके, जय चंडिके मंगल करू ।।",
        "अनंत शक्तिशालीनी, अमोघ शस्त्र धारिणी ।",
        "निशुम्भ शुम्भ मर्दिनी, त्रिशुल चक्र पादणि ॥",
        "जय भद्रकाली भैरवी, जय भगवती मंगल करू ।।",
        "कराले मुख कपालिनी, विशाल मुण्डमालिनी ।",
        "असमी अट्टहासिनी, त्रिमुर्ति, श्रष्टि कारिणी ।।",
        "हे ईश्वरी: पस्मेश्वरी, सर्वेश्वरी मंगल करू ।",
        "कव्यायिनी, नारायिणी, महेश्वरी मंगल करू ।",
        "प्रकृति अहीं सुकृति अहीं, दया अहीं प्रभा अहीं ।",
        "श्वधा अहीं, छटा अहीं, कला अहीं प्रभा अहीं ।",
        "दुख हारिणी सुखकारिणी, हे पार्वती मंगलकरू ।",
        "हे ललित शक्ति प्रदायिनी, सिद्धेश्वरी मंगलकरू ।",
      ],
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-2 py-7 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-red-700 sm:text-4xl lg:text-5xl text-center">
            !! श्री दुर्गा देव्यै नमः !!
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-red-600 lg:mx-auto font-semibold text-center">
            नवरात्र का पावन त्योहार शुरू हो गया है। कहते हैं कि कोई भी पूजा तब
            तक पूरी नहीं मानी जाती है जब तक आरती न की जाए। इसलिए नवरात्र में भी
            श्री देवी जी की पूजा करने के बाद आरती करने का विधान है।
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {arti.map((ele, i) => (
            <ArtiCard key={i} {...ele} />
          ))}
        </div>
        {/* <p className="textbase mt-6 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{" "}
          <Link
            href="/contact"
            className="font-semibold text-black hover:underline"
          >
            Contact our support
          </Link>
        </p> */}
      </div>
    </section>
  );
}
