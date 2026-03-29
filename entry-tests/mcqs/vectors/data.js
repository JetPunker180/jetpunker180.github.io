window.questions = [
    {
        q: "If \\(\\frac{x^2}{|x|^2} + \\frac{y^2}{|y|^2} + \\frac{z^2}{|z|^2} = 1\\), then which of the following is true?",
        options: [
            "\\(\\cos^2 \\alpha + \\cos^2 \\beta + \\cos^2 \\gamma = 1\\)",
            "\\(\\sin^2 \\alpha + \\sin^2 \\beta + \\sin^2 \\gamma = 2\\)",
            "\\(\\cos^2 \\alpha + \\cos^2 \\beta + \\cos^2 \\gamma = 0\\)",
            "Both (a) and (b)"
        ],
        correct: 3,
        explanation: "Given \\(\\frac{x^2}{|x|^2} + \\frac{y^2}{|y|^2} + \\frac{z^2}{|z|^2} = 1\\). Since \\(\\frac{x^2}{|x|^2} = \\cos^2 \\alpha\\), where \\(\\alpha\\) is the angle made by the vector with x-axis, we have \\(\\cos^2 \\alpha + \\cos^2 \\beta + \\cos^2 \\gamma = 1\\). Also, using the identity \\(\\cos^2 \\theta = 1 - \\sin^2 \\theta\\), we get \\(3 - (\\sin^2 \\alpha + \\sin^2 \\beta + \\sin^2 \\gamma) = 1\\), which gives \\(\\sin^2 \\alpha + \\sin^2 \\beta + \\sin^2 \\gamma = 2\\). Hence both (a) and (b) are true."
    },
    {
        q: "Given two vectors \\(\\mathbf{i} - \\mathbf{j}\\) and \\(\\mathbf{i} + 2\\mathbf{j}\\), then the unit vector coplanar with two vectors and perpendicular to the first is:",
        options: [
            "\\(\\pm \\frac{1}{\\sqrt{2}}(\\mathbf{i} - \\mathbf{j})\\)",
            "\\(\\pm \\frac{1}{\\sqrt{5}}(2\\mathbf{i} + \\mathbf{j})\\)",
            "\\(\\pm \\frac{1}{\\sqrt{2}}(\\mathbf{i} + \\mathbf{j})\\)",
            "\\(\\pm \\frac{1}{\\sqrt{5}}(\\mathbf{i} + 2\\mathbf{j})\\)"
        ],
        correct: 2,
        explanation: "Let \\(\\mathbf{a} = \\mathbf{i} - \\mathbf{j}\\) and \\(\\mathbf{b} = \\mathbf{i} + 2\\mathbf{j}\\). A vector coplanar with \\(\\mathbf{a}\\) and \\(\\mathbf{b}\\) is perpendicular to \\(\\mathbf{a}\\). Let the required vector be \\(\\mathbf{v} = x\\mathbf{i} + y\\mathbf{j}\\). Since it's coplanar with \\(\\mathbf{a}\\) and \\(\\mathbf{b}\\), it lies in the xy-plane. It is perpendicular to \\(\\mathbf{a}\\), so \\(\\mathbf{v} \\cdot \\mathbf{a} = 0 \\Rightarrow (x\\mathbf{i} + y\\mathbf{j}) \\cdot (\\mathbf{i} - \\mathbf{j}) = x - y = 0 \\Rightarrow x = y\\). Also, \\(\\mathbf{v}\\) is a unit vector, so \\(x^2 + y^2 = 1 \\Rightarrow 2x^2 = 1 \\Rightarrow x = \\pm \\frac{1}{\\sqrt{2}}\\). Thus \\(\\mathbf{v} = \\pm \\frac{1}{\\sqrt{2}}(\\mathbf{i} + \\mathbf{j})\\)."
    },
    {
        q: "The value of \\(\\mathbf{i} \\cdot (\\mathbf{j} \\times \\mathbf{k})\\) is:",
        options: ["0", "1", "-1", "\\(\\mathbf{i}\\)"],
        correct: 1,
        explanation: "We know that \\(\\mathbf{j} \\times \\mathbf{k} = \\mathbf{i}\\). Therefore, \\(\\mathbf{i} \\cdot (\\mathbf{j} \\times \\mathbf{k}) = \\mathbf{i} \\cdot \\mathbf{i} = |\\mathbf{i}|^2 = 1\\)."
    },
    {
        q: "The area of a triangle formed by two vectors \\(\\vec{a}\\) and \\(\\vec{b}\\) is given by:",
        options: [
            "\\(\\frac{1}{2}|\\vec{a} \\times \\vec{b}|\\)",
            "\\(|\\vec{a} \\times \\vec{b}|\\)",
            "\\(\\frac{1}{2}(\\vec{a} \\cdot \\vec{b})\\)",
            "\\(\\frac{1}{2}|\\vec{a}||\\vec{b}|\\)"
        ],
        correct: 0,
        explanation: "The area of a triangle formed by two vectors \\(\\vec{a}\\) and \\(\\vec{b}\\) is half the magnitude of their cross product: \\(\\text{Area} = \\frac{1}{2}|\\vec{a} \\times \\vec{b}|\\). This represents the area of the triangle with sides as the two vectors."
    },
    {
        q: "Find the vector \\(\\vec{b}\\) such that \\(\\vec{a} \\times \\vec{b} = \\vec{c}\\) and \\(\\vec{a} \\cdot \\vec{b} = 3\\), where \\(\\vec{a} = \\vec{i} - 2\\vec{j} + 3\\vec{k}\\) and \\(\\vec{c} = \\vec{i} + \\vec{j} - \\vec{k}\\).",
        options: [
            "\\(\\frac{1}{7}(5\\vec{i} + 10\\vec{j} + 5\\vec{k})\\)",
            "\\(\\frac{1}{7}(5\\vec{i} + 10\\vec{j} - 5\\vec{k})\\)",
            "\\(\\frac{1}{7}(5\\vec{i} - 10\\vec{j} + 5\\vec{k})\\)",
            "\\(\\frac{1}{7}(-5\\vec{i} + 10\\vec{j} + 5\\vec{k})\\)"
        ],
        correct: 0,
        explanation: "Let \\(\\vec{b} = x\\vec{i} + y\\vec{j} + z\\vec{k}\\). Given \\(\\vec{a} \\cdot \\vec{b} = 3 \\Rightarrow x - 2y + 3z = 3\\). Also, \\(\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -2 & 3 \\\\ x & y & z \\end{vmatrix} = \\vec{i}(-2z - 3y) - \\vec{j}(1 \\cdot z - 3x) + \\vec{k}(1 \\cdot y + 2x) = \\vec{c} = \\vec{i} + \\vec{j} - \\vec{k}\\). Equating components: \\(-2z - 3y = 1\\), \\(-z + 3x = 1\\), \\(y + 2x = -1\\). Solving these equations along with \\(x - 2y + 3z = 3\\) gives \\(x = \\frac{5}{7}, y = \\frac{10}{7}, z = \\frac{5}{7}\\). Thus \\(\\vec{b} = \\frac{1}{7}(5\\vec{i} + 10\\vec{j} + 5\\vec{k})\\)."
    },
    {
        q: "Compute the value of: \\(i \\times (j \\times k)\\)",
        options: ["1", "-1", "0", "None of these"],
        correct: 2,
        explanation: "First, \\(j \\times k = i\\). Then \\(i \\times (j \\times k) = i \\times i = 0\\). Therefore, the answer is 0."
    },
    {
        q: "If \\(|\\vec{a}| = 2, |\\vec{b}| = 5\\) and \\(|\\vec{a} \\times \\vec{b}| = 8\\), then \\(\\vec{a} \\cdot \\vec{b}\\) is:",
        options: [
            "6",
            "8",
            "10",
            "12"
        ],
        correct: 0,
        explanation: "Using Lagrange's identity: \\(|\\vec{a} \\times \\vec{b}|^2 = |\\vec{a}|^2|\\vec{b}|^2 - (\\vec{a} \\cdot \\vec{b})^2\\). Substituting: \\(64 = 4 \\times 25 - (\\vec{a} \\cdot \\vec{b})^2 = 100 - (\\vec{a} \\cdot \\vec{b})^2\\). Therefore, \\((\\vec{a} \\cdot \\vec{b})^2 = 100 - 64 = 36\\), so \\(\\vec{a} \\cdot \\vec{b} = \\pm 6\\). Since magnitude is positive, we take 6."
    },
    {
        q: "If \\(\\vec{a} \\cdot \\vec{b} = 0\\) and \\(\\vec{a} \\times \\vec{b} = \\vec{0}\\), then:",
        options: [
            "\\(\\vec{a}\\) and \\(\\vec{b}\\) are perpendicular",
            "\\(\\vec{a}\\) and \\(\\vec{b}\\) are parallel",
            "\\(\\vec{a} = \\vec{0}\\) or \\(\\vec{b} = \\vec{0}\\)",
            "\\(\\vec{a}\\) and \\(\\vec{b}\\) are unit vectors"
        ],
        correct: 2,
        explanation: "If \\(\\vec{a} \\cdot \\vec{b} = 0\\), then either \\(\\vec{a} = \\vec{0}\\) or \\(\\vec{b} = \\vec{0}\\) or they are perpendicular. If \\(\\vec{a} \\times \\vec{b} = \\vec{0}\\), then either \\(\\vec{a} = \\vec{0}\\) or \\(\\vec{b} = \\vec{0}\\) or they are parallel. For both conditions to hold simultaneously, the only possibility is that either \\(\\vec{a} = \\vec{0}\\) or \\(\\vec{b} = \\vec{0}\\) (or both)."
    },
    {
        q: "Which of the following set can be the direction angles of a vector?",
        options: [
            "60°, 45°, 90°",
            "45°, 45°, 45°",
            "60°, 30°, 30°",
            "60°, 60°, 45°"
        ],
        correct: 3,
        explanation: "For direction angles \\(\\alpha, \\beta, \\gamma\\) of a vector, we have the identity: \\(\\cos^2 \\alpha + \\cos^2 \\beta + \\cos^2 \\gamma = 1\\). Checking each option: Option A: \\(\\cos^2 60° + \\cos^2 45° + \\cos^2 90° = (1/2)^2 + (1/\\sqrt{2})^2 + 0^2 = 1/4 + 1/2 + 0 = 3/4 \\neq 1\\). Option B: \\(\\cos^2 45° + \\cos^2 45° + \\cos^2 45° = 3 \\times (1/2) = 3/2 \\neq 1\\). Option C: \\(\\cos^2 60° + \\cos^2 30° + \\cos^2 30° = 1/4 + 3/4 + 3/4 = 7/4 \\neq 1\\). Option D: \\(\\cos^2 60° + \\cos^2 60° + \\cos^2 45° = 1/4 + 1/4 + 1/2 = 1\\). So option D satisfies the condition."
    },
    {
        q: "If \\(a = 2i - j + k\\) and \\(b = -i + j\\), find the angle between the vectors.",
        options: [
            "\\(\\frac{2\\pi}{3}\\)",
            "\\(\\frac{3\\pi}{4}\\)",
            "\\(\\frac{5\\pi}{6}\\)",
            "\\(\\frac{\\pi}{2}\\)"
        ],
        correct: 2,
        explanation: "Given \\(\\vec{a} = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}\\) and \\(\\vec{b} = -\\mathbf{i} + \\mathbf{j}\\).\n\n\\(\\vec{a} \\cdot \\vec{b} = (2)(-1) + (-1)(1) + (1)(0) = -2 - 1 + 0 = -3\\).\n\n\\(|\\vec{a}| = \\sqrt{2^2 + (-1)^2 + 1^2} = \\sqrt{4 + 1 + 1} = \\sqrt{6}\\).\n\n\\(|\\vec{b}| = \\sqrt{(-1)^2 + 1^2 + 0^2} = \\sqrt{1 + 1} = \\sqrt{2}\\).\n\n\\(\\cos \\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| |\\vec{b}|} = \\frac{-3}{\\sqrt{6} \\cdot \\sqrt{2}} = \\frac{-3}{\\sqrt{12}} = \\frac{-3}{2\\sqrt{3}} = -\\frac{\\sqrt{3}}{2}\\).\n\nTherefore, \\(\\theta = \\cos^{-1}\\left(-\\frac{\\sqrt{3}}{2}\\right) = \\frac{5\\pi}{6}\\)."
    },
    {
        q: "Find \\(|\\vec{u}|\\) if \\(\\vec{v}\\) is unit vector and \\((\\vec{u} - \\vec{v}) \\cdot (\\vec{u} + \\vec{v}) = 18\\).",
        options: [
            "\\(\\sqrt{17}\\)",
            "\\(\\sqrt{18}\\)",
            "\\(\\sqrt{19}\\)",
            "\\(\\sqrt{20}\\)"
        ],
        correct: 2,
        explanation: "Given \\((\\vec{u} - \\vec{v}) \\cdot (\\vec{u} + \\vec{v}) = 18\\). Expanding: \\(\\vec{u} \\cdot \\vec{u} + \\vec{u} \\cdot \\vec{v} - \\vec{v} \\cdot \\vec{u} - \\vec{v} \\cdot \\vec{v} = |\\vec{u}|^2 - |\\vec{v}|^2 = 18\\). Since \\(\\vec{v}\\) is a unit vector, \\(|\\vec{v}|^2 = 1\\). Therefore, \\(|\\vec{u}|^2 - 1 = 18 \\Rightarrow |\\vec{u}|^2 = 19 \\Rightarrow |\\vec{u}| = \\sqrt{19}\\)."
    },
    {
        q: "Which of the following statements is true?",
        options: [
            "Two equal vectors are always collinear.",
            "Two collinear vectors are always equal in magnitude.",
            "Two collinear vectors having the same magnitude are equal.",
            "Two vectors having the same magnitude are collinear."
        ],
        correct: 0,
        explanation: "Two equal vectors have the same magnitude and direction, so they are always collinear. The other statements are false: collinear vectors may have different magnitudes; collinear vectors with same magnitude may have opposite directions and thus not be equal; vectors with same magnitude may point in different directions and not be collinear."
    },
    {
        q: "The value of \\(\\vec{i} \\cdot (\\vec{j} \\times \\vec{k}) + \\vec{j} \\cdot (\\vec{i} \\times \\vec{k}) + \\vec{k} \\cdot (\\vec{i} \\times \\vec{j})\\) is:",
        options: ["0", "-1", "1", "3"],
        correct: 2,
        explanation: "We know that \\(\\vec{j} \\times \\vec{k} = \\vec{i}\\), \\(\\vec{i} \\times \\vec{k} = -\\vec{j}\\), and \\(\\vec{i} \\times \\vec{j} = \\vec{k}\\). Therefore: \\(\\vec{i} \\cdot (\\vec{j} \\times \\vec{k}) = \\vec{i} \\cdot \\vec{i} = 1\\), \\(\\vec{j} \\cdot (\\vec{i} \\times \\vec{k}) = \\vec{j} \\cdot (-\\vec{j}) = -1\\), \\(\\vec{k} \\cdot (\\vec{i} \\times \\vec{j}) = \\vec{k} \\cdot \\vec{k} = 1\\). Sum = \\(1 + (-1) + 1 = 1\\)."
    },
    {
        q: "Let \\(\\vec{a}\\) and \\(\\vec{b}\\) are unit vectors and \\(\\theta\\) is the angle between them, then \\(\\vec{a} + \\vec{b}\\) is a unit vector if:",
        options: ["\\(\\theta = \\pi/4\\)", "\\(\\theta = \\pi/3\\)", "\\(\\theta = \\pi/2\\)", "\\(\\theta = 2\\pi/3\\)"],
        correct: 3,
        explanation: "Given \\(|\\vec{a}| = |\\vec{b}| = 1\\). For \\(\\vec{a} + \\vec{b}\\) to be a unit vector, we need \\(|\\vec{a} + \\vec{b}|^2 = 1\\). Now \\(|\\vec{a} + \\vec{b}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 + 2\\vec{a} \\cdot \\vec{b} = 1 + 1 + 2\\cos\\theta = 2 + 2\\cos\\theta\\). Setting this equal to 1 gives \\(2 + 2\\cos\\theta = 1 \\Rightarrow 2\\cos\\theta = -1 \\Rightarrow \\cos\\theta = -\\frac{1}{2} \\Rightarrow \\theta = \\frac{2\\pi}{3}\\)."
    },
    {
        q: "If \\(\\vec{a} = \\mathbf{i} + \\mathbf{j} - \\mathbf{k}\\) and \\(\\vec{b} = \\mathbf{i} - \\mathbf{j} + \\mathbf{k}\\), then \\(\\vec{a} + \\vec{b}\\) and \\(\\vec{a} - \\vec{b}\\) are:",
        options: [
            "Parallel",
            "Perpendicular",
            "Equal",
            "None of these"
        ],
        correct: 1,
        explanation: "\\(\\vec{a} + \\vec{b} = (1+1)\\mathbf{i} + (1-1)\\mathbf{j} + (-1+1)\\mathbf{k} = 2\\mathbf{i}\\). \\(\\vec{a} - \\vec{b} = (1-1)\\mathbf{i} + (1+1)\\mathbf{j} + (-1-1)\\mathbf{k} = 2\\mathbf{j} - 2\\mathbf{k}\\). Their dot product: \\((2\\mathbf{i}) \\cdot (2\\mathbf{j} - 2\\mathbf{k}) = 0\\), so they are perpendicular."
    },
    {
        q: "Two vectors \\(\\vec{a}\\) and \\(\\vec{b}\\) are such that \\(|\\vec{a}| = 2\\), \\(|\\vec{b}| = 3\\) and \\(\\vec{a} \\cdot \\vec{b} = 4\\), then \\(|\\vec{a} + \\vec{b}| = ?\\)",
        options: [
            "1",
            "\\(\\sqrt{13}\\)",
            "\\(\\sqrt{21}\\)",
            "Not possible to calculate"
        ],
        correct: 2,
        explanation: "\\(|\\vec{a} + \\vec{b}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 + 2\\vec{a} \\cdot \\vec{b} = 4 + 9 + 2(4) = 13 + 8 = 21\\). Therefore, \\(|\\vec{a} + \\vec{b}| = \\sqrt{21}\\)."
    },
    {
        q: "Three non-zero vectors \\(\\vec{a}, \\vec{b}, \\vec{c}\\) are coplanar iff:",
        options: [
            "\\(\\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = 0\\)",
            "\\(\\vec{b} \\cdot (\\vec{c} \\times \\vec{a}) = 0\\)",
            "\\(\\vec{c} \\cdot (\\vec{a} \\times \\vec{b}) = 0\\)",
            "All of these"
        ],
        correct: 3,
        explanation: "The scalar triple product \\(\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})\\) (also denoted as \\([\\vec{a} \\, \\vec{b} \\, \\vec{c}]\\)) is zero if and only if the three vectors are coplanar. Due to the cyclic property of scalar triple product, \\(\\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = \\vec{b} \\cdot (\\vec{c} \\times \\vec{a}) = \\vec{c} \\cdot (\\vec{a} \\times \\vec{b})\\). Therefore, all three conditions are equivalent and each one being zero indicates coplanarity."
    },
    {
        q: "Volume of tetrahedron = (1/6)(---)",
        options: [
            "Volume of cylinder",
            "Volume of parallelepiped",
            "Volume of cube",
            "Volume of sphere"
        ],
        correct: 1,
        explanation: "The volume of a tetrahedron formed by three vectors as coterminous edges is one-sixth of the volume of the parallelepiped formed by the same three vectors. Mathematically, \\(V_{\\text{tetrahedron}} = \\frac{1}{6} |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})| = \\frac{1}{6} (\\text{Volume of parallelepiped})\\)."
    },
    {
        q: "Which of the following is the scalar triple product of vectors \\(\\vec{a}, \\vec{b}, \\vec{c}\\)?",
        options: [
            "\\(\\vec{a} \\cdot (\\vec{b} \\cdot \\vec{c})\\)",
            "\\(\\vec{a} \\times (\\vec{b} \\cdot \\vec{c})\\)",
            "\\(\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})\\)",
            "\\(\\vec{a} \\times (\\vec{b} \\times \\vec{c})\\)"
        ],
        correct: 2,
        explanation: "The scalar triple product of three vectors \\(\\vec{a}, \\vec{b}, \\vec{c}\\) is defined as \\(\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})\\). It is a scalar quantity that gives the volume of the parallelepiped formed by the three vectors. The other options: (a) is not valid because dot product of two vectors gives a scalar, and you cannot take dot product of a vector with a scalar; (b) is not valid for the same reason; (d) is the vector triple product, which yields a vector, not a scalar."
    },
    {
        q: "If the scalar product of two non-zero vectors \\(\\vec{A}\\) and \\(\\vec{B}\\) is zero then the magnitude of their vector product will be:",
        options: [
            "AB",
            "Zero",
            "AB sin θ",
            "AB cos θ"
        ],
        correct: 0,
        explanation: "Given \\(\\vec{A} \\cdot \\vec{B} = AB \\cos \\theta = 0 \\Rightarrow \\cos \\theta = 0 \\Rightarrow \\theta = 90°\\). Then \\(|\\vec{A} \\times \\vec{B}| = AB \\sin 90° = AB(1) = AB\\)."
    },
    {
        q: "If the vectors \\(\\vec{m} + \\vec{n}\\) and \\(\\vec{p} + \\vec{q}\\) are parallel then:",
        options: [
            "\\(m = p, n = q\\)",
            "\\(m + n = p + q\\)",
            "\\(\\frac{\\vec{m}}{\\vec{p}} = \\frac{\\vec{n}}{\\vec{q}}\\)",
            "None"
        ],
        correct: 2,
        explanation: "If \\(\\vec{m} + \\vec{n}\\) is parallel to \\(\\vec{p} + \\vec{q}\\), then \\(\\vec{m} + \\vec{n} = k(\\vec{p} + \\vec{q})\\) for some scalar k. This implies \\(\\vec{m} = k\\vec{p}\\) and \\(\\vec{n} = k\\vec{q}\\), so \\(\\frac{\\vec{m}}{\\vec{p}} = \\frac{\\vec{n}}{\\vec{q}} = k\\). Note that division by vectors is not defined, so option (c) is symbolic and represents the proportionality of components."
    },
    {
        q: "The projection of \\(\\vec{a} = \\hat{i} + 3\\hat{j} - \\hat{k}\\) on \\(\\vec{b} = -\\hat{i} + 2\\hat{j} + \\hat{k}\\) is:",
        options: [
            "\\(\\frac{4}{\\sqrt{6}}\\)",
            "\\(\\frac{1}{\\sqrt{6}}\\)",
            "\\(\\frac{2}{\\sqrt{6}}\\)",
            "None of these"
        ],
        correct: 0,
        explanation: "The projection of \\(\\vec{a}\\) on \\(\\vec{b}\\) is given by \\(\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}\\). Compute \\(\\vec{a} \\cdot \\vec{b} = (1)(-1) + (3)(2) + (-1)(1) = -1 + 6 - 1 = 4\\). \\(|\\vec{b}| = \\sqrt{(-1)^2 + 2^2 + 1^2} = \\sqrt{1 + 4 + 1} = \\sqrt{6}\\). Therefore, projection = \\(\\frac{4}{\\sqrt{6}}\\)."
    },
    {
        q: "Let \\(\\theta\\) be the angle between two non-zero vectors \\(\\vec{a}\\) and \\(\\vec{b}\\). Then \\(\\theta\\) is obtuse if:",
        options: [
            "\\(\\vec{a} \\cdot \\vec{b} > 0\\)",
            "\\(\\vec{a} \\cdot \\vec{b} < 0\\)",
            "\\(\\vec{a} \\cdot \\vec{b} = 0\\)",
            "None of these"
        ],
        correct: 1,
        explanation: "The angle between two vectors is given by \\(\\cos \\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|}\\). For an obtuse angle, \\(\\cos \\theta < 0\\), which implies \\(\\vec{a} \\cdot \\vec{b} < 0\\)."
    },
    {
        q: "Speed of a vector function \\(\\vec{v} = 2\\hat{i} - 3\\hat{j} + 4\\hat{k}\\) is:",
        options: ["5", "29", "1", "\\(\\sqrt{29}\\)"],
        correct: 3,
        explanation: "Speed is the magnitude of the velocity vector. \\(|\\vec{v}| = \\sqrt{2^2 + (-3)^2 + 4^2} = \\sqrt{4 + 9 + 16} = \\sqrt{29}\\)."
    },
    {
        q: "Let \\(\\vec{n}\\) be the unit vector orthogonal to both \\(\\vec{a}\\) and \\(\\vec{b}\\), then \\(\\vec{n} = ?\\)",
        options: [
            "\\(\\vec{a} \\times \\vec{b}\\)",
            "\\(\\vec{a} \\cdot \\vec{b}\\)",
            "\\(\\frac{\\vec{a} \\times \\vec{b}}{|\\vec{a} \\times \\vec{b}|}\\)",
            "\\(\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a} \\cdot \\vec{b}|}\\)"
        ],
        correct: 2,
        explanation: "The cross product \\(\\vec{a} \\times \\vec{b}\\) gives a vector orthogonal to both \\(\\vec{a}\\) and \\(\\vec{b}\\). To get a unit vector in that direction, we divide by its magnitude: \\(\\vec{n} = \\frac{\\vec{a} \\times \\vec{b}}{|\\vec{a} \\times \\vec{b}|}\\)."
    },
    {
        q: "For what value of \\(m\\) the angle between \\(\\vec{a} = m\\hat{i} + \\hat{j} - \\hat{k}\\) and \\(\\vec{b} = \\hat{i} + m\\hat{j} - \\hat{k}\\) is \\(\\frac{\\pi}{3}\\)?",
        options: ["1", "\\(\\frac{1}{4}\\)", "0", "2"],
        correct: 2,
        explanation: "The angle \\(\\theta\\) between two vectors is given by \\(\\cos \\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| |\\vec{b}|}\\). For \\(\\theta = \\frac{\\pi}{3}\\), \\(\\cos \\theta = \\frac{1}{2}\\). Compute \\(\\vec{a} \\cdot \\vec{b} = m(1) + 1(m) + (-1)(-1) = m + m + 1 = 2m + 1\\). \\(|\\vec{a}| = \\sqrt{m^2 + 1^2 + (-1)^2} = \\sqrt{m^2 + 2}\\). Similarly, \\(|\\vec{b}| = \\sqrt{1^2 + m^2 + (-1)^2} = \\sqrt{m^2 + 2}\\). So \\(\\frac{2m + 1}{m^2 + 2} = \\frac{1}{2}\\). Cross-multiply: \\(4m + 2 = m^2 + 2 \\Rightarrow m^2 - 4m = 0 \\Rightarrow m(m - 4) = 0 \\Rightarrow m = 0 \\text{ or } m = 4\\). Since 4 is not an option and 0 is, the answer is 0."
    }
];