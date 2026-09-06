/* Hazel Media — central content configuration.
   Keep verified facts here. Fields marked [AANVULLEN] are intentionally editable
   before launch; they are never presented as completed credentials or offers. */
window.HM = window.HM || {};

const ARCHIVE = "https://svjmedia.nl/annavandenhazel/wp-content/uploads/sites/1422";
const IMG = {
  anna: `${ARCHIVE}/2026/06/CV-foto-34-790x1024.jpg`,
  icp: `${ARCHIVE}/2026/06/Ik-bij-Zondag-op-Vier.jpeg`,
  insulin: `${ARCHIVE}/2024/06/Linda-medijnen-klaar-2-e1718368455180.jpg`,
  insulinDetail: `${ARCHIVE}/2024/06/Linda-Before-klaar-4-edited.jpg`,
  tbs: `${ARCHIVE}/2024/04/Kliniek-scaled.jpg`,
  tbsPortrait: `${ARCHIVE}/2024/06/Foto-Priscilla-Oostvaarderskliniek.jpg`,
  fashion: `${ARCHIVE}/2026/06/20260512_124146-scaled-e1780834510884.jpg`,
  fashionBts: `${ARCHIVE}/2026/06/20260512_1250270-scaled.jpg`,
  minor: `${ARCHIVE}/2026/06/20250610-DSCF0382-1024x683.jpg`,
  minorBts: `${ARCHIVE}/2026/06/20250610-DSCF0397-1024x683.jpg`,
  housing: `${ARCHIVE}/2025/01/cid5104_1706012863576_De-woningmarkt-in-2024-meer-kansen-voor-kopers-en-verkopers_HEADER-scaled.jpg`,
  gli: `${ARCHIVE}/2024/06/Cover-scaled.jpg`,
};

/* Diensten — de zes diensten. Korte beschrijvingen zijn bewust gehouden als
   richtlijn; de definitieve omschrijving levert Anna aan. `page` wijst naar de
   individuele dienstenpagina. Drone is een toekomstige dienst. */
HM.services = [
  { id:"redacteur", num:"01", title:"Redacteur", page:"redacteur.html", img:IMG.tbs, cap:"Redactie en verhaal", desc:"Redactie en verhaalontwikkeling voor journalistieke producties." },
  { id:"producer", num:"02", title:"Producer", page:"producer.html", img:IMG.icp, cap:"Grip op de productie", desc:"Productieplanning, voorbereiding en coördinatie op draaidagen." },
  { id:"camera-journalist", num:"03", title:"Camera-journalist", page:"camera-journalist.html", img:IMG.fashion, cap:"Beeld én verhaal", desc:"Journalistiek en camerawerk voor verhalen die dicht op het moment zitten." },
  { id:"fotograaf", num:"04", title:"Fotograaf", page:"fotograaf.html", img:IMG.minor, cap:"Beeld dat context geeft", desc:"Reportage- en documentairefotografie die een moment én de laag eronder toont." },
  { id:"videograaf", num:"05", title:"Videograaf", page:"videograaf.html", img:IMG.insulin, cap:"Beeld in beweging", desc:"Video en beeldverhalen met oog voor inhoud en vorm." },
  { id:"drone", num:"06", title:"Drone", page:"drone.html", future:true, img:IMG.housing, cap:"Binnenkort beschikbaar", desc:"Dronebeelden wanneer het verhaal het sterker maakt. Binnenkort beschikbaar." },
];

HM.projects = [
  {
    slug:"insuline-medicijnen", title:"De twee gezichten van insuline medicijnen", category:"MULTIMEDIA", client:"Eigen journalistieke productie", year:"2024", role:"RESEARCH • INTERVIEWS • MULTIMEDIALE PRODUCTIE", tags:["RESEARCH","EDITING","VIDEO"], featured:true, layout:"wide", image:IMG.insulin, heroImg:IMG.insulin,
    lead:"Een multimediale productie over GLP-1-medicatie, obesitas en de persoonlijke gevolgen achter het debat.",
    story:"Deze productie onderzoekt de opkomst van GLP-1-medicatie vanuit cijfers, context en een persoonlijk verhaal. Het uitgangspunt is de vraag wat er verandert wanneer een medicijn tegelijk medische zorg, maatschappelijke verwachtingen en individuele ervaring raakt.",
    roleText:"Research, interviews en de uitwerking van de multimediale productie.", process:"De productie is opgebouwd rond brononderzoek, een persoonlijke casus en toegankelijke uitleg van de maatschappelijke context.", result:"Bekijk de volledige, oorspronkelijke productie in Anna's journalistieke archief.", gallery:[IMG.insulinDetail,IMG.gli,IMG.insulin], next:"tbs-achtergrondverhaal", source:"https://svjmedia.nl/annavandenhazel/portfolio-slow/multimediaal-productie/", sourceLabel:"Bekijk oorspronkelijke productie"
  },
  {
    slug:"tbs-achtergrondverhaal", title:"Kritiek op tbs: wat zit erachter?", category:"ACHTERGROND", client:"Eigen journalistieke productie", year:"2024", role:"RESEARCH • JOURNALISTIEK", tags:["RESEARCH","EDITING"], featured:true, layout:"tall", image:IMG.tbs, heroImg:IMG.tbs,
    lead:"Een achtergrondverhaal over tbs, beeldvorming en de werkelijkheid achter een gesloten wereld.",
    story:"Tbs krijgt vaak aandacht wanneer er iets misgaat. Dit achtergrondverhaal vertrekt vanuit de vraag wat de maatregel inhoudt, hoe behandeling werkt en welke aannames het publieke gesprek kleuren.",
    roleText:"Research en journalistieke uitwerking van het achtergrondverhaal.", process:"De productie brengt context en verschillende perspectieven samen in een toegankelijke longread.", result:"De volledige publicatie staat in het bestaande portfolio-archief.", gallery:[IMG.tbsPortrait,IMG.tbs], next:"veteranen-search-team", source:"https://svjmedia.nl/annavandenhazel/portfolio-slow/achtergrondverhaal/", sourceLabel:"Lees het achtergrondverhaal"
  },
  {
    slug:"veteranen-search-team", title:"Documentaire Veteranen Search Team", category:"VIDEO", client:"Opleidingsproductie", year:"2025", role:"DOCUMENTAIREPRODUCTIE", tags:["VIDEO","PRODUCER","RESEARCH"], featured:true, layout:"tall", image:IMG.gli, heroImg:IMG.gli,
    lead:"Een documentaireproductie over vrijwilligers die zoeken naar vermiste mensen.",
    story:"Het Veteranen Search Team zet zich sinds 2017 in bij vermissingszaken. Deze productie volgt het werk en de motivatie achter dat vrijwilligersnetwerk, met aandacht voor de menselijke kant van het zoeken.",
    roleText:"Werk aan een documentaireproductie binnen de opleiding. [AANVULLEN: exacte taakverdeling binnen het team].", process:"[AANVULLEN: research-, draaiperiode- en montageproces].", result:"Bekijk de oorspronkelijke projectpagina voor de beschikbare productie-elementen.", gallery:[IMG.gli,IMG.tbs], next:"ai-beelden-verificatie", source:"https://svjmedia.nl/annavandenhazel/specialisatie/documentaire/", sourceLabel:"Bekijk projectinformatie"
  },
  {
    slug:"ai-beelden-verificatie", title:"AI-beelden herkennen wordt een basisvaardigheid", category:"RESEARCH", client:"Praktijkgericht onderzoek", year:"2026", role:"ONDERZOEK • INTERVIEWS • JOURNALISTIEKE ANALYSE", tags:["RESEARCH","EDITING"], featured:true, layout:"wide", image:IMG.housing, heroImg:IMG.housing,
    lead:"Onderzoek naar hoe journalisten AI-gegenereerd beeld beter kunnen herkennen en verifiëren.",
    story:"Voor dit onderzoek zijn professionals uit beeldredactie, factcheck en OSINT geïnterviewd over verificatie van AI-gegenereerd beeld. Het laat zien waarom hulpmiddelen belangrijk zijn, maar journalistieke beoordeling onmisbaar blijft.",
    roleText:"Praktijkgericht onderzoek en journalistieke analyse, met zeven professionals van onder meer ANP, AFP, NRC, Pointer, BNNVARA en Hogeschool Utrecht.", process:"Interviews en analyse vormden de basis voor een toegankelijke uitwerking van de belangrijkste lessen.", result:"De volledige onderzoeksuitwerking staat in het oorspronkelijke portfolio.", gallery:[IMG.housing,IMG.insulin], next:"fast-fashion", source:"https://svjmedia.nl/annavandenhazel/afstuderen/pratijkgericht-onderzoek/", sourceLabel:"Lees het onderzoek"
  },
  {
    slug:"fast-fashion", title:"Wat gebeurt er als jouw fast fashion terugkomt in de kledingketen?", category:"MULTIMEDIA", client:"Afstudeerproductie", year:"2026", role:"MULTIMEDIALE PRODUCTIE", tags:["RESEARCH","VIDEO","EDITING"], featured:false, layout:"wide", image:IMG.fashion, heroImg:IMG.fashion,
    lead:"Een multimediale productie over fast fashion en de route van kleding nadat het wordt afgedankt.",
    story:"De productie volgt de keten achter goedkope kleding en verkent wat er gebeurt nadat een item uit een kledingkast verdwijnt. Persoonlijke keuzes en grotere systeemvragen komen daarin samen.",
    roleText:"Multimediale uitwerking van een journalistiek verhaal. [AANVULLEN: exacte rol en externe publicatielink].", process:"[AANVULLEN: research, productie en gebruikte vertelvormen].", result:"De oorspronkelijke afstudeerpagina bevat de volledige productie.", gallery:[IMG.fashionBts,IMG.fashion], next:"minor-fotojournalistiek", source:"https://svjmedia.nl/annavandenhazel/afstuderen/vrije-opdracht/", sourceLabel:"Bekijk oorspronkelijke productie"
  },
  {
    slug:"minor-fotojournalistiek", title:"Fotojournalistiek: geloof onder jongeren", category:"FOTOGRAFIE", client:"Opleidingsproject", year:"2025", role:"HOOFDREDACTIE • FOTOREPORTAGE • PRESENTATIE", tags:["FOTOGRAFIE","PRODUCER","PRESENTATIE"], featured:false, layout:"tall", image:IMG.minor, heroImg:IMG.minor,
    lead:"Een fotojournalistiek project over de opkomst van het christelijk geloof onder jongeren.",
    story:"Als eindopdracht van de minor fotojournalistiek werd gewerkt aan een tijdschrift en expositie. Anna vervulde met Vera Warmenhoven de rol van hoofdredacteur en maakte samen met Tosca van Elst een fotoreportage.",
    roleText:"Hoofdredactie, coördinatie van inhoud, planning en samenwerking; daarnaast fotoreportage en presentatie tijdens de opening.", process:"De redactie werkte toe naar een gezamenlijke publicatie en expositie.", result:"Bekijk de volledige projectbeschrijving en beelden in het bestaande portfolio.", gallery:[IMG.minorBts,IMG.minor], next:"insuline-medicijnen", source:"https://svjmedia.nl/annavandenhazel/minor/", sourceLabel:"Bekijk projectinformatie"
  },
];

/* Blog-artikelen. Anna levert nieuwe artikelen aan (vooral making-of, behind
   the scenes en haar werkproces). Voeg artikelen hier toe: de eerste in de lijst
   wordt als groot bericht bovenaan getoond. */
HM.posts = [];

/* No testimonials or client logos are displayed until supplied and approved. */
HM.reviews = [];
HM.clients = [
  { name:"ICP", sub:"productie- & redactiestage" },
  { name:"Dutch Angle TV", sub:"documentairevoorbereiding" },
  { name:"Hogeschool Utrecht", sub:"journalistiek" },
];

/* Shop is an integration-ready catalogue. Add price, licence and image-rights data
   only after the photographer confirms each product. Categorieën: PORTRET, NATUUR,
   DOCUMENTAIR, ARCHITECTUUR, DIEREN, ABSTRACT. */
HM.photoFilters = ["ALL","PORTRET","NATUUR","DOCUMENTAIR","ARCHITECTUUR","DIEREN","ABSTRACT"];
HM.photos = [
  {id:"[FOTO-NUMMER]", title:"[FOTOTITEL TOEVOEGEN]", cat:"PORTRET", price:null, img:IMG.minor, desc:"[Beschrijving, formaat, oplage en prijs toevoegen vóór publicatie.]"},
  {id:"[FOTO-NUMMER]", title:"[FOTOTITEL TOEVOEGEN]", cat:"DOCUMENTAIR", price:null, img:IMG.fashion, desc:"[Beschrijving, formaat, oplage en prijs toevoegen vóór publicatie.]"},
];

HM.pricing = {};

/* Contactgegevens. De footer toont deze automatisch. Het Instagram-account is
   hazelmedia.nl; vergeet niet de volledige profiel-URL toe te voegen zodra deze
   bekend is, voordat Instagram als link verschijnt. */
HM.contact = {
  place:"Veenendaal, Nederland",
  email:"contact@annavandenhazel.nl",
  phone:"0682253202",
  linkedin:"linkedin.com/in/anna-van-den-hazel-895403227",
  instagram:"",
};
