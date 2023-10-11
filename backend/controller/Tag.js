const prisma = require("../lib/prisma.js");
require("dotenv").config();
 
/* Create Tag */
const POST = async (req, res) => {
  if (req.method === "POST") {
    try {     
      const {
       tag,
       itemId
      } = req.body;
      const Tag = await prisma.Tag.create({
        data: {
          status,
          title,
          tags,
          description,
          coverImage,
          likes,
          userId,
          images,
          comments
        },
      });

      return res.status(201).json({ Tag });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Cannot Create Tag" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

/* Get Tags */
const GET = async (req, res) => {
  try {
    const Tags = await prisma.Tag.findMany();
    return res.status(200).json(Tags);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .send({ message: "Error fetching Tags", error: message });
  }
};

/*GET Tag By ID */
const GETById = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    const Tag = await prisma.Tag.findUnique({
      where: { id },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Tag not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(Tag));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error fetching Tag", error: message }),
      { status: 500 }
    );
  }
};
/*UPDATE Tag*/
const UPDATE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();

    const { id } = params;

    const updateData = { ...body };

    const updatedTag = await prisma.Tag.update({
      where: { id },
      data: updateData,
    });

    return new Response(JSON.stringify(updatedTag));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error updating Tag", error: message }),
      { status: 500 }
    );
  }
};
/*DELETE Tag */
const DELETE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.Tag.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: "Tag deleted successfully" })
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error deleting Tag", error: message }),
      { status: 500 }
    );
  }
};

module.exports = { POST, GET, GETById, UPDATE, DELETE };
