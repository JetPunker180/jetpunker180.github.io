window.questions = [
    // ==================== BASIC CONCEPTS - ORDER, DEGREE, LINEARITY ====================
    {
        q: "An equation involving the derivatives of dependent variables w.r.t one independent variable, is called:",
        options: [
            "Ordinary differential equation",
            "Partial differential equation",
            "Integral equation",
            "Partial integral-differential equation"
        ],
        correct: 0,
        explanation: "An ordinary differential equation (ODE) involves derivatives of dependent variables with respect to a single independent variable. A partial differential equation involves derivatives with respect to multiple independent variables."
    },
    {
        q: "An ordinary differential equation has:",
        options: [
            "Only one dependent and one independent variables",
            "One dependent and more than one independent variables",
            "One independent and one or more dependent variables",
            "More than one independent and dependent variables"
        ],
        correct: 0,
        explanation: "An ordinary differential equation (ODE) involves derivatives of dependent variables with respect to a single independent variable. It typically has one dependent variable and one independent variable."
    },
    {
        q: "The order of a differential equation is always:",
        options: [
            "Natural number",
            "Whole number",
            "Positive integer",
            "Undefined"
        ],
        correct: 2,
        explanation: "The order of a differential equation is the highest order derivative present in the equation. It is always a positive integer (1, 2, 3, ...)."
    },
    {
        q: "Power of the highest derivative appearing in a differential equation is called its:",
        options: ["Degree", "Order", "Power", "Index"],
        correct: 0,
        explanation: "The degree of a differential equation is defined as the power (exponent) of the highest order derivative, provided the equation is a polynomial in its derivatives."
    },
    {
        q: "Degree of the equation \\(\\left(\\frac{dy}{dx}\\right)^5 + \\left(\\frac{d^2 y}{dx^2}\\right)^2 + y = 3\\) is:",
        options: ["5", "2", "3", "1"],
        correct: 1,
        explanation: "The degree of a differential equation is the power of the highest order derivative when the equation is expressed as a polynomial in its derivatives. Here, the highest order derivative is \\(\\frac{d^2 y}{dx^2}\\) (order 2), and its power is 2. Therefore, the degree is 2."
    },
    {
        q: "A differential equation is linear if:",
        options: [
            "the dependent variable and all of its derivatives occur to the first degree",
            "there is no term involving the product of the dependent variable and its derivatives or product of derivatives",
            "there is no term involving the transcendental function of derivatives",
            "All of the above"
        ],
        correct: 3,
        explanation: "A linear differential equation must satisfy all three conditions: (1) dependent variable and its derivatives appear to the first degree only, (2) no products of the dependent variable and its derivatives, and (3) no transcendental functions (like sin, cos, exp) of the dependent variable or its derivatives."
    },
    
    // ==================== LINEAR VS NON-LINEAR IDENTIFICATION ====================
    {
        q: "The differential equation \\(2\\frac{dy}{dx} + x^2y = x + 2\\) is:",
        options: [
            "Linear",
            "Non-linear",
            "Linear with fixed constant",
            "Undetermined to be linear or non-linear"
        ],
        correct: 0,
        explanation: "The equation can be written as \\(\\frac{dy}{dx} + \\frac{x^2}{2}y = \\frac{x}{2} + 1\\). This is of the form \\(\\frac{dy}{dx} + P(x)y = Q(x)\\), which is the standard form of a first-order linear differential equation."
    },
    {
        q: "Which of the following ordinary differential equation is non-linear?",
        options: [
            "\\(\\frac{d^2y}{dx^2} + 2x\\frac{dy}{dx} + y = 3\\)",
            "\\(\\frac{d^2y}{dx^2} + 4y\\left(\\frac{dy}{dx}\\right)^2 + 2y = \\cos x\\)",
            "\\(\\frac{dy}{dt} = -32\\)",
            "\\(\\frac{d^2y}{dx^2} + 3\\frac{dy}{dx} + 11y = 3x\\)"
        ],
        correct: 1,
        explanation: "A differential equation is non-linear if it contains terms involving products of the dependent variable and its derivatives, or if the derivative has a power other than 1. Option (b) contains the term \\(4y\\left(\\frac{dy}{dx}\\right)^2\\), which is a product of y and the square of its derivative, making it non-linear. The other options are linear differential equations."
    },
    {
        q: "The differential equation \\(a dy + b \\sin x dx = 0\\) is:",
        options: [
            "Linear & Separable D.E.",
            "Homogeneous D.E.",
            "Separable D.E.",
            "Non-separable D.E."
        ],
        correct: 0,
        explanation: "The equation can be rewritten as \\(dy + \\frac{b}{a} \\sin x dx = 0\\). This can be separated as \\(dy = -\\frac{b}{a} \\sin x dx\\), so it is separable. Also, it is linear because it can be written in the form \\(\\frac{dy}{dx} + P(x)y = Q(x)\\) with \\(P(x) = 0\\). Therefore, it is both linear and separable."
    },
    {
        q: "The differential equation \\(\\frac{d^2 y}{dx^2} + 3y = x^2 y\\) is:",
        options: [
            "Separable and linear",
            "Separable but not linear",
            "Linear but not separable",
            "Neither separable nor linear"
        ],
        correct: 2,
        explanation: "The equation can be rewritten as \\(\\frac{d^2 y}{dx^2} + 3y - x^2 y = 0 \\Rightarrow \\frac{d^2 y}{dx^2} + (3 - x^2)y = 0\\). This is linear because y and its derivatives appear to the first degree and no products of y and its derivatives. However, it is not separable because it cannot be written as a product of a function of x and a function of y."
    },
    {
        q: "The differential equation \\(e^{x} \\frac{dy}{dx} + 3y = x^2 y\\) is:",
        options: [
            "Separable but not linear",
            "Linear but not separable",
            "Separable and linear",
            "Neither separable nor linear"
        ],
        correct: 1,
        explanation: "The equation can be rewritten as \\(e^{x} \\frac{dy}{dx} + 3y - x^2 y = 0 \\Rightarrow e^{x} \\frac{dy}{dx} + (3 - x^2)y = 0\\). This is linear because y and its derivative appear to the first degree. However, it is not separable because it cannot be written as \\(f(y)dy = g(x)dx\\) due to the term \\((3 - x^2)y\\) mixing x and y."
    },
    {
        q: "The differential equation \\(x \\frac{dy}{dx} = x + y\\) is:",
        options: [
            "Non-linear",
            "Linear",
            "Homogeneous",
            "None of the above"
        ],
        correct: 2,
        explanation: "The equation can be written as \\(\\frac{dy}{dx} = 1 + \\frac{y}{x}\\). This is a homogeneous differential equation because the right-hand side is a function of \\(y/x\\). It is also linear (can be written as \\(x\\frac{dy}{dx} - y = x\\)), but the key property here is that it is homogeneous."
    },
    
    // ==================== FORMATION OF DIFFERENTIAL EQUATIONS ====================
    {
        q: "Differential equation of the curve \\(y = a \\sin(x - b)\\) is:",
        options: [
            "\\(\\frac{d^2 y}{dx^2} - y = 0\\)",
            "\\(\\frac{dy}{dx} = \\cos x = 0\\)",
            "\\(\\frac{d^2 y}{dx^2} + y = 0\\)",
            "None of these"
        ],
        correct: 2,
        explanation: "Given \\(y = a \\sin(x - b)\\). Differentiating: \\(\\frac{dy}{dx} = a \\cos(x - b)\\). Differentiating again: \\(\\frac{d^2 y}{dx^2} = -a \\sin(x - b) = -y\\). Therefore, \\(\\frac{d^2 y}{dx^2} + y = 0\\)."
    },
    {
        q: "The differential equation of the family of parabolas having vertex at the origin and focus at \\((a, 0)\\) is:",
        options: [
            "\\(x\\,dx - 2y\\,dy = 0\\)",
            "\\(y\\,dx + 2x\\,dy = 0\\)",
            "\\(y\\,dx - 2x\\,dy = 0\\)",
            "\\(x\\,dx + 2y\\,dy = 0\\)"
        ],
        correct: 2,
        explanation: "The equation of parabola with vertex at origin and focus at \\((a,0)\\) is \\(y^2 = 4ax\\). Differentiating: \\(2y \\frac{dy}{dx} = 4a\\). From original equation, \\(4a = \\frac{y^2}{x}\\). Substituting: \\(2y \\frac{dy}{dx} = \\frac{y^2}{x} \\Rightarrow 2x \\frac{dy}{dx} = y \\Rightarrow y\\,dx - 2x\\,dy = 0\\)."
    },
    
    // ==================== SOLUTIONS OF DIFFERENTIAL EQUATIONS ====================
    {
        q: "General solution of the differential equation \\(y' = y \\sec x\\) is:",
        options: [
            "\\(y = C \\sec x \\tan x\\)",
            "\\(y = C (\\sec x - \\tan x)\\)",
            "\\(y = C \\frac{\\sec x}{\\tan x}\\)",
            "\\(y = C (\\sec x + \\tan x)\\)"
        ],
        correct: 3,
        explanation: "The equation is separable: \\(\\frac{dy}{y} = \\sec x \\, dx\\). Integrating: \\(\\ln|y| = \\ln|\\sec x + \\tan x| + C\\). Therefore, \\(y = C(\\sec x + \\tan x)\\)."
    },
    {
        q: "General solution of the differential equation \\(\\frac{d^2 y}{dx^2} = 1\\) is:",
        options: [
            "\\(y = x^2 + c_1 x + c_2\\)",
            "\\(y = \\frac{1}{2}x^2 + c_1 x + c_2\\)",
            "\\(y = x^2 + c_1 x^{1/2} + c_2\\)",
            "\\(y = x^2 + c_1 x^{1/2} + c_2\\)"
        ],
        correct: 1,
        explanation: "Integrating once: \\(\\frac{dy}{dx} = x + c_1\\). Integrating again: \\(y = \\frac{1}{2}x^2 + c_1 x + c_2\\)."
    },
    {
        q: "General solution of the differential equation \\(\\frac{dy}{dx} = e^{-x-y}\\) is:",
        options: [
            "\\(e^x + e^y = C\\)",
            "\\(e^x - e^y = C\\)",
            "\\(e^y + e^{-x} = C\\)",
            "\\(e^x + e^{-y} = C\\)"
        ],
        correct: 2,
        explanation: "The equation can be written as \\(\\frac{dy}{dx} = e^{-x}e^{-y}\\). Separating variables: \\(e^y dy = e^{-x} dx\\). Integrating: \\(e^y = -e^{-x} + C \\Rightarrow e^y + e^{-x} = C\\)."
    },
    {
        q: "General solution of the differential equation \\(\\sec^2 x \\tan y \\, dx + \\sec^2 y \\tan x \\, dy = 0\\) is:",
        options: [
            "\\(\\tan x \\cdot \\tan y = c\\)",
            "\\(\\tan x + \\tan y = c\\)",
            "\\(\\tan x - \\tan y = c\\)",
            "\\(\\tan x / \\tan y = c\\)"
        ],
        correct: 0,
        explanation: "Separating variables: \\(\\frac{\\sec^2 x}{\\tan x} dx + \\frac{\\sec^2 y}{\\tan y} dy = 0\\). Integrating: \\(\\ln|\\tan x| + \\ln|\\tan y| = \\ln|C| \\Rightarrow \\ln|\\tan x \\tan y| = \\ln|C| \\Rightarrow \\tan x \\tan y = C\\)."
    },
    
    // ==================== INITIAL VALUE PROBLEMS ====================
    {
        q: "Slope of the tangent at every point of a curve is \\((x+y)\\). If the curve passes through origin, its equation is:",
        options: [
            "\\(y = e^x - x - 1\\)",
            "\\(y = -e^x + x + 1\\)",
            "\\(y = x\\)",
            "\\(y = 2e^x + x - 2\\)"
        ],
        correct: 0,
        explanation: "We have \\(\\frac{dy}{dx} = x + y\\). This is a linear differential equation: \\(\\frac{dy}{dx} - y = x\\). Integrating factor: \\(e^{-x}\\). Solution: \\(ye^{-x} = \\int x e^{-x} dx = -xe^{-x} - e^{-x} + C\\). So \\(y = -x - 1 + Ce^{x}\\). Using \\(y(0)=0\\): \\(0 = -0 - 1 + C \\Rightarrow C = 1\\). Therefore, \\(y = -x - 1 + e^{x} = e^x - x - 1\\)."
    },
    {
        q: "Solution of the initial value problem \\(\\frac{dy}{dx} = \\frac{1 - x}{y}, \\, y(-1) = 1\\) is defined for:",
        options: [
            "\\(x < 0\\)",
            "\\(x > 0\\)",
            "\\(|x| < 5\\)",
            "All real x"
        ],
        correct: 2,
        explanation: "Solving: \\(y dy = (1-x) dx \\Rightarrow \\frac{y^2}{2} = x - \\frac{x^2}{2} + C \\Rightarrow y^2 = 2x - x^2 + 2C\\). Using \\(y(-1)=1\\): \\(1 = -2 - 1 + 2C \\Rightarrow 2C = 4 \\Rightarrow C = 2\\). So \\(y^2 = 2x - x^2 + 4 = 5 - (x-1)^2\\). For real y, we need \\(5 - (x-1)^2 \\ge 0 \\Rightarrow (x-1)^2 \\le 5 \\Rightarrow |x-1| \\le \\sqrt{5} \\approx 2.236\\). This interval is contained in \\(|x| < 5\\), so option (c) is correct."
    },
    
    // ==================== ORTHOGONAL TRAJECTORIES ====================
    {
        q: "For \\(y = x^2 + c\\), the equation of orthogonal trajectories is:",
        options: [
            "\\(2y = \\ln\\left(\\frac{c}{\\sqrt{x}}\\right)\\)",
            "\\(y = \\ln\\left(c\\sqrt{x}\\right)\\)",
            "\\(y = \\ln\\left(\\frac{c}{\\sqrt{x}}\\right)\\)",
            "\\(y = \\ln\\left(\\frac{\\sqrt{x}}{c}\\right)\\)"
        ],
        correct: 2,
        explanation: "Given \\(y = x^2 + c\\), differentiate: \\(\\frac{dy}{dx} = 2x\\). For orthogonal trajectories, replace \\(\\frac{dy}{dx}\\) with \\(-\\frac{dx}{dy}\\): \\(-\\frac{dx}{dy} = 2x \\Rightarrow \\frac{dx}{dy} = -2x \\Rightarrow \\frac{dx}{x} = -2 dy\\). Integrating: \\(\\ln|x| = -2y + C \\Rightarrow 2y = -\\ln|x| + C \\Rightarrow y = \\ln\\left(\\frac{c}{\\sqrt{x}}\\right)\\)."
    },
    
    // ==================== HOMOGENEOUS FUNCTIONS AND EULER'S THEOREM ====================
    {
        q: "\\(f(x, y)\\) is a homogeneous function of degree n, if:",
        options: [
            "\\(f(x, y) = y^n g(y/x)\\)",
            "\\(f(x, y) = x^n g(y/x)\\)",
            "\\(f(x, y) = x^n g(y/x)\\)",
            "All of these"
        ],
        correct: 1,
        explanation: "A function \\(f(x,y)\\) is homogeneous of degree \\(n\\) if it can be written as \\(f(x,y) = x^n g(y/x)\\) or equivalently as \\(f(x,y) = y^n h(x/y)\\)."
    },
    {
        q: "Degree of the homogeneous function \\(f(x, y) = \\frac{\\sqrt{x} + \\sqrt{y}}{x + y}\\) is:",
        options: [
            "1",
            "Zero",
            "\\(\\frac{1}{2}\\)",
            "\\(-\\frac{1}{2}\\)"
        ],
        correct: 3,
        explanation: "To check homogeneity, replace \\(x\\) with \\(\\lambda x\\) and \\(y\\) with \\(\\lambda y\\): \\(f(\\lambda x, \\lambda y) = \\frac{\\sqrt{\\lambda x} + \\sqrt{\\lambda y}}{\\lambda x + \\lambda y} = \\frac{\\sqrt{\\lambda}(\\sqrt{x} + \\sqrt{y})}{\\lambda(x + y)} = \\lambda^{-1/2} \\cdot \\frac{\\sqrt{x} + \\sqrt{y}}{x + y} = \\lambda^{-1/2} f(x, y)\\). Therefore, the function is homogeneous of degree \\(-\\frac{1}{2}\\)."
    },
    {
        q: "If \\(z = xy f \\left( \\frac{y}{x} \\right)\\), then \\(x \\frac{\\partial z}{\\partial x} + y \\frac{\\partial z}{\\partial y} = ?\\)",
        options: [
            "\\(\\frac{1}{2}z\\)",
            "\\(2z\\)",
            "\\(z\\)",
            "\\(-2z\\)"
        ],
        correct: 1,
        explanation: "By Euler's theorem for homogeneous functions, if \\(z\\) is homogeneous of degree \\(n\\), then \\(x \\frac{\\partial z}{\\partial x} + y \\frac{\\partial z}{\\partial y} = nz\\). Here, \\(z = xy f(y/x)\\). The term \\(xy\\) is of degree 2, and \\(f(y/x)\\) is of degree 0, so overall \\(z\\) is homogeneous of degree 2. Therefore, \\(x \\frac{\\partial z}{\\partial x} + y \\frac{\\partial z}{\\partial y} = 2z\\)."
    },
    {
        q: "If \\(z = \\frac{\\sqrt{x} + \\sqrt{y}}{x + y}\\), then \\(x \\frac{\\partial z}{\\partial x} + y \\frac{\\partial z}{\\partial y} = ?\\)",
        options: [
            "0",
            "\\(z\\)",
            "\\(\\frac{1}{2}z\\)",
            "\\(-\\frac{1}{2}z\\)"
        ],
        correct: 3,
        explanation: "First check homogeneity: \\(z(tx, ty) = \\frac{\\sqrt{tx} + \\sqrt{ty}}{tx + ty} = \\frac{\\sqrt{t}(\\sqrt{x} + \\sqrt{y})}{t(x + y)} = t^{-1/2} \\cdot \\frac{\\sqrt{x} + \\sqrt{y}}{x + y} = t^{-1/2} z(x,y)\\). So \\(z\\) is homogeneous of degree \\(-1/2\\). By Euler's theorem, \\(x \\frac{\\partial z}{\\partial x} + y \\frac{\\partial z}{\\partial y} = \\left(-\\frac{1}{2}\\right)z = -\\frac{1}{2}z\\)."
    },
    {
        q: "If \\(u = \\sin^{-1} \\left( \\frac{x^2 + y^2}{x + y} \\right)\\), then \\(x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = ?\\)",
        options: [
            "\\(\\tan u\\)",
            "\\(u\\)",
            "\\(\\cot u\\)",
            "\\(-\\frac{1}{2}u\\)"
        ],
        correct: 0,
        explanation: "Let \\(v = \\sin u = \\frac{x^2 + y^2}{x + y}\\). Check homogeneity of \\(v\\): \\(v(tx, ty) = \\frac{t^2(x^2 + y^2)}{t(x + y)} = t \\cdot \\frac{x^2 + y^2}{x + y} = t v(x,y)\\). So \\(v\\) is homogeneous of degree 1. By Euler's theorem, \\(x \\frac{\\partial v}{\\partial x} + y \\frac{\\partial v}{\\partial y} = 1 \\cdot v = v\\). Now \\(\\frac{\\partial v}{\\partial x} = \\cos u \\frac{\\partial u}{\\partial x}\\) and similarly for \\(y\\). Therefore, \\(x \\cos u \\frac{\\partial u}{\\partial x} + y \\cos u \\frac{\\partial u}{\\partial y} = v = \\sin u\\). Dividing by \\(\\cos u\\): \\(x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = \\tan u\\)."
    }
];