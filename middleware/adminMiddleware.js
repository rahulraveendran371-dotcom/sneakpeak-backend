const jwt = require("jsonwebtoken");
// നിങ്ങളുടെ ഫയലിന്റെ പേര് User.js എന്നാണെങ്കിൽ U ക്യാപിറ്റൽ ലെറ്റർ ആക്കുക
const User = require("../models/User"); 

const adminMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({
        message: "Authorization ഹെഡർ കണ്ടെത്തിയില്ല അല്ലെങ്കിൽ Bearer മിസ്സാണ്"
      });
    }

    const token = authHeader.split(" ")[1];

    // ടോക്കൺ വെരിഫൈ ചെയ്യുന്നു
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // ഡീബഗ് ചെയ്യാൻ വേണ്ടി: ടോക്കണിൽ എന്തൊക്കെ ഉണ്ടെന്ന് കൺസോളിൽ കാണാം
    console.log("Decoded Token Data:", decoded);

    // ടോക്കണിൽ ഉള്ള id വെച്ച് യൂസറെ തിരയുന്നു
    // ടോക്കൺ ഉണ്ടാക്കുമ്പോൾ 'id'ക്ക് പകരം '_id' ആണ് ഉപയോഗിച്ചതെങ്കിൽ decoded._id എന്ന് മാറ്റേണ്ടി വരും
    const user = await User.findById(decoded.id || decoded._id);

    if (!user) {
      return res.status(401).json({
        message: "ഈ ടോക്കണിലുള്ള യൂസറെ ഡാറ്റാബേസിൽ കണ്ടെത്താനായില്ല"
      });
    }

    // അഡ്മിൻ റോൾ ചെക്ക് ചെയ്യുന്നു
    if (user.role !== "admin") {
      return res.status(403).json({
        message: "നിങ്ങൾക്ക് അഡ്മിൻ പെർമിഷൻ ഇല്ല! ലോഗിൻ ചെയ്ത അക്കൗണ്ടിന്റെ റോൾ: " + user.role
      });
    }

    req.user = user;
    next();

  } catch (error) {
    console.error("Middleware Error:", error.message);
    res.status(401).json({
      message: "ടോക്കൺ തെറ്റാണ് അല്ലെങ്കിൽ കാലാവധി കഴിഞ്ഞു (Invalid Token)",
      error: error.message
    });
  }
};

module.exports = adminMiddleware;