window.questions = [
    {
        q: "Which of the following is a singular matrix?",
        options: [
            "\\(\\begin{bmatrix} 4 & 3 \\\\ 6 & 2 \\end{bmatrix}\\)",
            "\\(\\begin{bmatrix} 4 & 2 \\\\ 6 & 3 \\end{bmatrix}\\)", 
            "\\(\\begin{bmatrix} 4 & 2 \\\\ 3 & 6 \\end{bmatrix}\\)",
            "None of these"
        ],
        correct: 1,
        explanation: "A matrix is singular if its determinant is 0. For option B: \\(\\begin{bmatrix} 4 & 2 \\\\ 6 & 3 \\end{bmatrix}\\), determinant = \\((4 \\times 3) - (2 \\times 6) = 12 - 12 = 0\\). Therefore, it is a singular matrix."
    },
    {
        q: "The minimum number of zeros in a triangular matrix of order 6×6 is:",
        options: ["20", "18", "12", "15"],
        correct: 3,
        explanation: "A triangular matrix (upper or lower) has all elements either above or below the main diagonal as zero. For an \\(n \\times n\\) triangular matrix, the number of zero elements is the number of elements either above or below the main diagonal. This is given by the combination formula: \\(\\binom{n}{2} = \\frac{n(n-1)}{2}\\). For \\(n = 6\\): \\(\\frac{6(6-1)}{2} = \\frac{6 \\times 5}{2} = \\frac{30}{2} = 15\\). Therefore, the minimum number of zeros in a 6×6 triangular matrix is 15."
    },
    {
        q: "The sum of diagonal elements of a square matrix is called:",
        options: [
            "Transpose of matrix",
            "Trace of matrix",
            "Adjoint of matrix",
            "Cofactor of matrix"
        ],
        correct: 1,
        explanation: "The sum of the diagonal elements of a square matrix is called the **trace** of the matrix. It is denoted as \\(\\text{tr}(A)\\) or \\(\\text{Trace}(A)\\). For a matrix \\(A = [a_{ij}]\\) of order \\(n\\), the trace is defined as \\(\\text{tr}(A) = \\sum_{i=1}^{n} a_{ii}\\)."
    },
    {
        q: "Which of the following rule is used to solve 3×3 matrix?",
        options: [
            "Sarrus' rule",
            "Cramer's rule", 
            "LU decomposition",
            "Gauss elimination"
        ],
        correct: 0,
        explanation: "Sarrus' rule is specifically a mnemonic technique for calculating the determinant of a 3×3 matrix. It involves multiplying diagonals in a specific pattern. While Cramer's rule, LU decomposition, and Gauss elimination are used for solving systems of linear equations, Sarrus' rule is specifically for finding determinants of 3×3 matrices."
    },
    {
        q: "Value of \\(k\\), for which \\(A = \\begin{bmatrix} k & 8 \\\\ 4 & 2k \\end{bmatrix}\\) is a singular matrix is:",
        options: ["4", "-4", "\\(\\pm 4\\)", "0"],
        correct: 2,
        explanation: "A matrix is singular if its determinant is 0. \\(|A| = k(2k) - 8(4) = 2k^2 - 32 = 0 \\Rightarrow 2k^2 = 32 \\Rightarrow k^2 = 16 \\Rightarrow k = \\pm 4\\)."
    },
    {
        q: "If \\(A = \\begin{bmatrix} 2 & \\lambda & -3 \\\\ 0 & 2 & 5 \\\\ 1 & 1 & 3 \\end{bmatrix}\\), then \\(A^{-1}\\) exists if:",
        options: [
            "\\(\\lambda = 2\\)",
            "\\(\\lambda \\neq 2\\)",
            "\\(\\lambda \\neq -2\\)",
            "None of these"
        ],
        correct: 3,
        explanation: "The inverse of a matrix exists if its determinant is not zero. Computing the determinant: \\(|A| = 2(2\\times3 - 5\\times1) - \\lambda(0\\times3 - 5\\times1) + (-3)(0\\times1 - 2\\times1) = 2(6-5) - \\lambda(0-5) + (-3)(0-2) = 2(1) - \\lambda(-5) + (-3)(-2) = 2 + 5\\lambda + 6 = 5\\lambda + 8\\). For inverse to exist, \\(5\\lambda + 8 \\neq 0 \\Rightarrow \\lambda \\neq -\\frac{8}{5}\\). Since none of the given options match this condition, the correct answer is 'None of these'."
    },
    {
        q: "If \\(AB = O\\) (zero matrix), which of the following need necessarily be true?\n(i) \\(A = 0\\)\n(ii) \\(B = 0\\)",
        options: [
            "Only (i)",
            "Only (ii)",
            "Both (i) and (ii)",
            "None of the above"
        ],
        correct: 3,
        explanation: "If the product of two matrices is a zero matrix, it does NOT necessarily mean that either matrix is zero. For example: \\(A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}\\) and \\(B = \\begin{bmatrix} 0 & 0 \\\\ 1 & 0 \\end{bmatrix}\\) gives \\(AB = O\\) even though neither A nor B is zero. Therefore, none of the given conditions need necessarily be true."
    },
    {
        q: "If A and B are two matrices, then adjoint(AB) is equal to:",
        options: [
            "adjoint(A) adjoint(B)",
            "adjoint(B) adjoint(A)",
            "adjoint(BA)",
            "None of these"
        ],
        correct: 1,
        explanation: "For any two square matrices A and B of the same order, \\(\\text{adj}(AB) = \\text{adj}(B) \\cdot \\text{adj}(A)\\). This is because \\((AB)^{-1} = B^{-1}A^{-1}\\) and adjoint is related to inverse by \\(A^{-1} = \\frac{\\text{adj}(A)}{|A|}\\). Taking adjoint on both sides of \\((AB)^{-1} = B^{-1}A^{-1}\\) leads to the result \\(\\text{adj}(AB) = \\text{adj}(B) \\cdot \\text{adj}(A)\\)."
    },
    {
        q: "A square matrix A is called unitary if:",
        options: [
            "\\(A^* = A\\)",
            "\\(A^* = -A\\)", 
            "\\(A^* = A^{-1}\\)",
            "\\(A^T = A^{-1}\\)"
        ],
        correct: 2,
        explanation: "A square matrix A is said to be unitary if its conjugate transpose \\(A^*\\) is equal to its inverse, i.e., \\(A^* = A^{-1}\\). This also implies that \\(A A^* = A^* A = I\\), where I is the identity matrix. Unitary matrices preserve the inner product and are the complex analog of orthogonal matrices."
    },
    {
        q: "If \\([1 \\, x \\, 1] \\begin{bmatrix} 1 & 3 & 2 \\\\ 0 & 5 & 1 \\\\ 0 & 3 & 2 \\end{bmatrix} \\begin{bmatrix} x \\\\ 1 \\\\ -2 \\end{bmatrix} = 0\\), then what is the value of \\(x\\)?",
        options: ["\\(\\frac{1}{2}\\)", "\\(-\\frac{1}{2}\\)", "\\(2\\)", "\\(-2\\)"],
        correct: 0,
        explanation: "First multiply the row matrix with the 3×3 matrix: \\([1 \\, x \\, 1] \\begin{bmatrix} 1 & 3 & 2 \\\\ 0 & 5 & 1 \\\\ 0 & 3 & 2 \\end{bmatrix} = [1(1)+x(0)+1(0), \\, 1(3)+x(5)+1(3), \\, 1(2)+x(1)+1(2)] = [1, \\, 3+5x+3, \\, 2+x+2] = [1, \\, 5x+6, \\, x+4]\\). Now multiply this row matrix with the column matrix \\(\\begin{bmatrix} x \\\\ 1 \\\\ -2 \\end{bmatrix}\\): \\([1, \\, 5x+6, \\, x+4] \\begin{bmatrix} x \\\\ 1 \\\\ -2 \\end{bmatrix} = 1(x) + (5x+6)(1) + (x+4)(-2) = x + 5x + 6 - 2x - 8 = 4x - 2\\). Set equal to 0: \\(4x - 2 = 0 \\Rightarrow 4x = 2 \\Rightarrow x = \\frac{1}{2}\\)."
    },
    {
        q: "Find \\(X\\), if \\(A + X = I\\), where \\(A = \\begin{bmatrix} 1 & 4 & -1 \\\\ 3 & 4 & 7 \\\\ 5 & 1 & 6 \\end{bmatrix}\\)",
        options: [
            "\\(\\begin{bmatrix} 0 & -4 & 1 \\\\ -3 & -3 & -7 \\\\ -5 & 0 & -5 \\end{bmatrix}\\)",
            "\\(\\begin{bmatrix} 0 & 4 & -1 \\\\ -3 & -4 & 7 \\\\ -5 & -1 & 6 \\end{bmatrix}\\)",
            "\\(\\begin{bmatrix} 0 & -4 & 1 \\\\ -3 & -3 & -7 \\\\ -5 & -1 & -5 \\end{bmatrix}\\)",
            "\\(\\begin{bmatrix} 0 & 4 & 1 \\\\ 3 & 3 & -7 \\\\ 5 & 1 & 5 \\end{bmatrix}\\)"
        ],
        correct: 2,
        explanation: "Given \\(A + X = I\\), where \\(I\\) is the identity matrix of order 3. Then \\(X = I - A\\). \\(I = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}\\). So \\(X = \\begin{bmatrix} 1-1 & 0-4 & 0-(-1) \\\\ 0-3 & 1-4 & 0-7 \\\\ 0-5 & 0-1 & 1-6 \\end{bmatrix} = \\begin{bmatrix} 0 & -4 & 1 \\\\ -3 & -3 & -7 \\\\ -5 & -1 & -5 \\end{bmatrix}\\)."
    },
    {
        q: "Find the value of \\(a_{23} + a_{32}\\) in the matrix \\(A = [a_{ij}]_{3 \\times 3}\\) where \\(a_{ij} = \\begin{cases} |2i - j| & \\text{if } i > j \\\\ -i + 2j + 3 & \\text{if } i < j \\end{cases}\\)",
        options: ["11", "9", "10", "12"],
        correct: 0,
        explanation: "We need to find \\(a_{23}\\) and \\(a_{32}\\). For \\(a_{23}\\), \\(i=2, j=3\\). Since \\(i < j\\) (2 < 3), we use \\(a_{ij} = -i + 2j + 3 = -2 + 2(3) + 3 = -2 + 6 + 3 = 7\\). For \\(a_{32}\\), \\(i=3, j=2\\). Since \\(i > j\\) (3 > 2), we use \\(a_{ij} = |2i - j| = |2(3) - 2| = |6 - 2| = 4\\). Therefore, \\(a_{23} + a_{32} = 7 + 4 = 11\\)."
    },
    {
        q: "If the order of the matrix A is \\(p \\times q\\) and order of B is \\(q \\times r\\), then order of AB will be:",
        options: ["\\(p \\times q\\)", "\\(q \\times p\\)", "\\(p \\times r\\)", "\\(r \\times p\\)"],
        correct: 2,
        explanation: "For matrix multiplication to be possible, the number of columns in the first matrix must equal the number of rows in the second matrix. If A is of order \\(p \\times q\\) and B is of order \\(q \\times r\\), then the resulting matrix AB will have order \\(p \\times r\\)."
    },
    {
        q: "If two rows of a determinant are identical then its value is:",
        options: ["1", "zero", "-1", "None of these"],
        correct: 1,
        explanation: "One of the fundamental properties of determinants states that if any two rows (or columns) of a determinant are identical, then the value of the determinant is zero."
    },
    {
        q: "System of homogeneous linear equations has non-trivial solution if:",
        options: ["\\(|A| > 0\\)", "\\(|A| < 0\\)", "\\(|A| = 0\\)", "\\(|A| \\neq 0\\)"],
        correct: 2,
        explanation: "A homogeneous system \\(AX = 0\\) always has the trivial solution \\(X = 0\\). It has non-trivial (non-zero) solutions if and only if the coefficient matrix A is singular, i.e., \\(|A| = 0\\)."
    },
    {
        q: "For non-homogeneous system of equations; the system is inconsistent if:",
        options: [
            "\\(\\text{Rank}(A) = \\text{Rank}(A_b)\\)",
            "\\(\\text{Rank}(A) \\neq \\text{Rank}(A_b)\\)",
            "\\(\\text{Rank}(A) < \\text{no. of variables}\\)",
            "\\(\\text{Rank}(A_b) > \\text{no. of variables}\\)"
        ],
        correct: 1,
        explanation: "A non-homogeneous system \\(AX = B\\) is consistent (has at least one solution) if and only if the rank of the coefficient matrix A equals the rank of the augmented matrix \\(A_b = [A|B]\\). If these ranks are not equal, the system is inconsistent (has no solution)."
    },
    {
        q: "Using properties of determinants, find the value of 'x': \\(\\begin{vmatrix} 4-x & 4+x & 4+x \\\\ 4+x & 4-x & 4+x \\\\ 4+x & 4+x & 4-x \\end{vmatrix} = 0\\)",
        options: ["\\(x = 0, -12\\)", "\\(x = 0, 12\\)", "\\(x = 0, -4\\)", "\\(x = 0, 4\\)"],
        correct: 0,
        explanation: "Apply column operation \\(C_1 \\to C_1 + C_2 + C_3\\): New first column becomes: \\((4-x)+(4+x)+(4+x) = 12+x\\) for each row. Factor \\((12+x)\\) from \\(C_1\\): \\((12+x) \\begin{vmatrix} 1 & 4+x & 4+x \\\\ 1 & 4-x & 4+x \\\\ 1 & 4+x & 4-x \\end{vmatrix} = 0\\). Apply row operations: \\(R_2 \\to R_2 - R_1\\) and \\(R_3 \\to R_3 - R_1\\): \\((12+x) \\begin{vmatrix} 1 & 4+x & 4+x \\\\ 0 & -2x & 0 \\\\ 0 & 0 & -2x \\end{vmatrix} = 0\\). Expanding along first column: \\((12+x) \\times 1 \\times [(-2x)(-2x) - 0] = (12+x)(4x^2) = 0\\). Therefore, \\(12+x = 0 \\Rightarrow x = -12\\) or \\(4x^2 = 0 \\Rightarrow x = 0\\)."
    },
    {
        q: "If A, B, C are conformable for multiplication, then \\((ABC)^t = \\)",
        options: [
            "\\(C^t B^t A^t\\)",
            "\\(B^t C^t A^t\\)", 
            "\\(A^t B^t C^t\\)",
            "\\(B^t A^t C^t\\)"
        ],
        correct: 0,
        explanation: "The transpose of a product of matrices equals the product of their transposes in reverse order. So \\((ABC)^t = C^t B^t A^t\\)."
    },
    {
        q: "If C and D are two matrices, \\((C + D)^t = \\)",
        options: [
            "\\(C^t + D^t\\)",
            "\\(C^t D^t\\)",
            "\\(D^t C^t\\)",
            "\\(C D^t\\)"
        ],
        correct: 0,
        explanation: "The transpose of a sum of matrices equals the sum of their transposes. So \\((C + D)^t = C^t + D^t\\)."
    },
    {
        q: "If a square matrix A is skew-Hermitian, then which of the following is true?",
        options: [
            "\\(A^* = A\\)",
            "\\(A^* = -A\\)", 
            "\\(A^T = A\\)",
            "\\(A^T = -A\\)"
        ],
        correct: 1,
        explanation: "A square matrix A is said to be skew-Hermitian if its conjugate transpose (denoted by \\(A^*\\)) is equal to the negative of the matrix, i.e., \\(A^* = -A\\). This means that for each element \\(a_{ij}\\), we have \\(\\overline{a_{ji}} = -a_{ij}\\). In particular, the diagonal elements of a skew-Hermitian matrix must be purely imaginary or zero."
    },
    {
        q: "The rank of the matrix \\(\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 3 & 6 & 9 \\end{bmatrix}\\) is:",
        options: ["0", "1", "2", "3"],
        correct: 1,
        explanation: "In the given matrix, each row is a scalar multiple of the first row: Row2 = 2 × Row1, Row3 = 3 × Row1. Therefore, all rows are linearly dependent, and there is only one linearly independent row. Hence, the rank of the matrix is 1."
    },
    {
        q: "For a system of linear equations \\(AX = B\\), if \\(|A| = 0\\) and \\((\\text{adj } A) B \\neq 0\\), then the system is:",
        options: [
            "Consistent with unique solution",
            "Consistent with infinitely many solutions",
            "Inconsistent (no solution)",
            "Cannot be determined"
        ],
        correct: 2,
        explanation: "If \\(|A| = 0\\), the matrix A is singular. If \\((\\text{adj } A) B \\neq 0\\), the adjoint does not annihilate B, meaning the system fails the consistency condition for singular systems. Hence, the system has no solution and is inconsistent."
    }
];