
const storyData = {
    "1": {
        title: "L'Aventure Commence",
        text: "Le jour tant attendu est enfin arrivé. Tu as un rendez-vous important à Paris, et il est temps de choisir comment t'y rendre. Le monde s'offre à toi... ou presque.",
        choices: [
            { text: "🚂 Gare", target: "2A", action: (s) => { s.origin = "gare"; } },
            { text: "✈️ Aéroport", target: "2B", action: (s) => { s.origin = "aeroport"; } }
        ]
    },
    // GARE
    "2A": {
        title: "Quai des Possibilités",
        text: "Tu pénètres dans la gare, le brouhaha des voyageurs résonne sous la grande verrière. Le tableau des départs affiche plusieurs destinations. Où ton cœur te porte-t-il ?",
        choices: [
            { text: "🗼 Paris", target: "4" },
            { text: "🏔️ Lyon", target: "3B" },
            { text: "🌊 Marseille", target: "3C" },
            { text: "🍷 Bordeaux", target: "3D" }
        ]
    },
    // AEROPORT
    "2B": {
        title: "Terminal des Rêves",
        text: "L'aéroport s'étend devant toi, immense et plein de promesses. Les panneaux d'affichage défilent, annonçant des vols vers les quatre coins du monde. Quelle destination va capturer ton imagination ?",
        choices: [
            { text: "🗼 Paris - Charles de Gaulle", target: "4" },
            { text: "🏔️ Lyon - Saint Exupéry", target: "3B" },
            { text: "🌊 Marseille - Provence", target: "3C" },
            { text: "🍷 Bordeaux - Mérignac", target: "3D" },
            { text: "🌸 Tokyo - Haneda", target: "3E" },
            { text: "🗽 New York - JFK", target: "3F" },
            { text: "🎭 Londres - Heathrow", target: "3G" },
            { text: "🏛️ Rome - Fiumicino", target: "3H" },
            { text: "🌴 Barcelone - El Prat", target: "3I" },
            { text: "🏰 Amsterdam - Schiphol", target: "3J" },
            { text: "🎡 Berlin - Brandenburg", target: "3K" },
            { text: "🌺 Lisbonne - Portela", target: "3L" }
        ]
    },
    // EXCUSES / BAD ENDINGS (Temporary)
    "3B": {
        title: "Contretemps Lyonnais",
        text: "Oh non... Un message s'affiche sur l'écran : 'Suite à un mouvement social des contrôleurs de la ligne Lyon-Part-Dieu, tous les trains sont suspendus jusqu'à nouvel ordre.' Les bouchons lyonnais devront attendre un autre jour...",
        effect: "shake",
        choices: [
            { text: "Continuer", action: "returnToOrigin" }
        ]
    },
    "3C": {
        title: "Mistral Capricieux",
        text: "Aïe... Une annonce résonne : 'En raison de vents violents de Mistral atteignant 120 km/h, la liaison vers Marseille est temporairement interrompue pour des raisons de sécurité.' La Méditerranée gardera ses secrets pour aujourd'hui...",
        effect: "shake",
        choices: [
            { text: "Continuer", action: "returnToOrigin" }
        ]
    },
    "3D": {
        title: "Vendanges Perturbées",
        text: "Quelle malchance ! Un panneau indique : 'Accident de transport de cuves vinicoles sur les voies. Circulation impossible vers Bordeaux.' Il semblerait que le vin ait décidé de couler... mais pas dans ton verre aujourd'hui.",
        effect: "shake",
        choices: [
            { text: "Continuer", action: "returnToOrigin" }
        ]
    },
    "3E": {
        title: "Typhon Inattendu",
        text: "Le tableau d'affichage clignote en rouge : 'Vol Tokyo annulé - Typhon de catégorie 3 en approche sur la région de Kantō. Tous les vols vers le Japon sont suspendus.' Les cerisiers en fleurs devront patienter...",
        effect: "shake",
        choices: [{ text: "Continuer", target: "2B" }] // Tokyo only from airport (2B)
    },
    "3F": {
        title: "Blizzard sur Manhattan",
        text: "Une voix grésille dans les haut-parleurs : 'Nous informons les passagers que l'aéroport JFK est actuellement fermé en raison d'une tempête de neige exceptionnelle. Tous les vols sont reportés.' La Grosse Pomme est sous la neige...",
        effect: "shake",
        choices: [{ text: "Continuer", target: "2B" }]
    },
    "3G": {
        title: "Brouillard Londonien",
        text: "L'écran affiche sobrement : 'Dense fog advisory - Vol Londres annulé. Visibilité nulle sur Heathrow.' Le légendaire brouillard britannique a encore frappé... Sherlock Holmes lui-même n'y verrait rien.",
        effect: "shake",
        choices: [{ text: "Continuer", target: "2B" }]
    },
    "3H": {
        title: "Grève à l'Italienne",
        text: "Mamma mia ! L'annonce tombe : 'Sciopero generale - Grève générale du personnel aéroportuaire italien. Aucun vol vers Rome aujourd'hui.' La dolce vita attendra... les Italiens savent faire la grève avec style !",
        effect: "shake",
        choices: [{ text: "Continuer", target: "2B" }]
    },
    "3I": {
        title: "Heatwave Catalane",
        text: "Alerte rouge ! Le message est clair : 'Canicule extrême sur la Catalogne - 47°C relevés sur les pistes. Vol annulé pour raisons de sécurité.' Même l'asphalte fond à Barcelone... ce n'est pas le moment d'y atterrir.",
        effect: "shake",
        choices: [{ text: "Continuer", target: "2B" }]
    },
    "3J": {
        title: "Tempête sur les Polders",
        text: "Le panneau s'illumine : 'Severe storm warning - Vol Amsterdam annulé. Vents de 140 km/h sur Schiphol.' Les moulins tournent peut-être un peu trop vite là-bas... Tes tulipes devront attendre.",
        effect: "shake",
        choices: [{ text: "Continuer", target: "2B" }]
    },
    "3K": {
        title: "Panne Technique",
        text: "Une annonce retentit : 'Technische Störung - Problème technique majeur sur l'aéroport de Berlin-Brandenburg. Tous les vols sont suspendus.' L'efficacité allemande a ses limites parfois... Auf Wiedersehen, Berlin !",
        effect: "shake",
        choices: [{ text: "Continuer", target: "2B" }]
    },
    "3L": {
        title: "Séisme Sismique",
        text: "Alerte ! L'écran affiche : 'Suite à une activité sismique détectée dans la région de Lisbonne, par mesure de précaution, tous les vols sont temporairement suspendus.' Les azulejos tremblent, mais pas ton destin !",
        effect: "shake",
        choices: [{ text: "Continuer", target: "2B" }]
    },

    // PARIS ARRIVAL
    "4": {
        title: "Paris, Enfin !",
        text: "Te voilà dans la Ville Lumière ! Tu as encore un peu de temps avant ton rendez-vous important. Les rues parisiennes s'offrent à toi... Comment souhaites-tu profiter de ce moment ?",
        choices: (s) => {
            const choices = [];
            if (!s.repas_done) choices.push({ text: "🍽️ Savourer un délicieux repas parisien", target: "5A" });
            else choices.push({ text: "🍽️ Savourer un délicieux repas parisien (Déjà fait)", disabled: true });

            if (!s.musee_done) choices.push({ text: "🖼️ Visiter un musée emblématique", target: "5B" });
            else choices.push({ text: "🖼️ Visiter un musée emblématique (Déjà fait)", disabled: true });

            return choices;
        }
    },
    "5A": {
        title: "Délices de la Capitale",
        text: "Tu t'installes à la terrasse d'un charmant bistrot parisien. Le serveur t'apporte un croissant doré à souhait, accompagné d'un café crème parfumé. Les saveurs explosent dans ta bouche tandis que tu observes les Parisiens passer... C'est ça, l'art de vivre à la française.",
        choices: [
            {
                text: "Continuer",
                action: (s) => {
                    s.repas_done = true;
                    if (s.musee_done) return "6";
                    return "4";
                }
            }
        ]
    },
    "5B": {
        title: "Émerveillement Artistique",
        text: "Tu déambules dans les couloirs majestueux du musée. Les œuvres des plus grands maîtres t'entourent, chaque tableau racontant une histoire millénaire. Tu restes un moment captivé devant un chef-d'œuvre... L'art a cette magie de faire oublier le temps qui passe.",
        choices: [
            {
                text: "Continuer",
                action: (s) => {
                    s.musee_done = true;
                    if (s.repas_done) return "6";
                    return "4";
                }
            }
        ]
    },

    // RENDEZ-VOUS
    "6": {
        title: "Le Moment Approche",
        text: "Tu jettes un œil à ta montre... Il est temps ! Le rendez-vous tant attendu approche et tu dois te rendre à destination. Les rues de Paris s'étendent devant toi. Comment vas-tu t'y rendre ?",
        choices: [
            { text: "🚶 À pied, pour profiter de la balade", target: "7" },
            { text: "🚗 En Uber, confortablement installé", target: "7" },
            { text: "🚇 En métro, comme un vrai Parisien", target: "7" }
        ]
    },
    "7": {
        title: "La Croisée des Chemins",
        text: "Tu arrives à un croisement. Deux rues s'offrent à toi, toutes deux bordées de charmantes façades parisiennes. Ton instinct te souffle de choisir... mais lequel écouter ?",
        choices: [
            { text: "⬅️ Prendre la rue de gauche", target: "8" },
            { text: "➡️ Prendre la rue de droite", target: "8" }
        ]
    },
    "8": {
        title: "Décision Finale",
        text: "Tu débouches sur une petite place pavée où deux boutiques se font face. L'une semble abandonnée, sa vitrine poussiéreuse et son enseigne à peine lisible. L'autre rayonne d'une élégance discrète, sa devanture soignée invite à la découverte... Laquelle choisir ?",
        choices: (s) => {
            const choices = [];
            if (s.boutique_a_visited) {
                choices.push({ text: "🏚️ Boutique A - L'enseigne mystérieuse (Porte fermée...)", disabled: true });
            } else {
                choices.push({ text: "🏚️ Boutique A - L'enseigne mystérieuse", target: "9" });
            }
            choices.push({ text: "✨ Boutique B - La façade élégante", target: "10" });
            return choices;
        }
    },
    "9": {
        title: "Impasse",
        text: "Tu t'approches de la boutique mystérieuse et poses ta main sur la poignée... Rien ne bouge. La porte est fermée à double tour. Tu colles ton visage contre la vitre poussiéreuse : l'intérieur est vide, abandonné depuis longtemps. Des toiles d'araignée ornent les étagères désertes. Ce n'est clairement pas ici...",
        choices: [
            { text: "Retourner sur la place", target: "8", action: (s) => s.boutique_a_visited = true }
        ]
    },
    "10": {
        title: "Bienvenue chez Louise Carmen",
        text: "Tu pousses la porte de la boutique élégante. Une douce mélodie de carillon t'accueille tandis qu'une atmosphère chaleureuse t'enveloppe. Les murs sont ornés de créations raffinées, chaque détail respire l'artisanat et la passion. Une voix bienveillante s'élève...\n\n\"Bienvenue chez Louise Carmen ! Il est temps de choisir votre carnet...\"",
        effect: "sparkle",
        choices: [
            { text: "Choisir mon carnet", action: () => { window.location.href = "https://louisecarmen.com/"; } }
        ]
    }
};

const state = {
    currentStep: "1",
    origin: null, // "gare" | "aeroport"
    repas_done: false,
    musee_done: false,
    boutique_a_visited: false
};

const IMAGE_DIR = "images/";
const DEFAULT_BG_URL = "bg.png"; // fallback only if a step is unmapped

// Mapping hardcodé (basé sur mapping.txt). Pour les steps avec choix: la liste = ordre des choix.
const STEP_BACKGROUNDS = {
    "1": ["1.png", "2.png"],
    "2A": ["3.png", "4.png", "5.png", "6.png"],
    "2B": "airport_choice.png",
    "3B": "19.png",
    "3C": "20.png",
    "3D": "21.png",
    "3E": "22.png",
    "3F": "23.png",
    "3G": "24.png",
    "3H": "25.png",
    "3I": "26.png",
    "3J": "27.png",
    "3K": "28.png",
    "3L": "29.png",
    "4": ["30.png", "31.png"],
    "5A": "32.png",
    "5B": "33.png",
    "6": ["34.png", "35.png", "36.png"],
    "7": ["37.png", "38.png"],
    "8": ["39.png", "40.png"],
    "9": "41.png",
    "10": "42.png"
};

const preloadedUrls = new Set();
let bgSwapTimeoutId = null;

function clamp01(value) {
    return Math.max(0, Math.min(1, value));
}

function stripEmojis(text) {
    const input = String(text ?? "");
    try {
        return input
            .replace(/[\p{Extended_Pictographic}\uFE0F\uFE0E\u200D]/gu, "")
            .replace(/\s{2,}/g, " ")
            .trim();
    } catch {
        return input
            .replace(/[\u200D\uFE0F\uFE0E]/g, "")
            .replace(/\s{2,}/g, " ")
            .trim();
    }
}

function normalizeImageUrl(filenameOrUrl) {
    const raw = String(filenameOrUrl || "").trim();
    if (!raw) return null;
    if (raw.includes("/") || raw.startsWith("data:") || raw.startsWith("http")) return raw;
    return IMAGE_DIR + raw;
}

function getStepBgList(stepId) {
    const entry = STEP_BACKGROUNDS[String(stepId)];
    if (!entry) return null;
    if (Array.isArray(entry)) return entry.map(normalizeImageUrl).filter(Boolean);
    return [normalizeImageUrl(entry)].filter(Boolean);
}

function preloadUrl(url) {
    if (!url || preloadedUrls.has(url)) return;
    const img = new Image();
    img.src = url;
    preloadedUrls.add(url);
}

function preloadForStep(stepId) {
    const urls = getStepBgList(stepId);
    if (!urls) return;
    urls.forEach(preloadUrl);
}

function setBackground(url) {
    const baseLayer = document.getElementById("background-layer");
    const nextLayer = document.getElementById("background-layer-next");
    if (!baseLayer || !nextLayer) return;

    const targetUrl = url || DEFAULT_BG_URL;
    const currentUrl = baseLayer.dataset.bgUrl || "";
    if (currentUrl === targetUrl) return;

    // First paint: set immediately (avoid flashing the CSS placeholder).
    if (!currentUrl) {
        baseLayer.style.backgroundImage = `url('${targetUrl}')`;
        baseLayer.dataset.bgUrl = targetUrl;
        baseLayer.style.opacity = "1";
        nextLayer.style.opacity = "0";
        return;
    }

    if (bgSwapTimeoutId) {
        window.clearTimeout(bgSwapTimeoutId);
        bgSwapTimeoutId = null;
    }

    nextLayer.style.backgroundImage = `url('${targetUrl}')`;
    nextLayer.style.opacity = "1";
    baseLayer.style.opacity = "0";

    bgSwapTimeoutId = window.setTimeout(() => {
        baseLayer.style.backgroundImage = `url('${targetUrl}')`;
        baseLayer.dataset.bgUrl = targetUrl;
        baseLayer.style.opacity = "1";
        nextLayer.style.opacity = "0";
        bgSwapTimeoutId = null;
    }, 520);
}

function showChoiceSplit(urls) {
    const layer = document.getElementById("choice-bg-layer");
    if (!layer) return;

    layer.innerHTML = "";
    const count = Array.isArray(urls) ? urls.length : 0;
    if (count <= 1) {
        layer.style.opacity = "0";
        return;
    }

    // Left-to-right slices with slight diagonal separators (visual-novel style).
    const skew = Math.min(0.06, 0.35 / count);
    const boundary = (boundaryIndex) => boundaryIndex / count;
    const boundaryTop = (boundaryIndex) => {
        if (boundaryIndex === 0 || boundaryIndex === count) return boundary(boundaryIndex);
        return clamp01(boundary(boundaryIndex) + skew);
    };
    const boundaryBottom = (boundaryIndex) => {
        if (boundaryIndex === 0 || boundaryIndex === count) return boundary(boundaryIndex);
        return clamp01(boundary(boundaryIndex) - skew);
    };

    for (let i = 0; i < count; i++) {
        const url = urls[i];
        const segment = document.createElement("div");
        segment.className = "choice-bg-segment";
        segment.style.backgroundImage = `url('${url}')`;

        const leftTop = boundaryTop(i);
        const rightTop = boundaryTop(i + 1);
        const rightBottom = boundaryBottom(i + 1);
        const leftBottom = boundaryBottom(i);
        segment.style.clipPath = `polygon(${leftTop * 100}% 0, ${rightTop * 100}% 0, ${rightBottom * 100}% 100%, ${leftBottom * 100}% 100%)`;

        layer.appendChild(segment);
    }

    layer.style.opacity = "1";
}

function clearChoiceSplit() {
    const layer = document.getElementById("choice-bg-layer");
    if (!layer) return;
    layer.style.opacity = "0";
    layer.innerHTML = "";
}

function renderStep(stepId) {
    const step = storyData[stepId];
    if (!step) {
        console.error("Step not found:", stepId);
        return;
    }

    state.currentStep = stepId;

    // Update UI
    document.getElementById("scene-title").textContent = step.title;
    document.getElementById("narrative-text").innerText = step.text; // innerText handles newlines

    // Handle Effects
    const container = document.getElementById("game-container");
    container.classList.remove("shake", "sparkle");
    if (step.effect) {
        void container.offsetWidth; // trigger reflow
        container.classList.add(step.effect);
    }

    // Render Choices
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";

    let choices = step.choices;
    if (typeof choices === "function") {
        choices = choices(state);
    }
    if (stepId === "2B") {
        choices = choices.slice(0, 8);
    }

    preloadForStep(stepId);
    const stepBgUrls = getStepBgList(stepId);
    const baseBgUrl = stepBgUrls?.[0] || DEFAULT_BG_URL;
    setBackground(baseBgUrl);

    const hasPerChoiceBgs = stepBgUrls && stepBgUrls.length >= 2 && choices.length === stepBgUrls.length;
    if (hasPerChoiceBgs) {
        showChoiceSplit(stepBgUrls);
    } else {
        clearChoiceSplit();
    }

    choices.forEach((choice, choiceIndex) => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        const choiceLabel = stripEmojis(choice.text);
        btn.textContent = choiceLabel;
        if (choiceLabel.toLowerCase() === "continuer") {
            btn.classList.add("choice-btn--continue");
        } else if (choiceLabel.toLowerCase() === "choisir mon carnet") {
            btn.classList.add("choice-btn--center");
        }

        if (choice.disabled) {
            btn.disabled = true;
        } else {
            btn.onclick = () => handleChoice(choice);
        }

        choicesContainer.appendChild(btn);
    });
}

function handleChoice(choice) {
    // 1. Execute action if exists
    let nextStepId = choice.target;

    if (choice.action) {
        if (choice.action === "returnToOrigin") {
            // Special case for step 3 logic
            nextStepId = (state.origin === "gare") ? "2A" : "2B";
        } else {
            const result = choice.action(state);
            // If action returns a string, it's the next step ID (dynamic transition)
            if (typeof result === "string") {
                nextStepId = result;
            }
        }
    }

    // 2. Navigate
    if (nextStepId) {
        preloadForStep(nextStepId);
        renderStep(nextStepId);
    }
}

// Start
renderStep("1");
