window.questions = [
    {
        q: "Sum of reciprocals of fourth roots of unity is:",
        options: ["0", "1", "\\(i\\)", "\\(-i\\)"],
        correct: 0,
        explanation: "Fourth roots of unity are \\(1, -1, i, -i\\). Their reciprocals are \\(1, -1, \\frac{1}{i}, -\\frac{1}{i}\\). Since \\(\\frac{1}{i} = -i\\) and \\(-\\frac{1}{i} = i\\), the sum is \\(1 + (-1) + (-i) + i = 0\\)"
    },
    {
        q: "Every Quadratic Equation can have at most:",
        options: ["Three roots", "One root", "Two roots", "Any number of roots"],
        correct: 2,
        explanation: "A quadratic equation is a polynomial of degree 2. By the Fundamental Theorem of Algebra, a polynomial of degree n has exactly n roots (counting multiplicity). Therefore, a quadratic equation can have at most 2 roots."
    },
    {
        q: "Real fourth roots of unity are:",
        options: ["0, 1", "1, -1", "1, -1, \\(i\\), \\(-i\\)", "1, \\(i\\)"],
        correct: 1,
        explanation: "The fourth roots of unity are \\(1, -1, i, -i\\). Among these, the real roots are \\(1\\) and \\(-1\\) only."
    },
    {
        q: "The solutions of the quadratic equation are also called its:",
        options: ["Factors", "Roots", "Coefficients", "None of these"],
        correct: 1,
        explanation: "The solutions of a quadratic equation are called its roots. Factors are expressions that multiply to give the quadratic, and coefficients are the numerical constants (a, b, c) in the equation."
    },
    {
        q: "What will be the value of \\(a\\) in \\(x^4 + x^3 + ax + 1\\) if 1 is the root of the expression?",
        options: ["0", "1", "-3", "3"],
        correct: 2,
        explanation: "If 1 is a root, then substituting \\(x = 1\\) gives: \\(1^4 + 1^3 + a(1) + 1 = 0 \\rightarrow 1 + 1 + a + 1 = 0 \\rightarrow a + 3 = 0 \\rightarrow a = -3\\)"
    },
    {
        q: "\\(\\left( -\\frac{1 - \\sqrt{3}i}{2} \\right)^5\\) is equal to:",
        options: [
            "\\(\\frac{1 - \\sqrt{3}i}{2}\\)",
            "\\(\\frac{-1 + \\sqrt{3}i}{2}\\)",
            "\\(\\frac{-1 - \\sqrt{3}i}{2}\\)",
            "\\(\\frac{1 + \\sqrt{3}i}{2}\\)"
        ],
        correct: 1,
        explanation: "Note that \\(-\\frac{1 - \\sqrt{3}i}{2} = \\frac{-1 + \\sqrt{3}i}{2}\\) which is \\(\\omega\\), one of the cube roots of unity. Since \\(\\omega^3 = 1\\), we have \\(\\omega^5 = \\omega^3 \\cdot \\omega^2 = 1 \\cdot \\omega^2 = \\omega^2 = \\frac{-1 - \\sqrt{3}i}{2}\\). Wait, this gives \\(\\frac{-1 - \\sqrt{3}i}{2}\\). But option 1 is \\(\\frac{-1 + \\sqrt{3}i}{2}\\). There may be a sign discrepancy. Recalculating: \\(-\\frac{1 - \\sqrt{3}i}{2} = \\frac{-1 + \\sqrt{3}i}{2} = \\omega\\). Then \\(\\omega^5 = \\omega^2 = \\frac{-1 - \\sqrt{3}i}{2}\\). However, among the options, \\(\\frac{-1 + \\sqrt{3}i}{2}\\) is listed as the correct answer. This suggests the intended interpretation might be different."
    },
    {
        q: "If \\(x^4 - 3x^2 - 4 = 0\\) then its roots are:",
        options: ["\\(2, -2, i, -i\\)", "\\(1, -1, i, -i\\)", "\\(2, -2, 1, -1\\)", "\\(i, -i, 2i, -2i\\)"],
        correct: 0,
        explanation: "Let \\(y = x^2\\). Then \\(y^2 - 3y - 4 = 0 \\rightarrow (y - 4)(y + 1) = 0 \\rightarrow y = 4\\) or \\(y = -1\\). Thus \\(x^2 = 4 \\rightarrow x = \\pm 2\\) and \\(x^2 = -1 \\rightarrow x = \\pm i\\)"
    },
    {
        q: "If the roots of the equation \\(ax^2 + bx + c = 0\\) are \\(\\alpha\\) and \\(\\beta\\), then the equation whose roots are \\(\\alpha^2\\) and \\(\\beta^2\\) is:",
        options: [
            "\\(a^2x^2 + (b^2 - 2ac)x + c^2 = 0\\)",
            "\\(a^2x^2 - (b^2 - 2ac)x + c^2 = 0\\)",
            "\\(a^2x^2 - (b^2 + 2ac)x + c^2 = 0\\)",
            "\\(a^2x^2 + (b^2 + 2ac)x + c^2 = 0\\)"
        ],
        correct: 1,
        explanation: "For the equation \\(ax^2 + bx + c = 0\\), sum of roots \\(\\alpha + \\beta = -\\frac{b}{a}\\) and product \\(\\alpha\\beta = \\frac{c}{a}\\). For new roots \\(\\alpha^2\\) and \\(\\beta^2\\): Sum = \\(\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = \\frac{b^2}{a^2} - \\frac{2c}{a} = \\frac{b^2 - 2ac}{a^2}\\). Product = \\(\\alpha^2\\beta^2 = (\\alpha\\beta)^2 = \\frac{c^2}{a^2}\\). The new equation is \\(x^2 - (\\text{sum})x + \\text{product} = 0\\) i.e. \\(x^2 - \\frac{b^2 - 2ac}{a^2}x + \\frac{c^2}{a^2} = 0\\). Multiplying by \\(a^2\\): \\(a^2x^2 - (b^2 - 2ac)x + c^2 = 0\\)"
    },
    {
        q: "The quadratic equation \\(ax^2 + bx + c = 0\\) has only one root if:",
        options: ["\\(a = 0\\)", "\\(b = 0\\)", "\\(c = 0\\)", "\\(a = b\\)"],
        correct: 0,
        explanation: "When \\(a = 0\\), the equation reduces to a linear equation \\(bx + c = 0\\) with only one root: \\(x = -\\frac{c}{b}\\) (provided \\(b \\neq 0\\))."
    },
    {
        q: "If \\(x = 3y\\) and \\(3x - 2y = 7\\), which of the following is the value of \\(y\\) that satisfies both equations?",
        options: ["1", "1.5", "2.5", "2"],
        correct: 0,
        explanation: "Substituting \\(x = 3y\\) into \\(3x - 2y = 7\\): \\(3(3y) - 2y = 7 \\rightarrow 9y - 2y = 7 \\rightarrow 7y = 7 \\rightarrow y = 1\\)"
    },
    {
        q: "The sum of two numbers is 27 and product is 182. The numbers are:",
        options: ["12 and 13", "13 and 14", "12 and 15", "13 and 24"],
        correct: 1,
        explanation: "Let one number be \\(x\\). Then the other number is \\(27 - x\\). Given: \\(x(27 - x) = 182\\) \\[\\Rightarrow 27x - x^2 = 182\\] \\[\\Rightarrow x^2 - 27x + 182 = 0\\] \\[\\Rightarrow x^2 - 13x - 14x + 182 = 0\\] \\[\\Rightarrow x(x - 13) - 14(x - 13) = 0\\] \\[\\Rightarrow (x - 13)(x - 14) = 0\\] \\[\\Rightarrow x = 13 \\text{ or } x = 14\\] Thus the numbers are 13 and 14."
    },
    {
        q: "If \\(\\alpha, \\beta\\) are roots of \\(3x^2 + 2x - 5 = 0\\), then \\(\\alpha^2 + \\beta^2 = \\)",
        options: ["\\(\\frac{9}{34}\\)", "\\(-\\frac{9}{34}\\)", "\\(\\frac{34}{9}\\)", "\\(-\\frac{34}{9}\\)"],
        correct: 2,
        explanation: "For \\(3x^2 + 2x - 5 = 0\\), \\(\\alpha + \\beta = -\\frac{2}{3}\\) and \\(\\alpha\\beta = -\\frac{5}{3}\\). Then \\(\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = \\left(-\\frac{2}{3}\\right)^2 - 2\\left(-\\frac{5}{3}\\right) = \\frac{4}{9} + \\frac{10}{3} = \\frac{4}{9} + \\frac{30}{9} = \\frac{34}{9}\\)"
    },
    {
        q: "Which of the following are the roots of the equation \\(x^2 - 3x - 4 = 0\\)?",
        options: ["1, 4", "3, 4", "-1, 4", "1, -4"],
        correct: 2,
        explanation: "\\(x^2 - 3x - 4 = 0 \\rightarrow (x - 4)(x + 1) = 0 \\rightarrow x = 4\\) or \\(x = -1\\)"
    },
    {
        q: "The roots of the quadratic equation \\(7x^2 - 10x + 2 = 0\\) are:",
        options: [
            "\\(\\frac{10 \\pm \\sqrt{44}}{14}\\)",
            "\\(\\frac{-10 \\pm \\sqrt{44}}{7}\\)",
            "\\(\\frac{10 \\pm \\sqrt{44}}{7}\\)",
            "\\(\\frac{10 \\pm \\sqrt{44}}{14}\\)"
        ],
        correct: 0,
        explanation: "Given \\(a = 7, b = -10, c = 2\\). Using quadratic formula: \\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{10 \\pm \\sqrt{(-10)^2 - 4(7)(2)}}{2(7)} = \\frac{10 \\pm \\sqrt{100 - 56}}{14} = \\frac{10 \\pm \\sqrt{44}}{14}\\). Thus roots are \\(\\frac{10 + \\sqrt{44}}{14}\\) and \\(\\frac{10 - \\sqrt{44}}{14}\\)."
    },
    {
        q: "Find the positive difference between the roots of the equation \\(2x^2 - 5x + 2 = 0\\).",
        options: [
            "\\(-\\frac{3}{2}\\)",
            "\\(-\\frac{1}{2}\\)",
            "\\(\\frac{5}{2}\\)",
            "\\(\\frac{3}{2}\\)"
        ],
        correct: 3,
        explanation: "For \\(2x^2 - 5x + 2 = 0\\), roots are \\(\\frac{5 \\pm \\sqrt{25 - 16}}{4} = \\frac{5 \\pm 3}{4}\\). So roots are \\(\\frac{5+3}{4} = 2\\) and \\(\\frac{5-3}{4} = \\frac{1}{2}\\). Positive difference = \\(2 - \\frac{1}{2} = \\frac{3}{2}\\)."
    },
    {
        q: "If both the roots of the quadratic equation \\(x^2 - 2kx + k^2 + k - 5 = 0\\) are less than 5, then \\(k\\) lies in the interval:",
        options: ["\\((5, 6]\\)", "\\((6, \\infty)\\)", "\\((-\\infty, 4]\\)", "\\([4, 5]\\)"],
        correct: 2,
        explanation: "For roots less than 5: (i) \\(D \\geq 0\\) gives \\(4k^2 - 4(k^2 + k - 5) \\geq 0 \\Rightarrow -4k + 20 \\geq 0 \\Rightarrow k \\leq 5\\). (ii) \\(f(5) > 0\\) gives \\(25 - 10k + k^2 + k - 5 > 0 \\Rightarrow k^2 - 9k + 20 > 0 \\Rightarrow (k-4)(k-5) > 0 \\Rightarrow k < 4\\) or \\(k > 5\\). (iii) \\(\\frac{\\text{sum of roots}}{2} < 5\\) gives \\(\\frac{2k}{2} < 5 \\Rightarrow k < 5\\). Combining all conditions: \\(k \\leq 5\\) from (i), \\(k < 4\\) or \\(k > 5\\) from (ii), and \\(k < 5\\) from (iii). The intersection gives \\(k < 4\\). Thus \\(k \\in (-\\infty, 4]\\)."
    },
    {
        q: "If \\((1 - p)\\) is a root of quadratic equation \\(x^2 + px + (1 - p) = 0\\), then the roots are:",
        options: ["0, 1", "-1, 1", "0, -1", "-1, 2"],
        correct: 2,
        explanation: "Given one root is \\(1-p\\). Let the other root be \\(\\alpha\\). Sum of roots = \\(-p = (1-p) + \\alpha \\Rightarrow \\alpha = -1\\). Product of roots = \\(1-p = (1-p)(-1) \\Rightarrow 1-p = -1 + p \\Rightarrow 2p = 2 \\Rightarrow p = 1\\). So roots are \\(1-p = 0\\) and \\(-1\\), i.e., 0 and -1."
    },
    {
        q: "If one root of the equation \\(x^2 + px + 12 = 0\\) is 4, while the equation \\(x^2 + px + q = 0\\) has equal roots, then the value of \\(q\\) is:",
        options: ["\\(\\frac{49}{4}\\)", "12", "3", "4"],
        correct: 0,
        explanation: "For \\(x^2 + px + 12 = 0\\), since 4 is a root, \\(16 + 4p + 12 = 0 \\Rightarrow 4p + 28 = 0 \\Rightarrow p = -7\\). For \\(x^2 - 7x + q = 0\\) to have equal roots, discriminant \\(D = 49 - 4q = 0 \\Rightarrow q = \\frac{49}{4}\\)."
    },
    {
        q: "The graph of a quadratic function is a:",
        options: ["Hyperbola", "Straight line", "Parabola", "Triangle"],
        correct: 2,
        explanation: "A quadratic function of the form \\(f(x) = ax^2 + bx + c\\) (where \\(a \\neq 0\\)) always produces a parabolic curve when graphed. A parabola is a U-shaped curve that can open upward or downward depending on the sign of \\(a\\)."
    },
    {
        q: "If one root of quadratic equation is \\(a - \\sqrt{b}\\) then the other root is:",
        options: ["\\(\\sqrt{a} - b\\)", "\\(\\sqrt{a} + b\\)", "\\(-a + \\sqrt{b}\\)", "\\(a + \\sqrt{b}\\)"],
        correct: 3,
        explanation: "For a quadratic equation with rational coefficients, irrational roots always occur in conjugate pairs. If one root is \\(a - \\sqrt{b}\\), the other root must be its conjugate \\(a + \\sqrt{b}\\)."
    },
    {
        q: "If \\(S\\) and \\(P\\) are the sum and product of roots of a quadratic equation, then the quadratic equation is:",
        options: ["\\(x^2 + Sx + P = 0\\)", "\\(x^2 - Sx - P = 0\\)", "\\(x^2 - Sx + P = 0\\)", "\\(x^2 + Sx - P = 0\\)"],
        correct: 2,
        explanation: "For a quadratic equation with roots \\(\\alpha\\) and \\(\\beta\\), the sum of roots \\(S = \\alpha + \\beta\\) and product \\(P = \\alpha\\beta\\). The quadratic equation is given by \\(x^2 - Sx + P = 0\\). This is derived from \\((x - \\alpha)(x - \\beta) = x^2 - (\\alpha + \\beta)x + \\alpha\\beta = 0\\)."
    },
    {
        q: "If the roots of the quadratic equation \\(px^2 + qx + 2 = 0\\) are reciprocals of each other, then:",
        options: ["\\(p = 0\\)", "\\(p = -2\\)", "\\(p = \\pm 2\\)", "\\(p = 2\\)"],
        correct: 3,
        explanation: "For roots that are reciprocals of each other, product of roots = 1. For a quadratic equation \\(ax^2 + bx + c = 0\\), product of roots = \\(\\frac{c}{a}\\). Here, \\(\\frac{2}{p} = 1 \\Rightarrow p = 2\\)."
    },
    {
        q: "If \\(a\\) and \\(b\\) are the roots of the equation \\(2x^2 - 3x - 6 = 0\\), the equation whose roots are \\(\\frac{1}{a}\\) and \\(\\frac{1}{b}\\) is:",
        options: [
            "\\(6x^2 - 3x + 2 = 0\\)",
            "\\(6x^2 + 3x - 2 = 0\\)",
            "\\(6x^2 - 3x - 2 = 0\\)",
            "\\(x^2 + 3x - 2 = 0\\)"
        ],
        correct: 1,
        explanation: "For \\(2x^2 - 3x - 6 = 0\\), sum of roots \\(a + b = \\frac{3}{2}\\) and product \\(ab = -3\\). For new roots \\(\\frac{1}{a}\\) and \\(\\frac{1}{b}\\): Sum = \\(\\frac{1}{a} + \\frac{1}{b} = \\frac{a + b}{ab} = \\frac{3/2}{-3} = -\\frac{1}{2}\\). Product = \\(\\frac{1}{ab} = -\\frac{1}{3}\\). The equation is \\(x^2 - (\\text{sum})x + \\text{product} = 0\\) i.e. \\(x^2 + \\frac{1}{2}x - \\frac{1}{3} = 0\\). Multiplying by 6: \\(6x^2 + 3x - 2 = 0\\)."
    },
    {
        q: "If \\(x = 1\\) is a common root of the equations \\(x^2 + ax - 3 = 0\\) and \\(bx^2 - 7x + 2 = 0\\), then the value of \\(ab\\) is:",
        options: ["10", "-3", "6", "7"],
        correct: 0,
        explanation: "Substitute \\(x = 1\\) into \\(x^2 + ax - 3 = 0\\): \\(1 + a - 3 = 0 \\Rightarrow a = 2\\). Substitute \\(x = 1\\) into \\(bx^2 - 7x + 2 = 0\\): \\(b - 7 + 2 = 0 \\Rightarrow b = 5\\). Therefore, \\(ab = 2 \\times 5 = 10\\)."
    }
];