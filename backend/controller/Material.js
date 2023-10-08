const prisma = require("../lib/prisma.js");
require("dotenv").config();
 
/* Create Material */
const POST = async (req, res) => {
  if (req.method === "POST") {
    try {     
      const {
        materialUsed,
        itemId
      } = req.body;
      const Material = await prisma.Material.create({
        data: {
            materialUsed,
            itemId
        },
      });

      return res.status(201).json({ Material });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Cannot Create Material" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

/* Get Materials */
const GET = async (req, res) => {
  try {
    const Materials = await prisma.Material.findMany();
    return res.status(200).json(Materials);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .send({ message: "Error fetching Materials", error: message });
  }
};

/*GET Material By ID */
const GETById = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    const Material = await prisma.Material.findUnique({
      where: { id },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Material not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(Material));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error fetching Material", error: message }),
      { status: 500 }
    );
  }
};
/*UPDATE Material*/
const UPDATE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();

    const { id } = params;

    const updateData = { ...body };

    const updatedMaterial = await prisma.Material.update({
      where: { id },
      data: updateData,
    });

    return new Response(JSON.stringify(updatedMaterial));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error updating Material", error: message }),
      { status: 500 }
    );
  }
};
/*DELETE Material */
const DELETE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.Material.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: "Material deleted successfully" })
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error deleting Material", error: message }),
      { status: 500 }
    );
  }
};

module.exports = { POST, GET, GETById, UPDATE, DELETE };
