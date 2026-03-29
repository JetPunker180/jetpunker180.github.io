window.questions = [
    // ==================== BASIC ELECTRONIC COMPONENTS ====================
    {
        q: "Which of the following is a passive electronic component?",
        options: ["Transistor", "Diode", "Resistor", "Operational Amplifier"],
        correct: 2,
        explanation: "Passive components do not require an external power source to operate and include resistors, capacitors, and inductors. Resistors limit current flow and are fundamental passive components. Transistors, diodes, and op-amps are active components."
    },
    {
        q: "What is the primary function of a capacitor in a circuit?",
        options: ["To amplify signals", "To store electrical energy", "To rectify AC to DC", "To regulate voltage"],
        correct: 1,
        explanation: "Capacitors store energy in the electric field between their plates, used for filtering, smoothing voltage, and timing applications."
    },
    {
        q: "Which component is used to convert AC to DC?",
        options: ["Transformer", "Rectifier", "Inductor", "Resistor"],
        correct: 1,
        explanation: "Rectifiers, typically diode-based, convert alternating current (AC) into direct current (DC). Transformers are used to change voltage levels but do not rectify currents."
    },
    {
        q: "At least how many diodes are required to convert AC fully into DC?",
        options: ["1", "2", "3", "4"],
        correct: 3,
        explanation: "For full-wave rectification, a bridge rectifier requires 4 diodes. Half-wave rectification uses 1 diode, but full-wave rectification requires either 2 diodes (center-tap transformer) or 4 diodes (bridge rectifier)."
    },
    {
        q: "AC is converted to DC by:",
        options: ["Oscillator", "Rectifier", "Amplifier", "DC motor"],
        correct: 1,
        explanation: "A rectifier converts AC to DC. Oscillators generate AC signals, amplifiers increase signal strength, and DC motors convert electrical energy to mechanical energy."
    },

    // ==================== CIRCUIT LAWS ====================
    {
        q: "According to Ohm's Law, the relationship between voltage, current, and resistance is:",
        options: ["V = IR", "V = RI", "I = VR", "R = VI"],
        correct: 0,
        explanation: "Ohm's Law states that voltage (V) across a resistor is directly proportional to the current (I) flowing through it, with resistance (R) as the proportionality constant: V = IR."
    },
    {
        q: "In a series circuit, the total resistance is:",
        options: [
            "The sum of individual resistances",
            "The reciprocal of the sum of reciprocals of resistances",
            "Equal to the resistance of the largest resistor",
            "Zero"
        ],
        correct: 0,
        explanation: "In series circuits, resistances add directly: R_total = R1 + R2 + R3 + ..."
    },

    // ==================== SEMICONDUCTOR DEVICES ====================
    {
        q: "Which material is commonly used to manufacture semiconductors?",
        options: ["Silicon", "Copper", "Aluminum", "Iron"],
        correct: 0,
        explanation: "Silicon is the most widely used semiconductor material due to its abundance and favorable electrical properties for device fabrication."
    },
    {
        q: "A diode allows current to flow:",
        options: ["In both directions", "Only in the reverse direction", "Only in the forward direction", "In no direction"],
        correct: 2,
        explanation: "Diodes are unidirectional devices permitting current flow when forward biased, blocking it when reverse biased."
    },
    {
        q: "Which of the following is a P-N junction diode's primary function?",
        options: ["Amplify signals", "Rectify AC signals", "Store electrical energy", "Convert DC to AC"],
        correct: 1,
        explanation: "P-N junction diodes are mainly used for rectification, converting AC to DC by allowing current in one direction only."
    },
    {
        q: "When transistor is forward biased then resistance will be:",
        options: ["Nano ohms", "Kilo ohms", "Mega ohms", "Milliohms"],
        correct: 0,
        explanation: "When a transistor is forward biased, it conducts with very low resistance, typically in the range of a few ohms to tens of ohms. Nano ohms is not accurate, but among options, it represents very low resistance."
    },
    {
        q: "A transistor cannot be used as:",
        options: ["As a Switch", "As an Amplifier", "As a Power Source", "As an inverter"],
        correct: 2,
        explanation: "A transistor can be used as a switch, an amplifier, or an inverter. It cannot generate power; it only controls or amplifies signals. A power source provides energy."
    },
    {
        q: "The width of depletion region increases due to:",
        options: ["Transistor", "Minority charge carriers", "Majority charge carriers", "None of these"],
        correct: 1,
        explanation: "The depletion region width increases when reverse bias is applied, which increases the barrier potential and reduces majority carrier flow. Minority carriers are involved in leakage current."
    },
    {
        q: "When semiconductors are doped with ___ then they are p-type:",
        options: ["Pentavalent", "Trivalent", "Both a and b", "None of these"],
        correct: 1,
        explanation: "P-type semiconductors are created by doping with trivalent impurities (acceptors) such as boron, aluminum, or gallium, which create holes as majority carriers."
    },
    {
        q: "A type of metals containing alloys, ceramics etc., when heated their temperature reaches to a state called Transition temperature state and their resistance reaches to zero. These types of metals are called:",
        options: ["Conductors", "Insulators", "Semi-conductors", "Superconductors"],
        correct: 3,
        explanation: "Superconductors are materials that exhibit zero electrical resistance below a critical temperature (transition temperature)."
    },

    // ==================== MEASUREMENT INSTRUMENTS ====================
    {
        q: "Which instrument is used to measure resistance?",
        options: ["Voltmeter", "Ammeter", "Multimeter", "Oscilloscope"],
        correct: 2,
        explanation: "A multimeter can measure voltage, current, and resistance, making it a versatile tool for electronics testing."
    },
    {
        q: "The primary function of an oscilloscope is to:",
        options: ["Measure resistance", "Display waveforms of voltage signals", "Measure current", "Test diodes"],
        correct: 1,
        explanation: "Oscilloscopes visualize voltage waveforms over time, essential for analyzing signal behavior in circuits."
    },

    // ==================== POWER SUPPLIES ====================
    {
        q: "Which device is used to maintain a constant voltage output despite changes in load?",
        options: ["Transformer", "Voltage regulator", "Resistor", "Capacitor"],
        correct: 1,
        explanation: "Voltage regulators provide a stable output voltage regardless of variations in input voltage or load conditions."
    },
    {
        q: "A step-down transformer reduces voltage from:",
        options: ["High to low", "Low to high", "AC to DC", "DC to AC"],
        correct: 0,
        explanation: "Step-down transformers decrease voltage levels, typically for safe and efficient circuit operation."
    },

    // ==================== SAFETY ====================
    {
        q: "When working with high voltages, it is essential to:",
        options: [
            "Use insulated tools and wear protective gear",
            "Work without any precautions to save time",
            "Ignore grounding requirements",
            "Use only low-quality components"
        ],
        correct: 0,
        explanation: "Safety precautions are critical when handling high voltages to prevent electric shocks and accidents. Insulated tools and protective gear are essential."
    }
];