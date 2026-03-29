window.questions = [
    // ==================== BASIC MAGNETISM ====================
    {
        q: "Tesla is a unit of:",
        options: ["field strength", "inductance", "flux density", "flux"],
        correct: 2,
        explanation: "Tesla (T) is the SI unit of magnetic flux density (magnetic field strength). \\(1\\text{ T} = 1\\text{ Wb/m}^2\\)."
    },
    {
        q: "A permeable substance is one:",
        options: [
            "which is a good conductor",
            "which is a bad conductor",
            "which is a strong magnet",
            "through which the magnetic lines of force can pass very easily"
        ],
        correct: 3,
        explanation: "Permeability is a measure of how easily magnetic field lines can pass through a material. Highly permeable materials like iron allow magnetic lines of force to pass easily."
    },
    {
        q: "The materials having low retentivity are suitable for making:",
        options: ["weak magnets", "temporary magnets", "permanent magnets", "none of the above"],
        correct: 1,
        explanation: "Materials with low retentivity lose their magnetism quickly when the magnetizing field is removed, making them suitable for temporary magnets like electromagnet cores."
    },
    {
        q: "A magnetic field exists around:",
        options: ["iron", "copper", "aluminium", "moving charges"],
        correct: 3,
        explanation: "A magnetic field is produced by moving electric charges (currents). Stationary charges produce only electric fields, not magnetic fields."
    },
    {
        q: "Ferrites are ______ materials.",
        options: ["paramagnetic", "diamagnetic", "ferromagnetic", "none of the above"],
        correct: 2,
        explanation: "Ferrites are ceramic ferromagnetic materials made from iron oxide combined with other metals. They are used in transformers, inductors, and permanent magnets."
    },
    {
        q: "The direction of magnetic lines of force is:",
        options: [
            "from south pole to north pole",
            "from north pole to south pole",
            "from one end of the magnet to another",
            "none of the above"
        ],
        correct: 1,
        explanation: "Magnetic field lines emerge from the north pole and enter the south pole outside the magnet. Inside the magnet, they go from south to north."
    },
    {
        q: "Which of the following is a vector quantity?",
        options: ["Relative permeability", "Magnetic field intensity", "Flux density", "Magnetic potential"],
        correct: 1,
        explanation: "Magnetic field intensity \\(\\vec{H}\\) is a vector quantity having both magnitude and direction. Relative permeability and magnetic potential are scalars."
    },
    {
        q: "A material which is slightly repelled by a magnetic field is known as:",
        options: ["ferromagnetic material", "diamagnetic material", "paramagnetic material", "conducting material"],
        correct: 1,
        explanation: "Diamagnetic materials are weakly repelled by magnetic fields. Examples include bismuth, copper, and water."
    },
    {
        q: "When an iron piece is placed in a magnetic field:",
        options: [
            "the magnetic lines of force will bend away from their usual paths in order to go away from the piece",
            "the magnetic lines of force will bend away from their usual paths in order to pass through the piece",
            "the magnetic field will not be affected",
            "the iron piece will break"
        ],
        correct: 1,
        explanation: "Iron is ferromagnetic and has high permeability. Magnetic field lines prefer to pass through it, bending toward the iron piece."
    },
    {
        q: "Fleming's left hand rule is used to find:",
        options: [
            "direction of magnetic field due to current carrying conductor",
            "direction of flux in a solenoid",
            "direction of force on a current carrying conductor in a magnetic field",
            "polarity of a magnetic pole"
        ],
        correct: 2,
        explanation: "Fleming's left hand rule gives the direction of force on a current-carrying conductor placed in a magnetic field. The thumb points in the direction of force."
    },
    {
        q: "The ratio of intensity of magnetisation to the magnetisation force is known as:",
        options: ["flux density", "susceptibility", "relative permeability", "none of the above"],
        correct: 1,
        explanation: "Magnetic susceptibility \\(\\chi\\) is the ratio of intensity of magnetization \\(M\\) to the magnetizing field \\(H\\): \\(\\chi = M/H\\)."
    },
    {
        q: "Magnetising steel is normally difficult because:",
        options: ["it corrodes easily", "it has high permeability", "it has high specific gravity", "it has low permeability"],
        correct: 3,
        explanation: "Steel has low permeability compared to soft iron, making it harder to magnetize. However, it retains magnetism longer (high retentivity)."
    },
    {
        q: "The left hand rule correlates to:",
        options: [
            "current, induced e.m.f. and direction of force on a conductor",
            "magnetic field, electric field and direction of force on a conductor",
            "self induction, mutual induction and direction of force on a conductor",
            "current, magnetic field and direction of force on a conductor"
        ],
        correct: 3,
        explanation: "Fleming's left hand rule relates the direction of current, magnetic field, and the resulting force on a conductor."
    },

    // ==================== FORCE ON MOVING CHARGES ====================
    {
        q: "Magnetic force acting on a unit positive charge moving perpendicular to the magnetic field with a unit velocity is called:",
        options: ["magnetic flux", "magnetic field intensity", "magnetic induction", "self inductance"],
        correct: 2,
        explanation: "Magnetic induction \\(\\vec{B}\\) is defined as the force experienced by a unit positive charge moving with unit velocity perpendicular to the magnetic field."
    },
    {
        q: "A current carrying conductor is placed in a uniform magnetic field parallel to it. The magnetic force experienced by the conductor is:",
        options: ["\\(F = I/B\\)", "\\(F = I B \\sin \\theta\\)", "zero", "\\(F = I B \\cos \\theta\\)"],
        correct: 2,
        explanation: "The magnetic force on a current-carrying conductor is given by \\(F = I L B \\sin \\theta\\). When the conductor is parallel to the field (\\(\\theta = 0°\\)), \\(\\sin 0° = 0\\), so the force is zero."
    },
    {
        q: "What is the value of the current in a wire of 10 cm long at right angle to a uniform magnetic field of 0.5 Wb/m² when the force acting on the wire is 5 N?",
        options: ["1 A", "10 A", "100 A", "1000 A"],
        correct: 2,
        explanation: "\\(F = I L B \\sin \\theta\\). Here \\(L = 0.1\\text{ m}\\), \\(B = 0.5\\text{ T}\\), \\(F = 5\\text{ N}\\), \\(\\theta = 90°\\). So \\(I = \\frac{F}{L B} = \\frac{5}{0.1 \\times 0.5} = \\frac{5}{0.05} = 100\\text{ A}\\)."
    },
    {
        q: "When a particle of charge \\(q\\) and mass \\(m\\) enters into a uniform magnetic field \\(B\\) moving with a velocity \\(v\\) perpendicular to the direction of the field, it describes a circular path of radius:",
        options: ["\\(R = qB/mv\\)", "\\(R = mv/qB\\)", "\\(R = qmv/B\\)", "\\(R = qmB/v\\)"],
        correct: 1,
        explanation: "The centripetal force is provided by the magnetic force: \\(\\frac{mv^2}{R} = qvB \\Rightarrow R = \\frac{mv}{qB}\\)."
    },
    {
        q: "A charged particle is moving in uniform magnetic field such that its velocity is perpendicular to the field then:",
        options: [
            "Its momentum changes but total energy remains same",
            "Both momentum and total energy remain same",
            "Total energy changes but momentum remains same",
            "Total energy changes but momentum remains same"
        ],
        correct: 0,
        explanation: "The magnetic force is perpendicular to velocity, so it changes direction (momentum changes) but does no work, so kinetic energy (and total energy) remains constant."
    },
    {
        q: "The force acting on one meter length of the conductor placed at right angle to the magnetic field when one ampere current is passing through it is called:",
        options: ["Autumnal Force", "Coulomb Force", "Magnetic Field", "Electric Field"],
        correct: 2,
        explanation: "This defines the magnetic field strength: \\(B = \\frac{F}{I L}\\). When \\(I = 1\\text{ A}\\), \\(L = 1\\text{ m}\\), and \\(\\theta = 90°\\), the force equals the magnetic field strength in teslas."
    },
    {
        q: "The vector sum of electric and magnetic force is called:",
        options: ["Maxwell force", "Newton's force", "Lorentz force", "Centripetal force"],
        correct: 2,
        explanation: "The Lorentz force is the total force on a charged particle in electric and magnetic fields: \\(\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})\\)."
    },
    {
        q: "A proton (or charged particle) moving with velocity is acted upon by electric field \\(E\\) and magnetic field \\(B\\). The proton will move undeflected if:",
        options: [
            "\\(E\\) is perpendicular to \\(B\\)",
            "\\(E\\), \\(B\\) and \\(v\\) are mutually perpendicular and \\(v = E/B\\)",
            "\\(E\\) is parallel to \\(v\\) and perpendicular to \\(B\\)",
            "\\(E\\) and \\(B\\) both are parallel to \\(v\\)"
        ],
        correct: 1,
        explanation: "For undeflected motion, the electric force (\\(qE\\)) must balance the magnetic force (\\(qvB\\)). This requires \\(E\\), \\(B\\), and \\(v\\) to be mutually perpendicular and \\(v = E/B\\)."
    },
    {
        q: "An electron and a proton with equal momentum enter perpendicularly into a uniform magnetic field, then:",
        options: [
            "The path of proton shall be more curved than that of electron",
            "The path of proton shall be less curved than that of electron",
            "Both are equally curved",
            "Path of both will be straight line"
        ],
        correct: 2,
        explanation: "Radius of curvature \\(r = \\frac{p}{qB}\\). Since momentum \\(p\\) is equal and charge magnitude \\(q\\) is equal (both have \\(e\\)), the radii are equal. Thus both are equally curved."
    },
    {
        q: "If a charged particle passes through a region of space undeflected then:",
        options: [
            "Particle is projected anti-parallel to \\(\\vec{B}\\)",
            "Region is magnetic field free",
            "\\(\\vec{F}_E = -\\vec{F}_B\\)",
            "All of these"
        ],
        correct: 3,
        explanation: "A charged particle can pass undeflected if the electric and magnetic forces cancel, or if the velocity is parallel/anti-parallel to the magnetic field (no magnetic force), or if there is no magnetic field."
    },

    // ==================== CURRENT-CARRYING CONDUCTORS ====================
    {
        q: "Two parallel wires carrying currents in opposite directions:",
        options: ["repel each other", "attract each other", "have no effect upon each other", "they cancel out their individual magnetic fields"],
        correct: 0,
        explanation: "Parallel wires carrying currents in opposite directions experience a repulsive force. When currents are in the same direction, they attract."
    },
    {
        q: "A cable carries a current of 1 A vertically upward. The magnetic field produced by it at a point 10 cm north will be:",
        options: ["\\(2 \\times 10^{-6}\\) T west", "\\(2 \\times 10^{-8}\\) T west", "\\(2 \\times 10^{-6}\\) T east", "\\(2 \\times 10^{-8}\\) T east"],
        correct: 0,
        explanation: "\\(B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{4\\pi \\times 10^{-7} \\times 1}{2\\pi \\times 0.1} = 2 \\times 10^{-6}\\) T. Using right-hand rule, the field direction is west."
    },
    {
        q: "A long solenoid has 800 turns per metre length. A current of 1.6 A flows through it. The magnetic induction at the end of the solenoid on its axis is:",
        options: ["\\(16 \\times 10^{-4}\\) T", "\\(8 \\times 10^{-4}\\) T", "\\(32 \\times 10^{-4}\\) T", "\\(4 \\times 10^{-4}\\) T"],
        correct: 1,
        explanation: "At the end of a solenoid, \\(B = \\frac{\\mu_0 n I}{2} = \\frac{4\\pi \\times 10^{-7} \\times 800 \\times 1.6}{2} = 8.04 \\times 10^{-4}\\) T \\(\\approx 8 \\times 10^{-4}\\) T."
    },
    {
        q: "The uniform magnetic field is:",
        options: [
            "The field of a set of parallel conductors",
            "The field in which all magnetic lines of force are parallel and equidistant",
            "The field of a single conductor",
            "None of the above"
        ],
        correct: 1,
        explanation: "A uniform magnetic field has magnetic field lines that are parallel and equally spaced, indicating constant magnitude and direction throughout the region."
    },
    {
        q: "A solenoid 15 cm long has 300 turns and a current of 5 A flows through it. What is the magnetic field outside of solenoid?",
        options: ["\\(0.65 \\times 10^{-2}\\) Wb/m²", "\\(1.3 \\times 10^{-2}\\) Wb/m²", "\\(4.4 \\times 10^{-3}\\) Wb/m²", "Zero"],
        correct: 3,
        explanation: "For an ideal solenoid, the magnetic field outside is zero. In a real solenoid, it is very weak compared to inside."
    },
    {
        q: "The magnetic force on a conductor of length \\(L\\), carrying total number of charges \\(nAL\\), each charge of value \\(q\\) is given as:",
        options: [
            "\\(F = q(\\vec{v} \\times \\vec{B})\\)",
            "\\(F = qLA(\\vec{v} \\times \\vec{B})\\)",
            "\\(F = qnAL(\\vec{v} \\times \\vec{B})\\)",
            "\\(F = nAQL(\\vec{v} \\times \\vec{B})\\)"
        ],
        correct: 2,
        explanation: "The force on a current-carrying conductor is \\(\\vec{F} = I \\vec{L} \\times \\vec{B}\\). Since \\(I = nAqv\\), where \\(n\\) is number density, \\(A\\) is cross-sectional area, and \\(v\\) is drift velocity, \\(\\vec{F} = nAqv L (\\vec{v} \\times \\vec{B}) = qnAL(\\vec{v} \\times \\vec{B})\\)."
    },

    // ==================== GALVANOMETERS & MEASUREMENTS ====================
    {
        q: "A moving coil galvanometer of resistance 1000 O gives half scale deflection for a current of 20 mA. What will be the potential difference across it?",
        options: ["4 V", "5 V", "2 V", "0.4 V"],
        correct: 0,
        explanation: "\\(V = IR = (20 \\times 10^{-3}) \\times 1000 = 20\\) V. None of the options match this. If it was 20 µA, \\(V = 0.02\\) V. The correct calculation gives 20 V."
    },
    {
        q: "An instrument which can measure potential without drawing any current is:",
        options: ["voltmeter", "galvanometer", "cathode ray oscilloscope (CRO)", "ammeter"],
        correct: 2,
        explanation: "A CRO has very high input impedance and draws negligible current, making it ideal for measuring potential without loading the circuit."
    },
    {
        q: "The deflection for 50 division of galvanometer is decreased to 25 divisions by shunt resistance of 12 O. Galvanometer resistance is:",
        options: ["18 O", "30 O", "24 O", "12 O"],
        correct: 3,
        explanation: "Using shunt formula: \\(\\frac{I_g}{I} = \\frac{S}{G + S}\\). With half deflection, \\(\\frac{I_g}{I} = \\frac{1}{2}\\), so \\(\\frac{1}{2} = \\frac{12}{G + 12} \\Rightarrow G + 12 = 24 \\Rightarrow G = 12\\ \\Omega\\)."
    },
    {
        q: "When the coil of the galvanometer is in equilibrium then the deflecting couple is:",
        options: ["zero", "equal to the restoring couple", "greater than the restoring couple", "smaller than the restoring couple"],
        correct: 1,
        explanation: "At equilibrium, the deflecting torque due to current equals the restoring torque from the spring, so the coil comes to rest at a certain deflection angle."
    },
    {
        q: "The sensitivity of a galvanometer is given by:",
        options: ["\\(C/BAN\\)", "\\(CAN/B\\)", "\\(BAN/C\\)", "\\(ABC/N\\)"],
        correct: 2,
        explanation: "Current sensitivity of a galvanometer is \\(\\frac{\\theta}{I} = \\frac{BAN}{C}\\), where \\(B\\) is magnetic field, \\(A\\) is area of coil, \\(N\\) is number of turns, and \\(C\\) is torsional constant."
    },
    {
        q: "Which one of the following is not an electromechanical instrument?",
        options: ["galvanometer", "voltmeter", "ammeter", "AC transformer and DC generator"],
        correct: 3,
        explanation: "Galvanometers, voltmeters, and ammeters are electromechanical instruments that convert electrical energy into mechanical motion. AC transformers and DC generators are electromagnetic devices but not primarily electromechanical measuring instruments."
    },
    {
        q: "Minimum current required to produce a deflection of 1 mm on a scale at a distance of 1 meter is:",
        options: ["0.1 A", "1:00 AM", "current sensitivity", "1 mA"],
        correct: 2,
        explanation: "This refers to current sensitivity of a galvanometer, which is defined as the deflection per unit current. The actual value depends on the instrument's construction."
    },
    {
        q: "In a multi range ammeter as the range increases:",
        options: ["shunt value decreases", "shunt value increases", "shunt value remains the same", "none of the above"],
        correct: 0,
        explanation: "For a multi-range ammeter, higher current ranges require lower shunt resistance to bypass more current around the meter movement."
    },
    {
        q: "A sensitive galvanometer gives full-scale deflection with 100 mV. If the resistance of the galvanometer is 50 O, the maximum current that can flow through safely is:",
        options: ["2.0 mA", "20 mA", "200 mA", "0.2 mA"],
        correct: 0,
        explanation: "\\(I = \\frac{V}{R} = \\frac{100 \\times 10^{-3}}{50} = 0.002\\text{ A} = 2.0\\text{ mA}\\)."
    },
    {
        q: "An ammeter measures the total current flowing through a circuit when it is connected:",
        options: [
            "in series with the circuit",
            "in parallel with circuit",
            "in series with any of the parallel resistances in the circuit",
            "in parallel with any of the series resistances in the circuit"
        ],
        correct: 0,
        explanation: "An ammeter is always connected in series with the circuit so that all the current passes through it. It has very low resistance to minimize voltage drop."
    },

    // ==================== FORCE ON MOVING CHARGES (ADDITIONAL) ====================
    {
        q: "An electron is moving with a speed of \\(10^8\\) m/s perpendicular to a uniform magnetic field of intensity \\(B\\). Suddenly intensity of magnetic field is reduced to \\(B/2\\). What is the radius of the path compared to the original radius?",
        options: ["No change", "\\(2r\\)", "\\(r/2\\)", "\\(r/9\\)"],
        correct: 1,
        explanation: "Radius \\(r = \\frac{mv}{qB}\\). If \\(B\\) becomes \\(B/2\\), then \\(r' = \\frac{mv}{q(B/2)} = 2\\left(\\frac{mv}{qB}\\right) = 2r\\)."
    },

    // ==================== MAGNETIC LINES OF FORCE ====================
    {
        q: "Magnetic lines of force:",
        options: [
            "Always intersect",
            "Are always closed",
            "Tend to crowd far away from the poles of a magnetic field",
            "Do not pass through vacuum"
        ],
        correct: 1,
        explanation: "Magnetic field lines are always closed loops. They never intersect, crowd near poles, and can pass through vacuum (as in electromagnetic waves)."
    },
    {
        q: "A magnetic compass will be deflected if it is kept near a:",
        options: ["charge in motion", "charge at rest", "both", "none"],
        correct: 0,
        explanation: "A moving charge creates a magnetic field, which can deflect a compass needle. A stationary charge produces only an electric field, not a magnetic field."
    },
    {
        q: "A magnetic field:",
        options: [
            "always exerts a force on a charged particle",
            "never exerts a force on a charged particle",
            "exerts a force if the charged particle is moving in the direction of the magnetic field lines",
            "exerts a force if the charged particle is moving perpendicular to the magnetic field lines"
        ],
        correct: 3,
        explanation: "Magnetic force on a charged particle is given by \\(F = qvB \\sin \\theta\\). The force is maximum when \\(\\theta = 90°\\) (perpendicular) and zero when \\(\\theta = 0°\\) (parallel)."
    },

    // ==================== LORENTZ FORCE ====================
    {
        q: "A proton is moving along the axis of a solenoid carrying a current. The magnetic force on proton will be:",
        options: ["zero", "maximum", "towards the axis", "away from the axis"],
        correct: 0,
        explanation: "When a charged particle moves parallel to the magnetic field (along the axis of a solenoid), the magnetic force is zero because \\(\\vec{v} \\times \\vec{B} = 0\\)."
    }
];