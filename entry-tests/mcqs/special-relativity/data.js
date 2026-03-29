window.questions = [
    {
        q: "Two spaceships, A and B, are both travelling relative to an inertial frame of reference at \\(0.8c\\) in the same direction. Spaceship A shines a light beam forward towards B as shown. What is the speed of the light beam according to the captain on spaceship B?",
        options: ["\\(0.2c\\)", "\\(0.8c\\)", "\\(1.8c\\)", "\\(1.6c\\)"],
        correct: 1,
        explanation: "According to Einstein's second postulate of special relativity, the speed of light in vacuum is constant (\\(c\\)) in all inertial frames of reference. Regardless of the motion of the source or observer, the speed of light remains \\(c\\)."
    },
    {
        q: "In a particle accelerator, an alpha particle of mass \\(6.64 \\times 10^{-27}\\) kg is accelerated to high speed from rest. The total amount of work done on the alpha particle is equal to \\(7.71 \\times 10^{-10}\\) J. Which one of the following is closest to its final speed?",
        options: ["\\(0.80c\\)", "\\(0.90c\\)", "\\(0.85c\\)", "\\(0.95c\\)"],
        correct: 1,
        explanation: "Work done = kinetic energy = \\((\\gamma - 1)mc^2\\). \\(\\gamma = 1 + \\frac{KE}{mc^2}\\). \\(mc^2 = (6.64 \\times 10^{-27})(3 \\times 10^8)^2 = 5.976 \\times 10^{-10}\\) J. \\(\\frac{KE}{mc^2} = \\frac{7.71}{5.976} \\approx 1.29\\). \\(\\gamma = 2.29\\). \\(\\frac{v}{c} = \\sqrt{1 - \\frac{1}{\\gamma^2}} = \\sqrt{1 - \\frac{1}{5.24}} = \\sqrt{0.809} \\approx 0.90\\)."
    },
    {
        q: "A stationary proton has a rest mass energy of \\(1.50 \\times 10^{-10}\\) J. When a proton is accelerated from a speed of \\(\\gamma = 1.05\\) to a speed of \\(\\gamma = 1.10\\), which of the following is closest to the amount of work done on the proton during its acceleration?",
        options: ["\\(4.2 \\times 10^2\\) J", "\\(4.2 \\times 10^9\\) J", "\\(8.6 \\times 10^{15}\\) J", "\\(7.5 \\times 10^{-12}\\) J"],
        correct: 3,
        explanation: "Work done = \\(\\Delta E = (\\gamma_2 - \\gamma_1)mc^2 = (1.10 - 1.05) \\times 1.50 \\times 10^{-10} = 0.05 \\times 1.50 \\times 10^{-10} = 7.5 \\times 10^{-12}\\) J."
    },
    {
        q: "Which of the following statements best explains why it is impossible to accelerate particles to the speed of light?",
        options: [
            "The kinetic energy of particles tends towards an infinite value as they approach light speed.",
            "It is directly forbidden by one of Einstein's postulates.",
            "As particles increase in speed their rest mass tends towards an infinite value.",
            "The length of the path taken increases to infinity."
        ],
        correct: 0,
        explanation: "As a particle approaches the speed of light, its relativistic kinetic energy approaches infinity, requiring infinite work to accelerate it further. Rest mass is invariant (does not change with speed)."
    },
    {
        q: "According to Einstein's theory of special relativity, which one of the following does not depend on the motion of the observer?",
        options: ["Length", "Time interval", "Mass", "Speed of light in vacuum"],
        correct: 3,
        explanation: "One of Einstein's fundamental postulates is that the speed of light in vacuum is constant (\\(c\\)) in all inertial frames of reference, independent of the motion of the source or observer. Length, time, and mass are frame-dependent."
    },
    {
        q: "Which one of the following is the best estimate of the time, as measured by the meteor, for it to reach the surface of the planet?",
        options: ["1488 microseconds", "784 microseconds", "666 microseconds", "413 microseconds"],
        correct: 2,
        explanation: "This question requires context from a diagram. For a meteor traveling at relativistic speed, the time measured by the meteor (proper time) is dilated relative to Earth time: \\(t' = t/\\gamma\\), where \\(\\gamma = 1/\\sqrt{1 - v^2/c^2}\\). With given distance and speed, proper time would be shorter."
    },
    {
        q: "Which one of the following best describes the time of the meteor's descent to the planet surface as measured by the meteor, and the time as measured by the observers on the surface of the planet?",
        options: [
            "Only the meteor measures the proper time.",
            "They are both measurements of proper time in their own reference frames.",
            "Neither are measures of proper time.",
            "Only the observers measure the proper time."
        ],
        correct: 0,
        explanation: "The proper time is the time interval measured in the frame where the events occur at the same spatial location. For the meteor's descent, the meteor is at rest relative to itself, so it measures the proper time. Observers on the planet measure a dilated time."
    },
    {
        q: "Which of the following is closest to Einstein's first postulate?",
        options: [
            "Light always travels at \\(3 \\times 10^8\\) m/s.",
            "There is no way to tell how fast you are going unless you can see what's around you.",
            "Velocities can only be measured relative to something else.",
            "Absolute velocity is that measured with respect to the Sun."
        ],
        correct: 1,
        explanation: "Einstein's first postulate (the principle of relativity) states that the laws of physics are the same in all inertial frames of reference. There is no absolute frame of reference; you cannot determine your absolute speed without reference to something else."
    },
    {
        q: "A spacecraft takes off on a trip to a distant star system 25 light years away at a speed, relative to earth of \\(0.995c\\). Upon arrival it returns to Earth at a similar speed. What is the value of gamma (the Lorentz factor)?",
        options: ["\\(\\gamma = 1.0\\)", "\\(\\gamma = 5.0\\)", "\\(\\gamma = 10.0\\)", "\\(\\gamma = 20.0\\)"],
        correct: 2,
        explanation: "\\(\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}\\). For \\(v = 0.995c\\), \\(v^2/c^2 = 0.990025\\), so \\(1 - v^2/c^2 = 0.009975\\). \\(\\sqrt{0.009975} \\approx 0.09987\\). \\(\\gamma = 1/0.09987 \\approx 10.01\\). So \\(\\gamma \\approx 10.0\\)."
    },
    {
        q: "A spacecraft takes off on a trip to a distant star system 25 light years away at a speed, relative to earth of \\(0.995c\\). Upon arrival it returns to Earth at a similar speed. How long in Earth's frame did it take the craft to reach the star system?",
        options: ["25.1 yrs", "25.0 yrs", "24.5 yrs", "50 yrs"],
        correct: 0,
        explanation: "Distance = 25 light years, speed = \\(0.995c\\). Time in Earth's frame = distance / speed = \\(25 / 0.995 \\approx 25.13\\) years."
    }
];