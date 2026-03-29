window.questions = [
    {
        q: "The series \\(1 + 1 + 1 + 1 + \\ldots\\) is:",
        options: [
            "Convergent",
            "Divergent",
            "Neither convergent nor divergent",
            "Both convergent and divergent"
        ],
        correct: 1,
        explanation: "The series \\(1 + 1 + 1 + 1 + \\ldots\\) is a constant series where each term is 1. The sum of the first n terms is n, which approaches infinity as \\(n \\to \\infty\\). Therefore, the series diverges to infinity."
    },
    {
        q: "Sum the series upto n terms: \\(1 + 3 + 5 + \\ldots\\)",
        options: [
            "\\(n^2\\)",
            "\\(\\ln e^2\\)",
            "\\(2^n\\)",
            "\\(n!\\)"
        ],
        correct: 0,
        explanation: "The series \\(1 + 3 + 5 + \\ldots\\) is an arithmetic progression of odd numbers with first term \\(a = 1\\) and common difference \\(d = 2\\). The sum of first n terms of an AP is \\(S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{n}{2}[2(1) + (n-1)2] = \\frac{n}{2}[2 + 2n - 2] = \\frac{n}{2}[2n] = n^2\\)."
    },
    {
        q: "Find the sum of the sequence 7, 77, 777, 7777, ... to n terms.",
        options: [
            "\\(\\frac{7}{81}(10^{n+1} - 10 - 9n)\\)",
            "\\(\\frac{7}{9}\\left[\\frac{10(10^n - 1)}{9} - n\\right]\\)",
            "\\(\\frac{7}{9}(10^n - 1)\\)",
            "\\(\\frac{7}{81}(10^n - 1 - 9n)\\)"
        ],
        correct: 1,
        explanation: "Let \\(S_n = 7 + 77 + 777 + \\ldots\\) to n terms. Multiply by \\(\\frac{9}{7}\\): \\(\\frac{9}{7}S_n = 9 + 99 + 999 + \\ldots = (10-1) + (10^2-1) + (10^3-1) + \\ldots = (10 + 10^2 + 10^3 + \\ldots) - n = \\frac{10(10^n - 1)}{10 - 1} - n = \\frac{10(10^n - 1)}{9} - n\\). Therefore, \\(S_n = \\frac{7}{9}\\left[\\frac{10(10^n - 1)}{9} - n\\right]\\)."
    },
    {
        q: "\\(\\sum_{n=2}^{30} \\left( -\\frac{1}{i} \\right)^n = ?\\)",
        options: ["1", "-1", "\\(i\\)", "\\(-i\\)"],
        correct: 1,
        explanation: "First note that \\(-\\frac{1}{i} = -\\frac{1}{i} \\times \\frac{i}{i} = -\\frac{i}{i^2} = -\\frac{i}{-1} = i\\). So the series becomes \\(\\sum_{n=2}^{30} i^n\\). This is a geometric series with first term \\(a = i^2 = -1\\), common ratio \\(r = i\\), and number of terms = 29 (from n=2 to 30 inclusive). The sum of a geometric series is \\(S = \\frac{a(1 - r^n)}{1 - r} = \\frac{(-1)(1 - i^{29})}{1 - i}\\). Since \\(i^{29} = i^{28} \\cdot i = (i^4)^7 \\cdot i = 1^7 \\cdot i = i\\), we have \\(1 - i^{29} = 1 - i\\). Therefore, \\(S = \\frac{(-1)(1 - i)}{1 - i} = -1\\)."
    },
    {
        q: "The common ratio of the geometric sequence \\(a_n = 2^{-n}\\) is:",
        options: ["2", "\\(\\frac{1}{2}\\)", "-2", "\\(-\\frac{1}{2}\\)"],
        correct: 1,
        explanation: "For a geometric sequence, the common ratio \\(r = \\frac{a_n}{a_{n-1}}\\). Here, \\(a_n = 2^{-n}\\) and \\(a_{n-1} = 2^{-(n-1)} = 2^{-n+1}\\). Therefore, \\(r = \\frac{2^{-n}}{2^{-n+1}} = 2^{-n - (-n+1)} = 2^{-1} = \\frac{1}{2}\\)."
    },
    {
        q: "A sequence is a function whose domain is:",
        options: [
            "Real numbers",
            "Natural numbers",
            "Integers",
            "Positive numbers"
        ],
        correct: 1,
        explanation: "A sequence is defined as a function whose domain is the set of natural numbers (usually starting from 1). Each natural number n is mapped to a term of the sequence, denoted by \\(a_n\\)."
    },
    {
        q: "Pascal's sequence for n = 3 is:",
        options: [
            "1, 1, 0, 0, 0, ...",
            "1, 2, 1, 0, 0, ...",
            "1, 3, 3, 1, 0, 0, ...",
            "1, 4, 6, 4, 1, 0, ..."
        ],
        correct: 2,
        explanation: "Pascal's triangle gives the binomial coefficients. For n = 3, the coefficients are \\(\\binom{3}{0}, \\binom{3}{1}, \\binom{3}{2}, \\binom{3}{3}\\) which are 1, 3, 3, 1 respectively. Therefore, Pascal's sequence for n = 3 is 1, 3, 3, 1, followed by zeros."
    },
    {
        q: "If \\(a = \\frac{125}{8}\\), \\(r = \\frac{2}{5}\\), \\(n = 7\\), then \\(a_n = \\):",
        options: [
            "\\(\\frac{16}{625}\\)",
            "\\(\\frac{8}{125}\\)",
            "\\(\\frac{625}{16}\\)",
            "\\(\\frac{16}{125}\\)"
        ],
        correct: 1,
        explanation: "The nth term of a geometric sequence is given by \\(a_n = ar^{n-1}\\). Substituting: \\(a_n = \\frac{125}{8} \\times \\left(\\frac{2}{5}\\right)^{6} = \\frac{125}{8} \\times \\frac{2^6}{5^6} = \\frac{125}{8} \\times \\frac{64}{15625} = \\frac{125 \\times 64}{8 \\times 15625} = \\frac{8000}{125000} = \\frac{8}{125}\\)."
    },
    {
        q: "If \\(a, b, c\\) are in A.P., then \\(3^{a^2}, 3^{b^2}, 3^{c^2}\\) are in:",
        options: ["G.P.", "H.P.", "A.P.", "None of these"],
        correct: 3,
        explanation: "If a, b, c are in A.P., then \\(2b = a + c\\). For \\(3^{a^2}, 3^{b^2}, 3^{c^2}\\) to be in G.P., we need \\((3^{b^2})^2 = 3^{a^2} \\cdot 3^{c^2} \\implies 3^{2b^2} = 3^{a^2 + c^2} \\implies 2b^2 = a^2 + c^2\\). This is not necessarily true when a, b, c are in A.P. For example, take a=1, b=2, c=3: 1,2,3 are in A.P. but \\(3^1, 3^4, 3^9\\) are not in G.P. because \\((3^4)^2 = 3^8 \\neq 3^1 \\cdot 3^9 = 3^{10}\\). Therefore, the correct answer is none of these."
    },
    {
        q: "\\(0 + 0.1 + 0.01 + 0.001 + 0.0001 + \\ldots\\), the sum is:",
        options: ["9", "\\(\\frac{10}{9}\\)", "\\(\\frac{9}{10}\\)", "\\(\\frac{1}{9}\\)"],
        correct: 3,
        explanation: "The series is \\(0 + 0.1 + 0.01 + 0.001 + \\ldots = 0.1 + 0.01 + 0.001 + \\ldots\\). This is an infinite geometric series with first term \\(a = 0.1 = \\frac{1}{10}\\) and common ratio \\(r = 0.1 = \\frac{1}{10}\\). The sum of an infinite geometric series is \\(S_\\infty = \\frac{a}{1-r} = \\frac{\\frac{1}{10}}{1 - \\frac{1}{10}} = \\frac{\\frac{1}{10}}{\\frac{9}{10}} = \\frac{1}{9}\\)."
    },
    {
        q: "Find first term of the geometric series, when \\(S_n = 30\\), \\(n = 4\\), \\(r = -2\\):",
        options: ["6", "-6", "8", "-8"],
        correct: 1,
        explanation: "The sum of a geometric series is given by \\(S_n = \\frac{a(1 - r^n)}{1 - r}\\). Substituting \\(S_n = 30\\), \\(n = 4\\), \\(r = -2\\): \\(30 = \\frac{a(1 - (-2)^4)}{1 - (-2)} = \\frac{a(1 - 16)}{1 + 2} = \\frac{a(-15)}{3} = -5a\\). Therefore, \\(-5a = 30 \\implies a = -6\\)."
    },
    {
        q: "2, 3, 5, 7, 11, ..., is a ______ of prime numbers.",
        options: [
            "Sequence",
            "Progression",
            "Series",
            "Set"
        ],
        correct: 0,
        explanation: "The given list 2, 3, 5, 7, 11, ... is an ordered list of numbers following a specific order, which makes it a sequence. A progression is a sequence with a specific pattern (like arithmetic or geometric), but prime numbers do not follow a simple mathematical rule. A series is the sum of terms of a sequence. A set is an unordered collection. Therefore, it is best described as a sequence."
    },
    {
        q: "Which of the following is the nth term of an A.P.?",
        options: [
            "\\(2 \\times 3^n\\)",
            "\\(\\frac{1}{n+1}\\)",
            "\\(3n - 8\\)",
            "All of these"
        ],
        correct: 2,
        explanation: "The nth term of an arithmetic progression has the form \\(a_n = a_1 + (n-1)d\\), which is a linear function of n. Among the options, \\(3n - 8\\) is linear in n, so it represents an A.P. The other options are exponential (\\(2 \\times 3^n\\)) and reciprocal (\\(\\frac{1}{n+1}\\)), which do not represent arithmetic progressions."
    },
    {
        q: "Harmonic mean between 3 and 7 is:",
        options: [
            "\\(\\frac{5}{21}\\)",
            "\\(\\frac{21}{5}\\)",
            "5",
            "\\(\\sqrt{21}\\)"
        ],
        correct: 1,
        explanation: "The harmonic mean (HM) of two numbers a and b is given by \\(HM = \\frac{2ab}{a+b}\\). Substituting a = 3, b = 7: \\(HM = \\frac{2(3)(7)}{3+7} = \\frac{42}{10} = \\frac{21}{5}\\)."
    },
    {
        q: "Find the sum of the series: \\(1^2 + 3^2 + 5^2 + \\ldots + (2n-1)^2\\) (sum of squares of first n odd numbers)",
        options: [
            "\\(\\frac{n}{6}(n+1)(2n+1)\\)",
            "\\(\\frac{n}{3}(4n^2-1)\\)",
            "\\(\\frac{n}{2}(n+1)\\)",
            "\\(\\frac{n}{2}(6n^2+3n-1)\\)"
        ],
        correct: 1,
        explanation: "The sum of squares of first n odd numbers is given by the formula \\(\\frac{n}{3}(4n^2-1)\\). This can be derived from the sum of squares of first 2n natural numbers minus the sum of squares of first n even numbers."
    },
    {
        q: "Find the 10th term of the sequence: \\(\\frac{1}{8}, \\frac{1}{3}, -\\frac{1}{2}, -\\frac{1}{7}, \\ldots\\)",
        options: [
            "37",
            "\\(\\frac{1}{37}\\)",
            "-37",
            "\\(-\\frac{1}{37}\\)"
        ],
        correct: 3,
        explanation: "Looking at the pattern, the denominators appear to follow a linear sequence: 8, 3, -2, -7, ... which decreases by 5 each time. So the nth denominator = \\(8 - 5(n-1) = 13 - 5n\\). For n = 10, denominator = \\(13 - 50 = -37\\). The signs alternate? First term positive, second positive, third negative, fourth negative... The pattern of signs: first two positive, next two negative, then repeat? For n=10, the term would be \\(-\\frac{1}{37}\\)."
    },
    {
        q: "For an AP, if \\(S_n = p\\), \\(a_n = q\\) and total number of terms in the series is \\(n\\), then \\(a_1 = ?\\)",
        options: [
            "\\(\\frac{2q}{n} - p\\)",
            "\\(\\frac{n}{q} - p\\)",
            "\\(\\frac{2p}{n} - q\\)",
            "\\(np - q\\)"
        ],
        correct: 2,
        explanation: "We know that \\(S_n = \\frac{n}{2}(a_1 + a_n)\\). Given \\(S_n = p\\) and \\(a_n = q\\), we have \\(p = \\frac{n}{2}(a_1 + q)\\). Solving for \\(a_1\\): \\(\\frac{2p}{n} = a_1 + q \\implies a_1 = \\frac{2p}{n} - q\\)."
    },
    {
        q: "If the sum of n terms of a series is \\(n^2 - 3n\\), then its 7th term is:",
        options: ["6", "8", "12", "10"],
        correct: 3,
        explanation: "Given \\(S_n = n^2 - 3n\\). The nth term of a series is given by \\(a_n = S_n - S_{n-1}\\) for \\(n > 1\\). \\(S_{n-1} = (n-1)^2 - 3(n-1) = n^2 - 2n + 1 - 3n + 3 = n^2 - 5n + 4\\). Therefore, \\(a_n = (n^2 - 3n) - (n^2 - 5n + 4) = 2n - 4\\). For n = 7, \\(a_7 = 2(7) - 4 = 14 - 4 = 10\\)."
    },
    {
        q: "For what value of n will \\(\\frac{a^{n+2} + b^{n+2}}{a^{n+1} + b^{n+1}}\\) be the harmonic mean between a and b?",
        options: ["\\(n = 0\\)", "\\(n = -2\\)", "\\(n = -\\frac{1}{2}\\)", "\\(n = 1\\)"],
        correct: 1,
        explanation: "The harmonic mean (HM) of a and b is \\(\\frac{2ab}{a+b}\\). We need \\(\\frac{a^{n+2} + b^{n+2}}{a^{n+1} + b^{n+1}} = \\frac{2ab}{a+b}\\). Cross-multiplying: \\((a^{n+2} + b^{n+2})(a+b) = 2ab(a^{n+1} + b^{n+1})\\). Expanding: \\(a^{n+3} + a^{n+2}b + ab^{n+2} + b^{n+3} = 2a^{n+2}b + 2ab^{n+2}\\). Rearranging: \\(a^{n+3} + b^{n+3} = a^{n+2}b + ab^{n+2}\\). Factoring: \\(a^{n+2}(a - b) = b^{n+2}(a - b)\\). Assuming \\(a \\neq b\\), we get \\(a^{n+2} = b^{n+2} \\implies \\left(\\frac{a}{b}\\right)^{n+2} = 1 \\implies n+2 = 0 \\implies n = -2\\)."
    },
    {
        q: "The 10th term of the progression \\(1, \\sqrt{2}, 2, \\ldots\\) is:",
        options: [
            "8",
            "\\(16\\sqrt{2}\\)",
            "16",
            "None of these"
        ],
        correct: 1,
        explanation: "The given progression is \\(1, \\sqrt{2}, 2, \\ldots\\). This is a geometric progression. First term \\(a = 1\\). The common ratio \\(r = \\frac{\\sqrt{2}}{1} = \\sqrt{2}\\) and also \\(\\frac{2}{\\sqrt{2}} = \\sqrt{2}\\). So \\(r = \\sqrt{2}\\). The nth term of a GP is given by \\(a_n = ar^{n-1}\\). For n = 10: \\(a_{10} = 1 \\times (\\sqrt{2})^{9} = (\\sqrt{2})^9 = 2^{9/2} = 2^4 \\times 2^{1/2} = 16\\sqrt{2}\\)."
    },
    {
        q: "Calculate the exact value of the repeating decimal 0.4545...",
        options: [
            "\\(\\frac{5}{11}\\)",
            "\\(\\frac{50}{11}\\)",
            "\\(\\frac{0.5}{11}\\)",
            "None of these"
        ],
        correct: 0,
        explanation: "Let \\(x = 0.454545...\\). Then \\(100x = 45.454545...\\). Subtracting: \\(100x - x = 45.454545... - 0.454545... = 45\\). So \\(99x = 45 \\implies x = \\frac{45}{99} = \\frac{5}{11}\\)."
    },
    {
        q: "Find the general term of an arithmetic sequence where \\(a_5 = 16\\) and \\(a_{20} = 40\\).",
        options: [
            "\\(a_n = \\frac{8n + 40}{5}\\)",
            "\\(a_n = 4n - 4\\)",
            "\\(a_n = \\frac{8n}{5} + 8\\)",
            "\\(a_n = 5n - 9\\)"
        ],
        correct: 0,
        explanation: "In an arithmetic sequence, \\(a_n = a_1 + (n-1)d\\). Given \\(a_5 = a_1 + 4d = 16\\) and \\(a_{20} = a_1 + 19d = 40\\). Subtracting the first equation from the second: \\(15d = 24 \\implies d = \\frac{24}{15} = \\frac{8}{5}\\). Then \\(a_1 + 4\\left(\\frac{8}{5}\\right) = 16 \\implies a_1 + \\frac{32}{5} = 16 \\implies a_1 = 16 - \\frac{32}{5} = \\frac{80 - 32}{5} = \\frac{48}{5}\\). Therefore, \\(a_n = \\frac{48}{5} + (n-1)\\frac{8}{5} = \\frac{48}{5} + \\frac{8n - 8}{5} = \\frac{8n + 40}{5}\\)."
    },
    {
        q: "In summation notation, the series \\(a_1 + a_2 + a_3 + \\cdots + a_n\\), can be written as:",
        options: [
            "\\(\\sum_{i=1}^n a_i\\)",
            "\\(\\sum_{i=0}^{n-1} a_{i+1}\\)",
            "All of these",
            "None of these"
        ],
        correct: 2,
        explanation: "The series \\(a_1 + a_2 + a_3 + \\cdots + a_n\\) can be written as \\(\\sum_{i=1}^n a_i\\). It can also be written as \\(\\sum_{i=0}^{n-1} a_{i+1}\\) because when i=0, we get a₁; i=1 gives a₂; ...; i=n-1 gives aₙ. Both notations represent the same sum. Therefore, both options (a) and (b) are correct, so the answer is 'All of these'."
    },
    {
        q: "The sum of the series \\(1\\cdot n + 2(n-1) + 3(n-2) + \\cdots + n\\cdot 1\\), is:",
        options: [
            "\\(\\frac{n}{3}(n+1)(2n+1)\\)",
            "\\(\\frac{n}{6}(n+1)(n+2)\\)",
            "\\(\\frac{n}{2}(n+1)(n+3)\\)",
            "\\(\\frac{n}{4}(n+1)(n+2)(n+3)\\)"
        ],
        correct: 1,
        explanation: "The kth term is \\(k[n-(k-1)] = k(n-k+1) = (n+1)k - k^2\\). Summing from k=1 to n: \\(S_n = (n+1)\\sum_{k=1}^n k - \\sum_{k=1}^n k^2 = (n+1)\\frac{n(n+1)}{2} - \\frac{n(n+1)(2n+1)}{6} = \\frac{n(n+1)}{2}\\left[(n+1) - \\frac{2n+1}{3}\\right] = \\frac{n(n+1)}{2}\\left[\\frac{3n+3 - 2n - 1}{3}\\right] = \\frac{n(n+1)}{2} \\cdot \\frac{n+2}{3} = \\frac{n(n+1)(n+2)}{6}\\)."
    },
    {
        q: "Sum of the series \\(\\frac{1}{3\\cdot7} + \\frac{1}{7\\cdot11} + \\frac{1}{11\\cdot15} + \\cdots + \\infty\\) is:",
        options: [
            "\\(\\frac{1}{3}\\)",
            "\\(\\frac{1}{6}\\)",
            "\\(\\frac{1}{9}\\)",
            "\\(\\frac{1}{12}\\)"
        ],
        correct: 3,
        explanation: "The kth term is \\(T_k = \\frac{1}{(4k-1)(4k+3)}\\) where k starts from 1. Using partial fractions: \\(T_k = \\frac{1}{4}\\left[\\frac{1}{4k-1} - \\frac{1}{4k+3}\\right]\\). Summing from k=1 to n: \\(S_n = \\frac{1}{4}\\left[\\left(\\frac{1}{3} - \\frac{1}{7}\\right) + \\left(\\frac{1}{7} - \\frac{1}{11}\\right) + \\cdots + \\left(\\frac{1}{4n-1} - \\frac{1}{4n+3}\\right)\\right] = \\frac{1}{4}\\left[\\frac{1}{3} - \\frac{1}{4n+3}\\right]\\). As \\(n \\to \\infty\\), \\(S_\\infty = \\frac{1}{4} \\cdot \\frac{1}{3} = \\frac{1}{12}\\)."
    },
    {
        q: "Sum to n terms of the series \\(1\\cdot2\\cdot3 + 2\\cdot3\\cdot4 + 3\\cdot4\\cdot5 + \\cdots\\) is:",
        options: [
            "\\(\\frac{n}{2}(n+1)(n+2)\\)",
            "\\(n(n+1)(n+2)(n+3)\\)",
            "\\(\\frac{n}{4}(n+1)(n+2)(n+3)\\)",
            "\\(n^2(n+1)(n+3)\\)"
        ],
        correct: 2,
        explanation: "The kth term is \\(T_k = k(k+1)(k+2) = k^3 + 3k^2 + 2k\\). Then \\(S_n = \\sum_{k=1}^n T_k = \\sum k^3 + 3\\sum k^2 + 2\\sum k = \\frac{n^2(n+1)^2}{4} + 3\\cdot\\frac{n(n+1)(2n+1)}{6} + 2\\cdot\\frac{n(n+1)}{2} = \\frac{n(n+1)}{4}[n(n+1) + 2(2n+1) + 4] = \\frac{n(n+1)}{4}[n^2 + n + 4n + 2 + 4] = \\frac{n(n+1)}{4}[n^2 + 5n + 6] = \\frac{n(n+1)}{4}(n+2)(n+3)\\)."
    },
    {
        q: "If the sum of first n natural numbers is 325, then n = ?",
        options: ["23", "24", "25", "26"],
        correct: 2,
        explanation: "The sum of first n natural numbers is given by \\(S_n = \\frac{n(n+1)}{2} = 325\\). So \\(n(n+1) = 650\\). Solving: \\(n^2 + n - 650 = 0\\). Discriminant = \\(1 + 2600 = 2601 = 51^2\\). So \\(n = \\frac{-1 \\pm 51}{2}\\). Taking positive: \\(n = \\frac{50}{2} = 25\\)."
    }
];