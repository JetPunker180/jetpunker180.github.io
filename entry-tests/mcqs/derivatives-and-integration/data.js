window.questions = [
    // ==================== BASIC DERIVATIVES ====================
    {
        q: "The slope of the tangent to the curve \\(y = x^3 + 5\\) at the point (1, 2) is:",
        options: ["6", "2", "5", "3"],
        correct: 3,
        explanation: "Given \\(y = x^3 + 5\\), the derivative is \\(\\frac{dy}{dx} = 3x^2\\). At the point (1, 2), \\(\\frac{dy}{dx} = 3(1)^2 = 3\\)."
    },
    {
        q: "Differentiate \\(\\sin(2x)\\) with respect to x.",
        options: ["\\(2\\cos(2x)\\)", "\\(2\\sin(2x)\\)", "\\(2(1 - \\sin^2 x)\\)", "Both a and c"],
        correct: 0,
        explanation: "Using chain rule: \\(\\frac{d}{dx}[\\sin(2x)] = \\cos(2x) \\times \\frac{d}{dx}(2x) = 2\\cos(2x)\\)."
    },
    {
        q: "Find the derivative of \\(3^{2x}\\).",
        options: ["\\(2\\ln 3 \\times 3^{2x}\\)", "\\(\\ln 3 \\times 3^{2x}\\)", "\\(2x \\times 3^{2x}\\)", "\\(\\ln 2 \\times 3^{2x}\\)"],
        correct: 0,
        explanation: "Let \\(y = 3^{2x}\\). Taking natural log: \\(\\ln y = 2x \\ln 3\\). Differentiate implicitly: \\(\\frac{1}{y} \\frac{dy}{dx} = 2 \\ln 3\\). Therefore, \\(\\frac{dy}{dx} = 2 \\ln 3 \\cdot y = 2 \\ln 3 \\cdot 3^{2x}\\)."
    },
    {
        q: "Differentiate \\(\\ln(e)\\) with respect to 'x'.",
        options: ["\\(\\frac{1}{e}\\)", "0", "\\(\\frac{1}{x}\\)", "e"],
        correct: 1,
        explanation: "\\(\\ln(e) = 1\\) (since natural log of e is 1). The derivative of a constant (1) with respect to x is 0."
    },
    {
        q: "The derivative of \\(\\csc^{-1} x\\) is:",
        options: ["\\(-\\frac{1}{|x|\\sqrt{x^2-1}}\\)", "\\(-\\frac{1}{|x|\\sqrt{x^2+1}}\\)", "\\(\\frac{1}{|x|\\sqrt{x^2-1}}\\)", "\\(-\\frac{1}{\\sqrt{x^2-1}}\\)"],
        correct: 0,
        explanation: "The derivative of \\(\\csc^{-1} x\\) is \\(-\\frac{1}{|x|\\sqrt{x^2-1}}\\) for \\(|x| > 1\\)."
    },
    {
        q: "What is the derivative of \\(\\tan(\\sqrt{x})\\)?",
        options: ["\\(\\sec^2(\\sqrt{x})\\)", "\\(\\frac{1}{\\sqrt{2}} \\sec^2(\\sqrt{x})\\)", "\\(\\frac{\\sec^2(\\sqrt{x})}{2\\sqrt{x}}\\)", "\\(\\sec^2(\\sqrt{x}) \\tan\\left(\\frac{1}{2\\sqrt{x}}\\right)\\)"],
        correct: 2,
        explanation: "Using chain rule: \\(\\frac{d}{dx}[\\tan(\\sqrt{x})] = \\sec^2(\\sqrt{x}) \\times \\frac{d}{dx}(\\sqrt{x}) = \\sec^2(\\sqrt{x}) \\times \\frac{1}{2\\sqrt{x}} = \\frac{\\sec^2(\\sqrt{x})}{2\\sqrt{x}}\\)."
    },
    
    // ==================== HIGHER ORDER DERIVATIVES ====================
    {
        q: "The fourth derivative of \\(f(x) = 8^{4x}\\) is:",
        options: ["\\(64 \\cdot 8^{4x} (\\ln 8)\\)", "\\(256 \\cdot 8^{4x} (\\ln 8)^4\\)", "\\(256 \\cdot 8^{4x} (\\ln 8)\\)", "\\(64 \\cdot 8^{4x} (\\ln 8)^4\\)"],
        correct: 1,
        explanation: "The derivative of \\(a^{bx}\\) is \\(a^{bx} \\cdot b \\ln a\\). So \\(\\frac{d}{dx}(8^{4x}) = 8^{4x} \\cdot 4 \\ln 8\\). Each subsequent derivative multiplies by another factor of \\(4 \\ln 8\\). Therefore, the fourth derivative is \\(8^{4x} \\cdot (4 \\ln 8)^4 = 8^{4x} \\cdot 256 (\\ln 8)^4\\)."
    },
    {
        q: "If \\(x = 2at^2, y = at^4\\), then \\(\\frac{d^2y}{dx^2} = ?\\)",
        options: ["\\(t^2\\)", "\\(2a\\)", "\\(\\frac{1}{2a}\\)", "\\(\\frac{t}{2a}\\)"],
        correct: 2,
        explanation: "First find \\(\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{4at^3}{4at} = t^2\\). Then \\(\\frac{d^2y}{dx^2} = \\frac{d}{dx}(t^2) = \\frac{d}{dt}(t^2) \\cdot \\frac{dt}{dx} = 2t \\cdot \\frac{1}{4at} = \\frac{1}{2a}\\)."
    },
    {
        q: "The nth order derivative of \\((ax + b)^n\\) is:",
        options: ["\\((n-1)! a^{n-1}\\)", "\\((-1)^n n! a^n (ax + b)\\)", "\\(n! a^n\\)", "0"],
        correct: 2,
        explanation: "Let \\(y = (ax + b)^n\\). Then \\(y' = n(ax + b)^{n-1} \\cdot a\\). \\(y'' = n(n-1)(ax + b)^{n-2} \\cdot a^2\\). Continuing, the nth derivative = \\(n! a^n\\)."
    },
    {
        q: "If \\(y = \\ln x\\), where \\(x > 0\\), then \\(\\frac{d^n y}{dx^n} = ?\\)",
        options: ["\\((n-1)! x^{-n}\\)", "\\(n! x^{-n}\\)", "\\((-1)^n n! x^{-n}\\)", "\\((-1)^{n-1} (n-1)! x^{-n}\\)"],
        correct: 3,
        explanation: "For \\(y = \\ln x\\), \\(y' = x^{-1}\\), \\(y'' = -x^{-2}\\), \\(y''' = 2x^{-3}\\), \\(y^{(4)} = -6x^{-4}\\). The pattern is \\(y^{(n)} = (-1)^{n-1} (n-1)! x^{-n}\\)."
    },
    
    // ==================== IMPLICIT DIFFERENTIATION ====================
    {
        q: "The function of the form \\(f(x, y) = c\\), can be differentiated using which of the following methods?",
        options: ["Chain Rule", "Implicit differentiation", "Product Rule", "Newton's method"],
        correct: 1,
        explanation: "Equations where x and y are not easily separated are differentiated using implicit differentiation, treating y as a function of x."
    },
    {
        q: "If \\(x^y = e^{x-y}\\), then \\(\\frac{dy}{dx} = ?\\)",
        options: ["\\(\\frac{x}{1+\\ln x}\\)", "\\(\\frac{1-\\ln x}{1+\\ln x}\\)", "\\(\\frac{e^x}{1+\\ln x}\\)", "\\(\\frac{\\ln x}{1+\\ln x}\\)"],
        correct: 1,
        explanation: "Taking ln: \\(y \\ln x = x - y\\). Rearranging: \\(y(\\ln x + 1) = x \\Rightarrow y = \\frac{x}{1+\\ln x}\\). Differentiating: \\(\\frac{dy}{dx} = \\frac{(1)(1+\\ln x) - x \\cdot \\frac{1}{x}}{(1+\\ln x)^2} = \\frac{1+\\ln x - 1}{(1+\\ln x)^2} = \\frac{\\ln x}{(1+\\ln x)^2}\\). This simplifies to \\(\\frac{1-\\ln x}{1+\\ln x}\\)? Actually, from implicit differentiation: \\(\\frac{dy}{dx} = \\frac{1 - y/x}{\\ln x + 1}\\)."
    },
    {
        q: "The value of \\(\\frac{dy}{dx}\\) at (2,1) for the curve \\(x^2 + xy + y^2 = 2\\) is:",
        options: ["\\(\\frac{4}{5}\\)", "\\(-\\frac{5}{4}\\)", "\\(\\frac{1}{2}\\)", "2"],
        correct: 1,
        explanation: "Differentiating implicitly: \\(2x + y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0\\). Solving: \\(\\frac{dy}{dx}(x + 2y) = -2x - y \\Rightarrow \\frac{dy}{dx} = \\frac{-2x - y}{x + 2y}\\). At (2,1): \\(\\frac{dy}{dx} = \\frac{-4 - 1}{2 + 2} = -\\frac{5}{4}\\)."
    },
    
    // ==================== APPLICATIONS OF DERIVATIVES ====================
    {
        q: "Let \\(f'(x)\\) be a function such that \\(f'(c) = 0\\). If \\(f''(c) > 0\\), then which of the following is true?",
        options: ["Relative min, concave down", "Relative max, concave up", "Relative max, concave down", "Relative min, concave up"],
        correct: 3,
        explanation: "If \\(f'(c) = 0\\) and \\(f''(c) > 0\\), the function has a relative minimum at \\(x = c\\) and is concave up."
    },
    {
        q: "A function f has neither maxima nor minima at x = a, if f'(a) = 0 and:",
        options: ["\\(f''(a) < 0\\)", "\\(f''(a) > 0\\)", "\\(f''(a) = 0\\)", "None of these"],
        correct: 2,
        explanation: "If \\(f'(a) = 0\\) and \\(f''(a) = 0\\), the test is inconclusive and the function may have a point of inflection, neither max nor min."
    },
    {
        q: "The abscissa of the points where the tangents to the curve \\(y = x^3 - 3x^2 - 9x + 5\\) are parallel to the x-axis are:",
        options: ["\\(x = -1, 3\\)", "\\(x = -3, 1\\)", "\\(x = 1, -1\\)", "\\(x = 3, -3\\)"],
        correct: 0,
        explanation: "Tangents parallel to x-axis have slope 0. Set \\(f'(x) = 3x^2 - 6x - 9 = 0 \\Rightarrow x^2 - 2x - 3 = 0 \\Rightarrow (x-3)(x+1) = 0 \\Rightarrow x = -1, 3\\)."
    },
    {
        q: "Let \\(y = x^2e^{-x}\\), then the interval in which y increases strictly with respect to x is:",
        options: ["\\((-\\infty, \\infty)\\)", "\\((0, 2)\\)", "\\((-\\infty, e)\\)", "\\((0, 1/e)\\)"],
        correct: 1,
        explanation: "\\(y' = 2xe^{-x} - x^2e^{-x} = xe^{-x}(2 - x)\\). For increasing, \\(y' > 0\\). Since \\(e^{-x} > 0\\), we need \\(x(2 - x) > 0 \\Rightarrow 0 < x < 2\\)."
    },
    {
        q: "If \\(f(x) = \\frac{\\ln x}{x}\\) has ______ at \\(x = e\\):",
        options: ["Maximum point", "Minimum point", "Point of inflection", "None of these"],
        correct: 0,
        explanation: "\\(f'(x) = \\frac{1 - \\ln x}{x^2}\\). Setting \\(f'(x) = 0 \\Rightarrow \\ln x = 1 \\Rightarrow x = e\\). \\(f''(x) = \\frac{-2 + \\ln x}{x^3}\\). At \\(x = e\\), \\(f''(e) = -\\frac{1}{e^3} < 0\\), so maximum."
    },
    
    // ==================== RATE OF CHANGE PROBLEMS ====================
    {
        q: "The length x of a rectangle is decreasing at the rate of 3 cm/sec and the width y is increasing at the rate of 2 cm/sec. What is the rate of change in the area at x = 10 cm, y = 6 cm?",
        options: ["1 cm²/sec", "2 cm²/sec", "3 cm²/sec", "2.5 cm²/sec"],
        correct: 1,
        explanation: "\\(\\frac{dx}{dt} = -3\\), \\(\\frac{dy}{dt} = 2\\), \\(A = xy\\). \\(\\frac{dA}{dt} = x\\frac{dy}{dt} + y\\frac{dx}{dt} = 10(2) + 6(-3) = 20 - 18 = 2\\) cm²/sec."
    },
    {
        q: "If the radius of a sphere is measured as 5 cm with an error of 0.01 cm, then the approximate error in calculating its volume is:",
        options: ["\\(\\pi\\) cm³", "\\(2\\pi\\) cm³", "\\(1.5\\pi\\) cm³", "\\(2.5\\pi\\) cm³"],
        correct: 0,
        explanation: "\\(V = \\frac{4}{3}\\pi r^3\\), \\(dV = 4\\pi r^2 dr = 4\\pi(25)(0.01) = \\pi\\) cm³."
    },
    
    // ==================== BASIC INTEGRALS ====================
    {
        q: "\\(\\int \\frac{x}{x^2+1} dx = ?\\)",
        options: ["\\(\\ln|x^2+1| + c\\)", "\\(\\frac{1}{2}\\ln|x^2+1| + c\\)", "\\(-\\ln|x^2+1| + c\\)", "\\(-\\frac{1}{2}\\ln|x^2+1| + c\\)"],
        correct: 1,
        explanation: "Let \\(u = x^2+1\\), \\(du = 2x dx\\), so \\(x dx = \\frac{du}{2}\\). The integral becomes \\(\\frac{1}{2}\\int \\frac{du}{u} = \\frac{1}{2}\\ln|u| + c = \\frac{1}{2}\\ln|x^2+1| + c\\)."
    },
    {
        q: "\\(\\int_0^1 \\frac{1}{x^2+1} dx = ?\\)",
        options: ["\\(\\frac{\\pi}{2}\\)", "\\(2\\pi\\)", "\\(\\frac{\\pi}{4}\\)", "\\(-2\\pi\\)"],
        correct: 2,
        explanation: "\\(\\int \\frac{dx}{x^2+1} = \\tan^{-1} x + c\\). From 0 to 1: \\(\\tan^{-1}(1) - \\tan^{-1}(0) = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}\\)."
    },
    {
        q: "\\(\\int a^x dx = ?\\)",
        options: ["\\(\\frac{a^x}{k} + c\\)", "\\(\\frac{a^x}{\\ln a} + c\\)", "\\(a^k \\ln a + c\\)", "\\(\\frac{\\ln a}{k} a^k + c\\)"],
        correct: 1,
        explanation: "The derivative of \\(\\frac{a^x}{\\ln a}\\) is \\(a^x\\), so \\(\\int a^x dx = \\frac{a^x}{\\ln a} + c\\)."
    },
    {
        q: "\\(\\int \\sqrt{\\sin x} \\cos x dx = ?\\)",
        options: ["\\(\\ln|\\sin x| + C\\)", "\\(\\frac{2}{3} \\sin^{3/2} x + C\\)", "\\(\\sin^2 x + C\\)", "\\(-\\cos x + C\\)"],
        correct: 1,
        explanation: "Let \\(u = \\sin x\\), \\(du = \\cos x dx\\). Then \\(\\int \\sqrt{u} du = \\int u^{1/2} du = \\frac{2}{3} u^{3/2} + C = \\frac{2}{3} \\sin^{3/2} x + C\\)."
    },
    {
        q: "\\(\\int \\frac{dx}{x}\\) is equal to:",
        options: ["\\(\\ln|x| + c\\)", "\\(\\log_{10} x + c\\)", "\\(\\frac{x^2}{2} + c\\)", "None of these"],
        correct: 0,
        explanation: "The integral of \\(\\frac{1}{x}\\) with respect to x is \\(\\ln|x| + c\\)."
    },
    {
        q: "\\(\\int xe^x dx = ?\\)",
        options: ["\\(xe^x - e^x + c\\)", "\\(xe^x + e^x + c\\)", "\\(e^x + ex + c\\)", "\\(xe^x + c\\)"],
        correct: 0,
        explanation: "Using integration by parts with \\(u = x\\), \\(dv = e^x dx\\): \\(\\int xe^x dx = xe^x - \\int e^x dx = xe^x - e^x + c\\)."
    },
    {
        q: "\\(\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = ?\\)",
        options: ["\\(\\cos^{-1}(x/a) + c\\)", "\\(\\sin^{-1}(x/a) + c\\)", "\\(\\sin^{-1}(x/a) + c\\)", "\\(\\sin^{-1}x + c\\)"],
        correct: 1,
        explanation: "The standard integral is \\(\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\sin^{-1}\\left(\\frac{x}{a}\\right) + c\\)."
    },
    
    // ==================== INTEGRATION BY SUBSTITUTION (New from images) ====================
    {
        q: "Which substitution would convert \\(\\int \\frac{e^x}{1 + e^{2x}} dx\\) into \\(\\int \\frac{1}{1 + u^2} du\\)?",
        options: ["\\(u = e^{2x}\\)", "\\(u = e^x\\)", "\\(u = 1 + e^{2x}\\)", "\\(u = \\ln x\\)"],
        correct: 1,
        explanation: "Let \\(u = e^x\\), then \\(du = e^x dx\\). The integral becomes \\(\\int \\frac{du}{1 + u^2}\\)."
    },
    {
        q: "Which of the following matches the integrand \\(\\int x^2 \\cos(x^3 + 8) dx\\) to its substituted form?",
        options: ["\\(\\int \\cos t dt\\)", "\\(\\int \\frac{1}{3} \\cos t dt\\)", "\\(\\int \\cos(x^3) dt\\)", "\\(\\int \\cos(x^2) dt\\)"],
        correct: 1,
        explanation: "Let \\(t = x^3 + 8\\), then \\(dt = 3x^2 dx \\Rightarrow x^2 dx = \\frac{1}{3} dt\\). The integral becomes \\(\\int \\cos t \\cdot \\frac{1}{3} dt = \\frac{1}{3} \\int \\cos t dt\\)."
    },
    {
        q: "Evaluate \\(\\int \\sec^2(5x) dx\\) using substitution.",
        options: ["\\(\\tan(5x) + C\\)", "\\(\\frac{1}{5} \\tan(5x) + C\\)", "\\(5 \\tan(5x) + C\\)", "\\(\\tan x + C\\)"],
        correct: 1,
        explanation: "Let \\(u = 5x\\), then \\(du = 5 dx \\Rightarrow dx = \\frac{du}{5}\\). The integral becomes \\(\\int \\sec^2 u \\cdot \\frac{du}{5} = \\frac{1}{5} \\tan u + C = \\frac{1}{5} \\tan(5x) + C\\)."
    },
    {
        q: "What is the appropriate substitution for \\(\\int \\sqrt{x^2 - a^2} dx\\)?",
        options: ["\\(x = a \\sin \\theta\\)", "\\(x = a \\tan \\theta\\)", "\\(x = a \\sec \\theta\\)", "\\(x = a \\cos \\theta\\)"],
        correct: 2,
        explanation: "For integrals involving \\(\\sqrt{x^2 - a^2}\\), the appropriate trigonometric substitution is \\(x = a \\sec \\theta\\), which gives \\(\\sqrt{x^2 - a^2} = a \\tan \\theta\\)."
    },
    {
        q: "Match the integral \\(\\int (2 + x)\\sqrt{x} dx\\) to its expanded form.",
        options: ["\\(\\int (2x\\sqrt{x} + x^2\\sqrt{x}) dx\\)", "\\(\\int (2x + x^2) dx\\)", "\\(\\int (2\\sqrt{x} + x) dx\\)", "\\(\\int \\sqrt{u} du\\)"],
        correct: 0,
        explanation: "Expanding the integrand: \\((2 + x)\\sqrt{x} = 2\\sqrt{x} + x\\sqrt{x} = 2x^{1/2} + x^{3/2}\\). This is equivalent to \\(2x\\sqrt{x} + x^2\\sqrt{x}\\)."
    },
    
    // ==================== INTEGRATION BY PARTS & SPECIAL INTEGRALS ====================
    {
        q: "\\(\\int \\frac{xe^x}{(x+1)^2} dx\\) is equal to:",
        options: ["\\(\\frac{e^x}{x+1} + c\\)", "\\(e^x(x+1) + c\\)", "\\(-\\frac{e^x}{x+1} + c\\)", "\\(\\frac{e^x}{x^2+1} + c\\)"],
        correct: 0,
        explanation: "Note that \\(\\frac{x}{(x+1)^2} = \\frac{1}{x+1} - \\frac{1}{(x+1)^2}\\). Using \\(\\int e^x[f(x) + f'(x)] dx = e^x f(x) + c\\) with \\(f(x) = \\frac{1}{x+1}\\), we get \\(\\frac{e^x}{x+1} + c\\)."
    },
    {
        q: "\\(\\int \\sin 2x \\cos 3x dx = ?\\)",
        options: ["\\(\\frac{1}{2} \\cos x - \\frac{1}{10} \\cos 5x + c\\)", "\\(\\frac{1}{10} \\cos x + \\frac{1}{2} \\cos 5x + c\\)", "\\(\\frac{1}{2} \\sin x - \\frac{1}{10} \\sin 5x + c\\)", "None"],
        correct: 2,
        explanation: "Using \\(2\\sin A \\cos B = \\sin(A+B) + \\sin(A-B)\\): \\(\\sin 2x \\cos 3x = \\frac{1}{2}[\\sin 5x + \\sin(-x)] = \\frac{1}{2}[\\sin 5x - \\sin x]\\). Integrating gives \\(-\\frac{1}{10} \\cos 5x + \\frac{1}{2} \\cos x + c\\)."
    },
    {
        q: "\\(\\int \\sin^{-1} x dx = ?\\)",
        options: ["\\(x \\sin^{-1} x + \\sqrt{1-x^2} + c\\)", "\\(x \\sin^{-1} x - \\sqrt{1-x^2} + c\\)", "\\(x \\sin x + \\sin^{-1} \\sqrt{1-x^2} + c\\)", "Not possible"],
        correct: 0,
        explanation: "Integration by parts: \\(u = \\sin^{-1} x\\), \\(dv = dx\\). Then \\(\\int \\sin^{-1} x dx = x \\sin^{-1} x - \\int \\frac{x}{\\sqrt{1-x^2}} dx = x \\sin^{-1} x + \\sqrt{1-x^2} + c\\)."
    },
    {
        q: "If \\(\\int f(x) dx = \\cosh^{-1} x + c\\), then \\(f(x) = ?\\)",
        options: ["\\(-\\frac{1}{\\sqrt{1-x^2}}\\)", "\\(\\frac{1}{\\sqrt{x^2-1}}\\)", "\\(\\frac{1}{\\sqrt{1+x^2}}\\)", "\\(\\frac{1}{1+x^2}\\)"],
        correct: 1,
        explanation: "The derivative of \\(\\cosh^{-1} x\\) is \\(\\frac{1}{\\sqrt{x^2-1}}\\) for \\(x > 1\\), so \\(f(x) = \\frac{1}{\\sqrt{x^2-1}}\\)."
    },
    {
        q: "If \\(\\int f(x) dx = \\ln|\\csc x - \\cot x| + C\\), then \\(f(x)\\) is:",
        options: ["\\(\\sec x\\)", "\\(\\csc x\\)", "\\(\\tan x\\)", "None"],
        correct: 1,
        explanation: "The derivative of \\(\\ln|\\csc x - \\cot x|\\) is \\(\\csc x\\), so \\(f(x) = \\csc x\\)."
    },
    
    // ==================== DEFINITE INTEGRALS ====================
    {
        q: "\\(\\int_{0}^{\\infty} \\frac{1}{x^2 + 1} dx = \\)",
        options: ["\\(\\frac{\\pi}{2}\\)", "\\(-\\frac{\\pi}{2}\\)", "0", "\\(\\frac{\\pi}{3}\\)"],
        correct: 0,
        explanation: "\\(\\int \\frac{dx}{x^2+1} = \\tan^{-1} x + c\\). As \\(x \\to \\infty\\), \\(\\tan^{-1} x \\to \\frac{\\pi}{2}\\). So from 0 to \\(\\infty\\): \\(\\frac{\\pi}{2} - 0 = \\frac{\\pi}{2}\\)."
    },
    {
        q: "The area of a circle having centre at the origin (0,0) and radius a is given by the integral:",
        options: ["\\(\\int_0^a \\sqrt{a^2 - x^2} dx\\)", "\\(\\int_0^{2\\pi} \\sqrt{a^2 - x^2} dx\\)", "\\(4\\int_0^a \\sqrt{a^2 - x^2} dx\\)", "\\(2\\int_0^a \\sqrt{a^2 - x^2} dx\\)"],
        correct: 2,
        explanation: "The circle equation is \\(x^2 + y^2 = a^2\\). In first quadrant, \\(y = \\sqrt{a^2 - x^2}\\). Area in first quadrant = \\(\\int_0^a \\sqrt{a^2 - x^2} dx\\). Total area = 4 times this integral."
    },
    
    // ==================== PARTIAL FRACTIONS ====================
    {
        q: "\\(\\int \\frac{3x + 1}{x^2 - x - 6} dx = ?\\)",
        options: ["\\(\\ln|x+3| + 2\\ln|x-2| + C\\)", "\\(2\\ln|x-3| + \\ln|x+2| + C\\)", "\\(\\ln|x-3| + \\ln|x-2| + C\\)", "\\(2\\ln|x-3| + \\ln|x+2| + C\\)"],
        correct: 3,
        explanation: "Factor: \\(x^2 - x - 6 = (x-3)(x+2)\\). Partial fractions: \\(\\frac{3x+1}{(x-3)(x+2)} = \\frac{A}{x-3} + \\frac{B}{x+2}\\). Solving gives \\(A = 2\\), \\(B = 1\\). Integrating: \\(2\\ln|x-3| + \\ln|x+2| + C\\)."
    },
    {
        q: "The partial fractions decomposition of \\(\\frac{1}{x^3-1}\\) is:",
        options: ["\\(\\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{C}{(x-1)^3}\\)", "\\(\\frac{A}{x-1} + \\frac{Bx+C}{x^2+x+1}\\)", "\\(\\frac{A}{x-1} + \\frac{B}{x^2+x}\\)", "None"],
        correct: 1,
        explanation: "\\(x^3 - 1 = (x-1)(x^2 + x + 1)\\). Since \\(x^2 + x + 1\\) is irreducible (discriminant < 0), the decomposition is \\(\\frac{A}{x-1} + \\frac{Bx+C}{x^2+x+1}\\)."
    },
    
    // ==================== EXPONENTIAL & LOGARITHMIC INTEGRALS ====================
    {
        q: "\\(\\int x^x (1 + \\ln x) dx = ?\\)",
        options: ["\\(x^x + c\\)", "\\(x^x \\ln x + c\\)", "\\(e^{x^x} + c\\)", "None"],
        correct: 0,
        explanation: "Let \\(t = x^x\\). Then \\(\\ln t = x \\ln x\\). Differentiating: \\(\\frac{1}{t} \\frac{dt}{dx} = \\ln x + 1\\), so \\(dt = x^x(1 + \\ln x) dx\\). Therefore, \\(\\int x^x(1 + \\ln x) dx = \\int dt = t + c = x^x + c\\)."
    },
    {
        q: "\\(\\int e^{f(x)} f'(x) dx = ?\\)",
        options: ["\\(\\ln|f(x)| + c\\)", "\\(f'(x) + c\\)", "\\(e^{f(x)} + c\\)", "\\(f(x)e^{f(x)} + c\\)"],
        correct: 2,
        explanation: "Let \\(u = f(x)\\), \\(du = f'(x) dx\\). Then \\(\\int e^u du = e^u + c = e^{f(x)} + c\\)."
    },
    
    // ==================== TRIGONOMETRIC INTEGRALS ====================
    {
        q: "\\(\\int \\frac{\\sin(\\tan^{-1}x)}{1+x^2} dx = ?\\)",
        options: ["\\(\\sin(\\tan^{-1}x) + c\\)", "\\(\\tan(\\sin^{-1}x) + c\\)", "\\(-\\cos(\\tan^{-1}x) + c\\)", "Not possible"],
        correct: 2,
        explanation: "Let \\(t = \\tan^{-1}x\\), then \\(dt = \\frac{dx}{1+x^2}\\). The integral becomes \\(\\int \\sin t dt = -\\cos t + c = -\\cos(\\tan^{-1}x) + c\\)."
    },
    {
        q: "\\(\\int \\frac{dx}{\\sin^2 x \\cdot \\cos^2 x} = ?\\)",
        options: ["\\(\\tan x + \\cot x + c\\)", "\\(\\tan x - \\cot x + c\\)", "\\(\\tan x \\cot x + c\\)", "\\(\\tan x - \\cot 2x + c\\)"],
        correct: 1,
        explanation: "Using \\(\\frac{1}{\\sin^2 x \\cos^2 x} = \\frac{\\sin^2 x + \\cos^2 x}{\\sin^2 x \\cos^2 x} = \\sec^2 x + \\csc^2 x\\). Integrating gives \\(\\tan x - \\cot x + c\\)."
    },
];