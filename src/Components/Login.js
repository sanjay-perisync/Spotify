import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; 


const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false); 

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let validationErrors = {};

        if (!validateEmail(formData.email)) {
            validationErrors.email = "Invalid email format";
        }

        if (!validatePassword(formData.password)) {
            validationErrors.password = "Password must be at least 8 characters, include a number, letter & special character";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        
        navigate("/home");

    };

    return (
        <div className="flex  items-center justify-center min-h-screen bg-customBgBlack text-white">
            <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-10">
                <div className="flex justify-center items-center flex-col">
                    <div className="">
                        <img
                            src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-black-17.png"
                            alt="Spotify Logo"
                            className="h-20 w-auto
                        invert-[100%] rounded-full"
                        />
                    </div>
                    <h2 className="text-4xl font-bold text-center mb-6">Log in to Spotify</h2>
                </div>


                {/* Social Login Buttons */}
                <div className="space-y-4 flex flex-col justify-center items-center">
                    <button className="w-96 flex  items-center justify-center border border-gray-500 rounded-full py-4 px-6 text-[18px] font-bold">
                        <span><img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" className="w-6 h-6" /></span>
                        <span className="flex-grow text-center">Continue with Google</span>
                    </button>

                    <button className="w-96 flex  items-center gap-4 border border-gray-500 rounded-full py-4 px-6 text-[18px] font-bold">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="w-6 h-6" />
                        <span className="flex-grow text-center">Continue with Facebook</span>
                    </button>

                    <button className="w-96 flex items-center gap-4 border border-gray-500 rounded-full py-4 px-6 text-[18px] font-bold">
                        <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" className="w-6 h-6 invert" />
                        <span className="flex-grow text-center">Continue with Apple</span>
                    </button>

                    <button className="w-96 flex items-center justify-center border border-gray-500 rounded-full py-4 px-6 text-[18px] font-bold">
                        <span className="text-center">Continue with phone number</span>
                    </button>
                </div>


                {/* Divider */}
                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-600" />
                    {/* <span className="mx-4 text-gray-400">or</span>
                    <hr className="flex-grow border-gray-600" /> */}
                </div>

                <div className="flex justify-center items-center">
                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 w-96 max-w-md">
                        <div className="mb-4">
                            <label className="block text-white text-[18px] font-semibold">Email or username</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 text-[18px] text-gray-400 mt-1 rounded bg-customBgBlack border border-gray-400 focus:outline-none focus:ring focus:ring-white"
                                placeholder="Email or username"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div className="mb-4 relative">
                            <label className="block text-white text-[18px] font-semibold">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 mt-1 text-[18px] text-gray-400 rounded bg-customBgBlack border border-gray-400 focus:outline-none focus:ring focus:ring-white pr-12"
                                    placeholder="Password"
                                />
                                {/* Show/Hide Password Button */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
                                >
                                    {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        <button type="submit" className="w-full text-[18px] bg-green-500 text-black py-2 rounded-full font-semibold hover:bg-green-400">
                            Log In
                        </button>
                    </form>
                </div>


                {/* Forgot Password */}
                <div className="text-center mt-10">
                    <button className="text-white text-[18px] underline hover:text-green-600" >
                        Forgot your password?
                    </button>
                </div>


                {/* Dont have an account */}
                <div className="text-center mt-10 flex gap-2 justify-center items-center">
                    <p className="text-gray-500">Don't have an account ?</p>
                    <button className="text-white font-semibold text-[18px] underline hover:text-green-600">
                        Signup For spotify
                    </button>
                </div>

                <div className="mt-24">
                    <p className="text-sm text-gray-200 text-center">This site is protected by reCAPTCHA and the Google <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Service</span> apply.</p>
                </div>
            </div>


        </div>
    );
};

export default Login;
