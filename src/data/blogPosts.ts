export type BlogCategory = "programming" | "philosophy" | "life";

export interface BlogPost {
	title: string;
	excerpt: string;
	date: string;
	category: BlogCategory;
	readTime: string;
	slug: string;
	content?: string;
}

export const blogPosts: BlogPost[] = [
	{
		title: "Building Resilient Systems with Circuit Breakers",
		excerpt:
			"How to implement fault tolerance in distributed applications with the circuit breaker pattern.",
		date: "2023-12-05",
		category: "programming",
		readTime: "8 min",
		slug: "circuit-breakers",
		content: `
# Building Resilient Systems with Circuit Breakers

In distributed systems, failures are inevitable. Services crash, networks become congested, and dependencies become unresponsive. Without proper handling, these failures can cascade throughout your entire system, leading to widespread outages.

## The Circuit Breaker Pattern

The circuit breaker pattern, popularized by Michael Nygard in "Release It!", provides a solution to this problem. Like an electrical circuit breaker that protects your home from electrical surges, the software circuit breaker protects your system from cascading failures.

Here's how it works:

1. **Closed State**: In normal operation, the circuit is closed, and requests flow through as usual.
2. **Open State**: After a threshold of failures is reached, the circuit breaker "trips" and moves to the open state. All requests immediately fail without attempting to communicate with the failing service.
3. **Half-Open State**: After a timeout period, the circuit breaker allows a limited number of test requests through. If these succeed, the circuit closes again; if they fail, it stays open.

## Implementation in Node.js

\`\`\`typescript
class CircuitBreaker {
  private failureThreshold: number;
  private resetTimeout: number;
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  private failureCount: number = 0;
  private lastFailureTime: number = 0;

  constructor(failureThreshold = 5, resetTimeout = 30000) {
    this.failureThreshold = failureThreshold;
    this.resetTimeout = resetTimeout;
  }

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime > this.resetTimeout) {
        this.state = 'HALF_OPEN';
      } else {
        throw new Error('Circuit breaker is open');
      }
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  private onSuccess(): void {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }

  private onFailure(): void {
    this.failureCount++;
    this.lastFailureTime = Date.now();

    if (this.state === 'HALF_OPEN' || this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN';
    }
  }
}
\`\`\`

## Usage Example

\`\`\`typescript
const apiBreaker = new CircuitBreaker();

async function fetchUserData(userId: string) {
  return apiBreaker.execute(async () => {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) throw new Error(\`API error: \${response.status}\`);
    return response.json();
  });
}
\`\`\`

By implementing circuit breakers, your system becomes more resilient, degrading gracefully during partial outages rather than failing completely.
    `,
	},
	{
		title: "The Paradox of Choice in Modern Software Development",
		excerpt:
			"Why having too many technologies and frameworks is making us less productive.",
		date: "2023-11-20",
		category: "programming",
		readTime: "6 min",
		slug: "paradox-of-choice",
		content: `
# The Paradox of Choice in Modern Software Development

When faced with too many options, we often make poorer decisions or no decision at all. This psychological principle, known as the "paradox of choice," has profound implications for software development today.

## The Framework Explosion

The JavaScript ecosystem alone has exploded with frameworks and libraries:

- React, Vue, Angular, Svelte for UI
- Express, Fastify, Nest.js, Hapi for backends
- MongoDB, PostgreSQL, MySQL, Redis for databases
- Jest, Mocha, Jasmine for testing

And this is just scratching the surface. Each comes with its own learning curve, community, and best practices.

## The Cost of Choice Overload

1. **Decision Paralysis**: Teams can spend weeks evaluating options before writing a single line of code.
2. **Learning Fatigue**: Developers must constantly learn new tools rather than mastering existing ones.
3. **Technical Debt**: Projects often contain multiple solutions to the same problem as developers prefer what they know.

## Finding Balance

How do we navigate this paradox?

1. **Embrace Constraints**: Deliberately limit your technology choices. Many companies maintain a "technology radar" that guides teams toward approved or recommended technologies.
2. **Value Mastery Over Novelty**: A deep understanding of one technology is often more valuable than shallow knowledge of many.
3. **Focus on Problems, Not Tools**: Choose technologies that solve your specific problems rather than following hype cycles.

By recognizing the paradox of choice in our field, we can make more intentional decisions about our technology stack, leading to more productive and maintainable software systems.
    `,
	},
	{
		title: "Stoicism and Debugging: Accepting What You Cannot Control",
		excerpt:
			"Applying stoic philosophy to remain calm during challenging debugging sessions.",
		date: "2023-10-15",
		category: "philosophy",
		readTime: "7 min",
		slug: "stoicism-debugging",
		content: `
# Stoicism and Debugging: Accepting What You Cannot Control

Debugging is often a frustrating exercise. Hours can be spent tracking down an elusive bug, only to find it was caused by something simple or completely outside your control. This is where Stoic philosophy can offer valuable perspective.

## The Dichotomy of Control

Epictetus, a Stoic philosopher, taught about the "dichotomy of control" - distinguishing between things we can control and things we cannot. In debugging, we can control:

- Our approach to the problem
- The tools we use
- Our emotional response

We cannot control:

- Third-party libraries with bugs
- Legacy code written long ago
- Hardware failures or network issues

## Practical Stoicism for Debugging

### 1. Focus on What You Can Change

Rather than cursing the poorly documented API you're using, focus on improving your understanding of it or finding workarounds.

### 2. View Obstacles as Opportunities

Each difficult bug is an opportunity to deepen your understanding of the system. As Marcus Aurelius wrote: "The impediment to action advances action. What stands in the way becomes the way."

### 3. Practice Negative Visualization

Before starting a debugging session, imagine the worst-case scenarios: What if you can't fix it? What if it takes days? This mental preparation helps manage frustration when challenges arise.

### 4. Remember Your Mortality (Memento Mori)

In Stoic terms, remember that life is finite. Is this bug worth your limited time and emotional energy? This perspective can help prioritize what's truly important.

## The Stoic Debugger's Mantra

When facing a particularly challenging bug, I remind myself of this adaptation of the Serenity Prayer:

"Grant me the serenity to accept the code I cannot change,
The courage to change the code I can,
And the wisdom to know the difference."

By applying Stoic principles to debugging, we can maintain equanimity in the face of the most perplexing technical challenges.
    `,
	},
	{
		title: "The Joy of Being Perpetually Curious",
		excerpt:
			"How maintaining a childlike wonder can lead to greater happiness and fulfillment.",
		date: "2023-09-28",
		category: "life",
		readTime: "5 min",
		slug: "perpetual-curiosity",
		content: `
# The Joy of Being Perpetually Curious

As we grow older, many of us lose the natural curiosity we had as children. We settle into routines, adopt fixed viewpoints, and stop asking "why" about the world around us. But maintaining a state of perpetual curiosity might be one of the most rewarding approaches to life.

## The Benefits of Curiosity

Research has consistently shown that curiosity is associated with:

- Higher levels of positive emotions
- Greater life satisfaction
- More meaningful relationships
- Enhanced learning and memory
- Increased creativity and problem-solving ability

## Cultivating Curiosity

How can we maintain or rediscover our childlike wonder?

### 1. Ask Better Questions

Train yourself to ask open-ended questions rather than settling for simple explanations. Instead of "The sky is blue because of light scattering," ask "How exactly does light interact with air molecules to create this specific shade of blue?"

### 2. Embrace the Unknown

We often avoid admitting what we don't know. Practice saying "I don't know, but I'd like to learn" more often. Uncertainty is the fertile ground where curiosity grows.

### 3. Cross-Pollinate Your Interests

Some of the most interesting discoveries happen at the intersection of different domains. If you're a programmer, read about biology. If you're a designer, study physics. Unexpected connections spark new curiosities.

### 4. Follow the Thread

When something captures your interest, give yourself permission to follow it wherever it leads. These journeys of discovery often take us to unexpected and rewarding places.

## The Curious Mindset in Daily Life

Curiosity isn't just for learning facts—it's a way of being. Apply it to people by genuinely wondering about their experiences. Apply it to challenges by exploring multiple solutions. Apply it to nature by observing the intricate details of the world around you.

As Albert Einstein said, "I have no special talents. I am only passionately curious." Perhaps curiosity itself is the special talent worth cultivating.
    `,
	},
	{
		title: "Existentialism and Creative Coding",
		excerpt:
			"Finding meaning through creating digital art and generative systems.",
		date: "2023-08-12",
		category: "philosophy",
		readTime: "9 min",
		slug: "existentialism-coding",
		content: `
# Existentialism and Creative Coding

Existentialism teaches that life has no inherent meaning beyond what we create for ourselves. In a universe that appears indifferent to our existence, we must define our own purpose and values. Creative coding—the practice of using code to create something expressive rather than functional—offers a fascinating lens through which to explore existentialist ideas.

## The Absurd and the Algorithm

Albert Camus described the absurd as the conflict between our desire for meaning and the universe's silence. Creative coding inhabits this space perfectly: we impose rigid logical systems (algorithms) to create beauty in a medium that has no inherent aesthetic value.

Consider this generative art algorithm:

\`\`\`javascript
function draw() {
  background(0);
  for (let i = 0; i < 1000; i++) {
    let x = noise(i * 0.01, frameCount * 0.01) * width;
    let y = noise(i * 0.01, frameCount * 0.01 + 5) * height;
    stroke(255, 50);
    point(x, y);
  }
}
\`\`\`

This code creates flowing, organic patterns from pure mathematics. The meaning doesn't exist in the algorithm itself but emerges from human creativity imposed on logical structures.

## Freedom Through Constraints

Jean-Paul Sartre emphasized that with freedom comes responsibility. In creative coding, we voluntarily impose constraints on ourselves, working within the limitations of our chosen tools and systems. These constraints, paradoxically, enable creative freedom by giving us a framework within which to make meaningful choices.

## Authenticity in the Digital Realm

For existentialists, authenticity—being true to oneself despite social pressures—is a central value. Creative coding allows for authentic self-expression through a medium that's traditionally associated with logic and utility. When we write code for beauty rather than function, we assert our values against the prevailing technological current.

## Creating Meaning in an Indifferent Universe

Each creative coding project can be seen as an act of rebellion against meaninglessness. We take the cold logic of computation and bend it toward human expression, creating pockets of meaning in the digital void.

The next time you write code that creates rather than merely functions, consider it an existential act: you are asserting that beauty and meaning matter, even in a universe of ones and zeros that cares nothing for either.
    `,
	},
	{
		title: "Digital Minimalism: My Month Without Social Media",
		excerpt:
			"What I learned from taking a break from the constant stream of information.",
		date: "2023-07-19",
		category: "life",
		readTime: "6 min",
		slug: "digital-minimalism",
		content: `
# Digital Minimalism: My Month Without Social Media

For 30 days, I did the seemingly impossible in our hyper-connected age: I completely abstained from all social media. No Twitter scrolling before bed, no Instagram during breakfast, no Reddit during downtime. Here's what happened.

## The Withdrawal Phase

The first three days were genuinely uncomfortable. I found myself reaching for my phone dozens of times per day out of pure habit, only to realize the apps I was seeking weren't there. This automatic behavior revealed how deeply these platforms had wired themselves into my daily routines.

By day five, the compulsive phone-checking had subsided, but I experienced a new form of anxiety: FOMO (fear of missing out). What conversations was I missing? What news wasn't I seeing? What if someone needed to reach me?

## The Recalibration Phase

Around day 10, something shifted. My attention span noticeably improved. I could read a book for an hour without feeling the itch to check my phone. Work sessions became deeper and more focused, often lasting 90+ minutes without interruption.

I also rediscovered the lost art of boredom. Instead of filling every idle moment with scrolling, I allowed my mind to wander. This mental space led to new ideas and insights that likely wouldn't have emerged in a constantly stimulated state.

## The Discovery Phase

The final two weeks revealed the most valuable benefits:

1. **Reclaimed Time**: I gained approximately 2-3 hours daily that had previously disappeared into the social media void.

2. **Improved Relationships**: Without the ability to check in on friends digitally, I made more phone calls and arranged more in-person meetings.

3. **Mental Clarity**: The constant background processing of social information—analyzing, comparing, reacting—had been consuming significant mental energy. Its absence left my mind clearer and more at peace.

4. **Intentional Information**: Instead of passively consuming whatever the algorithms fed me, I actively sought out information that genuinely interested me.

## What I'm Taking Forward

I've since reintroduced social media, but with strict boundaries:

- No social apps on my phone
- Designated "social media hours" (30 minutes, twice daily)
- No social media before noon or after 8 PM
- One full day per week remains completely social media free

Digital minimalism isn't about rejecting technology outright, but about being intentional about how we use it. By temporarily stepping away completely, I gained the perspective needed to build a healthier, more mindful relationship with these powerful tools.
    `,
	},
];
