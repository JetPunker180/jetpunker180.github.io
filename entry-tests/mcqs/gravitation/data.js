window.questions = [
    // ==================== BASIC CONCEPTS ====================
    {
        q: "The motion of a falling ball towards Earth is due to the ______.",
        options: ["weightlessness", "gravitational force", "acceleration due to gravity", "Both 'a' and 'b'"],
        correct: 1,
        explanation: "A ball falls towards Earth due to the gravitational force exerted by Earth on the ball. This force causes acceleration toward Earth's center."
    },
    {
        q: "Newton's law of gravitation holds between every two objects on the ______.",
        options: ["Earth", "Jupiter", "Moon", "Universe"],
        correct: 3,
        explanation: "Newton's law of universal gravitation applies to all objects in the universe, regardless of their location or size."
    },
    {
        q: "Numerical value of G is:",
        options: [
            "\\(6.673 \\times 10^{-11}\\ \\text{Nm}^2/\\text{kg}^2\\)",
            "\\(6.673 \\times 10^{11}\\ \\text{Nm}^2/\\text{kg}^2\\)",
            "\\(6.763 \\times 10^{-11}\\ \\text{Nm}^2/\\text{kg}^2\\)",
            "\\(6.763 \\times 10^{11}\\ \\text{Nm}^2/\\text{kg}^2\\)"
        ],
        correct: 0,
        explanation: "The universal gravitational constant G has a value of approximately \\(6.673 \\times 10^{-11}\\ \\text{N·m}^2/\\text{kg}^2\\). It was first measured by Henry Cavendish in 1798."
    },
    {
        q: "Gravitational field of Earth is directed ______.",
        options: ["towards the Earth", "towards the Sun", "towards the Moon", "away from the Earth"],
        correct: 0,
        explanation: "Earth's gravitational field is directed radially inward toward the center of the Earth. This is why objects fall downward."
    },
    {
        q: "______ was the first scientist who gave the concept of gravitation.",
        options: ["Einstein", "Newton", "Faraday", "Maxwell"],
        correct: 1,
        explanation: "Sir Isaac Newton first formulated the law of universal gravitation in 1687, explaining that every particle attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them."
    },
    {
        q: "Gravitational force is always ______.",
        options: ["repulsive", "attractive", "both of these", "None of these"],
        correct: 1,
        explanation: "Gravity is always an attractive force. It pulls objects toward each other and never repels."
    },
    {
        q: "In a manned satellite, people experience no gravity and it is known as:",
        options: ["Gravity-weight", "Gravitational weight", "Weightlessness", "Less-weight gravity"],
        correct: 2,
        explanation: "When an object is in free fall (like in a satellite orbiting Earth), it experiences weightlessness. This occurs because both the satellite and the objects inside are accelerating towards Earth at the same rate."
    },
    {
        q: "Dimensional formula for gravitational intensity is:",
        options: ["\\([LT^{-2}]\\)", "\\([LT^{-1}]\\)", "\\([LT]\\)", "\\([LT^{-4}]\\)"],
        correct: 0,
        explanation: "Gravitational intensity (or gravitational field strength) is defined as force per unit mass: \\(g = F/m\\). Force has dimensions \\([MLT^{-2}]\\), so gravitational intensity has dimensions \\([MLT^{-2}]/[M] = [LT^{-2}]\\)."
    },
    {
        q: "Gravitational force on a particle inside a spherical shell is:",
        options: ["1", "-1", "0", "None of the options"],
        correct: 2,
        explanation: "According to Newton's shell theorem, the gravitational force inside a uniform spherical shell is zero. This is because the gravitational forces from different parts of the shell cancel out at any point inside."
    },
    {
        q: "The satellite having the same time period of revolution as that of the earth is called:",
        options: ["Stationary satellite", "Geostationary satellite", "Gravitational satellite", "Polar satellite"],
        correct: 1,
        explanation: "A geostationary satellite has an orbital period equal to Earth's rotational period (24 hours), so it appears stationary above a fixed point on Earth's equator."
    },
    {
        q: "The mass of the body on moon is 40 kg, what is the weight on the earth.",
        options: ["240 kg", "392 N", "240 N", "400 kg"],
        correct: 1,
        explanation: "Mass remains constant (40 kg) everywhere. Weight on Earth = \\(mg = 40 \\times 9.8 = 392\\) N."
    },
    {
        q: "Newton's law of gravitation applies to:",
        options: ["Small bodies only", "Plants only", "All bodies irrespective of their size", "For solar system"],
        correct: 2,
        explanation: "Newton's law of universal gravitation applies to all objects with mass, regardless of their size, composition, or location in the universe."
    },
    {
        q: "The gravitational force between two objects is F. If masses of both the objects are halved without altering the distance between them, then the gravitational force would become:",
        options: ["\\(F/4\\)", "\\(F/2\\)", "\\(F\\)", "\\(2F\\)"],
        correct: 0,
        explanation: "\\(F \\propto m_1 m_2\\). If both masses are halved, new force \\(\\propto (m_1/2)(m_2/2) = m_1 m_2/4 = F/4\\)."
    },
    {
        q: "The Earth attracts the moon with a gravitational force of \\(10^{20}\\) N. The moon attracts the earth with a gravitational force of:",
        options: ["Less than \\(10^{20}\\) N", "\\(10^{-20}\\) N", "Greater than \\(10^{20}\\) N", "\\(10^{20}\\) N"],
        correct: 3,
        explanation: "According to Newton's third law, action and reaction are equal and opposite. Therefore, the moon attracts Earth with the same force of \\(10^{20}\\) N."
    },
    {
        q: "The distance between two bodies becomes 6 times more than the usual distance. Then the gravitational force F becomes:",
        options: ["36 times", "6 times", "12 times", "\\(1/36\\) times"],
        correct: 3,
        explanation: "\\(F \\propto 1/r^2\\). If distance becomes 6 times, \\(F' \\propto 1/(6r)^2 = 1/36r^2\\), so \\(F' = F/36\\)."
    },
    {
        q: "The critical velocity \\(V_c\\) = ______",
        options: ["\\(gR\\)", "\\(g/R\\)", "\\(\\sqrt{g/R}\\)", "\\(\\sqrt{gR}\\)"],
        correct: 3,
        explanation: "Critical velocity (orbital velocity) of a satellite is given by \\(v = \\sqrt{GM/R} = \\sqrt{gR}\\), where \\(g = GM/R^2\\)."
    },
    {
        q: "According to Newton's law of universal gravitation, force is inversely proportional to ______.",
        options: ["\\(m_1 m_2\\)", "\\(1/r^2\\)", "\\(r^2\\)", "Both 'a' and 'b'"],
        correct: 1,
        explanation: "\\(F = G \\frac{m_1 m_2}{r^2}\\). Force is inversely proportional to the square of the distance (\\(1/r^2\\)) between the objects."
    },
    {
        q: "It changes the path of the Moon around the Earth:",
        options: ["centripetal force", "centrifugal force", "pull of the gravity", "turning effect of the force"],
        correct: 0,
        explanation: "The centripetal force provided by Earth's gravity continuously pulls the Moon toward Earth, keeping it in a curved orbital path."
    },
    {
        q: "It determines the gravitational force acting per unit mass:",
        options: ["\\(G\\)", "\\(g\\)", "\\(\\tau\\)", "None of these"],
        correct: 1,
        explanation: "The acceleration due to gravity (\\(g\\)) is the gravitational force acting per unit mass: \\(g = F/m\\)."
    },
    {
        q: "Gravitational force is always present between two objects because of their:",
        options: ["volumes", "shapes", "density", "masses"],
        correct: 3,
        explanation: "Every object with mass attracts every other object with mass. Mass is the fundamental property that gives rise to gravitational attraction."
    },

    // ==================== VARIATION OF g ====================
    {
        q: "The change in the value of 'g' at a height 'h' above the surface of the earth is the same as at a depth 'd' below the surface of earth. When both 'd' and 'h' are much smaller than the radius of the earth, then:",
        options: ["\\(d = 3h/2\\)", "\\(d = h/2\\)", "\\(d = h\\)", "\\(d = 2h\\)"],
        correct: 3,
        explanation: "For small heights, \\(g\\) at height \\(h\\): \\(g_h = g(1 - 2h/R)\\). At depth \\(d\\): \\(g_d = g(1 - d/R)\\). Setting equal: \\(1 - 2h/R = 1 - d/R \\Rightarrow d = 2h\\)."
    },
    {
        q: "The weight of an object in the coal mine, sea level and at the top of the mountain are respectively \\(W_1, W_2\\) and \\(W_3\\), then:",
        options: ["\\(W_1 < W_2 > W_3\\)", "\\(W_1 = W_2 = W_3\\)", "\\(W_1 < W_2 < W_3\\)", "\\(W_1 > W_2 > W_3\\)"],
        correct: 0,
        explanation: "Weight decreases with depth (inside a mine) and with height (on a mountain). At sea level, weight is maximum. So \\(W_1\\) (mine) \\(< W_2\\) (sea level) \\(> W_3\\) (mountain)."
    },
    {
        q: "At what height from Earth's surface, acceleration due to gravity is decreased by 1%?",
        options: ["64 km", "16 km", "32 km", "48 km"],
        correct: 2,
        explanation: "\\(g_h = g(1 - 2h/R)\\). For 1% decrease, \\(2h/R = 0.01 \\Rightarrow h = 0.01R/2 = 0.005R\\). With \\(R \\approx 6400\\) km, \\(h \\approx 32\\) km."
    },

    // ==================== ESCAPE VELOCITY ====================
    {
        q: "A body is projected vertically from the surface of the earth of radius R with velocity equal to half of the escape velocity. The maximum height reached by the body is:",
        options: ["\\(R\\)", "\\(R/2\\)", "\\(R/3\\)", "\\(R/4\\)"],
        correct: 2,
        explanation: "Using energy conservation: \\(\\frac{1}{2}mv^2 - \\frac{GMm}{R} = -\\frac{GMm}{R+h}\\). With \\(v = \\frac{1}{2}\\sqrt{2GM/R} = \\sqrt{GM/(2R)}\\). Solving gives \\(h = R/3\\)."
    },
    {
        q: "The escape velocity from the earth's surface is 11 km/s. A planet has a radius twice that of the earth but its mean density is the same as that of the earth. The escape velocity from this planet would be:",
        options: ["22 km/s", "11 km/s", "5.5 km/s", "16.5 km/s"],
        correct: 0,
        explanation: "\\(v \\propto \\sqrt{M/R}\\). Since \\(M \\propto R^3\\) (same density), \\(v \\propto R\\). So if radius doubles, escape velocity doubles to 22 km/s."
    },
    {
        q: "The ratio of the kinetic energy required to be given to the satellite to escape earth's gravitational field to the kinetic energy required to be given so that the satellite moves in a circular orbit just above earth's atmosphere is:",
        options: ["one half", "two thirds", "three quarters", "infinity"],
        correct: 0,
        explanation: "Escape KE = \\(\\frac{GMm}{R}\\). Orbital KE = \\(\\frac{GMm}{2R}\\). Ratio = \\(\\frac{GMm/R}{GMm/(2R)} = 2\\). So escape KE is twice orbital KE. The reciprocal (orbital/escape) = 1/2."
    },

    // ==================== ORBITAL MOTION ====================
    {
        q: "A satellite of mass m revolves around the earth of radius R at a height x from its surface. If g is the acceleration due to gravity on the surface of the earth, the orbital speed of the satellite is:",
        options: ["\\(gx\\)", "\\(gR/(R-x)\\)", "\\(\\sqrt{gR^2/(R+x)}\\)", "\\(gR^2/(R+x)^2\\)"],
        correct: 2,
        explanation: "Orbital speed \\(v = \\sqrt{GM/(R+x)}\\). Since \\(g = GM/R^2\\), \\(GM = gR^2\\), so \\(v = \\sqrt{gR^2/(R+x)}\\)."
    },
    {
        q: "The time-period of an earth satellite in circular orbit is independent of:",
        options: [
            "the mass of the satellite",
            "radius of its orbit",
            "both the mass and radius of the orbit",
            "neither the mass of the satellite nor the radius of its orbit"
        ],
        correct: 0,
        explanation: "\\(T = 2\\pi \\sqrt{r^3/GM}\\). The period depends on orbital radius \\(r\\) but is independent of the satellite's mass."
    },
    {
        q: "A geostationary satellite orbits around the earth in a circular orbit of radius 36000 km. Then, the time period of a satellite orbiting a few hundred km above the earth's surface (\\(R_{\\text{earth}} = 6400\\) km) is approximately:",
        options: ["1/2 hr", "1 day", "2 hr", "4 hr"],
        correct: 2,
        explanation: "By Kepler's third law, \\(T^2 \\propto r^3\\). For geostationary, \\(T = 24\\) hr, \\(r = 36000\\) km. For LEO, \\(r \\approx 6400\\) km. \\(T_2 = T_1 (r_2/r_1)^{3/2} = 24 \\times (6400/36000)^{3/2} \\approx 24 \\times (0.178)^{3/2} \\approx 24 \\times 0.075 = 1.8\\) hr \\(\\approx 2\\) hr."
    },
    {
        q: "If the distance between the earth and the sun were half its present value, the number of days in a year would have been:",
        options: ["64.5", "129", "182.5", "730"],
        correct: 1,
        explanation: "By Kepler's third law, \\(T^2 \\propto r^3\\). If \\(r\\) becomes \\(r/2\\), \\(T_2/T_1 = (1/2)^{3/2} = 1/2.828 = 0.3535\\). \\(T_2 = 365 \\times 0.3535 \\approx 129\\) days."
    },

    // ==================== GRAVITATIONAL POTENTIAL & ENERGY ====================
    {
        q: "If g is the acceleration due to gravity on the earth's surface, the gain in the potential energy of an object of mass m raised from the surface of the earth to a height equal to the radius R of the earth is:",
        options: ["\\(2mgR\\)", "\\(\\frac{1}{2}mgR\\)", "\\(\\frac{1}{4}mgR\\)", "\\(mgR\\)"],
        correct: 1,
        explanation: "\\(\\Delta U = \\frac{GMm}{R} - \\frac{GMm}{2R} = \\frac{GMm}{2R} = \\frac{gR^2 \\cdot m}{2R} = \\frac{1}{2}mgR\\)."
    },
    {
        q: "Energy required to move a body of mass m from an orbit of radius 2R to 3R is:",
        options: ["\\(\\frac{GMm}{12R^2}\\)", "\\(\\frac{GMm}{3R^2}\\)", "\\(\\frac{GMm}{8R}\\)", "\\(\\frac{GMm}{6R}\\)"],
        correct: 3,
        explanation: "\\(\\Delta U = \\left(-\\frac{GMm}{3R}\\right) - \\left(-\\frac{GMm}{2R}\\right) = \\frac{GMm}{2R} - \\frac{GMm}{3R} = \\frac{GMm}{6R}\\)."
    },
    {
        q: "If \\(W_1, W_2\\) and \\(W_3\\) represent the work done in moving a particle from A to B along three different paths in a gravitational field, then:",
        options: ["\\(W_1 > W_2 > W_3\\)", "\\(W_1 = W_2 = W_3\\)", "\\(W_1 < W_2 < W_3\\)", "\\(W_1 > W_3\\)"],
        correct: 1,
        explanation: "Gravitational force is conservative. Work done between two points is independent of path, so \\(W_1 = W_2 = W_3\\)."
    },

    // ==================== GRAVITATIONAL FIELD INTENSITY ====================
    {
        q: "Which of the following is true about gravitational field?",
        options: [
            "The gravitational field due to a body extends till a finite distance",
            "The strength increases when moving away from a body",
            "The strength decreases when moving away from a body",
            "At infinite, the strength is not zero"
        ],
        correct: 2,
        explanation: "Gravitational field intensity \\(g = GM/r^2\\). As distance \\(r\\) increases, the field strength decreases. It extends to infinity theoretically, approaching zero at infinite distance."
    },
    {
        q: "Gravitational field intensity due to particle of mass m at 5 m is 40 N/kg. Then its value at 10 m is:",
        options: ["160 N/kg", "220 N/kg", "10 N/kg", "80 N/kg"],
        correct: 2,
        explanation: "\\(g \\propto 1/r^2\\). At 10 m = 2 × 5 m, \\(g = 40 \\times (1/2)^2 = 40 \\times 1/4 = 10\\) N/kg."
    },
    {
        q: "For net intensity to be zero at a neutral point due to two particles, field intensity due to both particles, will be:",
        options: ["Opposite to each other", "Equal in magnitude", "Both (1) and (2)", "None of these"],
        correct: 2,
        explanation: "At a neutral point, gravitational field intensities from two masses cancel. This requires them to be equal in magnitude and opposite in direction."
    },
    {
        q: "A body of mass 60 g experiences a gravitational force of 3.0 N. The magnitude of the gravitational field intensity at that point is:",
        options: ["0.05 N/kg", "50 N/kg", "20 N/kg", "180 N/kg"],
        correct: 1,
        explanation: "\\(g = F/m = 3.0\\ \\text{N} / 0.06\\ \\text{kg} = 50\\ \\text{N/kg}\\)."
    },

    // ==================== SYMMETRY & SPECIAL CASES ====================
    {
        q: "A point mass m is kept at each of the eight vertices of a cube, the gravitational field intensity is zero at:",
        options: ["Each face center", "Each edge center", "At body center", "Cannot be zero anywhere"],
        correct: 2,
        explanation: "Due to symmetry, at the center of the cube, the gravitational field contributions from all eight vertices cancel out completely, resulting in zero net field intensity."
    },

    // ==================== PLANETARY PROPERTIES ====================
    {
        q: "Average density of the earth:",
        options: [
            "is a complex function of g",
            "does not depend on g",
            "is inversely proportional to g",
            "is directly proportional to g"
        ],
        correct: 3,
        explanation: "\\(g = \\frac{GM}{R^2}\\) and \\(M = \\frac{4}{3}\\pi R^3 \\rho\\) \\(\\Rightarrow \\rho = \\frac{3g}{4\\pi GR}\\). Thus density is directly proportional to \\(g\\)."
    },
    {
        q: "\\(g_e\\) and \\(g_p\\) denote the acceleration due to gravity on the surface of the earth and another planet with mass and radius twice that of the earth, then:",
        options: ["\\(g_p = g_e\\)", "\\(g_p = 0.5g_e\\)", "\\(g_p = 2g_e\\)", "\\(g_p = g_e/\\sqrt{2}\\)"],
        correct: 1,
        explanation: "\\(g = GM/R^2\\). If \\(M \\to 2M\\) and \\(R \\to 2R\\), \\(g_p = \\frac{G(2M)}{(2R)^2} = \\frac{2GM}{4R^2} = \\frac{1}{2} \\cdot \\frac{GM}{R^2} = g_e/2\\)."
    }
];