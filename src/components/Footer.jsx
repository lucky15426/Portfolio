import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

function Footer() {
    const { theme } = useContext(ThemeContext);
    const currentYear = new Date().getFullYear();

    const navItems = ['Home', 'Experience', 'Projects', 'About', 'Skills', 'Contact'];

    const handleNavClick = (e, item) => {
        e.preventDefault();
        const sectionId = item.toLowerCase();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1
            }
        }
    };

    return (
        <footer className={`py-12 px-6 relative overflow-hidden border-t ${theme === 'dark' ? 'bg-[#1c1c1c] border-[#b8f2e6]/10' : 'bg-[#fafafa] border-[#aed9e0]/20'}`}>
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
                >
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <motion.h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'}`}>
                            Lucky Kumar Gupta
                        </motion.h3>
                        <p className={`text-sm leading-relaxed max-w-xs ${theme === 'dark' ? 'text-[#aed9e0]/70' : 'text-[#5e6472]/70'}`}>
                            Building innovative, AI-powered web experiences with a focus on elegance and functionality.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'}`}>Quick Links</h4>
                        <ul className="grid grid-cols-2 gap-3">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={(e) => handleNavClick(e, item)}
                                        className={`text-sm transition-colors duration-300 hover:translate-x-1 inline-block ${theme === 'dark' ? 'text-[#aed9e0]/80 hover:text-[#b8f2e6]' : 'text-[#5e6472]/80 hover:text-[#aed9e0]'}`}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'}`}>Connect</h4>
                        <div className="flex gap-4">
                            <motion.a
                                href="https://github.com/lucky15426"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.1 }}
                                className={`p-3 rounded-xl border transition-all ${theme === 'dark' ? 'glass-card text-[#b8f2e6] hover:bg-[#b8f2e6]/10' : 'glass-card-light text-[#5e6472] hover:bg-[#aed9e0]/20'}`}
                            >
                                <Github size={20} />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/lucky-gupta23/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.1 }}
                                className={`p-3 rounded-xl border transition-all ${theme === 'dark' ? 'glass-card text-[#b8f2e6] hover:bg-[#b8f2e6]/10' : 'glass-card-light text-[#5e6472] hover:bg-[#aed9e0]/20'}`}
                            >
                                <Linkedin size={20} />
                            </motion.a>
                            <motion.a
                                href="mailto:luckygupta1523@gmail.com"
                                whileHover={{ y: -5, scale: 1.1 }}
                                className={`p-3 rounded-xl border transition-all ${theme === 'dark' ? 'glass-card text-[#b8f2e6] hover:bg-[#b8f2e6]/10' : 'glass-card-light text-[#5e6472] hover:bg-[#aed9e0]/20'}`}
                            >
                                <Mail size={20} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className={`mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${theme === 'dark' ? 'border-[#b8f2e6]/10' : 'border-[#aed9e0]/20'}`}
                >
                    <p className={`text-sm ${theme === 'dark' ? 'text-[#aed9e0]/50' : 'text-[#5e6472]/60'}`}>
                        © {currentYear} Lucky Kumar Gupta. All rights reserved.
                    </p>
                    <p className={`text-sm flex items-center gap-2 ${theme === 'dark' ? 'text-[#aed9e0]/50' : 'text-[#5e6472]/60'}`}>
                        Made with <Heart size={14} className="text-red-400 fill-red-400" /> by Lucky Kumar Gupta
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;
