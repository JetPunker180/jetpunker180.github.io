window.questions = [
    // ==================== PHOTOELECTRIC EFFECT ====================
    {
        q: "The photoelectric effect was explained by:",
        options: ["Max Planck", "Albert Einstein", "Niels Bohr", "Louis de Broglie"],
        correct: 1,
        explanation: "Albert Einstein explained the photoelectric effect in 1905 using the concept of photons, for which he received the Nobel Prize in 1921."
    },
    {
        q: "The K.E of photoelectrons depends on:",
        options: ["angle of incident light", "intensity of incident light", "both A and B", "frequency of incident light"],
        correct: 3,
        explanation: "The kinetic energy of photoelectrons depends only on the frequency of incident light, not on intensity or angle. According to Einstein's photoelectric equation, \\(K.E_{\\text{max}} = hf - \\phi\\)."
    },
    {
        q: "If energy of photon is 5 eV, stopping potential is 3.5 V, then the work function of the metal is:",
        options: ["5 eV", "7 eV", "1.5 eV", "8.5 eV"],
        correct: 2,
        explanation: "Using Einstein's photoelectric equation: \\(eV_s = hf - \\phi\\). Here, photon energy \\(E = 5\\) eV, stopping potential \\(V_s = 3.5\\) V gives \\(eV_s = 3.5\\) eV. So \\(\\phi = E - eV_s = 5 - 3.5 = 1.5\\) eV."
    },
    {
        q: "The work function of a metal is:",
        options: ["minimum energy to remove an electron", "maximum kinetic energy of photoelectrons", "threshold frequency", "energy of incident photon"],
        correct: 0,
        explanation: "The work function is the minimum energy required to remove an electron from the surface of a metal."
    },
    {
        q: "Which experiment demonstrated the failure of classical mechanics to explain the behavior of light?",
        options: ["Stern-Gerlach experiment", "Photoelectric effect", "Michelson-Morley experiment", "Double-slit experiment"],
        correct: 1,
        explanation: "The photoelectric effect could not be explained by classical wave theory of light. Einstein's explanation using photons (quantum theory) successfully explained it."
    },
    {
        q: "Classical mechanics failed to explain the behavior of light in the:",
        options: ["rates of formation of chemicals", "photoelectric effect", "quantum entanglement", "Stern-Gerlach experiment"],
        correct: 1,
        explanation: "The photoelectric effect could not be explained by classical wave theory of light. Einstein's explanation using photons (quantum theory) successfully explained it."
    },

    // ==================== COMPTON EFFECT ====================
    {
        q: "Presence of Photon was confirmed by:",
        options: ["Uncertainty principle", "De Broglie", "Photo electric effect", "Compton effect"],
        correct: 3,
        explanation: "The Compton effect (1923) provided direct confirmation of the particle nature of light (photons) by showing that X-rays scatter off electrons with a change in wavelength consistent with photon momentum."
    },
    {
        q: "The Compton effect demonstrates:",
        options: ["particle nature of light", "wave nature of light", "wave nature of electrons", "particle nature of electrons"],
        correct: 0,
        explanation: "The Compton effect, where X-ray wavelength increases after scattering, demonstrates the particle nature of light (photons) through momentum transfer."
    },
    {
        q: "If Compton shift is half of Compton wavelength, then the scattering angle would be:",
        options: ["\\(60^\\circ\\)", "\\(30^\\circ\\)", "\\(90^\\circ\\)", "\\(120^\\circ\\)"],
        correct: 0,
        explanation: "Compton shift \\(\\Delta\\lambda = \\frac{h}{mc}(1 - \\cos\\theta)\\). Compton wavelength \\(\\lambda_c = \\frac{h}{mc}\\). Given \\(\\Delta\\lambda = \\frac{\\lambda_c}{2}\\), so \\(\\frac{h}{mc}(1 - \\cos\\theta) = \\frac{1}{2} \\cdot \\frac{h}{mc} \\implies 1 - \\cos\\theta = \\frac{1}{2} \\implies \\cos\\theta = \\frac{1}{2} \\implies \\theta = 60^\\circ\\)."
    },
    {
        q: "In Compton scattering, the change in wavelength will be maximum, if:",
        options: ["angle of scattering is \\(180^\\circ\\)", "angle of scattering is \\(60^\\circ\\)", "angle of scattering is \\(90^\\circ\\)", "angle of scattering is \\(0^\\circ\\)"],
        correct: 0,
        explanation: "The Compton shift formula is \\(\\Delta\\lambda = \\frac{h}{mc}(1 - \\cos\\theta)\\). The shift is maximum when \\(\\cos\\theta\\) is minimum, i.e., \\(\\cos\\theta = -1\\) at \\(\\theta = 180^\\circ\\), giving \\(\\Delta\\lambda = \\frac{2h}{mc}\\)."
    },

    // ==================== DE BROGLIE WAVES & WAVE-PARTICLE DUALITY ====================
    {
        q: "The wavelength associated with a moving particle is given by:",
        options: ["\\(\\lambda = \\frac{h}{mv}\\)", "\\(\\lambda = \\frac{h}{p}\\)", "\\(\\lambda = \\frac{h}{\\sqrt{2mE}}\\)", "All of the above"],
        correct: 3,
        explanation: "De Broglie wavelength is \\(\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mE}}\\). All three expressions are equivalent."
    },
    {
        q: "The wave nature of particles was experimentally confirmed by:",
        options: ["Davisson and Germer", "J.J. Thomson", "Rutherford", "Max Planck"],
        correct: 0,
        explanation: "Davisson and Germer experimentally confirmed the wave nature of electrons through electron diffraction from a nickel crystal in 1927."
    },
    {
        q: "Which of the following particles, all having the same K.E., has the shortest wavelength?",
        options: ["electron", "proton", "neutron", "alpha particle"],
        correct: 3,
        explanation: "De Broglie wavelength \\(\\lambda = \\frac{h}{\\sqrt{2mE}}\\). For the same kinetic energy \\(E\\), wavelength is inversely proportional to \\(\\sqrt{m}\\). The alpha particle has the largest mass, so it has the shortest wavelength."
    },
    {
        q: "Which equation describes the behavior of matter waves?",
        options: ["De Broglie relation", "Newton's second law", "Einstein's mass-energy equivalence", "Schrödinger's equation", "Planck's equation"],
        correct: 3,
        explanation: "Schrödinger's equation is the fundamental equation of quantum mechanics that describes how matter waves evolve over time."
    },
    {
        q: "What does the wave-particle duality principle suggest about the nature of particles?",
        options: [
            "They exhibit neither wave-like nor particle-like behavior",
            "They only exhibit wave-like behavior",
            "Probabilistic determination of particles' speed and location",
            "They only exhibit particle-like behavior",
            "They exhibit both wave-like and particle-like behavior"
        ],
        correct: 4,
        explanation: "Wave-particle duality states that particles such as electrons exhibit both wave-like and particle-like properties depending on the experimental setup."
    },
    {
        q: "Which of the following is a fundamental principle of quantum mechanics?",
        options: ["Conservation of energy", "Conservation of momentum", "Maxwell's relation", "Wave-particle duality", "Newton's laws of motion"],
        correct: 3,
        explanation: "Wave-particle duality is a fundamental principle of quantum mechanics stating that particles exhibit both wave-like and particle-like properties."
    },

    // ==================== HEISENBERG UNCERTAINTY PRINCIPLE ====================
    {
        q: "Heisenberg's uncertainty principle states that:",
        options: ["\\(\\Delta x \\cdot \\Delta p \\geq \\frac{h}{4\\pi}\\)", "\\(\\Delta E \\cdot \\Delta t \\geq \\frac{h}{4\\pi}\\)", "\\(\\Delta x \\cdot \\Delta p = \\frac{h}{4\\pi}\\)", "Both A and B"],
        correct: 3,
        explanation: "Heisenberg's uncertainty principle states that \\(\\Delta x \\cdot \\Delta p \\geq \\frac{h}{4\\pi}\\) and \\(\\Delta E \\cdot \\Delta t \\geq \\frac{h}{4\\pi}\\). Both position-momentum and energy-time uncertainties exist."
    },
    {
        q: "In Heisenberg Principle:",
        options: [
            "Position and Momentum cannot be measured accurately of sub-atomic particles",
            "Position and Momentum cannot be measured accurately of electrons",
            "Position and Momentum can be measured accurately of electrons",
            "Position and Momentum can be measured accurately of sub-atomic particles"
        ],
        correct: 0,
        explanation: "Heisenberg's uncertainty principle states that the position and momentum of a subatomic particle cannot both be measured precisely simultaneously."
    },
    {
        q: "What is the Heisenberg Uncertainty Principle?",
        options: [
            "It describes the behavior of waves in a quantum system",
            "It defines the exact location of an electron in an atom",
            "It is possible to determine both energy and position of any particle",
            "It quantifies the total energy of a particle",
            "It states that the position and momentum of a particle cannot be known simultaneously with arbitrary precision"
        ],
        correct: 4,
        explanation: "Heisenberg's uncertainty principle states that the more precisely the position of a particle is known, the less precisely its momentum can be known, and vice versa: \\(\\Delta x \\cdot \\Delta p \\geq \\frac{h}{4\\pi}\\)."
    },

    // ==================== PLANCK'S QUANTUM THEORY ====================
    {
        q: "According to Planck's quantum theory, radiation is emitted or absorbed in:",
        options: ["continuous waves", "discrete packets called quanta", "any amount of energy", "waves only"],
        correct: 1,
        explanation: "Planck's quantum theory states that radiation is emitted or absorbed in discrete packets called quanta or photons, not continuously."
    },
    {
        q: "The dimension of Planck's constant is similar to:",
        options: ["linear momentum", "angular momentum", "impulse", "potential energy"],
        correct: 1,
        explanation: "Planck's constant \\(h\\) has dimensions of energy × time = \\([ML^2T^{-2}] \\times [T] = [ML^2T^{-1}]\\). Angular momentum also has dimensions \\([ML^2T^{-1}]\\)."
    },
    {
        q: "The energy of a photon is given by:",
        options: ["\\(E = h\\lambda\\)", "\\(E = \\frac{hc}{\\lambda}\\)", "\\(E = mc^2\\)", "\\(E = \\frac{hf}{c}\\)"],
        correct: 1,
        explanation: "The energy of a photon is \\(E = hf = \\frac{hc}{\\lambda}\\), where \\(h\\) is Planck's constant, \\(f\\) is frequency, \\(c\\) is speed of light, and \\(\\lambda\\) is wavelength."
    },
    {
        q: "Who is considered the father of quantum mechanics?",
        options: ["Louis De Broglie", "Max Planck", "Albert Einstein", "Erwin Schrödinger", "Werner Heisenberg"],
        correct: 1,
        explanation: "Max Planck is considered the father of quantum mechanics for his introduction of the quantum concept in 1900 to explain blackbody radiation."
    },

    // ==================== PAIR PRODUCTION & ANTIMATTER ====================
    {
        q: "Radiation energy is converted into matter in case of:",
        options: ["photoelectric effect", "pair production", "Compton effect", "annihilation of matter"],
        correct: 1,
        explanation: "In pair production, a high-energy photon interacts with a nucleus and converts into an electron-positron pair, converting radiation energy into matter (\\(E = mc^2\\))."
    },
    {
        q: "Every particle has a corresponding antiparticle with:",
        options: ["the same mass", "opposite charge", "same energy", "both A and B"],
        correct: 3,
        explanation: "Antiparticles have the same mass as their corresponding particles but opposite charge. For example, the positron has same mass as electron but positive charge."
    },
    {
        q: "A particle having the mass of an electron and the charge of a proton is called a:",
        options: ["antiproton", "positron", "gamma rays", "photon"],
        correct: 1,
        explanation: "A positron is the antiparticle of the electron. It has the same mass as an electron but a positive charge (\\(+1.6 \\times 10^{-19}\\) C)."
    },

    // ==================== QUANTUM MECHANICS FUNDAMENTALS ====================
    {
        q: "The failure of classical physics to account for the behavior of particles at the atomic scale led to the development of:",
        options: ["quantum mechanics", "thermodynamics", "kinetics", "general relativity", "classical mechanics"],
        correct: 0,
        explanation: "Quantum mechanics was developed in the early 20th century to explain phenomena that classical physics could not account for."
    },
    {
        q: "Classical physics failed to explain the behavior of electrons in atoms because of:",
        options: ["their discrete energy levels", "their lack of mass", "their inability to form chemical bonds", "their wave-particle duality", "lack of certainty about the particle's location"],
        correct: 0,
        explanation: "Classical physics predicted that electrons orbiting the nucleus would continuously radiate energy and spiral into the nucleus. Quantum mechanics explained the discrete energy levels observed in atomic spectra."
    },
    {
        q: "Which of the following is NOT a consequence of quantum mechanics?",
        options: [
            "Deterministic behavior of particles",
            "Quantization of energy levels",
            "Quantum entanglement",
            "Probabilistic determination of particles' behavior and location",
            "Wave-particle duality"
        ],
        correct: 0,
        explanation: "Deterministic behavior is a feature of classical mechanics, not quantum mechanics. Quantum mechanics is fundamentally probabilistic."
    },
    {
        q: "Which of the following is a postulate of quantum mechanics?",
        options: [
            "Light behaves solely as a wave",
            "The position and momentum of a particle can be precisely known",
            "The energy of an electron is quantized",
            "Energy is conserved in all physical processes",
            "Heating of black body will lead to ultraviolet catastrophe"
        ],
        correct: 2,
        explanation: "Quantization of energy is a fundamental postulate of quantum mechanics, as demonstrated by Bohr's atomic model and Planck's quantum theory."
    },
    {
        q: "Given that \\(\\psi(x) = A e^{ikx}\\), when operated upon the operator \\(\\hat{p} = \\frac{h}{2\\pi i} \\frac{d}{dx}\\), what is the eigenvalue?",
        options: ["\\(-i\\frac{h}{2\\pi}\\)", "\\(2\\frac{h}{2\\pi}\\)", "\\(i\\frac{h}{2\\pi}\\)", "\\(\\frac{hk}{2\\pi}\\)", "\\(2\\pi hk\\)"],
        correct: 3,
        explanation: "The momentum operator is \\(\\hat{p} = \\frac{h}{2\\pi i} \\frac{d}{dx}\\). Operating on \\(\\psi(x) = A e^{ikx}\\): \\(\\hat{p}\\psi = \\frac{h}{2\\pi i} (ik A e^{ikx}) = \\frac{hk}{2\\pi} \\psi\\). The eigenvalue is \\(\\frac{hk}{2\\pi}\\)."
    },

    // ==================== BLACKBODY RADIATION ====================
    {
        q: "At higher temperature, the hot body emits radiations of:",
        options: ["higher energy", "longer wavelength", "shorter wavelength", "both A and C"],
        correct: 3,
        explanation: "According to Wien's displacement law, as temperature increases, the peak wavelength decreases (shorter wavelength) and energy increases. So both higher energy and shorter wavelength are correct."
    },
    {
        q: "Which of the following has greatest energy?",
        options: ["Microwave", "Radio waves", "Ultraviolet", "Gamma rays"],
        correct: 3,
        explanation: "Energy of electromagnetic radiation is proportional to frequency. Gamma rays have the highest frequency and therefore the greatest energy among EM waves."
    },

    // ==================== MISCELLANEOUS ====================
    {
        q: "Quasi-free electron means:",
        options: ["tightly bound electron", "loosely bound electron", "completely free electron", "any of these"],
        correct: 1,
        explanation: "A quasi-free electron is an electron that is nearly free but still under weak binding forces, such as conduction electrons in metals or electrons in a crystal lattice."
    }
];