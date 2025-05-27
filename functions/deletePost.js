// Netlify function to delete a post
exports.handler = async function(event, context) {
  try {
    // Only allow DELETE requests
    if (event.httpMethod !== "DELETE") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" })
      };
    }

    // Get the post ID from the path parameter
    const id = event.path.split("/").pop();
    
    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing post ID" })
      };
    }

    // In a real implementation, this would delete the post from a database or file system
    // For this simplified version, we'll just return success
    
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: `Post ${id} deleted successfully` })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to delete post" })
    };
  }
};
