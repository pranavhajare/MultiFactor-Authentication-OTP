const User = require("../models/User"); //Import the User model

const randomize = require('randomatic');
const sendOtpEmail = require('../utils/sendOtpEmail'); // Import the OTP email sender


// Login function
exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    try {
        const user = await User.findOne({ email, password });
        console.log(user);
        if (!user) {
            return res.json({ success: false, message: 'Invalid credentials' });
        }

        const generatedOtp = randomize('0', 6);
        user.otp = generatedOtp;
        await user.save();

        sendOtpEmail(email, generatedOtp);

        return res.json({ success: true });
    } catch (error) {
        console.error('Error during login:', error.message);
        return res.status(500).json({ success: false, message: 'An error occurred during login' });
    }
};

// Verify OTP function
exports.verifyOtp = async (req, res) => {
    const { otp } = req.body;

    try {
        const user = await User.findOne({ otp });

        if (!user) {
            return res.json({ success: false, message: 'Invalid OTP' });
        }

        user.otp = '';
        await user.save();

        return res.json({ success: true });
    } catch (error) {
        console.error('Error during OTP verification:', error.message);
        return res.status(500).json({ success: false, message: 'An error occurred during OTP verification' });
    }
};