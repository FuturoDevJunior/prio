import jwt from 'jsonwebtoken';
const FAMILY_PASSWORD = "FAMILIA";
const JWT_SECRET = "family_priority_secret";
export const login = async (req, res) => {
    const { password } = req.body;
    if (password === FAMILY_PASSWORD) {
        const token = jwt.sign({ familyMember: true }, JWT_SECRET, { expiresIn: '24h' });
        res.cookie('auth_token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        return res.status(200).json({ success: true });
    }
    return res.status(401).json({ error: "Senha inválida" });
};
