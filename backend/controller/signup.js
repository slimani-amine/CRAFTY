const bcrypt = require( "bcrypt");
const prisma = require ("../lib/prisma.js")
require("dotenv").config()


 const SignUp = async  (req) =>{
   
    try {
      const body =  await req.body;
      console.log(body);
      
      const { 
        Role,
        Name,
        LastName,
        BuisnessName,
        Email,
        DateOfBirth,
        Password} =body
      const user = await prisma.user.findFirst({
        where: {
          Email: Email
        },
      })
     
      if (user?.Email) return new Response(JSON.stringify({message:" Email allready exist !"}))
      console.log(body);
      const salt = await bcrypt.genSalt(10);
      var hashedpassowrd = await bcrypt.hash(Password, salt)
      const newData = await prisma.user.create({
        data: { 
            
            Role: Role ,
            Name: Name,
            LastName: LastName,
            BuisnessName:BuisnessName,
            Email: Email,
            DateOfBirth: DateOfBirth  ,
            Password: hashedpassowrd ,
        },
      });
      if(!newData) return new Response(JSON.stringify({newData:"No"}))
      return new Response(JSON.stringify({newData})) 
    } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error))
    }
  }
  module.exports = SignUp ;