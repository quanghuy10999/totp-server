const express = require('express');
const speakeasy = require('speakeasy');
const app = express();

// Middleware để parse body JSON
app.use(express.json());

// Endpoint để tạo mã TOTP
app.post('/generate-totp', (req, res) => {
  const { secret } = req.body;

  if (!secret) {
    return res.status(400).json({ error: 'Secret key is required' });
  }

  try {
    const token = speakeasy.totp({
      secret: secret,
      encoding: 'base32',
      step: 30,
      digits: 6
    });

    res.json({ totpCode: token });
  } catch (error) {
    res.status(500).json({ error: 'Invalid secret key or error generating TOTP' });
  }
});

// Chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});