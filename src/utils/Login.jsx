import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Login = (props) => {
    const [isRegister, setIsRegister] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Forms State
    const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "user" });
    const [formDatas, setFormDatas] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleChanges = (e) => setFormDatas({ ...formDatas, [e.target.name]: e.target.value });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black backdrop-blur-sm flex items-center justify-center z-[2000] p-4"
            onClick={props.onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-full max-w-md bg-black border border-white/10 shadow-[20px_20px_0px_0px_rgba(11,244,135,0.1)]"
                onClick={(e) => e.stopPropagation()}
            >
               

                <div className="p-8">
                    {/* Tab Switcher - Sharp */}
                    <div className="flex mb-8 border-b border-white/10">
                        <button
                            onClick={() => setIsRegister(false)}
                            className={`flex-1 py-3 text-xs font-black tracking-[0.2em] transition-all ${!isRegister ? "text-[#0BF487] border-b-2 border-[#0BF487]" : "text-gray-500"}`}
                        >
                            LOGIN
                        </button>
                        <button
                            onClick={() => setIsRegister(true)}
                            className={`flex-1 py-3 text-xs font-black tracking-[0.2em] transition-all ${isRegister ? "text-[#0BF487] border-b-2 border-[#0BF487]" : "text-gray-500"}`}
                        >
                            REGISTER
                        </button>
                    </div>

                    <form className="space-y-5" onSubmit={isRegister ? () => {} : () => {}}>
                        {isRegister && (
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-gray-400 tracking-widest uppercase">Full Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#0BF487] transition-all"
                                    placeholder="ENTER NAME"
                                />
                            </div>
                        )}

                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-gray-400 tracking-widest uppercase">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                onChange={isRegister ? handleChange : handleChanges}
                                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#0BF487] transition-all"
                                placeholder="MAIL@EXAMPLE.COM"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-gray-400 tracking-widest uppercase">Password</label>
                            <input
                                name="password"
                                type="password"
                                onChange={isRegister ? handleChange : handleChanges}
                                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#0BF487] transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Sharp Action Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#0BF487] text-black py-4 text-xs font-black tracking-[0.3em] hover:bg-white transition-all transform active:scale-95 mt-4"
                        >
                            {isRegister ? "CREATE ACCOUNT" : "SIGN IN"}
                        </button>
                    </form>

                    {/* Footer Info */}
                    <p className="mt-6 text-center text-[9px] text-gray-600 tracking-widest uppercase">
                        Secure Access • encrypted data • 2026
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Login;

