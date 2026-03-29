window.questions = [
    {
        q: "If \\(\\sin \\theta\\) and \\(\\cos \\theta\\) are the roots of \\(ax^2 - bx + c = 0\\), then the relation between a, b and c is:",
        options: [
            "\\(a^2 + b^2 + 2ac = 0\\)",
            "\\(a^2 - b^2 + 2ac = 0\\)",
            "\\(a^2 + c^2 + 2ab = 0\\)",
            "\\(a^2 - b^2 - 2ac = 0\\)"
        ],
        correct: 1,
        explanation: "Given that \\(\\sin \\theta\\) and \\(\\cos \\theta\\) are roots, we have: \\(\\sin \\theta + \\cos \\theta = \\frac{b}{a}\\) and \\(\\sin \\theta \\cos \\theta = \\frac{c}{a}\\). Using the identity \\((\\sin \\theta + \\cos \\theta)^2 = \\sin^2 \\theta + \\cos^2 \\theta + 2 \\sin \\theta \\cos \\theta = 1 + 2\\frac{c}{a}\\). Substituting: \\(\\left(\\frac{b}{a}\\right)^2 = 1 + \\frac{2c}{a} \\implies \\frac{b^2}{a^2} = 1 + \\frac{2c}{a} \\implies b^2 = a^2 + 2ac \\implies a^2 - b^2 + 2ac = 0\\)."
    },
    {
        q: "\\(\\tan\\left(\\frac{\\pi}{6} + \\frac{\\pi}{4}\\right)\\) is equal to:",
        options: [
            "\\(\\frac{\\sqrt{3} - 1}{\\sqrt{3} + 1}\\)",
            "\\(\\frac{\\sqrt{3} + 1}{\\sqrt{3} - 1}\\)",
            "\\(\\frac{\\sqrt{3} + 1}{-\\sqrt{3} + 1}\\)",
            "\\(\\frac{\\sqrt{3} + 1}{-\\sqrt{3} - 1}\\)"
        ],
        correct: 1,
        explanation: "First simplify: \\(\\frac{\\pi}{6} + \\frac{\\pi}{4} = \\frac{2\\pi}{12} + \\frac{3\\pi}{12} = \\frac{5\\pi}{12} = 75^\\circ\\). Using the tangent addition formula: \\(\\tan(a + \\beta) = \\frac{\\tan a + \\tan \\beta}{1 - \\tan a \\tan \\beta}\\). Here \\(\\tan\\frac{\\pi}{6} = \\frac{1}{\\sqrt{3}}\\) and \\(\\tan\\frac{\\pi}{4} = 1\\). So \\(\\tan 75^\\circ = \\frac{\\frac{1}{\\sqrt{3}} + 1}{1 - \\frac{1}{\\sqrt{3}} \\cdot 1} = \\frac{\\frac{1 + \\sqrt{3}}{\\sqrt{3}}}{\\frac{\\sqrt{3} - 1}{\\sqrt{3}}} = \\frac{1 + \\sqrt{3}}{\\sqrt{3} - 1} = \\frac{\\sqrt{3} + 1}{\\sqrt{3} - 1}\\)."
    },
    {
        q: "\\(\\cos(\\pi - \\theta) = \\)",
        options: [
            "\\(\\sec \\theta\\)",
            "\\(\\pm \\cos \\theta\\)",
            "\\(\\cos \\theta\\)",
            "\\(-\\cos \\theta\\)"
        ],
        correct: 3,
        explanation: "Using the cosine subtraction formula: \\(\\cos(\\pi - \\theta) = \\cos\\pi \\cos\\theta + \\sin\\pi \\sin\\theta = (-1)\\cos\\theta + 0 = -\\cos\\theta\\)."
    },
    {
        q: "\\(\\tan\\left(\\frac{\\pi}{2} + \\theta\\right) = \\)",
        options: [
            "\\(\\cot \\theta\\)",
            "\\(-\\cot \\theta\\)",
            "\\(\\tan \\theta\\)",
            "\\(-\\tan \\theta\\)"
        ],
        correct: 1,
        explanation: "Using the tangent addition formula: \\(\\tan\\left(\\frac{\\pi}{2} + \\theta\\right) = \\frac{\\tan\\frac{\\pi}{2} + \\tan\\theta}{1 - \\tan\\frac{\\pi}{2}\\tan\\theta}\\). Since \\(\\tan\\frac{\\pi}{2}\\) is undefined, we use the identity: \\(\\tan\\left(\\frac{\\pi}{2} + \\theta\\right) = -\\cot \\theta\\)."
    },
    {
        q: "If \\(\\sin \\beta = \\frac{3}{5}\\), then \\(\\cos 2\\beta = \\)",
        options: [
            "\\(-\\frac{7}{5}\\)",
            "\\(\\frac{7}{5}\\)",
            "\\(-\\frac{7}{25}\\)",
            "\\(\\frac{7}{25}\\)"
        ],
        correct: 3,
        explanation: "Using the double angle formula: \\(\\cos 2\\beta = 1 - 2\\sin^2 \\beta = 1 - 2\\left(\\frac{3}{5}\\right)^2 = 1 - 2\\left(\\frac{9}{25}\\right) = 1 - \\frac{18}{25} = \\frac{7}{25}\\)."
    },
    {
        q: "\\(\\cos^2 3x - \\sin^2 3x = \\)",
        options: [
            "\\(\\sin 6x\\)",
            "\\(\\cos 6x\\)",
            "\\(-\\sin 6x\\)",
            "\\(-\\cos 6x\\)"
        ],
        correct: 1,
        explanation: "Using the double angle identity: \\(\\cos^2 A - \\sin^2 A = \\cos 2A\\). Here \\(A = 3x\\), so \\(\\cos^2 3x - \\sin^2 3x = \\cos 6x\\)."
    },
    {
        q: "\\((\\sin x - \\cos x)^2 = \\)",
        options: [
            "\\(1 + \\sin 2x\\)",
            "\\(1 - \\cos 2x\\)",
            "\\(1 - \\sin 2x\\)",
            "\\(1 + \\cos 2x\\)"
        ],
        correct: 2,
        explanation: "\\((\\sin x - \\cos x)^2 = \\sin^2 x + \\cos^2 x - 2\\sin x \\cos x = 1 - \\sin 2x\\)."
    },
    {
        q: "What is the period of \\(y = \\sin(4x)\\)?",
        options: [
            "\\(\\frac{\\pi}{2}\\)",
            "\\(\\frac{\\pi}{4}\\)",
            "\\(2\\pi\\)",
            "\\(4\\pi\\)"
        ],
        correct: 0,
        explanation: "The period of \\(\\sin x\\) is \\(2\\pi\\). For \\(\\sin(ax)\\), the period is \\(\\frac{2\\pi}{|a|}\\). Here, \\(a = 4\\), so period = \\(\\frac{2\\pi}{4} = \\frac{\\pi}{2}\\)."
    },
    {
        q: "What is the period of \\(y = \\tan(x/3)\\)?",
        options: [
            "\\(\\frac{\\pi}{3}\\)",
            "\\(\\pi\\)",
            "\\(3\\pi\\)",
            "\\(6\\pi\\)"
        ],
        correct: 2,
        explanation: "The period of \\(\\tan x\\) is \\(\\pi\\). For \\(\\tan(ax)\\), the period is \\(\\frac{\\pi}{|a|}\\). Here, \\(a = \\frac{1}{3}\\), so period = \\(\\frac{\\pi}{1/3} = 3\\pi\\)."
    },
    {
        q: "The function \\(f(x) = \\sin x + \\tan(x/2)\\) has a period of:",
        options: [
            "\\(\\pi\\)",
            "\\(2\\pi\\)",
            "\\(4\\pi\\)",
            "\\(6\\pi\\)"
        ],
        correct: 1,
        explanation: "\\(\\sin x\\) has period \\(2\\pi\\). \\(\\tan(x/2)\\) has period \\(\\frac{\\pi}{1/2} = 2\\pi\\). The period of the sum is the LCM of the individual periods, which is \\(2\\pi\\)."
    },
    {
        q: "Find the exact value of \\(\\cos 15^\\circ\\) without using a calculator.",
        options: [
            "\\(\\frac{\\sqrt{6} - \\sqrt{2}}{4}\\)",
            "\\(\\frac{\\sqrt{6} + \\sqrt{2}}{4}\\)",
            "\\(\\frac{\\sqrt{3} + 1}{2\\sqrt{2}}\\)",
            "\\(\\frac{\\sqrt{3} - 1}{2\\sqrt{2}}\\)"
        ],
        correct: 1,
        explanation: "Using the cosine subtraction formula: \\(\\cos 15^\\circ = \\cos(45^\\circ - 30^\\circ) = \\cos 45^\\circ \\cos 30^\\circ + \\sin 45^\\circ \\sin 30^\\circ\\). Substituting known values: \\(\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}\\), \\(\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}\\), \\(\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}\\), \\(\\sin 30^\\circ = \\frac{1}{2}\\). Therefore, \\(\\cos 15^\\circ = \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}\\)."
    },
    {
        q: "\\(\\sin\\left(\\alpha + \\frac{\\pi}{2}\\right) = \\)",
        options: [
            "\\(\\sin \\alpha\\)",
            "\\(-\\sin \\alpha\\)",
            "\\(\\cos \\alpha\\)",
            "\\(-\\cos \\alpha\\)"
        ],
        correct: 2,
        explanation: "Using the sine addition formula: \\(\\sin\\left(\\alpha + \\frac{\\pi}{2}\\right) = \\sin\\alpha \\cos\\frac{\\pi}{2} + \\cos\\alpha \\sin\\frac{\\pi}{2} = \\sin\\alpha(0) + \\cos\\alpha(1) = \\cos\\alpha\\)."
    },
    {
        q: "\\(\\pi \\text{ radians} = \\)",
        options: [
            "60°",
            "90°",
            "360°",
            "180°"
        ],
        correct: 3,
        explanation: "By definition, \\(\\pi\\) radians is equal to 180 degrees. This is a fundamental conversion between radians and degrees."
    },
    {
        q: "Which of the following functions is an EVEN function?",
        options: [
            "\\(f(x) = x^3\\)",
            "\\(f(x) = \\sin(x)\\)",
            "\\(f(x) = x^2 + 5\\)",
            "\\(f(x) = x^3 + 1\\)"
        ],
        correct: 2,
        explanation: "A function is even if \\(f(-x) = f(x)\\) for all x. Testing option c: \\(f(-x) = (-x)^2 + 5 = x^2 + 5 = f(x)\\). The other options: a) \\((-x)^3 = -x^3 \\neq x^3\\), b) \\(\\sin(-x) = -\\sin(x) \\neq \\sin(x)\\), d) \\((-x)^3 + 1 = -x^3 + 1 \\neq x^3 + 1\\)."
    },
    {
        q: "Which of the following functions is an ODD function?",
        options: [
            "\\(f(x) = x^3 + x\\)",
            "\\(f(x) = \\cos(x)\\)",
            "\\(f(x) = x^2\\)",
            "\\(f(x) = 5\\)"
        ],
        correct: 0,
        explanation: "A function is odd if \\(f(-x) = -f(x)\\) for all x. Testing option a: \\(f(-x) = (-x)^3 + (-x) = -x^3 - x = -(x^3 + x) = -f(x)\\). The other options: b) \\(\\cos(-x) = \\cos(x) \\neq -\\cos(x)\\), c) \\((-x)^2 = x^2 \\neq -x^2\\), d) constant function is even, not odd."
    },
    {
        q: "Determine if \\(f(x) = \\frac{x}{x^2 + 1}\\) is odd, even, or neither.",
        options: [
            "Even",
            "Odd",
            "Neither",
            "Both"
        ],
        correct: 1,
        explanation: "Testing \\(f(-x) = \\frac{-x}{(-x)^2 + 1} = \\frac{-x}{x^2 + 1} = -\\frac{x}{x^2 + 1} = -f(x)\\). Since \\(f(-x) = -f(x)\\), the function is odd."
    },
    {
        q: "If a function is an ODD function, what type of symmetry does its graph have?",
        options: [
            "y-axis",
            "x-axis",
            "Origin",
            "Line y = x"
        ],
        correct: 2,
        explanation: "Odd functions have symmetry about the origin. This means that if point \\((a, b)\\) is on the graph, then \\((-a, -b)\\) is also on the graph. Even functions have symmetry about the y-axis."
    },
    {
        q: "Consider \\(f(x) = x^3 - 4x^2 + 5\\). This function is:",
        options: [
            "Even",
            "Odd",
            "Neither",
            "Both"
        ],
        correct: 2,
        explanation: "Testing \\(f(-x) = (-x)^3 - 4(-x)^2 + 5 = -x^3 - 4x^2 + 5\\). Compare with \\(f(x) = x^3 - 4x^2 + 5\\). Since \\(f(-x) \\neq f(x)\\) (not even) and \\(f(-x) \\neq -f(x)\\) (not odd), the function is neither even nor odd."
    },
    {
        q: "Express \\(3\\sin\\theta + 4\\cos\\theta\\) in the form \\(r\\sin(\\theta + \\phi)\\).",
        options: [
            "\\(5\\sin(\\theta + \\tan^{-1}(4/3))\\)",
            "\\(5\\sin(\\theta + \\tan^{-1}(3/4))\\)",
            "\\(5\\sin(\\theta + \\sin^{-1}(4/5))\\)",
            "\\(5\\sin(\\theta + \\cos^{-1}(3/5))\\)"
        ],
        correct: 0,
        explanation: "To express \\(a\\sin\\theta + b\\cos\\theta\\) in the form \\(r\\sin(\\theta + \\phi)\\), we use \\(r = \\sqrt{a^2 + b^2}\\) and \\(\\phi = \\tan^{-1}(b/a)\\). Here \\(a = 3, b = 4\\), so \\(r = \\sqrt{9 + 16} = 5\\). Then \\(\\phi = \\tan^{-1}(4/3)\\). Therefore, \\(3\\sin\\theta + 4\\cos\\theta = 5\\sin(\\theta + \\tan^{-1}(4/3))\\)."
    },
    {
        q: "\\(\\cos 105^\\circ + \\sin 105^\\circ = \\)",
        options: [
            "\\(\\frac{1}{2}\\)",
            "1",
            "\\(\\sqrt{2}\\)",
            "\\(\\frac{1}{\\sqrt{2}}\\)"
        ],
        correct: 3,
        explanation: "Using \\(105^\\circ = 60^\\circ + 45^\\circ\\) and addition identities: \\(\\cos 105^\\circ = \\frac{1-\\sqrt{3}}{2\\sqrt{2}}\\) and \\(\\sin 105^\\circ = \\frac{\\sqrt{3}+1}{2\\sqrt{2}}\\). Their sum is \\(\\frac{2}{2\\sqrt{2}} = \\frac{1}{\\sqrt{2}}\\)."
    },
    {
        q: "If \\(\\theta\\) lies in the 4th quadrant, then the reference angle of \\(\\theta\\) is:",
        options: [
            "\\(2\\pi + \\theta\\)",
            "\\(2\\pi - \\theta\\)",
            "\\(\\theta - \\pi\\)",
            "\\(\\frac{\\pi}{2} - \\theta\\)"
        ],
        correct: 1,
        explanation: "In the 4th quadrant, the reference angle is the difference between a full rotation and the angle itself, hence \\(2\\pi - \\theta\\)."
    },
    {
        q: "\\(\\sin 75^\\circ = \\)",
        options: [
            "\\(\\frac{\\sqrt{3} + 1}{\\sqrt{8}}\\)",
            "\\(\\frac{\\sqrt{3} + 1}{2\\sqrt{2}}\\)",
            "\\(\\frac{\\sqrt{2}}{\\sqrt{3} + 1}\\)",
            "Impossible"
        ],
        correct: 1,
        explanation: "Using \\(\\sin(45^\\circ + 30^\\circ)\\): \\(\\sin 45 \\cos 30 + \\cos 45 \\sin 30 = \\frac{1}{\\sqrt{2}} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{1}{\\sqrt{2}} \\cdot \\frac{1}{2} = \\frac{\\sqrt{3}+1}{2\\sqrt{2}}\\)."
    },
    {
        q: "Find the value of \\(\\sqrt{\\frac{1 - \\sin \\theta}{1 + \\sin \\theta}}\\):",
        options: [
            "\\(\\sec \\theta - \\tan \\theta\\)",
            "\\(\\sec \\theta + \\tan \\theta\\)",
            "\\(\\csc \\theta - \\cot \\theta\\)",
            "\\(\\csc \\theta + \\cot \\theta\\)"
        ],
        correct: 0,
        explanation: "Rationalizing the denominator gives \\(\\sqrt{\\frac{(1-\\sin\\theta)^2}{1-\\sin^2\\theta}} = \\frac{1-\\sin\\theta}{\\cos\\theta} = \\sec\\theta - \\tan\\theta\\)."
    }
];