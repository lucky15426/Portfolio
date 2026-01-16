import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { FaGithub } from 'react-icons/fa';
import { useContext, useRef } from 'react';
import { ThemeContext } from '../App';

function ProjectCard({ title, description, tags, link, github, image, badge }) {
    const { theme } = useContext(ThemeContext);
    const cardRef = useRef(null);

    // Mouse positions for 3D tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Transform values into rotations
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    // Smooth springs
    const springConfig = { damping: 20, stiffness: 300 };
    const smoothX = useSpring(rotateX, springConfig);
    const smoothY = useSpring(rotateY, springConfig);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                rotateX: smoothX,
                rotateY: smoothY,
            }}
            className="group relative h-full"
        >
            {/* Card container */}
            <div className={`h-full p-8 rounded-3xl backdrop-blur-sm border-2 transition-all duration-500 relative overflow-hidden flex flex-col ${theme === "dark"
                ? "bg-[#5e6472]/30 border-[#b8f2e6]/20 hover:border-[#b8f2e6]/50 hover:bg-[#5e6472]/50"
                : "bg-white/80 border-[#aed9e0]/30 hover:border-[#aed9e0]/60 hover:bg-white"
                }`}>
                {/* Animated gradient overlay */}
                <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${theme === "dark"
                        ? "bg-gradient-to-br from-[#b8f2e6]/10 via-transparent to-[#aed9e0]/10"
                        : "bg-gradient-to-br from-[#aed9e0]/20 via-transparent to-[#b8f2e6]/20"
                        }`}
                />

                {/* Badge (e.g. Winner) */}
                {badge && (
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className={`absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${theme === "dark"
                            ? "bg-[#b8f2e6] text-[#1c1c1c]"
                            : "bg-[#aed9e0] text-[#5e6472]"
                            }`}
                    >
                        {badge}
                    </motion.div>
                )}

                {/* Project Image */}
                <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
                    <motion.img
                        src={image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070"}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t opacity-40 ${theme === "dark" ? "from-[#1c1c1c]" : "from-white"
                        }`} />
                </div>

                <div className="relative z-10 flex flex-col flex-grow">
                    {/* Title */}
                    <motion.h3
                        className={`text-2xl md:text-3xl font-bold mb-4 ${theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                            }`}
                        whileHover={{ scale: 1.02 }}
                    >
                        {title}
                    </motion.h3>

                    {/* Description */}
                    <p className={`mb-6 leading-relaxed flex-grow ${theme === "dark" ? "text-[#aed9e0]" : "text-[#5e6472]"
                        } opacity-90`}>
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${theme === "dark"
                                    ? "bg-[#b8f2e6]/20 text-[#b8f2e6] hover:bg-[#b8f2e6]/30"
                                    : "bg-[#aed9e0]/40 text-[#5e6472] hover:bg-[#aed9e0]/60"
                                    }`}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 items-center pt-4 border-t-2 border-opacity-20 border-current">
                        {link && (
                            <motion.a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center gap-2 font-semibold transition-colors group/link ${theme === "dark"
                                    ? "text-[#b8f2e6] hover:text-[#aed9e0]"
                                    : "text-[#5e6472] hover:text-[#aed9e0]"
                                    }`}
                            >
                                <span>View Live</span>
                                <svg
                                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.a>
                        )}
                        {github && (
                            <motion.a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15, rotate: 360 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={`p-2 rounded-lg transition-all ${theme === "dark"
                                    ? "text-[#b8f2e6] hover:bg-[#b8f2e6]/20"
                                    : "text-[#5e6472] hover:bg-[#aed9e0]/30"
                                    }`}
                                aria-label="View GitHub repository"
                            >
                                <FaGithub size={24} />
                            </motion.a>
                        )}
                    </div>
                </div>

                {/* Hover shine effect */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                        background: theme === "dark"
                            ? "linear-gradient(135deg, transparent 0%, rgba(184, 242, 230, 0.1) 50%, transparent 100%)"
                            : "linear-gradient(135deg, transparent 0%, rgba(174, 217, 224, 0.15) 50%, transparent 100%)"
                    }}
                    animate={{
                        x: ['-100%', '100%'],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </motion.div>
    );
}

export default ProjectCard;