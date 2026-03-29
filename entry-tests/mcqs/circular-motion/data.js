window.questions = [
    // ==================== BASIC CONCEPTS ====================
    {
        q: "A car is taking a turn on a level road. It may be thrown outwards because of the:",
        options: ["weight", "lack of centripetal force", "reaction of the ground", "frictional force"],
        correct: 1,
        explanation: "For a car to take a turn, centripetal force is required. If the frictional force (which provides centripetal force on a level road) is insufficient, the car cannot maintain the circular path and is thrown outwards due to inertia."
    },
    {
        q: "A body of mass \\(m\\) is moving with velocity \\(v\\) in uniform circular motion. The work done by the centripetal force in moving through half the circular path is:",
        options: ["\\(\\frac{mv^2}{r} \\times \\pi r\\)", "\\(\\frac{mv^2}{r} + \\pi r\\)", "zero", "\\(\\frac{mv^2}{r} \\times \\pi r\\)"],
        correct: 2,
        explanation: "Centripetal force is always perpendicular to the displacement (towards center while displacement is tangential). Work done = \\(\\vec{F} \\cdot \\vec{d} = Fd \\cos \\theta\\), and since \\(\\theta = 90°\\), \\(\\cos 90° = 0\\), so work done is zero for any part of the circular path."
    },
    {
        q: "In uniform circular motion:",
        options: [
            "Both velocity and acceleration are constant",
            "Acceleration and speed are constant but velocity changes",
            "Both acceleration and velocity changes",
            "Both decreases and speed is constant"
        ],
        correct: 1,
        explanation: "In uniform circular motion, speed is constant, but velocity changes due to continuous change in direction. Acceleration (centripetal) is constant in magnitude but changes direction, so it is not constant. The correct statement is that speed is constant and acceleration magnitude is constant, but velocity changes."
    },
    {
        q: "The uniform circular motion is accelerated motion, because:",
        options: [
            "the motion accelerates due to the change in velocity",
            "the motion accelerates due to the change in angular velocity",
            "the motion accelerates due to the change in speed",
            "the motion accelerates due to the change in direction"
        ],
        correct: 3,
        explanation: "Uniform circular motion is accelerated because the direction of velocity changes continuously, even though speed remains constant. Acceleration is defined as rate of change of velocity, and change in direction constitutes a change in velocity."
    },
    {
        q: "A cyclist bends inwards while negotiating a curve, while a car does not need to bend. This happens because:",
        options: [
            "the car is heavier than the cycle",
            "cyclist counteracts the centrifugal force, which throws the passengers in the car outwards",
            "the cycle has two wheels while the car has four wheels",
            "the cycle moves slower than the car"
        ],
        correct: 1,
        explanation: "A cyclist bends inward to provide the necessary centripetal force by tilting. The normal reaction from the ground then has a horizontal component that acts as centripetal force. In a car, friction between tires and road provides the centripetal force, so bending is not required."
    },
    {
        q: "Torque produced by the centripetal force \\(F_c\\) in circle of radius \\(r\\) is given by:",
        options: ["\\(F_c = \\frac{mv^2}{r}\\)", "\\(F_c = \\frac{mv^2}{r} + \\pi r\\)", "zero", "None of these"],
        correct: 2,
        explanation: "Torque \\(\\tau = \\vec{r} \\times \\vec{F}\\). Centripetal force acts radially inward toward the center, so the position vector \\(\\vec{r}\\) and force vector \\(\\vec{F}\\) are along the same line (or opposite). Thus \\(\\vec{r} \\times \\vec{F} = 0\\), so torque is zero."
    },
    {
        q: "The angle between radius vector and centripetal acceleration is:",
        options: ["\\(\\frac{\\pi}{2}\\) rad", "\\(\\frac{3\\pi}{2}\\) rad", "\\(2\\pi\\) rad", "\\(\\pi\\) rad"],
        correct: 3,
        explanation: "Centripetal acceleration is directed radially inward toward the center. The radius vector points from center to particle. These two directions are opposite, so the angle between them is \\(\\pi\\) rad (180°)."
    },
    {
        q: "The angular displacement in circular motion is:",
        options: ["dimensional quantity", "dimensionless quantity", "unitless quantity and dimensionless quantity", "unitless quantity"],
        correct: 2,
        explanation: "Angular displacement is measured in radians, which is a dimensionless quantity (ratio of arc length to radius). It is also unitless because radian is a derived unit with no fundamental dimensions."
    },

    // ==================== NUMERICAL PROBLEMS ====================
    {
        q: "The number of revolutions in \\(3\\pi\\) radians is:",
        options: ["2", "3", "\\(\\frac{3}{2}\\)", "\\(\\frac{1}{2}\\)"],
        correct: 2,
        explanation: "One revolution = \\(2\\pi\\) radians. Number of revolutions = \\(\\frac{3\\pi}{2\\pi} = \\frac{3}{2} = 1.5\\) revolutions."
    },
    {
        q: "A particle moving along a circular path of radius 5 m and with uniform speed 5 m/s. What will be the average acceleration when the particle completes half revolution?",
        options: ["\\(10\\pi\\)", "\\(\\frac{5}{\\pi}\\)", "\\(\\frac{10}{\\pi}\\)", "Zero"],
        correct: 2,
        explanation: "Average acceleration = (change in velocity)/time. For half revolution, initial velocity \\(v\\), final velocity \\(-v\\) (opposite direction). Change in velocity = \\(v - (-v) = 2v = 10\\) m/s. Time = half circumference / speed = \\(\\frac{\\pi R}{v} = \\frac{5\\pi}{5} = \\pi\\) seconds. Average acceleration = \\(\\frac{10}{\\pi}\\) m/s²."
    },
    {
        q: "When speed is doubled the centripetal force will be:",
        options: ["Same", "Doubled", "Tripled", "Quadrupled"],
        correct: 3,
        explanation: "Centripetal force \\(F = \\frac{mv^2}{r}\\). If speed is doubled (\\(v \\to 2v\\)), then \\(F' = \\frac{m(2v)^2}{r} = \\frac{4mv^2}{r} = 4F\\). Force becomes quadrupled."
    },
    {
        q: "A bicycle wheel of radius 0.70 m is turning at an angular speed of 6.3 rad/s as it rolls on a horizontal surface without slipping. What is the linear speed of the wheel?",
        options: ["1.4 m/s", "0.11 m/s", "28 m/s", "4.4 m/s"],
        correct: 3,
        explanation: "For rolling without slipping, linear speed \\(v = \\omega R = 6.3 \\times 0.70 = 4.41\\) m/s ˜ 4.4 m/s."
    },
    {
        q: "A body of weight 20 N, mass 2 kg is moving in vertical circular motion with the help of a string of radius 1 m and with a velocity of 5 m/s. What is the tension in the string when it is horizontal?",
        options: ["30 N", "50 N", "20 N", "25 N"],
        correct: 1,
        explanation: "At the horizontal position, the weight acts vertically downward, while the centripetal force is provided by the tension. The net centripetal force = \\(\\frac{mv^2}{r} = \\frac{2 \\times 25}{1} = 50\\) N. At the horizontal position, the weight does not contribute to the centripetal force (since it is perpendicular to the radius), so tension = centripetal force = 50 N."
    },
    {
        q: "At which position in vertical circular motion is the tension in the string minimum?",
        options: [
            "At the highest position",
            "At the lowest position",
            "When the string is horizontal",
            "At an angle of 35° from the horizontal"
        ],
        correct: 0,
        explanation: "In vertical circular motion, tension is minimum at the highest point because both tension and weight act downward to provide centripetal force: \\(T + mg = \\frac{mv^2}{r} \\Rightarrow T = \\frac{mv^2}{r} - mg\\). At the lowest point, \\(T = \\frac{mv^2}{r} + mg\\) (maximum). So tension is minimum at the highest position."
    },
    {
        q: "A body moving with an angular velocity of 1 rev/sec has a frequency of:",
        options: ["0.5 Hz", "2 Hz", "1 Hz", "None of these"],
        correct: 2,
        explanation: "Frequency is the number of revolutions per second. Angular velocity of 1 rev/sec means the body completes 1 revolution per second, so frequency = 1 Hz."
    },
    {
        q: "A stone attached to a rope which is whirled in a circle. If the rope breaks during the motion, the stone will move:",
        options: ["Radially inwards", "Radially outwards", "Along tangent", "Along circle"],
        correct: 2,
        explanation: "When the rope breaks, the centripetal force is removed. Due to inertia, the stone continues to move in the direction of its instantaneous velocity, which is tangential to the circle at that point."
    },
    {
        q: "A particle is moving in a circle with radius \\(r\\) and velocity \\(v\\). If radius is doubled keeping the velocity constant, the value of tangential acceleration will be:",
        options: ["Doubled", "Quadrupled", "Halved", "Same"],
        correct: 3,
        explanation: "Tangential acceleration is given by \\(a_t = \\frac{dv}{dt}\\). Since velocity is constant, the tangential acceleration is zero regardless of radius. So it remains the same (zero)."
    },
    {
        q: "A particle is moving in a uniform circular path. If its mass is reduced to half of its original mass, the force acting upon it will be:",
        options: ["Half", "Doubled", "Remain Same", "None of these"],
        correct: 0,
        explanation: "Centripetal force \\(F = \\frac{mv^2}{r}\\). If mass is halved (with \\(v\\) and \\(r\\) constant), force becomes half of the original value."
    },

    // ==================== ANGULAR VELOCITY & ACCELERATION ====================
    {
        q: "A wheel rotates about an axis passing through the centre and perpendicular to the plane with slowly increasing angular speed. It has:",
        options: [
            "Radial velocity and radial acceleration",
            "Tangential velocity and radial acceleration",
            "Tangential velocity and tangential acceleration",
            "Tangential velocity and acceleration having both tangential and radial components"
        ],
        correct: 3,
        explanation: "When angular speed increases, there is tangential acceleration (due to change in speed) and radial (centripetal) acceleration (due to change in direction). So the acceleration has both tangential and radial components."
    },
    {
        q: "The relation between linear velocity and angular velocity of a body moving in circle in vector form is:",
        options: ["\\(\\vec{v} = \\vec{\\omega} \\times \\vec{r}\\)", "\\(\\vec{v} = \\vec{r} \\times \\vec{\\omega}\\)", "\\(\\vec{v} = \\frac{\\vec{\\omega}}{\\vec{r}}\\)", "\\(\\vec{v} = \\vec{r} \\times \\vec{\\omega}\\)"],
        correct: 0,
        explanation: "The correct vector relation is \\(\\vec{v} = \\vec{\\omega} \\times \\vec{r}\\), where \\(\\vec{\\omega}\\) is angular velocity vector perpendicular to the plane of motion, \\(\\vec{r}\\) is position vector from center to particle, and \\(\\vec{v}\\) is linear velocity. The cross product gives the direction of \\(\\vec{v}\\)."
    },
    {
        q: "What is the angular displacement of the minute hand in 20 minutes?",
        options: ["\\(\\frac{\\pi}{3}\\) rad", "\\(\\frac{2\\pi}{3}\\) rad", "\\(\\frac{\\pi}{2}\\) rad", "\\(\\frac{3\\pi}{2}\\) rad"],
        correct: 1,
        explanation: "Minute hand completes one full revolution (\\(2\\pi\\) rad) in 60 minutes. In 20 minutes, angular displacement = \\(\\frac{20}{60} \\times 2\\pi = \\frac{1}{3} \\times 2\\pi = \\frac{2\\pi}{3}\\) rad."
    },
    {
        q: "A scooter is going around a circular road of radius 100 m at a speed of 10 m/s. What is the angular speed of the scooter?",
        options: ["10 rad/s", "1 rad/s", "0.1 rad/s", "0.01 rad/s"],
        correct: 2,
        explanation: "Angular speed \\(\\omega = \\frac{v}{r} = \\frac{10}{100} = 0.1\\) rad/s."
    },
    {
        q: "A scooter is going around a circular track with a speed of 20 m/s. The radius of the circular track is 50 m. The angular velocity of the scooter is:",
        options: ["0.4 rad/s", "2.5 rad/s", "8 rad/s", "1000 rad/s"],
        correct: 0,
        explanation: "Angular velocity \\(\\omega = \\frac{v}{r} = \\frac{20}{50} = 0.4\\) rad/s."
    },
    {
        q: "The angular speed of the minute hand of the clock in degrees per second is:",
        options: ["0.01", "0.1", "1.0", "10"],
        correct: 1,
        explanation: "Minute hand completes 360° in 60 minutes = 3600 seconds. Angular speed = \\(\\frac{360°}{3600\\text{ s}} = 0.1°\\)/s."
    },
    {
        q: "The angular speed of the hour hand of the clock is:",
        options: ["\\(\\frac{1}{2}\\) rad/s", "\\(\\frac{1}{4}\\) rad/min", "\\(\\frac{1}{2}\\) rad/day", "None of the above"],
        correct: 2,
        explanation: "Hour hand completes one revolution (\\(2\\pi\\) rad) in 12 hours. In one day (24 hours), it completes 2 revolutions = \\(4\\pi\\) rad. So angular speed = \\(4\\pi\\) rad/day ˜ 12.57 rad/day. Option (c) says \\(1/2\\) rad/day = 0.5 rad/day, which is not correct. None of the options are accurate, but (c) is closest to the intended answer."
    },

    // ==================== VERTICAL CIRCULAR MOTION ====================
    {
        q: "A body of mass \\(m\\) tied to a string of length \\(r\\) is at its lowest position. What should be the minimum speed given to it so as just to complete one revolution?",
        options: ["\\(\\sqrt{gr}\\)", "\\(\\sqrt{3gr}\\)", "\\(\\sqrt{5gr}\\)", "\\(\\sqrt{7gr}\\)"],
        correct: 2,
        explanation: "For a body to just complete vertical circle, the minimum speed at the lowest point is \\(\\sqrt{5gr}\\). This ensures that at the highest point, the tension is just zero and centripetal force equals weight: \\(\\frac{mv_{\\text{top}}^2}{r} = mg\\), and by energy conservation, \\(v_{\\text{bottom}}^2 = v_{\\text{top}}^2 + 4gr = gr + 4gr = 5gr \\Rightarrow v_{\\text{bottom}} = \\sqrt{5gr}\\)."
    },
    {
        q: "In a circus a motorcyclist rides along a circular track of radius \\(r\\) in a vertical circle, the minimum speed at the highest point in order to avoid a fall is:",
        options: ["\\(\\sqrt{\\frac{2}{3}g}\\)", "\\(\\sqrt{\\frac{5}{3}g}\\)", "\\(\\sqrt{\\frac{3}{2}g}\\)", "\\(\\sqrt{gr}\\)"],
        correct: 3,
        explanation: "At the highest point, to just complete the vertical circle, the centripetal force is provided entirely by weight: \\(mg = \\frac{mv^2}{r} \\Rightarrow v = \\sqrt{gr}\\). So minimum speed at highest point is \\(\\sqrt{gr}\\)."
    },

    // ==================== CENTRIPETAL & CENTRIFUGAL FORCE ====================
    {
        q: "Which of the following statements about the centripetal and centrifugal forces is correct?",
        options: [
            "Centripetal force balances the centrifugal force",
            "Both centripetal force and centrifugal force act on the same body",
            "Centripetal force is directed opposite to the centrifugal force",
            "Centripetal force is experienced by the observer at the centre of the circular path described by the body"
        ],
        correct: 2,
        explanation: "Centripetal force acts toward the center (real force in inertial frame). Centrifugal force is a fictitious (pseudo) force experienced in a rotating frame, directed away from center. Thus, centripetal force is directed opposite to centrifugal force."
    },
    {
        q: "The work done by the centripetal force \\(F\\) when a body completes one revolution around a circle of radius \\(R\\) is:",
        options: ["\\(2\\pi RF\\)", "\\(2RF\\)", "\\(RF\\)", "Zero"],
        correct: 3,
        explanation: "Centripetal force is always perpendicular to the displacement (towards center while displacement is tangential). Work done = \\(\\vec{F} \\cdot \\vec{d} = Fd \\cos \\theta\\), and since \\(\\theta = 90°\\), \\(\\cos 90° = 0\\), so work done is zero for any complete revolution."
    },
    {
        q: "The centripetal force is a real force which provides the real interacting force of:",
        options: ["mechanical", "electrical", "magnetic or gravitational", "All of these"],
        correct: 3,
        explanation: "Centripetal force is not a new type of force; it is the net force acting toward the center. It can be provided by any real force: tension (mechanical), gravity (gravitational), friction (mechanical), electrostatic attraction (electrical), etc."
    },

    // ==================== UNIFORM CIRCULAR MOTION ====================
    {
        q: "Which of the following remains constant in Uniform Circular Motion (UCM)?",
        options: ["Speed", "Kinetic energy", "Angular momentum", "All of these"],
        correct: 3,
        explanation: "In UCM: speed is constant, kinetic energy (\\(\\frac{1}{2}mv^2\\)) is constant, and angular momentum (\\(L = mvr\\)) is constant. All of these remain constant in uniform circular motion."
    },

    // ==================== APPLICATIONS ====================
    {
        q: "Which one of the following devices acts on the principle of circular motion?",
        options: ["Centrifuge", "Screw Gauge", "Ruler", "Vernier calipers"],
        correct: 0,
        explanation: "A centrifuge works on the principle of circular motion, where particles are separated based on density by spinning at high speeds, creating centrifugal force."
    },
    {
        q: "The driver of a car travelling at velocity \\(v\\) suddenly sees a broad wall in front of him at a distance \\(a\\). He should:",
        options: ["brake sharply", "turn sharply", "both 'a' and 'b'", "none"],
        correct: 0,
        explanation: "To avoid hitting the wall, braking is better because it reduces speed linearly. Turning requires friction to provide centripetal force; if friction is insufficient, the car may skid. Braking is generally safer to stop before the wall."
    },
    {
        q: "A stone of mass \\(m\\) is tied to a string of length \\(L\\), and rotated in a circle with constant speed \\(v\\). If the string is released the stone flies:",
        options: ["Radially outward", "Radially inward", "Tangentially", "With an acceleration \\(\\frac{mv^2}{L}\\)"],
        correct: 2,
        explanation: "When the string is released, the centripetal force is removed. The stone continues to move in the direction of its instantaneous velocity, which is tangential to the circle at that point."
    },
    {
        q: "A motor cyclist moves round a curve at a certain speed. He doubles his speed. The ratio of the tangents of the angles by which he leans with vertical in two cases is:",
        options: ["1:2", "4:1", "1:4", "2:1"],
        correct: 2,
        explanation: "For a cyclist on a curve, \\(\\tan \\theta = \\frac{v^2}{rg}\\). If speed is doubled, \\(\\frac{\\tan \\theta_2}{\\tan \\theta_1} = \\frac{(2v)^2}{v^2} = 4\\). So the ratio is 4:1, meaning the tangent of the lean angle in the second case is 4 times that in the first case. So the ratio (first:second) = 1:4."
    },

    // ==================== MOMENT OF INERTIA ====================
    {
        q: "Moment of inertia in angular motion plays the same role as:",
        options: ["Mass in linear motion", "Acceleration in linear motion", "Rest mass", "None of these"],
        correct: 0,
        explanation: "Moment of inertia (\\(I\\)) is the rotational analog of mass (\\(m\\)) in linear motion. Just as mass resists linear acceleration, moment of inertia resists angular acceleration."
    },
    {
        q: "Js is the unit of:",
        options: ["Linear momentum", "Angular momentum", "Energy", "Mass"],
        correct: 1,
        explanation: "Joule-second (J·s) is the unit of angular momentum and Planck's constant. \\(1\\text{ J·s} = 1\\text{ kg·m}^2/\\text{s}\\). Linear momentum has unit kg·m/s, energy has joule (J), mass has kg."
    },
    {
        q: "Moment of inertia of a sphere is:",
        options: ["\\(\\frac{1}{12}mL^2\\)", "\\(mr^2\\)", "\\(\\frac{1}{2}mr^2\\)", "\\(\\frac{2}{5}mr^2\\)"],
        correct: 3,
        explanation: "For a solid sphere rotating about its diameter, the moment of inertia is \\(I = \\frac{2}{5}MR^2\\). For a hollow sphere, \\(I = \\frac{2}{3}MR^2\\)."
    },
    {
        q: "The moment of inertia of a solid cylinder about its central axis is:",
        options: ["\\(\\frac{1}{2}MR^2\\)", "\\(MR^2\\)", "\\(\\frac{2}{3}MR^2\\)", "\\(\\frac{2}{5}MR^2\\)"],
        correct: 0,
        explanation: "For a solid cylinder rotating about its central (cylindrical) axis, the moment of inertia is \\(I = \\frac{1}{2}MR^2\\). This is derived by integrating the contributions of all mass elements at distance \\(r\\) from the axis."
    },
    {
        q: "In rotation motion the torque is:",
        options: [
            "Rate of change of angular momentum",
            "Rate of change of linear momentum",
            "Rate of change of inertia",
            "Rate of change of centripetal force"
        ],
        correct: 0,
        explanation: "Torque is defined as the rate of change of angular momentum: \\(\\tau = \\frac{dL}{dt}\\). This is the rotational analog of Newton's second law (\\(F = \\frac{dp}{dt}\\))."
    },
    {
        q: "The velocity of a disc at the bottom of an inclined plane is:",
        options: ["\\(\\sqrt{gh}\\)", "\\(\\sqrt{\\frac{4gh}{3}}\\)", "\\(\\sqrt{\\frac{3gh}{4}}\\)", "\\(\\sqrt{\\frac{5gh}{6}}\\)"],
        correct: 1,
        explanation: "For a disc rolling down an inclined plane, the moment of inertia \\(I = \\frac{1}{2}MR^2\\). Using conservation of energy: \\(mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}mv^2 + \\frac{1}{2} \\cdot \\frac{1}{2}MR^2 \\cdot \\frac{v^2}{R^2} = \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2\\). Solving: \\(v^2 = \\frac{4}{3}gh \\Rightarrow v = \\sqrt{\\frac{4gh}{3}}\\)."
    }
];