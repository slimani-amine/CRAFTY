const prisma = require("../lib/prisma.js");
require("dotenv").config();

/* Create Wishlist */
const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { inWishlist, inCart, userId, itemId } = req.body;
      const Wishlist = await prisma.Wishlist.create({
        data: {
          inWishlist,
          inCart,
          userId,
          itemId,
        },
      });

      return res.status(201).json({ Wishlist });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Cannot Create Wishlist" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

/* Get Wishlists */
const GET = async (req, res) => {
  try {
    const Wishlists = await prisma.Wishlist.findMany();
    return res.status(200).json(Wishlists);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .send({ message: "Error fetching Wishlists", error: message });
  }
};

/*GET Wishlist By ID */
const GETById = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    const Wishlist = await prisma.Wishlist.findUnique({
      where: { id },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Wishlist not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(Wishlist));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({
        message: "Error fetching Wishlist",
        error: message,
      }),
      { status: 500 }
    );
  }
};
/*UPDATE Wishlist*/
const UPDATE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();

    const { id } = params;

    const updateData = { ...body };

    const updatedWishlist = await prisma.Wishlist.update({
      where: { id },
      data: updateData,
    });

    return new Response(JSON.stringify(updatedWishlist));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({
        message: "Error updating Wishlist",
        error: message,
      }),
      { status: 500 }
    );
  }
};
/*DELETE Wishlist */
const DELETE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.Wishlist.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: "Wishlist deleted successfully" })
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({
        message: "Error deleting Wishlist",
        error: message,
      }),
      { status: 500 }
    );
  }
};

module.exports = { POST, GET, GETById, UPDATE, DELETE };
