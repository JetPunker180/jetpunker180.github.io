window.questions = [
    // ==================== BASIC WAVE CONCEPTS ====================
    {
        q: "Waves transmit ______ from one place to another:",
        options: ["energy", "mass", "both", "none"],
        correct: 0,
        explanation: "Waves transfer energy from one point to another without transferring matter. Particles oscillate but do not travel with the wave."
    },
    {
        q: "The waves that require a material medium for their propagation are called:",
        options: ["matter waves", "electromagnetic waves", "carrier waves", "mechanical waves"],
        correct: 3,
        explanation: "Mechanical waves (like sound waves, water waves) require a material medium for propagation. Electromagnetic waves do not require a medium."
    },
    {
        q: "If particles are displaced in direction perpendicular to waves then waves are:",
        options: ["Longitudinal waves", "Transverse Waves", "Stationary Waves", "All of these"],
        correct: 1,
        explanation: "In transverse waves, particle displacement is perpendicular to the direction of wave propagation. In longitudinal waves, displacement is parallel."
    },
    {
        q: "The distance between any two consecutive crests or troughs is called:",
        options: ["frequency", "period", "wavelength", "phase difference"],
        correct: 2,
        explanation: "Wavelength \\(\\lambda\\) is the distance between two consecutive points in phase, such as crest to crest or trough to trough."
    },
    {
        q: "In vibrating cord the points where the amplitude is maximum, are called:",
        options: ["antinodes", "nodes", "troughs", "crests"],
        correct: 0,
        explanation: "In a standing wave, antinodes are points of maximum amplitude, while nodes are points of zero amplitude."
    },
    {
        q: "A node is a point located along the medium where there is always _____.",
        options: ["a double crest", "constructive interference", "destructive interference", "a double rarefaction"],
        correct: 2,
        explanation: "A node is a point of zero displacement in a standing wave, caused by destructive interference of the incident and reflected waves."
    },
    {
        q: "The distance between two consecutive nodes is:",
        options: ["\\(\\lambda/2\\)", "\\(\\lambda/4\\)", "\\(\\lambda\\)", "\\(2\\lambda\\)"],
        correct: 0,
        explanation: "In a standing wave, nodes are points of zero displacement. The distance between consecutive nodes is \\(\\lambda/2\\)."
    },
    {
        q: "The distance between consecutive node and antinode is:",
        options: ["\\(\\lambda\\)", "\\(\\lambda/2\\)", "\\(2\\lambda\\)", "\\(\\lambda/4\\)"],
        correct: 3,
        explanation: "In a standing wave, the distance between a node and the nearest antinode is \\(\\lambda/4\\)."
    },
    {
        q: "When two identical traveling waves are superimposed, the velocity of the resultant wave:",
        options: ["decreases", "increases", "remains unchanged", "becomes zero"],
        correct: 2,
        explanation: "When two identical traveling waves superimpose, the resultant wave travels at the same speed as the individual waves; wave speed depends on the medium, not on superposition."
    },
    {
        q: "Which phenomenon is produced when two or more waves passing simultaneously through the same medium meet up with one another?",
        options: ["refraction", "diffraction", "interference", "reflection"],
        correct: 2,
        explanation: "Interference is the phenomenon where two or more waves superpose to form a resultant wave of greater, lower, or same amplitude."
    },

    // ==================== WAVE PROPERTIES & INTENSITY ====================
    {
        q: "On doubling amplitude of the wave, intensity is increased:",
        options: ["1/2 times", "2 times", "4 times", "3 times"],
        correct: 2,
        explanation: "Intensity \\(I \\propto A^2\\). If amplitude is doubled (\\(A \\to 2A\\)), then \\(I \\propto (2A)^2 = 4A^2\\), so intensity increases by a factor of 4."
    },
    {
        q: "Two waves, each with amplitude of 0.5 m are superimposed with constructive interference such that they are in phase. What is the resultant amplitude?",
        options: ["0.25 m", "0.5 m", "0 m", "1 m"],
        correct: 3,
        explanation: "For constructive interference when waves are in phase, resultant amplitude = \\(A_1 + A_2 = 0.5 + 0.5 = 1\\) m."
    },
    {
        q: "The intensity of beam observed through polarizer:",
        options: ["is increased", "is decreased", "is always zero", "remains unchanged"],
        correct: 1,
        explanation: "When unpolarized light passes through a polarizer, its intensity is reduced by half (Malus's law for unpolarized light). So intensity is decreased."
    },
    {
        q: "Loudness of sound is directly related to:",
        options: ["Intensity of Sound", "Wavelength of Sound", "Frequency of Sound", "Pitch of Sound"],
        correct: 0,
        explanation: "Loudness is the perception of the intensity (energy) of sound. Higher intensity produces louder sound. Frequency determines pitch, not loudness."
    },

    // ==================== SPEED OF SOUND ====================
    {
        q: "Speed of sound is greatest in:",
        options: ["Glass", "Water", "Methanol", "Helium"],
        correct: 0,
        explanation: "Speed of sound is greatest in solids because particles are closer together, allowing faster transmission of vibrations. Glass (a solid) has higher speed than liquids or gases."
    },
    {
        q: "Speed of sound in vacuum is:",
        options: ["340 m/s", "\\(3 \\times 10^8\\) m/s", "4000 ft/s", "None of these"],
        correct: 3,
        explanation: "Sound requires a material medium to propagate. In vacuum, there are no particles to transmit vibrations, so speed of sound is zero."
    },
    {
        q: "Ratio of velocity of sound in oxygen as compared to hydrogen is:",
        options: ["4 : 1", "16 : 1", "1 : 4", "1 : 16"],
        correct: 2,
        explanation: "Speed of sound in a gas is inversely proportional to \\(\\sqrt{\\text{molar mass}}\\). Molar mass of \\(O_2 = 32\\) g/mol, \\(H_2 = 2\\) g/mol. \\(v_{O_2}/v_{H_2} = \\sqrt{2/32} = \\sqrt{1/16} = 1/4\\). So ratio is 1 : 4."
    },
    {
        q: "To increase the speed of sound in air to reach rise above 0°C:",
        options: ["0.41 m/sec", "0.51 m/sec", "0.81 m/sec", "0.61 m/sec"],
        correct: 3,
        explanation: "Speed of sound in air increases by approximately 0.61 m/s for every 1°C rise in temperature. The formula is \\(v = v_0 + 0.61t\\), where \\(v_0 = 332\\) m/s at 0°C."
    },
    {
        q: "The speed of sound in air at 332 m/sec. The speed of sound at 22°C will be:",
        options: ["345 m/s", "340 m/s", "350 m/s", "330 m/s"],
        correct: 0,
        explanation: "\\(v = v_0 + 0.61t = 332 + 0.61 \\times 22 = 332 + 13.42 = 345.42\\) m/s ˜ 345 m/s."
    },

    // ==================== DOPPLER EFFECT ====================
    {
        q: "The frequency of a wave as the source approaches the observer with speed v:",
        options: ["Increases", "Decreases", "First increases then decreases", "Remains same"],
        correct: 0,
        explanation: "According to the Doppler effect, when a source moves toward an observer, the observed frequency increases due to wavefront compression."
    },
    {
        q: "When the source moves towards an observer the frequency of waves as perceived by observer:",
        options: ["Increases", "Decreases", "Remains constant", "None of these"],
        correct: 0,
        explanation: "Doppler effect: when source moves toward observer, the observed frequency increases because wavefronts are compressed."
    },
    {
        q: "Blue colored source is seen Red if:",
        options: [
            "Source is moving away from observer",
            "Observer is moving away from source",
            "Gamma rays' effect is observed",
            "None of these"
        ],
        correct: 0,
        explanation: "When a source moves away from an observer, the observed wavelength increases (redshift). Blue light has shorter wavelength; moving away shifts it toward red."
    },
    {
        q: "A source of sound moves towards the stationary observer with speed one third of speed of sound. If the frequency of the sound from the source is 100 Hz. The apparent frequency of the sound heard by observer could be:",
        options: ["60 Hz", "100 Hz", "200 Hz", "150 Hz"],
        correct: 3,
        explanation: "Doppler effect: \\(f' = f \\times \\frac{v}{v - v_s}\\). \\(v_s = v/3\\). So \\(f' = 100 \\times \\frac{v}{v - v/3} = 100 \\times \\frac{v}{2v/3} = 100 \\times \\frac{3}{2} = 150\\) Hz."
    },
    {
        q: "An observer moves towards a stationary source of sound with a velocity one-third of the velocity of sound. What is the percentage increase in the apparent frequency?",
        options: ["0.5%", "zero", "20%", "5%"],
        correct: 2,
        explanation: "Doppler effect for observer moving toward stationary source: \\(f' = f \\frac{v + v_0}{v}\\). Given \\(v_0 = v/5\\), then \\(f' = f(1 + 1/5) = 1.2f\\). Percentage increase = 20%."
    },
    {
        q: "A siren placed at a railway platform is emitting sound of frequency 5 kHz. A passenger sitting in a moving train A records a frequency of 5.5 kHz while the train approaches the siren. During his return journey in a different train B he records a frequency of 6.0 kHz while approaching the same siren. The ratio of velocity of train B to that of train A is:",
        options: ["242/252", "2", "5/6", "11/6"],
        correct: 1,
        explanation: "For train approaching a stationary source: \\(f' = f \\frac{v + v_{\\text{train}}}{v}\\). For train A: \\(5.5 = 5 \\frac{v + v_A}{v} \\implies 1.1 = \\frac{v + v_A}{v} \\implies v_A = 0.1v\\). For train B: \\(6.0 = 5 \\frac{v + v_B}{v} \\implies 1.2 = \\frac{v + v_B}{v} \\implies v_B = 0.2v\\). Ratio \\(v_B/v_A = 0.2/0.1 = 2\\)."
    },
    {
        q: "The distance star is receding from earth with a speed of \\(1.40 \\times 10^7\\) m/sec. It emits light of frequency \\(4.57 \\times 10^{14}\\) Hz. The speed of light is \\(3 \\times 10^8\\) m/sec. The Doppler effect formulae can be used with light waves. What would be the frequency of this light when detected on earth?",
        options: ["\\(2.04 \\times 10^{13}\\) Hz", "\\(4.37 \\times 10^{14}\\) Hz", "\\(4.57 \\times 10^{14}\\) Hz", "\\(7.9 \\times 10^{14}\\) Hz"],
        correct: 1,
        explanation: "For light, relativistic Doppler effect: \\(f' = f \\sqrt{\\frac{c - v}{c + v}}\\). Approximating: \\(f' \\approx f(1 - v/c) = 4.57 \\times 10^{14} \\times (1 - 1.4\\times10^7/3\\times10^8) = 4.57 \\times 10^{14} \\times (1 - 0.0467) = 4.57 \\times 10^{14} \\times 0.9533 \\approx 4.36 \\times 10^{14}\\) Hz."
    },

    // ==================== BEATS & INTERFERENCE ====================
    {
        q: "What happens when two sound waves of frequencies differing by more than 10 Hz reach our ear simultaneously?",
        options: [
            "beats are not produced.",
            "the waves destroy each other's effect.",
            "interference of sound does not take place.",
            "beats are produced but cannot be heard by human ear."
        ],
        correct: 3,
        explanation: "Beats are produced when frequencies differ by less than about 10 Hz. For differences greater than 10 Hz, the human ear cannot perceive the periodic variations in intensity as distinct beats, but interference still occurs."
    },
    {
        q: "A car has two horns; one is emitting a frequency of 199 Hz and the other is emitting a frequency of 203 Hz. What beat frequency do they produce?",
        options: ["4 Hz", "199 Hz", "201 Hz", "203 Hz"],
        correct: 0,
        explanation: "Beat frequency = \\(|f_1 - f_2| = |199 - 203| = 4\\) Hz."
    },
    {
        q: "When two tuning forks (fork 1 and fork 2) are sounded simultaneously, 4 beats per second are heard. Now, some tape is attached on the prong of fork 2. When the tuning forks are sounded again, 6 beats per second are heard. If the frequency of fork 1 is 200 Hz, then what was the original frequency of fork 2?",
        options: ["202 Hz", "200 Hz", "204 Hz", "196 Hz"],
        correct: 3,
        explanation: "Initially, beat frequency = \\(|f_1 - f_2| = 4\\). So \\(f_2\\) could be 196 Hz or 204 Hz. Adding tape increases mass, decreasing frequency. After adding tape, beat frequency increases to 6. If \\(f_2\\) was 204 Hz, adding tape would decrease it toward 200 Hz, reducing beats. If \\(f_2\\) was 196 Hz, adding tape decreases it further, increasing beats. So original \\(f_2 = 196\\) Hz."
    },
    {
        q: "A tuning fork of frequency 256 Hz makes beats per second with the vibrating string of a piano. The beat frequency decreases to 2 beats per second, when the tension in the string is slightly increased. The frequency of the piano string before increasing the tension was:",
        options: ["256 + 2 Hz", "256 Hz", "256 - 2 Hz", "256 - 5 Hz"],
        correct: 2,
        explanation: "Initially, beat frequency = \\(|f - 256|\\) = unknown. When tension increases, frequency increases. If beat frequency decreases, the string frequency was initially lower than 256 Hz (so increasing tension brings it closer to 256 Hz). So initial frequency = \\(256 - 2 = 254\\) Hz."
    },

    // ==================== STANDING WAVES & RESONANCE ====================
    {
        q: "In an organ pipe if one side is closed, then it is proved that harmonics released will be:",
        options: ["Even numbers", "Odd numbers", "Odd and even both", "Fractional numbers"],
        correct: 1,
        explanation: "A closed organ pipe produces only odd harmonics: \\(f_1, 3f_1, 5f_1, \\ldots\\) because the closed end is a node and open end is an antinode."
    },
    {
        q: "What is the wavelength of the third harmonic (n=3) of a standing wave established on a string of length 3 m fixed at both ends?",
        options: ["1 m", "1.5 m", "2 m", "3 m"],
        correct: 2,
        explanation: "For a string fixed at both ends, the wavelength of the nth harmonic is \\(\\lambda = 2L/n\\). For \\(n = 3\\), \\(\\lambda = 2 \\times 3 / 3 = 2\\) m."
    },
    {
        q: "Which of the following frequencies are higher harmonics of a string with fundamental frequency of 150 Hz?",
        options: ["200 Hz, 300 Hz", "300 Hz, 600 Hz", "250 Hz, 450 Hz", "250 Hz, 500 Hz"],
        correct: 1,
        explanation: "Harmonics are integer multiples of the fundamental frequency. For fundamental 150 Hz, harmonics are 150 Hz, 300 Hz, 450 Hz, 600 Hz, etc. So 300 Hz and 600 Hz are harmonics."
    },
    {
        q: "A standing wave is formed by waves of frequency 256 Hz. The speed of the waves is 128 m/s. The distance between the nodes must be:",
        options: ["2.00 m", "1.00 m", "0.500 m", "0.250 m"],
        correct: 3,
        explanation: "Wavelength \\(\\lambda = v/f = 128/256 = 0.5\\) m. The distance between adjacent nodes is \\(\\lambda/2 = 0.25\\) m."
    },
    {
        q: "An air column that is closed at one end is used to determine the speed of sound. The frequency of the tuning fork used is 329.6 Hz. The length of the shortest air column producing the resonance is 25.0 cm. The speed of the sound must be:",
        options: ["380.6 m/s", "282.4 m/s", "\\(3.30 \\times 10^2\\) m/s", "\\(3.50 \\times 10^2\\) m/s"],
        correct: 2,
        explanation: "For a closed pipe, fundamental resonance occurs when \\(L = \\lambda/4\\). So \\(\\lambda = 4L = 4 \\times 0.25 = 1.0\\) m. Speed \\(v = f\\lambda = 329.6 \\times 1.0 = 329.6\\) m/s ˜ \\(3.30 \\times 10^2\\) m/s."
    },
    {
        q: "A tuning fork of 512 Hz is used to produce resonance in a resonance tube. The level of water at first resonance is 30.7 cm and at second resonance is 63.2 cm. The maximum possible error in calculating velocity of sound in cm/s is:",
        options: ["204.8", "102.4", "51.2", "153.60"],
        correct: 1,
        explanation: "For resonance tube, \\(\\lambda/2 = (l_2 - l_1)\\). So \\(\\lambda = 2(63.2 - 30.7) = 2 \\times 32.5 = 65\\) cm. \\(v = f\\lambda = 512 \\times 65 = 33280\\) cm/s. The maximum error is due to least count of measurement (0.1 cm). Error in \\((l_2 - l_1) = 0.1 + 0.1 = 0.2\\) cm. So error in \\(\\lambda = 2 \\times 0.2 = 0.4\\) cm. Error in \\(v = f \\times \\text{error in } \\lambda = 512 \\times 0.4 = 204.8\\) cm/s."
    },
    {
        q: "In an experiment for the determination of the speed of sound in air using the resonant column method, the length of the air column that resonates in the fundamental mode, with a tuning fork is 0.1 m. When this length is changed to 0.35 m, the same tuning fork resonates with the first overtone. Calculate the end correction.",
        options: ["0.012 m", "0.025 m", "0.05 m", "0.024 m"],
        correct: 1,
        explanation: "For fundamental mode: \\(\\lambda/4 = L_1 + e\\). For first overtone: \\(3\\lambda/4 = L_2 + e\\). Subtracting: \\((3\\lambda/4 - \\lambda/4) = (L_2 + e) - (L_1 + e) \\implies \\lambda/2 = L_2 - L_1 = 0.35 - 0.10 = 0.25\\) m \\(\\implies \\lambda = 0.5\\) m. Then \\(\\lambda/4 = 0.125\\) m = \\(L_1 + e = 0.1 + e \\implies e = 0.025\\) m."
    },

    // ==================== WAVE EQUATIONS ====================
    {
        q: "The displacement y of a particle in a medium can be expressed as \\(y = 10^{-6} \\sin(100t + 20x + \\pi/4)\\) m, where t is in second and x in metre. The speed of the wave is:",
        options: ["200 m/s", "5 m/s", "20 m/s", "5 m/s"],
        correct: 1,
        explanation: "The general wave equation is \\(y = A \\sin(\\omega t + kx + \\phi)\\). Here \\(\\omega = 100\\) rad/s, \\(k = 20\\) rad/m. Wave speed \\(v = \\omega/k = 100/20 = 5\\) m/s."
    },
    {
        q: "In a phase difference between two points is 60° on a wave velocity of 360 m/s and frequency 500 Hz, then path difference between the two points is:",
        options: ["1 cm", "6 cm", "12 cm", "24 cm"],
        correct: 2,
        explanation: "Phase difference \\(\\phi = \\frac{2\\pi}{\\lambda} \\times \\text{path difference}\\). Path difference = \\(\\frac{\\phi}{2\\pi} \\times \\lambda\\). \\(\\lambda = v/f = 360/500 = 0.72\\) m = 72 cm. \\(\\phi = 60° = \\pi/3\\) rad. Path difference = \\(\\frac{\\pi/3}{2\\pi} \\times 72 = \\frac{1}{6} \\times 72 = 12\\) cm."
    },

    // ==================== SUPERSONIC & SHOCK WAVES ====================
    {
        q: "The object moves faster than speed of sound so this object is called:",
        options: ["Sonic", "Hypersonic", "Infrasonic", "Supersonic", "Ultra Sonic"],
        correct: 3,
        explanation: "Supersonic refers to speeds greater than the speed of sound. Hypersonic refers to speeds much greater (Mach 5+). Infrasonic and ultrasonic refer to frequencies below and above human hearing range."
    },
    {
        q: "A shock wave is produced due to an earthquake which makes the building move in the direction of shock wave. Which progressive wave would this be?",
        options: ["Longitudinal wave", "Transverse wave", "Material Wave", "Particle Wave"],
        correct: 0,
        explanation: "Earthquake shock waves are primarily longitudinal (P-waves) that compress and expand the ground in the direction of propagation, causing buildings to move in that direction."
    },

    // ==================== MEDIUM TRANSITION ====================
    {
        q: "A sound wave travels from one medium to another. Which one of the following characteristic of sound remains unchanged?",
        options: ["Amplitude", "Velocity", "Frequency", "Quality", "Wavelength"],
        correct: 2,
        explanation: "When sound travels from one medium to another, frequency remains constant. Velocity and wavelength change depending on the medium properties. Amplitude may change due to energy loss."
    },
    {
        q: "A source of sound of frequency 600 Hz is located inside water. The speed of sound in water is 1500 m/s and in air it is 300 m/s. The frequency of sound recorded by an observer who is standing in air is:",
        options: ["200 Hz", "300 Hz", "20 Hz", "600 Hz"],
        correct: 3,
        explanation: "The frequency of sound depends on the source, not on the medium. When sound travels from one medium to another, frequency remains constant. So the observer in air will hear the same frequency: 600 Hz."
    }
];