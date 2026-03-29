window.questions = [
    {
        q: "Homogeneous equation of degree two has parallel lines only, when:",
        options: [
            "\\(a = -b, h^2 - ab = 0\\)",
            "\\(a = -b, h^2 - ab \\neq 0\\)",
            "\\(a = b, h^2 - ab \\neq 0\\)",
            "\\(a \\neq b, h^2 - ab = 0\\)"
        ],
        correct: 0,
        explanation: "The angle \\(\\theta\\) between the lines represented by \\(ax^2 + 2hxy + by^2 = 0\\) is given by \\(\\tan \\theta = \\frac{2\\sqrt{h^2 - ab}}{a + b}\\). For the lines to be parallel, \\(\\theta = 0\\), so \\(\\tan \\theta = 0 \\Rightarrow \\sqrt{h^2 - ab} = 0 \\Rightarrow h^2 - ab = 0\\). Also, for parallel lines, the condition \\(a + b = 0\\) i.e., \\(a = -b\\) must hold."
    },
    {
        q: "The slope of a line is 2, then slope of line perpendicular to this line is equal to:",
        options: ["-2", "\\(-\\frac{1}{2}\\)", "2", "0"],
        correct: 1,
        explanation: "If two lines are perpendicular, the product of their slopes is -1. Given \\(m_1 = 2\\), then \\(m_2 = -1/m_1 = -\\frac{1}{2}\\)."
    },
    {
        q: "Which pair of lines have a single point of intersection?",
        options: [
            "\\(x + y = 1, 2x + 2y = 2\\)",
            "\\(x + y = 1, x + y = 0\\)",
            "\\(x + y = 1, x - y = 0\\)",
            "None of the above"
        ],
        correct: 2,
        explanation: "The lines in (a) are coincident (same line), in (b) are parallel (no intersection), and in (c) are perpendicular and intersect at a single point \\((\\frac{1}{2}, \\frac{1}{2})\\)."
    },
    {
        q: "The line \\(ax + by + c = 0\\), will be vertical when:",
        options: [
            "\\(b = 0\\)",
            "\\(a = 0\\)",
            "\\(a \\neq 0, b = 0\\)",
            "\\(a \\neq 0, b \\neq 0\\)"
        ],
        correct: 2,
        explanation: "If \\(a \\neq 0\\) and \\(b = 0\\), the equation reduces to \\(ax + c = 0 \\Rightarrow x = -c/a\\), which represents a vertical line."
    },
    {
        q: "The shortest distance of the line \\(ax + by + c = 0\\) from the origin is:",
        options: [
            "\\(\\frac{|ax_1 + by_1 + c|}{\\sqrt{a^2 + b^2}}\\)",
            "\\(\\frac{|ax + by + c|}{\\sqrt{a^2 + b^2}}\\)",
            "\\(\\frac{|c|}{\\sqrt{a^2 + b^2}}\\)",
            "\\(\\sqrt{a^2 + b^2}\\)"
        ],
        correct: 2,
        explanation: "The distance from origin \\((0,0)\\) to the line \\(ax + by + c = 0\\) is \\(\\frac{|a(0) + b(0) + c|}{\\sqrt{a^2 + b^2}} = \\frac{|c|}{\\sqrt{a^2 + b^2}}\\)."
    },
    {
        q: "Equation of line parallel to negative y-axis at a distance \\(b\\) units to the left of y-axis is given by:",
        options: ["\\(x = b\\)", "\\(x = -b\\)", "\\(y + b = 0\\)", "\\(y = -b\\)"],
        correct: 1,
        explanation: "A line parallel to y-axis is of the form \\(x = \\text{constant}\\). To the left of y-axis means negative x-direction, so \\(x = -b\\)."
    },
    {
        q: "The point \\(P(x_1, y_1)\\) lies above the line \\(ax + by + c = 0\\), if:",
        options: [
            "\\(ax_1 + by_1 + c > 0, b > 0\\)",
            "\\(ax_1 + by_1 + c < 0, b > 0\\)",
            "\\(ax_1 + by_1 + c > 0, b < 0\\)",
            "\\(ax_1 + by_1 + c < 0, b > 0\\)"
        ],
        correct: 0,
        explanation: "For a line with \\(b > 0\\), points above the line satisfy \\(ax + by + c > 0\\)."
    },
    {
        q: "The angle of the tangent line \\(x - y = 0\\) to a curve \\(y = f(x)\\) is:",
        options: ["30°", "45°", "60°", "0°"],
        correct: 1,
        explanation: "The line is \\(x - y = 0 \\Rightarrow y = x\\). Slope \\(m = 1\\), so \\(\\tan \\theta = 1 \\Rightarrow \\theta = 45°\\)."
    },
    {
        q: "Find the equation of the line parallel to the line \\(x - 5y = 0\\) through the point \\((1, 2)\\).",
        options: ["\\(x - 5y + 9 = 0\\)", "\\(x - 5y - 9 = 0\\)", "\\(5x - y - 3 = 0\\)", "\\(x + 5y - 11 = 0\\)"],
        correct: 0,
        explanation: "The line \\(x - 5y = 0\\) has slope \\(\\frac{1}{5}\\). Parallel lines have same slope. Through \\((1,2)\\): \\(y - 2 = \\frac{1}{5}(x - 1) \\Rightarrow 5y - 10 = x - 1 \\Rightarrow x - 5y + 9 = 0\\)."
    },
    {
        q: "If \\(\\alpha\\) is the inclination of a line with positive x-axis, what will be the slope of the line?",
        options: ["\\(\\sin \\alpha\\)", "\\(\\tan \\alpha\\)", "\\(\\cos \\alpha\\)", "None of these"],
        correct: 1,
        explanation: "The slope of a line is defined as \\(\\tan\\) of its inclination angle: \\(m = \\tan \\alpha\\)."
    },
    {
        q: "If the slope of line AB is \\(m_1\\) and slope of line CD is \\(m_2\\), they would be perpendicular if:",
        options: [
            "\\(1 - m_1 m_2 = 0\\)",
            "\\(1 + m_1 m_2 = 0\\)",
            "\\(m_1 m_2 = 1\\)",
            "\\(1 + \\frac{m_1}{m_2} = 0\\)"
        ],
        correct: 1,
        explanation: "Two lines are perpendicular if \\(m_1 m_2 = -1\\), which is equivalent to \\(1 + m_1 m_2 = 0\\)."
    },
    {
        q: "The points (1, 2), (4, 6), (8, 5) and (a, b) represent the vertices of a parallelogram. Find the value of a and b.",
        options: ["(2, 3)", "(3, 2)", "(5, 1)", "(1, 5)"],
        correct: 2,
        explanation: "In a parallelogram, diagonals bisect each other. Midpoint of AC = \\((\\frac{1+8}{2}, \\frac{2+5}{2}) = (4.5, 3.5)\\). Midpoint of BD = \\((\\frac{4+a}{2}, \\frac{6+b}{2})\\). Equating: \\(\\frac{4+a}{2} = 4.5 \\Rightarrow a = 5\\); \\(\\frac{6+b}{2} = 3.5 \\Rightarrow b = 1\\)."
    },
    {
        q: "Find the distance between the points (2, -2) and (2, 3):",
        options: ["1", "5", "-1", "2"],
        correct: 1,
        explanation: "Distance = \\(\\sqrt{(2-2)^2 + (3-(-2))^2} = \\sqrt{0 + 25} = 5\\)."
    },
    {
        q: "Which of the following point lies on the line \\(3x - 4y = 11\\)?",
        options: ["(2, -1)", "(3, 5)", "(5, 1)", "None of these"],
        correct: 2,
        explanation: "Substitute \\((5,1)\\): \\(3(5) - 4(1) = 15 - 4 = 11\\), so it lies on the line."
    },
    {
        q: "Every homogenous second-degree equation \\(ax^2 + 2hxy + by^2 = 0\\) represents a distinct pair of lines through the origin if and only if:",
        options: ["\\(a + b = 0\\)", "\\(h^2 < ab\\)", "\\(h^2 > ab\\)", "\\(h^2 = ab\\)"],
        correct: 2,
        explanation: "For a pair of distinct lines through origin, we need \\(h^2 > ab\\). If \\(h^2 = ab\\), lines are coincident; if \\(h^2 < ab\\), lines are imaginary."
    },
    {
        q: "Which of the following can represent the slope of a line whose one point lies on negative x-axis and one point lies on negative y-axis?",
        options: ["\\(\\frac{y}{x}\\)", "\\(-\\frac{y}{x}\\)", "\\(\\frac{x}{y}\\)", "\\(-\\frac{x}{y}\\)"],
        correct: 1,
        explanation: "If a line passes through points on negative axes, both coordinates are negative. Let one point be \\((a,0)\\) with \\(a<0\\) and another \\((0,b)\\) with \\(b<0\\), slope = \\((b-0)/(0-a) = b/(-a)\\). Since \\(b<0\\) and \\(-a>0\\), slope is negative. So slope = \\(-\\frac{y}{x}\\)."
    },
    {
        q: "The coordinates of the midpoint of the line segment whose end points are \\(P_1(-10, 4)\\) and \\(P_2(7, -5)\\) are:",
        options: ["\\((4, -\\frac{1}{2})\\)", "\\((-\\frac{3}{2}, -\\frac{1}{2})\\)", "\\((3, 2)\\)", "\\((\\frac{3}{2}, \\frac{1}{2})\\)"],
        correct: 1,
        explanation: "Midpoint = \\(\\left(\\frac{-10+7}{2}, \\frac{4+(-5)}{2}\\right) = \\left(-\\frac{3}{2}, -\\frac{1}{2}\\right)\\)."
    },
    {
        q: "If \\((x, y)\\) are the coordinates of a point 'P', then the first component of the ordered pair is called:",
        options: ["Abscissa", "y-coordinate", "Ordinate", "xy-coordinate"],
        correct: 0,
        explanation: "In an ordered pair \\((x, y)\\), \\(x\\) is called the abscissa and \\(y\\) is called the ordinate."
    },
    {
        q: "If the point \\(P_1\\) and \\(P_2\\) have the coordinates \\(x_1 = 7, x_2 = -9\\), then \\(|P_1P_2| = ?\\)",
        options: ["-2", "16", "2", "-16"],
        correct: 1,
        explanation: "Distance = \\(|x_2 - x_1| = |-9 - 7| = |-16| = 16\\)."
    },
    {
        q: "Two lines with slope \\(m_1\\) and \\(m_2\\) respectively are parallel if:",
        options: [
            "\\(m_1 + m_2 = 0\\)",
            "\\(m_1 - m_2 = 0\\)",
            "\\(m_1 m_2 = 1\\)",
            "\\(m_1 = m_2\\)"
        ],
        correct: 1,
        explanation: "Two lines are parallel if their slopes are equal, i.e., \\(m_1 = m_2\\), which can be written as \\(m_1 - m_2 = 0\\)."
    },
    {
        q: "The distance of a point \\((-2, 8)\\) from the line \\(4x + 3y - 11 = 0\\) is:",
        options: ["-6", "1", "3", "5"],
        correct: 1,
        explanation: "Distance = \\(\\frac{|4(-2) + 3(8) - 11|}{\\sqrt{4^2+3^2}} = \\frac{|-8 + 24 - 11|}{5} = \\frac{|5|}{5} = 1\\)."
    },
    {
        q: "If \\(m_1\\) and \\(m_2\\) are the slopes of two lines \\(L_1\\) and \\(L_2\\) respectively, then the angle from \\(L_1\\) to \\(L_2\\) is given by:",
        options: [
            "\\(\\tan \\theta = \\frac{m_2 - m_1}{1 + m_1 m_2}\\)",
            "\\(\\tan \\theta = \\frac{m_2 + m_1}{1 - m_1 m_2}\\)",
            "\\(\\cot \\theta = \\frac{m_2 - m_1}{1 + m_1 m_2}\\)",
            "\\(\\cot \\theta = \\frac{m_2 + m_1}{1 - m_1 m_2}\\)"
        ],
        correct: 0,
        explanation: "The formula for the angle between two lines is \\(\\tan \\theta = \\left|\\frac{m_2 - m_1}{1 + m_1 m_2}\\right|\\)."
    },
    {
        q: "Three non-parallel lines \\(a_1x + b_1y + c_1 = 0\\), \\(a_2x + b_2y + c_2 = 0\\), and \\(a_3x + b_3y + c_3 = 0\\) are concurrent if:",
        options: [
            "The determinant of the coefficient matrix is 0",
            "The determinant of the coefficient matrix is 1",
            "The determinant of the coefficient matrix is -1",
            "The determinant of the coefficient matrix is 2"
        ],
        correct: 0,
        explanation: "Three lines are concurrent if the determinant of the coefficient matrix is zero: \\(\\begin{vmatrix} a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\\\ a_3 & b_3 & c_3 \\end{vmatrix} = 0\\)."
    },
    {
        q: "Straight lines represented by \\(ax^2 + 2hxy + by^2 = 0\\) are perpendicular if:",
        options: [
            "\\(h^2 = ab\\)",
            "\\(ab < h^2\\)",
            "\\(h^2 < ab\\)",
            "\\(a + b = 0\\)"
        ],
        correct: 3,
        explanation: "The angle between the lines is given by \\(\\tan \\theta = \\frac{2\\sqrt{h^2 - ab}}{a + b}\\). For perpendicular lines, \\(\\theta = 90°\\), which occurs when \\(a + b = 0\\) (denominator zero, \\(\\tan \\theta \\to \\infty\\))."
    },
    {
        q: "The joint equation of the pair of lines passing through the origin and perpendicular to the lines represented by \\(5x^2 + 2xy - 3y^2 = 0\\) is:",
        options: [
            "\\(3x^2 + 2xy - 5y^2 = 0\\)",
            "\\(3x^2 - 2xy + 5y^2 = 0\\)",
            "\\(-3x^2 - 2xy + 5y^2 = 0\\)",
            "None of these"
        ],
        correct: 0,
        explanation: "For a pair of lines \\(ax^2 + 2hxy + by^2 = 0\\), perpendicular lines through origin are given by \\(bx^2 - 2hxy + ay^2 = 0\\). Here \\(a = 5\\), \\(2h = 2 \\Rightarrow h = 1\\), \\(b = -3\\). Substituting: \\(-3x^2 - 2(1)xy + 5y^2 = -3x^2 - 2xy + 5y^2 = 0\\). Multiply by -1: \\(3x^2 + 2xy - 5y^2 = 0\\)."
    },
    {
        q: "The joint equation of the pair of lines passing through the origin and perpendicular to the lines \\(x^2 + xy - y^2 = 0\\) is:",
        options: [
            "\\(x^2 + xy - y^2 = 0\\)",
            "\\(x^2 - xy - y^2 = 0\\)",
            "\\(x^2 + xy + y^2 = 0\\)",
            "\\(-x^2 + xy + y^2 = 0\\)"
        ],
        correct: 0,
        explanation: "Given \\(a = 1\\), \\(2h = 1 \\Rightarrow h = \\frac{1}{2}\\), \\(b = -1\\). Perpendicular pair: \\(bx^2 - 2hxy + ay^2 = -1x^2 - 2(\\frac{1}{2})xy + 1y^2 = -x^2 - xy + y^2 = 0\\). Multiply by -1: \\(x^2 + xy - y^2 = 0\\)."
    },
    {
        q: "The lines represented by \\(3x^2 + 7xy - 3y^2 = 0\\) are:",
        options: ["Parallel", "Perpendicular", "Coincident", "None of these"],
        correct: 1,
        explanation: "For perpendicular lines, \\(a + b = 0\\). Here \\(a = 3\\), \\(b = -3\\), so \\(a + b = 3 + (-3) = 0\\). Therefore, the lines are perpendicular."
    },
    {
        q: "If the lines represented by \\(kx^2 - 4xy - 5y^2 = 0\\) are perpendicular, then \\(k = ?\\)",
        options: ["4", "-4", "5", "-5"],
        correct: 2,
        explanation: "For perpendicular lines, \\(a + b = 0\\). Here \\(a = k\\), \\(b = -5\\), so \\(k + (-5) = 0 \\Rightarrow k = 5\\)."
    },
    {
        q: "Four quarter circles are drawn in a square of side 2 units as shown in the figure. Find the area of the shaded region (the area inside the square but outside the four quarter circles).\n\n<svg width='300' height='300' viewBox='0 0 300 300' style='display:block; margin:20px auto; background:#f8f9fa; border:2px solid #333; border-radius:8px;'>\n  <!-- Square outline -->\n  <rect x='50' y='50' width='200' height='200' fill='#e6f7ff' stroke='#333' stroke-width='3'/>\n  \n  <!-- Four quarter circles (white) -->\n  <path d='M50 50 A100 100 0 0 1 150 50 L50 50 Z' fill='white' stroke='#333' stroke-width='2'/>\n  <path d='M250 50 A100 100 0 0 0 150 50 L250 50 Z' fill='white' stroke='#333' stroke-width='2'/>\n  <path d='M50 250 A100 100 0 0 0 150 250 L50 250 Z' fill='white' stroke='#333' stroke-width='2'/>\n  <path d='M250 250 A100 100 0 0 1 150 250 L250 250 Z' fill='white' stroke='#333' stroke-width='2'/>\n  \n  <!-- Center lines -->\n  <line x1='50' y1='150' x2='250' y2='150' stroke='#666' stroke-dasharray='5,5' stroke-width='2'/>\n  <line x1='150' y1='50' x2='150' y2='250' stroke='#666' stroke-dasharray='5,5' stroke-width='2'/>\n  \n  <!-- Labels -->\n  <text x='150' y='280' font-size='16' text-anchor='middle' fill='#333'>2 units</text>\n  <text x='280' y='150' font-size='16' text-anchor='left' fill='#333' dx='10'>2 units</text>\n</svg>",
        options: ["\\(4 - \\pi\\)", "\\(4 - 2\\pi\\)", "\\(\\pi - 4\\)", "\\(2\\pi - 4\\)"],
        correct: 0,
        explanation: "Square area = \\(2^2 = 4\\). Each quarter circle has radius 1, so four quarter circles make one full circle of area \\(\\pi\\). Shaded area = \\(4 - \\pi\\)."
    },
    {
        q: "Find the area of the shaded region between the outer square and inner square, where the outer square has side length \\((x + y)\\) and the inner square is formed by the curve \\(x^2 + y^2\\).\n\n<svg width='300' height='300' viewBox='0 0 300 300' style='display:block; margin:20px auto; background:#f8f9fa; border:2px solid #333; border-radius:8px;'>\n  <!-- Outer square -->\n  <rect x='50' y='50' width='200' height='200' fill='#e6f7ff' stroke='#333' stroke-width='3'/>\n  \n  <!-- Diagonal line representing x² + y² -->\n  <line x1='50' y1='250' x2='250' y2='50' stroke='#4CAF50' stroke-width='2' stroke-dasharray='5,5'/>\n  \n  <text x='150' y='280' font-size='14' text-anchor='middle' fill='#333'>Outer: (x+y)²</text>\n  <text x='150' y='30' font-size='14' text-anchor='middle' fill='#333'>Inner: x²+y²</text>\n</svg>",
        options: ["\\((x + y)^2 - (x^2 + y^2)\\)", "\\((x + y)^2 + (x^2 + y^2)\\)", "\\((x^2 + y^2) - (x + y)^2\\)", "\\(2xy\\)"],
        correct: 0,
        explanation: "The shaded area is the difference between outer and inner regions: \\((x + y)^2 - (x^2 + y^2)\\)."
    },
    {
        q: "For an equilateral triangle, if the ratio of the area of the inner triangle to the outer triangle is 1:4, and the side length of the outer triangle is 1 unit, find the area of the shaded region.\n\n<svg width='300' height='300' viewBox='0 0 300 300' style='display:block; margin:20px auto; background:#f8f9fa; border:2px solid #333; border-radius:8px;'>\n  <!-- Outer equilateral triangle -->\n  <polygon points='50,250 250,250 150,56.7' fill='#e6f7ff' stroke='#333' stroke-width='3'/>\n  \n  <!-- Inner equilateral triangle -->\n  <polygon points='100,200 200,200 150,116.7' fill='white' stroke='#ff6b6b' stroke-width='3' stroke-dasharray='5,5'/>\n  \n  <text x='150' y='270' font-size='14' text-anchor='middle' fill='#333'>Outer Triangle (side = 1)</text>\n  <text x='150' y='60' font-size='14' text-anchor='middle' fill='#333'>Inner Triangle (area = 1/4 of outer)</text>\n</svg>",
        options: ["\\(\\frac{\\sqrt{3}}{4}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{3\\sqrt{3}}{16}\\)", "\\(\\frac{3\\sqrt{3}}{8}\\)"],
        correct: 2,
        explanation: "Outer triangle area = \\(\\frac{\\sqrt{3}}{4}(1)^2 = \\frac{\\sqrt{3}}{4}\\). Inner triangle area = \\(\\frac{1}{4} \\times \\frac{\\sqrt{3}}{4} = \\frac{\\sqrt{3}}{16}\\). Shaded area = \\(\\frac{\\sqrt{3}}{4} - \\frac{\\sqrt{3}}{16} = \\frac{4\\sqrt{3}}{16} - \\frac{\\sqrt{3}}{16} = \\frac{3\\sqrt{3}}{16}\\)."
    }
];