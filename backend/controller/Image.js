const prisma = require("../lib/prisma.js");
require("dotenv").config();

/* Create Image */
const POST = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { url, reviewId, itemId, articleId } = req.body;
      const Image = await prisma.Image.create({
        data: {
          url,
          reviewId,
          itemId,
          articleId,
        },
      });

      return res.status(201).json({ Image });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Cannot Create Image" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

/* Get Images */
const GET = async (req, res) => {
  try {
    const Images = await prisma.Image.findMany();
    return res.status(200).json(Images);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .send({ message: "Error fetching Images", error: message });
  }
};

/*GET Image By ID */
const GETById = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    const Image = await prisma.Image.findUnique({
      where: { id },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Image not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(Image));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error fetching Image", error: message }),
      { status: 500 }
    );
  }
};
/*UPDATE Image*/
const UPDATE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();

    const { id } = params;

    const updateData = { ...body };

    const updatedImage = await prisma.Image.update({
      where: { id },
      data: updateData,
    });

    return new Response(JSON.stringify(updatedImage));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error updating Image", error: message }),
      { status: 500 }
    );
  }
};
/*DELETE Image */
const DELETE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.Image.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: "Image deleted successfully" })
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error deleting Image", error: message }),
      { status: 500 }
    );
  }
};

module.exports = { POST, GET, GETById, UPDATE, DELETE };
