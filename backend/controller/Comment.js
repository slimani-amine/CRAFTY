const prisma = require("../lib/prisma.js");
require("dotenv").config();
 
/* Create Comment */
const POST = async (req, res) => {
  if (req.method === "POST") {
    try {     
      const {
        body,
        userId,
        articleId,
        itemId
      } = req.body;
      const Comment = await prisma.Comment.create({
        data: {
       body,
       userId,
       CommentId,
       itemId
        },
      });

      return res.status(201).json({ Comment });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Cannot Create Comment" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

/* Get Comments */
const GET = async (req, res) => {
  try {
    const Comments = await prisma.Comment.findMany();
    return res.status(200).json(Comments);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res
      .status(500)
      .send({ message: "Error fetching Comments", error: message });
  }
};

/*GET Comment By ID */
const GETById = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    const Comment = await prisma.Comment.findUnique({
      where: { id },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Comment not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(Comment));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error fetching Comment", error: message }),
      { status: 500 }
    );
  }
};
/*UPDATE Comment*/                            
const UPDATE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }
    const body = await req.json();

    const { id } = params;

    const updateData = { ...body };

    const updatedComment = await prisma.Comment.update({
      where: { id },
      data: updateData,
    });

    return new Response(JSON.stringify(updatedComment));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error updating Comment", error: message }),
      { status: 500 }
    );
  }
};
/*DELETE Comment */
const DELETE = async (req, { params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("ID parameter is missing");
    }

    const { id } = params;
    await prisma.Comment.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: "Comment deleted successfully" })
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: "Error deleting Comment", error: message }),
      { status: 500 }
    );
  }
};

module.exports = { POST, GET, GETById, UPDATE, DELETE };
