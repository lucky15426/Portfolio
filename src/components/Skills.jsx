import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function Skills() {
    const { theme } = useContext(ThemeContext);
    const categories = [
        {
            title: 'Front-end',
            skills: [
                { name: 'React', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg', isInvertLogo: false },
                { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', isInvertLogo: true },
                { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg', isInvertLogo: false },
                { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg', isInvertLogo: false },
                { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg', isInvertLogo: false },
                { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg', isInvertLogo: false },
                { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg', isInvertLogo: false }
            ]
        },
        {
            title: 'Back-end',
            skills: [
                { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg', isInvertLogo: false },
                { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg', isInvertLogo: true },
                { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', isInvertLogo: false },
                { name: 'Java', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg', isInvertLogo: false },
                { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/fastapi/fastapi-original.svg', isInvertLogo: false },
                { name: 'REST API', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postman/postman-original.svg', isInvertLogo: false }
            ]
        },
        {
            title: 'Databases',
            skills: [
                { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg', isInvertLogo: false },
                { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg', isInvertLogo: false },
                { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg', isInvertLogo: false },
                { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/supabase/supabase-original.svg', isInvertLogo: false }
            ]
        },
        {
            title: 'DevOps & Tools',
            skills: [
                { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg', isInvertLogo: false },
                { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/github/github-original.svg', isInvertLogo: true },
                { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vercel/vercel-original.svg', isInvertLogo: true },
                { name: 'Cloudinary', logo: 'https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg', isInvertLogo: false },
                { name: 'Clerk', logo: 'https://avatars.githubusercontent.com/u/49538330?s=200&v=4', isInvertLogo: false },
                { name: 'Prisma', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/prisma/prisma-original.svg', isInvertLogo: true },
                { name: 'Vite', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vitejs/vitejs-original.svg', isInvertLogo: false },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section
            id="skills"
            className={`py-24 px-6 relative overflow-hidden bg-transparent`}
        >
            {/* Animated background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                        }`}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                        }`}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className={`text-5xl md:text-6xl font-bold mb-4 ${theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                            }`}
                    >
                        Skills
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={`h-1 mx-auto rounded-full ${theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                            }`}
                    />
                </motion.div>

                <div className="space-y-20">
                    {categories.map((category, idx) => (
                        <div key={idx}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className={`text-2xl md:text-3xl font-bold mb-8 pl-4 border-l-4 ${theme === "dark" ? "text-[#b8f2e6] border-[#b8f2e6]" : "text-[#5e6472] border-[#aed9e0]"
                                    }`}
                            >
                                {category.title}
                            </motion.h3>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
                            >
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            y: -5,
                                            transition: { type: "spring", stiffness: 400, damping: 10 }
                                        }}
                                        className="group relative"
                                    >
                                        <motion.div
                                            className={`relative p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 flex flex-col items-center gap-3 ${theme === "dark"
                                                ? "bg-[#b8f2e6]/5 border-[#b8f2e6]/10 hover:bg-[#b8f2e6]/10 hover:border-[#b8f2e6]/30"
                                                : "bg-[#aed9e0]/20 border-[#aed9e0]/30 hover:bg-[#aed9e0]/40 hover:border-[#aed9e0]/50"
                                                }`}
                                        >
                                            <div className="h-12 w-12 flex items-center justify-center">
                                                <img
                                                    src={skill.logo}
                                                    alt={skill.name}
                                                    className={`w-10 h-10 object-contain transition-all duration-300 ${theme === "dark" && skill.isInvertLogo ? "brightness-0 invert" : ""
                                                        }`}
                                                />
                                            </div>

                                            <span className={`text-sm md:text-base font-medium text-center ${theme === "dark" ? "text-[#b8f2e6]/90" : "text-[#5e6472]"
                                                }`}>
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;