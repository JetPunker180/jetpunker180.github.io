window.questions = [
    // ==================== BASIC CONCEPTS ====================
    {
        q: "Temperature is a property which determines:",
        options: [
            "How much heat a body contains",
            "Whether a body will feel hot or cold to touch",
            "In which direction heat will flow between two systems",
            "How much total absolute energy a body has"
        ],
        correct: 2,
        explanation: "Temperature determines the direction of heat flow. Heat always flows from a body at higher temperature to a body at lower temperature until thermal equilibrium is reached."
    },
    {
        q: "We prefer mercury as a thermometric substance because:",
        options: [
            "Over a wide range of temperature its expansion is uniform",
            "It does not stick to thermometer glass",
            "It is opaque to light",
            "All of the above"
        ],
        correct: 3,
        explanation: "Mercury is used in thermometers because: (1) it expands uniformly over a wide temperature range, (2) it does not stick to glass, and (3) it is opaque, making the meniscus easily visible."
    },
    {
        q: "The scales of temperature are based on two fixed points which are:",
        options: [
            "The temperatures of water at 0°C and 100°C",
            "Boiling water at atmospheric pressure",
            "The temperatures of ice cold and boiling water",
            "The temperatures of frozen and boiling mercury"
        ],
        correct: 2,
        explanation: "Temperature scales are based on two fixed points: the freezing point of water (ice point) and the boiling point of water (steam point) at standard atmospheric pressure."
    },
    {
        q: "Numerical value of Boltzmann's constant is:",
        options: [
            "\\(1.38 \\times 10^{-31}\\ \\text{K}^{-1}\\)",
            "\\(3.18 \\times 10^{-23}\\ \\text{J/K}\\)",
            "\\(3.18 \\times 10^{-23}\\ \\text{J/K}\\)",
            "\\(1.38 \\times 10^{-23}\\ \\text{J/K}\\)"
        ],
        correct: 3,
        explanation: "Boltzmann's constant (\\(k\\)) is approximately \\(1.38 \\times 10^{-23}\\ \\text{J/K}\\). It relates the average kinetic energy of particles in a gas to the temperature."
    },
    {
        q: "In a clinical thermometer the mercury in the capillary tube does not contract once removed from the patient because:",
        options: [
            "Mercury takes a long time to contract",
            "The amount of mercury used is very small",
            "The capillary tube has a small constriction near the bulb",
            "The capillary tube is very narrow"
        ],
        correct: 2,
        explanation: "Clinical thermometers have a constriction (kink) near the bulb that allows mercury to rise but prevents it from falling back immediately, allowing the temperature to be read after removal from the patient."
    },
    {
        q: "Normal human body temperature 98.6°F corresponds to:",
        options: ["37°C", "42°C", "55°C", "410°C"],
        correct: 0,
        explanation: "Using the conversion formula: \\(C = (F - 32) \\times \\frac{5}{9} = (98.6 - 32) \\times \\frac{5}{9} = 66.6 \\times \\frac{5}{9} = 37°C\\)."
    },
    {
        q: "The reading on the Fahrenheit scale will be double the reading on the centigrade scale when the temperature on the centigrade scale is:",
        options: ["460°C", "280°C", "360°C", "160°C"],
        correct: 3,
        explanation: "Given \\(F = 2C\\). Using \\(F = \\frac{9}{5}C + 32\\), we get \\(2C = \\frac{9}{5}C + 32 \\Rightarrow 2C - \\frac{9}{5}C = 32 \\Rightarrow \\frac{10C - 9C}{5} = 32 \\Rightarrow \\frac{C}{5} = 32 \\Rightarrow C = 160°C\\)."
    },

    // ==================== GAS LAWS & KINETIC THEORY ====================
    {
        q: "General gas equation is:",
        options: [
            "\\(PV = nRT\\)",
            "\\(PV = mRT\\)",
            "\\(PV = CV = Wj\\)",
            "\\(PV = C\\)"
        ],
        correct: 1,
        explanation: "The general gas equation is \\(PV = mRT\\), where \\(m\\) is mass, \\(R\\) is specific gas constant, and \\(T\\) is temperature. \\(PV = nRT\\) uses universal gas constant with number of moles."
    },
    {
        q: "An ideal gas as compared to a real gas at very high pressure occupies:",
        options: [
            "more volume",
            "less volume",
            "same volume",
            "unpredictable behaviour"
        ],
        correct: 0,
        explanation: "At very high pressures, real gas molecules have significant volume and intermolecular forces, causing them to occupy more volume than an ideal gas would predict."
    },
    {
        q: "The unit of pressure in S.I. units is:",
        options: [
            "kg/cm²",
            "mm of water column",
            "pascal",
            "dynes per square cm"
        ],
        correct: 2,
        explanation: "The SI unit of pressure is the pascal (Pa), defined as one newton per square meter (\\(\\text{N/m}^2\\))."
    },
    {
        q: "Temperature of a gas is produced due to:",
        options: [
            "its heating value",
            "kinetic energy of molecules",
            "repulsion of molecules",
            "attraction of molecules"
        ],
        correct: 1,
        explanation: "Temperature is a measure of the average kinetic energy of the molecules in a substance. Higher kinetic energy corresponds to higher temperature."
    },
    {
        q: "Gas molecules of different masses in the same container have the same average translational kinetic energy which is directly proportional to their:",
        options: ["volume", "pressure", "absolute temperature", "time"],
        correct: 2,
        explanation: "According to the kinetic theory of gases, the average translational kinetic energy of gas molecules is directly proportional to the absolute temperature: \\(\\text{KE}_{\\text{avg}} = \\frac{3}{2}kT\\)."
    },
    {
        q: "For a gas obeying Boyle's law, if the pressure is doubled the volume becomes:",
        options: ["double", "one half", "four times", "one fourth"],
        correct: 1,
        explanation: "Boyle's law states that at constant temperature, pressure is inversely proportional to volume: \\(P \\propto 1/V\\). So if pressure is doubled, volume becomes half."
    },
    {
        q: "Triple point of water is:",
        options: ["273°C at 6.11 kPa", "273 K at 61.6 kPa", "273.16°C at 0.611 kPa", "273.16 K at 0.611 kPa"],
        correct: 3,
        explanation: "The triple point of water is exactly 273.16 K (0.01°C) at a pressure of 0.611 kPa (611 Pa). At this point, ice, liquid water, and water vapor coexist in equilibrium."
    },
    {
        q: "Which of the following properties of molecules of a gas is same for all gases at particular temperature?",
        options: ["momentum", "mass", "velocity", "kinetic energy"],
        correct: 3,
        explanation: "According to the kinetic theory, at a given temperature, all gases have the same average translational kinetic energy, regardless of their molecular mass: \\(\\text{KE}_{\\text{avg}} = \\frac{3}{2}kT\\)."
    },
    {
        q: "Boltzmann constant \\(k\\) in terms of universal gas constant \\(R\\) and Avogadro's number \\(N_A\\) is given as:",
        options: ["\\(k = R/N_A\\)", "\\(k = R N_A\\)", "\\(k = N_A/R\\)", "\\(k = R N_A^2\\)"],
        correct: 0,
        explanation: "Boltzmann constant is the gas constant per molecule: \\(k = R/N_A\\), where \\(R = 8.314\\ \\text{J/(mol·K)}\\) and \\(N_A = 6.022 \\times 10^{23}\\ \\text{mol}^{-1}\\)."
    },

    // ==================== THERMODYNAMIC PROCESSES ====================
    {
        q: "Adiabatic process is also called:",
        options: ["Heat exchange process", "Heating process", "Isentropic process", "All of the above"],
        correct: 2,
        explanation: "An adiabatic process is one in which no heat is exchanged with the surroundings. For a reversible adiabatic process, entropy remains constant, so it is also called an isentropic process."
    },
    {
        q: "The work done in the isochoric process is:",
        options: ["constant", "variable", "zero", "depends on situation"],
        correct: 2,
        explanation: "In an isochoric process, volume remains constant (\\(\\Delta V = 0\\)). Since work done \\(W = P \\Delta V\\), the work done is zero."
    },
    {
        q: "In which process all the heat supplied is converted into work done?",
        options: ["isothermal", "isochoric", "isobaric", "isentropic"],
        correct: 0,
        explanation: "In an isothermal process, the internal energy remains constant (\\(\\Delta U = 0\\)), so from the first law \\(Q = \\Delta U + W\\), we get \\(Q = W\\). All heat supplied is converted into work."
    },
    {
        q: "The area enclosed by the curve ABCDA for a Carnot heat engine represents the work done by Carnot engine:",
        options: ["at any instant", "averagely", "during its operation", "during one cycle"],
        correct: 3,
        explanation: "In a Carnot cycle on a \\(PV\\) diagram, the area enclosed by the cycle represents the net work done by the engine during one complete cycle."
    },

    // ==================== SPECIFIC HEATS & RATIOS ====================
    {
        q: "The value of \\(\\gamma\\) (gamma) for diatomic gas is:",
        options: ["1.67", "1.4", "1.3", "none"],
        correct: 1,
        explanation: "For diatomic gases like oxygen, nitrogen, and hydrogen, the ratio of specific heats \\(\\gamma = C_p/C_v = 1.4\\). Monatomic gases have \\(\\gamma = 1.67\\), and triatomic gases have \\(\\gamma = 1.3\\)."
    },
    {
        q: "Which one is the correct relation?",
        options: ["\\(C_p + C_v = ?\\)", "\\(C_p = 1 + R/C_v\\)", "\\(\\gamma = C_p/C_v\\)", "\\(C_p = 1 - R/C_v\\)"],
        correct: 2,
        explanation: "The ratio of specific heats is denoted by \\(\\gamma\\) (gamma), where \\(\\gamma = C_p/C_v\\). For monatomic gases \\(\\gamma = 1.67\\), for diatomic gases \\(\\gamma = 1.4\\), and for triatomic gases \\(\\gamma = 1.3\\)."
    },

    // ==================== HEAT ENGINES & REFRIGERATORS ====================
    {
        q: "For the successful operation of Heat engine which condition should be met?",
        options: [
            "cyclic process",
            "operated at certain temperature difference",
            "both (a) and (b)",
            "none of these"
        ],
        correct: 2,
        explanation: "A heat engine must operate in a cyclic process to return to its initial state, and it requires a temperature difference between a hot reservoir and a cold reservoir to convert heat into work."
    },
    {
        q: "The performance of a refrigerator is described by:",
        options: [
            "efficiency",
            "coefficient of performance",
            "both (a) and (b)",
            "not described"
        ],
        correct: 1,
        explanation: "The performance of a refrigerator is measured by the coefficient of performance (COP), which is the ratio of heat removed from the cold reservoir to the work input. Efficiency is used for heat engines, not refrigerators."
    },
    {
        q: "The purpose of flywheel in the engines is:",
        options: [
            "to smooth out the energy variation",
            "to add more weight to engine to work it stable",
            "to start engine",
            "both (a) and (b)"
        ],
        correct: 0,
        explanation: "A flywheel stores rotational energy and helps smooth out energy variations in an engine, reducing fluctuations in speed during each cycle."
    },
    {
        q: "Petrol engine is a:",
        options: [
            "C.I engine",
            "S.I engine",
            "I.C engine",
            "all the above"
        ],
        correct: 1,
        explanation: "A petrol engine is a Spark Ignition (S.I) engine because it uses a spark plug to ignite the fuel-air mixture. C.I engines are diesel engines that use compression ignition."
    },

    // ==================== ENTROPY ====================
    {
        q: "The unit of entropy is:",
        options: [
            "\\(\\text{J·K}\\)",
            "\\(\\text{J/K}\\)",
            "\\(\\text{N·m/sec}\\)",
            "\\(\\text{kg/m}^2\\text{s}^2\\text{K}\\)"
        ],
        correct: 1,
        explanation: "Entropy is measured in Joules per Kelvin (\\(\\text{J/K}\\)). It represents the amount of energy dispersed per unit temperature."
    },

    // ==================== STATE FUNCTIONS ====================
    {
        q: "Which quantity is a state function?",
        options: ["internal energy", "heat supply", "pressure", "volume"],
        correct: 0,
        explanation: "Internal energy is a state function, meaning it depends only on the current state of the system. Heat supply and work are path functions."
    }
];