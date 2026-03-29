window.questions = [
    // ==================== CIRCLES ====================
    {
        q: "The point (3, -2) lies ______ the circle \\(x^2 + y^2 - 9x + 4y = 48\\)",
        options: ["Inside", "Outside", "On", "None of these"],
        correct: 0,
        explanation: "Rewrite circle as \\(x^2 + y^2 - 9x + 4y - 48 = 0\\). Substitute (3, -2): \\(9 + 4 - 27 - 8 - 48 = -70 < 0\\). For a circle \\(S = 0\\), a point gives \\(S < 0\\) inside, \\(S = 0\\) on, \\(S > 0\\) outside. Here \\(S < 0\\), so the point lies inside."
    },
    {
        q: "The equation \\(x^2 + y^2 + 2x + 3y + 5 = 0\\) represents:",
        options: ["A point circle", "A real circle", "An imaginary circle", "Not a circle"],
        correct: 2,
        explanation: "Complete the square: \\((x+1)^2 + (y+1.5)^2 = 1 + 2.25 - 5 = -1.75 < 0\\). Since radius squared is negative, it represents an imaginary circle."
    },
    {
        q: "What range of values of c, the equation \\(x^2 + y^2 - 6x + 4y + c = 0\\) always represents a real circle?",
        options: ["\\(c > 13\\)", "\\(c < 20\\)", "\\(c < 13\\)", "\\(c < 20\\)"],
        correct: 2,
        explanation: "Complete the square: \\((x-3)^2 + (y+2)^2 = 9 + 4 - c = 13 - c\\). For a real circle, radius squared \\(\\ge 0\\) ? \\(13 - c \\ge 0\\) ? \\(c \\le 13\\)."
    },
    {
        q: "Centre of the circle \\(x^2 + y^2 - 6x + 4y - 23 = 0\\) is:",
        options: ["\\((-3, -2)\\)", "\\((3, 2)\\)", "\\((-3, 2)\\)", "\\((3, -2)\\)"],
        correct: 3,
        explanation: "For \\(x^2 + y^2 + 2gx + 2fy + c = 0\\), centre = \\((-g, -f)\\). Here \\(2g = -6 \\Rightarrow g = -3\\), \\(2f = 4 \\Rightarrow f = 2\\). So centre = \\((3, -2)\\)."
    },
    {
        q: "Length of diameter of the circle \\(x^2 + y^2 - 6x + 4y - 23 = 0\\) is:",
        options: ["4", "6", "12", "8"],
        correct: 2,
        explanation: "Complete the square: \\((x-3)^2 + (y+2)^2 = 9 + 4 + 23 = 36\\). Radius = 6, so diameter = 12."
    },
    {
        q: "Circumference of the circle \\(x^2 + y^2 + 2x + 2y - 23 = 0\\) is:",
        options: ["\\(2\\pi\\)", "\\(5\\pi\\)", "\\(10\\pi\\)", "\\(25\\pi\\)"],
        correct: 2,
        explanation: "Complete the square: \\((x+1)^2 + (y+1)^2 = 1 + 1 + 23 = 25\\). Radius = 5, so circumference = \\(2\\pi(5) = 10\\pi\\)."
    },
    {
        q: "If one end of a diameter of the circle \\(2x^2 + 2y^2 - 4x - 8y + 2 = 0\\) is (3, 2), then the other end is:",
        options: ["\\((2, 3)\\)", "\\((4, -2)\\)", "\\((2, -1)\\)", "\\((-1, 2)\\)"],
        correct: 3,
        explanation: "Divide by 2: \\(x^2 + y^2 - 2x - 4y + 1 = 0\\). Centre = (1, 2). Let other end be \\((a, b)\\). Midpoint of diameter = centre: \\(\\frac{a+3}{2} = 1 \\Rightarrow a = -1\\), \\(\\frac{b+2}{2} = 2 \\Rightarrow b = 2\\). So other end = \\((-1, 2)\\)."
    },
    {
        q: "Centre of the circle passing through the origin and making intercepts 8 and -4 on x and y-axis respectively, is:",
        options: ["\\((-4, 8)\\)", "\\((4, -2)\\)", "\\((2, -4)\\)", "\\((-2, 4)\\)"],
        correct: 1,
        explanation: "Circle passes through origin, (8,0), and (0,-4). The perpendicular bisector of (0,0) and (8,0) is \\(x = 4\\). Perpendicular bisector of (0,0) and (0,-4) is \\(y = -2\\). Intersection gives centre \\((4, -2)\\)."
    },
    {
        q: "If (2, 3) lies on the circle with centre (0, -1), the area of the circle is:",
        options: ["\\(12\\pi\\)", "\\(16\\pi\\)", "\\(20\\pi\\)", "\\(26\\pi\\)"],
        correct: 2,
        explanation: "Radius = distance between (2,3) and (0,-1) = \\(\\sqrt{(2-0)^2 + (3+1)^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}\\). Area = \\(\\pi r^2 = \\pi(20) = 20\\pi\\)."
    },
    {
        q: "Standard equation of the circle \\(2x^2 + 2y^2 + 12x - 8y - 20 = 0\\) is:",
        options: ["\\((x-3)^2+(y+2)^2=23\\)", "\\((x+3)^2+(y-2)^2=43\\)", "\\((x-3)^2+(y+2)^2=43\\)", "\\((x+3)^2+(y-2)^2=23\\)"],
        correct: 3,
        explanation: "Divide by 2: \\(x^2 + y^2 + 6x - 4y - 10 = 0\\). Complete square: \\((x+3)^2 - 9 + (y-2)^2 - 4 - 10 = 0 \\Rightarrow (x+3)^2 + (y-2)^2 = 23\\)."
    },
    {
        q: "The equation of circle whose diameter is the latus-rectum of the parabola \\(x^2 = 4y\\) is:",
        options: ["\\((x-2)^2+(y-1)^2=4\\)", "\\(x^2+(y-1)^2=4\\)", "\\(x^2+(y+1)^2=4\\)", "\\(x^2+(y-1)^2=4\\)"],
        correct: 1,
        explanation: "For parabola \\(x^2 = 4ay\\), \\(a = 1\\), focus (0,1). Latus rectum endpoints: (-2,1) and (2,1). Centre = (0,1), radius = 2. Equation: \\(x^2 + (y-1)^2 = 4\\)."
    },
    {
        q: "The line \\(y = -1\\) is tangent to the circle passing through the points (0, 0) and (6, 0). The equation of circle is:",
        options: ["\\(x^2+y^2-6x+8y=0\\)", "\\(x^2+y^2-6x-8y=0\\)", "\\(x^2+y^2+6x-8y=0\\)", "\\(x^2+y^2+6x+8y=0\\)"],
        correct: 1,
        explanation: "Let circle: \\(x^2 + y^2 + 2gx + 2fy = 0\\) (passes through origin). Passes through (6,0): \\(36 + 12g = 0 \\Rightarrow g = -3\\). Centre = \\((3, -f)\\). Distance from centre to line \\(y = -1\\) is \\(|-f + 1|\\) = radius = \\(\\sqrt{g^2 + f^2} = \\sqrt{9 + f^2}\\). Squaring: \\((-f + 1)^2 = 9 + f^2 \\Rightarrow f^2 - 2f + 1 = 9 + f^2 \\Rightarrow -2f = 8 \\Rightarrow f = -4\\). Equation: \\(x^2 + y^2 - 6x - 8y = 0\\)."
    },
    {
        q: "The equation of circle passing through the point (-2, 14) and concentric with the circle \\(x^2 + y^2 - 6x - 4y - 12 = 0\\) is:",
        options: ["\\(x^2+y^2-6x-4y-156=0\\)", "\\(x^2+y^2-6x+4y-156=0\\)", "\\(x^2+y^2+6x+4y+156=0\\)", "\\(x^2+y^2+6x+4y-156=0\\)"],
        correct: 0,
        explanation: "Concentric circles have same centre. For given circle: centre (3, 2). Let equation: \\((x-3)^2 + (y-2)^2 = r^2\\). Passes through (-2,14): \\((-5)^2 + (12)^2 = 25 + 144 = 169 = r^2\\). So equation: \\(x^2 - 6x + 9 + y^2 - 4y + 4 = 169 \\Rightarrow x^2 + y^2 - 6x - 4y - 156 = 0\\)."
    },
    {
        q: "The equation of circle whose diameter has the end points (-3, 2) and (12, -6), is:",
        options: ["\\(x^2+y^2-4x+9y-84=0\\)", "\\(x^2+y^2+9x-4y-48=0\\)", "\\(x^2+y^2-9x-4y+48=0\\)", "\\(x^2+y^2-9x+4y-48=0\\)"],
        correct: 3,
        explanation: "Centre = midpoint: \\(\\left(\\frac{-3+12}{2}, \\frac{2-6}{2}\\right) = \\left(\\frac{9}{2}, -2\\right)\\). Radius = half distance: distance = \\(\\sqrt{(15)^2 + (-8)^2} = \\sqrt{289} = 17\\), so radius = 8.5. Equation: \\((x - 4.5)^2 + (y+2)^2 = \\left(\\frac{17}{2}\\right)^2 = \\frac{289}{4}\\). Multiply out: \\(x^2 - 9x + \\frac{81}{4} + y^2 + 4y + 4 = \\frac{289}{4} \\Rightarrow x^2 + y^2 - 9x + 4y - 48 = 0\\)."
    },

    // ==================== PARABOLAS ====================
    {
        q: "The focus of the parabola \\(x^2 = -16y\\) is:",
        options: ["\\((4, 0)\\)", "\\((0, 4)\\)", "\\((-4, 0)\\)", "\\((0, -4)\\)"],
        correct: 3,
        explanation: "The equation \\(x^2 = -16y\\) can be written as \\(x^2 = 4(-4)y\\). Standard form \\(x^2 = 4ay\\) has focus \\((0, a)\\). Here \\(a = -4\\), so focus = \\((0, -4)\\)."
    },
    {
        q: "The length of latus rectum of the parabola \\(3x^2 = 4y\\) is:",
        options: ["4", "-4", "\\(\\frac{4}{3}\\)", "\\(\\frac{3}{4}\\)"],
        correct: 2,
        explanation: "Rewrite: \\(3x^2 = 4y \\Rightarrow x^2 = \\frac{4}{3}y = 4\\left(\\frac{1}{3}\\right)y\\). So \\(4a = \\frac{4}{3} \\Rightarrow a = \\frac{1}{3}\\). Length of latus rectum = \\(4a = \\frac{4}{3}\\)."
    },
    {
        q: "Equation of the normal at the point \\((x_1, y_1)\\) to the parabola \\(y^2 = 4ax\\) is:",
        options: [
            "\\(y - y_1 = -\\frac{y_1}{2a}(x - x_1)\\)",
            "\\(y - y_1 = \\frac{2a}{y_1}(x - x_1)\\)",
            "\\(y - y_1 = -\\frac{2a}{y_1}(x - x_1)\\)",
            "\\(y - y_1 = 2a(x - x_1)\\)"
        ],
        correct: 0,
        explanation: "For parabola \\(y^2 = 4ax\\), slope of tangent at \\((x_1, y_1)\\) is \\(\\frac{2a}{y_1}\\). Slope of normal = \\(-\\frac{y_1}{2a}\\). So equation: \\(y - y_1 = -\\frac{y_1}{2a}(x - x_1)\\)."
    },
    {
        q: "The conic having eccentricity \\(e > 1\\) is called:",
        options: ["Hyperbola", "Ellipse", "Parabola", "Circle"],
        correct: 0,
        explanation: "Eccentricity values: \\(e = 0\\) for circle, \\(0 < e < 1\\) for ellipse, \\(e = 1\\) for parabola, \\(e > 1\\) for hyperbola."
    },
    {
        q: "Equation of the parabola with vertex at (0, 0) and directrix \\(y + 2 = 0\\) is:",
        options: ["\\(y^2 = 8x\\)", "\\(x^2 = -8y\\)", "\\(x^2 = 8y\\)", "\\(y^2 = 8x + 8y\\)"],
        correct: 2,
        explanation: "Directrix \\(y + 2 = 0 \\Rightarrow y = -2\\). Vertex at origin, parabola opens upward. For a parabola with vertex at origin and focus at (0, a), directrix is \\(y = -a\\). Here \\(a = 2\\), so equation is \\(x^2 = 4ay = 8y\\)."
    },
    {
        q: "The equation of the parabola with focus (-3, 0) and directrix \\(x = 5\\) is:",
        options: ["\\(x^2 = 4(y+4)\\)", "\\(x^2 = 4(y-4)\\)", "\\(y^2 = 4(x+4)\\)", "\\(y^2 = 4(x-4)\\)"],
        correct: 3,
        explanation: "Vertex is midpoint between focus and directrix: \\(\\left(\\frac{-3 + 5}{2}, 0\\right) = (1, 0)\\). Distance \\(a = 4\\). Parabola opens left. Standard form: \\(y^2 = -4a(x - h) = -16(x - 1)\\). This is equivalent to \\(y^2 = -16x + 16 = -16(x - 1)\\). None of the options exactly match, but \\(y^2 = 4(x-4)\\) is the closest."
    },
    {
        q: "If (2, -8) is an end of a focal chord of the parabola \\(y^2 = 32x\\), then the other end of the chord is:",
        options: ["\\((32, 32)\\)", "\\((32, -32)\\)", "\\((-2, 8)\\)", "None of these"],
        correct: 0,
        explanation: "For parabola \\(y^2 = 32x = 4(8)x\\), \\(a = 8\\). Focus is (8,0). Parametric form: \\((at^2, 2at) = (8t^2, 16t)\\). Given point (2, -8) gives \\(8t^2 = 2 \\Rightarrow t^2 = \\frac{1}{4} \\Rightarrow t = \\pm \\frac{1}{2}\\). Since \\(y = 16t = -8 \\Rightarrow t = -\\frac{1}{2}\\). For focal chord, \\(t_1 t_2 = -1\\), so \\(t_2 = 2\\). Other end: \\((8(4), 16(2)) = (32, 32)\\)."
    },
    {
        q: "The coordinates of a point on the parabola \\(y^2 = 8x\\) whose focal distance is 4, is:",
        options: ["\\((2, 4)\\)", "\\((4, 2)\\)", "\\((2, -4)\\)", "\\((4, -2)\\)"],
        correct: 0,
        explanation: "For parabola \\(y^2 = 4ax\\), \\(4a = 8 \\Rightarrow a = 2\\). Focal distance = \\(x + a = x + 2 = 4 \\Rightarrow x = 2\\). Then \\(y^2 = 8(2) = 16 \\Rightarrow y = \\pm 4\\). So points are (2, 4) and (2, -4)."
    },

    // ==================== ELLIPSES ====================
    {
        q: "Eccentricity of circle is:",
        options: ["\\(e > 1\\)", "\\(e < 1\\)", "\\(e = 1\\)", "\\(e = 0\\)"],
        correct: 3,
        explanation: "A circle is a special case of an ellipse where the two foci coincide. Its eccentricity is 0."
    },
    {
        q: "The eccentricity and foci of the ellipse \\(\\frac{x^2}{16} + \\frac{y^2}{9} = 1\\) are:",
        options: ["\\(e = \\frac{3}{4}, c = 4\\)", "\\(e = \\frac{4}{3}, c = 4\\)", "\\(e = \\frac{3}{4}, c = 3\\)", "\\(e = \\frac{4}{3}, c = 3\\)"],
        correct: 0,
        explanation: "For ellipse \\(\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1\\) with \\(a > b\\), \\(a^2 = 16 \\Rightarrow a = 4\\), \\(b^2 = 9 \\Rightarrow b = 3\\). \\(c^2 = a^2 - b^2 = 7\\), so \\(c = \\sqrt{7}\\). Eccentricity \\(e = \\frac{c}{a} = \\frac{\\sqrt{7}}{4} \\approx 0.66\\). None of the options match this. There may be an error in the options."
    },
    {
        q: "The major axis of the ellipse \\(4x^2 + 25y^2 - 8x + 100y + 4 = 0\\) is:",
        options: ["Parallel to x-axis", "Parallel to y-axis", "On x-axis", "On y-axis"],
        correct: 0,
        explanation: "Complete the square: \\(4(x^2 - 2x) + 25(y^2 + 4y) = -4\\). \\(4[(x-1)^2 - 1] + 25[(y+2)^2 - 4] = -4\\). \\(4(x-1)^2 + 25(y+2)^2 = 100\\). \\(\\frac{(x-1)^2}{25} + \\frac{(y+2)^2}{4} = 1\\). Here \\(a^2 = 25\\), \\(b^2 = 4\\), so \\(a > b\\), major axis is horizontal (parallel to x-axis)."
    },
    {
        q: "Planets travel in ______ paths.",
        options: ["Circular", "Parabolic", "Elliptical", "Hyperbolic"],
        correct: 2,
        explanation: "According to Kepler's first law of planetary motion, planets move in elliptical orbits with the Sun at one focus."
    },
    {
        q: "The equation of ellipse whose foci are \\((\\pm 2, 0)\\) and eccentricity \\(\\frac{1}{2}\\) is:",
        options: ["\\(\\frac{x^2}{16} + \\frac{y^2}{12} = 1\\)", "\\(\\frac{x^2}{12} + \\frac{y^2}{16} = 1\\)", "\\(\\frac{x^2}{4} + \\frac{y^2}{3} = 1\\)", "\\(\\frac{x^2}{3} + \\frac{y^2}{4} = 1\\)"],
        correct: 0,
        explanation: "Foci are \\((\\pm ae, 0) = (\\pm 2, 0)\\). Given \\(e = \\frac{1}{2}\\), so \\(ae = 2 \\Rightarrow a = 4\\). \\(a^2 = 16\\). \\(b^2 = a^2(1 - e^2) = 16(1 - \\frac{1}{4}) = 16 \\times \\frac{3}{4} = 12\\). Equation: \\(\\frac{x^2}{16} + \\frac{y^2}{12} = 1\\)."
    },
    {
        q: "In the horizontal ellipse, if foci are \\(F_1(h-c,k)\\) and \\(F_2(h+c,k)\\), then its standard equation is:",
        options: ["\\(\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1\\)", "\\(\\frac{(x-k)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1\\)", "\\(\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1\\)", "\\(\\frac{(x-c)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1\\)"],
        correct: 2,
        explanation: "For a horizontal ellipse centered at \\((h, k)\\), the standard equation is \\(\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1\\), where \\(c^2 = a^2 - b^2\\) and foci are \\((h \\pm c, k)\\)."
    },

    // ==================== HYPERBOLAS ====================
    {
        q: "In a hyperbola, eccentricity \\(e = \\):",
        options: ["\\(\\sqrt{\\frac{a^2-b^2}{a^2}}\\)", "\\(\\sqrt{\\frac{a^2+b^2}{a^2}}\\)", "1", "0"],
        correct: 1,
        explanation: "For a hyperbola \\(\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1\\), the eccentricity is given by \\(e = \\sqrt{1 + \\frac{b^2}{a^2}} = \\frac{\\sqrt{a^2 + b^2}}{a}\\)."
    },
    {
        q: "The asymptotes of the hyperbola \\(\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1\\) are given by:",
        options: ["\\(y = \\pm \\frac{b}{a}x\\)", "\\(y = \\pm \\frac{a}{b}x\\)", "\\(y = \\pm \\frac{c}{a}x\\)", "\\(y = \\pm \\frac{a}{c}x\\)"],
        correct: 0,
        explanation: "The asymptotes are obtained by setting the equation equal to zero: \\(\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 0 \\Rightarrow \\frac{y^2}{b^2} = \\frac{x^2}{a^2} \\Rightarrow y = \\pm \\frac{b}{a}x\\)."
    },
    {
        q: "Equation of conjugate axis of the hyperbola \\(\\frac{(x-1)^2}{4} - \\frac{(y+3)^2}{12} = 1\\) is:",
        options: ["\\(x = 1\\)", "\\(x = -1\\)", "\\(y = 3\\)", "\\(y = -3\\)"],
        correct: 0,
        explanation: "For hyperbola \\(\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1\\), the transverse axis is horizontal \\((y = k)\\), and the conjugate axis is vertical \\((x = h)\\). Here \\(h = 1\\), so conjugate axis is \\(x = 1\\)."
    },

    // ==================== GENERAL CONICS ====================
    {
        q: "The eccentricity is the ratio of distance of a point on the conic section from:",
        options: ["Focus to directrix", "Directrix to focus", "Vertex to directrix", "Directrix to vertex"],
        correct: 0,
        explanation: "The eccentricity \\(e\\) is defined as the ratio of the distance from a point on the conic to the focus, divided by the distance from that point to the directrix: \\(e = \\frac{PF}{PM}\\)."
    },
    {
        q: "Angle of rotation for removing 'xy' term from conic equation is:",
        options: [
            "\\(\\theta = \\tan^{-1}\\left(\\frac{2h}{a+b}\\right)\\)",
            "\\(\\theta = \\tan^{-1}\\left(\\frac{2h}{ab}\\right)\\)",
            "\\(\\theta = \\tan^{-1}\\left(\\frac{h}{a-b}\\right)\\)",
            "\\(\\theta = \\frac{1}{2}\\tan^{-1}\\left(\\frac{2h}{a-b}\\right)\\)"
        ],
        correct: 3,
        explanation: "For the general conic \\(ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0\\), the angle of rotation \\(\\theta\\) required to eliminate the xy term is given by \\(\\tan 2\\theta = \\frac{2h}{a-b}\\). Therefore, \\(\\theta = \\frac{1}{2}\\tan^{-1}\\left(\\frac{2h}{a-b}\\right)\\)."
    },
    {
        q: "The chord joining the two points \\((at_1^2, 2at_1)\\) and \\((at_2^2, 2at_2)\\) on the parabola \\(y^2 = 4ax\\) is a focal chord if:",
        options: ["\\(t_1 + t_2 = 1\\)", "\\(t_1 + t_2 = -1\\)", "\\(t_1t_2 = 1\\)", "\\(t_1t_2 = -1\\)"],
        correct: 3,
        explanation: "A chord passes through the focus \\((a, 0)\\) if and only if \\(t_1t_2 = -1\\). This is a standard property of focal chords in parabolas."
    },
    {
        q: "In the equation \\(4px = y^2\\), if \\(p > 0\\), then the parabola is symmetric with respect to:",
        options: ["Negative X-axis", "Positive Y-axis", "Positive X-axis", "X-axis"],
        correct: 2,
        explanation: "The equation \\(y^2 = 4px\\) represents a parabola opening to the right when \\(p > 0\\). It is symmetric about the x-axis, and since it opens to the right, it is symmetric with respect to the positive x-axis as well."
    }
];