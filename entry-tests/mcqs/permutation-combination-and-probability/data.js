window.questions = [
    {
        q: "When a selection of objects is made without paying regard to order of selection, it is called the:",
        options: ["Permutation", "Combination", "Series", "Sequence"],
        correct: 1,
        explanation: "A combination is a selection of objects where order does not matter. Permutation considers order, while series and sequence refer to ordered lists of numbers."
    },
    {
        q: "\\(^5C_2 + ^5C_1 = ?\\)",
        options: ["\\(^5C_2\\)", "\\(^6C_1\\)", "\\(^6C_2\\)", "\\(^5C_3\\)"],
        correct: 2,
        explanation: "Using Pascal's identity: \\(^nC_r + ^nC_{r-1} = ^{n+1}C_r\\). Here, \\(^5C_2 + ^5C_1 = ^5C_2 + ^5C_{2-1} = ^6C_2 = 15\\)."
    },
    {
        q: "For independent events A and B, \\(P(A \\cap B) = ?\\)",
        options: ["\\(P(A)P(B|A)\\)", "\\(P(A) \\cup P(B)\\)", "\\(P(A)P(B)\\)", "\\(P(A) \\cap P(B)\\)"],
        correct: 2,
        explanation: "For independent events, the probability of their intersection is the product of their individual probabilities: \\(P(A \\cap B) = P(A) \\cdot P(B)\\)."
    },
    {
        q: "For a random experiment, all possible outcomes are called:",
        options: ["Numerical space", "Sample space", "Event space", "Both (b) & (c)"],
        correct: 1,
        explanation: "The set of all possible outcomes of a random experiment is called the sample space. The event space is the set of all possible subsets (events) of the sample space."
    },
    {
        q: "The correct option for \\(5! \\times ^{10}C_5\\) is:",
        options: ["\\(^{10}P_5\\)", "\\(^{10}C_5\\)", "\\(5! \\times ^{10}P_5\\)", "\\(^{10}C_5\\)"],
        correct: 0,
        explanation: "Using the relationship between permutations and combinations: \\(r! \\times ^nC_r = ^nP_r\\). Here, \\(5! \\times ^{10}C_5 = ^{10}P_5\\)."
    },
    {
        q: "A student estimates that the probability of passing a test is \\(\\frac{8}{9}\\). What is the probability of failing the test?",
        options: ["\\(\\frac{7}{9}\\)", "\\(\\frac{2}{9}\\)", "\\(\\frac{1}{9}\\)", "\\(\\frac{3}{9}\\)"],
        correct: 2,
        explanation: "The sum of probabilities of an event and its complement is 1. So, \\(P(\\text{fail}) = 1 - P(\\text{pass}) = 1 - \\frac{8}{9} = \\frac{1}{9}\\)."
    },
    {
        q: "In factorial term, \\(n(n-1)(n-2)\\) can be written as:",
        options: ["\\(n!\\)", "\\(\\frac{n!}{(n-3)!}\\)", "\\(\\frac{(n-1)!}{(n-2)!}\\)", "\\((n-2)!\\)"],
        correct: 1,
        explanation: "\\(n(n-1)(n-2) = \\frac{n(n-1)(n-2)(n-3)!}{(n-3)!} = \\frac{n!}{(n-3)!}\\)."
    },
    {
        q: "\\(\\frac{k!}{(k+1)!} = ?\\)",
        options: ["\\(k+1\\)", "\\(k\\)", "\\(\\frac{1}{k}\\)", "\\(\\frac{1}{k+1}\\)"],
        correct: 3,
        explanation: "\\(\\frac{k!}{(k+1)!} = \\frac{k!}{(k+1)k!} = \\frac{1}{k+1}\\)."
    },
    {
        q: "If A and B are disjoint events, then \\(P(A \\cup B) = ?\\)",
        options: ["\\(P(A) + P(B)\\)", "\\(P(A) + P(B) - P(A \\cap B)\\)", "\\(P(A) \\cup P(B)\\)", "\\(\\frac{n(A \\cup B)}{n(S)}\\)"],
        correct: 0,
        explanation: "For disjoint events, A and B have no elements in common, so \\(P(A \\cap B) = 0\\). The general addition rule simplifies to \\(P(A \\cup B) = P(A) + P(B)\\)."
    },
    {
        q: "The probability of selecting a prime number from the set {1, 2, 3, ..., 20} is:",
        options: ["\\(\\frac{9}{20}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{2}{5}\\)", "\\(\\frac{7}{20}\\)"],
        correct: 2,
        explanation: "The sample space has 20 elements. Prime numbers in this range are {2, 3, 5, 7, 11, 13, 17, 19} which are 8 numbers. Therefore, probability = \\(\\frac{8}{20} = \\frac{2}{5}\\)."
    },
    {
        q: "The number of signals that can be given by six flags of different colors, using three flags at a time are:",
        options: ["60", "3", "120", "18"],
        correct: 2,
        explanation: "Since order matters, we use permutations. Number of signals = \\(^6P_3 = \\frac{6!}{3!} = 120\\)."
    },
    {
        q: "If A and B are any two events defined in a sample space, then \\(P(A - B) = \\) ......",
        options: ["\\(P(A) - P(A \\cap B)\\)", "\\(P(A) - P(A \\cup B)\\)", "\\(P(A \\cap B) - P(A)\\)", "\\(P(A \\cap B)\\)"],
        correct: 0,
        explanation: "The event A - B consists of elements in A but not in B. Therefore, \\(n(A - B) = n(A) - n(A \\cap B)\\). Dividing by \\(n(S)\\), we get \\(P(A - B) = P(A) - P(A \\cap B)\\)."
    },
    {
        q: "If \\(^nC_2 = 36\\), then n will be:",
        options: ["\\(n = 9\\)", "\\(n = 8\\)", "\\(n = 7\\)", "\\(n = 10\\)"],
        correct: 0,
        explanation: "\\(^nC_2 = \\frac{n(n-1)}{2} = 36 \\Rightarrow n(n-1) = 72 \\Rightarrow n^2 - n - 72 = 0 \\Rightarrow (n-9)(n+8) = 0 \\Rightarrow n = 9\\)."
    },
    {
        q: "If A and B are two mutually exclusive events, then \\(P(A \\cup B) = \\) ......",
        options: ["\\(P(A) \\cup P(B)\\)", "\\(P(B) \\cup A\\)", "\\(P(A) + P(B)\\)", "\\(P(A \\cap B)\\)"],
        correct: 2,
        explanation: "For mutually exclusive events, \\(P(A \\cap B) = 0\\). Hence, \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = P(A) + P(B)\\)."
    },
    {
        q: "Two dice are thrown and the sum of the numbers which come up on the dice is noted. Let A and B are two events defined as: A: 'the sum is even', B: 'the sum is a multiple of 3', then:",
        options: [
            "A and B are mutually exclusive events.",
            "A and B are not mutually exclusive events.",
            "A and B are equally likely events.",
            "A and B are exhaustive events."
        ],
        correct: 1,
        explanation: "Event A includes sums: 2,4,6,8,10,12. Event B includes sums: 3,6,9,12. The intersection includes sums 6 and 12, so A and B are not mutually exclusive."
    },
    {
        q: "A coin is tossed and a die is rolled simultaneously. What is the probability of getting a tail and a 6?",
        options: ["\\(\\frac{1}{2}\\)", "\\(\\frac{1}{6}\\)", "\\(\\frac{1}{12}\\)", "\\(\\frac{1}{3}\\)"],
        correct: 2,
        explanation: "The events are independent. Probability of tail = \\(\\frac{1}{2}\\), probability of 6 = \\(\\frac{1}{6}\\). Therefore, \\(P(\\text{tail and 6}) = \\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}\\)."
    },
    {
        q: "A pair of dice is rolled. What is the probability that the sum of numbers rolled is either 7 or 11?",
        options: ["\\(\\frac{1}{6}\\)", "\\(\\frac{2}{9}\\)", "\\(\\frac{1}{9}\\)", "\\(\\frac{5}{36}\\)"],
        correct: 1,
        explanation: "Total outcomes = 36. Favorable for sum 7: 6 outcomes; for sum 11: 2 outcomes. These events are mutually exclusive, so total favorable = 8. Probability = \\(\\frac{8}{36} = \\frac{2}{9}\\)."
    },
    {
        q: "From A = {1, 3, 5, 7, 9} and B = {2, 4, 6, 8} if a cartesian product A × B is chosen, then the number of ways that a + b = 9 is:",
        options: ["0", "2", "3", "4"],
        correct: 3,
        explanation: "Pairs satisfying a + b = 9: (1,8), (3,6), (5,4), (7,2). All four pairs are valid. Therefore, there are 4 such pairs."
    },
    {
        q: "A student has to answer 10 out of 12 questions in an examination such that he must choose at least 4 from first five questions. The number of choices is:",
        options: ["56", "35", "40", "45"],
        correct: 0,
        explanation: "Case 1: Choose 4 from first 5 and 6 from remaining 7: \\(^5C_4 \\times ^7C_6 = 5 \\times 7 = 35\\). Case 2: Choose 5 from first 5 and 5 from remaining 7: \\(^5C_5 \\times ^7C_5 = 1 \\times 21 = 21\\). Total = 35 + 21 = 56."
    },
    {
        q: "If \\(^nC_4 = ^nC_{10}\\) then value of n is:",
        options: ["10", "12", "13", "14"],
        correct: 3,
        explanation: "If \\(^nC_r = ^nC_s\\), then either r = s or r + s = n. Here, \\(4 \\neq 10\\), so \\(4 + 10 = n \\implies n = 14\\)."
    },
    {
        q: "If \\(^{15}C_{3r} = ^{15}C_{r+3}\\) then value of r is:",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "If \\(^{15}C_{3r} = ^{15}C_{r+3}\\), then either \\(3r = r+3\\) or \\(3r + (r+3) = 15\\). First case: \\(3r = r+3 \\implies 2r = 3 \\implies r = 1.5\\) (not integer). Second case: \\(3r + r + 3 = 15 \\implies 4r = 12 \\implies r = 3\\). Therefore, \\(r = 3\\)."
    },
    {
        q: "The number of ways in which r letters can be posted in n letter boxes in a town is:",
        options: ["\\(n^r \\cdot C_r\\)", "\\(n^r \\cdot P_r\\)", "\\(n^{n-r}\\)", "\\(n^r\\)"],
        correct: 3,
        explanation: "Each letter can be posted in any of the n letter boxes independently. So for r letters, total ways = \\(n \\times n \\times \\cdots \\times n\\) (r times) = \\(n^r\\)."
    },
    {
        q: "How many words can be formed by using four distinct alphabets?",
        options: ["4", "12", "24", "256"],
        correct: 2,
        explanation: "The number of permutations of 4 distinct letters taken all at a time is \\(4! = 24\\)."
    },
    {
        q: "How many 3-digit numbers are there which have 0 at unit place?",
        options: ["90", "100", "81", "72"],
        correct: 0,
        explanation: "For a 3-digit number with 0 at units place, the hundreds place can be filled by any digit from 1-9 (9 ways), tens place by any digit from 0-9 (10 ways), and units place is fixed as 0. So total = \\(9 \\times 10 \\times 1 = 90\\)."
    },
    {
        q: "How many six-digit numbers can be formed using the digits 0, 2, 3, 4, 5, 7 without repeating?",
        options: ["720", "600", "480", "360"],
        correct: 1,
        explanation: "Total digits = 6, but 0 cannot be at the first place. First place can be filled by any of the 5 non-zero digits. Then remaining 5 places can be filled by the remaining 5 digits in \\(5!\\) ways. So total = \\(5 \\times 5! = 5 \\times 120 = 600\\)."
    },
    {
        q: "The number of ways of arranging 7 keys in a key chain is:",
        options: ["5040", "2520", "720", "360"],
        correct: 3,
        explanation: "A key chain is circular in nature, and arrangements that can be flipped over are considered the same (clockwise and anticlockwise are not different). For circular permutations where order is considered the same in both directions, the formula is \\(\\frac{(n-1)!}{2}\\). For \\(n = 7\\), number of ways = \\(\\frac{6!}{2} = \\frac{720}{2} = 360\\)."
    },
    {
        q: "Twelve persons are seated at a round table. Find the number of ways of their arrangement if two particular persons don't want to sit together.",
        options: ["\\(10! \\times 9\\)", "\\(11! - 10! \\times 2\\)", "\\(11! - 10! \\times 2!\\)", "\\(11! - 10! \\times 2\\)"],
        correct: 2,
        explanation: "Total arrangements around a round table = \\((12-1)! = 11!\\). Number of arrangements where two particular persons sit together: Treat them as one unit, so we have 11 units to arrange in a circle = \\((11-1)! = 10!\\) ways. The two persons can be arranged among themselves in \\(2!\\) ways. So arrangements with them together = \\(10! \\times 2!\\). Therefore, arrangements where they don't sit together = \\(11! - 10! \\times 2!\\)."
    },
    {
        q: "A question paper has three parts A, B and C each containing 8 questions. If a student has to choose 5 questions from A, and 3 questions each from B and C, in how many ways can he choose the questions?",
        options: ["\\(^8C_5 \\times ^8C_3 \\times ^8C_3\\)", "\\(^8C_5 + ^8C_3 + ^8C_3\\)", "\\(^8P_5 \\times ^8P_3 \\times ^8P_3\\)", "\\(^8C_5 \\times ^8C_3\\)"],
        correct: 0,
        explanation: "Choose 5 from A: \\(^8C_5\\) ways. Choose 3 from B: \\(^8C_3\\) ways. Choose 3 from C: \\(^8C_3\\) ways. By multiplication principle, total = \\(^8C_5 \\times ^8C_3 \\times ^8C_3\\)."
    },
    {
        q: "The number of selections of 11 cricket players out of 15 players, so that 3 particular players must not be in each selection, is:",
        options: ["\\(\\binom{12}{11}\\)", "\\(\\binom{15}{11}\\)", "\\(\\binom{15}{11} - \\binom{12}{11}\\)", "\\(\\binom{15}{11} - \\binom{3}{11}\\)"],
        correct: 0,
        explanation: "If 3 particular players must not be in any selection, we remove them. So we select 11 from the remaining 12 players: \\(\\binom{12}{11} = 12\\)."
    }
];