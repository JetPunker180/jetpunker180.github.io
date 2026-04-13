window.questions = [
    {
        q: "Modulus of iota is equal to:",
        options: ["\\(i\\)", "\\(-i\\)", "1", "-1"],
        correct: 2,
        explanation: "Iota (\\(i\\)) is the imaginary unit where \\(i = \\sqrt{-1}\\). The modulus of a complex number \\(a + bi\\) is \\(\\sqrt{a^2 + b^2}\\). For \\(i = 0 + 1i\\), modulus = \\(\\sqrt{0^2 + 1^2} = \\sqrt{1} = 1\\)."
    },
    {
        q: "For non-zero complex number \\(z\\), which of the following is true for \\(\\frac{1}{z}\\)?",
        options: [
            "\\(\\frac{z}{|z|^2}\\)",
            "\\(\\frac{z}{|z|}\\)",
            "\\(\\frac{\\overline{z}}{|z|^2}\\)",
            "\\(\\frac{\\overline{-z}}{|z|}\\)"
        ],
        correct: 2,
        explanation: "For a complex number \\(z\\), we know that \\(z \\cdot \\overline{z} = |z|^2\\). Therefore, \\(\\frac{1}{z} = \\frac{\\overline{z}}{z \\cdot \\overline{z}} = \\frac{\\overline{z}}{|z|^2}\\). This is the standard formula for the reciprocal of a complex number."
    },
    {
        q: "Additive inverse of a complex number \\((a, b)\\) is written as:",
        options: ["\\((-a, b)\\)", "\\((a, -b)\\)", "\\((-a, -b)\\)", "\\((1/a, 1/b)\\)"],
        correct: 2,
        explanation: "The additive inverse of a complex number \\(a + bi\\) is the number that when added gives zero. \\((a + bi) + (-a - bi) = 0\\), so the additive inverse is \\(-a - bi\\) which in ordered pair notation is \\((-a, -b)\\)."
    },
    {
        q: "\\(a^2 + b^2 = ?\\)",
        options: [
            "\\((a+b)(a-b)\\)",
            "\\((a+ib)(a-ib)\\)",
            "\\((a+b)(a-ib)\\)",
            "\\((a+ib)(a-b)\\)"
        ],
        correct: 1,
        explanation: "\\(a^2 + b^2 = a^2 - (-b^2) = a^2 - (i^2b^2) = a^2 - (ib)^2 = (a+ib)(a-ib)\\). This is the factorization of sum of squares using complex numbers."
    },
    {
        q: "Which option is true for the imaginary part of \\(\\frac{x - iy}{x^2 + y^2}\\)?",
        options: [
            "\\(-\\frac{y}{x^2 + y^2}\\)",
            "\\(\\frac{y}{x^2 + y^2}\\)",
            "\\(\\frac{iy}{x^2 + y^2}\\)",
            "\\(-\\frac{iy}{x^2 + y^2}\\)"
        ],
        correct: 0,
        explanation: "\\(\\frac{x - iy}{x^2 + y^2} = \\frac{x}{x^2 + y^2} + \\left(-\\frac{y}{x^2 + y^2}\\right)i\\). The imaginary part is the coefficient of \\(i\\), which is \\(-\\frac{y}{x^2 + y^2}\\)."
    },
    {
        q: "Let \\(z\\) be a complex number, then \\(z \\cdot \\overline{z} = ?\\)",
        options: [
            "\\(|z|^2\\)",
            "\\(-|z|^2\\)",
            "\\(|\\overline{z}|^2\\)",
            "All of the above"
        ],
        correct: 3,
        explanation: "For any complex number \\(z = a + bi\\), we have \\(z \\cdot \\overline{z} = (a+bi)(a-bi) = a^2 + b^2 = |z|^2\\). Also, \\(|\\overline{z}|^2 = |z|^2\\) because modulus of a complex number and its conjugate are equal. So both (a) and (c) are correct, making 'All of the above' the right choice."
    },
    {
        q: "\\(|z| = -|z|\\) holds for a complex number \\(z\\), if and only if it holds that:\n(i) \\(z = -z\\)\n(ii) \\(z = \\overline{z}\\)\n(iii) \\(z = \\overline{-z}\\)",
        options: [
            "Only (i) holds",
            "(i) and (ii) both hold",
            "(i), (ii) and (iii) hold",
            "Either (i) or (ii) hold"
        ],
        correct: 2,
        explanation: "The equation \\(|z| = -|z|\\) implies \\(2|z| = 0 \\Rightarrow |z| = 0 \\Rightarrow z = 0\\). Now checking each condition when \\(z = 0\\): (i) \\(0 = -0\\) ✓, (ii) \\(0 = \\overline{0} = 0\\) ✓, (iii) \\(0 = \\overline{-0} = \\overline{0} = 0\\) ✓. All three conditions hold true when \\(z = 0\\). Therefore, (i), (ii) and (iii) all hold."
    },
    {
        q: "If \\(z + w = 3i\\) and \\(z - w = 4 - i\\), then:",
        options: [
            "\\(z = 2 + i, w = -2 - i\\)",
            "\\(z = 2 - i, w = 2 - 2i\\)",
            "\\(z = 2 + i, w = -2 + 2i\\)",
            "None of these"
        ],
        correct: 2,
        explanation: "Adding the two equations: \\((z + w) + (z - w) = 3i + (4 - i) \\Rightarrow 2z = 4 + 2i \\Rightarrow z = 2 + i\\). Subtracting: \\((z + w) - (z - w) = 3i - (4 - i) \\Rightarrow 2w = 3i - 4 + i = -4 + 4i \\Rightarrow w = -2 + 2i\\). Thus \\(z = 2 + i, w = -2 + 2i\\)."
    },
    {
        q: "If \\((x + 3i)^2 = 2yi\\), then \\((x, y) = ?\\)",
        options: [
            "Only I (3,9)",
            "Only II (-3,-9)",
            "Only III & II",
            "Only II and III (3,7)"
        ],
        correct: 1,
        explanation: "\\((x + 3i)^2 = x^2 + 6xi + 9i^2 = x^2 + 6xi - 9 = (x^2 - 9) + 6xi\\). This equals \\(2yi = 0 + 2yi\\). Equating real and imaginary parts: \\(x^2 - 9 = 0 \\Rightarrow x = \\pm 3\\) and \\(6x = 2y \\Rightarrow y = 3x\\). For \\(x = 3, y = 9\\) giving (3,9). For \\(x = -3, y = -9\\) giving (-3,-9). Both I and II are correct, so the correct choice should include both I and II."
    },
    {
        q: "If \\(z = (3 - 4i)^{-1}\\), then \\(\\text{Re}(z^{-1}) = \\)",
        options: ["3", "\\(-4i\\)", "4", "\\(\\frac{\\sqrt{5}}{2}\\)"],
        correct: 0,
        explanation: "Given \\(z = (3 - 4i)^{-1}\\), then \\(z^{-1} = 3 - 4i\\). The real part of \\(z^{-1}\\) is 3."
    },
    {
        q: "The product of two imaginary numbers is a/an ______.",
        options: ["Imaginary number", "Real number", "Complex number", "None of these"],
        correct: 1,
        explanation: "An imaginary number is of the form \\(bi\\) where \\(b \\in \\mathbb{R}\\). Product of two imaginary numbers: \\((ai)(bi) = abi^2 = ab(-1) = -ab\\), which is a real number."
    },
    {
        q: "Which of the following is the value of \\(|z|\\), where \\(z = \\frac{(3 - 4i)(-1 - 2i)}{i(1 + i)(-3 - i)}\\)?",
        options: [
            "\\(\\frac{\\sqrt{5}}{2}\\)",
            "\\(\\frac{\\sqrt{2}}{5}\\)",
            "\\(\\frac{5}{2}\\)",
            "None of these"
        ],
        correct: 2,
        explanation: "Using properties of modulus: \\(|z| = \\frac{|3 - 4i| \\cdot |-1 - 2i|}{|i| \\cdot |1 + i| \\cdot |-3 - i|}\\). \\(|3 - 4i| = \\sqrt{9 + 16} = 5\\), \\(|-1 - 2i| = \\sqrt{1 + 4} = \\sqrt{5}\\), \\(|i| = 1\\), \\(|1 + i| = \\sqrt{1 + 1} = \\sqrt{2}\\), \\(|-3 - i| = \\sqrt{9 + 1} = \\sqrt{10}\\). So \\(|z| = \\frac{5 \\times \\sqrt{5}}{1 \\times \\sqrt{2} \\times \\sqrt{10}} = \\frac{5\\sqrt{5}}{\\sqrt{20}} = \\frac{5\\sqrt{5}}{2\\sqrt{5}} = \\frac{5}{2}\\)."
    },
    {
        q: "If the conjugate of a complex number lies in 4th quadrant of a complex plane, then the complex number itself lies in:",
        options: [
            "1st quadrant",
            "2nd quadrant",
            "3rd quadrant",
            "4th quadrant"
        ],
        correct: 0,
        explanation: "The conjugate of a complex number is the reflection of the complex number across the real axis. If the conjugate lies in the 4th quadrant (where real > 0, imaginary < 0), then the original number is the reflection across the real axis, placing it in the 1st quadrant (where real > 0, imaginary > 0)."
    },
    {
        q: "If \\(f(n) = i^n\\), where \\(i = \\sqrt{-1}\\) and \\(n\\) is an integer, then the total numbers of distinct values of \\(f(n)\\) is:",
        options: ["2", "3", "4", "infinite"],
        correct: 2,
        explanation: "\\(i^n\\) cycles through four distinct values: \\(i^0 = 1\\), \\(i^1 = i\\), \\(i^2 = -1\\), \\(i^3 = -i\\), and then repeats. So the set of distinct values is \\(\\{1, -1, i, -i\\}\\), which contains 4 elements."
    },
    {
        q: "The complex numbers \\(-3 + 4i\\) and \\(-3 - 4i\\) are ______ of each other.",
        options: ["Additive inverses", "Multiplicative inverses", "Reciprocals", "Conjugates"],
        correct: 3,
        explanation: "Two complex numbers are conjugates if they have the same real part and opposite imaginary parts. Here, \\(-3 + 4i\\) and \\(-3 - 4i\\) have the same real part (-3) and opposite imaginary parts (4i and -4i), so they are conjugates."
    },
    {
        q: "If \\(i = \\sqrt{-1}\\) and \\(n\\) is an integer, then which of the following equations is true?",
        options: [
            "\\(i^{4n+1} = -1\\)",
            "\\(i^{4n+2} = -i\\)",
            "\\(i^{4n} = 1\\)",
            "\\(i^{4n+3} = i\\)"
        ],
        correct: 2,
        explanation: "Since \\(i^4 = 1\\), we have \\(i^{4n} = (i^4)^n = 1^n = 1\\). Checking the others: \\(i^{4n+1} = i\\), \\(i^{4n+2} = -1\\), \\(i^{4n+3} = -i\\)."
    },
    {
        q: "Which of the following is the multiplicative identity in the set of all complex numbers?",
        options: ["\\((0, 0)\\)", "\\((0, -1)\\)", "\\((0, 1)\\)", "\\((1, 0)\\)"],
        correct: 3,
        explanation: "The multiplicative identity is the number that when multiplied with any complex number gives the same number. \\((1, 0)\\) represents \\(1 + 0i = 1\\), and \\(1 \\times (a + bi) = a + bi\\)."
    },
    {
        q: "If \\(x, y \\neq 0\\), then the multiplicative inverse of the complex number \\(z = \\frac{1}{x} + \\frac{1}{y}i\\) is ______.",
        options: [
            "\\(\\frac{1}{xy}\\)",
            "\\(\\frac{1}{x} - \\frac{1}{y}i\\)",
            "\\(\\frac{1}{x} + \\frac{1}{y}i\\)",
            "None of these"
        ],
        correct: 3,
        explanation: "The multiplicative inverse of a complex number \\(z = a + bi\\) is \\(\\frac{1}{z} = \\frac{a - bi}{a^2 + b^2}\\). For \\(z = \\frac{1}{x} + \\frac{1}{y}i\\), the inverse would be \\(\\frac{\\frac{1}{x} - \\frac{1}{y}i}{\\frac{1}{x^2} + \\frac{1}{y^2}}\\), which simplifies to \\(\\frac{xy(y - xi)}{x^2 + y^2}\\). None of the given options match this, so the answer is 'None of these'."
    },
    {
        q: "In the complex plane, the number \\(\\frac{1 + \\sqrt{3}i}{1 - \\sqrt{3}i}\\) lies in the ______.",
        options: ["1st quadrant", "2nd quadrant", "3rd quadrant", "4th quadrant"],
        correct: 1,
        explanation: "Multiply numerator and denominator by conjugate: \\(\\frac{1 + \\sqrt{3}i}{1 - \\sqrt{3}i} \\times \\frac{1 + \\sqrt{3}i}{1 + \\sqrt{3}i} = \\frac{(1 + \\sqrt{3}i)^2}{1 + 3} = \\frac{1 + 2\\sqrt{3}i + 3i^2}{4} = \\frac{1 + 2\\sqrt{3}i - 3}{4} = \\frac{-2 + 2\\sqrt{3}i}{4} = -\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i\\). This has negative real part and positive imaginary part, so it lies in the 2nd quadrant."
    },
    {
        q: "If \\(|z| = 1\\), then \\(\\left( \\frac{z+1}{z+1} \\right)^2 = ?\\)",
        options: ["\\(z\\)", "\\(\\overline{z}\\)", "\\(z^{-1}\\)", "None"],
        correct: 3,
        explanation: "The expression \\(\\frac{z+1}{z+1} = 1\\) (provided \\(z \\neq -1\\)), so \\(\\left( \\frac{z+1}{z+1} \\right)^2 = 1^2 = 1\\). None of the options equal 1 in general, so the answer is 'None'."
    },
    {
        q: "\\(i^i = ?\\)",
        options: [
            "\\(e^{-\\frac{\\pi}{2}}\\)",
            "\\(e^{\\frac{\\pi}{2}}\\)",
            "\\(e^{-\\pi}\\)",
            "\\(e^{\\pi}\\)"
        ],
        correct: 0,
        explanation: "We know that \\(i = e^{i\\frac{\\pi}{2}}\\). Then \\(i^i = (e^{i\\frac{\\pi}{2}})^i = e^{i \\cdot i \\cdot \\frac{\\pi}{2}} = e^{-\\frac{\\pi}{2}}\\). This is a real number approximately equal to 0.20788."
    },
    {
        q: "\\((2 - i)^2 = ?\\)",
        options: ["\\(3 - 4i\\)", "\\(3 + 4i\\)", "\\(5 - 4i\\)", "\\(5 + 4i\\)"],
        correct: 0,
        explanation: "\\((2 - i)^2 = (2)^2 - 2(2)(i) + (i)^2 = 4 - 4i + i^2 = 4 - 4i - 1 = 3 - 4i\\)"
    },
    {
        q: "If \\(z = a + i b \\cos x\\), then \\(z \\cdot \\overline{z} = ?\\)",
        options: ["\\(a^2 + b^2 \\cos^2 x\\)", "\\(a^2 - b^2 \\cos^2 x\\)", "\\(a^2 + b^2\\)", "\\(a^2 - b^2\\)"],
        correct: 0,
        explanation: "Given \\(z = a + i b \\cos x\\), its conjugate is \\(\\overline{z} = a - i b \\cos x\\). Then \\(z \\cdot \\overline{z} = (a + i b \\cos x)(a - i b \\cos x) = a^2 - (i b \\cos x)^2 = a^2 - i^2 b^2 \\cos^2 x = a^2 + b^2 \\cos^2 x\\)."
    },
    {
        q: "Real part of \\(\\frac{1}{2+3i}\\) is:",
        options: ["\\(\\frac{2}{13}\\)", "\\(\\frac{3}{13}\\)", "\\(\\frac{2}{5}\\)", "\\(\\frac{3}{5}\\)"],
        correct: 0,
        explanation: "\\(\\frac{1}{2+3i} = \\frac{1}{2+3i} \\times \\frac{2-3i}{2-3i} = \\frac{2-3i}{4+9} = \\frac{2-3i}{13} = \\frac{2}{13} - \\frac{3}{13}i\\). The real part is \\(\\frac{2}{13}\\)."
    },
    {
        q: "According to De Moivre's Theorem, for any real number \\(\\theta\\) and any integer \\(n\\), the expression \\((\\cos \\theta + i \\sin \\theta)^n\\) is equivalent to:",
        options: [
            "\\(\\cos(n\\theta) - i \\sin(n\\theta)\\)",
            "\\(n \\cos \\theta + in \\sin \\theta\\)",
            "\\(\\cos(n\\theta) + i \\sin(n\\theta)\\)",
            "\\(\\cos^n \\theta + i \\sin^n \\theta\\)"
        ],
        correct: 2,
        explanation: "De Moivre's Theorem states that for any real number \\(\\theta\\) and any integer \\(n\\), \\((\\cos \\theta + i \\sin \\theta)^n = \\cos(n\\theta) + i \\sin(n\\theta)\\). This is a fundamental result derived from Euler's Formula, where \\(e^{i\\theta} = \\cos \\theta + i \\sin \\theta\\)."
    },
    {
        q: "\\(i(1-i)^{10}\\) is equal to:",
        options: ["32", "-32", "32i", "-32i"],
        correct: 0,
        explanation: "First, find \\((1-i)^2 = 1 - 2i + i^2 = 1 - 2i - 1 = -2i\\). Then \\((1-i)^{10} = ((1-i)^2)^5 = (-2i)^5 = (-2)^5 \\cdot i^5 = -32 \\cdot i^4 \\cdot i = -32 \\cdot 1 \\cdot i = -32i\\). Now multiply by \\(i\\): \\(i \\cdot (1-i)^{10} = i \\cdot (-32i) = -32i^2 = -32(-1) = 32\\)."
    },
    {
        q: "\\(\\frac{1+i}{1-i}\\) is equal to:",
        options: ["\\(i\\)", "\\(-i\\)", "\\(1\\)", "\\(-1\\)"],
        correct: 0,
        explanation: "Multiply numerator and denominator by the conjugate of denominator: \\(\\frac{1+i}{1-i} \\times \\frac{1+i}{1+i} = \\frac{(1+i)^2}{1^2 - i^2} = \\frac{1 + 2i + i^2}{1 - (-1)} = \\frac{1 + 2i - 1}{2} = \\frac{2i}{2} = i\\)"
    },
    {
        q: "If \\(z + \\overline{z} = 0\\), it means that \\(z\\) is:",
        options: [
            "Purely real",
            "Purely imaginary",
            "Zero",
            "None of these"
        ],
        correct: 1,
        explanation: "Let \\(z = x + iy\\), then \\(\\overline{z} = x - iy\\). \\(z + \\overline{z} = (x + iy) + (x - iy) = 2x\\). Given \\(z + \\overline{z} = 0 \\Rightarrow 2x = 0 \\Rightarrow x = 0\\). So \\(z = iy\\), which is purely imaginary."
    },
    {
        q: "\\(i \\cos x + \\sin x\\) simplified by multiplying and dividing by \\(i\\) gives:",
        options: [
            "\\(i e^{-ix}\\)",
            "\\(e^{i(\\frac{\\pi}{2} - x)}\\)",
            "\\(i e^{ix}\\)",
            "\\(e^{i(x - \\frac{\\pi}{2})}\\)"
        ],
        correct: 0,
        explanation: "Multiply and divide by \\(i\\): \\(i \\cos x + \\sin x = i(\\cos x - i \\sin x) = i(\\cos(-x) + i \\sin(-x)) = i e^{-ix}\\)."
    },
    {
        q: "Find the square of \\(\\frac{-1 + \\sqrt{3}i}{2}\\):",
        options: [
            "\\(\\frac{-1 - \\sqrt{3}i}{2}\\)",
            "\\(\\frac{1 + \\sqrt{3}i}{2}\\)",
            "\\(\\frac{1 - \\sqrt{3}i}{2}\\)",
            "None of these"
        ],
        correct: 0,
        explanation: "Let \\(\\omega = \\frac{-1 + \\sqrt{3}i}{2}\\). This is one of the cube roots of unity. We know that \\(\\omega^2 = \\frac{-1 - \\sqrt{3}i}{2}\\). Alternatively, \\(\\left(\\frac{-1 + \\sqrt{3}i}{2}\\right)^2 = \\frac{1 - 2\\sqrt{3}i - 3}{4} = \\frac{-2 - 2\\sqrt{3}i}{4} = \\frac{-1 - \\sqrt{3}i}{2}\\)."
    },
    {
        q: "\\(w^7 + w^{12}\\) can be simplified to:",
        options: [
            "\\(-\\frac{1}{w^2}\\)",
            "\\(w^2\\)",
            "\\(w^2 + 1\\)",
            "\\(-\\frac{1}{w}\\)"
        ],
        correct: 3,
        explanation: "Since \\(w\\) is a cube root of unity, \\(w^3 = 1\\). Then \\(w^7 = w^{6} \\cdot w = (w^3)^2 \\cdot w = 1^2 \\cdot w = w\\). Also, \\(w^{12} = (w^3)^4 = 1^4 = 1\\). So \\(w^7 + w^{12} = w + 1\\). Using the property \\(1 + w + w^2 = 0 \\Rightarrow w + 1 = -w^2 = -\\frac{1}{w}\\)."
    },
    {
        q: "The value of \\(\\left(\\frac{1 + i}{1 - i}\\right)^{20}\\) is:",
        options: ["1", "-1", "i", "-i"],
        correct: 0,
        explanation: "First simplify: \\(\\frac{1+i}{1-i} = i\\) . Then \\(i^{20} = (i^4)^5 = 1^5 = 1\\)."
    },
    {
        q: "If \\(z\\) is a complex number such that \\(|z| = 1\\) and \\(|z + z^{-1}| = 1\\), then \\(\\text{Im}(z)\\) equals:",
        options: ["\\(\\pm \\frac{1}{2}\\)", "\\(\\pm \\frac{\\sqrt{3}}{2}\\)", "\\(\\pm \\frac{1}{\\sqrt{2}}\\)", "\\(\\pm \\frac{\\sqrt{3}}{4}\\)"],
        correct: 1,
        explanation: "Let \\(z = \\cos \\theta + i \\sin \\theta\\). Then \\(z^{-1} = \\cos \\theta - i \\sin \\theta\\). So \\(z + z^{-1} = 2\\cos \\theta\\). Given \\(|z + z^{-1}| = |2\\cos \\theta| = 1 \\Rightarrow |\\cos \\theta| = \\frac{1}{2}\\). Then \\(\\sin \\theta = \\pm \\frac{\\sqrt{3}}{2}\\), which is the imaginary part of \\(z\\)."
    },
    {
        q: "The complex number \\(z\\) satisfying \\(z^5 = \\overline{z}\\) and \\(|z| \\neq 1\\) is:",
        options: ["0", "1", "-1", "i"],
        correct: 0,
        explanation: "Let \\(z = re^{i\\theta}\\). Then \\(z^5 = r^5 e^{i5\\theta}\\) and \\(\\overline{z} = re^{-i\\theta}\\). Equating: \\(r^5 e^{i5\\theta} = re^{-i\\theta} \\Rightarrow r^4 e^{i6\\theta} = 1\\). Taking modulus: \\(r^4 = 1 \\Rightarrow r = 1\\) (since \\(r > 0\\)). But given \\(|z| \\neq 1\\), the only possibility is \\(r = 0\\), i.e., \\(z = 0\\)."
    }
];