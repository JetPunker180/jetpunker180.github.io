let jsq_questions = [
    // ==================== PARTICLE PHYSICS & NUCLEAR ====================
    {
        "id": 1,
        "question": "A proton is composed of how many quarks?",
        "options": {
            "a": "2 Up, 2 Down",
            "b": "2 Up, 1 Down",
            "c": "1 Up, 2 Down",
            "d": "3 Up"
        },
        "answer": "b"
    },
    {
        "id": 2,
        "question": "What is the charge on an 'Up' quark?",
        "options": {
            "a": "\\(-\\frac{1}{3}e\\)",
            "b": "\\(+\\frac{1}{3}e\\)",
            "c": "\\(+\\frac{2}{3}e\\)",
            "d": "\\(-\\frac{2}{3}e\\)"
        },
        "answer": "c"
    },

    // ==================== ELECTROSTATICS & MOTION ====================
    {
        "id": 3,
        "question": "The Coulomb force between an electron and nucleus causes what type of motion?",
        "options": {
            "a": "Linear",
            "b": "Circular",
            "c": "Random",
            "d": "Oscillatory"
        },
        "answer": "b"
    },

    // ==================== THERMODYNAMICS ====================
    {
        "id": 4,
        "question": "In an isothermal process, if pressure is decreased three times, the volume will:",
        "options": {
            "a": "Decrease 3 times",
            "b": "Increase \\(\\frac{1}{3}\\) times",
            "c": "Increase 3 times",
            "d": "Remain constant"
        },
        "answer": "c"
    },

    // ==================== NUCLEAR PHYSICS ====================
    {
        "id": 5,
        "question": "Atoms with the same mass number but different atomic numbers are called:",
        "options": {
            "a": "Isotopes",
            "b": "Isotones",
            "c": "Isobars",
            "d": "Isomers"
        },
        "answer": "c"
    },
    {
        "id": 6,
        "question": "According to Lenz's Law, the direction of induced current in a coil:",
        "options": {
            "a": "Aids the motion",
            "b": "Opposes the motion",
            "c": "Is perpendicular",
            "d": "Is zero"
        },
        "answer": "b"
    },
    {
        "id": 7,
        "question": "An electric motor converts which energy into mechanical energy?",
        "options": {
            "a": "Heat",
            "b": "Chemical",
            "c": "Electrical",
            "d": "Nuclear"
        },
        "answer": "c"
    },
    {
        "id": 8,
        "question": "A generator operates on the principle of converting:",
        "options": {
            "a": "Electrical to Mechanical",
            "b": "Mechanical to Electrical",
            "c": "Heat to Light",
            "d": "Sound to Heat"
        },
        "answer": "b"
    },
    {
        "id": 9,
        "question": "In alpha decay, a Uranium-238 nucleus emits a helium nucleus, leaving:",
        "options": {
            "a": "Thorium-234",
            "b": "Uranium-235",
            "c": "Plutonium-239",
            "d": "Radon-226"
        },
        "answer": "a"
    },

    // ==================== SEMICONDUCTORS ====================
    {
        "id": 10,
        "question": "In a P-type semiconductor, the majority charge carriers are:",
        "options": {
            "a": "Electrons",
            "b": "Protons",
            "c": "Neutrons",
            "d": "Holes"
        },
        "answer": "d"
    },

    // ==================== OSCILLATIONS & WAVES ====================
    {
        "id": 11,
        "question": "If the angular velocity \\(\\omega\\) of a pendulum is doubled, the time period becomes:",
        "options": {
            "a": "Double",
            "b": "Half",
            "c": "Four times",
            "d": "One-fourth"
        },
        "answer": "b"
    },

    // ==================== DIMENSIONAL ANALYSIS ====================
    {
        "id": 12,
        "question": "In the equation \\(x = at^2 + bt\\), if \\(x\\) is distance and \\(t\\) is time, the dimensions of \\(a\\) are:",
        "options": {
            "a": "\\([LT^{-1}]\\)",
            "b": "\\([LT^{-2}]\\)",
            "c": "\\([L^2 T^{-2}]\\)",
            "d": "\\([LT^{-3}]\\)"
        },
        "answer": "b"
    },
    {
        "id": 13,
        "question": "The expression \\(\\sqrt{\\frac{FL}{m}}\\) has the same dimensions as:",
        "options": {
            "a": "Force",
            "b": "Acceleration",
            "c": "Velocity",
            "d": "Time"
        },
        "answer": "c"
    },

    // ==================== PROJECTILE MOTION ====================
    {
        "id": 14,
        "question": "The relationship between horizontal range \\(R\\) and maximum range \\(R_{max}\\) is:",
        "options": {
            "a": "\\(R = R_{max} \\cos\\theta\\)",
            "b": "\\(R = R_{max} \\sin(2\\theta)\\)",
            "c": "\\(R = 2R_{max} \\sin\\theta\\)",
            "d": "\\(R = R_{max} / \\sin(2\\theta)\\)"
        },
        "answer": "b"
    },

    // ==================== SEMICONDUCTORS (N-type) ====================
    {
        "id": 15,
        "question": "N-type semiconductors contain an excess of:",
        "options": {
            "a": "Holes",
            "b": "Protons",
            "c": "Free electrons",
            "d": "Neutrons"
        },
        "answer": "c"
    },

    // ==================== GRAVITATION ====================
    {
        "id": 16,
        "question": "If the mass of a planet is doubled while the radius remains constant, escape velocity becomes:",
        "options": {
            "a": "\\(\\sqrt{2}\\) times",
            "b": "2 times",
            "c": "4 times",
            "d": "Half"
        },
        "answer": "a"
    },

    // ==================== ATOMIC PHYSICS (HYDROGEN SPECTRUM) ====================
    {
        "id": 17,
        "question": "If an electron in Hydrogen jumps from the 6th to the 2nd orbit, it belongs to the:",
        "options": {
            "a": "Lyman series",
            "b": "Balmer series",
            "c": "Paschen series",
            "d": "Pfund series"
        },
        "answer": "b"
    },

    // ==================== SOUND & WAVES ====================
    {
        "id": 18,
        "question": "An echo from the sea bed is received after 5 seconds. If sound speed is 340 m/s, the depth is:",
        "options": {
            "a": "1700 m",
            "b": "850 m",
            "c": "340 m",
            "d": "425 m"
        },
        "answer": "b"
    },

    // ==================== ELECTRIC CIRCUITS ====================
    {
        "id": 19,
        "question": "Resistors of 1, 2, and 3 ohms are in parallel with a 30V battery. The current through the 2-ohm resistor is:",
        "options": {
            "a": "5 A",
            "b": "10 A",
            "c": "15 A",
            "d": "30 A"
        },
        "answer": "c"
    },

    // ==================== MECHANICS (IMPULSE) ====================
    {
        "id": 20,
        "question": "Impulse is defined as the:",
        "options": {
            "a": "Rate of change of momentum",
            "b": "Change in momentum",
            "c": "Total energy",
            "d": "Change in velocity"
        },
        "answer": "b"
    },

    // ==================== ATOMIC PHYSICS (BALMER SERIES) ====================
    {
        "id": 21,
        "question": "In the Balmer series, a transition to \\(n=2\\) from \\(n=4\\) produces what type of light?",
        "options": {
            "a": "Ultraviolet",
            "b": "Visible",
            "c": "Infrared",
            "d": "X-ray"
        },
        "answer": "b"
    },

    // ==================== ELECTROMAGNETIC SPECTRUM ====================
    {
        "id": 22,
        "question": "Infrared waves lie in the spectrum between:",
        "options": {
            "a": "Visible and Ultraviolet",
            "b": "Visible and Radio",
            "c": "X-ray and Gamma",
            "d": "Micro and Radio"
        },
        "answer": "b"
    },

    // ==================== DOPPLER EFFECT ====================
    {
        "id": 23,
        "question": "If a source moves toward a stationary observer at \\(\\frac{1}{3}\\) the speed of sound, the apparent frequency is:",
        "options": {
            "a": "\\(1.5f\\)",
            "b": "\\(0.5f\\)",
            "c": "\\(2f\\)",
            "d": "\\(1.33f\\)"
        },
        "answer": "a"
    },

    // ==================== UNITS & DIMENSIONS (MAGNETIC FIELD) ====================
    {
        "id": 24,
        "question": "The SI base units for 1 Tesla are:",
        "options": {
            "a": "\\(\\text{kg} \\cdot \\text{s}^{-2} \\cdot \\text{A}^{-1}\\)",
            "b": "\\(\\text{N} \\cdot \\text{m}^{-1} \\cdot \\text{A}^{-1}\\)",
            "c": "\\(\\text{kg} \\cdot \\text{m} \\cdot \\text{s}^{-1}\\)",
            "d": "\\(\\text{V} \\cdot \\text{s} \\cdot \\text{m}^{-2}\\)"
        },
        "answer": "a"
    },

    // ==================== FLUID MECHANICS ====================
    {
        "id": 25,
        "question": "When a body reaches terminal velocity in a fluid, the net force acting on it is:",
        "options": {
            "a": "Equal to weight",
            "b": "Equal to viscous drag",
            "c": "Zero",
            "d": "Maximum"
        },
        "answer": "c"
    },

    // ==================== ELECTROMAGNETISM (TRANSFORMER) ====================
    {
        "id": 26,
        "question": "A transformer operates exclusively on:",
        "options": {
            "a": "Direct Current (DC)",
            "b": "Alternating Current (AC)",
            "c": "High Voltage DC",
            "d": "Pulsating DC"
        },
        "answer": "b"
    },

    // ==================== RADIOACTIVE DECAY ====================
    {
        "id": 27,
        "question": "An element decays to \\(\\frac{1}{8}\\)th its original amount in 24 hours. Its half-life is:",
        "options": {
            "a": "4 hours",
            "b": "6 hours",
            "c": "8 hours",
            "d": "12 hours"
        },
        "answer": "c"
    },

    // ==================== ELECTROSTATICS (POTENTIAL) ====================
    {
        "id": 28,
        "question": "Electric potential is defined as:",
        "options": {
            "a": "Force per unit charge",
            "b": "Work done per unit charge",
            "c": "Charge per unit area",
            "d": "Energy per unit time"
        },
        "answer": "b"
    },

    // ==================== NUCLEAR PHYSICS (IONIZING POWER) ====================
    {
        "id": 29,
        "question": "Which particle has the highest ionizing power?",
        "options": {
            "a": "Alpha",
            "b": "Beta",
            "c": "Gamma",
            "d": "Neutron"
        },
        "answer": "a"
    },

    // ==================== ATOMIC STRUCTURE ====================
    {
        "id": 30,
        "question": "An atom acquires a net negative charge when:",
        "options": {
            "a": "A proton is added",
            "b": "An electron is removed",
            "c": "An electron is added",
            "d": "A neutron is removed"
        },
        "answer": "c"
    },

    // ==================== ELECTRONICS (RECTIFICATION) ====================
    {
        "id": 31,
        "question": "Rectification is the process of converting:",
        "options": {
            "a": "DC to AC",
            "b": "AC to DC",
            "c": "Low V to High V",
            "d": "Heat to Electricity"
        },
        "answer": "b"
    },

    // ==================== WAVES (TIME PERIOD) ====================
    {
        "id": 32,
        "question": "The time period of a sound wave with a frequency of 40 Hz is:",
        "options": {
            "a": "\\(0.025 \\text{ s}\\)",
            "b": "\\(0.25 \\text{ s}\\)",
            "c": "\\(0.05 \\text{ s}\\)",
            "d": "\\(0.04 \\text{ s}\\)"
        },
        "answer": "a"
    },

    // ==================== MAGNETISM (FORCE ON CONDUCTOR) ====================
    {
        "id": 33,
        "question": "If the length of a conductor in a magnetic field is halved, the magnetic force becomes:",
        "options": {
            "a": "Double",
            "b": "Half",
            "c": "Four times",
            "d": "Constant"
        },
        "answer": "b"
    },

    // ==================== SOUND (TEMPERATURE EFFECT) ====================
    {
        "id": 34,
        "question": "When air temperature increases, the speed of sound:",
        "options": {
            "a": "Decreases",
            "b": "Increases",
            "c": "Remains same",
            "d": "Becomes zero"
        },
        "answer": "b"
    },

    // ==================== ELECTROMAGNETISM (LC CIRCUIT) ====================
    {
        "id": 35,
        "question": "The resonant frequency of an LC circuit is given by:",
        "options": {
            "a": "\\(2\\pi \\sqrt{LC}\\)",
            "b": "\\(\\frac{1}{2\\pi \\sqrt{LC}}\\)",
            "c": "\\(\\sqrt{\\frac{L}{C}}\\)",
            "d": "\\(\\frac{1}{\\sqrt{LC}}\\)"
        },
        "answer": "b"
    },

    // ==================== WAVES (HEARING RANGE) ====================
    {
        "id": 36,
        "question": "For a 20 Hz to 20,000 Hz hearing range, the corresponding time periods are:",
        "options": {
            "a": "0.05s to 0.00005s",
            "b": "0.5s to 0.005s",
            "c": "0.02s to 0.0002s",
            "d": "1s to 0.1s"
        },
        "answer": "a"
    },

    // ==================== OPTICS (YDSE) ====================
    {
        "id": 37,
        "question": "Maximum fringe spacing in YDSE is obtained using which color?",
        "options": {
            "a": "Blue",
            "b": "Green",
            "c": "Red",
            "d": "Violet"
        },
        "answer": "c"
    },

    // ==================== HEAT (ENERGY) ====================
    {
        "id": 38,
        "question": "A 10W bulb running for 1 hour produces how much heat energy?",
        "options": {
            "a": "10 J",
            "b": "600 J",
            "c": "36,000 J",
            "d": "3,600 J"
        },
        "answer": "c"
    },

    // ==================== WORK & ENERGY ====================
    {
        "id": 39,
        "question": "Work done applying force perpendicular to the direction of motion is:",
        "options": {
            "a": "Maximum",
            "b": "Zero",
            "c": "Negative",
            "d": "Minimum"
        },
        "answer": "b"
    },

    // ==================== MAGNETISM (SOLENOID) ====================
    {
        "id": 40,
        "question": "If Solenoid 1 has double the turns of Solenoid 2, their magnetic field ratio \\(B_1 : B_2\\) is:",
        "options": {
            "a": "1:1",
            "b": "2:1",
            "c": "1:2",
            "d": "4:1"
        },
        "answer": "b"
    },

    // ==================== UNITS (MAGNETIC FLUX) ====================
    {
        "id": 41,
        "question": "The SI base units for Magnetic Flux (Weber) are:",
        "options": {
            "a": "\\(\\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-2} \\cdot \\text{A}^{-1}\\)",
            "b": "\\(\\text{kg} \\cdot \\text{m} \\cdot \\text{s}^{-1}\\)",
            "c": "\\(\\text{N} \\cdot \\text{m} \\cdot \\text{A}\\)",
            "d": "\\(\\text{kg} \\cdot \\text{m}^2 \\cdot \\text{s}^{-3}\\)"
        },
        "answer": "a"
    },

    // ==================== ELECTRIC CIRCUITS (RESISTORS) ====================
    {
        "id": 42,
        "question": "Equivalent resistance for \\(R_1\\) and \\(R_2\\) in parallel is:",
        "options": {
            "a": "\\(R_1 + R_2\\)",
            "b": "\\(\\frac{R_1 R_2}{R_1 + R_2}\\)",
            "c": "\\(\\frac{R_1 + R_2}{R_1 R_2}\\)",
            "d": "\\(R_1 - R_2\\)"
        },
        "answer": "b"
    },

    // ==================== NUCLEAR REACTORS ====================
    {
        "id": 43,
        "question": "Which material is used as a neutron absorber in reactors?",
        "options": {
            "a": "Iron",
            "b": "Carbon",
            "c": "Boron",
            "d": "Lead"
        },
        "answer": "c"
    },

    // ==================== MODERN PHYSICS (PHOTON ENERGY ORDER) ====================
    {
        "id": 44,
        "question": "Order of photon energy from lowest to highest for interactions:",
        "options": {
            "a": "Pair > Compton > Photo",
            "b": "Photo > Compton > Pair",
            "c": "Photo < Compton < Pair",
            "d": "Compton < Photo < Pair"
        },
        "answer": "c"
    },

    // ==================== GRAVITATION (g VARIATION) ====================
    {
        "id": 45,
        "question": "If Earth's radius and mass are both reduced by factor 4, gravity \\(g\\) becomes:",
        "options": {
            "a": "\\(\\frac{g}{4}\\)",
            "b": "\\(\\frac{g}{16}\\)",
            "c": "\\(4g\\)",
            "d": "\\(16g\\)"
        },
        "answer": "c"
    },

    // ==================== MECHANICS (FREE FALL) ====================
    {
        "id": 46,
        "question": "A ball dropped from 1.75m reaches the ground in approximately:",
        "options": {
            "a": "0.59 s",
            "b": "0.35 s",
            "c": "1.0 s",
            "d": "0.75 s"
        },
        "answer": "a"
    },

    // ==================== MAGNETISM (CHARGED PARTICLE MOTION) ====================
    {
        "id": 47,
        "question": "A charge entering a magnetic field at 25 degrees moves in a:",
        "options": {
            "a": "Straight line",
            "b": "Circular path",
            "c": "Helical path",
            "d": "Parabolic path"
        },
        "answer": "c"
    },

    // ==================== MAGNETIC FIELDS (DIRECTION) ====================
    {
        "id": 48,
        "question": "Magnetic field lines around a wire with current flowing \"towards you\" (out of page) are:",
        "options": {
            "a": "Clockwise",
            "b": "Counter-clockwise",
            "c": "Radial",
            "d": "Zero"
        },
        "answer": "b"
    },

    // ==================== GRAVITATION (g VARIATION 2) ====================
    {
        "id": 49,
        "question": "If Earth's mass is 3x and radius is \\(\\frac{1}{3}x\\), new gravity is:",
        "options": {
            "a": "\\(3g\\)",
            "b": "\\(9g\\)",
            "c": "\\(27g\\)",
            "d": "\\(\\frac{g}{27}\\)"
        },
        "answer": "c"
    },

    // ==================== ELECTRIC CIRCUITS (PARALLEL RESISTORS) ====================
    {
        "id": 50,
        "question": "Ten 10-ohm resistors in parallel give an equivalent resistance of:",
        "options": {
            "a": "100 ohms",
            "b": "10 ohms",
            "c": "1 ohm",
            "d": "0.1 ohm"
        },
        "answer": "c"
    },

    // ==================== MAGNETISM (FORCE ON COIL) ====================
    {
        "id": 51,
        "question": "A current-carrying coil in a field \"out of page\" with current moving \"right\" feels force:",
        "options": {
            "a": "Upward",
            "b": "Downward",
            "c": "Left",
            "d": "Right"
        },
        "answer": "b"
    },

    // ==================== VECTOR ANALYSIS (CROSS PRODUCT) ====================
    {
        "id": 52,
        "question": "If \\(|\\vec{A} \\times \\vec{B}| = 4\\) and \\(|\\vec{A}| = 3\\) (perpendicular), magnitude of \\(\\vec{B}\\) is:",
        "options": {
            "a": "12",
            "b": "0.75",
            "c": "\\(\\frac{4}{3}\\)",
            "d": "\\(\\frac{3}{4}\\)"
        },
        "answer": "c"
    },

    // ==================== ATOMIC PHYSICS (IONIZATION) ====================
    {
        "id": 53,
        "question": "Energy required to remove an electron from the first shell is:",
        "options": {
            "a": "Excitation Energy",
            "b": "Ionization Energy",
            "c": "Binding Energy",
            "d": "Potential Energy"
        },
        "answer": "b"
    },

    // ==================== DIGITAL ELECTRONICS (LOGIC GATES) ====================
    {
        "id": 54,
        "question": "A logic gate with inputs (0, 1) and output (0) is a/an:",
        "options": {
            "a": "OR",
            "b": "AND",
            "c": "NOR",
            "d": "NAND"
        },
        "answer": "c"
    },

    // ==================== MAGNETISM (FORCE PARALLEL TO FIELD) ====================
    {
        "id": 55,
        "question": "Magnetic force on a conductor placed parallel to a magnetic field is:",
        "options": {
            "a": "Maximum",
            "b": "Zero",
            "c": "Minimum",
            "d": "Infinite"
        },
        "answer": "b"
    },

    // ==================== OPTICS (YDSE DARK FRINGE) ====================
    {
        "id": 56,
        "question": "In YDSE, the 3rd dark fringe displacement (\\(\\lambda = 800\\text{nm}\\), \\(L = 20\\text{cm}\\), \\(d = 0.1\\text{cm}\\)) is:",
        "options": {
            "a": "0.2 mm",
            "b": "0.4 mm",
            "c": "0.6 mm",
            "d": "0.8 mm"
        },
        "answer": "b"
    },

    // ==================== MODERN PHYSICS (PARTICLE NATURE) ====================
    {
        "id": 57,
        "question": "Which interaction proves the particle nature (not wave nature) of light?",
        "options": {
            "a": "Photoelectric",
            "b": "Compton",
            "c": "Pair Production",
            "d": "All of the above"
        },
        "answer": "d"
    },

    // ==================== CAPACITORS ====================
    {
        "id": 58,
        "question": "The capacitance of a parallel plate capacitor is given by:",
        "options": {
            "a": "\\(\\frac{\\epsilon_0 d}{A}\\)",
            "b": "\\(\\frac{\\epsilon_0 A}{d}\\)",
            "c": "\\(\\frac{Ad}{\\epsilon_0}\\)",
            "d": "\\(\\frac{1}{\\epsilon_0 A d}\\)"
        },
        "answer": "b"
    },

    // ==================== MECHANICS (FORCE) ====================
    {
        "id": 59,
        "question": "Force on 5kg mass changing speed from 2 m/s to 7 m/s in 10s is:",
        "options": {
            "a": "2.5 N",
            "b": "5.0 N",
            "c": "1.25 N",
            "d": "10 N"
        },
        "answer": "a"
    },

    // ==================== OPTICS (YDSE FRINGE WIDTH) ====================
    {
        "id": 60,
        "question": "In YDSE, if distance \\(L\\) is reduced to half, fringe width becomes:",
        "options": {
            "a": "Double",
            "b": "Half",
            "c": "Four times",
            "d": "Zero"
        },
        "answer": "b"
    }
];