window.questions = [
    // ==================== BASIC CONCEPTS & NUCLEAR STRUCTURE (8 questions) ====================
    {
        q: "Which of the following quantities is not conserved in a nuclear reaction?",
        options: ["Mass", "Charge", "Momentum", "None of the above"],
        correct: 0,
        explanation: "In nuclear reactions, mass is not conserved because some mass is converted into energy according to Einstein's equation \\(E = mc^2\\). Charge, momentum, and energy are conserved."
    },
    {
        q: "The nucleus contains:",
        options: ["protons and electrons", "protons and neutrons", "neutrons and electrons", "neutrons and alpha particles"],
        correct: 1,
        explanation: "The nucleus contains protons (positively charged) and neutrons (neutral). Electrons orbit the nucleus, not inside it."
    },
    {
        q: "Nuclear radius is proportional to:",
        options: ["\\(A\\)", "\\(A^{1/3}\\)", "\\(A^{2/3}\\)", "\\(Z\\)"],
        correct: 1,
        explanation: "The nuclear radius is given by \\(R = R_0 A^{1/3}\\), where \\(R_0 \\approx 1.2\\) fm. This indicates that nuclear volume is proportional to mass number \\(A\\)."
    },
    {
        q: "Nuclear binding energy is:",
        options: ["Mass defect × \\(c^2\\)", "Mass defect / \\(c^2\\)", "Mass difference × \\(c^2\\)", "Mass difference / \\(c^2\\)"],
        correct: 0,
        explanation: "Nuclear binding energy is the energy required to disassemble a nucleus into its constituent protons and neutrons. It is given by \\(\\Delta E = \\Delta m \\times c^2\\), where \\(\\Delta m\\) is the mass defect."
    },
    {
        q: "One amu is equal to:",
        options: ["\\(1.66 \\times 10^{-27}\\) kg", "\\(166 \\times 10^{-15}\\) ng", "\\(166 \\times 10^{-20}\\) µg", "all of above"],
        correct: 3,
        explanation: "1 amu = \\(1.66 \\times 10^{-27}\\) kg = \\(1.66 \\times 10^{-24}\\) g = \\(1.66 \\times 10^{-15}\\) ng = \\(1.66 \\times 10^{-9}\\) µg. All given options are equivalent representations."
    },
    {
        q: "Mass of neutron is:",
        options: ["\\(1.67 \\times 10^{-31}\\) kg", "\\(1.67 \\times 10^{-27}\\) kg", "\\(9.1 \\times 10^{-31}\\) kg", "\\(1.67 \\times 10^{-19}\\) kg"],
        correct: 1,
        explanation: "The mass of a neutron is approximately \\(1.67 \\times 10^{-27}\\) kg (about 1 atomic mass unit)."
    },
    {
        q: "Charge on neutron is:",
        options: ["\\(+1.6 \\times 10^{-19}\\) C", "zero", "\\(-1.6 \\times 10^{-19}\\) C", "no definite charge"],
        correct: 1,
        explanation: "The neutron is a neutral particle with zero electric charge."
    },
    {
        q: "Charge on an electron was determined by:",
        options: ["Ampere", "Maxwell", "Millikan", "Thomson"],
        correct: 2,
        explanation: "Robert Millikan performed the oil-drop experiment (1909) and accurately determined the charge of an electron as \\(1.6 \\times 10^{-19}\\) C."
    },

    // ==================== ISOTOPES, ISOBARS, ISOTONES ====================
    {
        q: "A radioactive nucleus emits a beta particle, then the parent and daughter nuclei are:",
        options: ["Isotones", "Isotopes", "Isomers", "Isobars"],
        correct: 3,
        explanation: "When a nucleus emits a beta particle, the atomic number increases by 1 while the mass number remains the same. Thus, parent and daughter have the same mass number (A), making them isobars."
    },
    {
        q: "Isotones have the same number of:",
        options: ["Protons", "Electrons", "Neutrons", "All of the above"],
        correct: 2,
        explanation: "Isotones are nuclei that have the same number of neutrons (N) but different numbers of protons (Z)."
    },
    {
        q: "Nuclei having the same mass number but different atomic number are:",
        options: ["Isotopes", "Isobars", "Isotones", "Isomers"],
        correct: 1,
        explanation: "Isobars are nuclei with the same mass number (A) but different atomic numbers (Z). Example: \\(^{14}C\\) and \\(^{14}N\\)."
    },
    {
        q: "A mass spectrograph (spectrometer) sorts out:",
        options: ["molecules", "ions", "elements", "isotopes"],
        correct: 3,
        explanation: "A mass spectrometer separates ions based on their mass-to-charge ratio, allowing identification and separation of different isotopes of an element."
    },

    // ==================== RADIOACTIVE DECAY (8 questions) ====================
    {
        q: "An electron emitted in beta radiation originates from:",
        options: [
            "free electrons existing in the nuclei",
            "inner orbits of an atom",
            "photon escaping from the nucleus",
            "decay of a neutron in a nucleus"
        ],
        correct: 3,
        explanation: "In beta decay, a neutron in the nucleus transforms into a proton, an electron, and an antineutrino: \\(n \\rightarrow p + e^- + \\bar{\\nu}_e\\)."
    },
    {
        q: "Which of the following are not emitted by radioactive substances?",
        options: ["Protons", "Electrons", "Gamma Rays", "Helium Nuclei"],
        correct: 0,
        explanation: "Radioactive substances emit alpha particles (helium nuclei), beta particles (electrons), and gamma rays. Protons are not typically emitted in radioactive decay."
    },
    {
        q: "From where are the gamma rays originated?",
        options: ["The innermost shell", "The outermost shell", "Nucleus", "The outermost shell of the atom"],
        correct: 2,
        explanation: "Gamma rays originate from the nucleus when it transitions from an excited state to a lower energy state."
    },
    {
        q: "A nucleus undergoes gamma decay due to:",
        options: ["Excess of neutrons", "Excess of protons", "Its excited state", "Large mass"],
        correct: 2,
        explanation: "Gamma decay occurs when a nucleus is in an excited state. It returns to its ground state by emitting a gamma ray photon."
    },
    {
        q: "An \\(\\alpha\\)-particle is emitted from \\(^{226}_{88}Ra\\). What is the mass and atomic number of the daughter nucleus?",
        options: ["224 - 84", "220 - 80", "222 - 86", "226 - 87"],
        correct: 2,
        explanation: "When Radium-226 emits an alpha particle (\\(^{4}_{2}He\\)), the mass number decreases by 4 and atomic number decreases by 2: \\(226 - 4 = 222\\), \\(88 - 2 = 86\\)."
    },
    {
        q: "The penetration power of \\(\\beta\\)-particle as compared to \\(\\alpha\\)-particle is:",
        options: ["10 times more", "100 times more", "100 times less", "10 times less"],
        correct: 1,
        explanation: "Beta particles have greater penetrating power than alpha particles. A beta particle can penetrate about 100 times more material than an alpha particle."
    },
    {
        q: "Which one of the following radiations possesses maximum velocity?",
        options: ["\\(\\alpha\\)-rays", "\\(\\beta\\)-rays", "\\(\\gamma\\)-rays", "all have same speed"],
        correct: 2,
        explanation: "Gamma rays are electromagnetic radiation and travel at the speed of light (\\(3 \\times 10^8\\) m/s), faster than alpha and beta particles."
    },
    {
        q: "Which one of the following possesses greater penetration power?",
        options: ["\\(\\alpha\\)-rays", "\\(\\beta\\)-rays", "\\(\\gamma\\)-rays", "neutron-rays"],
        correct: 2,
        explanation: "Gamma rays have no mass and no charge, giving them the greatest penetrating power among nuclear radiations."
    },

    // ==================== NUCLEAR REACTIONS ====================
    {
        q: "During fusion of hydrogen into helium:",
        options: ["energy is absorbed", "energy is released", "mass increases", "mass is reduced due to energy released"],
        correct: 1,
        explanation: "In nuclear fusion, light nuclei combine to form heavier nuclei, releasing enormous energy because the mass of the product is slightly less than the sum of the reactants."
    },
    {
        q: "Sun's radiant energy is due to:",
        options: ["Nuclear Fusion", "Nuclear Fission", "Photoelectric Effect", "Radioactive Decay"],
        correct: 0,
        explanation: "The Sun's energy comes from nuclear fusion, where hydrogen nuclei combine to form helium, releasing vast amounts of energy."
    },
    {
        q: "Fission chain reaction in a nuclear reactor can be controlled by introducing:",
        options: ["iron rods", "graphite rods", "cadmium rods", "platinum rods"],
        correct: 2,
        explanation: "Cadmium and boron are good neutron absorbers. Control rods made of cadmium absorb excess neutrons and control the fission chain reaction."
    },
    {
        q: "During fission of U-235, the average kinetic energy per neutron is:",
        options: ["1 MeV", "2 MeV", "3 MeV", "4 MeV"],
        correct: 1,
        explanation: "In the fission of U-235, the average kinetic energy of the emitted neutrons is about 2 MeV."
    },

    // ==================== PARTICLE PHYSICS ====================
    {
        q: "A particle having the mass of an electron and the charge of a proton is called a:",
        options: ["antiproton", "positron", "gamma rays", "photon"],
        correct: 1,
        explanation: "A positron is the antiparticle of the electron. It has the same mass as an electron but a positive charge."
    },
    {
        q: "Antimatter consists of:",
        options: ["antiproton", "antineutron", "positron", "all of above"],
        correct: 3,
        explanation: "Antimatter consists of antiparticles: antiprotons, antineutrons, and positrons."
    },
    {
        q: "______ are composites of up (u), down (d), and strange (s) quarks.",
        options: ["Leptons", "Baryons", "Pions", "Hyperons"],
        correct: 1,
        explanation: "Baryons (such as protons and neutrons) are composite particles made of three quarks."
    },
    {
        q: "Quarks have ______ electronic charges.",
        options: ["zero", "one unit", "one unit negative", "fractional"],
        correct: 3,
        explanation: "Quarks have fractional electric charges: up quark has \\(+\\frac{2}{3}e\\), down quark has \\(-\\frac{1}{3}e\\)."
    },
    {
        q: "______ have not been observed physically.",
        options: ["Leptons", "Quarks", "Bosons", "Hadrons"],
        correct: 1,
        explanation: "Quarks have never been observed in isolation due to confinement. They are always bound together in hadrons."
    },

    // ==================== DETECTORS & INSTRUMENTS ====================
    {
        q: "The following detector uses the principle of ionization of gas by the energetic particle:",
        options: ["ionization chamber", "GM-counter", "cloud chamber", "all the above"],
        correct: 3,
        explanation: "All three detectors (ionization chamber, Geiger-Müller counter, and cloud chamber) operate on gas ionization."
    },
    {
        q: "Gas amplification in ionization chamber is:",
        options: ["equal to unity", "less than unity", "\\(\\sim 10^3\\)", "\\(\\sim 10^8\\)"],
        correct: 0,
        explanation: "In an ionization chamber, gas amplification is unity — each primary ion pair is collected without multiplication."
    },
    {
        q: "The gas amplification in GM-counter is:",
        options: ["less than unity", "equal to unity", "\\(\\sim 10^3\\)", "\\(\\sim 10^8\\)"],
        correct: 3,
        explanation: "Geiger-Müller counters operate with large gas amplification (\\(\\sim 10^8\\)), producing a large output pulse per event."
    },
    {
        q: "Quenching gas in GM-tube is:",
        options: ["air", "Argon", "Bromine vapour", "Water vapour"],
        correct: 2,
        explanation: "Bromine or alcohol vapor is used as a quenching gas to stop continuous discharge in GM tubes."
    },
    {
        q: "Geiger counter is suitable for:",
        options: ["fast counting", "extremely fast counting", "slow counting", "all situations"],
        correct: 0,
        explanation: "Geiger-Müller counters are suitable for fast counting rates but have a dead time after each pulse."
    },

    // ==================== ACCELERATORS ====================
    {
        q: "A frequency modulated supply is employed in:",
        options: ["cyclotron", "synchrocyclotron", "betatron", "electron-synchrotron"],
        correct: 1,
        explanation: "Synchrocyclotrons use frequency modulation to maintain resonance as particles gain mass at relativistic speeds."
    },
    {
        q: "The magnetic pole-pieces are just above and below the donut tube in:",
        options: ["cyclotron", "betatron", "synchrocyclotron", "electron-synchrotron"],
        correct: 1,
        explanation: "In a betatron, the donut-shaped vacuum tube is placed between the pole pieces of an electromagnet."
    },

    // ==================== ATOMIC MODELS & PAIR PRODUCTION ====================
    {
        q: "According to which model the density of atom is uniform?",
        options: ["J.J. Thomson model", "Rutherford's model", "Bohr's model", "all contradict"],
        correct: 0,
        explanation: "J.J. Thomson's 'plum pudding' model proposed uniform density. Rutherford's and Bohr's models have a dense nucleus."
    },
    {
        q: "Pair production cannot take place in vacuum as ______ is not conserved:",
        options: ["energy", "charge", "momentum", "mass"],
        correct: 2,
        explanation: "Pair production cannot occur in vacuum because momentum would not be conserved. It requires a nucleus to conserve momentum."
    },

    // ==================== APPLICATIONS ====================
    {
        q: "Strontium-90 is used as:",
        options: ["\\(\\alpha\\)-source", "\\(\\beta\\)-source", "\\(\\gamma\\)-source", "neutron source"],
        correct: 1,
        explanation: "Strontium-90 undergoes beta decay, emitting beta particles. It is used as a beta source in medical and industrial applications."
    },
    {
        q: "The most useful tracer is:",
        options: ["Sr-90", "I-131", "Ca-41", "C-14"],
        correct: 1,
        explanation: "Iodine-131 is widely used as a radioactive tracer in medicine because iodine is selectively absorbed by the thyroid gland."
    },
    {
        q: "Why \\(\\gamma\\)-rays are used to sterilize surgical equipments?",
        options: ["chargeless", "massless", "highly penetrating", "all of above"],
        correct: 3,
        explanation: "Gamma rays are ideal for sterilization because they are chargeless, massless, and highly penetrating."
    },
    {
        q: "TV sets and microwave ovens emit:",
        options: ["X-rays", "\\(\\alpha\\)-rays", "\\(\\beta\\)-rays", "\\(\\gamma\\)-rays"],
        correct: 0,
        explanation: "TV sets and microwave ovens can emit X-rays, though modern devices have shielding to prevent harmful emissions."
    },

    // ==================== MISCELLANEOUS ====================
    {
        q: "A \\(\\beta\\)-particle can produce fluorescence in:",
        options: ["ZnS", "barium platinocyanide", "calcium tungstate", "all of above"],
        correct: 3,
        explanation: "Beta particles can cause fluorescence in various phosphors including zinc sulfide (ZnS) and others."
    },
    {
        q: "Charge on \\(\\alpha\\)-particle is:",
        options: ["+1", "-1", "+2", "-2"],
        correct: 2,
        explanation: "An alpha particle consists of 2 protons and 2 neutrons, giving it a charge of +2."
    }
];