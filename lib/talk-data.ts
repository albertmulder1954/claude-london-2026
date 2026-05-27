export type TrackId = "intro" | "claude-code" | "platform" | "prompting" | "agents" | "engineering" | "cloud";

export interface QuizVraag {
  vraag: string;
  opties: string[];
  correct: number;
  uitleg: string;
}

export interface Talk {
  id: number;
  titel: string;
  ondertitel: string;
  youtubeId: string;
  duur: string;
  track: TrackId;
  niveau: "Beginner" | "Gemiddeld" | "Gevorderd";
  leerdoelen: string[];
  quiz: QuizVraag[];
}

export interface Track {
  id: TrackId;
  label: string;
  kleur: string;
  badge: string;
  bg: string;
  border: string;
}

export const tracks: Track[] = [
  { id: "intro",       label: "Introductie",        kleur: "text-emerald-700", badge: "bg-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
  { id: "claude-code", label: "Claude Code",         kleur: "text-blue-700",    badge: "bg-blue-600",    bg: "bg-blue-50",    border: "border-blue-200" },
  { id: "platform",    label: "Platform & Modellen", kleur: "text-violet-700",  badge: "bg-violet-600",  bg: "bg-violet-50",  border: "border-violet-200" },
  { id: "prompting",   label: "Prompting & Design",  kleur: "text-amber-700",   badge: "bg-amber-600",   bg: "bg-amber-50",   border: "border-amber-200" },
  { id: "agents",      label: "Agents",              kleur: "text-rose-700",    badge: "bg-rose-600",    bg: "bg-rose-50",    border: "border-rose-200" },
  { id: "engineering", label: "Engineering & Scale", kleur: "text-cyan-700",    badge: "bg-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-200" },
  { id: "cloud",       label: "Cloud & Enterprise",  kleur: "text-slate-700",   badge: "bg-slate-600",   bg: "bg-slate-50",   border: "border-slate-200" },
];

export const niveauKleur: Record<string, string> = {
  Beginner:  "bg-green-100 text-green-700",
  Gemiddeld: "bg-amber-100 text-amber-700",
  Gevorderd: "bg-red-100 text-red-700",
};

export const talks: Talk[] = [
  {
    id: 1,
    titel: "Opening Keynote",
    ondertitel: "Introductie van het 'Code with Claude 2026' evenement in London en de visie van Anthropic op AI-native software development",
    youtubeId: "6amLO7I9xdg",
    duur: "46:27",
    track: "intro",
    niveau: "Beginner",
    leerdoelen: [
      "Begrijpen wat Anthropic's visie is op AI-native software development",
      "De grote lijnen kennen van Claude's huidige en toekomstige mogelijkheden",
      "Weten welke thema's aan bod komen tijdens de Code with Claude 2026 conferentie",
      "De context snappen van hoe Claude Code past in de bredere AI-ontwikkelstrategie",
    ],
    quiz: [
      { vraag: "Wat is het centrale thema van de 'Code with Claude 2026' conferentie in London?", opties: ["Het verbeteren van chatbots", "AI-native software development met Claude", "De lancering van een nieuw taalmodel", "Cloud-migratie met AI-tools"], correct: 1, uitleg: "De conferentie focust op AI-native development: hoe teams Claude inzetten om software sneller en slimmer te bouwen." },
      { vraag: "Welk bedrijf organiseert de Code with Claude 2026 conferentie?", opties: ["OpenAI", "Google DeepMind", "Anthropic", "Microsoft"], correct: 2, uitleg: "Anthropic, de maker van Claude, organiseert deze developer-conferentie." },
      { vraag: "Wat onderscheidt 'AI-native' development van traditioneel software ontwikkelen?", opties: ["AI schrijft alle code zonder menselijke input", "AI-tools zijn geïntegreerd in elk deel van de development workflow", "Je gebruikt uitsluitend Python", "Deployment gebeurt automatisch zonder CI/CD"], correct: 1, uitleg: "AI-native betekent dat AI-tools structureel zijn ingebed in de ontwikkelworkflow — van design tot deployment." },
      { vraag: "Voor welk type professional is de Code with Claude 2026 conferentie primair bedoeld?", opties: ["Alleen voor data scientists", "Marketingprofessionals die AI willen gebruiken", "Developers, engineers en teams die Claude inzetten voor softwareontwikkeling", "Alleen voor Anthropic-medewerkers"], correct: 2, uitleg: "De conferentie richt zich op developers en engineering teams die Claude praktisch inzetten in hun werk." },
      { vraag: "Wat is de verwachte impact van Claude Code op software development teams?", opties: ["Minder samenwerking tussen engineers", "Hogere productiviteit en nieuwe mogelijkheden voor teams van elke omvang", "Vervanging van alle junior developers", "Alleen nuttig voor grote enterprise teams"], correct: 1, uitleg: "Claude Code verhoogt de productiviteit en stelt teams — groot én klein — in staat meer te doen met minder handmatig werk." },
    ],
  },
  {
    id: 2,
    titel: "Beyond the basics with Claude Code",
    ondertitel: "Geavanceerde technieken voor Claude Code: van eenvoudige taken naar complexe, meerstaps workflows",
    youtubeId: "tuY2ChJIx48",
    duur: "47:20",
    track: "claude-code",
    niveau: "Gemiddeld",
    leerdoelen: [
      "Geavanceerde Claude Code-patronen toepassen voor complexe ontwikkeltaken",
      "Meerstaps workflows opzetten die verder gaan dan simpele code-generatie",
      "Leren hoe je Claude Code effectief stuurt met context en instructies",
      "Best practices toepassen voor productief gebruik van Claude Code in een team",
    ],
    quiz: [
      { vraag: "Wat bedoelt de spreker met 'beyond the basics' in Claude Code?", opties: ["Gebruik van betaalde API-functies", "Complexe, meerstaps workflows en geavanceerde sturing van Claude", "Integratie met externe databases", "Gebruik van oudere Claude-versies"], correct: 1, uitleg: "Beyond the basics gaat over hoe je Claude Code inzet voor complexe workflows, niet alleen voor eenvoudige code-completie." },
      { vraag: "Welk element is het meest cruciaal voor effectieve Claude Code-sessies?", opties: ["De snelheid van je internetverbinding", "Een goed gevuld CLAUDE.md met projectcontext", "Het gebruik van de nieuwste IDE", "Het aantal bestanden in je project"], correct: 1, uitleg: "CLAUDE.md geeft Claude projectspecifieke context en instructies, wat de kwaliteit van de output sterk verbetert." },
      { vraag: "Hoe kun je Claude Code het best sturen bij complexe taken?", opties: ["Door alles in één lange prompt te zetten", "Door Plan Mode te gebruiken vóór uitvoering", "Door de taak te splitsen over meerdere sessies zonder context", "Door alleen codebestanden open te laten"], correct: 1, uitleg: "Plan Mode laat Claude eerst de aanpak uitstippelen voordat er code wordt geschreven, wat fouten en herbouwcycli voorkomt." },
      { vraag: "Wat is een van de grootste valkuilen bij gevorderd Claude Code-gebruik?", opties: ["Te weinig tokens gebruiken", "Context window vol laten lopen zonder tussentijds te comprimeren", "Geen gebruik maken van shortcuts", "Te snel naar de volgende taak gaan"], correct: 1, uitleg: "Een vol context window leidt tot kwaliteitsverlies. Gebruik /compact proactief rond 50% gebruik." },
      { vraag: "Hoe schaal je Claude Code-gebruik effectief naar een heel engineering team?", opties: ["Elke developer werkt volledig zelfstandig met eigen instellingen", "Door gedeelde CLAUDE.md bestanden en gestandaardiseerde workflows in het team", "Door één persoon alle Claude Code-sessies te laten uitvoeren", "Door Claude Code alleen te gebruiken voor code reviews"], correct: 1, uitleg: "Gedeelde CLAUDE.md-bestanden en teamafspraken over workflows zorgen voor consistentie en efficiëntie op teamniveau." },
    ],
  },
  {
    id: 3,
    titel: "Running an AI-native engineering org",
    ondertitel: "Hoe je een engineering-organisatie opbouwt die AI als kern heeft, niet als add-on",
    youtubeId: "IA5LWIGqnyM",
    duur: "26:38",
    track: "engineering",
    niveau: "Gemiddeld",
    leerdoelen: [
      "Begrijpen wat het verschil is tussen een AI-native org en een traditionele org die AI gebruikt",
      "Leren hoe je processen en cultuur aanpast voor AI-native werken",
      "Inzien welke rollen en verantwoordelijkheden veranderen in een AI-native organisatie",
      "Praktische stappen kennen om de transitie naar AI-native te maken",
    ],
    quiz: [
      { vraag: "Wat maakt een engineering org 'AI-native' in plaats van gewoon 'AI-gebruikend'?", opties: ["Ze hebben een AI-afdeling", "AI is geïntegreerd in elk aspect van de workflow, niet als los hulpmiddel", "Ze gebruiken uitsluitend AI voor code-reviews", "Ze hebben geen handmatige processen meer"], correct: 1, uitleg: "AI-native betekent dat AI structureel verweven is in alle processen, van planning tot deployment — niet als optionele extra." },
      { vraag: "Welke culturele verschuiving is nodig bij een AI-native organisatie?", opties: ["Engineers hoeven geen code meer te schrijven", "Van 'AI als hulpmiddel' naar 'AI als teamlid'", "Minder communicatie tussen teamleden", "Volledige automatisering van alle beslissingen"], correct: 1, uitleg: "De mindset verschuift: AI is niet een tool die je af en toe pakt, maar een constante partner in het werk." },
      { vraag: "Hoe verandert de rol van een software engineer in een AI-native org?", opties: ["Engineers worden overbodig", "Engineers focussen meer op sturing, review en architectuur dan op handmatig coderen", "Engineers schrijven meer boilerplate code", "De rol blijft volledig hetzelfde"], correct: 1, uitleg: "Engineers richten zich meer op hogere-orde taken: richting geven, output beoordelen en architecturale beslissingen nemen." },
      { vraag: "Wat is een van de eerste stappen om een org AI-native te maken?", opties: ["Alle bestaande tools vervangen", "Beginnen met kleine pilots en successen opschalen", "De hele codebase herschrijven met AI", "Iedereen verplichten Claude te gebruiken"], correct: 1, uitleg: "Begin klein: pilots geven inzicht in wat werkt, waarna je succesvolle patterns kunt opschalen naar het hele team." },
      { vraag: "Welke maatstaf is het meest waardevol om AI-native succes te meten?", opties: ["Aantal AI-suggesties geaccepteerd", "Snelheid van feature delivery en kwaliteit van output", "Kosten van AI-abonnementen", "Aantal regels AI-gegenereerde code"], correct: 1, uitleg: "Uiteindelijk gaat het om deliverysnelheid en outputkwaliteit — niet om hoeveel AI-suggesties engineers accepteren." },
    ],
  },
  {
    id: 4,
    titel: "Getting more out of the Claude Platform",
    ondertitel: "Diepgaand inzicht in de Claude API, SDK en platform-features voor ontwikkelaars",
    youtubeId: "QIriO1-vHYw",
    duur: "26:41",
    track: "platform",
    niveau: "Gemiddeld",
    leerdoelen: [
      "Overzicht krijgen van de volledige Claude Platform mogelijkheden voor developers",
      "Weten hoe je de Claude API en SDK optimaal inzet in je applicaties",
      "Platform-specifieke features begrijpen zoals caching, batching en streaming",
      "Leren hoe je kosten en latency optimaliseert bij platform-gebruik",
    ],
    quiz: [
      { vraag: "Welke API-feature helpt bij het verlagen van latency bij herhaalde gelijksoortige requests?", opties: ["Streaming", "Prompt caching", "Batch processing", "Webhooks"], correct: 1, uitleg: "Prompt caching slaat vaste delen van de prompt op, waardoor herhaalde requests sneller en goedkoper zijn." },
      { vraag: "Wat is het voordeel van streaming responses bij de Claude API?", opties: ["Lagere kosten per token", "De gebruiker ziet de output direct terwijl Claude nog genereert", "Betere nauwkeurigheid van antwoorden", "Minder context window gebruik"], correct: 1, uitleg: "Streaming geeft een betere gebruikerservaring: tekst verschijnt direct, zonder te wachten tot de volledige response klaar is." },
      { vraag: "Voor welk gebruik geval is de Batch API het meest geschikt?", opties: ["Real-time chatbots", "Grote hoeveelheden verzoeken die geen directe response vereisen", "Video-transcriptie", "Live code-aanvulling"], correct: 1, uitleg: "Batch API verwerkt grote aantallen verzoeken asynchroon tegen lagere kosten — ideaal voor bulk-verwerking." },
      { vraag: "Hoe optimaliseer je de kosten bij gebruik van de Claude Platform API?", opties: ["Altijd het grootste model kiezen", "Caching, juiste modelkeuze per taak en batching combineren", "Zo weinig mogelijk requests sturen", "Tokens handmatig afkappen"], correct: 1, uitleg: "Kostenoptimalisatie vraagt een combinatie: caching voor herhaalde content, het juiste model per taak, en batching voor bulk-werk." },
      { vraag: "Wat is het verschil tussen de Claude API en Claude Code voor developers?", opties: ["De API is voor chatbots, Claude Code is voor webapps", "De API integreert Claude in je eigen applicaties; Claude Code is een CLI-tool voor development workflows", "Ze zijn volledig identiek", "De API vereist meer technische kennis dan Claude Code"], correct: 1, uitleg: "De API bouwt Claude in je producten in; Claude Code is een lokale CLI-tool die Claude inzet als development assistent." },
    ],
  },
  {
    id: 5,
    titel: "The prompting playbook",
    ondertitel: "Bewezen strategieën en technieken voor effectieve prompts in productie-omgevingen",
    youtubeId: "G2B0YWuJUgI",
    duur: "33:49",
    track: "prompting",
    niveau: "Beginner",
    leerdoelen: [
      "Leren welke prompting-technieken het best werken voor complexe taken",
      "Begrijpen hoe je prompts structureert voor consistente, voorspelbare output",
      "Few-shot, chain-of-thought en andere geavanceerde prompting-methoden kennen",
      "Weten hoe je prompts itereert en verbetert op basis van resultaten",
    ],
    quiz: [
      { vraag: "Wat is het doel van 'few-shot prompting'?", opties: ["Minder tokens gebruiken", "Claude voorbeelden geven zodat het patroon duidelijk is", "Snellere responses krijgen", "Kosten verlagen"], correct: 1, uitleg: "Few-shot prompting geeft Claude concrete voorbeelden van gewenste input-output paren, wat de output consistenter maakt." },
      { vraag: "Wat bedoelt men met 'chain-of-thought' prompting?", opties: ["Meerdere prompts achter elkaar sturen", "Claude expliciet vragen zijn redenering stap voor stap te tonen", "Gebruik van meerdere modellen tegelijk", "Prompts koppelen aan externe data"], correct: 1, uitleg: "Chain-of-thought vraagt Claude zijn denkstappen te expliciteren, wat leidt tot nauwkeurigere antwoorden bij complexe problemen." },
      { vraag: "Hoe maak je een prompt robuust voor productie-gebruik?", opties: ["Zo kort mogelijk houden", "Randgevallen specificeren, output-format vastleggen en edge cases beschrijven", "Alleen vragen stellen, geen instructies geven", "Altijd de temperatuur op 0 zetten"], correct: 1, uitleg: "Productie-prompts moeten randgevallen dekken, een helder output-formaat specificeren en duidelijke instructies geven voor uitzonderingen." },
      { vraag: "Wat is een effectieve aanpak om een slechte prompt te verbeteren?", opties: ["Het model wisselen", "Iteratief testen met concrete testcases en de prompt aanpassen op basis van resultaten", "De prompt langer maken", "Meer context weghalen"], correct: 1, uitleg: "Prompt-iteratie vraagt concrete testcases: zorg dat je weet wat 'goed' is, test systematisch en pas aan op basis van waarnemingen." },
      { vraag: "Welke techniek helpt bij het krijgen van gestructureerde output (bijv. JSON)?", opties: ["De prompt in JSON schrijven", "Expliciet het gewenste formaat specificeren met een voorbeeld in de prompt", "Altijd een korte prompt gebruiken", "De temperatuur verhogen"], correct: 1, uitleg: "Door het gewenste formaat expliciet te specificeren en een voorbeeld te geven, levert Claude consistente gestructureerde output." },
    ],
  },
  {
    id: 6,
    titel: "The capability curve",
    ondertitel: "Hoe Claude's mogelijkheden zich ontwikkelen en wat dat betekent voor developers en producten",
    youtubeId: "DNRddIEoH3c",
    duur: "26:26",
    track: "platform",
    niveau: "Beginner",
    leerdoelen: [
      "Begrijpen hoe AI-capabilities zich historisch hebben ontwikkeld",
      "Leren hoe je anticipeert op toekomstige model-verbeteringen in je product",
      "Weten welke taken nu al betrouwbaar werken en welke nog in ontwikkeling zijn",
      "De impact van capability-verbeteringen op softwarearchitectuur begrijpen",
    ],
    quiz: [
      { vraag: "Wat beschrijft de 'capability curve' in de context van AI-modellen?", opties: ["De leercurve van nieuwe developers", "De versnellende verbetering van AI-mogelijkheden over tijd", "De prijsontwikkeling van API-kosten", "De snelheid van code-generatie"], correct: 1, uitleg: "De capability curve beschrijft hoe AI-modellen steeds sneller verbeteren, met implicaties voor wat je vandaag en morgen kunt bouwen." },
      { vraag: "Hoe beïnvloedt de capability curve de keuze van softwarearchitectuur?", opties: ["Je bouwt altijd dezelfde architectuur", "Je ontwerpt systemen die profiteren van verbeterende AI zonder grote herbouw", "Architectuur wordt minder belangrijk naarmate AI beter wordt", "Je wacht met bouwen tot AI perfect is"], correct: 1, uitleg: "Slimme architectuur anticipeert op verbetering: bouw flexibel zodat betere modellen direct meer waarde leveren zonder grote aanpassingen." },
      { vraag: "Welke taken zijn momenteel het meest betrouwbaar voor AI-modellen zoals Claude?", opties: ["Creatief schrijven en feitelijke redenering in alle domeinen", "Gestructureerde taken met duidelijke criteria en goede context", "Taken zonder enige menselijke supervisie", "Complexe wiskundige bewijzen zonder fouten"], correct: 1, uitleg: "AI presteert het best bij goed-gedefinieerde taken met duidelijke criteria, goede context en mogelijkheid tot verificatie." },
      { vraag: "Wat is de aanbevolen strategie voor productteams bij snel verbeterende AI?", opties: ["Wachten tot de AI perfect is", "Bouwen op huidige capabilities en architectuur voorbereiden op verbeteringen", "Alleen bewezen stabiele features gebruiken", "Elke zes maanden de volledige stack herbouwen"], correct: 1, uitleg: "Bouw nu op huidige krachten, maar ontwerp je systeem zo dat verbeterende AI direct meer waarde kan leveren." },
      { vraag: "Hoe verandert de verhouding mens-AI naarmate capabilities toenemen?", opties: ["Mensen worden volledig overbodig", "AI neemt meer routinetaken over, mensen focussen op hoger-orde beslissingen", "De verhouding blijft stabiel", "Mensen moeten meer technische kennis opdoen om AI te gebruiken"], correct: 1, uitleg: "Bij betere capabilities neemt AI meer routine en implementatietaken over, terwijl mensen meer richten op richting en beoordeling." },
    ],
  },
  {
    id: 7,
    titel: "Designing with Claude: From prompt to production",
    ondertitel: "Hoe je Claude inzet in het design-proces, van eerste prompt tot werkend product",
    youtubeId: "Uvl-tRga98g",
    duur: "28:00",
    track: "prompting",
    niveau: "Gemiddeld",
    leerdoelen: [
      "Leren hoe je Claude effectief inzet in de design-fase van een product",
      "Begrijpen hoe je van een initiële prompt naar productiewaardige output gaat",
      "Technieken kennen voor iteratief design met Claude",
      "Weten hoe je UI/UX-feedback vertaalt naar effectieve prompts",
    ],
    quiz: [
      { vraag: "Wat is de meest effectieve manier om Claude in te zetten voor UI/UX design?", opties: ["Alleen voor het genereren van copy", "Als iteratieve samenwerkingspartner die varianten genereert op basis van gedetailleerde briefings", "Voor het vervangen van de designer", "Alleen voor het documenteren van bestaande designs"], correct: 1, uitleg: "Claude werkt het best als iteratieve partner: geef een gedetailleerde briefing, beoordeel varianten en stuur bij met feedback." },
      { vraag: "Hoe zorg je dat Claude consistente designs genereert die bij je merk passen?", opties: ["Vraag Claude altijd om 'mooie' designs", "Geef brand guidelines, kleurschema's en voorbeelden mee in de prompt", "Gebruik altijd hetzelfde model", "Laat Claude zelf de stijl bepalen"], correct: 1, uitleg: "Consistentie komt van duidelijke brand guidelines in de prompt: kleuren, typografie, stijlprincipes en concrete voorbeelden." },
      { vraag: "Wat is de meest effectieve workflow van prompt naar productie?", opties: ["Één perfecte prompt schrijven en direct deployen", "Itereren: ruwe output → verfijning → beoordeling → productie-ready versie", "Altijd handmatig de AI-output herschrijven", "Meerdere modellen parallel gebruiken en de beste kiezen"], correct: 1, uitleg: "Iteratie is key: begin met een ruwe versie, verfijn op basis van feedback en beoordeling, totdat de output productierijp is." },
      { vraag: "Hoe verwerk je gebruikersfeedback effectief in Claude-prompts?", opties: ["Negeer gebruikersfeedback — Claude weet beter", "Vertaal concrete feedback naar specifieke prompt-aanpassingen", "Vraag Claude zelf de feedback te interpreteren zonder context", "Gebruik feedback alleen voor de volgende versie, niet voor lopende iteraties"], correct: 1, uitleg: "Concrete feedback vertalen naar prompt-aanpassingen is essentieel: hoe specifieker de instructie, hoe beter Claude aansluit op wensen." },
      { vraag: "Welke informatie helpt Claude het meest bij het genereren van productie-waardige UI?", opties: ["Alleen de naam van het product", "Target audience, use case, technische constraints en stijlrichtlijnen", "Een lijst van gewenste features", "De bestaande codebase zonder uitleg"], correct: 1, uitleg: "Claude heeft context nodig: wie gebruikt het, waarvoor, welke technische beperkingen zijn er en wat is de gewenste look-and-feel." },
    ],
  },
  {
    id: 8,
    titel: "Building with Claude on Google Cloud",
    ondertitel: "Claude integreren in Google Cloud-infrastructuur: Vertex AI, GKE en serverless oplossingen",
    youtubeId: "l8fxVYIP4HQ",
    duur: "24:38",
    track: "cloud",
    niveau: "Gemiddeld",
    leerdoelen: [
      "Weten hoe je Claude toegankelijk maakt via Google Cloud Vertex AI",
      "Leren hoe je Claude-gebaseerde applicaties deployet op Google Cloud infrastructuur",
      "Begrijpen hoe Google Cloud services samengaan met Claude voor enterprise-toepassingen",
      "Best practices kennen voor veiligheid en compliance bij Claude op Google Cloud",
    ],
    quiz: [
      { vraag: "Via welk Google Cloud-platform is Claude beschikbaar voor enterprise-gebruik?", opties: ["Google AI Studio", "Vertex AI", "BigQuery ML", "Google Colab Enterprise"], correct: 1, uitleg: "Claude is beschikbaar via Google Cloud Vertex AI, waarmee enterprise-teams Claude kunnen integreren met bestaande GCP-infrastructuur." },
      { vraag: "Welk voordeel biedt het hosten van Claude via Google Cloud ten opzichte van directe API-aanroepen?", opties: ["Lagere tokenprijzen", "Integratie met GCP IAM, VPC en compliance-tools voor enterprise security", "Hogere response snelheid", "Toegang tot exclusieve Claude-versies"], correct: 1, uitleg: "Via GCP krijg je enterprise-grade security: VPC-integratie, IAM-toegangsbeheer en compliance-certificeringen." },
      { vraag: "Welk GCP-product is het meest geschikt voor het draaien van een Claude-gebaseerde API-backend?", opties: ["Google Sheets API", "Cloud Run of GKE voor containerized workloads", "Google Slides", "Firebase Hosting"], correct: 1, uitleg: "Cloud Run (serverless) of GKE (Kubernetes) zijn ideaal voor het draaien van Claude-gebaseerde API-backends op GCP." },
      { vraag: "Hoe handel je authenticatie af bij Claude-aanroepen vanuit Google Cloud?", opties: ["API-sleutels hardcoden in de broncode", "Service accounts en Secret Manager voor veilig beheer van credentials", "Publieke endpoints zonder authenticatie", "OAuth 2.0 voor elke afzonderlijke API-call"], correct: 1, uitleg: "Best practice: gebruik GCP Service Accounts en Secret Manager — geen hardgecodeerde sleutels, wel gecontroleerde toegang." },
      { vraag: "Welke GCP-dienst helpt bij het monitoren van Claude-API-gebruik en kosten?", opties: ["Google Analytics", "Cloud Monitoring en Cloud Billing met quota-alerts", "Google Search Console", "Firebase Performance Monitoring"], correct: 1, uitleg: "Cloud Monitoring voor latency/errors en Cloud Billing met alerts voor kostenbeheersing zijn essentieel bij productie-gebruik." },
    ],
  },
  {
    id: 9,
    titel: "Building signals that trade themselves",
    ondertitel: "Hoe Claude wordt ingezet voor autonome trading-agents die marktsignalen genereren en uitvoeren",
    youtubeId: "EOg4gY0Yln0",
    duur: "20:45",
    track: "agents",
    niveau: "Gevorderd",
    leerdoelen: [
      "Begrijpen hoe autonome trading-agents worden gebouwd met Claude",
      "Leren hoe je betrouwbare marktdata-signalen genereert met AI",
      "Inzien welke veiligheidsmaatregelen nodig zijn bij autonome financiële agents",
      "De architectuur kennen van een end-to-end AI trading workflow",
    ],
    quiz: [
      { vraag: "Wat is het kernconcept van 'signals that trade themselves'?", opties: ["Handmatig trading-algoritmen schrijven", "Autonome AI-agents die marktsignalen identificeren en zelfstandig uitvoeren", "Geautomatiseerde rapportages over markttrades", "Claude als chatbot voor beleggers"], correct: 1, uitleg: "Het concept gaat over volledig autonome agents die de hele cyclus doorlopen: dataverzameling → signaaldetectie → uitvoering." },
      { vraag: "Welke veiligheidsmaatregel is cruciaal bij autonome financiële agents?", opties: ["Snelheid boven alles", "Duidelijke limieten, kill-switches en menselijke goedkeuring voor grote transacties", "Volledig autonome uitvoering zonder menselijke interventie", "Gebruik van publieke data zonder validatie"], correct: 1, uitleg: "Veiligheid vraagt harde grenzen: maximale transactiegroottes, kill-switches en escalatieregels voor menselijk toezicht." },
      { vraag: "Welke data-bronnen zijn het meest waardevol voor AI-trading-signalen?", opties: ["Alleen historische koersdata", "Combinatie van marktdata, nieuws, alternatieve data en sentiment-analyse", "Alleen social media-posts", "Uitsluitend overheidsstatistieken"], correct: 1, uitleg: "De sterkste signalen komen uit gecombineerde bronnen: marktdata, nieuws, alternatieve data en sentimentanalyse samen." },
      { vraag: "Hoe valideert je een AI-trading-agent vóór live deployment?", opties: ["Direct live gaan en real-time monitoren", "Backtesting op historische data, paper trading en gefaseerde live-introductie", "De agent zichzelf laten valideren", "Validatie is niet nodig bij AI-agents"], correct: 1, uitleg: "Validatie gaat stapsgewijs: backtesting op historische data, paper trading met real-time data, en pas daarna gefaseerd live." },
      { vraag: "Wat is de rol van Claude in een trading-agent-workflow?", opties: ["Als enige beslisser voor alle trades", "Als redeneer-engine die signalen interpreteert en gestructureerde outputs geeft voor executie", "Alleen voor documentatie", "Als database voor marktdata"], correct: 1, uitleg: "Claude fungeert als redeneer-engine: het interpreteert complexe marktdata en genereert gestructureerde beslissingen die een executielaag uitvoert." },
    ],
  },
  {
    id: 10,
    titel: "Picking the right model",
    ondertitel: "Hoe je het juiste Claude-model kiest voor elke taak op basis van kosten, snelheid en kwaliteit",
    youtubeId: "P0uMXS6emHA",
    duur: "31:40",
    track: "platform",
    niveau: "Beginner",
    leerdoelen: [
      "De verschillen begrijpen tussen Claude Haiku, Sonnet en Opus",
      "Weten hoe je de juiste trade-off maakt tussen kosten, snelheid en kwaliteit",
      "Leren hoe je model-selectie integreert in je applicatiearchitectuur",
      "Best practices kennen voor het testen van modelkeuzes in productie",
    ],
    quiz: [
      { vraag: "Welk Claude-model is het meest geschikt voor eenvoudige, snelle taken met lage latency?", opties: ["Claude Opus", "Claude Sonnet", "Claude Haiku", "Ze zijn allemaal even snel"], correct: 2, uitleg: "Claude Haiku is geoptimaliseerd voor snelheid en efficiëntie — ideaal voor eenvoudige taken waar latency belangrijk is." },
      { vraag: "Wanneer kies je voor Claude Opus boven Sonnet of Haiku?", opties: ["Altijd, omdat het het beste model is", "Bij complexe redeneer-taken, nuanceerde analyse of creatieve taken die maximale kwaliteit vereisen", "Bij taken met een strak tijdsbudget", "Bij grote hoeveelheden eenvoudige verzoeken"], correct: 1, uitleg: "Opus is voor de zwaarste taken: complexe analyse, nuanceerde redenering of creativiteit waarbij kwaliteit boven snelheid gaat." },
      { vraag: "Hoe test je welk model het beste werkt voor jouw specifieke use case?", opties: ["Altijd het duurste model kiezen", "A/B testen met representatieve voorbeelden en kwaliteitsmetrics meten", "Het model kiezen op basis van naam", "Alleen op prijs selecteren"], correct: 1, uitleg: "Test met echte use-case voorbeelden: meet kwaliteit, latency en kosten, en kies het model dat de beste balans biedt." },
      { vraag: "Wat is een veelgebruikte strategie voor kostenoptimalisatie bij model-gebruik?", opties: ["Altijd het goedkoopste model gebruiken", "Routing: eenvoudige taken naar Haiku, complexe naar Sonnet of Opus", "Eén model voor alles gebruiken om consistentie te waarborgen", "Modellen combineren in één request"], correct: 1, uitleg: "Model routing stuurt taken naar het meest efficiënte model: Haiku voor simpel, Sonnet voor gemiddeld, Opus voor complex." },
      { vraag: "Hoe beïnvloedt de context-window grootte de modelkeuze?", opties: ["Alle modellen hebben dezelfde context-window", "Bij grote documenten of lange conversaties moet je rekening houden met het context-window per model", "Context-window is niet relevant voor modelkeuze", "Grotere context-windows zijn altijd beter"], correct: 1, uitleg: "Verschillende modellen hebben verschillende context-windows. Bij lange documenten of conversaties is dit een relevante factor in je keuze." },
    ],
  },
  {
    id: 11,
    titel: "Memory and dreaming for self learning agents",
    ondertitel: "Hoe agents geheugen opbouwen en zelflerend worden door gesimuleerde 'droom'-cycli",
    youtubeId: "IGo225tfF2I",
    duur: "21:34",
    track: "agents",
    niveau: "Gevorderd",
    leerdoelen: [
      "Begrijpen hoe langetermijngeheugen werkt in AI-agents",
      "Leren wat 'dreaming' betekent als mechanisme voor agent-leren",
      "Architectuurpatronen kennen voor geheugenopslag en -retrieval in agents",
      "Inzien hoe agents zichzelf kunnen verbeteren door ervaringsopbouw",
    ],
    quiz: [
      { vraag: "Wat bedoelt men met 'dreaming' voor AI-agents?", opties: ["Agents die creatieve verhalen genereren", "Een offline fase waarin agents eerdere ervaringen verwerken om toekomstige prestaties te verbeteren", "Random gedrag buiten werktijden", "Slaapstand voor energiebesparing"], correct: 1, uitleg: "Dreaming is een offline verwerkingsfase: de agent analyseert eerdere ervaringen, destilleert lessen en verbetert zijn aanpak." },
      { vraag: "Welk type geheugen is het meest geschikt voor een agent die honderden taken uitvoert?", opties: ["Alle data in het context window bewaren", "Een vectordatabase voor semantisch doorzoekbaar langetermijngeheugen", "Een hardgecodeerde kennisbase", "Elk gesprek volledig herstarten"], correct: 1, uitleg: "Vectordatabases laten agents semantisch relevant geheugen ophalen zonder het volledige context window te vullen." },
      { vraag: "Hoe leert een self-learning agent van eerdere fouten?", opties: ["Door altijd dezelfde aanpak te herhalen", "Door ervaringen op te slaan, te analyseren en aanpakken aan te passen op basis van uitkomsten", "Door menselijke feedback handmatig in te voeren", "Agents kunnen niet leren van fouten"], correct: 1, uitleg: "Self-learning agents slaan ervaringen op, analyseren successen en mislukkingen, en passen hun strategie iteratief aan." },
      { vraag: "Wat is een uitdaging bij langetermijngeheugen in agents?", opties: ["Te weinig data opslaan", "Relevante herinneringen selecteren zonder irrelevante ruis te introduceren", "Geheugen te snel wissen", "Alle herinneringen even zwaar wegen"], correct: 1, uitleg: "De uitdaging is relevantie: het agent moet de meest relevante herinneringen ophalen en niet overspoeld worden door irrelevante data." },
      { vraag: "Welke architectuur maakt het makkelijkst om agents te laten leren van collectieve ervaringen?", opties: ["Geïsoleerde agents zonder data-deling", "Gedeeld geheugen of kennis-distillatie waarbij agents van elkaars ervaringen leren", "Agents die alleen op hun eigen context draaien", "Handmatige kennisoverdracht door mensen"], correct: 1, uitleg: "Gedeeld geheugen of kennisdistillatie laat agents profiteren van collectieve ervaringen, wat het leren versnelt." },
    ],
  },
  {
    id: 12,
    titel: "What legal agents inherit from coding agents: Lessons from Legora",
    ondertitel: "Hoe ervaringen uit coding-agents direct toepasbaar zijn op juridische AI-agents bij Legora",
    youtubeId: "nho1YAEPuwA",
    duur: "28:43",
    track: "agents",
    niveau: "Gemiddeld",
    leerdoelen: [
      "Leren welke agent-principes universeel toepasbaar zijn over domeinen heen",
      "Begrijpen hoe Legora juridische agents bouwt op basis van coding-agent-patronen",
      "Inzien welke unieke uitdagingen juridische agents stellen aan nauwkeurigheid en betrouwbaarheid",
      "Best practices kennen voor het overstappen van één agent-domein naar een ander",
    ],
    quiz: [
      { vraag: "Welk principe erven juridische agents direct van coding-agents?", opties: ["Syntaxcontrole", "Iteratieve taakuitvoering met verificatiestappen en menselijk toezicht", "Code-compilatie", "Snelheid boven nauwkeurigheid"], correct: 1, uitleg: "De kern — iteratieve uitvoering, verificatie en menselijk toezicht — werkt in elk domein, ook het juridische." },
      { vraag: "Wat maakt juridische agents uitdagender dan coding-agents?", opties: ["Juridische taal is eenvoudiger", "Hogere eisen aan nauwkeurigheid en het ontbreken van automatische verificatiemethodes", "Juridische agents hebben minder context nodig", "Juridische taken zijn eenvoudiger af te bakenen"], correct: 1, uitleg: "Juridisch werk heeft nul tolerantie voor fouten en mist de automatische verificatie die bij code (compileren, testen) standaard is." },
      { vraag: "Hoe waarborgt Legora de betrouwbaarheid van zijn juridische agents?", opties: ["Volledig autonome agents zonder controle", "Combinatie van AI-output met menselijke review en duidelijke bronvermelding", "Alleen historische precedenten gebruiken", "Uitsluitend wetten letterlijk citeren"], correct: 1, uitleg: "Legora combineert AI-analyse met menselijke review en transparante bronvermelding — essentieel in een domein waar fouten grote gevolgen hebben." },
      { vraag: "Welke les uit coding-agents is het waardevolst voor juridische agents?", opties: ["Deployment-snelheid", "Plan Mode: eerst de aanpak uitstippelen vóór uitvoering", "Code-style conventies", "Automatisch testen van edge cases"], correct: 1, uitleg: "Plan Mode — eerst een aanpak formuleren vóór je handelt — is even waardevol in juridisch werk als in software development." },
      { vraag: "Hoe past Legora agent-output aan de behoeften van juristen aan?", opties: ["Door ruwe AI-output direct aan juristen te geven", "Door output te structureren met bronverwijzingen, confidence scores en duidelijke onzekerheden", "Door alle onzekerheden te verbergen", "Door alleen bevindingen te tonen zonder uitleg"], correct: 1, uitleg: "Juristen hebben gestructureerde output nodig: duidelijke bronnen, confidence scores en expliciete onzekerheden om goed te kunnen beoordelen." },
    ],
  },
  {
    id: 13,
    titel: "How to get to production faster with Claude Managed Agents",
    ondertitel: "Versnelde deployment van agents met Claude Managed Agents: minder infrastructuur, meer focus op logica",
    youtubeId: "zenIB7XLZxQ",
    duur: "29:04",
    track: "agents",
    niveau: "Gemiddeld",
    leerdoelen: [
      "Begrijpen wat Claude Managed Agents zijn en hoe ze deployment vereenvoudigen",
      "Leren hoe je infrastructuurcomplexiteit reduceert met Managed Agents",
      "Weten hoe je sneller van prototype naar productie gaat met Managed Agents",
      "De trade-offs kennen tussen Managed Agents en zelf-gehoste agent-infrastructuur",
    ],
    quiz: [
      { vraag: "Wat is het grootste voordeel van Claude Managed Agents voor development teams?", opties: ["Lagere AI-kosten", "Minder infrastructuur-overhead: teams focussen op business-logica in plaats van agent-plumbing", "Hogere model-kwaliteit", "Betere code-completion in IDE"], correct: 1, uitleg: "Managed Agents nemen infrastructuurtaken over (orkestratie, state, toolbeheer), zodat teams zich kunnen focussen op wat hun agent doet." },
      { vraag: "Hoe versnellen Managed Agents het pad naar productie?", opties: ["Door code automatisch te genereren", "Door standaard infrastructuurcomponenten te bieden die je anders zelf zou bouwen", "Door de agent sneller te laten redeneren", "Door testing automatisch uit te voeren"], correct: 1, uitleg: "Managed Agents bieden kant-en-klare infrastructuur: state management, tool-aanroepen, error handling — dingen die normaal weken kosten om te bouwen." },
      { vraag: "Wanneer is zelf-gehoste agent-infrastructuur beter dan Managed Agents?", opties: ["Nooit — Managed Agents zijn altijd beter", "Bij zeer specifieke compliance-vereisten, volledige controle over data of unieke infrastructuur-integraties", "Bij kleine agents", "Bij agents met weinig tools"], correct: 1, uitleg: "Zelf-hosten biedt meer controle — relevant bij strikte compliance-vereisten, data-soevereiniteit of unieke infrastructuur-integraties." },
      { vraag: "Welke functie van Managed Agents is het meest waardevol voor productie-stabiliteit?", opties: ["Automatische prompt-optimalisatie", "Ingebouwde error handling, retry-logica en state-persistentie", "Snellere GPU-toegang", "Automatische model-upgrades"], correct: 1, uitleg: "Productie-stabiliteit vraagt foutafhandeling en herstart-mogelijkheden. Managed Agents hebben dit ingebouwd, zonder dat je het zelf hoeft te bouwen." },
      { vraag: "Hoe test je een agent gebouwd met Claude Managed Agents vóór productie?", opties: ["Direct live gaan en problemen oplossen als ze optreden", "Lokaal met gemockte tools, daarna staging-omgeving met echte integraties", "Alleen unit tests schrijven voor de prompt", "Vertrouwen op Anthropic's eigen tests"], correct: 1, uitleg: "Test gelaagd: begin lokaal met mocks, daarna in een staging-omgeving met echte integraties — zo vind je problemen vóór productie." },
    ],
  },
  {
    id: 14,
    titel: "Build a production-ready agent with Claude Managed Agents",
    ondertitel: "Stap-voor-stap een robuuste, productie-waardige agent bouwen met Claude Managed Agents",
    youtubeId: "jWWsLe4Gh5Y",
    duur: "27:23",
    track: "agents",
    niveau: "Gevorderd",
    leerdoelen: [
      "Een volledig productie-waardige agent opzetten met Claude Managed Agents",
      "Tools, geheugen en orkestratie correct configureren",
      "Leren hoe je monitoring en observability inricht voor een productie-agent",
      "Best practices kennen voor veiligheid en foutafhandeling in productie-agents",
    ],
    quiz: [
      { vraag: "Wat zijn de drie kernelementen van een productie-waardige agent?", opties: ["Snelheid, kosten, populariteit", "Betrouwbare tool-integratie, robuuste foutafhandeling en observability", "Mooie UI, snelle responses, lage kosten", "Veel tools, grote context, hoge kwaliteit prompts"], correct: 1, uitleg: "Productie-agents vereisen: tools die betrouwbaar werken, foutafhandeling die graceful degradeert, en observability om problemen te detecteren." },
      { vraag: "Hoe configureer je tools correct in Claude Managed Agents?", opties: ["Tools hoeven niet geconfigureerd te worden", "Door tool-schema's met duidelijke beschrijvingen te definiëren en foutgevallen te specificeren", "Door alle tools tegelijk aan te roepen", "Door tools in de prompt te beschrijven"], correct: 1, uitleg: "Goed geconfigureerde tools hebben duidelijke schema's en beschrijvingen, zodat Claude begrijpt wanneer en hoe ze te gebruiken." },
      { vraag: "Welke monitoring is essentieel voor een productie-agent?", opties: ["Alleen error logs", "Latency, succesratio, tool-gebruik, kosten en gebruikersgedrag in combinatie", "Alleen kostenbewaking", "Alleen het bijhouden van het aantal requests"], correct: 1, uitleg: "Volledige observability vraagt meerdere metrics: latency, succesratio's, tool-aanroepen, kosten en gebruikspatronen." },
      { vraag: "Hoe zorg je dat een agent gracefully faalt bij een tool-fout?", opties: ["De agent laten crashen en herstarten", "Retry-logica met exponential backoff en fallback-gedrag zonder de gebruiker te blokkeren", "De fout altijd aan de gebruiker tonen", "Alle tools uitschakelen bij een fout"], correct: 1, uitleg: "Graceful degradation: probeer opnieuw met backoff, val terug op alternatieven en communiceer duidelijk met de gebruiker als het mislukt." },
      { vraag: "Hoe valideer je dat je agent correct gedraagt in productie?", opties: ["Vertrouwen op gebruikersmeldingen van problemen", "Geautomatiseerde monitoring met alerts, periodieke shadow tests en regelmatige output-reviews", "Alleen bij grote updates testen", "Eén keer testen vóór launch is voldoende"], correct: 1, uitleg: "Continu valideren: geautomatiseerde alerts voor afwijkingen, shadow tests om gedrag te controleren en regelmatige output-reviews." },
    ],
  },
  {
    id: 15,
    titel: "The thinking lever",
    ondertitel: "Hoe uitgebreide redeneerkapaciteit (extended thinking) van Claude te benutten voor complexe problemen",
    youtubeId: "T7KqH7kYnE4",
    duur: "21:18",
    track: "claude-code",
    niveau: "Gemiddeld",
    leerdoelen: [
      "Begrijpen wat 'extended thinking' is en wanneer je het inzet",
      "Leren hoe je de thinking-capaciteit van Claude activeert en stuurt",
      "Weten voor welke types problemen extended thinking de grootste meerwaarde biedt",
      "De trade-offs kennen tussen thinking-diepte, kosten en latency",
    ],
    quiz: [
      { vraag: "Wat is 'extended thinking' in Claude?", opties: ["Langere response-tijden", "Een modus waarbij Claude expliciet redeneert en zijn denkstappen toont vóór het antwoord", "Gebruik van een groter model", "Meerdere agents tegelijk inzetten"], correct: 1, uitleg: "Extended thinking laat Claude expliciet redeneren — de denkstappen zijn zichtbaar en leiden tot nauwkeurigere antwoorden op complexe problemen." },
      { vraag: "Voor welk type probleem levert extended thinking de meeste meerwaarde?", opties: ["Eenvoudige feitenopzoekvragen", "Complexe meerstappe problemen die diepgaande redenering vereisen", "Snelle code-aanvulling", "Korte samenvattingen van tekst"], correct: 1, uitleg: "Extended thinking schittert bij complexe problemen: wiskundig redeneren, planningsvraagstukken of situaties met meerdere afwegingen." },
      { vraag: "Wat is het nadeel van extended thinking vergeleken met standaard Claude-gebruik?", opties: ["Lagere kwaliteit", "Hogere kosten en meer latency door de extra redeneer-tokens", "Minder accurate antwoorden", "Werkt alleen in code-omgevingen"], correct: 1, uitleg: "Extended thinking genereert extra redeneer-tokens, wat hogere kosten en meer latency betekent — acceptabel voor complexe taken, niet voor eenvoudige." },
      { vraag: "Hoe activeer je extended thinking via de Claude API?", opties: ["Door 'think harder' in de prompt te zetten", "Via een specifieke API-parameter die extended thinking inschakelt", "Door een groter model te kiezen", "Extended thinking is altijd actief"], correct: 1, uitleg: "Extended thinking wordt ingeschakeld via een API-parameter — zo kun je per request kiezen wanneer de extra redeneerdiepte de kosten waard is." },
      { vraag: "Hoe gebruik je extended thinking het meest efficiënt in productie?", opties: ["Altijd inschakelen voor alle requests", "Selectief inzetten voor complexe beslissingen en standaard Claude voor eenvoudige taken", "Nooit gebruiken vanwege de kosten", "Alleen gebruiken in development, niet in productie"], correct: 1, uitleg: "Efficiënt gebruik = selectief: schakel extended thinking in waar complexiteit het rechtvaardigt, gebruik standaard Claude voor de rest." },
    ],
  },
  {
    id: 16,
    titel: "How Lovable vibecodes production software at scale",
    ondertitel: "Hoe Lovable op grote schaal AI-native software bouwt met vibe coding principes",
    youtubeId: "mhW-XXnDFSU",
    duur: "31:11",
    track: "engineering",
    niveau: "Gemiddeld",
    leerdoelen: [
      "Begrijpen wat 'vibe coding' op productieschaal betekent bij Lovable",
      "Leren hoe Lovable kwaliteits- en schaalbaarheidsuitdagingen aanpakt bij AI-gegenereerde code",
      "Inzien welke processen en tooling nodig zijn voor AI-native software in productie",
      "Best practices kennen voor het handhaven van codekwaliteit bij vibe coding",
    ],
    quiz: [
      { vraag: "Wat onderscheidt Lovable's aanpak van standaard vibe coding?", opties: ["Ze gebruiken geen AI", "Ze passen vibe coding toe op productieschaal met kwaliteitsprocessen en geautomatiseerde checks", "Ze schrijven alle code handmatig na AI-generatie", "Ze gebruiken uitsluitend open-source modellen"], correct: 1, uitleg: "Lovable schaalt vibe coding naar productie door kwaliteitsprocessen, geautomatiseerde tests en menselijke review te combineren met AI-generatie." },
      { vraag: "Hoe handhaaft Lovable codekwaliteit bij grootschalig AI-gegenereerde code?", opties: ["Door alleen kleine stukken code te genereren", "Automatische linting, testing, code reviews en architecturale guardrails", "Door AI-code nooit te reviewen — vertrouwen is sleutel", "Door elk bestand handmatig te herschrijven"], correct: 1, uitleg: "Kwaliteitshandhaving vereist meerdere lagen: automatische checks, gestandaardiseerde reviews en architecturale grenzen die AI niet mag overschrijden." },
      { vraag: "Wat is de grootste technische uitdaging bij vibe coding op schaal?", opties: ["Te veel code genereren", "Consistentie en onderhoudbaarheid van AI-gegenereerde code over een groeiende codebase", "Te weinig features beschikbaar in de modellen", "De hoge kosten van API-aanroepen"], correct: 1, uitleg: "Op schaal wordt consistentie de uitdaging: hoe zorg je dat AI-gegenereerde code over honderden modules onderhoudsbaar blijft?" },
      { vraag: "Welke rol speelt menselijke review bij Lovable's vibe coding workflow?", opties: ["Geen — AI is volledig autonoom", "Architecturale beslissingen, kwaliteitsbeoordeling en goedkeuring van kritieke wijzigingen", "Alleen voor design, niet voor code", "Alleen voor documentatie"], correct: 1, uitleg: "Mensen focussen op wat AI niet goed kan: architecturale afwegingen, beoordeling van kritieke beslissingen en kwaliteitszorg op hoog niveau." },
      { vraag: "Hoe schaalt Lovable de development capaciteit met AI?", opties: ["Door minder engineers aan te nemen", "Door AI in te zetten voor implementatie zodat engineers zich richten op architectuur en productrichting", "Door engineers te vervangen door AI", "Door alle features naar klanten te outsourcen"], correct: 1, uitleg: "AI neemt implementatiewerk over, waardoor engineers meer kunnen richten op architectuur, productrichting en kwaliteitszorg — de multiplier-factor." },
    ],
  },
  {
    id: 17,
    titel: "Building AI-native at enterprise scale",
    ondertitel: "Hoe monday.com, Doctolib en Delivery Hero AI-native bouwen op enterprise schaal",
    youtubeId: "XFaeIbL-lvE",
    duur: "29:11",
    track: "engineering",
    niveau: "Gevorderd",
    leerdoelen: [
      "Leren hoe grote enterprise-bedrijven AI-native adopteren bij schaal",
      "Begrijpen welke governance en compliance-uitdagingen enterprise AI-adoptie stelt",
      "Inzien hoe monday.com, Doctolib en Delivery Hero hun AI-strategie uitvoeren",
      "Best practices kennen voor enterprise-brede AI-rollout bij honderden engineers",
    ],
    quiz: [
      { vraag: "Wat is de grootste uitdaging bij enterprise-brede AI-adoptie?", opties: ["Technische integratie", "Governance, compliance en het managen van organisatorische verandering op grote schaal", "Te weinig AI-tools beschikbaar", "Kosten van API-gebruik"], correct: 1, uitleg: "Bij enterprise gaat het zelden om technologie alleen — governance, compliance en change management zijn de echte uitdagingen." },
      { vraag: "Welke aanpak kiezen enterprise-bedrijven voor een gecontroleerde AI-rollout?", opties: ["Direct alle engineers AI-tools geven zonder beleid", "Gefaseerde rollout met pilots, duidelijke richtlijnen en training", "Wachten tot concurrenten beginnen", "Alleen extern inhuren van AI-specialisten"], correct: 1, uitleg: "Gecontroleerde rollout: begin met pilots, leer wat werkt, stel duidelijke richtlijnen op en schaal op met training en governance." },
      { vraag: "Hoe gaan bedrijven zoals Doctolib (zorg) om met compliance bij AI-gebruik?", opties: ["Compliance negeren en snel innoveren", "Strikte data-governance, privacy-by-design en samenwerking met compliance-teams", "Uitsluitend on-premise AI gebruiken", "AI alleen in niet-productie omgevingen inzetten"], correct: 1, uitleg: "In gereguleerde sectoren is compliance geen afterthought: privacy-by-design, data-governance en vroege betrokkenheid van compliance zijn essentieel." },
      { vraag: "Wat is de ROI-maatstaf die enterprise-bedrijven gebruiken voor AI-adoptie?", opties: ["Aantal AI-gegenereerde regels code", "Delivery snelheid, bug-reductie, developer-tevredenheid en time-to-market verbetering", "Hoeveel engineers AI dagelijks gebruiken", "Kostenbesparing op externe contractors"], correct: 1, uitleg: "Enterprise ROI wordt gemeten aan output: snellere delivery, minder bugs, hogere developer-tevredenheid en kortere time-to-market." },
      { vraag: "Welke interne rol is cruciaal voor succesvolle enterprise AI-adoptie?", opties: ["Een AI-dictator die alle beslissingen neemt", "AI-champions per team die adoption faciliteren en kennis delen", "Extern consultancybureau dat alles regelt", "De CEO die persoonlijk alle AI-tools goedkeurt"], correct: 1, uitleg: "AI-champions per team — engineers die enthousiast zijn, kennis delen en collega's helpen — zijn de sleutel tot organische adoptie op schaal." },
    ],
  },
  {
    id: 18,
    titel: "From one person to 80: Scaling a hypergrowth engineering org with Claude Code",
    ondertitel: "Hoe een snel groeiend bedrijf van 1 naar 80 engineers schaalde met Claude Code als kern",
    youtubeId: "VueeyKcquoA",
    duur: "23:59",
    track: "engineering",
    niveau: "Gemiddeld",
    leerdoelen: [
      "Leren hoe je engineering-processen schaalt terwijl je Claude Code centraal houdt",
      "Begrijpen welke uitdagingen hypergrowth stelt aan AI-native development",
      "Inzien hoe je kennisdeling en standaardisering behoudt bij snelle groei",
      "Best practices kennen voor onboarding van engineers in een AI-native omgeving",
    ],
    quiz: [
      { vraag: "Wat is de grootste uitdaging bij het schalen van een AI-native engineering org?", opties: ["Het aanschaffen van meer GPU's", "Consistentie en kennisdeling bewaren terwijl de teamgrootte snel toeneemt", "Het vinden van engineers die geen AI kennen", "De kosten van Claude Code-licenties"], correct: 1, uitleg: "Bij hypergrowth dreigt kennisversnippering: je moet actief investeren in standaarden, documentatie en kennisdeling om consistent te blijven." },
      { vraag: "Hoe zorg je voor effectieve onboarding van nieuwe engineers in een AI-native org?", opties: ["Nieuwe engineers zelf laten uitvogelen hoe AI-tools werken", "Gestructureerde AI-tooling onboarding met CLAUDE.md templates, workflows en buddy-systeem", "Alleen senior engineers AI-tools laten gebruiken", "Onboarding overslaan — Claude Code is intuïtief genoeg"], correct: 1, uitleg: "Goede onboarding in een AI-native org omvat: AI-tool-training, gestandaardiseerde CLAUDE.md-bestanden en een buddy die AI-werkwijzen overbrengt." },
      { vraag: "Welk fundament is het meest waardevol bij groei van 1 naar 80 engineers?", opties: ["Veel engineers inhuren die AI sceptisch zijn", "Sterke standaarden, gedeelde tooling en gedocumenteerde AI-workflows vanaf het begin", "Elke engineer zelf laten beslissen hoe ze AI inzetten", "Geen standaarden — flexibiliteit is sleutel bij groei"], correct: 1, uitleg: "Vroeg investeren in standaarden en documentatie betaalt zich terug: elke nieuwe engineer kan snel productief zijn zonder ad-hoc uitleg." },
      { vraag: "Hoe verandert de rol van de founding engineer als het team groeit van 1 naar 80?", opties: ["Ze blijven hetzelfde doen", "Van hoofduitvoerder naar architect, cultuurdrager en kennisverspreider", "Ze verlaten het bedrijf", "Ze worden puur manager zonder technische rol"], correct: 1, uitleg: "De founding engineer evolueert van uitvoerder naar architect en cultuurdrager — ze zetten de standaarden die het groeiende team volgt." },
      { vraag: "Hoe behoud je de voordelen van Claude Code bij een groot team?", opties: ["Iedereen dezelfde prompts laten gebruiken", "Gedeelde CLAUDE.md bestanden, peer reviews van AI-gebruik en regelmatige best-practice-sessies", "Claude Code beperken tot senior engineers", "Één centrale person alle Claude Code-sessies laten uitvoeren"], correct: 1, uitleg: "Gedeelde standards (CLAUDE.md), peer learning en regelmatige kennissessies houden het team collectief scherp in AI-gebruik." },
    ],
  },
  {
    id: 19,
    titel: "Build a proactive agent workflow with Claude Code",
    ondertitel: "Een Claude Code-gebaseerde agent bouwen die proactief taken initieert in plaats van alleen te reageren",
    youtubeId: "eSP7PLTXNy8",
    duur: "22:04",
    track: "claude-code",
    niveau: "Gevorderd",
    leerdoelen: [
      "Begrijpen wat het verschil is tussen reactieve en proactieve agent-workflows",
      "Leren hoe je Claude Code inzet als kern van een proactieve taak-agent",
      "Een werkende proactieve agent-workflow ontwerpen en implementeren",
      "Veiligheidsoverwegingen kennen voor proactieve agents die zelfstandig handelen",
    ],
    quiz: [
      { vraag: "Wat maakt een agent 'proactief' versus 'reactief'?", opties: ["Proactieve agents zijn sneller", "Proactieve agents initiëren taken zelfstandig op basis van triggers, zonder te wachten op gebruikersinput", "Reactieve agents zijn intelligenter", "Er is geen verschil — het zijn synoniemen"], correct: 1, uitleg: "Proactieve agents monitoren triggers en handelen zelfstandig — ze wachten niet op elke opdracht maar nemen initiatief binnen gedefinieerde grenzen." },
      { vraag: "Welk type trigger is het meest geschikt voor een proactieve Claude Code-agent?", opties: ["Willekeurige tijdstippen", "Gedefinieerde events: code-commits, test-failures, deployment-events of geplande tijdstippen", "Handmatige gebruikersinput", "Elke wijziging in elk bestand"], correct: 1, uitleg: "Goede triggers zijn voorspelbaar en betekenisvol: code-events, faalberichten of geplande cron-taken geven duidelijke aanleiding voor actie." },
      { vraag: "Welke veiligheidsmaatregel is cruciaal voor een proactieve agent?", opties: ["Zo min mogelijk acties uitvoeren", "Duidelijk gedefinieerde scope van wat de agent MAG doen, met escalatie voor twijfelgevallen", "De agent nooit bestanden laten aanpassen", "Alle acties handmatig goedkeuren"], correct: 1, uitleg: "Proactieve agents moeten scherpe grenzen hebben: wat ze mogen, wat niet, en wanneer ze escaleren naar een mens." },
      { vraag: "Hoe zorg je dat een proactieve agent observeerbaar is in productie?", opties: ["Vertrouwen op de agent zelf om problemen te melden", "Gedetailleerde logging van elke actie, beslissing en resultaat met alerting bij afwijkingen", "Alleen end-result logging", "Geen logging om performance te optimaliseren"], correct: 1, uitleg: "Observability is cruciaal: log elke actie en beslissing, stel alerts in voor afwijkend gedrag en maak het gedrag transparant voor het team." },
      { vraag: "Hoe bouw je vertrouwen op in een proactieve agent voor je hem productie-rechten geeft?", opties: ["Direct productie-rechten geven en fouten afwachten", "Beginnen in observeer-modus (alleen rapporteren), dan read-only acties, dan beperkte schrijfrechten", "De agent door andere engineers laten beoordelen zonder het zelf te testen", "Vertrouwen opbouwen is niet nodig bij Claude Code"], correct: 1, uitleg: "Bouw rechten gefaseerd op: begin met alleen observeren, daarna read-only, dan beperkt schrijven — vertrouwen groeit met bewezen gedrag." },
    ],
  },
  {
    id: 20,
    titel: "Build AI agents using Claude in Microsoft Foundry",
    ondertitel: "Claude-gebaseerde agents bouwen en deployen via Microsoft Azure AI Foundry",
    youtubeId: "TQd_YQvydVg",
    duur: "34:16",
    track: "cloud",
    niveau: "Gemiddeld",
    leerdoelen: [
      "Leren hoe Claude beschikbaar is via Microsoft Azure AI Foundry",
      "Begrijpen hoe je Claude-agents integreert met Microsoft Azure-diensten",
      "Weten hoe je enterprise-compliance handelt bij Claude-gebruik via Azure",
      "Een end-to-end agent-workflow bouwen op het Azure + Claude platform",
    ],
    quiz: [
      { vraag: "Via welk Microsoft-platform is Claude beschikbaar voor enterprise-gebruik?", opties: ["Azure OpenAI Service", "Microsoft Azure AI Foundry", "Microsoft Teams AI", "Azure Cognitive Services"], correct: 1, uitleg: "Claude is beschikbaar via Microsoft Azure AI Foundry, waarmee bedrijven Claude kunnen integreren in hun bestaande Azure-infrastructuur." },
      { vraag: "Wat is het voordeel van Claude gebruiken via Azure Foundry versus direct via de Anthropic API?", opties: ["Lagere tokenprijzen", "Integratie met Azure AD, compliance-tools en bestaande Azure-security-policies", "Exclusieve toegang tot nieuwe Claude-versies", "Snellere response-tijden"], correct: 1, uitleg: "Via Azure Foundry profiteer je van Azure-native security: Azure AD integratie, compliance-certificeringen en bestaande security-policies." },
      { vraag: "Hoe integreer je Claude-agents met andere Azure-diensten?", opties: ["Dat is niet mogelijk", "Via Azure Functions, Logic Apps en de Azure SDK als orchestratielaag", "Alleen via handmatige API-calls", "Uitsluitend via Azure OpenAI Service als proxy"], correct: 1, uitleg: "Azure Functions, Logic Apps en de Azure SDK bieden een krachtige orchestratielaag om Claude te verbinden met andere Azure-diensten." },
      { vraag: "Welke Azure-dienst gebruik je voor het opslaan van agent-state en geheugen?", opties: ["Azure Blob Storage voor alle state", "Combinatie van Azure Cosmos DB (NoSQL state), Redis (cache) en Blob (bestanden)", "Alleen Azure SQL Database", "State hoeft niet opgeslagen te worden"], correct: 1, uitleg: "Voor agent-state gebruik je de juiste opslag per type data: Cosmos DB voor flexibele state, Redis voor snelle cache, Blob voor bestanden." },
      { vraag: "Hoe monitor je Claude-agent-gedrag in de Azure-omgeving?", opties: ["Uitsluitend via Anthropic's dashboard", "Azure Monitor, Application Insights en custom metrics voor volledige observability", "Handmatig log-bestanden lezen", "Monitoring is niet nodig bij Managed Agents"], correct: 1, uitleg: "Azure Monitor en Application Insights bieden native monitoring: latency, errors, token-gebruik en custom metrics — alles op één plek." },
    ],
  },
  {
    id: 21,
    titel: "Coding is no longer the constraint: Scaling devex to teams and agents at Spotify",
    ondertitel: "Hoe Spotify developer experience schaalt door coding als bottleneck weg te nemen met AI",
    youtubeId: "zFslvuvYifQ",
    duur: "27:37",
    track: "engineering",
    niveau: "Gemiddeld",
    leerdoelen: [
      "Leren hoe Spotify de bottleneck van coderen heeft weggenomen voor development teams",
      "Begrijpen hoe developer experience evolueert in een AI-wereld bij grote schaal",
      "Inzien welke nieuwe bottlenecks ontstaan als coding geen constraint meer is",
      "Best practices kennen voor DevEx-teams die AI-native workflows ondersteunen",
    ],
    quiz: [
      { vraag: "Wat bedoelt Spotify met 'coding is no longer the constraint'?", opties: ["Spotify schrijft geen code meer", "AI-tools maken het schrijven van code zo snel dat andere factoren nu de bottleneck zijn", "Coding is vervangen door no-code tools", "Alleen senior engineers mogen nog coderen"], correct: 1, uitleg: "Door AI-tools zoals Claude Code is de snelheid van coderen dramatisch gestegen — nu zijn planning, review en deployment de nieuwe bottlenecks." },
      { vraag: "Welke bottleneck neemt de plek van coding in nu AI die taak versnelt?", opties: ["Hardware-aanschaf", "Code review, architecturale beslissingen, testing en deployment-processen", "Het vinden van geschikte programmeertalen", "Kantoorruimte voor developers"], correct: 1, uitleg: "Als coderen snel is, wordt alles eromheen de bottleneck: review-capaciteit, architecturale afstemming, testing en deployment-pipelines." },
      { vraag: "Hoe past Spotify de developer experience aan voor AI-native workflows?", opties: ["Door alle tooling te verwijderen die engineers gebruiken", "Door DevEx-teams te richten op het versnellen van review, deployment en testing — niet codering", "Door engineers minder autonomie te geven", "Door te stoppen met interne tooling-ontwikkeling"], correct: 1, uitleg: "Spotify's DevEx-teams verschuiven focus: van tools die helpen met coderen naar tools die review, testing en deployment versnellen." },
      { vraag: "Wat verandert er in de rol van senior engineers bij Spotify door AI?", opties: ["Ze zijn overbodig geworden", "Ze focussen meer op architecturale beslissingen, sturing en kwaliteitsoordelen dan op implementatie", "Ze schrijven meer code dan voorheen", "Ze worden AI-trainers"], correct: 1, uitleg: "Bij Spotify richten seniors zich op hoger-orde werk: architectuur, richting en kwaliteitsoordeel — implementatie is grotendeels naar AI verschoven." },
      { vraag: "Welke metric meet Spotify om de impact van AI op developer productivity te beoordelen?", opties: ["Aantal AI-suggesties geaccepteerd", "DORA metrics: deployment frequency, lead time, change failure rate en time to restore", "Regels code per dag gegenereerd", "Tevredenheidsscores voor AI-tools"], correct: 1, uitleg: "DORA metrics meten echte productiviteitsimpact: hoe snel deploy je, hoe snel herstel je van fouten, hoe betrouwbaar is je pipeline." },
    ],
  },
  {
    id: 22,
    titel: "AI with Claude on AWS: From code to orchestration",
    ondertitel: "Claude integreren in AWS-ecosysteem: van directe API-aanroepen tot volledige agent-orkestratie",
    youtubeId: "5YHIrTYxM3w",
    duur: "19:42",
    track: "cloud",
    niveau: "Gemiddeld",
    leerdoelen: [
      "Weten hoe Claude beschikbaar is via Amazon Bedrock op AWS",
      "Leren hoe je Claude-agents orchestreert met AWS-diensten",
      "Begrijpen hoe je bestaande AWS-infrastructuur combineert met Claude-mogelijkheden",
      "Best practices kennen voor veilige Claude-deployment op AWS",
    ],
    quiz: [
      { vraag: "Via welke AWS-dienst is Claude beschikbaar voor enterprise-gebruik?", opties: ["AWS SageMaker", "Amazon Bedrock", "AWS Lambda AI", "Amazon Comprehend"], correct: 1, uitleg: "Claude is beschikbaar via Amazon Bedrock, de AWS-dienst voor foundation models met enterprise-grade security en compliance." },
      { vraag: "Welk AWS-serverless-product is het meest geschikt voor Claude-gebaseerde API-backends?", opties: ["Amazon EC2", "AWS Lambda voor lichte workloads, ECS/EKS voor zwaardere agent-workflows", "Amazon RDS", "AWS Glue"], correct: 1, uitleg: "Lambda is ideaal voor lichte, event-driven Claude-aanroepen. Voor langlopende agent-workflows gebruik je ECS of EKS voor meer controle." },
      { vraag: "Hoe beheer je API-sleutels veilig bij Claude-gebruik op AWS?", opties: ["Hardcoden in Lambda-environment variables", "AWS Secrets Manager voor veilige opslag en rotatie van credentials", "Opslaan in S3-buckets", "Credentials doorgeven via URL-parameters"], correct: 1, uitleg: "AWS Secrets Manager is de standaard voor credential-beheer op AWS: veilige opslag, automatische rotatie en IAM-toegangscontrole." },
      { vraag: "Welke AWS-dienst gebruik je voor orkestratie van complexe Claude-agent-workflows?", opties: ["AWS S3", "AWS Step Functions voor state machine orchestration van meerstaps agent-workflows", "Amazon SQS alleen", "AWS CloudFormation"], correct: 1, uitleg: "AWS Step Functions biedt state machine orchestration: perfect voor complexe, meerstaps agent-workflows met vertakkingen en foutafhandeling." },
      { vraag: "Hoe monitor je Claude-API-gebruik en kosten op AWS?", opties: ["Handmatig de Anthropic-factuur controleren", "Amazon CloudWatch voor metrics en AWS Cost Explorer voor kostenanalyse", "Alleen via de AWS-console", "Monitoring is niet nodig bij serverless"], correct: 1, uitleg: "CloudWatch geeft real-time metrics (latency, errors) en Cost Explorer toont kostentrends — samen vormen ze volledige observability op AWS." },
    ],
  },
  {
    id: 23,
    titel: "Stop babysitting your agents",
    ondertitel: "Hoe je agents bouwt die zelfstandig werken zonder constante menselijke supervisie",
    youtubeId: "wI0ptqCSL0I",
    duur: "37:07",
    track: "agents",
    niveau: "Gevorderd",
    leerdoelen: [
      "Begrijpen waarom agents vaak te veel toezicht vereisen en hoe je dat doorbreekt",
      "Leren hoe je agents bouwt die robuust werken bij onverwachte situaties",
      "Technieken kennen voor het verminderen van noodzakelijke menselijke interventie",
      "De balans begrijpen tussen autonomie en veiligheid bij productie-agents",
    ],
    quiz: [
      { vraag: "Wat is de hoofdreden dat agents te veel menselijk toezicht vereisen?", opties: ["Agents zijn te duur", "Onduidelijke scope, slechte foutafhandeling en gebrek aan zelfcorrectiemechanismen", "Agents werken te snel", "Te veel tools beschikbaar voor de agent"], correct: 1, uitleg: "Agents hebben constante aandacht nodig als ze geen duidelijke scope hebben, niet goed omgaan met fouten of zichzelf niet kunnen corrigeren." },
      { vraag: "Hoe geef je een agent een duidelijke scope om babysitting te verminderen?", opties: ["Zo weinig mogelijk instructies geven", "Expliciete grenzen definiëren: wat de agent WEL mag, wat NIET, en wanneer te escaleren", "De agent zelf zijn grenzen laten bepalen", "De scope elke sessie opnieuw definiëren"], correct: 1, uitleg: "Duidelijke scope = expliciete grenzen: wat mag de agent, wat niet, wanneer moet hij om hulp vragen — dit reduceert ambiguïteit en fouten." },
      { vraag: "Welk mechanisme helpt agents zichzelf te corrigeren bij fouten?", opties: ["De agent altijd opnieuw starten", "Zelfreflectie: de agent laten controleren of zijn output aan de criteria voldoet vóór verdere actie", "Fouten negeren en doorgaan", "Altijd een backup-agent inschakelen"], correct: 1, uitleg: "Zelfreflectie — de agent laten beoordelen of zijn eigen output correct is — reduceert fouten zonder menselijke interventie." },
      { vraag: "Hoe bouw je robuuste foutafhandeling in een agent zodat hij bij problemen zelfstandig doorgaat?", opties: ["Bij elke fout een mens waarschuwen", "Retry-logica, fallback-strategieën en geclassificeerde fouten (herstelbaar vs. fataal)", "Alle fouten negeren", "De agent stoppen bij de eerste fout"], correct: 1, uitleg: "Robuuste agents klassificeren fouten: herstelbare fouten worden automatisch herproefd, fatale fouten escaleren naar een mens." },
      { vraag: "Wat is de juiste balans tussen agent-autonomie en menselijk toezicht in productie?", opties: ["Volledig autonoom, geen menselijk toezicht", "Autonomie voor routine-taken, escalatie voor uitzonderingen, periodieke menselijke audit", "Elk besluit handmatig goedkeuren", "Agents nooit volledig autonoom laten werken"], correct: 1, uitleg: "De juiste balans: agents werken autonoom voor bekende situaties, escaleren bij onzekerheid en worden periodiek geaudit door mensen." },
    ],
  },
  {
    id: 24,
    titel: "What's new in Claude Code",
    ondertitel: "Overzicht van de nieuwste Claude Code features, verbeteringen en wat er op de roadmap staat",
    youtubeId: "sRvUXLquiRg",
    duur: "32:04",
    track: "claude-code",
    niveau: "Beginner",
    leerdoelen: [
      "Op de hoogte zijn van de nieuwste Claude Code features en verbeteringen",
      "Begrijpen hoe nieuwe features je workflow kunnen verbeteren",
      "Weten welke features op de roadmap staan voor toekomstige releases",
      "Leren hoe je optimaal gebruik maakt van recent toegevoegde Claude Code mogelijkheden",
    ],
    quiz: [
      { vraag: "Wat is een van de meest impactvolle recente toevoegingen aan Claude Code?", opties: ["Een grafische interface", "Verbeterde sub-agent mogelijkheden en parallel task execution", "Integratie met social media", "Automatische deployment naar alle cloud-providers"], correct: 1, uitleg: "Sub-agents en parallel task execution zijn game-changers: Claude Code kan nu meerdere subtaken tegelijk aanpakken voor snellere resultaten." },
      { vraag: "Hoe verbetert de nieuwste versie van Claude Code de omgang met grote codebases?", opties: ["Door de codebase automatisch te verkleinen", "Via betere context-selectie en intelligentere keuze van relevante bestanden", "Door alle bestanden altijd in context te laden", "Via automatische refactoring van de hele codebase"], correct: 1, uitleg: "Nieuwere versies selecteren slimmer welke bestanden relevant zijn — zo wordt de context effectiever gebruikt bij grote projecten." },
      { vraag: "Welke nieuwe integratiemogelijkheid is toegevoegd aan Claude Code?", opties: ["Integratie met printerdrivers", "Verbeterde MCP-server ondersteuning voor bredere toolintegratie", "Integratie met blockchain-netwerken", "Native integratie met Microsoft Word"], correct: 1, uitleg: "Verbeterde MCP-server ondersteuning stelt Claude Code in staat om met een breder scala aan externe tools en services samen te werken." },
      { vraag: "Hoe blijf je op de hoogte van nieuwe Claude Code features?", opties: ["Wachten op persberichten", "De officiële Claude/Anthropic documentatie, release notes en de Claude Code GitHub repository volgen", "Alleen via social media", "Maandelijkse nieuwsbrief abonneren"], correct: 1, uitleg: "De beste bronnen zijn de officiële documentatie, GitHub release notes en Anthropic's eigen kanalen voor de meest actuele informatie." },
      { vraag: "Wat is de filosofie achter Claude Code's ontwikkelrichting?", opties: ["Zo snel mogelijk features toevoegen", "Betrouwbaarheid en diepte van agent-mogelijkheden boven oppervlakkige breedte", "Focussen op enterprise-features ten koste van individuele gebruikers", "De kosten zo laag mogelijk houden"], correct: 1, uitleg: "Claude Code focust op diepgang: betrouwbaardere agents, betere context-omgang en robuustere workflows — liever goed dan veel." },
    ],
  },
];

export function getTalkById(id: number): Talk | undefined {
  return talks.find((t) => t.id === id);
}

export function getTrack(id: TrackId): Track {
  return tracks.find((t) => t.id === id)!;
}

export function getTalksByTrack(trackId: TrackId): Talk[] {
  return talks.filter((t) => t.track === trackId);
}
