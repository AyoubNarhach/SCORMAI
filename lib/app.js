"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useCallback = _React.useCallback,
  useRef = _React.useRef,
  useMemo = _React.useMemo;
var LOGO_URL = "data:image/png;base64,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";
var HAS_LOGO = LOGO_URL.indexOf("LOGO_URI") === -1;
var MODULE_ID = "module-1";
var MODULE_TITLE = "L'IA Act : le premier cadre réglementaire sur l'intelligence artificielle";
var SESSION_LABEL = new Date().toLocaleDateString('fr-FR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
});
var SLIDES = [{
  id: "s01",
  type: "welcome",
  eyebrow: "BIENVENUE · SÉQUENCE 1",
  title: "L'IA Act : le code de la route européen de l'IA",
  script: "Comprendre le premier cadre mondial qui régule l'intelligence artificielle — et ce qu'il change pour vous."
}, {
  id: "s02",
  type: "lesson_voiceover",
  eyebrow: "CHAPITRE 01 · LE PRINCIPE FONDATEUR",
  title: "Une approche par les risques, pas par la technologie",
  body: "L'IA Act introduit deux structures parallèles : quatre niveaux de risque pour les systèmes d'IA classiques, et un cadre distinct pour les grands modèles d'IA à usage général comme ChatGPT ou Gemini.",
  key_points: [{
    text: "Classement par usage, pas par techno",
    icon: "filter",
    detail: "Un même algorithme peut être anodin ou critique selon son contexte d'utilisation. Recommander une chanson ou trier des candidatures relèvent de logiques radicalement différentes."
  }, {
    text: "Impact réel sur les personnes",
    icon: "users",
    detail: "Le législateur a fait le choix de mesurer l'IA à l'aune de ses conséquences humaines : santé, sécurité, droits fondamentaux, accès à l'emploi ou aux services."
  }, {
    text: "Deux structures parallèles",
    icon: "puzzle",
    detail: "Le règlement applique 4 niveaux de risque aux systèmes d'IA classiques, et un chapitre dédié aux modèles d'IA à usage général (GPAI) comme ChatGPT ou Gemini."
  }],
  audio_url: "assets/audio_s02.mp3",
  narratorSide: "left"
}, {
  id: "s03",
  type: "data_viz",
  eyebrow: "CHAPITRE 02 · LA PYRAMIDE DES RISQUES",
  title: "Les 4 niveaux de risque officiels",
  audio_url: "assets/audio_s03.mp3",
  narratorSide: "right",
  pyramid: [{
    label: "Inacceptable",
    desc: "interdit",
    color: "#dc2626",
    pct: 4,
    icon: "cross",
    title: "Risque inacceptable",
    subtitle: "Pratiques INTERDITES depuis février 2025",
    details: "Manipulation comportementale, notation sociale (social scoring), surveillance biométrique de masse en temps réel dans l'espace public. Aucune dérogation possible.",
    article: "Art. 5 — R. (UE) 2024/1689",
    tags: ["Manipulation", "Notation sociale", "Biométrie de masse"]
  }, {
    label: "Haut risque",
    desc: "encadré",
    color: "#ea580c",
    pct: 18,
    icon: "shield",
    title: "Haut risque",
    subtitle: "Conformité obligatoire dès août 2026",
    details: "Tri de CV, scoring crédit, IA dans l'éducation ou la santé. Documentation technique, supervision humaine, évaluation de conformité et marquage CE deviennent obligatoires.",
    article: "Art. 6 + Annexe III",
    tags: ["RH", "Crédit", "Éducation", "Santé"]
  }, {
    label: "Risque limité",
    desc: "transparence",
    color: "#eab308",
    pct: 28,
    icon: "eye",
    title: "Risque limité",
    subtitle: "Devoir de transparence",
    details: "Chatbots, deepfakes, générateurs de contenu. L'utilisateur doit savoir explicitement qu'il interagit avec une IA ou que le contenu a été généré artificiellement.",
    article: "Art. 50 — R. (UE) 2024/1689",
    tags: ["Chatbots", "Deepfakes", "Contenus générés"]
  }, {
    label: "Risque minimal",
    desc: "libre",
    color: "#16a34a",
    pct: 50,
    icon: "check",
    title: "Risque minimal ou nul",
    subtitle: "Pas d'obligation spécifique",
    details: "Filtres anti-spam, correcteurs orthographiques, IA dans les jeux vidéo. La majorité des systèmes d'IA actuellement en circulation entre dans cette catégorie.",
    article: "Hors champ contraignant",
    tags: ["Anti-spam", "Correcteur", "Jeux vidéo"]
  }]
}, {
  id: "s04",
  type: "scenario_interactive",
  eyebrow: "CHAPITRE 03 · METTEZ-VOUS À L'ÉPREUVE",
  title: "Quel niveau de risque pour cet outil ?",
  situation: "Votre service RH souhaite déployer un nouvel outil d'IA qui analyse automatiquement les CV reçus pour pré-sélectionner les candidats à un entretien d'embauche. Avant validation, vous devez identifier le niveau de risque applicable selon l'IA Act.",
  choices: [{
    label: "Risque minimal — c'est juste un outil de tri administratif",
    feedback: "Non. Trier des CV impacte directement l'accès à l'emploi des personnes. Ce n'est pas anodin.",
    correct: false
  }, {
    label: "Risque limité — il faut juste informer les candidats",
    feedback: "Pas suffisant. L'information seule ne couvre pas les obligations réelles de cet usage.",
    correct: false
  }, {
    label: "Haut risque — Annexe III, supervision humaine et conformité obligatoires",
    feedback: "Exact. Le tri automatique de CV figure explicitement à l'Annexe III. Documentation technique, évaluation de conformité et supervision humaine sont obligatoires dès le 2 août 2026.",
    correct: true
  }, {
    label: "Risque inacceptable — il faut renoncer au projet",
    feedback: "Non. Le tri de CV n'est pas interdit, mais il est strictement encadré comme système à haut risque.",
    correct: false
  }],
  audio_url: "assets/audio_s04.mp3",
  narratorSide: "left"
}, {
  id: "s05",
  type: "lesson_motion",
  eyebrow: "CHAPITRE 04 · LES MODÈLES GPAI",
  title: "Le cas des IA à usage général : ChatGPT, Copilot, Gemini",
  body: "Les grands modèles d'IA à usage général ne rentrent dans aucun des quatre niveaux. Capables d'exécuter un large éventail de tâches, ils relèvent d'un chapitre dédié du règlement, applicable depuis le 2 août 2025.",
  key_points: [{
    text: "Documentation technique fournie",
    icon: "book",
    detail: "Les fournisseurs de GPAI doivent rédiger et maintenir une documentation technique détaillée du modèle, accessible aux autorités et aux entreprises qui l'intègrent."
  }, {
    text: "Résumé des données d'entraînement publié",
    icon: "search",
    detail: "Un résumé suffisamment détaillé des données utilisées pour entraîner le modèle doit être rendu public, afin de permettre l'exercice des droits d'auteur."
  }, {
    text: "Représentant désigné dans l'UE",
    icon: "globe",
    detail: "Tout fournisseur GPAI établi hors UE doit désigner un représentant légal sur le territoire européen, point de contact unique pour les autorités."
  }],
  media_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  media_caption: "Modèles GPAI à risque systémique (>10²⁵ FLOPs) : obligations renforcées — évaluations, gestion d'incidents, cybersécurité."
}, {
  id: "s06",
  type: "lesson_voiceover",
  eyebrow: "CHAPITRE 05 · L'OBLIGATION QUI VOUS CONCERNE",
  title: "Article 4 : la maîtrise de l'IA pour TOUS",
  body: "Dans le langage de l'IA Act, un « déployeur » désigne simplement toute entreprise qui utilise de l'IA. L'obligation s'applique donc à la quasi-totalité des organisations européennes, quelle que soit leur taille.",
  key_points: [{
    text: "Applicable depuis février 2025",
    icon: "calendar",
    detail: "L'article 4 est entré en vigueur dès la première vague d'application du règlement. Aucune dérogation transitoire — la conformité est exigible immédiatement."
  }, {
    text: "Concerne fournisseurs ET déployeurs",
    icon: "users",
    detail: "Que vous développiez l'IA ou que vous l'utilisiez simplement dans votre activité quotidienne, vous êtes concerné. Aucune entreprise utilisant de l'IA n'est exclue du périmètre."
  }, {
    text: "Niveau de maîtrise suffisant exigé",
    icon: "lightbulb",
    detail: "Le règlement parle d'« AI literacy » : compétences techniques, juridiques et éthiques adaptées au contexte d'usage et au profil des collaborateurs concernés."
  }, {
    text: "Couvre TOUS les niveaux de risque",
    icon: "shield",
    detail: "Contrairement aux autres obligations qui dépendent du niveau de risque du système, l'article 4 est transversal. Il s'applique à toute IA, quelle qu'elle soit."
  }],
  audio_url: "assets/audio_s06.mp3",
  narratorSide: "right"
}, {
  id: "s07",
  type: "data_viz",
  eyebrow: "À RETENIR · LES SANCTIONS",
  title: "Le coût du non-respect : ce que prévoit l'Article 99",
  audio_url: "assets/audio_s07.mp3",
  narratorSide: "left",
  sanctions: [{
    label: "Pratiques interdites (Art. 5)",
    value: 35,
    unit: "M€",
    color: "#dc2626",
    max: 35,
    detail: "ou 7% du CA mondial — exemple : un grand groupe à 80 Md€ paiera jusqu'à 5 600 M€"
  }, {
    label: "Manquements opérationnels",
    value: 15,
    unit: "M€",
    color: "#ea580c",
    max: 35,
    detail: "ou 3% du CA mondial — défaut de documentation, supervision insuffisante"
  }, {
    label: "Plafond max en % du CA",
    value: 7,
    unit: "%",
    color: "#0ea5a4",
    max: 10,
    detail: "Le pourcentage du CA mondial s'applique si supérieur au montant fixe en euros"
  }],
  key_points: [{
    text: "Jusqu'à 35 M€ ou 7% du CA",
    icon: "alert"
  }, {
    text: "Conformité = priorité stratégique",
    icon: "target"
  }]
}, {
  id: "s08",
  type: "quiz",
  title: "Quiz final : avez-vous bien intégré l'IA Act ?",
  questions: [{
    q: "Sur quel critère l'IA Act classe-t-il les systèmes d'intelligence artificielle ?",
    options: ["Sur leur complexité technologique (deep learning, réseaux de neurones)", "Sur leur usage prévu et le risque qu'ils font peser sur les personnes", "Sur leur coût de développement et leur taille en paramètres", "Sur le pays d'origine de leur fournisseur"],
    correct: 1,
    explanation: "L'IA Act adopte une approche par les risques fondée sur l'usage et l'impact sur les personnes, pas sur la technologie utilisée."
  }, {
    q: "Combien de niveaux de risque l'IA Act distingue-t-il pour les systèmes d'IA classiques ?",
    options: ["3 niveaux", "4 niveaux", "5 niveaux", "6 niveaux"],
    correct: 1,
    explanation: "L'IA Act définit 4 niveaux : risque inacceptable, haut risque, risque limité, et risque minimal ou nul."
  }, {
    q: "Un outil d'IA qui trie automatiquement les CV pour un recrutement relève de quel niveau ?",
    options: ["Risque minimal — pas d'obligation", "Risque limité — simple information de l'utilisateur", "Haut risque — Annexe III, conformité et supervision humaine", "Risque inacceptable — interdit"],
    correct: 2,
    explanation: "Le tri automatique de CV figure à l'Annexe III du règlement et relève du haut risque, applicable au 2 août 2026."
  }, {
    q: "Que prévoit l'Article 4 de l'IA Act ?",
    options: ["L'interdiction de la surveillance biométrique de masse", "L'obligation de garantir un niveau suffisant de maîtrise de l'IA chez les collaborateurs", "Le plafond des amendes en cas de violation", "La désignation d'un représentant dans l'Union européenne"],
    correct: 1,
    explanation: "L'Article 4 impose à tous les fournisseurs et déployeurs d'IA de former leurs équipes — c'est l'obligation d'IA literacy, en vigueur depuis février 2025."
  }, {
    q: "Quel est le montant maximal des amendes pour les violations les plus graves de l'IA Act ?",
    options: ["10 millions d'euros ou 2% du CA mondial", "15 millions d'euros ou 3% du CA mondial", "35 millions d'euros ou 7% du CA mondial", "50 millions d'euros ou 10% du CA mondial"],
    correct: 2,
    explanation: "L'Article 99 prévoit jusqu'à 35 millions d'euros ou 7% du chiffre d'affaires mondial pour l'utilisation de pratiques d'IA interdites."
  }]
}];
(function resetIfDifferentModule() {
  try {
    if (localStorage.getItem('ma_module') !== MODULE_ID) {
      localStorage.removeItem('ma_idx');
      localStorage.removeItem('ma_visited');
      localStorage.setItem('ma_module', MODULE_ID);
    }
  } catch (e) {}
})();

// Audio singleton
window.__audio = function () {
  var el = document.getElementById('__audio');
  return {
    changeAudioFor: function changeAudioFor(url) {
      if (!url) {
        el.pause();
        el.removeAttribute('src');
        el.load();
        return;
      }
      if (el.src !== url) {
        el.src = url;
        el.play()["catch"](function () {});
      }
    },
    seek: function seek(pct) {
      var d = el.duration;
      if (isFinite(d) && d > 0) el.currentTime = pct * d;
    },
    toggle: function toggle() {
      el.paused ? el.play() : el.pause();
    },
    getState: function getState() {
      return {
        current: el.currentTime,
        duration: el.duration || 0,
        playing: !el.paused
      };
    }
  };
}();

// === Icon library ===
function Icon(_ref) {
  var name = _ref.name,
    _ref$animated = _ref.animated,
    animated = _ref$animated === void 0 ? "" : _ref$animated,
    color = _ref.color;
  var cls = animated;
  var props = {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: cls,
    style: {
      flexShrink: 0
    }
  };
  switch (name) {
    case 'filter':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("polygon", {
        points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
      }));
    case 'users':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M23 21v-2a4 4 0 0 0-3-3.87"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75"
      }));
    case 'puzzle':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M19.43 12.98a7.965 7.965 0 0 0 0-1.96l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a8 8 0 0 0-1.69-.98l-.38-2.65A.5.5 0 0 0 14 2h-4a.5.5 0 0 0-.49.42l-.38 2.65c-.6.24-1.17.57-1.69.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.64L4.57 11.02a7.965 7.965 0 0 0 0 1.96L2.46 14.63a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.41 1.09.74 1.69.98l.38 2.65a.5.5 0 0 0 .49.42h4a.5.5 0 0 0 .49-.42l.38-2.65c.6-.24 1.17-.57 1.69-.98l2.49 1a.5.5 0 0 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }));
    case 'cross':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
      }));
    case 'shield':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      }));
    case 'eye':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }));
    case 'check':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("polyline", {
        points: "20 6 9 17 4 12"
      }));
    case 'book':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
      }));
    case 'search':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "21",
        y1: "21",
        x2: "16.65",
        y2: "16.65"
      }));
    case 'globe':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "2",
        y1: "12",
        x2: "22",
        y2: "12"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      }));
    case 'calendar':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "4",
        width: "18",
        height: "18",
        rx: "2"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "16",
        y1: "2",
        x2: "16",
        y2: "6"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "8",
        y1: "2",
        x2: "8",
        y2: "6"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "3",
        y1: "10",
        x2: "21",
        y2: "10"
      }));
    case 'lightbulb':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.5V17h8v-2.5A7 7 0 0 0 12 2z"
      }));
    case 'alert':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "13"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
      }));
    case 'target':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "6"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "2"
      }));
    case 'play':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("polygon", {
        points: "6 4 20 12 6 20 6 4",
        fill: "currentColor"
      }));
    case 'sparkle':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 2L14 9 21 12 14 15 12 22 10 15 3 12 10 9 12 2z"
      }));
    case 'arrow-right':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("line", {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "12 5 19 12 12 19"
      }));
    case 'chevron':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("polyline", {
        points: "9 18 15 12 9 6"
      }));
    case 'star':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }));
    case 'gavel':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "m14 13-7.5 7.5a2.12 2.12 0 0 1-3-3L11 10"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m16 16 6-6"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m8 8 6-6"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m9 7 8 8"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m21 11-8-8"
      }));
    case 'doc':
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "14 2 14 8 20 8"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "16",
        y1: "13",
        x2: "8",
        y2: "13"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "16",
        y1: "17",
        x2: "8",
        y2: "17"
      }));
    default:
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }));
  }
}
function NarratorFigure(_ref2) {
  var _ref2$side = _ref2.side,
    side = _ref2$side === void 0 ? 'left' : _ref2$side;
  if (!window.__narratorAssets || !window.__narratorAssets.hasNarrator) return null;
  var _window$__narratorAss = window.__narratorAssets,
    closed = _window$__narratorAss.closed,
    open = _window$__narratorAss.open;
  return /*#__PURE__*/React.createElement("div", {
    className: "narrator-figure narrator-".concat(side)
  }, /*#__PURE__*/React.createElement("div", {
    className: "narrator-figure-stack"
  }, /*#__PURE__*/React.createElement("img", {
    className: "narrator-figure-img is-closed",
    src: closed,
    alt: "",
    draggable: "false"
  }), /*#__PURE__*/React.createElement("img", {
    className: "narrator-figure-img is-open",
    src: open,
    alt: "",
    draggable: "false"
  })));
}
function Topbar(_ref3) {
  var title = _ref3.title,
    sessionLabel = _ref3.sessionLabel;
  return /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, HAS_LOGO ? /*#__PURE__*/React.createElement("img", {
    src: LOGO_URL,
    alt: "Logo",
    className: "brand-logo"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "brand-mark"
  }, (title || '?').slice(0, 1).toUpperCase()), /*#__PURE__*/React.createElement("span", {
    className: "brand-title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "top-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", /*#__PURE__*/React.createElement("span", null, "SESSION \xB7 ", sessionLabel)));
}
function AudioPlayerBar(_ref4) {
  var audioState = _ref4.audioState;
  var barRef = useRef(null);
  var fmt = function fmt(s) {
    return isNaN(s) ? '0:00' : Math.floor(s / 60) + ':' + (Math.floor(s % 60) < 10 ? '0' : '') + Math.floor(s % 60);
  };
  var onSeek = function onSeek(e) {
    var _ref5, _e$clientX, _e$touches$;
    var r = barRef.current.getBoundingClientRect();
    var x = ((_ref5 = (_e$clientX = e.clientX) !== null && _e$clientX !== void 0 ? _e$clientX : e.touches && ((_e$touches$ = e.touches[0]) === null || _e$touches$ === void 0 ? void 0 : _e$touches$.clientX)) !== null && _ref5 !== void 0 ? _ref5 : 0) - r.left;
    window.__audio.seek(Math.min(1, Math.max(0, x / r.width)));
  };
  var pct = audioState.current / Math.max(audioState.duration, 1) * 100;
  return /*#__PURE__*/React.createElement("div", {
    className: "audio-player"
  }, /*#__PURE__*/React.createElement("button", {
    className: "audio-btn",
    onClick: function onClick() {
      return window.__audio.toggle();
    }
  }, audioState.playing ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "5",
    width: "4",
    height: "14"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "5",
    width: "4",
    height: "14"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "6 4 20 12 6 20 6 4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "audio-bar",
    ref: barRef,
    onClick: onSeek
  }, /*#__PURE__*/React.createElement("div", {
    className: "audio-fill",
    style: {
      width: pct + '%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "audio-dot",
    style: {
      left: 'calc(' + pct + '% - 6px)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "audio-time"
  }, fmt(audioState.current), " / ", fmt(audioState.duration)));
}
function Footbar(_ref6) {
  var i = _ref6.i,
    total = _ref6.total,
    go = _ref6.go,
    onHome = _ref6.onHome,
    onMenu = _ref6.onMenu,
    onHelp = _ref6.onHelp,
    audioState = _ref6.audioState,
    currentAudio = _ref6.currentAudio;
  return /*#__PURE__*/React.createElement("div", {
    className: "footbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onHome,
    title: "Accueil"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12 12 3l9 9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10v10h14V10"
  })), /*#__PURE__*/React.createElement("span", null, "HOME")), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onMenu,
    title: "Sommaire (M)"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  })), /*#__PURE__*/React.createElement("span", null, "MENU")), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onHelp,
    title: "Aide (?)"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  })), /*#__PURE__*/React.createElement("span", null, "AIDE"))), /*#__PURE__*/React.createElement("div", {
    className: "progress-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "progress-label"
  }, String(i + 1).padStart(2, '0'), " / ", String(total).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    className: "progress-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-fill",
    style: {
      width: (i + 1) / total * 100 + '%'
    }
  }))), currentAudio && /*#__PURE__*/React.createElement(AudioPlayerBar, {
    audioState: audioState
  }), /*#__PURE__*/React.createElement("div", {
    className: "nav-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-arrow",
    onClick: function onClick() {
      return go(i - 1);
    },
    disabled: i === 0
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  })), "Pr\xE9c\xE9dent"), /*#__PURE__*/React.createElement("button", {
    className: "nav-arrow primary",
    onClick: function onClick() {
      return go(i + 1);
    },
    disabled: i >= total - 1
  }, "Suivant", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })))));
}

// ================================ SLIDES ================================

function WelcomeSlide(_ref7) {
  var slide = _ref7.slide,
    go = _ref7.go;
  return /*#__PURE__*/React.createElement("div", {
    className: "welcome-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "welcome-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, slide.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "welcome-title"
  }, slide.title), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      maxWidth: 520
    }
  }, slide.script), /*#__PURE__*/React.createElement("div", {
    className: "welcome-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "meta-chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar"
  }), /*#__PURE__*/React.createElement("span", null, "~10 min")), /*#__PURE__*/React.createElement("div", {
    className: "meta-chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "book"
  }), /*#__PURE__*/React.createElement("span", null, "R. (UE) 2024/1689")), /*#__PURE__*/React.createElement("div", {
    className: "meta-chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star"
  }), /*#__PURE__*/React.createElement("span", null, "Niveau introduction"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "start-btn",
    onClick: function onClick() {
      return go(1);
    }
  }, "Commencer le module", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    color: "#fff"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hero-scene"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 500",
    className: "hero-svg",
    preserveAspectRatio: "xMidYMid meet"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "haloW",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#22d3ee",
    stopOpacity: ".35"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "60%",
    stopColor: "#0ea5a4",
    stopOpacity: ".12"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#0ea5a4",
    stopOpacity: "0"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "bookG",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#0ea5a4"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#22d3ee"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "250",
    r: "240",
    fill: "url(#haloW)"
  }), /*#__PURE__*/React.createElement("g", {
    style: {
      transformOrigin: '300px 250px',
      animation: 'haloRotate 30s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "250",
    r: "200",
    fill: "none",
    stroke: "#0ea5a4",
    strokeOpacity: ".25",
    strokeWidth: "1.5",
    strokeDasharray: "4 8"
  })), /*#__PURE__*/React.createElement("g", {
    style: {
      transformOrigin: '300px 250px',
      animation: 'haloRotate 50s linear infinite reverse'
    }
  }, Array.from({
    length: 12
  }).map(function (_, k) {
    var a = k / 12 * Math.PI * 2 - Math.PI / 2;
    var x = 300 + Math.cos(a) * 150;
    var y = 250 + Math.sin(a) * 150;
    return /*#__PURE__*/React.createElement("g", {
      key: k,
      transform: "translate(".concat(x, " ").concat(y, ")")
    }, /*#__PURE__*/React.createElement("g", {
      style: {
        animation: "iconTwinkle 2.4s ease-in-out infinite ".concat(k * 0.18, "s")
      }
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "0,-9 2.6,-2.8 9,-2.8 3.7,1.3 5.7,8 0,4 -5.7,8 -3.7,1.3 -9,-2.8 -2.6,-2.8",
      fill: "#0ea5a4"
    })));
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(300 250)"
  }, /*#__PURE__*/React.createElement("g", {
    style: {
      animation: 'iconFloat 4s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -75 -55 L -75 55 Q -75 60 -70 60 L -5 60 L -5 -60 L -70 -60 Q -75 -60 -75 -55 Z",
    fill: "url(#bookG)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 75 -55 L 75 55 Q 75 60 70 60 L 5 60 L 5 -60 L 70 -60 Q 75 -60 75 -55 Z",
    fill: "url(#bookG)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "-50",
    y1: "-30",
    x2: "-15",
    y2: "-30",
    stroke: "#fff",
    strokeOpacity: ".55",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "-50",
    y1: "-15",
    x2: "-15",
    y2: "-15",
    stroke: "#fff",
    strokeOpacity: ".55",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "-50",
    y1: "0",
    x2: "-22",
    y2: "0",
    stroke: "#fff",
    strokeOpacity: ".55",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "-30",
    x2: "50",
    y2: "-30",
    stroke: "#fff",
    strokeOpacity: ".55",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "-15",
    x2: "50",
    y2: "-15",
    stroke: "#fff",
    strokeOpacity: ".55",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "0",
    x2: "42",
    y2: "0",
    stroke: "#fff",
    strokeOpacity: ".55",
    strokeWidth: "2"
  }))), [{
    x: 120,
    y: 120,
    c: "#dc2626",
    l: "INTERDIT",
    d: 0
  }, {
    x: 480,
    y: 120,
    c: "#ea580c",
    l: "HAUT",
    d: .2
  }, {
    x: 120,
    y: 380,
    c: "#eab308",
    l: "LIMITÉ",
    d: .4
  }, {
    x: 480,
    y: 380,
    c: "#16a34a",
    l: "MIN.",
    d: .6
  }].map(function (h, k) {
    return /*#__PURE__*/React.createElement("g", {
      key: k,
      transform: "translate(".concat(h.x, " ").concat(h.y, ")")
    }, /*#__PURE__*/React.createElement("g", {
      style: {
        animation: "iconFloat 3.6s ease-in-out infinite ".concat(h.d, "s")
      }
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "0,-26 22,-13 22,13 0,26 -22,13 -22,-13",
      fill: h.c,
      fillOpacity: ".15",
      stroke: h.c,
      strokeWidth: "2.5"
    }), /*#__PURE__*/React.createElement("text", {
      x: "0",
      y: "4",
      textAnchor: "middle",
      fontSize: "10",
      fontWeight: "800",
      fill: h.c,
      fontFamily: "sans-serif"
    }, h.l)), /*#__PURE__*/React.createElement("line", {
      x1: "0",
      y1: "0",
      x2: 300 - h.x,
      y2: 250 - h.y,
      stroke: h.c,
      strokeOpacity: ".35",
      strokeWidth: "1.5",
      strokeDasharray: "4 6"
    }));
  }))));
}
function LessonVoiceoverSlide(_ref8) {
  var slide = _ref8.slide;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var side = slide.narratorSide || "left";
  var content = /*#__PURE__*/React.createElement("div", {
    className: "lesson-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow pop-in"
  }, slide.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "lesson-title pop-in",
    style: {
      fontWeight: 800
    }
  }, slide.title), slide.body && /*#__PURE__*/React.createElement("p", {
    className: "lesson-body pop-in"
  }, slide.body), /*#__PURE__*/React.createElement("div", {
    className: "reveal-list"
  }, slide.key_points.map(function (kp, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "reveal-row pop-in",
      style: {
        animationDelay: 0.1 + idx * 0.08 + 's'
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "reveal-head" + (open === idx ? " open" : ""),
      onClick: function onClick() {
        return setOpen(open === idx ? null : idx);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "kp-icon",
      style: {
        width: 32,
        height: 32,
        minWidth: 32
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: kp.icon,
      animated: ['icon-pulse', 'icon-float', 'icon-twinkle', 'icon-glow', 'icon-swing', 'icon-beat'][idx % 6]
    })), /*#__PURE__*/React.createElement("span", null, kp.text), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron",
      animated: "chev"
    })), open === idx && kp.detail && /*#__PURE__*/React.createElement("div", {
      className: "reveal-body"
    }, kp.detail));
  })));

  // Visual scene for s02 / s06
  var scene = slide.id === "s02" ? /*#__PURE__*/React.createElement(BalanceScene, null) : /*#__PURE__*/React.createElement(Article4Scene, null);
  return /*#__PURE__*/React.createElement("div", {
    className: "lesson-layout " + (side === "right" ? "right-narrator" : "")
  }, side === "left" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(NarratorFigure, {
    side: "left"
  })), content) : /*#__PURE__*/React.createElement(React.Fragment, null, content, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(NarratorFigure, {
    side: "right"
  }))));
}
function BalanceScene() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 360 380",
    style: {
      width: '100%',
      height: 'auto',
      maxHeight: 380,
      position: 'absolute',
      right: 0,
      bottom: 80,
      opacity: .5,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "haloS2",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#22d3ee",
    stopOpacity: ".25"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#22d3ee",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "180",
    cy: "200",
    r: "160",
    fill: "url(#haloS2)"
  }));
}
function Article4Scene() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 380 380",
    style: {
      width: '100%',
      height: 'auto',
      maxHeight: 380,
      position: 'absolute',
      left: 0,
      bottom: 80,
      opacity: .5,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "haloS6",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#0ea5a4",
    stopOpacity: ".22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#0ea5a4",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "190",
    cy: "190",
    r: "170",
    fill: "url(#haloS6)"
  }));
}
function PyramidSlide(_ref9) {
  var slide = _ref9.slide;
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    active = _useState4[0],
    setActive = _useState4[1];
  var side = slide.narratorSide || "right";
  var cur = slide.pyramid[active];
  var content = /*#__PURE__*/React.createElement("div", {
    className: "lesson-content",
    style: {
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow pop-in"
  }, slide.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "lesson-title pop-in",
    style: {
      fontWeight: 800,
      fontSize: '30px'
    }
  }, slide.title), /*#__PURE__*/React.createElement("p", {
    className: "caption pop-in"
  }, "Cliquez sur un niveau pour explorer ses obligations."), /*#__PURE__*/React.createElement("div", {
    className: "pyramid-stack",
    style: {
      paddingBottom: 0
    }
  }, slide.pyramid.map(function (p, idx) {
    return /*#__PURE__*/React.createElement("button", {
      key: idx,
      className: "pyramid-row" + (active === idx ? " active" : ""),
      style: {
        color: p.color,
        animationDelay: idx * 0.08 + 's'
      },
      onClick: function onClick() {
        return setActive(idx);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "swatch",
      style: {
        background: p.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "pyramid-label"
    }, p.label, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--muted)',
        fontWeight: 500
      }
    }, "\xB7 ", p.desc)), /*#__PURE__*/React.createElement("div", {
      className: "pct-bar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pct-fill",
      style: {
        width: p.pct + '%',
        background: p.color,
        animation: "barGrow 1s cubic-bezier(.2,.8,.2,1) ".concat(idx * 0.12, "s both")
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "pct-num",
      style: {
        color: p.color
      }
    }, p.pct, "%"));
  })), /*#__PURE__*/React.createElement("div", {
    className: "pyramid-detail pop-in",
    key: active,
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pyramid-detail-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pyramid-detail-icon",
    style: {
      background: cur.color
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: cur.icon,
    color: "#fff",
    animated: "icon-pulse"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "card-title",
    style: {
      margin: 0,
      color: cur.color,
      fontWeight: 800
    }
  }, cur.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      color: 'var(--ink-2)',
      fontSize: 13,
      fontWeight: 600
    }
  }, cur.subtitle))), /*#__PURE__*/React.createElement("p", {
    className: "lesson-body",
    style: {
      fontSize: 14
    }
  }, cur.details), /*#__PURE__*/React.createElement("div", {
    className: "pyramid-tags"
  }, cur.tags.map(function (t, k) {
    return /*#__PURE__*/React.createElement("span", {
      key: k,
      className: "pyramid-tag"
    }, t);
  })), /*#__PURE__*/React.createElement("p", {
    className: "caption",
    style: {
      fontSize: 12,
      marginTop: 'auto'
    }
  }, "\uD83D\uDCDC R\xE9f\xE9rence : ", cur.article)));
  return /*#__PURE__*/React.createElement("div", {
    className: "lesson-layout " + (side === "right" ? "right-narrator" : "")
  }, side === "left" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NarratorFigure, {
    side: "left"
  }), content) : /*#__PURE__*/React.createElement(React.Fragment, null, content, /*#__PURE__*/React.createElement(NarratorFigure, {
    side: "right"
  })));
}
function ScenarioSlide(_ref0) {
  var slide = _ref0.slide;
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    picked = _useState6[0],
    setPicked = _useState6[1];
  var side = slide.narratorSide || "left";
  var content = /*#__PURE__*/React.createElement("div", {
    className: "scenario-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow pop-in"
  }, slide.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "scenario-title pop-in",
    style: {
      fontWeight: 800,
      fontSize: '28px'
    }
  }, slide.title), /*#__PURE__*/React.createElement("div", {
    className: "scenario-situation pop-in"
  }, /*#__PURE__*/React.createElement("p", {
    className: "scenario-body",
    style: {
      margin: 0
    }
  }, slide.situation)), /*#__PURE__*/React.createElement("div", {
    className: "scenario-choices"
  }, slide.choices.map(function (c, idx) {
    var isPicked = picked === idx;
    var isCorrect = c.correct;
    var cls = "choice-btn pop-in";
    if (picked !== null) {
      if (isPicked && isCorrect) cls += " correct";else if (isPicked && !isCorrect) cls += " wrong";else if (!isPicked && isCorrect) cls += " correct";else cls += " dimmed";
    }
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        animationDelay: idx * 0.07 + 's'
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: cls,
      onClick: function onClick() {
        return picked === null && setPicked(idx);
      },
      disabled: picked !== null
    }, /*#__PURE__*/React.createElement("span", {
      className: "choice-letter"
    }, String.fromCharCode(65 + idx)), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        lineHeight: 1.45
      }
    }, c.label)), isPicked && /*#__PURE__*/React.createElement("div", {
      className: "choice-feedback " + (isCorrect ? "ok" : "ko")
    }, /*#__PURE__*/React.createElement("strong", null, isCorrect ? "✓ Bonne réponse — " : "✗ "), c.feedback));
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "scenario-layout " + (side === "right" ? "right-narrator" : "")
  }, side === "left" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NarratorFigure, {
    side: "left"
  }), content) : /*#__PURE__*/React.createElement(React.Fragment, null, content, /*#__PURE__*/React.createElement(NarratorFigure, {
    side: "right"
  })));
}
function GpaiSlide(_ref1) {
  var slide = _ref1.slide;
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    tab = _useState8[0],
    setTab = _useState8[1];
  var tabs = ["ChatGPT", "Copilot", "Gemini"];
  var tabContent = [{
    vendor: "OpenAI",
    logo: "🤖",
    color: "#10a37f",
    desc: "Modèle GPT-4 / GPT-4o à risque systémique. OpenAI a publié une fiche technique dédiée et désigné un représentant en Irlande.",
    stats: [{
      l: "Lancement UE",
      v: "2023"
    }, {
      l: "Représentant",
      v: "Dublin"
    }, {
      l: "Fiche modèle",
      v: "Publique"
    }]
  }, {
    vendor: "Microsoft",
    logo: "✨",
    color: "#0078d4",
    desc: "Copilot s'appuie sur les modèles d'OpenAI et de Microsoft. Documentation technique fournie aux entreprises clientes via le programme partenaires.",
    stats: [{
      l: "Lancement UE",
      v: "2024"
    }, {
      l: "Représentant",
      v: "Bruxelles"
    }, {
      l: "Fiche modèle",
      v: "Partenaires"
    }]
  }, {
    vendor: "Google DeepMind",
    logo: "💎",
    color: "#4285f4",
    desc: "Gemini 1.5 Pro et Ultra. Google a publié des Model Cards détaillées et une analyse des données d'entraînement.",
    stats: [{
      l: "Lancement UE",
      v: "2024"
    }, {
      l: "Représentant",
      v: "Dublin"
    }, {
      l: "Fiche modèle",
      v: "Publique"
    }]
  }];
  var cur = tabContent[tab];
  return /*#__PURE__*/React.createElement("div", {
    className: "gpai-grid",
    style: {
      height: 'auto',
      minHeight: '100%',
      paddingBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gpai-media"
  }, /*#__PURE__*/React.createElement("img", {
    src: slide.media_url,
    alt: slide.media_alt || ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "media-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "media-cap"
  }, slide.media_caption)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow pop-in"
  }, slide.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "lesson-title pop-in",
    style: {
      fontWeight: 800,
      fontSize: '28px'
    }
  }, slide.title), /*#__PURE__*/React.createElement("p", {
    className: "lesson-body pop-in"
  }, slide.body), /*#__PURE__*/React.createElement("div", {
    className: "gpai-tabs"
  }, tabs.map(function (t, k) {
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      className: "gpai-tab" + (tab === k ? " active" : ""),
      onClick: function onClick() {
        return setTab(k);
      }
    }, t);
  })), /*#__PURE__*/React.createElement("div", {
    className: "gpai-panel",
    key: tab
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 10,
      background: cur.color,
      display: 'grid',
      placeItems: 'center',
      fontSize: 22
    }
  }, cur.logo), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "card-title",
    style: {
      margin: 0
    }
  }, tabs[tab]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: 'var(--muted)',
      fontWeight: 600
    }
  }, "par ", cur.vendor))), /*#__PURE__*/React.createElement("p", {
    className: "lesson-body",
    style: {
      fontSize: 14
    }
  }, cur.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8,
      marginTop: 'auto'
    }
  }, cur.stats.map(function (s, k) {
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        padding: '10px 12px',
        background: 'rgba(14,165,164,.06)',
        borderRadius: 10,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--muted)',
        textTransform: 'uppercase',
        letterSpacing: '.05em',
        fontWeight: 700
      }
    }, s.l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        color: cur.color,
        marginTop: 3,
        fontSize: 14
      }
    }, s.v));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8,
      marginTop: 6
    }
  }, slide.key_points.map(function (kp, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "kp-card pop-in",
      style: {
        padding: '10px 12px',
        animationDelay: idx * 0.08 + 's'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "kp-icon",
      style: {
        width: 30,
        height: 30,
        minWidth: 30
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: kp.icon,
      animated: ['icon-pulse', 'icon-float', 'icon-rotate-slow'][idx % 3]
    })), /*#__PURE__*/React.createElement("div", {
      className: "kp-title",
      style: {
        fontSize: 12,
        lineHeight: 1.3
      }
    }, kp.text));
  }))));
}
function SanctionsSlide(_ref10) {
  var slide = _ref10.slide;
  var _useState9 = useState(null),
    _useState0 = _slicedToArray(_useState9, 2),
    hover = _useState0[0],
    setHover = _useState0[1];
  var side = slide.narratorSide || "left";
  var content = /*#__PURE__*/React.createElement("div", {
    className: "sanctions-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow pop-in"
  }, slide.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "lesson-title pop-in",
    style: {
      fontWeight: 800,
      fontSize: '28px'
    }
  }, slide.title), /*#__PURE__*/React.createElement("p", {
    className: "lesson-body pop-in"
  }, "L'Article 99 du r\xE8glement (UE) 2024/1689 fixe des plafonds dissuasifs. Survolez les barres pour voir le d\xE9tail."), /*#__PURE__*/React.createElement("div", {
    className: "bars-wrap"
  }, slide.sanctions.map(function (d, idx) {
    var pct = d.value / d.max * 100;
    var isHover = hover === idx;
    var isDim = hover !== null && hover !== idx;
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "bar-row" + (isHover ? " hover" : "") + (isDim ? " dim" : ""),
      onMouseEnter: function onMouseEnter() {
        return setHover(idx);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      },
      style: {
        boxShadow: isHover ? "0 8px 24px ".concat(d.color, "40") : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bar-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "lbl"
    }, d.label), /*#__PURE__*/React.createElement("span", {
      className: "val",
      style: {
        color: d.color,
        fontSize: isHover ? 22 : 16
      }
    }, d.value, " ", d.unit)), /*#__PURE__*/React.createElement("div", {
      className: "bar-track"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bar-fill",
      style: {
        width: pct + '%',
        background: "linear-gradient(90deg, ".concat(d.color, ", ").concat(d.color, "cc)"),
        filter: isHover ? 'brightness(1.15) saturate(1.2)' : 'none',
        animationDelay: idx * 0.15 + 's'
      }
    })), isHover && /*#__PURE__*/React.createElement("div", {
      className: "bar-tooltip",
      style: {
        background: d.color
      }
    }, d.detail));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      marginTop: 4
    }
  }, slide.key_points.map(function (kp, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "kp-card pop-in",
      style: {
        animationDelay: idx * 0.1 + 's',
        padding: '10px 12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "kp-icon",
      style: {
        width: 30,
        height: 30,
        minWidth: 30,
        background: idx === 0 ? 'rgba(220,38,38,.12)' : 'rgba(14,165,164,.12)',
        color: idx === 0 ? '#dc2626' : 'var(--primary)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: kp.icon,
      animated: idx === 0 ? "icon-shake" : "icon-pulse"
    })), /*#__PURE__*/React.createElement("div", {
      className: "kp-title",
      style: {
        fontSize: 13,
        lineHeight: 1.3
      }
    }, kp.text));
  })), /*#__PURE__*/React.createElement("p", {
    className: "caption",
    style: {
      fontSize: 12,
      marginTop: 4
    }
  }, "\uD83D\uDCDC Source : Art. 99 \u2014 R\xE8glement (UE) 2024/1689"));
  return /*#__PURE__*/React.createElement("div", {
    className: "sanctions-grid " + (side === "right" ? "right-narrator" : "")
  }, side === "left" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NarratorFigure, {
    side: "left"
  }), content) : /*#__PURE__*/React.createElement(React.Fragment, null, content, /*#__PURE__*/React.createElement(NarratorFigure, {
    side: "right"
  })));
}
function QuizSlide(_ref11) {
  var slide = _ref11.slide,
    score = _ref11.score,
    setScore = _ref11.setScore;
  var _useState1 = useState(0),
    _useState10 = _slicedToArray(_useState1, 2),
    qIdx = _useState10[0],
    setQIdx = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    picked = _useState12[0],
    setPicked = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    done = _useState14[0],
    setDone = _useState14[1];
  var total = slide.questions.length;
  var q = slide.questions[qIdx];
  var choose = function choose(k) {
    if (picked !== null) return;
    setPicked(k);
    if (k === q.correct) setScore(function (s) {
      return s + 1;
    });
  };
  var next = function next() {
    if (qIdx < total - 1) {
      setQIdx(qIdx + 1);
      setPicked(null);
    } else {
      var finalScore = score + (picked === q.correct && false ? 1 : 0);
      setDone(true);
    }
  };
  useEffect(function () {
    if (done) {
      var pct = Math.round(score / total * 100);
      window._quizScore = pct;
      window._quizScore = pct;
    }
  }, [done, score, total]);
  if (done) {
    var pct = Math.round(score / total * 100);
    window._quizScore = pct;
    var pass = pct >= 60;
    return /*#__PURE__*/React.createElement("div", {
      className: "quiz-result quiz-final",
      style: {
        height: '100%',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "R\xC9SULTAT"), /*#__PURE__*/React.createElement("div", {
      className: "quiz-score-circle"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 180 180",
      style: {
        width: '100%',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "ringG",
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "100%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#0ea5a4"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#22d3ee"
    }))), /*#__PURE__*/React.createElement("circle", {
      cx: "90",
      cy: "90",
      r: "78",
      fill: "none",
      stroke: "rgba(10,31,51,.08)",
      strokeWidth: "12"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "90",
      cy: "90",
      r: "78",
      fill: "none",
      stroke: "url(#ringG)",
      strokeWidth: "12",
      strokeLinecap: "round",
      strokeDasharray: "".concat(pct / 100 * 490, " 490"),
      transform: "rotate(-90 90 90)",
      style: {
        transition: 'stroke-dasharray 1.5s cubic-bezier(.2,.8,.2,1)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "quiz-score-num"
    }, pct, "%"))), /*#__PURE__*/React.createElement("h2", {
      className: "lesson-title",
      style: {
        fontWeight: 800
      }
    }, pass ? "🎉 Bravo !" : "Module à reprendre"), /*#__PURE__*/React.createElement("p", {
      className: "lesson-body",
      style: {
        maxWidth: 480,
        textAlign: 'center'
      }
    }, "Vous avez obtenu ", /*#__PURE__*/React.createElement("strong", null, score, " / ", total), ".", pass ? " Vous maîtrisez les fondamentaux de l'IA Act." : " Reprenez les chapitres pour consolider vos acquis."));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "quiz-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow pop-in"
  }, "QUIZ FINAL \xB7 QUESTION ", qIdx + 1, " / ", total), /*#__PURE__*/React.createElement("h2", {
    className: "lesson-title pop-in",
    style: {
      fontWeight: 800,
      fontSize: '26px',
      margin: '10px 0 12px'
    }
  }, slide.title), /*#__PURE__*/React.createElement("div", {
    className: "quiz-progress"
  }, slide.questions.map(function (_, k) {
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: "quiz-progress-dot" + (k < qIdx ? " done" : k === qIdx ? " current" : "")
    });
  })), /*#__PURE__*/React.createElement("h4", {
    className: "quiz-q pop-in",
    key: qIdx
  }, q.q), /*#__PURE__*/React.createElement("div", {
    className: "quiz-options"
  }, q.options.map(function (opt, k) {
    var cls = "quiz-opt pop-in";
    if (picked !== null) {
      if (k === q.correct) cls += " correct";else if (k === picked) cls += " wrong";
    }
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      className: cls,
      style: {
        animationDelay: k * 0.06 + 's'
      },
      onClick: function onClick() {
        return choose(k);
      },
      disabled: picked !== null
    }, /*#__PURE__*/React.createElement("span", {
      className: "quiz-letter"
    }, String.fromCharCode(65 + k)), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        lineHeight: 1.4
      }
    }, opt), picked !== null && k === q.correct && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      color: "#16a34a"
    }));
  })), picked !== null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "quiz-explain"
  }, /*#__PURE__*/React.createElement("strong", null, picked === q.correct ? "✓ Exact. " : "✗ Pas tout à fait. "), q.explanation), /*#__PURE__*/React.createElement("button", {
    className: "nav-arrow primary quiz-next",
    onClick: next
  }, qIdx < total - 1 ? "Question suivante" : "Voir mon score", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    color: "#fff"
  }))));
}

// ============================ APP ============================

function App() {
  var _useState15 = useState(function () {
      if (window.SCORM12 && window.SCORM12.isReady()) {
        var _l = window.SCORM12.getLocation();
        if (_l > 0 && _l < SLIDES.length) return _l;
      }
      var saved = parseInt(localStorage.getItem('ma_idx') || '0', 10);
      return saved >= 0 && saved < SLIDES.length ? saved : 0;
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    i = _useState16[0],
    setI = _useState16[1];
  var _useState17 = useState(function () {
      try {
        var arr = JSON.parse(localStorage.getItem('ma_visited') || '[0]');
        return Array.isArray(arr) ? arr.filter(function (v) {
          return Number.isInteger(v) && v >= 0 && v < SLIDES.length;
        }) : [0];
      } catch (e) {
        return [0];
      }
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    visited = _useState18[0],
    setVisited = _useState18[1];
  var _useState19 = useState({
      current: 0,
      duration: 0,
      playing: false
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    audioState = _useState20[0],
    setAudioState = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    help = _useState22[0],
    setHelp = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    menu = _useState24[0],
    setMenu = _useState24[1];
  var _useState25 = useState(0),
    _useState26 = _slicedToArray(_useState25, 2),
    score = _useState26[0],
    setScore = _useState26[1];
  var slide = SLIDES[i];
  var currentAudio = slide.video_url ? null : slide.audio_url || null;
  useEffect(function () {
    localStorage.setItem('ma_idx', String(i));
    setVisited(function (v) {
      var nv = v.includes(i) ? v : [].concat(_toConsumableArray(v), [i]);
      localStorage.setItem('ma_visited', JSON.stringify(nv));
      return nv;
    });
    if (window.SCORM12) window.SCORM12.setLocation(i);
    if (i === SLIDES.length - 1 && window.SCORM12) window.SCORM12.complete();
  }, [i]);

  // Audio plumbing
  useEffect(function () {
    window.__audio.changeAudioFor(currentAudio);
  }, [currentAudio]);
  useEffect(function () {
    var id = setInterval(function () {
      return setAudioState(window.__audio.getState());
    }, 250);
    return function () {
      return clearInterval(id);
    };
  }, []);

  // SCORM tracking
  var uniqueVisited = Array.from(new Set(visited)).filter(function (v) {
    return v >= 0 && v < SLIDES.length;
  });
  var pct = Math.min(100, Math.max(0, Math.round(uniqueVisited.length / SLIDES.length * 100)));
  var go = useCallback(function (n) {
    if (n >= 0 && n < SLIDES.length) setI(n);
  }, []);
  useEffect(function () {
    var _r = function _r() {
      return setI(0);
    };
    window.addEventListener('scorm-restart', _r);
    return function () {
      return window.removeEventListener('scorm-restart', _r);
    };
  }, []);

  // Keyboard
  useEffect(function () {
    var onKey = function onKey(e) {
      if (help || menu) {
        if (e.key === 'Escape') {
          setHelp(false);
          setMenu(false);
        }
        return;
      }
      if (e.key === 'ArrowRight') go(i + 1);else if (e.key === 'ArrowLeft') go(i - 1);else if (e.key.toLowerCase() === 'm') setMenu(true);else if (e.key === '?') setHelp(true);
    };
    window.addEventListener('keydown', onKey);
    return function () {
      return window.removeEventListener('keydown', onKey);
    };
  }, [i, help, menu, go]);
  var renderSlide = function renderSlide(s) {
    switch (s.type) {
      case 'welcome':
        return /*#__PURE__*/React.createElement(WelcomeSlide, {
          slide: s,
          go: go
        });
      case 'lesson_voiceover':
        return /*#__PURE__*/React.createElement(LessonVoiceoverSlide, {
          slide: s
        });
      case 'data_viz':
        if (s.id === 's03') return /*#__PURE__*/React.createElement(PyramidSlide, {
          slide: s
        });
        if (s.id === 's07') return /*#__PURE__*/React.createElement(SanctionsSlide, {
          slide: s
        });
        return null;
      case 'scenario_interactive':
        return /*#__PURE__*/React.createElement(ScenarioSlide, {
          slide: s
        });
      case 'lesson_motion':
        return /*#__PURE__*/React.createElement(GpaiSlide, {
          slide: s
        });
      case 'quiz':
        return /*#__PURE__*/React.createElement(QuizSlide, {
          slide: s,
          score: score,
          setScore: setScore
        });
      default:
        return null;
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: MODULE_TITLE,
    sessionLabel: SESSION_LABEL
  }), /*#__PURE__*/React.createElement("div", {
    className: "stage"
  }, SLIDES.map(function (s, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: "screen" + (idx === i ? " active" : "")
    }, idx === i && renderSlide(s));
  }), help && /*#__PURE__*/React.createElement("div", {
    className: "modal-back",
    onClick: function onClick() {
      return setHelp(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Raccourcis clavier"), /*#__PURE__*/React.createElement("div", {
    className: "modal-row"
  }, /*#__PURE__*/React.createElement("span", null, "Slide suivante"), /*#__PURE__*/React.createElement("kbd", null, "\u2192")), /*#__PURE__*/React.createElement("div", {
    className: "modal-row"
  }, /*#__PURE__*/React.createElement("span", null, "Slide pr\xE9c\xE9dente"), /*#__PURE__*/React.createElement("kbd", null, "\u2190")), /*#__PURE__*/React.createElement("div", {
    className: "modal-row"
  }, /*#__PURE__*/React.createElement("span", null, "Sommaire"), /*#__PURE__*/React.createElement("kbd", null, "M")), /*#__PURE__*/React.createElement("div", {
    className: "modal-row"
  }, /*#__PURE__*/React.createElement("span", null, "Fermer"), /*#__PURE__*/React.createElement("kbd", null, "Esc")), /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: function onClick() {
      return setHelp(false);
    }
  }, "Compris"))), menu && /*#__PURE__*/React.createElement("div", {
    className: "modal-back",
    onClick: function onClick() {
      return setMenu(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Sommaire du module"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      maxHeight: 380,
      overflowY: 'auto'
    }
  }, SLIDES.map(function (s, idx) {
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      className: "choice-btn",
      style: {
        padding: '10px 14px'
      },
      onClick: function onClick() {
        go(idx);
        setMenu(false);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "choice-letter"
    }, String(idx + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 13
      }
    }, s.title || s.eyebrow), visited.includes(idx) && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      color: "#16a34a"
    }));
  })), /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: function onClick() {
      return setMenu(false);
    }
  }, "Fermer")))), /*#__PURE__*/React.createElement(Footbar, {
    i: i,
    total: SLIDES.length,
    go: go,
    onHome: function onHome() {
      return go(0);
    },
    onMenu: function onMenu() {
      return setMenu(true);
    },
    onHelp: function onHelp() {
      return setHelp(true);
    },
    audioState: audioState,
    currentAudio: currentAudio
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));