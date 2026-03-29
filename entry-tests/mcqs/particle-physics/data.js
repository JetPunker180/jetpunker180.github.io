window.questions = [
    // ==================== FUNDAMENTAL PARTICLES ====================
    {
        q: "Which list of particles contains only fundamental particles?",
        options: [
            "antineutrino, beta, meson",
            "baryon, neutrino, positron",
            "electron, neutrino, alpha",
            "lepton, quark, positron"
        ],
        correct: 3,
        explanation: "Fundamental particles are not composed of other particles. Leptons (electron, neutrino, positron) and quarks are fundamental. Beta particles are electrons, mesons and baryons are composite hadrons made of quarks."
    },
    {
        q: "Which of the following particles is an example of a fundamental particle?",
        options: ["nucleus", "neutrino", "pion", "proton"],
        correct: 1,
        explanation: "A neutrino is a fundamental particle (a lepton). A nucleus, pion (meson), and proton (baryon) are all composite particles made of quarks."
    },
    {
        q: "Which particle is a lepton?",
        options: ["meson", "positron", "proton", "quark"],
        correct: 1,
        explanation: "Positron is the antiparticle of electron and is a lepton. Mesons are hadrons made of quarks. Protons are baryons made of quarks. Quarks are fundamental but are not leptons."
    },
    {
        q: "Which statement is not correct?",
        options: [
            "An antineutrino is a fundamental particle.",
            "An electron is made up of a quark and an antiquark.",
            "A neutrino is a lepton.",
            "A neutron is composed of three quarks."
        ],
        correct: 1,
        explanation: "An electron is a fundamental particle (lepton), not composed of quarks. The other statements are correct: antineutrinos are fundamental, neutrinos are leptons, neutrons are made of three quarks (udd)."
    },
    {
        q: "Which of these is not made from quarks?",
        options: ["proton", "neutron", "lepton", "meson"],
        correct: 2,
        explanation: "Leptons (such as electrons and neutrinos) are fundamental particles and are not composed of quarks. Protons, neutrons (baryons), and mesons are all hadrons made of quarks."
    },

    // ==================== ANTIPARTICLES ====================
    {
        q: "A particle has a mass of 1 u and a charge of \\(-1.6 \\times 10^{-19}\\) C. Which of the following could be the particle?",
        options: ["antiproton", "electron", "neutron", "positron"],
        correct: 0,
        explanation: "An antiproton has the same mass as a proton (~1 u) and a charge of \\(-e\\). Electrons and positrons have negligible mass (~0.0005 u), and a neutron has no charge."
    },
    {
        q: "Which two particles have opposite charges?",
        options: [
            "alpha-particle and helium nucleus",
            "antiproton and beta-plus particle",
            "beta-minus particle and electron",
            "positron and proton"
        ],
        correct: 1,
        explanation: "An antiproton has negative charge (\\(-e\\)), while a beta-plus particle (positron) has positive charge (\\(+e\\)). Alpha particle and helium nucleus are the same (\\(+2e\\)). Beta-minus particle and electron both have \\(-e\\). Positron and proton both have \\(+e\\)."
    },
    {
        q: "Which row of the table summarises the mass and charge of an antineutron?",
        options: [
            "Mass: 0 u, Charge: 0 e",
            "Mass: 0 u, Charge: -1 e",
            "Mass: 1 u, Charge: 0 e",
            "Mass: 1 u, Charge: +1 e"
        ],
        correct: 2,
        explanation: "An antineutron is the antiparticle of a neutron. It has the same mass as a neutron (~1 u) and is neutral (charge 0 e)."
    },
    {
        q: "The \\(\\pi^-\\) particle has a mass of 140 MeV/\\(c^2\\). Which row of the table is correct for the antiparticle of a \\(\\pi^-\\)?",
        options: [
            "Particle classification: Baryon, Mass/MeV/c\u00b2: +140",
            "Particle classification: Baryon, Mass/MeV/c\u00b2: -140",
            "Particle classification: Meson, Mass/MeV/c\u00b2: +140",
            "Particle classification: Meson, Mass/MeV/c\u00b2: -140"
        ],
        correct: 2,
        explanation: "The antiparticle of \\(\\pi^-\\) is \\(\\pi^+\\). Both are mesons (quark-antiquark pairs). They have the same positive mass (140 MeV/\\(c^2\\))."
    },

    // ==================== QUARKS & COMPOSITE PARTICLES ====================
    {
        q: "A particle consists of two up quarks and a charm quark. What is the charge of this particle, expressed in terms of the elementary charge \\(e\\)?",
        options: ["\\(-2e\\)", "\\(-e\\)", "\\(+e\\)", "\\(+2e\\)"],
        correct: 3,
        explanation: "Up quark charge = \\(+\\frac{2}{3}e\\), charm quark charge = \\(+\\frac{2}{3}e\\). Total charge = \\(\\left(\\frac{2}{3} + \\frac{2}{3} + \\frac{2}{3}\\right)e = \\frac{6}{3}e = +2e\\)."
    },
    {
        q: "Which combination of up (u) and down (d) quarks forms a proton?",
        options: ["uuu", "uud", "udd", "ddd"],
        correct: 1,
        explanation: "A proton consists of two up quarks and one down quark (uud). Total charge = \\(2 \\times (+\\frac{2}{3}) + (-\\frac{1}{3}) = \\frac{4}{3} - \\frac{1}{3} = +1e\\)."
    },
    {
        q: "A positively charged meson consists of a quark and an antiquark. What could be the quark and antiquark?",
        options: [
            "charm and antiproton",
            "down and antitop",
            "strange and antibottom",
            "up and antistrange"
        ],
        correct: 3,
        explanation: "A meson consists of a quark and an antiquark. Up quark has charge \\(+\\frac{2}{3}e\\), antistrange has charge \\(+\\frac{1}{3}e\\) (since strange quark has \\(-\\frac{1}{3}e\\), so antistrange has \\(+\\frac{1}{3}e\\)). Total = \\(+1e\\). Other combinations: charm (\\(+\\frac{2}{3}e\\)) + antiproton (not a quark) invalid; down (\\(-\\frac{1}{3}e\\)) + antitop (\\(-\\frac{2}{3}e\\)) = \\(-1e\\); strange (\\(-\\frac{1}{3}e\\)) + antibottom (\\(+\\frac{1}{3}e\\)) = 0."
    },
    {
        q: "How many hadrons, baryons and mesons are there in a nucleus of \\(^{9}_{4}\\text{Be}\\)?",
        options: [
            "hadrons: 9, baryons: 4, mesons: 5",
            "hadrons: 9, baryons: 5, mesons: 4",
            "hadrons: 9, baryons: 9, mesons: 0",
            "hadrons: 13, baryons: 9, mesons: 0"
        ],
        correct: 2,
        explanation: "A nucleus contains protons and neutrons, which are baryons (hadrons). Beryllium-9 has 4 protons and 5 neutrons, total 9 nucleons. All are baryons (hadrons). There are no mesons in the nucleus. So hadrons = 9, baryons = 9, mesons = 0."
    },
    {
        q: "A neutron is composed of one up (u) quark and two down (d) quarks. When a neutron decays to a proton, a beta-particle is emitted. What is the change in the quark structure of the neutron due to the emission of the beta-particle?",
        options: [
            "\\(d \\rightarrow u + \\beta^- + \\bar{\\nu}_e\\)",
            "\\(d \\rightarrow u + \\beta^- + \\bar{\\nu}_e\\)",
            "\\(u \\rightarrow d + \\beta^+ + \\nu_e\\)",
            "\\(u \\rightarrow d + \\beta^+ + \\nu_e\\)"
        ],
        correct: 1,
        explanation: "In \\(\\beta^-\\) decay, a down quark converts to an up quark, emitting an electron (\\(\\beta^-\\)) and an electron antineutrino: \\(d \\rightarrow u + \\beta^- + \\bar{\\nu}_e\\)."
    },

    // ==================== MASS-ENERGY CONVERSION ====================
    {
        q: "A proton has a mass of \\(1.67 \\times 10^{-27}\\) kg. Which of the following shows the conversion of this mass to \\(\\text{GeV}/c^2\\)?",
        options: [
            "\\(\\frac{1.67 \\times 10^{-27} \\times 1.60 \\times 10^{-10}}{(3.00 \\times 10^8)^2}\\)",
            "\\(\\frac{1.67 \\times 10^{-27} \\times 1.60 \\times 10^{-19}}{(3.00 \\times 10^8)^2}\\)",
            "\\(\\frac{1.67 \\times 10^{-27} \\times (3.00 \\times 10^8)^2}{1.60 \\times 10^{-10}}\\)",
            "\\(\\frac{1.67 \\times 10^{-27}}{1.60 \\times 10^{-10} \\times (3.00 \\times 10^8)^2}\\)"
        ],
        correct: 2,
        explanation: "To convert kg to MeV/\\(c^2\\), use \\(E = mc^2\\) to get joules, then convert to eV (1 eV = \\(1.6 \\times 10^{-19}\\) J) and then to GeV (\\(10^9\\) eV). The correct calculation gives energy in GeV = (mass in kg \\(\\times c^2\\)) / (\\(1.6 \\times 10^{-10}\\))."
    },

    // ==================== DECAY PROCESSES ====================
    {
        q: "Which of the following particle equations is correct for the decay of a proton within a nucleus?",
        options: [
            "\\(p \\rightarrow n + \\beta^+\\)",
            "\\(p \\rightarrow p + \\beta^+\\)",
            "\\(p \\rightarrow n + \\beta^+ + \\nu_e\\)",
            "\\(p \\rightarrow p + \\beta^+ + \\nu_e\\)"
        ],
        correct: 2,
        explanation: "In beta-plus decay, a proton converts to a neutron, emitting a positron (\\(\\beta^+\\)) and a neutrino (\\(\\nu_e\\)) to conserve lepton number. The equation is \\(p \\rightarrow n + \\beta^+ + \\nu_e\\)."
    },
    {
        q: "A high-energy proton can interact with a photon to produce two particles. Which of the following could be the two particles produced?",
        options: [
            "\\(n + \\pi^0\\)",
            "\\(n + \\pi^+\\)",
            "\\(\\pi^0 + \\pi^+\\)",
            "\\(\\pi^- + \\pi^+\\)"
        ],
        correct: 1,
        explanation: "For the interaction \\(p + \\gamma \\rightarrow \\text{?}\\), charge must be conserved. The initial charge is \\(+1\\) (from the proton). A neutron (\\(n\\)) is neutral and \\(\\pi^+\\) has charge \\(+1\\), so total charge = \\(+1\\), satisfying conservation."
    },
    {
        q: "A nucleus X undergoes \\(\\beta^+\\) decay. The products are a nucleus Y with proton number Z, a \\(\\beta^+\\) particle and another particle P. \\(X \\rightarrow \\,^{A}_{Z}Y + \\beta^+ + P\\). What is particle P and what is the proton number of nucleus X?",
        options: [
            "antineutrino, \\(Z - 1\\)",
            "antineutrino, \\(Z + 1\\)",
            "neutrino, \\(Z - 1\\)",
            "neutrino, \\(Z + 1\\)"
        ],
        correct: 3,
        explanation: "In \\(\\beta^+\\) decay, a proton converts to a neutron, emitting a positron and a neutrino. The daughter nucleus has proton number decreased by 1. If Y has proton number Z, then X has proton number \\(Z + 1\\). The emitted particle P is a neutrino (\\(\\nu_e\\))."
    },
    {
        q: "An unstable nucleus decays by emitting a \\(\\beta^+\\) particle. Which statement is correct?",
        options: [
            "An antineutrino is also emitted.",
            "A neutron changes into a proton.",
            "Mass-energy is conserved.",
            "The nucleon number is not conserved."
        ],
        correct: 2,
        explanation: "Mass-energy is always conserved in all decays. In \\(\\beta^+\\) decay, a proton changes into a neutron, emitting a positron and a neutrino (not antineutrino). Nucleon number is conserved."
    },
    {
        q: "Carbon-14 decays into nitrogen-14 by emitting a \\(\\beta^-\\) particle. Which statement explains why the \\(\\beta^-\\) particles are emitted with a range of different kinetic energies?",
        options: [
            "The carbon-14 nuclei have slightly different masses.",
            "The emitted \\(\\beta^-\\) particles have a range of different masses.",
            "The energy released in the decay process is different for each carbon-14 nucleus that decays.",
            "The energy released in the decay process is shared between the nitrogen-14 nucleus, a \\(\\beta^-\\) particle and an antineutrino."
        ],
        correct: 3,
        explanation: "In \\(\\beta^-\\) decay, the energy released is shared among the daughter nucleus, the \\(\\beta^-\\) particle, and the antineutrino. This distribution varies, giving \\(\\beta^-\\) particles a continuous range of kinetic energies."
    },
    {
        q: "A nucleus of a radioactive element emits an \\(\\alpha\\)-particle, then a \\(\\beta^-\\) particle and then another \\(\\beta^-\\) particle. Which statement describes the final element that is produced?",
        options: [
            "It is a different element of higher proton number than the original element.",
            "It is a different element of lower nucleon number than the original element.",
            "It is an isotope of the original element.",
            "It is the same element as the original element but with a different proton number."
        ],
        correct: 2,
        explanation: "\\(\\alpha\\)-particle reduces mass by 4 and proton number by 2. Each \\(\\beta^-\\) increases proton number by 1. Net change: mass -4, proton number: \\(-2 + 1 + 1 = 0\\). So the final element has same proton number (same element) but mass number reduced by 4, making it an isotope of the original element."
    },
    {
        q: "An actinium nucleus has a nucleon number of 227 and a proton number of 89. It decays to form a radium nucleus, emitting a \\(\\beta^-\\) particle and an \\(\\alpha\\)-particle in the process. What are the nucleon number and the proton number of this radium nucleus?",
        options: [
            "223, 87",
            "223, 88",
            "224, 87",
            "225, 86"
        ],
        correct: 1,
        explanation: "Starting with \\(^{227}_{89}\\text{Ac}\\). Emit \\(\\alpha\\)-particle (\\(^{4}_{2}\\text{He}\\)): reduces mass by 4 (to 223), reduces proton number by 2 (to 87). Then emit \\(\\beta^-\\) (\\(^{0}_{-1}e\\)): increases proton number by 1 (to 88). So final nucleus has mass 223, proton 88."
    },
    {
        q: "A uranium-238 nucleus (\\(^{238}_{92}\\text{U}\\)) undergoes a series of nuclear decays to form uranium-234 (\\(^{234}_{92}\\text{U}\\)). Which series of decays could give this result?",
        options: [
            "emission of four \\(\\beta^-\\) particles",
            "emission of four \\(\\gamma\\)-rays",
            "emission of one \\(\\alpha\\)-particle and two \\(\\beta^-\\) particles",
            "emission of two \\(\\alpha\\)-particles and eight \\(\\beta^-\\) particles"
        ],
        correct: 2,
        explanation: "Mass number decreases from 238 to 234 (decrease of 4) — one \\(\\alpha\\)-particle reduces mass by 4. Atomic number remains 92. One \\(\\alpha\\)-particle reduces atomic number by 2 (to 90), so two \\(\\beta^-\\) particles (each increases atomic number by 1) bring it back to 92."
    },

    // ==================== STANDARD MODEL & CONSERVATION LAWS ====================
    {
        q: "Which statement about the alpha-particle scattering experiment provides evidence for the existence of the nucleus?",
        options: [
            "A tiny proportion of the alpha-particles are deflected through large angles.",
            "Slower alpha-particles are deflected through larger angles.",
            "The kinetic energies of the deflected alpha-particles are unchanged.",
            "The number of alpha-particles deflected depends on the thickness of the foil."
        ],
        correct: 0,
        explanation: "The observation that a tiny proportion of alpha particles are deflected through large angles indicates that there is a small, dense, positively charged nucleus that repels the alpha particles."
    },
    {
        q: "Which conclusion about the structure of atoms cannot be drawn from the alpha-particle scattering experiment alone?",
        options: [
            "Most of the atom is empty space.",
            "Most of the mass of an atom is concentrated in the nucleus.",
            "The nucleus contains both protons and neutrons.",
            "The nucleus is charged."
        ],
        correct: 2,
        explanation: "The alpha scattering experiment showed that most of the atom is empty space, the nucleus is small and dense, and the nucleus is positively charged. It could not reveal the existence of neutrons, which were discovered later."
    },
    {
        q: "When \\(\\alpha\\)-particles are fired at a thin metal foil, most of the particles pass straight through but a few are deflected by a large angle. Which change would increase the proportion of \\(\\alpha\\)-particles deflected by a large angle?",
        options: [
            "using \\(\\alpha\\)-particles with greater kinetic energy",
            "using a double thickness foil",
            "using a foil made of a metal with fewer protons in its nuclei",
            "using a source emitting more \\(\\alpha\\)-particles per unit time"
        ],
        correct: 1,
        explanation: "Increasing the foil thickness increases the probability of \\(\\alpha\\)-particles encountering a nucleus, thus increasing the proportion deflected by large angles."
    },
    {
        q: "A nucleus X is radioactive and decays into a nucleus Y. X and Y are isotopes of the same element. Which combination of particles could have been emitted during the decay process?",
        options: [
            "1 \\(\\alpha\\)-particle and 1 \\(\\beta^-\\) particle",
            "1 \\(\\alpha\\)-particle and 2 \\(\\beta^-\\) particles",
            "2 \\(\\alpha\\)-particles and 1 \\(\\beta^-\\) particle",
            "2 \\(\\alpha\\)-particles and 2 \\(\\beta^-\\) particles"
        ],
        correct: 1,
        explanation: "For X and Y to be isotopes (same proton number), the net change in proton number must be zero. \\(\\alpha\\)-particle reduces Z by 2. \\(\\beta^-\\) increases Z by 1. So one \\(\\alpha\\) (\\(-2\\)) and two \\(\\beta^-\\) (\\(+2\\)) give net Z change of 0. Mass number decreases by 4, so they are different isotopes of the same element."
    }
];