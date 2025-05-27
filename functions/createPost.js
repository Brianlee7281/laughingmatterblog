// Netlify function to create a new post
exports.handler = async function(event, context) {
  try {
    // Only allow POST requests
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" })
      };
    }

    // Parse the request body
    const data = JSON.parse(event.body);
    
    // Validate required fields
    if (!data.title || !data.excerpt || !data.content || !data.section || !data.date) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" })
      };
    }

    // In a real implementation, this would save the post to a database or file system
    // For this simplified version, we'll just return success with the data
    
    // Generate a new ID (in a real implementation, this would be handled by the database)
    const newPost = {
      id: Date.now(), // Use timestamp as a simple ID
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      section: data.section,
      date: data.date
    };

    return {
      statusCode: 201,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create post" })
    };
  }
};
