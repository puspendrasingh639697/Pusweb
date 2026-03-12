import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Login = (props) => {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [formDatas, setFormDatas] = useState({ email: "", password: "" });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleChanges = (e) =>
        setFormDatas({ ...formDatas, [e.target.name]: e.target.value });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#030802] bg-[linear-gradient(-5deg,rgba(3,8,2,1)_0%,rgba(3,74,31,1)_50%)] flex items-center justify-center z-[2000] p-4"
            onClick={props.onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-full max-w-md bg-blue-900 text-white border border-white/10 shadow-xl rounded-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-8">

                    {/* Tabs */}
                    <div className="flex mb-8 ">
                        <button
                            onClick={() => setIsRegister(false)}
                            className={`flex-1 py-3 text-xm  tracking-widest ${
                                !isRegister
                                    ? "bg-[#030802] bg-[linear-gradient(-5deg,rgba(3,8,2,1)_0%,rgba(3,74,31,1)_50%)]"
                                    : "bg-[#030802] bg-[linear-gradient(-5deg,rgba(3,8,2,1)_0%,rgba(3,74,31,1)_50%)]"
                            }`}
                        >
                            LOGIN
                        </button>

                        <button
                            onClick={() => setIsRegister(true)}
                            className={`flex-1 py-3 text-xm tracking-widest ${
                                isRegister
                                    ? "text-white"
                                    : "text-white"
                            }`}
                        >
                            REGISTER
                        </button>
                    </div>

                    <form className="space-y-5">
                        {isRegister && (
                            <div>
                                <label className="text-xs text-white">Full Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    onChange={handleChange}
                                    className="w-full bg-white/90 border border-white/20 px-4 py-3 rounded-md text-white focus:outline-none focus:border-blue-400"
                                    placeholder="Enter name"
                                />
                            </div>
                        )}

                        <div>
                            <label className="text-xs text-gray-300">Email</label>
                            <input
                                name="email"
                                type="email"
                                onChange={isRegister ? handleChange : handleChanges}
                                className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-md text-white focus:outline-none focus:border-green-400"
                                placeholder="mail@example.com"
                            />
                        </div>

                        <div>
                            <label className="text-xs text-gray-300">Password</label>
                            <input
                                name="password"
                                type="password"
                                onChange={isRegister ? handleChange : handleChanges}
                                className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-md text-white focus:outline-none focus:border-green-400"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black py-3 rounded-md font-bold tracking-wider hover:bg-green-300 transition"
                        >
                            {isRegister ? "CREATE ACCOUNT" : "SIGN IN"}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-xs text-gray-400">
                        Secure Access • encrypted data • 2026
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Login;