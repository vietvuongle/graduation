import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCapIcon, SparklesIcon } from "lucide-react";
const WelcomePage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white p-4 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-pink-500/10 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-blue-500/10 animate-pulse delay-700"></div>
                <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-orange-500/10 animate-ping"></div>
            </div>
            <div className={`max-w-md w-full bg-blue-700/50 rounded-lg p-8 backdrop-blur-md shadow-2xl border border-blue-600/50 relative transition-all duration-1000 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <div className="absolute -top-5 -right-5">
                    <SparklesIcon className="text-yellow-300 animate-pulse" size={24} />
                </div>
                <div className="absolute -bottom-3 -left-3">
                    <SparklesIcon className="text-yellow-300 animate-pulse delay-300" size={20} />
                </div>
                <div className={`flex justify-center mb-8 transition-all duration-700 delay-300 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-4 shadow-lg relative">
                        <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping opacity-50"></div>
                        <GraduationCapIcon size={40} className="relative z-10" />
                    </div>
                </div>
                <h1 className={`text-3xl md:text-4xl font-bold text-center mb-3 transition-all duration-700 delay-500 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>Chào mừng đến với</h1>
                <h2 className={`text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 transition-all duration-700 delay-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
                    Lễ Tốt Nghiệp
                </h2>
                <p className={`text-center text-lg mb-8 text-blue-100 transition-all duration-700 delay-900 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
                    Rất vui khi có bạn tham dự buổi lễ tốt nghiệp đặc biệt này. Hãy nhấn nút bên dưới để xem thêm thông tin chi tiết.
                </p>
                <div className={`flex justify-center transition-all duration-700 delay-1000 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
                    <Link to="/details" className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 hover:shadow-pink-500/50 shadow-lg relative group overflow-hidden">
                        <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                        <span className="relative">Xem Chi Tiết</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default WelcomePage;
