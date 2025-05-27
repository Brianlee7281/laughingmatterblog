// Netlify function to update an existing post
exports.handler = async function(event, context) {
  try {
    // Only allow PUT requests
    if (event.httpMethod !== "PUT") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" })
      };
    }

    // Parse the request body
    const data = JSON.parse(event.body);
    
    // Validate required fields
    if (!data.id || !data.title || !data.excerpt || !data.content || !data.section || !data.date) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" })
      };
    }

    // In a real implementation, this would update the post in a database or file system
    // For this simplified version, we'll just return success with the updated data
    
    const updatedPost = {
      id: data.id,
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      section: data.section,
      date: data.date
    };

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedPost)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to update post" })
    };
  }
};
