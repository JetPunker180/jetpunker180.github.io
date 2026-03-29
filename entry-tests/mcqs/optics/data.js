window.questions = [
    // ==================== GEOMETRICAL OPTICS ====================
    {
        q: "A converging lens is used to form an image on a screen. When an opaque screen covers the upper portion of the lens:",
        options: [
            "Half of the image will vanish.",
            "A skewed image will be created.",
            "The image's intensity will drop, but the image will be complete.",
            "The image's intensity will grow, but the image will remain blurry."
        ],
        correct: 2,
        explanation: "The focal length of the lens remains unchanged, but the amount of light passing through the lens is reduced. The image is still formed, but with lower intensity."
    },
    {
        q: "In optical fibres, the refractive index of the core is:",
        options: [
            "greater than that of the cladding.",
            "equal to that of the cladding.",
            "smaller than that of the cladding.",
            "independent of that of cladding."
        ],
        correct: 0,
        explanation: "For total internal reflection to occur, the core must have a higher refractive index than the cladding, so that light rays are confined within the core."
    },
    {
        q: "An object is placed in front of a plane mirror at a distance of 0.5 m. The distance between object and image will be equal to:",
        options: ["0.25 m", "0.5 m", "1.0 m", "2.0 m"],
        correct: 2,
        explanation: "For a plane mirror, the image is formed at the same distance behind the mirror as the object is in front. Distance between object and image = \\(0.5 + 0.5 = 1.0\\) m."
    },
    {
        q: "Air bubble in water behaves as:",
        options: [
            "sometimes concave, sometimes convex lens",
            "concave lens",
            "convex lens",
            "always refracting surface"
        ],
        correct: 1,
        explanation: "An air bubble in water has a lower refractive index than the surrounding medium, so it acts as a concave lens."
    },
    {
        q: "We combine two lenses, one is convex and other is concave having focal lengths \\(f_1\\) and \\(f_2\\) and their combined focal length is \\(F\\). When the lenses are combined, they act like a concave lens, if:",
        options: [
            "\\(f_1 > f_2\\)",
            "\\(f_1 = f_2\\)",
            "\\(f_1 < f_2\\)",
            "\\(f_1 = -f_2\\)"
        ],
        correct: 0,
        explanation: "For two thin lenses in contact, \\(\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2}\\). For convex lens \\(f_1 > 0\\), for concave lens \\(f_2 < 0\\). For the combination to act as concave (negative \\(F\\)), we need \\(\\frac{1}{F} = \\frac{1}{f_1} - \\frac{1}{|f_2|} < 0 \\implies \\frac{1}{f_1} < \\frac{1}{|f_2|} \\implies |f_2| < f_1\\). So \\(f_1 > |f_2|\\), which means \\(f_1 > f_2\\) (since \\(f_2\\) is negative)."
    },
    {
        q: "In a concave mirror, the image size depends upon:",
        options: ["size of the object", "position of the object", "area covered by the object", "the shape of the object"],
        correct: 1,
        explanation: "In a concave mirror, the size and nature of the image depend on the position of the object relative to the focal point and center of curvature."
    },
    {
        q: "In the normal human eye, the image is formed:",
        options: ["in front of the retina", "behind the retina", "on the retina", "in between lens and retina"],
        correct: 2,
        explanation: "In a normal human eye, the image is formed exactly on the retina, which contains light-sensitive cells that detect the image."
    },
    {
        q: "When a light ray enters from a denser medium to a rarer medium, it bends:",
        options: ["perpendicular to normal", "parallel to normal", "toward normal", "away from normal"],
        correct: 3,
        explanation: "When light travels from a denser to a rarer medium, it speeds up and bends away from the normal (Snell's law)."
    },
    {
        q: "In a compound microscope, as compared to an objective, the eyepiece lens has a focal length:",
        options: ["zero", "negative", "small", "large"],
        correct: 3,
        explanation: "In a compound microscope, the objective has a short focal length for high magnification, while the eyepiece has a longer focal length to provide comfortable viewing."
    },
    {
        q: "When the angle of refraction is \\(90^\\circ\\) and the refractive index for water is 1.33, the critical angle is:",
        options: ["\\(48.8^\\circ\\)", "\\(49.1^\\circ\\)", "\\(50.0^\\circ\\)", "\\(51.0^\\circ\\)"],
        correct: 0,
        explanation: "Critical angle \\(\\theta_c = \\sin^{-1}\\left(\\frac{1}{n}\\right) = \\sin^{-1}\\left(\\frac{1}{1.33}\\right) = \\sin^{-1}(0.7519) \\approx 48.8^\\circ\\)."
    },
    {
        q: "To view dim stars, we use:",
        options: ["compound microscope", "simple microscope", "endoscope", "telescope"],
        correct: 3,
        explanation: "A telescope is used to observe distant celestial objects like stars. It gathers more light than the human eye, making dim stars visible."
    },
    {
        q: "The human eye acts like a:",
        options: ["camera", "projector", "telescope", "microscope"],
        correct: 0,
        explanation: "The human eye functions similarly to a camera: light enters through the pupil, is focused by the lens, and forms an inverted image on the retina."
    },
    {
        q: "A magnifying glass forms an enlarged:",
        options: ["real and upright image", "real and inverted image", "virtual and upright image", "virtual and inverted image"],
        correct: 2,
        explanation: "A magnifying glass (convex lens) forms an enlarged, virtual, and upright image when the object is placed within the focal length."
    },
    {
        q: "The entire light is reflected into the same denser medium, which is called total:",
        options: ["external reflection", "internal reflection", "external refraction", "internal refraction"],
        correct: 1,
        explanation: "Total internal reflection occurs when light traveling from a denser medium to a rarer medium strikes the interface at an angle greater than the critical angle, causing all light to reflect back into the denser medium."
    },
    {
        q: "In the optic fiber, the core is made of glass or plastic of relatively:",
        options: ["zero refractive index", "high refractive index", "low refractive index", "no refractive index"],
        correct: 1,
        explanation: "Optical fibers have a core with a higher refractive index than the cladding to ensure total internal reflection of light within the core."
    },
    {
        q: "Magnifying glass is also called:",
        options: ["endoscope", "simple microscope", "compound microscope", "telescope"],
        correct: 1,
        explanation: "A magnifying glass is a simple microscope, consisting of a single convex lens that produces a magnified virtual image."
    },
    {
        q: "The defect in which the image is formed beyond the retina is called:",
        options: ["long sightedness", "short sightedness", "blind spotting", "image defect"],
        correct: 0,
        explanation: "Long-sightedness (hypermetropia) occurs when the eyeball is too short or the lens is too weak, causing the image to focus behind the retina."
    },
    {
        q: "The short-sightedness can be corrected by using:",
        options: ["convex glasses", "concave mirror", "concave mirror", "concave glasses"],
        correct: 3,
        explanation: "Short-sightedness (myopia) is corrected using concave (diverging) lenses, which spread out light rays before they enter the eye so they focus on the retina."
    },
    {
        q: "Lenses form images through:",
        options: ["dispersion", "refraction", "diffraction", "reflection"],
        correct: 1,
        explanation: "Lenses work by refracting light rays, bending them to converge or diverge, thus forming images."
    },
    {
        q: "To illuminate the inaccessible places in the tooth, dentists use:",
        options: ["concave glasses", "convex mirror", "convex lens", "concave lens"],
        correct: 1,
        explanation: "Dentists use a concave mirror to focus light into the mouth and illuminate hard-to-reach areas."
    },
    {
        q: "The reciprocal of a lens focal length is called:",
        options: ["refractive index", "power of the lens", "critical angle", "None of them"],
        correct: 1,
        explanation: "The power of a lens is defined as the reciprocal of its focal length: \\(P = \\frac{1}{f}\\) (in meters)."
    },
    {
        q: "The power of a lens is measured in:",
        options: ["meter", "\\(\\text{m}^2\\)", "\\(\\text{m}^{-2}\\)", "\\(\\text{m}^{-1}\\)"],
        correct: 3,
        explanation: "Power of a lens has units of reciprocal meters (\\(\\text{m}^{-1}\\)), which is also called diopter (D)."
    },
    {
        q: "The S.I unit of power of a lens is:",
        options: ["\\(\\text{m}^{-1}\\)", "watts", "diopter", "Hertz"],
        correct: 2,
        explanation: "The SI unit of lens power is the diopter (D), where \\(1\\ \\text{D} = 1\\ \\text{m}^{-1}\\)."
    },
    {
        q: "1 diopter = ______",
        options: ["\\(1\\ \\text{m}^{-1}\\)", "\\(1\\ \\text{m}^2\\)", "\\(1\\ \\text{m}\\)", "\\(1\\ \\text{m}^2\\)"],
        correct: 0,
        explanation: "\\(1\\ \\text{diopter} = 1\\ \\text{m}^{-1} = 1\\ \\text{meter}^{-1}\\)."
    },
    {
        q: "Which statement is correct?",
        options: [
            "The power of a convex lens is negative, and that of a concave lens is positive.",
            "The power of a convex lens is positive, and that of a concave lens is negative.",
            "The power of both lenses is positive.",
            "The power of both lenses is negative."
        ],
        correct: 1,
        explanation: "Convex (converging) lenses have positive power (focal length positive), while concave (diverging) lenses have negative power (focal length negative)."
    },
    {
        q: "The nature, position, and size of the image formed by a convex lens depend on the position of the object about point/s:",
        options: ["\\(2F\\)", "\\(F\\)", "\\(C\\)", "All of them"],
        correct: 3,
        explanation: "The image characteristics for a convex lens depend on the object's position relative to the focal point (\\(F\\)), \\(2F\\), and the center of curvature."
    },
    {
        q: "Magnification = ?",
        options: [
            "size of image + size of object", 
            "size of image \\(\\times\\) size of object", 
            "\\(\\frac{\\text{size of image}}{\\text{size of object}}\\)", 
            "size of object \\(\\times\\) size of image"
        ],
        correct: 2,
        explanation: "Magnification is defined as the ratio of image height to object height: \\(m = \\frac{h_i}{h_o} = -\\frac{v}{u}\\) (for lenses/mirrors)."
    },

    // ==================== PHYSICAL OPTICS ====================
    {
        q: "Optically active crystals rotates the:",
        options: ["vibrating plane", "polarization plane", "diffraction plane", "interference plane"],
        correct: 1,
        explanation: "Optically active substances rotate the plane of polarization of light passing through them. This property is called optical activity."
    },
    {
        q: "Which is not optically active?",
        options: ["sugar", "tartaric acid", "water", "sodium chlorate"],
        correct: 2,
        explanation: "Water is not optically active. Sugar, tartaric acid, and sodium chlorate are optically active substances that rotate the plane of polarization."
    },
    {
        q: "In double slit experiment we observe:",
        options: ["interference fringes only", "diffraction fringes only", "both interference and diffraction fringes", "polarized fringes"],
        correct: 2,
        explanation: "In the double-slit experiment, both interference (due to two slits) and diffraction (due to each slit) patterns are observed, resulting in a combined intensity distribution."
    },
    {
        q: "When light incident normally on thin film the path difference depends upon:",
        options: ["thickness of the film only", "nature of the film only", "angle of incidence only", "all thickness, nature and angle of incidence"],
        correct: 3,
        explanation: "For thin film interference, path difference depends on thickness of film, refractive index (nature), and angle of incidence. For normal incidence, angle of incidence \\(= 0\\), but still depends on thickness and refractive index."
    },
    {
        q: "Photoelectric effect was given by:",
        options: ["Hertz", "Fresnel", "Einstein", "Planck"],
        correct: 0,
        explanation: "Heinrich Hertz first observed the photoelectric effect in 1887. Einstein later explained it using quantum theory. However, the question asks who gave (discovered) it, so answer is Hertz."
    },
    {
        q: "Appearance of colour in thin films is due to:",
        options: ["diffraction", "dispersion", "interference", "polarization"],
        correct: 2,
        explanation: "Colors in thin films (like soap bubbles or oil slicks) are caused by interference of light waves reflected from the top and bottom surfaces of the film."
    },
    {
        q: "The blue colour of the sky is due to:",
        options: ["diffraction", "reflection", "polarization", "scattering"],
        correct: 3,
        explanation: "The blue color of the sky is due to Rayleigh scattering of sunlight by air molecules, which scatter shorter wavelengths (blue) more than longer wavelengths."
    },
    {
        q: "A light ray travelling from rarer to denser medium suffers a phase change of:",
        options: ["\\(60^\\circ\\)", "\\(90^\\circ\\)", "\\(180^\\circ\\)", "\\(45^\\circ\\)"],
        correct: 2,
        explanation: "When light reflects from a denser medium (higher refractive index), it undergoes a phase change of \\(\\pi\\) (\\(180^\\circ\\)). For transmission, there is no phase change."
    },
    {
        q: "When one mirror of a Michelson Interferometer is moved a distance of 0.5 mm we observe 2000 fringes. What will be wavelength of light used?",
        options: ["5000 nm", "200 nm", "500 nm", "2000 nm"],
        correct: 2,
        explanation: "In a Michelson interferometer, moving a mirror by \\(\\lambda/2\\) produces one fringe shift. Distance moved \\(= 0.5\\ \\text{mm} = 5 \\times 10^{-4}\\ \\text{m}\\). Number of fringes \\(= 2000\\), so \\(\\frac{\\lambda}{2} = \\frac{\\text{distance}}{\\text{fringes}} = \\frac{5 \\times 10^{-4}}{2000} = 2.5 \\times 10^{-7}\\ \\text{m} = 250\\ \\text{nm}\\). That gives \\(\\lambda = 500\\ \\text{nm}\\)."
    },
    {
        q: "Wavelength of X-rays falling at glancing angle of \\(30^\\circ\\) on a crystal with atomic spacing \\(2 \\times 10^{-10}\\ \\text{m}\\) for the first order diffraction is:",
        options: [
            "\\(4 \\times 10^{-10}\\ \\text{m}\\)", 
            "\\(2 \\times 10^{-10}\\ \\text{m}\\)", 
            "\\(0.02 \\times 10^{-10}\\ \\text{m}\\)", 
            "\\(20 \\times 10^{-10}\\ \\text{m}\\)"
        ],
        correct: 1,
        explanation: "Using Bragg's law: \\(n\\lambda = 2d\\sin\\theta\\). For \\(n = 1\\), \\(\\theta = 30^\\circ\\), \\(\\sin30^\\circ = \\frac{1}{2}\\). So \\(\\lambda = 2d\\sin\\theta = 2 \\times (2 \\times 10^{-10}) \\times \\frac{1}{2} = 2 \\times 10^{-10}\\ \\text{m}\\)."
    }
];