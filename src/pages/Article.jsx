import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

// Sample article data
const articles = [
  {
    id: 1,
    title: "The Paradox of Choice",
    content: `
      <h2>The Paradox of Choice</h2>
      <p>In today's world, we are constantly bombarded with options. From the 50 different types of toothpaste at the grocery store to the endless scroll of content on streaming platforms, choice has become both a blessing and a burden.</p>
      
      <p>Psychologist Barry Schwartz coined the term "paradox of choice" to describe how having more options can actually lead to increased anxiety, decision fatigue, and ultimately, less satisfaction with our choices. This counterintuitive idea challenges the conventional wisdom that more choice equals more freedom and happiness.</p>
      
      <h3>Why More Options Can Make Us Miserable</h3>
      <p>When faced with too many options, several psychological phenomena occur:</p>
      
      <p><strong>Decision Paralysis:</strong> With overwhelming options, we often delay making decisions or avoid them altogether. The mental effort required to compare numerous alternatives becomes exhausting.</p>
      
      <p><strong>Increased Expectations:</strong> More options raise our expectations. We believe that with so many choices, we should be able to find the "perfect" option. This makes it easier to imagine alternatives that might have been better than our actual choice.</p>
      
      <p><strong>Self-Blame:</strong> When we have many options, we take more responsibility for our choices. If something goes wrong, we blame ourselves for not choosing better, rather than accepting that some outcomes are beyond our control.</p>
      
      <h3>Finding Balance in a World of Endless Options</h3>
      <p>So how do we navigate this paradox? Here are some strategies:</p>
      
      <p><strong>Become a "Satisficer":</strong> Instead of maximizing (trying to make the absolute best choice), aim to satisfice—find something that meets your criteria and is "good enough." This approach leads to greater satisfaction and less regret.</p>
      
      <p><strong>Limit Your Options:</strong> Deliberately constrain your choices. Set parameters before you begin searching, whether you're shopping, choosing a restaurant, or deciding on a career path.</p>
      
      <p><strong>Practice Gratitude:</strong> Focus on appreciating what you have rather than ruminating on what you might have had. This mindset shift can significantly increase satisfaction with your choices.</p>
      
      <p>The paradox of choice reminds us that freedom and autonomy, while valuable, have limits. Sometimes, the most liberating choice is to choose fewer choices.</p>
    `,
    section: "interesting-stuff",
    date: "May 15, 2025"
  },
  {
    id: 2,
    title: "Thinking, Fast and Slow",
    content: `
      <h2>Thinking, Fast and Slow: A Journey Through the Mind</h2>
      <p>Daniel Kahneman's groundbreaking work "Thinking, Fast and Slow" offers a fascinating window into the dual systems that shape our thoughts, decisions, and judgments. As a psychologist who won the Nobel Prize in Economics, Kahneman bridges disciplines to reveal how our minds actually work—often in ways that contradict our self-perception.</p>
      
      <h3>System 1 and System 2: The Characters of Our Mental Lives</h3>
      <p>The book introduces us to two metaphorical systems in the brain:</p>
      
      <p><strong>System 1:</strong> Fast, intuitive, and automatic. This system operates effortlessly, generating impressions and feelings that often become the source of our explicit beliefs. It's what allows you to automatically complete the phrase "bread and..." or recognize anger in someone's voice.</p>
      
      <p><strong>System 2:</strong> Slow, deliberate, and effortful. This system allocates attention to mental activities that demand concentration, such as complex calculations, logical reasoning, or focusing on a specific person in a crowded room.</p>
      
      <p>While we identify primarily with System 2—our conscious, reasoning self—Kahneman demonstrates that System 1 is the true hero (and villain) of the story, silently influencing much of our thinking.</p>
      
      <h3>Cognitive Biases: When Our Minds Play Tricks</h3>
      <p>The interplay between these systems creates predictable biases in our thinking:</p>
      
      <p><strong>Anchoring Effect:</strong> Our tendency to rely too heavily on the first piece of information encountered (the "anchor"). For instance, if you first see a $1,000 watch, a $400 watch suddenly seems reasonable by comparison.</p>
      
      <p><strong>Availability Heuristic:</strong> We overestimate the likelihood of events that come readily to mind. Media coverage of plane crashes makes flying seem more dangerous than driving, despite statistics showing the opposite.</p>
      
      <p><strong>Loss Aversion:</strong> We feel losses more acutely than equivalent gains. Most people would decline a bet with equal chances to win $150 or lose $100, even though the expected value is positive.</p>
      
      <h3>Practical Wisdom from Kahneman's Work</h3>
      <p>Understanding these systems offers practical insights:</p>
      
      <p><strong>Recognize Your Limitations:</strong> Acknowledge that your intuitions, while often useful, can lead you astray in specific situations.</p>
      
      <p><strong>Slow Down:</strong> When facing important decisions, deliberately engage System 2 to check the impulses of System 1.</p>
      
      <p><strong>Create Better Environments:</strong> Design decision environments that account for biases rather than expecting people to overcome them through sheer willpower.</p>
      
      <p>Kahneman's work doesn't just explain how we think—it offers a more compassionate view of human irrationality. Our cognitive biases aren't personal failings but features of our mental architecture. By understanding these patterns, we can become slightly more rational in a world that often exploits our psychological blind spots.</p>
    `,
    section: "some-books",
    date: "May 10, 2025"
  },
  {
    id: 3,
    title: "The Art of Noticing",
    content: `
      <h2>The Art of Noticing: Rediscovering the Extraordinary in the Ordinary</h2>
      <p>In our hyperconnected world, one of the scarcest resources isn't time or money—it's attention. We move through our days in a state of continuous partial attention, missing the rich details that make life meaningful. The art of noticing offers a path back to presence and wonder.</p>
      
      <h3>The Crisis of Inattention</h3>
      <p>Our devices and busy schedules have trained us to scan rather than see, to skim rather than absorb. This constant state of distraction has profound consequences:</p>
      
      <p><strong>Diminished Joy:</strong> Many of life's pleasures are found in subtle details—the changing light at dusk, the texture of a well-worn book, the complex flavors in a home-cooked meal. Without attention, these experiences flatten.</p>
      
      <p><strong>Weakened Connections:</strong> True listening requires full presence. When we're partially elsewhere, our relationships suffer, even if we don't immediately notice the erosion.</p>
      
      <p><strong>Creative Drought:</strong> Innovation and insight emerge from observing what others miss. Without deep attention, our creative wells run dry.</p>
      
      <h3>Practices for Deeper Noticing</h3>
      <p>Cultivating attention is less about adding something new to your life and more about removing the filters that prevent you from experiencing what's already there:</p>
      
      <p><strong>The Five Senses Inventory:</strong> Spend five minutes focusing exclusively on each sense. What do you hear when you really listen? What textures do you feel when you touch mindfully?</p>
      
      <p><strong>The Unfamiliar Path:</strong> Take a different route home. Shop at a store you've never visited. Disrupting routines awakens attention.</p>
      
      <p><strong>The Beginner's Mind:</strong> Approach familiar objects or experiences as if encountering them for the first time. What would a visitor from another planet notice about your morning coffee ritual?</p>
      
      <p><strong>The Collection Game:</strong> Become a collector of something overlooked—interesting shadows, unusual doorknobs, overheard snippets of conversation. The act of collecting trains your attention.</p>
      
      <h3>From Noticing to Meaning</h3>
      <p>The ultimate value of noticing extends beyond momentary pleasure. It's about reclaiming authorship of your attention and, by extension, your life. When you decide what deserves your focus rather than responding to the loudest stimuli, you begin to construct meaning on your own terms.</p>
      
      <p>In a culture that profits from your distraction, choosing to notice deeply is a radical act. It's a declaration that your attention is valuable and that the world, when truly seen, is endlessly fascinating.</p>
    `,
    section: "interesting-stuff",
    date: "May 5, 2025"
  },
  {
    id: 4,
    title: "Sapiens: A Brief History of Humankind",
    content: `
      <h2>Sapiens: Rethinking Human History</h2>
      <p>Yuval Noah Harari's "Sapiens: A Brief History of Humankind" offers a sweeping narrative that challenges our most fundamental assumptions about human progress, happiness, and the stories we tell ourselves. By compressing 70,000 years of human history into a single volume, Harari reveals patterns and contradictions that remain invisible when we focus on shorter timescales.</p>
      
      <h3>The Cognitive Revolution: The Power of Shared Fictions</h3>
      <p>Harari's most provocative insight is that Homo sapiens conquered the world through our unique ability to believe in shared fictions. While other animals can communicate about objective realities ("there's a lion by the river"), only humans can create and believe in things that exist purely in our collective imagination: nations, money, human rights, corporations, and religions.</p>
      
      <p>These "intersubjective realities" allow unprecedented cooperation among strangers. A Catholic priest from Spain and a Catholic priest from Poland who have never met can still work together effectively because they share the same myths and beliefs. No other animal can achieve this scale of cooperation with non-kin.</p>
      
      <h3>The Agricultural Revolution: History's Biggest Fraud?</h3>
      <p>Contrary to conventional wisdom, Harari suggests the Agricultural Revolution might have been "history's biggest fraud." While it allowed human populations to explode, it actually reduced the quality of life for most individuals:</p>
      
      <p>- Farmers worked longer and harder than foragers</p>
      <p>- Their diets became less varied and nutritious</p>
      <p>- They lived in closer proximity to animals, leading to new diseases</p>
      <p>- Social hierarchies became more rigid and unequal</p>
      
      <p>This perspective forces us to question our narrative of continuous progress. Perhaps we didn't domesticate wheat; wheat domesticated us.</p>
      
      <h3>The Scientific Revolution and Beyond</h3>
      <p>The Scientific Revolution, beginning around 500 years ago, unleashed unprecedented power through the combination of scientific research, political power, and economic capital. For the first time, humans began to experience real material progress, with each generation genuinely wealthier than the last.</p>
      
      <p>Yet Harari questions whether this material progress has translated into greater happiness. Hunter-gatherers, despite their material poverty, may have enjoyed more meaningful social connections, greater autonomy, and more varied daily experiences than modern humans trapped in offices and addicted to screens.</p>
      
      <h3>Personal Reflections</h3>
      <p>What makes "Sapiens" so powerful is how it defamiliarizes the present. Institutions and ideas we take for granted—nations, capitalism, individualism, human rights—appear as recent and contingent inventions rather than natural or inevitable features of human existence.</p>
      
      <p>This perspective is both liberating and disorienting. If the structures of our society are just stories we tell ourselves, we have the power to tell different stories. But it also means the foundations of our social order are more fragile than we might like to admit.</p>
      
      <p>Harari's history reminds us that Homo sapiens is an improbable evolutionary experiment—a species with godlike powers but no clear instruction manual. As we gain the ability to engineer our own bodies, minds, and environment, the questions raised by "Sapiens" become increasingly urgent: What do we want to become? And who should decide?</p>
    `,
    section: "some-books",
    date: "April 22, 2025"
  },
  {
    id: 5,
    title: "The Illusion of Control",
    content: `
      <h2>The Illusion of Control: Embracing Uncertainty in an Unpredictable World</h2>
      <p>Human beings have a remarkable tendency to overestimate their influence over events. From ancient rain dances to modern-day superstitions, we've developed countless ways to create the comforting sensation that we're in control, even when evidence suggests otherwise.</p>
      
      <h3>The Psychology of Perceived Control</h3>
      <p>Psychologists have documented this "illusion of control" in numerous studies:</p>
      
      <p><strong>The Lottery Ticket Study:</strong> People demand significantly more money to sell a lottery ticket they chose themselves compared to one randomly assigned to them—despite identical odds of winning.</p>
      
      <p><strong>The Investment Illusion:</strong> Active investors typically believe they can outperform the market through skill, even when their results are statistically indistinguishable from chance.</p>
      
      <p><strong>The Button Illusion:</strong> In one famous experiment, participants pressed a button that supposedly controlled a light, which was actually programmed to turn on and off randomly. Most participants believed their button-pressing influenced the light, creating elaborate theories about the timing patterns.</p>
      
      <p>These illusions aren't limited to laboratories. We see them in everyday life when people attribute their success to skill and their failures to bad luck, or when we believe our personal rituals somehow influence the outcome of sporting events we're watching.</p>
      
      <h3>Why We Crave Control</h3>
      <p>Our brains evolved in an environment where detecting patterns and establishing causality offered survival advantages. Those who believed they could influence outcomes—even if that belief was sometimes illusory—might have been more motivated to take action in uncertain situations.</p>
      
      <p>The illusion of control also serves important psychological functions:</p>
      
      <p><strong>Anxiety Reduction:</strong> Believing we control our fate reduces the existential anxiety that comes with acknowledging randomness.</p>
      
      <p><strong>Meaning Creation:</strong> Perceived control helps us construct narratives that make sense of our experiences.</p>
      
      <p><strong>Motivation Maintenance:</strong> The belief that our actions matter keeps us engaged and persistent, even when objective chances of success are low.</p>
      
      <h3>The Liberation of Letting Go</h3>
      <p>While the illusion of control can be adaptive in some contexts, it becomes problematic when it prevents us from accepting reality. Recognizing the limits of our influence can be surprisingly liberating:</p>
      
      <p><strong>Reduced Self-Blame:</strong> Understanding that many outcomes aren't entirely within our control allows us to be kinder to ourselves when things go wrong.</p>
      
      <p><strong>More Effective Action:</strong> By distinguishing between what we can and cannot control, we can focus our energy where it actually makes a difference.</p>
      
      <p><strong>Greater Appreciation:</strong> Acknowledging the role of chance in our successes fosters gratitude rather than entitlement.</p>
      
      <p><strong>Deeper Acceptance:</strong> Embracing uncertainty opens the door to a more peaceful relationship with reality as it is, not as we wish it to be.</p>
      
      <p>The Stoic philosopher Epictetus captured this wisdom centuries ago: "Make the best use of what is in your power, and take the rest as it happens." In a world that increasingly promises control through technology and optimization, perhaps the most radical act is to acknowledge the limits of our influence—and to find freedom in that recognition.</p>
    `,
    section: "interesting-stuff",
    date: "April 28, 2025"
  },
  {
    id: 6,
    title: "The Midnight Library",
    content: `
      <h2>The Midnight Library: Exploring Infinite Possibilities</h2>
      <p>Matt Haig's novel "The Midnight Library" offers a thought-provoking exploration of regret, possibility, and what constitutes a life well-lived. Through the story of Nora Seed, a woman who finds herself in a library between life and death with the opportunity to try different versions of her life, Haig invites readers to reconsider their own paths not taken.</p>
      
      <h3>The Premise: A Library of Lives</h3>
      <p>The novel's central conceit is brilliantly simple yet profound: a library containing books that represent all the lives you could have lived if you had made different choices. Want to see what would have happened if you had married that person, taken that job, moved to that city? There's a book for that.</p>
      
      <p>For Nora, who begins the story attempting suicide after a day where everything seems to go wrong, this library offers a chance to address her many regrets—from abandoning a promising swimming career to backing out of her band before they became famous, from breaking off an engagement to not pursuing her dream of glaciology.</p>
      
      <h3>The Philosophy of Possibility</h3>
      <p>Beyond its engaging narrative, "The Midnight Library" explores several philosophical themes:</p>
      
      <p><strong>Quantum Theory and Multiverse:</strong> The library operates on the premise of quantum many-worlds theory, where every decision creates branch points leading to parallel universes. This scientific concept becomes a vehicle for exploring existential questions about choice and identity.</p>
      
      <p><strong>The Tyranny of Regret:</strong> Nora's journey illustrates how regret can distort our perception of our own lives. We tend to idealize the paths not taken while being acutely aware of the flaws in the life we actually live.</p>
      
      <p><strong>The Root of Disappointment:</strong> As Nora discovers, disappointment often stems not from our actual circumstances but from the gap between reality and expectations. Even her seemingly perfect lives contain unexpected complications and trade-offs.</p>
      
      <h3>Personal Reflections</h3>
      <p>What resonated most deeply for me was the novel's ultimate message about appreciation and presence. Through Nora's experiences in various lives, Haig suggests that the "perfect life" is less about external achievements or circumstances and more about our internal relationship to whatever life we're living.</p>
      
      <p>The book doesn't dismiss ambition or the importance of making thoughtful choices. Rather, it cautions against the paralysis that comes from constantly wondering "what if?" and the tendency to measure our lives against impossible, idealized alternatives.</p>
      
      <p>In one particularly moving passage, Nora realizes that "the prison wasn't the place, but the perspective." This insight applies not just to Nora but to all of us who sometimes feel trapped by circumstances or past decisions.</p>
      
      <p>"The Midnight Library" ultimately offers a hopeful message: while we can't live every possible version of our lives, we can approach our actual life with greater awareness, gratitude, and presence. In doing so, we might discover that the life we have contains more possibility than we realized—if only we're willing to see it with fresh eyes.</p>
    `,
    section: "some-books",
    date: "April 18, 2025"
  },
  {
    id: 7,
    title: "The Value of Boredom",
    content: `
      <h2>The Value of Boredom: Why Embracing Empty Moments Matters</h2>
      <p>In our hyperconnected world, boredom has become an endangered experience. With smartphones providing endless stimulation, the slightest hint of mental emptiness can be immediately filled with a quick scroll, a video, or a game. But what if this reflexive avoidance of boredom is robbing us of something essential?</p>
      
      <h3>The Disappearance of Downtime</h3>
      <p>Consider how radically our relationship with empty time has changed:</p>
      
      <p><strong>Waiting rooms:</strong> Once spaces where we might stare at the ceiling, flip through outdated magazines, or simply sit with our thoughts, now they're filled with people hunched over phones.</p>
      
      <p><strong>Commutes:</strong> Previously a buffer zone between work and home that might involve daydreaming or people-watching, now they're opportunities to catch up on podcasts, messages, or social media.</p>
      
      <p><strong>Bedtime:</strong> The transition to sleep once involved lying in darkness with only our thoughts for company. Now many of us scroll until the moment we close our eyes.</p>
      
      <p>These shifts might seem like progress—who wants to be bored?—but emerging research suggests we're losing something valuable in our war against mental emptiness.</p>
      
      <h3>The Hidden Benefits of Boredom</h3>
      <p>Counterintuitively, periods of boredom serve important psychological functions:</p>
      
      <p><strong>Creativity Incubation:</strong> Studies show that engaging in boring tasks before creative problems leads to more innovative solutions. When the mind wanders, it makes novel connections between previously unrelated ideas.</p>
      
      <p><strong>Self-Knowledge:</strong> Moments of emptiness create space for introspection. Without the constant input of others' thoughts and opinions, we can better hear our own voice.</p>
      
      <p><strong>Problem Processing:</strong> Boredom allows the brain to work through unresolved issues in the background. Solutions often emerge during moments of mental idleness.</p>
      
      <p><strong>Appreciation Restoration:</strong> Constant stimulation leads to hedonic adaptation—we need increasingly intense experiences to feel engaged. Periods of boredom reset our sensitivity to pleasure and interest.</p>
      
      <h3>Reclaiming the Art of Doing Nothing</h3>
      <p>If boredom has value, how might we reclaim it in a world designed to eliminate it?</p>
      
      <p><strong>Scheduled Emptiness:</strong> Set aside periods—even just 10 minutes—where you deliberately do nothing. No music, no reading, no productivity, just being.</p>
      
      <p><strong>Mundane Activities:</strong> Engage in simple, repetitive tasks without additional stimulation: washing dishes without a podcast, walking without music, waiting in line without checking your phone.</p>
      
      <p><strong>Digital Boundaries:</strong> Create phone-free zones or times in your life. Perhaps the dinner table, the bedroom, or the first hour after waking.</p>
      
      <p><strong>Boredom Exposure:</strong> When you feel the urge to reach for distraction, pause. What's happening in your mind? Can you sit with the discomfort of emptiness for a few minutes longer?</p>
      
      <p>The capacity to be occasionally bored might seem like a strange skill to cultivate. But in a world of infinite distraction, the ability to be present with an unstimulated mind could be one of the most valuable abilities we can develop—a gateway to deeper creativity, clearer thinking, and a more authentic relationship with ourselves.</p>
    `,
    section: "interesting-stuff",
    date: "April 15, 2025"
  },
  {
    id: 8,
    title: "Atomic Habits",
    content: `
      <h2>Atomic Habits: Small Changes, Remarkable Results</h2>
      <p>James Clear's "Atomic Habits" offers a practical framework for improving everyday life through the power of tiny changes. Rather than focusing on ambitious goals, Clear argues that the path to extraordinary results comes from implementing small, consistent habits that compound over time.</p>
      
      <h3>The Core Framework: Four Laws of Behavior Change</h3>
      <p>What makes "Atomic Habits" particularly valuable is its actionable framework for creating good habits and breaking bad ones. Clear presents four laws of behavior change:</p>
      
      <p><strong>1. Make it Obvious (Cue)</strong></p>
      <p>To build a habit: Use implementation intentions ("I will [behavior] at [time] in [location]"), habit stacking (link a new habit to an existing one), and environmental design (make cues visible).</p>
      <p>To break a habit: Remove cues from your environment and make the triggers invisible.</p>
      
      <p><strong>2. Make it Attractive (Craving)</strong></p>
      <p>To build a habit: Use temptation bundling (pair an action you want to do with one you need to do), join a culture where your desired behavior is normal, and create motivational rituals.</p>
      <p>To break a habit: Reframe your mindset to highlight the benefits of avoiding the bad habit rather than the sacrifices.</p>
      
      <p><strong>3. Make it Easy (Response)</strong></p>
      <p>To build a habit: Reduce friction (prepare your environment to make actions easier), use the Two-Minute Rule (start with a version of the habit that takes less than two minutes), and automate habits when possible.</p>
      <p>To break a habit: Increase friction between you and the bad habit, making it difficult to perform.</p>
      
      <p><strong>4. Make it Satisfying (Reward)</strong></p>
      <p>To build a habit: Use reinforcement (give yourself an immediate reward), habit tracking (don't break the chain), and never miss twice (if you slip up, get back on track immediately).</p>
      <p>To break a habit: Make the consequences of bad habits painful and immediate.</p>
      
      <h3>Identity-Based Habits: The Deeper Layer</h3>
      <p>Perhaps the most profound insight in "Atomic Habits" is Clear's emphasis on identity over outcomes. He argues that the most effective way to change habits is to focus not on what you want to achieve but on who you want to become:</p>
      
      <p>"The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become."</p>
      
      <p>This inside-out approach suggests that lasting change happens when we shift our self-image. Instead of saying "I want to read more books" (outcome-based), you would say "I am a reader" (identity-based). The behavior then naturally follows the identity.</p>
      
      <h3>Personal Applications</h3>
      <p>Since reading "Atomic Habits," I've applied several of Clear's principles with notable results:</p>
      
      <p><strong>Habit Stacking:</strong> I've linked a daily meditation practice to my morning coffee routine. The existing habit (making coffee) now automatically triggers the new one (meditating).</p>
      
      <p><strong>Environment Design:</strong> I placed a water bottle on my desk, making hydration obvious and easy. My water intake has increased significantly with this simple change.</p>
      
      <p><strong>Two-Minute Rule:</strong> I started a writing habit by committing to just two minutes of writing each day. Often, once started, I continue well beyond the two minutes.</p>
      
      <p>What makes Clear's approach so effective is that it acknowledges the reality of human psychology rather than relying on willpower or motivation. By designing systems that work with our natural tendencies rather than against them, "Atomic Habits" offers a sustainable path to lasting change.</p>
      
      <p>The book's central message—that tiny changes can lead to remarkable results through the power of compounding—provides hope that meaningful improvement is within everyone's reach, not through dramatic transformations but through the patient accumulation of small, positive changes.</p>
    `,
    section: "some-books",
    date: "April 5, 2025"
  }
];

function Article() {
  const [darkMode, setDarkMode] = useState(false);
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Find the article that matches the ID from the URL
    const foundArticle = articles.find(a => a.id === parseInt(id));
    setArticle(foundArticle);
    
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [id]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (!article) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="container mx-auto px-4">
          <header className="header-nav">
            <h1 className="text-xl font-medium">
              <Link to="/">Laughing Matter</Link>
            </h1>
            <nav className="nav-links">
              <Link to="/interesting-stuff">Interesting Stuff</Link>
              <Link to="/some-books">Some Books</Link>
              <button 
                onClick={toggleTheme} 
                className="theme-toggle"
                aria-label="Toggle theme"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </nav>
          </header>
          <main className="py-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-medium mb-4">Article Not Found</h2>
              <p>Sorry, the article you're looking for doesn't exist.</p>
              <Link to="/" className="inline-block mt-4 text-accent underline">
                Return to Home
              </Link>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="header-nav">
          <h1 className="text-xl font-medium">
            <Link to="/">Laughing Matter</Link>
          </h1>
          <nav className="nav-links">
            <Link to="/interesting-stuff">Interesting Stuff</Link>
            <Link to="/some-books">Some Books</Link>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </nav>
        </header>

        <main className="py-8">
          <article className="max-w-3xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-medium mb-2">{article.title}</h1>
              <div className="flex justify-between text-sm text-accent">
                <span>{article.section === 'interesting-stuff' ? 'Interesting Stuff' : 'Some Books'}</span>
                <span>{article.date}</span>
              </div>
            </header>
            
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <div className="mt-12 pt-6 border-t border-gray-200">
              <Link to={article.section === 'interesting-stuff' ? '/interesting-stuff' : '/some-books'} className="text-accent underline">
                ← Back to {article.section === 'interesting-stuff' ? 'Interesting Stuff' : 'Some Books'}
              </Link>
            </div>
          </article>
        </main>

        <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200">
          <p>© {new Date().getFullYear()} Laughing Matter. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Article;
