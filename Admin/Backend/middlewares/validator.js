const validator = (req, res, next) => {
    const {email,username,password} = req.body;

    if (!email || !username || !password ) {

      return res.status(400).json({
        err: "All the fields are not there",
      });
    }
    next();
  };
  module.exports = {
    validator,
  };
  