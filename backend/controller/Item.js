const prisma = require("../lib/prisma.js");
require("dotenv").config();

/* Create Item */
const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const {
        name,
          materials,
          description,
          price,
          reviewId,
          images,
          userId,
          comments,
          wishList,
          reviews,
          orderId,
          favoriteItem
      } = req.body;
      const Item = await prisma.Item.create({
        data: {
          name,
          materials,
          description,
          price,
          reviewId,
          images,
          userId,
          comments,
          wishList,
          reviews,
          orderId,
          favoriteItem
      
        },
      });

      return res.status(201).json({ Item });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Cannot Create Item" });
    } 
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

/* Get Items */
const GET = async (req,res) => {
  try {
    const Items = await prisma.Item.findMany();
    return res.status(200).json(Items)
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res.status(500).send({ message: "Error fetching Items", error: message })
  } 
};

/*GET Item By ID */
const GETById = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    const Item = await prisma.Item.findUnique({
      where: { id },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Item not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(Item));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error fetching item", error: message }),
      { status: 500 }
    );
  } 
};
/*UPDATE Item */
const UPDATE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();

    const { id } = params;
   
    const updateData = { ...body };

    const updateditem = await prisma.Item.update({
      where: { id },
      data: updateData,
    });

    return new Response(JSON.stringify(updateditem));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error updating item", error: message }),
      { status: 500 }
    );
  } 
};
/*DELETE Item */
const DELETE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.Item.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: "Item deleted successfully" })
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error deleting item", error: message }),
      { status: 500 }
    );
  }
};

module.exports =  {POST,GET,GETById,UPDATE,DELETE}
