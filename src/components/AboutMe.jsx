import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../App';


function AboutMe() {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            id="about"
            className={`py-24 px-6 relative overflow-hidden bg-transparent`}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-10 ${theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                        }`}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-10 ${theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                        }`}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Section */}


                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, type: "spring", stiffness: 50, delay: 0.2 }}
                        className="w-full max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center mb-16"
                        >
                            <motion.h2
                                className={`text-5xl md:text-6xl font-bold mb-6 ${theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                                    }`}
                            >
                                About Me
                            </motion.h2>

                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "6rem" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className={`h-1.5 rounded-full mx-auto mb-8 ${theme === "dark" ? "bg-[#b8f2e6]" : "bg-[#aed9e0]"
                                    }`}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className={`space-y-6 text-lg leading-relaxed ${theme === "dark" ? "text-[#aed9e0]" : "text-[#5e6472]"
                                }`}


                        >


                            <p>
                                I'm a <span className="highlight">full-stack developer</span> studying Computer Science at <span className="highlight">NSUT Delhi</span>, specializing in building <span className="bold">AI-powered web applications</span> with React, Next.js, and Node.js.
                            </p>
                            <p>
                                I'm a developer <span className="highlight">obsessed with crafting</span> elegant
                                solutions to complex problems.
                            </p>
                            <p>
                                From <span className="bold">React frontends</span> to <span className="bold">scalable
                                    backends</span>, I build applications that blend functionality with beautiful design.
                            </p>
                            <p>
                                Always exploring <span className="highlight">new technologies</span>, chasing <span className="highlight">hackathon wins</span>, and turning ideas into reality.
                            </p>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;