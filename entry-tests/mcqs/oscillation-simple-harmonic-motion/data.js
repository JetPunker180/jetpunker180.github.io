window.questions = [
    // ==================== BASIC SHM CONCEPTS ====================
    {
        q: "The restoring force in SHM is always directed:",
        options: ["Away from mean position", "Towards mean position", "Perpendicular to displacement", "Along the path of motion"],
        correct: 1,
        explanation: "Restoring force always acts to bring the object back to equilibrium (mean position), so it is directed towards the mean position."
    },
    {
        q: "Which of the following is a condition for SHM?",
        options: ["Constant velocity", "Acceleration directly proportional to displacement", "Force is zero", "Displacement is zero"],
        correct: 1,
        explanation: "In SHM, acceleration is directly proportional to displacement and opposite in direction: \\(a = -\\omega^2 x\\)."
    },
    {
        q: "The phase difference between displacement and acceleration in SHM is:",
        options: ["\\(90^\\circ\\)", "\\(0^\\circ\\)", "\\(180^\\circ\\)", "\\(270^\\circ\\)"],
        correct: 2,
        explanation: "\\(x = A \\sin(\\omega t)\\), \\(a = -\\omega^2 A \\sin(\\omega t) = \\omega^2 A \\sin(\\omega t + \\pi)\\). So phase difference is \\(\\pi\\) (\\(180^\\circ\\))."
    },
    {
        q: "A pendulum has maximum acceleration at:",
        options: ["Mean position", "Halfway position", "Extreme position", "At all positions equally"],
        correct: 2,
        explanation: "Acceleration in SHM is maximum at extreme positions where displacement is maximum: \\(a_{\\text{max}} = \\omega^2 A\\)."
    },
    {
        q: "The energy in SHM is alternately:",
        options: ["Lost and gained", "Potential and thermal", "Kinetic and Potential", "Stored and radiated"],
        correct: 2,
        explanation: "In SHM, energy continuously converts between kinetic energy (maximum at mean position) and potential energy (maximum at extreme positions)."
    },
    {
        q: "Average velocity of a particle executing SHM in one complete vibration is:",
        options: ["\\(A/2\\)", "zero", "\\(a\\omega\\)", "\\(a\\omega^2/2\\)"],
        correct: 1,
        explanation: "Over one complete cycle, the displacement is zero, so average velocity = total displacement / time = \\(0/T = 0\\)."
    },
    {
        q: "A particle executes simple harmonic motion with a frequency \\(f\\). The frequency with which the potential energy oscillates is:",
        options: ["\\(f\\)", "\\(2f\\)", "\\(f/2\\)", "\\(3f\\)"],
        correct: 1,
        explanation: "Potential energy in SHM is proportional to \\(x^2\\), which oscillates at twice the frequency of displacement. So potential energy frequency = \\(2f\\)."
    },
    {
        q: "The displacement of a particle in simple harmonic motion (SHM) in one time period is:",
        options: ["\\(a\\)", "\\(2a\\)", "\\(4a\\)", "Zero"],
        correct: 3,
        explanation: "After one complete cycle, the particle returns to its starting position, so net displacement is zero."
    },

    // ==================== EQUATIONS OF SHM ====================
    {
        q: "The motion of particle executing SHM is given by \\(x = 0.01 \\sin(100\\pi t)\\). The time period is:",
        options: ["0.2", "0.1", "0.02", "0.01"],
        correct: 2,
        explanation: "\\(\\omega = 100\\pi\\). \\(T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{100\\pi} = 0.02\\) seconds."
    },
    {
        q: "General Equation of SHM is \\(x(t) = A \\sin(\\omega t)\\). Find \\(\\omega t\\) if \\(x(t) = 71\\) cm and \\(A = 100\\) cm.",
        options: ["\\(30^\\circ\\)", "\\(45^\\circ\\)", "\\(60^\\circ\\)", "\\(90^\\circ\\)"],
        correct: 1,
        explanation: "\\(\\frac{x}{A} = \\sin(\\omega t) = 0.71\\). \\(\\sin^{-1}(0.71) \\approx 45^\\circ\\)."
    },
    {
        q: "SHM is represented by \\(y = 5 \\sin(\\pi t + 4)\\) m. Values of \\(A\\) and \\(T\\) are:",
        options: ["\\(A = 5, T = 2\\)", "\\(A = 1, T = 1\\)", "\\(A = 5, T = 1\\)", "\\(A = 10, T = 2\\)"],
        correct: 0,
        explanation: "Comparing with \\(y = A \\sin(\\omega t + \\phi)\\), \\(A = 5\\) m, \\(\\omega = \\pi\\) rad/s, \\(T = \\frac{2\\pi}{\\omega} = 2\\) seconds."
    },
    {
        q: "Equation of motion is \\(\\frac{d^2x}{dt^2} + kx = 0\\). Time period is:",
        options: ["\\(2\\pi\\sqrt{k}\\)", "\\(2\\pi\\)", "\\(2\\pi k\\)", "\\(\\frac{2\\pi}{\\sqrt{k}}\\)"],
        correct: 3,
        explanation: "Comparing with \\(\\frac{d^2x}{dt^2} + \\omega^2 x = 0\\), \\(\\omega^2 = k \\implies T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{\\sqrt{k}}\\)."
    },
    {
        q: "Displacement \\(x = 10 \\sin(2t - \\pi/6)\\) m. When \\(x = 6\\) m, velocity is:",
        options: ["24", "8", "10", "16"],
        correct: 3,
        explanation: "\\(v = \\frac{dx}{dt} = 20 \\cos(2t - \\pi/6)\\). \\(\\sin\\theta = 0.6 \\implies \\cos\\theta = 0.8\\). \\(v = 20 \\times 0.8 = 16\\) m/s."
    },
    {
        q: "Restoring force \\(F = -kx\\). Angular velocity is:",
        options: ["\\(\\sqrt{m/k}\\)", "\\(mk\\)", "\\(\\sqrt{mK}\\)", "\\(\\sqrt{k/m}\\)"],
        correct: 3,
        explanation: "\\(ma = -kx \\implies a = -(k/m)x\\). Comparing with \\(a = -\\omega^2 x\\), \\(\\omega = \\sqrt{k/m}\\)."
    },

    // ==================== SPRING MASS SYSTEM ====================
    {
        q: "A spring stretched by 5 cm by force 10 N. Time period for mass 2 kg is:",
        options: ["6.25 s", "3.14 s", "0.0628 s", "0.628 s"],
        correct: 3,
        explanation: "\\(k = F/x = 10/0.05 = 200\\) N/m. \\(T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{2/200} = 0.628\\) s."
    },
    {
        q: "If spring constant is 2 and displacement is 2, sum of KE and PE is:",
        options: ["8 J", "16 J", "4 J", "None"],
        correct: 2,
        explanation: "Total energy = \\(\\frac{1}{2}kA^2 = \\frac{1}{2} \\times 2 \\times 4 = 4\\) J."
    },
    {
        q: "When mass on spring is at equilibrium, net force is:",
        options: ["Maximum", "Zero", "Equal to mg", "Equal to kx"],
        correct: 1,
        explanation: "At equilibrium, spring force balances weight, so net force is zero."
    },
    {
        q: "If spring constant is increased, time period:",
        options: ["Increases", "Decreases", "Remains same", "Becomes infinite"],
        correct: 1,
        explanation: "\\(T = 2\\pi\\sqrt{m/k}\\). As \\(k\\) increases, \\(T\\) decreases."
    },
    {
        q: "Units of spring constant is:",
        options: ["N/m", "m/N", "Nm", "N"],
        correct: 0,
        explanation: "\\(k = F/x\\), so unit is Newton per meter (N/m)."
    },

    // ==================== SIMPLE PENDULUM ====================
    {
        q: "Seconds pendulum has time period:",
        options: ["1 sec", "2 sec", "4 sec", "0.5 sec"],
        correct: 1,
        explanation: "A seconds pendulum has a period of exactly 2 seconds."
    },
    {
        q: "If \\(L\\) is increased to 6 times and \\(g\\) reduces to 3 times, time period becomes:",
        options: ["\\(\\sqrt{18} T\\)", "\\(\\sqrt{16} T\\)", "\\(T/\\sqrt{18}\\)", "\\(T/\\sqrt{16}\\)"],
        correct: 0,
        explanation: "\\(T \\propto \\sqrt{L/g}\\). New \\(T' = \\sqrt{6L/(g/3)} = \\sqrt{18} T\\)."
    },
    {
        q: "Total energy of pendulum is 50J. KE at mean position is:",
        options: ["50J", "25J", "0J", "None"],
        correct: 0,
        explanation: "At mean position, PE = 0, so KE = total energy = 50J."
    },
    {
        q: "If length = \\(4g\\), time period is:",
        options: ["\\(4\\pi\\)", "\\(2\\pi\\)", "\\(\\pi\\)", "\\(\\pi/2\\)"],
        correct: 0,
        explanation: "\\(T = 2\\pi\\sqrt{L/g} = 2\\pi\\sqrt{4g/g} = 2\\pi \\times 2 = 4\\pi\\)."
    },
    {
        q: "Time period of pendulum of length 1 m is approximately:",
        options: ["3 sec", "2 sec", "1 sec", "None"],
        correct: 3,
        explanation: "\\(T = 2\\pi\\sqrt{1/9.8} \\approx 2.006\\) seconds \\(\\approx 2\\) seconds."
    },
    {
        q: "If mass of pendulum is increased, time period:",
        options: ["Decreases", "Increases", "Remains constant", "None"],
        correct: 2,
        explanation: "\\(T = 2\\pi\\sqrt{L/g}\\) is independent of mass."
    },
    {
        q: "Time period of simple pendulum depends on:",
        options: ["Mass", "Length", "\\(g\\)", "Both b and c"],
        correct: 3,
        explanation: "\\(T = 2\\pi\\sqrt{L/g}\\) depends only on length \\(L\\) and acceleration due to gravity \\(g\\)."
    },
    {
        q: "If \\(g\\) becomes \\(g/16\\), time period becomes:",
        options: ["\\(2T\\)", "\\(4T\\)", "\\(T/2\\)", "\\(T/4\\)"],
        correct: 1,
        explanation: "\\(T \\propto 1/\\sqrt{g}\\). If \\(g\\) becomes \\(g/16\\), \\(T' = 4T\\)."
    },
    {
        q: "If length of simple pendulum is doubled, period becomes:",
        options: ["Half", "Double", "\\(\\sqrt{2}\\) times", "\\(2\\sqrt{2}\\) times"],
        correct: 2,
        explanation: "\\(T \\propto \\sqrt{L}\\). If \\(L\\) is doubled, \\(T' = \\sqrt{2} T\\)."
    },
    {
        q: "Pendulum of length \\(l\\) with frequency \\(f\\). Length \\(4l\\) with mass \\(2m\\) has frequency:",
        options: ["\\(4f\\)", "\\(2f\\)", "\\(f\\)", "\\(f/2\\)"],
        correct: 3,
        explanation: "\\(f \\propto 1/\\sqrt{L}\\), independent of mass. For length \\(4l\\), \\(f' = f/2\\)."
    },
    {
        q: "If length of pendulum is increased 4 times, new time period:",
        options: ["\\(2T\\)", "\\(3T\\)", "\\(4T\\)", "\\(5T\\)"],
        correct: 0,
        explanation: "\\(T \\propto \\sqrt{L}\\). If \\(l\\) becomes \\(4l\\), \\(T' = 2T\\)."
    },
    {
        q: "Restoring force for a pendulum is:",
        options: ["\\(T\\)", "\\(mg \\sin\\theta\\)", "\\(kx\\)", "\\(mv^2/r\\)"],
        correct: 1,
        explanation: "For a simple pendulum, restoring force is \\(F = -mg \\sin\\theta\\)."
    },
    {
        q: "Swing completes 24 oscillations in 1 minute. Frequency is:",
        options: ["0.042 Hz", "0.4 Hz", "2.5 Hz", "24 Hz"],
        correct: 1,
        explanation: "\\(f = 24/60 = 0.4\\) Hz."
    },
    {
        q: "Pendulum completes 30 oscillations in 60 seconds. Frequency is:",
        options: ["2 Hz", "1 Hz", "0.5 Hz", "60 Hz"],
        correct: 2,
        explanation: "\\(f = 30/60 = 0.5\\) Hz."
    },
    {
        q: "Motion of a child on a swing is an example of:",
        options: ["Uniform motion", "Random motion", "SHM", "Circular motion"],
        correct: 2,
        explanation: "A swing executes simple harmonic motion for small amplitudes."
    },

    // ==================== OSCILLATIONS IN OTHER SYSTEMS ====================
    {
        q: "If a hole is dug to the center of earth and a ball is dropped in it, the ball will:",
        options: ["Be static", "Attain max acceleration", "Oscillate", "Continue its motion till the other end and stop"],
        correct: 2,
        explanation: "The ball will execute simple harmonic motion about the center of the Earth, moving back and forth between the two ends."
    },
    {
        q: "A vibrator produces 25 waves in 5 seconds. What is its time period?",
        options: ["2", "\\(1/2\\)", "\\(1/5\\)", "None"],
        correct: 2,
        explanation: "Frequency \\(f = 25/5 = 5\\) Hz. Time period \\(T = 1/f = 1/5\\) second."
    }
];