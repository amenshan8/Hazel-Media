/* ============================================================
   HAZEL MEDIA — central content configuration.
   Bilingual (nl/en). Facts from the existing archive.
   [PLACEHOLDER] / [AANVULLEN] fields are editable before launch.
   ============================================================ */

var ARCHIVE = "https://svjmedia.nl/annavandenhazel/wp-content/uploads/sites/1422";
var IMG = {
  anna: ARCHIVE + "/2026/06/CV-foto-34-790x1024.jpg",
  icp: ARCHIVE + "/2026/06/Ik-bij-Zondag-op-Vier.jpeg",
  insulin: ARCHIVE + "/2024/06/Linda-medijnen-klaar-2-e1718368455180.jpg",
  insulinDetail: ARCHIVE + "/2024/06/Linda-Before-klaar-4-edited.jpg",
  tbs: ARCHIVE + "/2024/04/Kliniek-scaled.jpg",
  tbsPortrait: ARCHIVE + "/2024/06/Foto-Priscilla-Oostvaarderskliniek.jpg",
  fashion: ARCHIVE + "/2026/06/20260512_124146-scaled-e1780834510884.jpg",
  fashionBts: ARCHIVE + "/2026/06/20260512_1250270-scaled.jpg",
  minor: ARCHIVE + "/2026/06/20250610-DSCF0382-1024x683.jpg",
  minorBts: ARCHIVE + "/2026/06/20250610-DSCF0397-1024x683.jpg",
  housing: ARCHIVE + "/2025/01/cid5104_1706012863576_De-woningmarkt-in-2024-meer-kansen-voor-kopers-en-verkopers_HEADER-scaled.jpg",
  gli: ARCHIVE + "/2024/06/Cover-scaled.jpg"
};

window.HM = {
  IMG: IMG,

  brand: {
    name: "Hazel Media",
    tagline: { nl: "Verhalen in Beeld", en: "Stories in Pictures" }
  },

  contact: {
    place: "Veenendaal",
    email: "contact@annavandenhazel.nl",
    phone: "0682253202",
    phoneDisplay: "06 8225 3202",
    instagram: "hazelmedia.nl",
    linkedin: "linkedin.com/in/anna-van-den-hazel-895403227"
  },

  /* navigation order (authoritative) */
  NAV: {
    nl: [
      ["index.html", "Home"],
      ["verhalen.html", "Verhalen"],
      ["diensten.html", "Diensten", "services"],
      ["fotowinkel.html", "Fotowinkel"],
      ["blog.html", "Blog"],
      ["over-hazel.html", "Over Hazel"]
    ],
    en: [
      ["index.html", "Home"],
      ["verhalen.html", "Stories"],
      ["diensten.html", "Services", "services"],
      ["fotowinkel.html", "Photo Shop"],
      ["blog.html", "Blog"],
      ["over-hazel.html", "About Hazel"]
    ]
  },
  CTA: { nl: ["werk-met-mij.html", "Werk met mij"], en: ["werk-met-mij.html", "Work With Me"] },

  services: [
    {
      id: "redacteur", num: "01", slug: "diensten/redacteur.html",
      title: { nl: "Redacteur", en: "Editor" },
      role: { nl: "Van idee naar helder verhaal", en: "From idea to a clear story" },
      img: IMG.insulin,
      desc: { nl: "Verhaalontwikkeling, research en (eind)redactie die een onderwerp scherp en waarachtig maken.", en: "Story development, research and final editing that make a subject sharp and truthful." },
      intro: { nl: "Een verhaal begint lang voor het eerste beeld: bij een open vraag, nieuwsgierigheid en een heldere redactionele lijn.", en: "A story begins long before the first image: with an open question, curiosity and a clear editorial line." },
      body: { nl: "[PLACEHOLDER: taken, werkwijze en voor wie dit is — en hoe het in de praktijk werkt.]", en: "[PLACEHOLDER: tasks, working methods and who it is for — and how it works in practice.]" },
      for: { nl: "Redacties, makers en organisaties die een idee laten rijpen tot een publiceerbaar verhaal.", en: "Newsrooms, makers and organisations that want an idea to ripen into a publishable story." },
      deliver: { nl: "Een redactioneel plan, researchopzet en/of eindredactie afgestemd op het medium.", en: "An editorial plan, research setup and/or final editing tuned to the medium." }
    },
    {
      id: "producer", num: "02", slug: "diensten/producer.html",
      title: { nl: "Producer", en: "Producer" },
      role: { nl: "Grip op de productie", en: "Handling on production" },
      img: IMG.icp,
      desc: { nl: "Planning, voorbereiding, gastenbenadering en rust op de draaidag, zodat het verhaal de ruimte krijgt.", en: "Planning, preparation, guest outreach and calm on the shoot, so the story has room to breathe." },
      intro: { nl: "Een productie draait op overzicht: wie, wanneer, waar en waarvoor — zonder dat de spanning verloren gaat.", en: "Production runs on overview: who, when, where and why — without losing the tension of the story." },
      body: { nl: "[PLACEHOLDER: taken, planning, gasten en de draaidag waarop een productie samenkomt.]", en: "[PLACEHOLDER: tasks, planning, guests and the shoot day when a production comes together.]" },
      for: { nl: "Producties die praktische rust en redactioneel overzicht kunnen gebruiken.", en: "Productions that could use practical calm and editorial overview." },
      deliver: { nl: "Afstemming over planning, taken en uitvoering, van eerste voorbereiding tot draaidag.", en: "Alignment on planning, tasks and execution, from first preparation to shoot day." }
    },
    {
      id: "camera-journalist", num: "03", slug: "diensten/camera-journalist.html",
      title: { nl: "(Camera)journalist", en: "(Camera) Journalist" },
      role: { nl: "Verhaal op locatie", en: "Story on location" },
      img: IMG.tbs,
      desc: { nl: "Journalistiek werk met beeld: een verhaal brengen en vastleggen, dicht op het moment en op de mens.", en: "Journalism with pictures: bringing and capturing a story, close to the moment and to people." },
      intro: { nl: "Als camera journalist ben je er wanneer het gebeurt, en weet je te vragen, te zoeken en te registreren.", en: "As a camera journalist you are there when it happens, and you know what to ask, search for and record." },
      body: { nl: "[PLACEHOLDER: reportages, interviews en de journalistieke vragen die het camerawerk sturen.]", en: "[PLACEHOLDER: reportages, interviews and the journalistic questions that steer the camerawork.]" },
      for: { nl: "Redacties en producties die journalistiek begrip en eigen camerawerk in een rol zoeken.", en: "Newsrooms and productions looking for journalistic sense and their own camerawork in one role." },
      deliver: { nl: "Reportages, interviews en documentaire beelden, journalistiek gegrond in de vraag achter het beeld.", en: "Reportages, interviews and documentary footage, journalistically grounded in the question behind the image." }
    },
    {
      id: "fotograaf", num: "04", slug: "diensten/fotograaf.html",
      title: { nl: "Fotograaf", en: "Photographer" },
      role: { nl: "Beeld dat context geeft", en: "Images that give context" },
      img: IMG.minor,
      desc: { nl: "Reportage- en documentaire fotografie die een moment en de laag eronder zichtbaar maakt.", en: "Reportage and documentary photography that makes a moment and the layer beneath it visible." },
      intro: { nl: "Een foto kan meer zeggen dan een volzin, als het weet welke vraag het beantwoordt en welk moment het vasthoudt.", en: "A photograph can say more than a full sentence, if it knows which question it answers and which moment it holds." },
      body: { nl: "[PLACEHOLDER: reportage, documentaire fotografie en beeldverhalen.]", en: "[PLACEHOLDER: reportage, documentary photography and visual stories.]" },
      for: { nl: "Publicaties, projecten en organisaties die een echt beeldverhaal nodig hebben.", en: "Publications, projects and organisations that need a real visual story." },
      deliver: { nl: "Een zorgvuldig samengestelde beeldselectie, afgestemd op het verhaal en het medium.", en: "A carefully composed image selection, tuned to the story and the medium." }
    },
    {
      id: "videograaf", num: "05", slug: "diensten/videograaf.html",
      title: { nl: "Videograaf", en: "Videographer" },
      role: { nl: "Beeld in beweging", en: "Moving images" },
      img: IMG.fashion,
      desc: { nl: "Video die ritme, sfeer en inhoud samenbrengt, van reportage tot interview en documentaire vorm.", en: "Video that brings rhythm, atmosphere and content together, from reportage to interview and documentary form." },
      intro: { nl: "Beeld in beweging vertelt anders dan een stilstaand beeld. Het gaat om nabijheid, ritme en een vorm die past.", en: "Moving images tell differently than a still. It is about proximity, rhythm and a form that fits." },
      body: { nl: "[PLACEHOLDER: camerawerk, interview en montage in de praktijk.]", en: "[PLACEHOLDER: camerawork, interview and editing in practice.]" },
      for: { nl: "Verhalen die gezien moeten worden, in de juiste toon.", en: "Stories that need to be seen, in the right tone." },
      deliver: { nl: "Producties en montage die losse beelden en interviews samenbrengen tot een voelbaar verhaal.", en: "Productions and editing that bring loose images and interviews together into a felt story." }
    },
    {
      id: "drone", num: "06", slug: "diensten/drone.html",
      title: { nl: "Drone", en: "Drone" },
      role: { nl: "Perspectief, binnenkort", en: "Perspective, soon" },
      img: IMG.housing,
      comingSoon: true,
      desc: { nl: "Dronebeelden als ze het verhaal werkelijk sterker maken. Deze dienst wordt binnenkort toegevoegd.", en: "Drone footage when it truly strengthens the story. This service is coming soon." },
      intro: { nl: "Overzicht en plaats maken een verhaal soms pas compleet. Daarvoor wordt het drone-aanbod voorbereid.", en: "Overview and place sometimes complete a story. The drone offer is being prepared for that." },
      body: { nl: "[PLACEHOLDER: beschikbaarheid, certificering en voorwaarden zodra vastgesteld.]", en: "[PLACEHOLDER: availability, certification and terms once confirmed.]" },
      for: { nl: "Producties waarbij overzicht en plaats onderdeel van het verhaal zijn.", en: "Productions where overview and place are part of the story." },
      deliver: { nl: "[AANVULLEN]", en: "[PLACEHOLDER]" }
    }
  ],

  /* ---------- stories ---------- */
  storyFilters: ["ALLES", "TEKST", "AUDIO", "VIDEO", "FOTOGRAFIE", "MULTIMEDIAAL"],

  projects: [
    {
      slug: "insuline-medicijnen",
      title: { nl: "De twee gezichten van insuline medicijnen", en: "The two faces of insulin medication" },
      category: "MULTIMEDIAAL", year: "2024",
      client: { nl: "Eigen journalistieke productie", en: "Own journalistic production" },
      role: { nl: "RESEARCH / INTERVIEWS / MULTIMEDIALE PRODUCTIE", en: "RESEARCH / INTERVIEWS / MULTIMEDIA PRODUCTION" },
      image: IMG.insulin, heroImg: IMG.insulin,
      lead: { nl: "Een multimediale productie over GLP-1-medicatie, obesitas en de persoonlijke gevolgen achter het debat.", en: "A multimedia production on GLP-1 medication, obesity and the personal consequences behind the debate." },
      story: { nl: "Deze productie onderzoekt de opkomst van GLP-1-medicatie vanuit cijfers, context en een persoonlijk verhaal. Het uitgangspunt is wat er verandert wanneer een medicijn tegelijk medische zorg, maatschappelijke verwachtingen en individuele ervaring raakt.", en: "This production explores the rise of GLP-1 medication through figures, context and a personal story. It starts from what changes when a medicine touches medical care, societal expectations and individual experience at once." },
      roleText: { nl: "Research, interviews en de uitwerking van de multimediale productie.", en: "Research, interviews and the development of the multimedia production." },
      process: { nl: "De productie is opgebouwd rond brononderzoek, een persoonlijke casus en toegankelijke uitleg van de maatschappelijke context.", en: "The production is built around source research, a personal case and accessible explanation of the social context." },
      result: { nl: "Bekijk de volledige, oorspronkelijke productie in het journalistieke archief.", en: "View the full original production in the journalistic archive." },
      gallery: [IMG.insulinDetail, IMG.gli, IMG.insulin],
      source: "https://svjmedia.nl/annavandenhazel/portfolio-slow/multimediaal-productie/",
      sourceLabel: { nl: "Bekijk oorspronkelijke productie", en: "View original production" }
    },
    {
      slug: "tbs-achtergrondverhaal",
      title: { nl: "Kritiek op tbs: wat zit erachter?", en: "Criticism of tbs: what lies behind it?" },
      category: "TEKST", year: "2024",
      client: { nl: "Eigen journalistieke productie", en: "Own journalistic production" },
      role: { nl: "RESEARCH / JOURNALISTIEK", en: "RESEARCH / JOURNALISM" },
      image: IMG.tbs, heroImg: IMG.tbs,
      lead: { nl: "Een achtergrondverhaal over tbs, beeldvorming en de werkelijkheid achter een gesloten wereld.", en: "A background story about tbs, perception and the reality behind a closed world." },
      story: { nl: "Tbs krijgt vaak aandacht wanneer er iets misgaat. Dit achtergrondverhaal vertrekt vanuit de vraag wat de maatregel inhoudt, hoe behandeling werkt en welke aannames het publieke gesprek kleuren.", en: "Tbs often receives attention when something goes wrong. This background story starts from the question what the measure involves, how treatment works and which assumptions colour the public conversation." },
      roleText: { nl: "Research en journalistieke uitwerking van het achtergrondverhaal.", en: "Research and journalistic development of the background story." },
      process: { nl: "De productie brengt context en verschillende perspectieven samen in een toegankelijke longread.", en: "The production brings context and perspectives together in an accessible long-read." },
      result: { nl: "De volledige publicatie staat in het bestaande portfolio-archief.", en: "The full publication lives in the existing portfolio archive." },
      gallery: [IMG.tbsPortrait, IMG.tbs],
      source: "https://svjmedia.nl/annavandenhazel/portfolio-slow/achtergrondverhaal/",
      sourceLabel: { nl: "Lees het achtergrondverhaal", en: "Read the background story" }
    },
    {
      slug: "veteranen-search-team",
      title: { nl: "Documentaire Veteranen Search Team", en: "Documentary Veteran Search Team" },
      category: "VIDEO", year: "2025",
      client: { nl: "Opleidingsproductie", en: "Educational production" },
      role: { nl: "DOCUMENTAIREPRODUCTIE", en: "DOCUMENTARY PRODUCTION" },
      image: IMG.gli, heroImg: IMG.gli,
      lead: { nl: "Een documentaireproductie over vrijwilligers die zoeken naar vermiste mensen.", en: "A documentary production about volunteers who search for missing people." },
      story: { nl: "Het Veteranen Search Team zet zich sinds 2017 in bij vermissingszaken. Deze productie volgt het werk en de motivatie achter dat netwerk, met aandacht voor de menselijke kant van het zoeken.", en: "The Veteran Search Team has been involved in missing-person cases since 2017. This production follows the work and motivation behind that network, with attention to the human side of searching." },
      roleText: { nl: "Werk aan een documentaireproductie binnen de opleiding. [AANVULLEN: exacte taakverdeling].", en: "Work on a documentary production within the education. [PLACEHOLDER: exact task division]." },
      process: { nl: "[AANVULLEN: research-, draaiperiode- en montageproces].", en: "[PLACEHOLDER: research, shooting period and editing process]." },
      result: { nl: "Bekijk de oorspronkelijke projectpagina voor de beschikbare productie-elementen.", en: "View the original project page for the available production elements." },
      gallery: [IMG.gli, IMG.tbs],
      source: "https://svjmedia.nl/annavandenhazel/specialisatie/documentaire/",
      sourceLabel: { nl: "Bekijk projectinformatie", en: "View project information" }
    },
    {
      slug: "ai-beelden-verificatie",
      title: { nl: "AI-beelden herkennen wordt een basisvaardigheid", en: "Recognising AI images becomes a basic skill" },
      category: "TEKST", year: "2026",
      client: { nl: "Praktijkgericht onderzoek", en: "Practice-oriented research" },
      role: { nl: "ONDERZOEK / INTERVIEWS / ANALYSE", en: "RESEARCH / INTERVIEWS / ANALYSIS" },
      image: IMG.housing, heroImg: IMG.housing,
      lead: { nl: "Onderzoek naar hoe journalisten AI-gegenereerd beeld beter kunnen herkennen en verifiëren.", en: "Research into how journalists can better recognise and verify AI-generated images." },
      story: { nl: "Voor dit onderzoek zijn professionals uit beeldredactie, factcheck en OSINT geïnterviewd over verificatie van AI-beeld. Het laat zien waarom hulpmiddelen belangrijk zijn, maar journalistieke beoordeling onmisbaar blijft.", en: "For this research, professionals from image desks, fact-checking and OSINT were interviewed about verifying AI images. It shows why tools matter, but journalistic judgment remains essential." },
      roleText: { nl: "Praktijkgericht onderzoek en journalistieke analyse, met zeven professionals van onder meer ANP, AFP, NRC, Pointer, BNNVARA en Hogeschool Utrecht.", en: "Practice-oriented research and journalistic analysis, with seven professionals including ANP, AFP, NRC, Pointer, BNNVARA and Hogeschool Utrecht." },
      process: { nl: "Interviews en analyse vormden de basis voor een toegankelijke uitwerking van de belangrijkste lessen.", en: "Interviews and analysis formed the basis for an accessible account of the main lessons." },
      result: { nl: "De volledige onderzoeksuitwerking staat in het oorspronkelijke portfolio.", en: "The full research write-up lives in the original portfolio." },
      gallery: [IMG.housing, IMG.insulin],
      source: "https://svjmedia.nl/annavandenhazel/afstuderen/praktijkgericht-onderzoek/",
      sourceLabel: { nl: "Lees het onderzoek", en: "Read the research" }
    },
    {
      slug: "fast-fashion",
      title: { nl: "Wat gebeurt er als jouw fast fashion terugkomt in de kledingketen?", en: "What happens when your fast fashion returns to the clothing chain?" },
      category: "MULTIMEDIAAL", year: "2026",
      client: { nl: "Afstudeerproductie", en: "Graduation production" },
      role: { nl: "MULTIMEDIALE PRODUCTIE", en: "MULTIMEDIA PRODUCTION" },
      image: IMG.fashion, heroImg: IMG.fashion,
      lead: { nl: "Een multimediale productie over fast fashion en de route van kleding nadat het wordt afgedankt.", en: "A multimedia production about fast fashion and the route of clothing after it is discarded." },
      story: { nl: "De productie volgt de keten achter goedkope kleding en verkent wat er gebeurt nadat een item uit een kledingkast verdwijnt. Persoonlijke keuzes en grotere systeemvragen komen daarin samen.", en: "The production follows the chain behind cheap clothing and explores what happens once an item leaves a wardrobe. Personal choices and larger systemic questions come together." },
      roleText: { nl: "Multimediale uitwerking van een journalistiek verhaal. [AANVULLEN: exacte rol en externe publicatielink].", en: "Multimedia development of a journalistic story. [PLACEHOLDER: exact role and external link]." },
      process: { nl: "[AANVULLEN: research, productie en gebruikte vertelvormen].", en: "[PLACEHOLDER: research, production and story forms]." },
      result: { nl: "De oorspronkelijke afstudeerpagina bevat de volledige productie.", en: "The original graduation page contains the full production." },
      gallery: [IMG.fashionBts, IMG.fashion],
      source: "https://svjmedia.nl/annavandenhazel/afstuderen/vrije-opdracht/",
      sourceLabel: { nl: "Bekijk oorspronkelijke productie", en: "View original production" }
    },
    {
      slug: "minor-fotojournalistiek",
      title: { nl: "Fotojournalistiek: geloof onder jongeren", en: "Photojournalism: faith among young people" },
      category: "FOTOGRAFIE", year: "2025",
      client: { nl: "Opleidingsproject", en: "Educational project" },
      role: { nl: "HOOFDREDACTIE / FOTOREPORTAGE / PRESENTATIE", en: "EDITOR-IN-CHIEF / PHOTO REPORTAGE / PRESENTATION" },
      image: IMG.minor, heroImg: IMG.minor,
      lead: { nl: "Een fotojournalistiek project over de opkomst van het christelijk geloof onder jongeren.", en: "A photojournalism project about the rise of Christian faith among young people." },
      story: { nl: "Als eindopdracht van de minor fotojournalistiek werd gewerkt aan een tijdschrift en expositie. Anna vervulde met Vera Warmenhoven de rol van hoofdredacteur en maakte samen met Tosca van Elst een fotoreportage.", en: "As the final assignment of the photojournalism minor, a magazine and exhibition were made. Anna held the role of editor-in-chief with Vera Warmenhoven and produced a photo reportage with Tosca van Elst." },
      roleText: { nl: "Hoofdredactie, coördinatie van inhoud, planning en samenwerking; daarnaast fotoreportage en presentatie tijdens de opening.", en: "Editor-in-chief, coordinating content, planning and collaboration; plus photo reportage and presentation at the opening." },
      process: { nl: "De redactie werkte toe naar een gezamenlijke publicatie en expositie.", en: "The editorial team worked toward a joint publication and exhibition." },
      result: { nl: "Bekijk de volledige projectbeschrijving en beelden in het bestaande portfolio.", en: "View the full project description and images in the existing portfolio." },
      gallery: [IMG.minorBts, IMG.minor],
      source: "https://svjmedia.nl/annavandenhazel/minor/",
      sourceLabel: { nl: "Bekijk projectinformatie", en: "View project information" }
    }
  ],

  /* ---------- blog (placeholders only, no invented articles) ---------- */
  posts: [
    {
      slug: "eerste-verhaal", featured: true,
      date: { nl: "Binnenkort", en: "Soon" },
      title: { nl: "Het eerste verhaal komt binnenkort", en: "The first story is coming soon" },
      excerpt: { nl: "Making-of, achter de schermen en veldwerk. Binnenkort lees je hier hoe verhalen worden gemaakt.", en: "Making-of, behind the scenes and fieldwork. Soon you will read here how stories are made." },
      img: IMG.icp
    },
    {
      slug: "veldwerk-notities", featured: false,
      date: { nl: "Binnenkort", en: "Soon" },
      title: { nl: "Notities uit het veld", en: "Notes from the field" },
      excerpt: { nl: "[PLACEHOLDER: veldwerk, productie en hoe een verhaal in beeld komt.]", en: "[PLACEHOLDER: fieldwork, production and how a story comes into pictures.]" },
      img: IMG.minorBts
    },
    {
      slug: "achter-de-schermen", featured: false,
      date: { nl: "Binnenkort", en: "Soon" },
      title: { nl: "Achter de schermen van een productie", en: "Behind the scenes of a production" },
      excerpt: { nl: "[PLACEHOLDER: produceren, planning en rust op de draaidag.]", en: "[PLACEHOLDER: producing, planning and calm on the shoot day.]" },
      img: IMG.fashionBts
    }
  ],

  /* ---------- photography shop ---------- */
  photoFilters: ["ALLES", "PORTRET", "NATUUR", "DOCUMENTAIR", "ARCHITECTUUR", "DIEREN", "ABSTRACT"],
  photos: [
    {
      id: "FOTO-01", title: { nl: "[FOTOTITEL TOEVOEGEN]", en: "[ADD PHOTO TITLE]" },
      cat: "PORTRET", price: null, img: IMG.minor,
      desc: { nl: "[Beschrijving, formaat, oplage en prijs toevoegen voor publicatie.]", en: "[Add description, format, edition and price before publishing.]" }
    },
    {
      id: "FOTO-02", title: { nl: "[FOTOTITEL TOEVOEGEN]", en: "[ADD PHOTO TITLE]" },
      cat: "DOCUMENTAIR", price: null, img: IMG.fashion,
      desc: { nl: "[Beschrijving, formaat, oplage en prijs toevoegen voor publicatie.]", en: "[Add description, format, edition and price before publishing.]" }
    }
  ],

  pricing: {},

  /* ---------- experience (editorial timeline, from archive) ---------- */
  experience: [
    {
      year: { nl: "2022 - heden", en: "2022 - present" },
      org: { nl: "Hogeschool Utrecht", en: "Hogeschool Utrecht" },
      role: { nl: "Journalistiek - bachelor", en: "Journalism - bachelor" },
      note: { nl: "Sinds 2022 studeert Anna Journalistiek, met beeld, research en crossmediale vormgeving.", en: "Since 2022 Anna studies Journalism, with image, research and cross-media forms." }
    },
    {
      year: { nl: "Stage", en: "Internship" },
      org: "ICP",
      role: { nl: "Productie- en redactiestage", en: "Production and editorial internship" },
      note: { nl: "Productie en redactie in de praktijk.", en: "Production and editorial work in the field." }
    },
    {
      year: { nl: "Documentairevoorbereiding", en: "Documentary research" },
      org: "Dutch Angle TV",
      role: { nl: "Projectmedewerker", en: "Project assistant" },
      note: { nl: "Voorbereidend werk voor een documentaireproductie.", en: "Preparatory work for a documentary production." }
    },
    {
      year: "2025",
      org: { nl: "Minor Fotojournalistiek", en: "Photojournalism minor" },
      role: { nl: "Hoofdredacteur", en: "Editor-in-chief" },
      note: { nl: "Tijdschrift en expositie als eindopdracht, met Vera Warmenhoven.", en: "Magazine and exhibition as final assignment, with Vera Warmenhoven." }
    }
  ]
};