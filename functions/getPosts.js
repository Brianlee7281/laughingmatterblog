// Netlify function to get all posts
exports.handler = async function(event, context) {
  try {
    // In a real implementation, this would fetch data from a database or file system
    // For this simplified version, we'll return hardcoded sample data
    const posts = [
      {
        id: 1,
        title: "The Paradox of Choice",
        excerpt: "Why more options can lead to less happiness and how to navigate decision fatigue.",
        section: "interesting-stuff",
        date: "2025-05-15",
        content: "# The Paradox of Choice\n\nIn today's world, we are constantly bombarded with options. From the 50 different types of toothpaste at the grocery store to the endless scroll of content on streaming platforms, choice has become both a blessing and a burden.\n\nPsychologist Barry Schwartz coined the term \"paradox of choice\" to describe how having more options can actually lead to increased anxiety, decision fatigue, and ultimately, less satisfaction with our choices. This counterintuitive idea challenges the conventional wisdom that more choice equals more freedom and happiness."
      },
      {
        id: 2,
        title: "Thinking, Fast and Slow",
        excerpt: "Exploring Daniel Kahneman's insights on the two systems that drive how we think.",
        section: "some-books",
        date: "2025-05-10",
        content: "# Thinking, Fast and Slow: A Journey Through the Mind\n\nDaniel Kahneman's groundbreaking work \"Thinking, Fast and Slow\" offers a fascinating window into the dual systems that shape our thoughts, decisions, and judgments. As a psychologist who won the Nobel Prize in Economics, Kahneman bridges disciplines to reveal how our minds actually work—often in ways that contradict our self-perception."
      }
    ];

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(posts)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch posts" })
    };
  }
};
