const prisma = require("../lib/prisma.js");
require("dotenv").config();
 
/* Create Notification */
const POST = async (req, res) => {
  if (req.method === "POST") {
    try {     
      const {
     title,
     body
      } = req.body;
      const Notification = await prisma.Notification.create({
        data: {
            title,
            body
        },
      });

      return res.status(201).json({ Notification });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Cannot Create Notification" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

/* Get Notifications */
const GET = async (req, res) => {
  try {
    const Notifications = await prisma.Notification.findMany();
    return res.status(200).json(Notifications);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .send({ message: "Error fetching Notifications", error: message });
  }
};

/*GET Notification By ID */
const GETById = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    const Notification = await prisma.Notification.findUnique({
      where: { id },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Notification not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(Notification));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error fetching Notification", error: message }),
      { status: 500 }
    );
  }
};
/*UPDATE Notification*/
const UPDATE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();

    const { id } = params;

    const updateData = { ...body };

    const updatedNotification = await prisma.Notification.update({
      where: { id },
      data: updateData,
    });

    return new Response(JSON.stringify(updatedNotification));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error updating Notification", error: message }),
      { status: 500 }
    );
  }
};
/*DELETE Notification */
const DELETE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.Notification.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: "Notification deleted successfully" })
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error deleting Notification", error: message }),
      { status: 500 }
    );
  }
};

module.exports = { POST, GET, GETById, UPDATE, DELETE };
