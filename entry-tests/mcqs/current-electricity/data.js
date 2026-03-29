window.questions = [
    // ==================== RMS, PEAK, AVERAGE VALUES ====================
    {
        q: "The peak value of 220 volts of A.C. mains is:",
        options: ["155 V", "220 V", "311 V", "440 V"],
        correct: 2,
        explanation: "The given 220 V is the RMS value. Peak value \\(V_0 = V_{\\text{rms}} \\times \\sqrt{2} = 220 \\times 1.414 \\approx 311\\) V."
    },
    {
        q: "The effective value of any sinusoidal alternating current or voltage is:",
        options: ["\\(\\sqrt{3}\\) times its maximum value", "\\(\\frac{1}{\\sqrt{2}}\\) times its maximum value", "\\(\\sqrt{2}\\) times its maximum value", "None of the above"],
        correct: 1,
        explanation: "The RMS (effective) value of a sinusoidal AC is \\(V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}}\\), which is \\(\\frac{1}{\\sqrt{2}}\\) times the maximum (peak) value."
    },
    {
        q: "A 110 V D.C. heater is used on an A.C. source, such that the heat produced is the same. What would be the rms value of the alternating voltage?",
        options: ["110 V", "220 V", "330 V", "440 V"],
        correct: 0,
        explanation: "For the same heat produced, the RMS value of AC must equal the DC voltage. So the RMS voltage is 110 V."
    },
    {
        q: "A voltmeter connected in an A.C. circuit reads 220 V. It represents:",
        options: ["Peak voltage", "RMS voltage", "Average Voltage", "Mean square voltage"],
        correct: 1,
        explanation: "AC voltmeters are calibrated to read the RMS (effective) value of the voltage."
    },

    // ==================== REACTANCE & IMPEDANCE ====================
    {
        q: "What happens to the inductive reactance when the frequency of the AC supply is increased?",
        options: ["Increases", "Decreases", "Remains the same", "Decreases inversely"],
        correct: 0,
        explanation: "Inductive reactance \\(X_L = 2\\pi fL\\) is directly proportional to frequency. When frequency increases, \\(X_L\\) increases."
    },
    {
        q: "If a capacitor is connected to two different A.C. generators then the value of capacitive reactance is:",
        options: ["directly proportional to frequency", "inversely proportional to frequency", "independent of frequency", "inversely proportional to square of frequency"],
        correct: 1,
        explanation: "Capacitive reactance \\(X_C = \\frac{1}{2\\pi fC}\\) is inversely proportional to frequency. As frequency increases, \\(X_C\\) decreases."
    },
    {
        q: "An A.C. source is connected to a capacitor. Due to a decrease in its operating frequency:",
        options: ["capacitive reactance remains constant", "capacitive reactance decreases", "displacement current increases", "displacement current decreases"],
        correct: 3,
        explanation: "\\(X_C = \\frac{1}{2\\pi fC}\\). As frequency decreases, \\(X_C\\) increases. The displacement current \\(I = \\frac{V}{X_C}\\), so when \\(X_C\\) increases, current decreases."
    },
    {
        q: "An inductive coil has a resistance of 100 O. When an AC signal of frequency 1000 Hz is fed to the coil, the applied voltage leads the current by 45°. What is the inductance of the coil?",
        options: ["10 mH", "12 mH", "16 mH", "20 mH"],
        correct: 2,
        explanation: "\\(\\tan \\phi = \\frac{X_L}{R}\\). For \\(\\phi = 45°\\), \\(\\tan 45° = 1 = \\frac{X_L}{R}\\). So \\(X_L = R = 100\\ \\Omega\\). \\(X_L = 2\\pi fL \\Rightarrow L = \\frac{X_L}{2\\pi f} = \\frac{100}{2\\pi \\times 1000} \\approx 0.0159\\ \\text{H} = 16\\ \\text{mH}\\)."
    },
    {
        q: "An AC series circuit containing 4 O resistance and 3 O inductive reactance. The impedance of the circuit is:",
        options: ["1 O", "5 O", "7 O", "12 O"],
        correct: 1,
        explanation: "Impedance \\(Z = \\sqrt{R^2 + X_L^2} = \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5\\ \\Omega\\)."
    },
    {
        q: "The impedance Z of an R.L series circuit is expressed as:",
        options: ["\\(Z = \\sqrt{(\\omega L)^2 + (\\frac{1}{\\omega C})^2}\\)", "\\(Z = \\sqrt{R^2 + (\\omega L)^2}\\)", "\\(Z = \\sqrt{R^2 + (\\frac{1}{\\omega C})^2}\\)", "None of these"],
        correct: 1,
        explanation: "In an RL series circuit, impedance \\(Z = \\sqrt{R^2 + X_L^2} = \\sqrt{R^2 + (\\omega L)^2}\\)."
    },
    {
        q: "The phase angle \\(\\theta\\) in an R.L series circuit is expressed as:",
        options: ["\\(\\theta = \\tan^{-1}\\left(\\frac{\\omega L}{R}\\right)\\)", "\\(\\theta = \\tan^{-1}\\left(\\frac{\\omega L}{R_0}\\right)\\)", "\\(\\theta = \\tan^{-1}\\left(\\frac{R}{L}\\right)\\)", "None of these"],
        correct: 0,
        explanation: "In an RL series circuit, \\(\\tan \\theta = \\frac{X_L}{R} = \\frac{\\omega L}{R}\\), so \\(\\theta = \\tan^{-1}\\left(\\frac{\\omega L}{R}\\right)\\)."
    },
    {
        q: "In an RLC series circuit, the quantities which are directed opposite to each other are:",
        options: ["\\(X_L = X_C\\)", "\\(X_L > X_C\\)", "\\(X_L < X_C\\)", "None of these"],
        correct: 2,
        explanation: "In an RLC series circuit, \\(X_L\\) and \\(X_C\\) are 180° out of phase, so they oppose each other."
    },
    {
        q: "The condition of resonance in an R.L.C series circuit is that:",
        options: ["\\(X_L = X_C\\)", "\\(X_L > X_C\\)", "\\(X_L < X_C\\)", "None of these"],
        correct: 0,
        explanation: "Resonance occurs when inductive reactance equals capacitive reactance: \\(X_L = X_C\\)."
    },
    {
        q: "The equation which satisfies the resonance condition is:",
        options: ["\\(X_L = X_C\\)", "\\(f = \\frac{1}{2\\pi\\sqrt{LC}}\\)", "\\(\\omega = \\frac{1}{\\sqrt{LC}}\\)", "All of above"],
        correct: 3,
        explanation: "At resonance, \\(X_L = X_C \\Rightarrow \\omega L = \\frac{1}{\\omega C} \\Rightarrow \\omega = \\frac{1}{\\sqrt{LC}} \\Rightarrow f = \\frac{1}{2\\pi\\sqrt{LC}}\\). All three are equivalent."
    },
    {
        q: "At resonance frequency, the impedance of an R.L.C series circuit is:",
        options: ["Minimum", "Zero", "Maximum", "None of these"],
        correct: 0,
        explanation: "At resonance, \\(X_L = X_C\\), so \\(Z = R\\), which is the minimum possible impedance."
    },
    {
        q: "At resonance frequency in an R.L.C series circuit, \\(V_L\\) and \\(V_C\\):",
        options: ["Greater than the source voltage", "Smaller than the source voltage", "Equal to source voltage", "None of these"],
        correct: 0,
        explanation: "At resonance, \\(V_L = V_C\\) and can be much larger than the source voltage, known as voltage magnification."
    },
    {
        q: "When resistance is increased in series LCR circuit:",
        options: ["Impedance decreases", "Reactance increases", "Phase angle increases", "Phase angle decreases"],
        correct: 3,
        explanation: "\\(\\tan \\phi = \\frac{X_L - X_C}{R}\\). As \\(R\\) increases, \\(\\tan \\phi\\) decreases, so phase angle \\(\\phi\\) decreases."
    },
    {
        q: "The impedance of pure anti-resonant circuit at resonance is:",
        options: ["0", "\\(\\frac{1}{2}\\)", "1", "\\(\\infty\\)"],
        correct: 3,
        explanation: "In a parallel LC circuit at resonance, impedance becomes theoretically infinite (maximum)."
    },
    {
        q: "What happens to the quality factor of an LCR circuit if the resistance is increased?",
        options: ["Increases", "Decreases", "Remains the same", "None of the above"],
        correct: 1,
        explanation: "Quality factor \\(Q = \\frac{\\omega L}{R}\\) or \\(\\frac{1}{\\omega CR}\\). \\(Q\\) is inversely proportional to resistance. Increasing \\(R\\) decreases \\(Q\\)."
    },

    // ==================== PHASE RELATIONSHIPS ====================
    {
        q: "When AC voltage is applied to an inductor, the:",
        options: ["Voltage leads current by 90°", "Current leads voltage by 90°", "Voltage and current are in phase", "None of these"],
        correct: 0,
        explanation: "In a purely inductive AC circuit, voltage leads current by 90° (\\(\\pi/2\\) radians)."
    },
    {
        q: "The phase angle between the voltage and the current in an AC circuit consisting of a resistance is:",
        options: ["Zero", "45°", "90°", "180°"],
        correct: 0,
        explanation: "In a purely resistive AC circuit, voltage and current are in phase, so the phase angle is zero."
    },
    {
        q: "Assertion (A): An A.C. circuit contains only a capacitor that has an average power equal to zero for a complete cycle.\nReason (R): The phase difference between the current and voltage is 90°.",
        options: [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is not the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        correct: 0,
        explanation: "In a purely capacitive AC circuit, average power is zero because voltage and current are 90° out of phase, making \\(\\cos \\phi = 0\\)."
    },
    {
        q: "The phase diagram for an inductor can be shown as:\n\n<svg width='200' height='200' viewBox='0 0 200 200' style='display:block; margin:10px auto; background:white;'>\n  <line x1='20' y1='100' x2='180' y2='100' stroke='black' stroke-width='2'/>\n  <line x1='100' y1='20' x2='100' y2='180' stroke='black' stroke-width='2'/>\n  <line x1='100' y1='100' x2='150' y2='100' stroke='red' stroke-width='3'/>\n  <line x1='100' y1='100' x2='100' y2='70' stroke='blue' stroke-width='3'/>\n  <text x='155' y='95' fill='red' font-size='12'>I</text>\n  <text x='105' y='65' fill='blue' font-size='12'>V</text>\n</svg>\n\nThe phase relationship shown is:",
        options: ["Voltage leads current", "Current leads voltage", "Voltage and current in phase", "Voltage lags current"],
        correct: 0,
        explanation: "In an inductor, voltage leads current by 90°. The phasor diagram shows voltage (blue) along the positive y-axis and current (red) along the positive x-axis."
    },
    {
        q: "The phase diagram for a capacitor can be shown as:\n\n<svg width='200' height='200' viewBox='0 0 200 200' style='display:block; margin:10px auto; background:white;'>\n  <line x1='20' y1='100' x2='180' y2='100' stroke='black' stroke-width='2'/>\n  <line x1='100' y1='20' x2='100' y2='180' stroke='black' stroke-width='2'/>\n  <line x1='100' y1='100' x2='150' y2='100' stroke='blue' stroke-width='3'/>\n  <line x1='100' y1='100' x2='100' y2='130' stroke='red' stroke-width='3'/>\n  <text x='155' y='95' fill='blue' font-size='12'>V</text>\n  <text x='105' y='135' fill='red' font-size='12'>I</text>\n</svg>\n\nThe phase relationship shown is:",
        options: ["Voltage leads current", "Current leads voltage", "Voltage and current in phase", "Current lags voltage"],
        correct: 1,
        explanation: "In a capacitor, current leads voltage by 90°. The phasor diagram shows current (red) along the positive y-axis and voltage (blue) along the positive x-axis."
    },
    {
        q: "Power factor is defined by:",
        options: ["\\(\\cos \\theta\\)", "\\(\\sin \\theta\\)", "\\(\\tan \\theta\\)", "\\(\\sec \\theta\\)"],
        correct: 0,
        explanation: "Power factor is the cosine of the phase angle between voltage and current: \\(\\text{pf} = \\cos \\theta = \\frac{R}{Z}\\)."
    },
    {
        q: "In an LCR series circuit, if V is the effective value of the applied voltage, \\(V_R\\) is across R, \\(V_L\\) across L, and \\(V_C\\) across C, then:",
        options: ["\\(V = V_R + V_L + V_C\\)", "\\(V^2 = V_R^2 + V_L^2 + V_C^2\\)", "\\(V^2 = V_R^2 + (V_L - V_C)^2\\)", "\\(V^2 = V_L^2 + (V_R - V_C)^2\\)"],
        correct: 2,
        explanation: "In an LCR series circuit, \\(V_L\\) and \\(V_C\\) are 180° out of phase, so they subtract: \\(V^2 = V_R^2 + (V_L - V_C)^2\\)."
    },

    // ==================== AC CIRCUIT COMPONENTS ====================
    {
        q: "A pure capacitor of capacitance 100 µF is connected to an A.C. voltage, \\(V = 100 \\sin(10t)\\). Find the maximum current in the circuit.",
        options: ["10 A", "1 A", "0.1 A", "None of these"],
        correct: 2,
        explanation: "\\(X_C = \\frac{1}{\\omega C} = \\frac{1}{10 \\times 10^{-4}} = 1000\\ \\Omega\\). \\(I_0 = \\frac{V_0}{X_C} = \\frac{100}{1000} = 0.1\\ \\text{A}\\)."
    },
    {
        q: "A capacitor is a perfect insulator for:",
        options: ["Direct current", "Alternating current", "Both", "None"],
        correct: 0,
        explanation: "A capacitor blocks direct current (DC) as it acts as an open circuit, but allows alternating current (AC) to pass."
    },
    {
        q: "An inductor stores energy in its:",
        options: ["Magnetic field", "Electric field", "Coil", "None"],
        correct: 0,
        explanation: "An inductor stores energy in its magnetic field: \\(U = \\frac{1}{2}LI^2\\)."
    },
    {
        q: "In A.C circuits, current and voltage are controlled by:",
        options: ["Inductor L", "Resistance R", "Capacitance C", "All of the above"],
        correct: 3,
        explanation: "All three components affect AC circuits: R opposes current, L opposes changes in current, and C opposes changes in voltage."
    },

    // ==================== MODULATION & WAVES ====================
    {
        q: "The process of combining low frequency waves with high frequency is called:",
        options: ["Rectification", "Amplification", "Modulation", "Magnification"],
        correct: 2,
        explanation: "Modulation is the process of combining a low frequency information signal with a high frequency carrier wave for transmission."
    },
    {
        q: "In electromagnetic waves, the electric and magnetic fields are:",
        options: ["Perpendicular", "Parallel", "Antiparallel", "At 45°"],
        correct: 0,
        explanation: "In electromagnetic waves, the electric field and magnetic field are perpendicular to each other and to the direction of propagation."
    },

    // ==================== POWER & LOSSES ====================
    {
        q: "Which circuit exhibits maximum power dissipation?",
        options: ["Pure Inductive", "Pure Capacitive", "Pure Resistive", "None"],
        correct: 2,
        explanation: "In a pure resistive circuit, all power is dissipated as heat. In purely reactive circuits, average power is zero."
    },
    {
        q: "In comparison to D.C, transmission losses in A.C are:",
        options: ["Low", "High", "Negligible", "None"],
        correct: 0,
        explanation: "AC transmission losses are lower because voltage can be stepped up using transformers, reducing current and \\(I^2R\\) losses."
    },
    {
        q: "A voltage \\(V = V_0 \\cos \\omega t\\) is applied across a resistor \\(R\\). The average power dissipated per cycle is:",
        options: ["\\(\\frac{V_0^2}{2R}\\)", "\\(\\frac{V_0^2}{R}\\)", "\\(\\frac{V_0^2}{\\sqrt{2}R}\\)", "\\(\\frac{2V_0^2}{R}\\)"],
        correct: 0,
        explanation: "\\(P_{\\text{avg}} = \\frac{V_{\\text{rms}}^2}{R} = \\frac{(V_0/\\sqrt{2})^2}{R} = \\frac{V_0^2}{2R}\\)."
    },
    {
        q: "Statement-I: The Capacitor blocks D.C. and offers an easy path to A.C.\nStatement II: Capacitive reactance is inversely proportional to frequency.",
        options: [
            "Both statements are correct",
            "Statement I is correct but II is incorrect",
            "Statement II is incorrect but I is correct",
            "Both are incorrect"
        ],
        correct: 0,
        explanation: "Both statements are correct. A capacitor blocks DC (\\(X_C = \\infty\\) at \\(f = 0\\)) and allows AC (\\(X_C\\) decreases as frequency increases)."
    },

    // ==================== MEASUREMENT ====================
    {
        q: "In A.C circuits, the A.C instruments indicate:",
        options: ["Peak values", "Square of peak values", "Square root of peak values", "Virtual (RMS) values"],
        correct: 3,
        explanation: "AC instruments are calibrated to measure the RMS (virtual) value, which is the effective value equivalent to DC for power calculations."
    },
    {
        q: "An instrument which can measure potential without drawing any current is:",
        options: ["Voltmeter", "Galvanometer", "Cathode ray oscilloscope (CRO)", "Ammeter"],
        correct: 2,
        explanation: "A CRO has very high input impedance and draws negligible current, making it ideal for measuring potential without loading the circuit."
    },

    // ==================== FORM FACTOR ====================
    {
        q: "For a sine wave, the form factor is given by:",
        options: ["\\(\\frac{\\pi}{2\\sqrt{2}}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\sqrt{2\\pi}\\)", "\\(2\\sqrt{2}\\pi\\)"],
        correct: 0,
        explanation: "Form factor = RMS value / Average value = \\(\\frac{V_0/\\sqrt{2}}{2V_0/\\pi} = \\frac{\\pi}{2\\sqrt{2}}\\)."
    },

    // ==================== TRANSFORMERS & RECTIFIERS ====================
    {
        q: "Alternating current is converted to direct current by:",
        options: ["Dynamo", "Motor", "Transformer", "Rectifier"],
        correct: 3,
        explanation: "A rectifier converts AC to DC. A dynamo produces AC, a motor converts electrical to mechanical energy, and a transformer changes voltage levels."
    },

    // ==================== NUMERICAL PROBLEMS ====================
    {
        q: "An Inductor of 1 H is connected across a 220 V, 50 Hz supply. The peak value of current is approximately:",
        options: ["0.5 A", "0.7 A", "1 A", "1.4 A"],
        correct: 2,
        explanation: "\\(X_L = 2\\pi fL = 100\\pi \\approx 314\\ \\Omega\\). \\(I_{\\text{rms}} = \\frac{220}{314} \\approx 0.7\\ \\text{A}\\). \\(I_0 = \\sqrt{2} \\times I_{\\text{rms}} \\approx 1.414 \\times 0.7 \\approx 1\\ \\text{A}\\)."
    },
    {
        q: "Two identical coaxial circular loops carry equal currents in the same direction. If the loops approach each other, the current in:",
        options: ["Each increases", "Each decreases", "Remains same", "One increases, other decreases"],
        correct: 1,
        explanation: "When loops approach, magnetic flux increases. By Lenz's law, induced current opposes this change, so current decreases."
    }
];