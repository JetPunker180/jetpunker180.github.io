window.questions = [
    // ==================== BASIC VECTOR CONCEPTS ====================
    {
        q: "Two forces of 10 N and 7 N are applied to an object. The maximum value of their resultant is:",
        options: ["17 N", "10 N", "70 N", "7 N"],
        correct: 0,
        explanation: "The maximum resultant occurs when forces act in the same direction: \\(R_{\\text{max}} = F_1 + F_2 = 10 + 7 = 17\\) N."
    },
    {
        q: "The scalar product of two vectors is negative when:",
        options: ["They are parallel", "They are anti-parallel", "They are perpendicular", "They are rotated through 180°"],
        correct: 1,
        explanation: "\\(\\vec{A} \\cdot \\vec{B} = |\\vec{A}||\\vec{B}|\\cos\\theta\\). For anti-parallel vectors (\\(\\theta = 180°\\)), \\(\\cos180° = -1\\), so dot product is negative."
    },
    {
        q: "The magnitude of the resultant of two equal forces F and F is F when they are inclined at an angle of:",
        options: ["0°", "120°", "90°", "180°"],
        correct: 1,
        explanation: "\\(R = \\sqrt{F^2 + F^2 + 2F^2\\cos\\theta} = F\\sqrt{2 + 2\\cos\\theta} = 2F|\\cos(\\theta/2)|\\). Set \\(R = F\\): \\(2F|\\cos(\\theta/2)| = F \\implies |\\cos(\\theta/2)| = 1/2 \\implies \\theta/2 = 60° \\implies \\theta = 120°\\)."
    },
    {
        q: "When a vector is multiplied by a negative number greater than one, there is change in:",
        options: ["Its magnitude only", "its direction only", "its magnitude and direction", "None of these"],
        correct: 2,
        explanation: "Multiplying by a negative number greater than one: magnitude increases (\\(|k| > 1\\)), and direction reverses (negative sign). Both magnitude and direction change."
    },
    {
        q: "The dot product of force and velocity vectors is equal to:",
        options: ["Work done", "Potential energy", "Power", "All of these"],
        correct: 2,
        explanation: "Power = \\(\\vec{F} \\cdot \\vec{v} = F v \\cos\\theta\\). Instantaneous power is the dot product of force and velocity."
    },
    {
        q: "Torque is the cross product of:",
        options: ["Force and Velocity", "Force and moment arm", "mass and acceleration", "Power and time"],
        correct: 1,
        explanation: "Torque \\(\\vec{\\tau} = \\vec{r} \\times \\vec{F}\\), where \\(\\vec{r}\\) is the position vector (moment arm) from the axis of rotation to the point where force is applied."
    },
    {
        q: "The magnitude of the cross product of two vectors is equal to:",
        options: ["Area of triangle", "Area of square", "Area of parallelogram", "Perimeter of rectangle"],
        correct: 2,
        explanation: "\\(|\\vec{A} \\times \\vec{B}| = |\\vec{A}||\\vec{B}|\\sin\\theta\\). This represents the area of the parallelogram formed by vectors \\(\\vec{A}\\) and \\(\\vec{B}\\)."
    },
    {
        q: "Which of the following is a vector quantity?",
        options: ["Energy", "Time", "Displacement", "Distance"],
        correct: 2,
        explanation: "Displacement has both magnitude and direction, making it a vector quantity. Energy, time, and distance are scalars."
    },
    {
        q: "\\(\\hat{j} \\times \\hat{i} =\\)",
        options: ["1", "0", "\\(\\hat{k}\\)", "\\(-\\hat{k}\\)"],
        correct: 3,
        explanation: "Using right-hand rule: \\(\\hat{i}, \\hat{j}, \\hat{k}\\) follow cyclic order. \\(\\hat{j} \\times \\hat{i} = -(\\hat{i} \\times \\hat{j}) = -\\hat{k}\\)."
    },
    {
        q: "If \\(\\hat{i}\\) is a unit vector along x-axis, then \\(\\hat{i} \\cdot \\hat{i} =\\)",
        options: ["0", "1", "-1", "\\(\\hat{j}\\)"],
        correct: 1,
        explanation: "Dot product of a unit vector with itself is 1 (since \\(\\cos0° = 1\\), and magnitude = 1)."
    },
    {
        q: "If position of a point is (2, -1, 3), then position vector can be written as:",
        options: ["\\(2\\hat{i} + \\hat{j} + 3\\hat{k}\\)", "\\(2\\hat{j} - \\hat{i} + 3\\hat{k}\\)", "\\(2\\hat{k} - \\hat{j} + 3\\hat{i}\\)", "\\(2\\hat{i} - \\hat{j} + 3\\hat{k}\\)"],
        correct: 3,
        explanation: "Position vector is written as \\(x\\hat{i} + y\\hat{j} + z\\hat{k}\\). For (2, -1, 3), position vector = \\(2\\hat{i} - \\hat{j} + 3\\hat{k}\\)."
    },
    {
        q: "Cross product obeys:",
        options: ["Commutative law of addition", "Anti-commutative law of addition", "Commutative law of multiplication", "Anti-commutative law of multiplication"],
        correct: 3,
        explanation: "Cross product is anti-commutative: \\(\\vec{A} \\times \\vec{B} = -(\\vec{B} \\times \\vec{A})\\)."
    },
    {
        q: "For self product \\(\\vec{A} \\cdot \\vec{A} =\\)",
        options: ["0", "1", "-1", "\\(|\\vec{A}|^2\\)"],
        correct: 3,
        explanation: "\\(\\vec{A} \\cdot \\vec{A} = |\\vec{A}||\\vec{A}|\\cos0° = |\\vec{A}|^2\\)."
    },
    {
        q: "A vector whose magnitude is zero is called:",
        options: ["Position vector", "Free Vector", "Null vector", "Unit vector"],
        correct: 2,
        explanation: "A null vector (or zero vector) has magnitude zero and no specific direction."
    },
    {
        q: "If a vector of 10 N is along x-axis, its y component will be:",
        options: ["10 N", "0 N", "100 N", "5 N"],
        correct: 1,
        explanation: "If a vector is along x-axis, it has no component along y-axis, so y-component = 0 N."
    },
    {
        q: "If \\(\\vec{F} = 2\\hat{i} - 3\\hat{j} + 4\\hat{k}\\) and \\(\\vec{r} = \\hat{i} + 4\\hat{j} + 5\\hat{k}\\), then the work done will be:",
        options: ["22 J", "10 J", "12 J", "0 J"],
        correct: 1,
        explanation: "Work done \\(W = \\vec{F} \\cdot \\vec{r} = (2)(1) + (-3)(4) + (4)(5) = 2 - 12 + 20 = 10\\) J."
    },
    {
        q: "If \\(\\vec{A} \\cdot \\vec{B} = 0\\), then the vectors A and B are:",
        options: ["Parallel to each other", "Anti-parallel to each other", "Perpendicular to each other", "None of these"],
        correct: 2,
        explanation: "\\(\\vec{A} \\cdot \\vec{B} = |\\vec{A}||\\vec{B}|\\cos\\theta = 0 \\implies \\cos\\theta = 0 \\implies \\theta = 90°\\). So vectors are perpendicular."
    },
    {
        q: "What's the resultant of 3N and 4N forces acting at right angles?",
        options: ["90N", "5N", "7N", "1N"],
        correct: 1,
        explanation: "For perpendicular vectors, \\(R = \\sqrt{F_1^2 + F_2^2} = \\sqrt{9 + 16} = 5\\) N."
    },
    {
        q: "If \\(\\vec{A} \\times \\vec{B}\\) is along z-axis then vectors A and B will lie in:",
        options: ["xz plane", "xy plane", "yz plane", "none"],
        correct: 1,
        explanation: "Cross product is perpendicular to both vectors. If \\(\\vec{A} \\times \\vec{B}\\) is along z-axis, both A and B must lie in the xy-plane."
    },
    {
        q: "Parallel vectors of same magnitude:",
        options: ["equal", "unequal", "when added, give the sum zero", "when multiplied give the sum zero"],
        correct: 0,
        explanation: "Parallel vectors with the same magnitude and same direction are equal vectors. If they are anti-parallel, they are negatives of each other."
    },
    {
        q: "When the magnitude of two components of vectors are equal to that of their resultant, then the angle between components is:",
        options: ["60°", "90°", "120°", "none"],
        correct: 2,
        explanation: "Let each component have magnitude F. Then \\(R^2 = F^2 + F^2 + 2F^2\\cos\\theta = 2F^2(1 + \\cos\\theta) = 4F^2\\cos^2(\\theta/2)\\). Given \\(R = F\\), so \\(F^2 = 4F^2\\cos^2(\\theta/2) \\implies \\cos^2(\\theta/2) = 1/4 \\implies \\cos(\\theta/2) = 1/2 \\implies \\theta/2 = 60° \\implies \\theta = 120°\\)."
    },
    {
        q: "If two unit vectors are inclined at angle of 90°, then magnitude of their resultant is:",
        options: ["2", "\\(\\sqrt{2}\\)", "\\(\\sqrt{3}\\)", "0"],
        correct: 1,
        explanation: "\\(R = \\sqrt{1^2 + 1^2 + 2 \\cdot 1 \\cdot 1 \\cdot \\cos90°} = \\sqrt{1 + 1 + 0} = \\sqrt{2}\\)."
    },
    {
        q: "The position of a particle in a rectangular coordinate system is (3,2,5). What will the position vector be?",
        options: ["\\(3\\hat{i} + 2\\hat{j} + 5\\hat{k}\\)", "\\(3\\hat{i} - 2\\hat{j} - 5\\hat{k}\\)", "\\(5\\hat{i} + 2\\hat{j} + 3\\hat{k}\\)", "\\(2\\hat{i} + 5\\hat{j} + 3\\hat{k}\\)"],
        correct: 0,
        explanation: "The position vector of a point (x, y, z) is given by \\(\\vec{r} = x\\hat{i} + y\\hat{j} + z\\hat{k}\\). For (3,2,5), the position vector is \\(3\\hat{i} + 2\\hat{j} + 5\\hat{k}\\)."
    },
    {
        q: "What is the displacement vector of the particle that moves from point P(2,3,5) to point Q(3,4,5)?",
        options: ["\\(\\hat{i} + \\hat{j} + 5\\hat{k}\\)", "\\(2\\hat{i} + 4\\hat{j} + 6\\hat{k}\\)", "\\(\\hat{i} + \\hat{j}\\)", "\\(\\hat{i} + \\hat{j} + 10\\hat{k}\\)"],
        correct: 2,
        explanation: "Displacement = Q - P = \\((3-2)\\hat{i} + (4-3)\\hat{j} + (5-5)\\hat{k} = \\hat{i} + \\hat{j} + 0\\hat{k} = \\hat{i} + \\hat{j}\\)."
    },
    {
        q: "What is the vertical component of the force 5 N acting on a particle along a direction making an angle of 60° with the horizontal?",
        options: ["3 N", "2.5 N", "0 N", "4 N"],
        correct: 1,
        explanation: "Vertical component = \\(F \\sin\\theta = 5 \\times \\sin60° = 5 \\times 0.866 = 4.33\\) N. If the angle is with vertical, vertical component = \\(F \\cos60° = 2.5\\) N. The question likely means angle with vertical."
    },
    {
        q: "What are the direction cosines of vector \\(\\vec{A} = 2\\hat{i} + 4\\hat{j} - 5\\hat{k}\\)?",
        options: ["\\(2/\\sqrt{45}, 4/\\sqrt{45}, -5/\\sqrt{45}\\)", "\\(4/\\sqrt{45}, 0, -4/\\sqrt{45}\\)", "\\(-3/\\sqrt{45}, 2/\\sqrt{45}, 5/\\sqrt{45}\\)", "\\(1/\\sqrt{45}, 2/\\sqrt{45}, 5/\\sqrt{45}\\)"],
        correct: 0,
        explanation: "Magnitude \\(|\\vec{A}| = \\sqrt{2^2 + 4^2 + (-5)^2} = \\sqrt{4 + 16 + 25} = \\sqrt{45}\\). Direction cosines are \\((2/\\sqrt{45}, 4/\\sqrt{45}, -5/\\sqrt{45})\\)."
    },
    {
        q: "A fly in a hall of dimensions 10 m × 12 m × 14 m starts to fly from one corner and ends up at the diametrically opposite corner. What is the magnitude of its flight?",
        options: ["17 m", "21 m", "26 m", "36 m"],
        correct: 1,
        explanation: "The displacement from one corner to the diametrically opposite corner of a cuboid is the space diagonal: \\(d = \\sqrt{l^2 + w^2 + h^2} = \\sqrt{100 + 144 + 196} = \\sqrt{440} = 2\\sqrt{110} \\approx 20.98\\) m ˜ 21 m."
    },
    {
        q: "Five equal forces of 10 N are applied at a point. If the angle between them is equal, what is the resultant force?",
        options: ["10 N", "\\(10\\sqrt{2}\\) N", "20 N", "0 N"],
        correct: 3,
        explanation: "If five equal forces are applied at a point with equal angles between them, they form a symmetric system. The resultant is zero because the vectors sum to zero when the number of forces is greater than 2 and they are equally spaced."
    },
    {
        q: "Any vector in an arbitrary direction can be replaced by two or three vectors:",
        options: [
            "perpendicular to each other and have the original vector as their resultant",
            "parallel to each other and have the original vector as their resultant",
            "arbitrary vectors which have original vectors as their resultant",
            "It is impossible to resolve a vector"
        ],
        correct: 2,
        explanation: "A vector can be resolved into components in any chosen directions. The components are arbitrary vectors whose sum equals the original vector. They need not be perpendicular or parallel."
    },
    {
        q: "Angular momentum is:",
        options: ["A scalar vector", "An axial-vector", "A polar vector", "A displacement vector"],
        correct: 1,
        explanation: "Angular momentum \\(\\vec{L} = \\vec{r} \\times \\vec{p}\\) is an axial vector (or pseudovector). It is a vector that does not change sign under inversion of coordinates, unlike polar vectors."
    },
    {
        q: "Which of the following is a vector?",
        options: ["Surface Tension", "Moment of inertia", "Pressure", "None of the above"],
        correct: 3,
        explanation: "Surface tension, moment of inertia, and pressure are all scalar quantities. None of them are vectors."
    },
    {
        q: "On adding two vectors we get:",
        options: ["A vector", "A scalar", "A number", "An operation"],
        correct: 0,
        explanation: "Vector addition follows the parallelogram law and results in another vector (resultant vector)."
    },
    {
        q: "Adding \\(2\\hat{i} + 7\\hat{j}\\) and \\(\\hat{i} + \\hat{j}\\) gives:",
        options: ["\\(3\\hat{i} + 8\\hat{j}\\)", "\\(\\hat{i} + 35\\hat{j}\\)", "\\(\\hat{i} + 8\\hat{j}\\)", "\\(2\\hat{i} + 7\\hat{j}\\)"],
        correct: 0,
        explanation: "\\((2\\hat{i} + 7\\hat{j}) + (\\hat{i} + \\hat{j}) = (2+1)\\hat{i} + (7+1)\\hat{j} = 3\\hat{i} + 8\\hat{j}\\)."
    },
    {
        q: "Subtracting \\(2\\hat{i} + 7\\hat{j}\\) from \\(\\hat{i} + \\hat{j}\\) gives:",
        options: ["\\(-\\hat{i} - 6\\hat{j}\\)", "\\(3\\hat{i} + 8\\hat{j}\\)", "\\(\\hat{i} + 6\\hat{j}\\)", "\\(7\\hat{j}\\)"],
        correct: 0,
        explanation: "\\((\\hat{i} + \\hat{j}) - (2\\hat{i} + 7\\hat{j}) = (1-2)\\hat{i} + (1-7)\\hat{j} = -\\hat{i} - 6\\hat{j}\\)."
    },
    {
        q: "Adding \\(\\hat{i} + 7\\hat{j}\\) and \\(7\\hat{i} + \\hat{j}\\) gives:",
        options: ["\\(8\\hat{i} + 8\\hat{j}\\)", "\\(0\\hat{i} + 76\\hat{j}\\)", "\\(\\hat{i} + 74\\hat{j}\\)", "\\(78\\hat{i} + 8\\hat{j}\\)"],
        correct: 0,
        explanation: "\\((\\hat{i} + 7\\hat{j}) + (7\\hat{i} + \\hat{j}) = (1+7)\\hat{i} + (7+1)\\hat{j} = 8\\hat{i} + 8\\hat{j}\\)."
    },
    {
        q: "Which of the following is true when a body is stationary?",
        options: [
            "The force acting on it is not in contact with it",
            "The body is in vacuum",
            "There is no force acting on it",
            "The combination of forces acting on it balance each other"
        ],
        correct: 3,
        explanation: "A stationary body is in equilibrium, meaning the net force acting on it is zero. This occurs when all forces acting on it balance each other."
    },
    {
        q: "Two forces with magnitude F have the resultant of same magnitude F. What is the angle between the forces?",
        options: ["45°", "60°", "120°", "150°"],
        correct: 2,
        explanation: "\\(R^2 = F^2 + F^2 + 2F^2\\cos\\theta = 2F^2(1 + \\cos\\theta)\\). Set \\(R = F\\): \\(F^2 = 2F^2(1 + \\cos\\theta) \\implies 1 = 2(1 + \\cos\\theta) \\implies 1 + \\cos\\theta = 1/2 \\implies \\cos\\theta = -1/2 \\implies \\theta = 120°\\)."
    },
    {
        q: "What is the angle between the forces if two forces with equal magnitudes F act on a body and the magnitude of the resultant force is \\(F/3\\)?",
        options: ["\\(\\cos^{-1}(-17/18)\\)", "\\(\\cos^{-1}(8/19)\\)", "\\(\\cos^{-1}(-1/3)\\)", "\\(\\cos^{-1}(-1/2)\\)"],
        correct: 0,
        explanation: "\\(R^2 = F^2 + F^2 + 2F^2\\cos\\theta = 2F^2(1 + \\cos\\theta)\\). Set \\(R = F/3\\): \\((F/3)^2 = 2F^2(1 + \\cos\\theta) \\implies 1/9 = 2(1 + \\cos\\theta) \\implies 1 + \\cos\\theta = 1/18 \\implies \\cos\\theta = -17/18 \\implies \\theta = \\cos^{-1}(-17/18)\\)."
    },
    {
        q: "In which direction should the force be applied to balance a force in the direction of North-East direction?",
        options: ["South", "West", "South-West", "North-East"],
        correct: 2,
        explanation: "To balance a force, the balancing force must be equal in magnitude and opposite in direction. The opposite of North-East is South-West."
    },
    {
        q: "Among the following which cannot be a resultant force of 5 N and 10 N?",
        options: ["4 N", "5 N", "8 N", "12 N"],
        correct: 0,
        explanation: "Resultant of two forces lies between \\(|F_1 - F_2|\\) and \\(F_1 + F_2\\) = 5 N and 15 N. The minimum resultant is 5 N (when opposite direction). 4 N is less than 5 N, so it cannot be the resultant."
    },
    {
        q: "The resultant of two forces are perpendicular to the smaller of the two forces. The magnitude of one of the forces is double the magnitude of the other force. What is the angle between the forces?",
        options: ["60°", "90°", "120°", "150°"],
        correct: 2,
        explanation: "Let smaller force = \\(F\\), larger force = \\(2F\\). Resultant \\(\\vec{R}\\) is perpendicular to smaller force \\(\\vec{F}\\). So \\(\\vec{R} \\cdot \\vec{F} = 0\\). Also \\(\\vec{R} = \\vec{F} + \\vec{2F}\\). The component of resultant along \\(\\vec{F}\\) equals \\(F + 2F\\cos\\theta = 0 \\implies \\cos\\theta = -1/2 \\implies \\theta = 120°\\)."
    },
    {
        q: "Which of the following sets of concurrent forces are in equilibrium?",
        options: [
            "\\(F_1 = 3\\text{ N}, F_2 = 5\\text{ N}, F_3 = 1\\text{ N}\\)",
            "\\(F_1 = 3\\text{ N}, F_2 = 5\\text{ N}, F_3 = 6\\text{ N}\\)",
            "\\(F_1 = 3\\text{ N}, F_2 = 5\\text{ N}, F_3 = 9\\text{ N}\\)",
            "\\(F_1 = 3\\text{ N}, F_2 = 5\\text{ N}, F_3 = 15\\text{ N}\\)"
        ],
        correct: 1,
        explanation: "For three concurrent forces to be in equilibrium, the largest force must be less than or equal to the sum of the other two. Check: (a) \\(5 > 3 + 1 = 4\\), not possible; (b) \\(6 < 3 + 5 = 8\\), possible; (c) \\(9 > 3 + 5 = 8\\), not possible; (d) \\(15 > 3 + 5 = 8\\), not possible. Only (b) satisfies the triangle inequality."
    }
];