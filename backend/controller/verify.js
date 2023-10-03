const express = require("express");
const jwt = require("jsonwebtoken");




app.use(express.json());

const verify = async (req, res) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

   
    const tokenParts = token.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      return res.status(401).json({
        message: "Invalid token format",
      });
    }

    const access = process.env.ACCESS_TOKEN_SECRET || "";
    const decodedToken = jwt.verify(tokenParts[1], access);

    return res.status(200).json({
      message: "Access granted",
      tokeninfo: decodedToken.userId,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
}
module.exports = verify ;