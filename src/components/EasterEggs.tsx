import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
const TILT_KEYS = ["t", "i", "l", "t"];
const SPIN_KEYS = ["s", "p", "i", "n"];
const SHAKE_KEYS = ["s", "h", "a", "k", "e"];
const PARTY_KEYS = ["p", "a", "r", "t", "y"];
const INVERT_KEYS = ["i", "n", "v", "e", "r", "t"];
const MATRIX_KEYS = ["m", "a", "t", "r", "i", "x"];
const SNAKE_KEYS = ["s", "n", "a", "k", "e"];

export default function EasterEggs() {
  const [keys, setKeys] = useState<string[]>([]);
  const [lastKey, setLastKey] = useState<string>("");
  const [konamiActivated, setKonamiActivated] = useState(false);
  const [tiltActivated, setTiltActivated] = useState(false);
  const [spinActivated, setSpinActivated] = useState(false);
  const [shakeActivated, setShakeActivated] = useState(false);
  const [partyActivated, setPartyActivated] = useState(false);
  const [invertActivated, setInvertActivated] = useState(false);
  const [matrixActivated, setMatrixActivated] = useState(false);
  const [snakeActivated, setSnakeActivated] = useState(false);
  const [snakeScore, setSnakeScore] = useState(0);
  const matrixCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const snakeCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const matrixRafRef = useRef<number | null>(null);
  const snakeRafRef = useRef<number | null>(null);
  const snakeGameRef = useRef<{
    snake: { x: number; y: number }[];
    food: { x: number; y: number } | null;
    direction: "up" | "down" | "left" | "right";
    gridSize: number;
    gameOver: boolean;
  }>({
    snake: [{ x: 5, y: 5 }],
    food: null,
    direction: "right",
    gridSize: 20,
    gameOver: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Snake game controls
      if (snakeActivated && !snakeGameRef.current.gameOver) {
        const game = snakeGameRef.current;
        const currentDirection = game.direction;

        switch (e.key) {
          case "ArrowUp":
            if (currentDirection !== "down") game.direction = "up";
            break;
          case "ArrowDown":
            if (currentDirection !== "up") game.direction = "down";
            break;
          case "ArrowLeft":
            if (currentDirection !== "right") game.direction = "left";
            break;
          case "ArrowRight":
            if (currentDirection !== "left") game.direction = "right";
            break;
          case "Escape":
            setSnakeActivated(false);
            break;
        }

        // Don't process further to avoid interference with game controls
        return;
      }

      // Update the last pressed key for visual feedback
      setLastKey(e.key);

      // Keep only the last 10 keys pressed
      const updatedKeys = [...keys, e.key].slice(-10);
      setKeys(updatedKeys);

      // Check for Konami code
      if (
        updatedKeys.length === KONAMI_CODE.length &&
        updatedKeys.every(
          (key, index) => key.toLowerCase() === KONAMI_CODE[index].toLowerCase()
        )
      ) {
        setKonamiActivated(true);
        setTimeout(() => setKonamiActivated(false), 3000);
      }

      // Check for "tilt" command
      const lastFourKeys = updatedKeys.slice(-4);
      if (
        lastFourKeys.length === 4 &&
        lastFourKeys.every(
          (key, index) => key.toLowerCase() === TILT_KEYS[index]
        )
      ) {
        setTiltActivated(true);
        setTimeout(() => setTiltActivated(false), 2000);
      }

      // Check for "spin" command
      if (
        lastFourKeys.length === 4 &&
        lastFourKeys.every(
          (key, index) => key.toLowerCase() === SPIN_KEYS[index]
        )
      ) {
        setSpinActivated(true);
        setTimeout(() => setSpinActivated(false), 2000);
      }

      // Check for "shake" command
      const lastFiveKeys = updatedKeys.slice(-5);
      if (
        lastFiveKeys.length === 5 &&
        lastFiveKeys.every(
          (key, index) => key.toLowerCase() === SHAKE_KEYS[index]
        )
      ) {
        setShakeActivated(true);
        setTimeout(() => setShakeActivated(false), 1000);
      }

      // Check for "party" command
      if (
        lastFiveKeys.length === 5 &&
        lastFiveKeys.every(
          (key, index) => key.toLowerCase() === PARTY_KEYS[index]
        )
      ) {
        setPartyActivated(!partyActivated); // Toggle party mode
      }

      // Check for "invert" command
      const lastSixKeys = updatedKeys.slice(-6);
      if (
        lastSixKeys.length === 6 &&
        lastSixKeys.every(
          (key, index) => key.toLowerCase() === INVERT_KEYS[index]
        )
      ) {
        setInvertActivated(!invertActivated); // Toggle invert mode
      }

      // Check for "matrix" command
      if (
        lastSixKeys.length === 6 &&
        lastSixKeys.every(
          (key, index) => key.toLowerCase() === MATRIX_KEYS[index]
        )
      ) {
        setMatrixActivated(!matrixActivated); // Toggle matrix mode
      }

      // Check for "snake" command
      if (
        lastFiveKeys.length === 5 &&
        lastFiveKeys.every(
          (key, index) => key.toLowerCase() === SNAKE_KEYS[index]
        )
      ) {
        // Reset snake game state when activating
        if (!snakeActivated) {
          snakeGameRef.current = {
            snake: [{ x: 5, y: 5 }],
            food: null,
            direction: "right",
            gridSize: 20,
            gameOver: false,
          };
          setSnakeScore(0);
        }
        setSnakeActivated(!snakeActivated); // Toggle snake game
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keys, partyActivated, invertActivated, matrixActivated, snakeActivated]);

  // Apply tilt effect to the entire page
  useEffect(() => {
    if (tiltActivated) {
      document.body.style.transition = "transform 1s ease";
      document.body.style.transform = "rotate(3deg)";
    } else {
      document.body.style.transform = "";
    }
  }, [tiltActivated]);

  // Apply spin effect to the entire page
  useEffect(() => {
    if (spinActivated) {
      document.body.style.transition = "transform 1s ease";
      document.body.style.transform = "rotate(360deg)";
    } else {
      document.body.style.transform = "";
    }
  }, [spinActivated]);

  // Apply shake effect
  useEffect(() => {
    if (shakeActivated) {
      document.body.style.animation = "shake 0.5s";
      document.body.style.animationIterationCount = "2";
    } else {
      document.body.style.animation = "";
    }
  }, [shakeActivated]);

  // Apply party effect to project cards
  useEffect(() => {
    const projectCards = document.querySelectorAll("[data-party-target]");

    if (partyActivated) {
      let index = 0;
      for (const card of projectCards) {
        const element = card as HTMLElement;
        element.style.animation = `party-card 1.5s infinite ${index * 0.2}s`;
        element.style.boxShadow = "0 0 10px rgba(var(--color-primary), 0.7)";
        index++;
      }
    } else {
      for (const card of projectCards) {
        const element = card as HTMLElement;
        element.style.animation = "";
        element.style.boxShadow = "";
      }
    }
  }, [partyActivated]);

  // Apply invert effect to the entire page
  useEffect(() => {
    if (invertActivated) {
      document.documentElement.style.filter = "invert(1)";
    } else {
      document.documentElement.style.filter = "";
    }
  }, [invertActivated]);

  // Matrix effect
  useEffect(() => {
    if (matrixActivated) {
      // Reset any previous animation
      if (matrixRafRef.current) {
        cancelAnimationFrame(matrixRafRef.current);
      }

      const canvas = matrixCanvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas size to window size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Characters to display
      const characters = "abcdefghijklmnopqrstuvwxyz0123456789$@+*%&#/\\!?<>";
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);

      // Array to track the y position of each column
      const drops: number[] = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
      }

      const drawMatrix = () => {
        // Black overlay with a bit of transparency to create trail effect
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set the text style
        ctx.fillStyle = "#0f0";
        ctx.font = `${fontSize}px monospace`;

        // For each column
        for (let i = 0; i < drops.length; i++) {
          // Pick a random character
          const char =
            characters[Math.floor(Math.random() * characters.length)];

          // Draw the character
          ctx.fillText(char, i * fontSize, drops[i] * fontSize);

          // Add randomness to the reset to make it look more natural
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
            drops[i] = 0;
          }

          // Move the drop down
          drops[i]++;
        }

        matrixRafRef.current = requestAnimationFrame(drawMatrix);
      };

      // Start the animation
      matrixRafRef.current = requestAnimationFrame(drawMatrix);

      // Clear animation on cleanup
      return () => {
        if (matrixRafRef.current) {
          cancelAnimationFrame(matrixRafRef.current);
        }
      };
    }
  }, [matrixActivated]);

  // Snake game
  useEffect(() => {
    if (snakeActivated) {
      // Reset any previous game loop
      if (snakeRafRef.current) {
        cancelAnimationFrame(snakeRafRef.current);
      }

      const canvas = snakeCanvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas size to window size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const game = snakeGameRef.current;
      const cellWidth = 20;
      const cellHeight = 20;

      // Function to spawn food at a random location
      const spawnFood = () => {
        const gridWidth = Math.floor(canvas.width / cellWidth);
        const gridHeight = Math.floor(canvas.height / cellHeight);

        // Generate random position for food
        const x = Math.floor(Math.random() * gridWidth);
        const y = Math.floor(Math.random() * gridHeight);

        // Check if the position is occupied by the snake
        for (const segment of game.snake) {
          if (segment.x === x && segment.y === y) {
            // Try again if position is occupied
            return spawnFood();
          }
        }

        return { x, y };
      };

      // Spawn food if there isn't any
      if (!game.food) {
        game.food = spawnFood();
      }

      let lastUpdateTime = 0;
      const gameSpeed = 150; // milliseconds between updates

      const updateGame = (timestamp: number) => {
        // Check if game is over
        if (game.gameOver) {
          // Draw game over screen
          ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          ctx.fillStyle = "#fff";
          ctx.font = "48px monospace";
          ctx.textAlign = "center";
          ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 50);

          ctx.font = "24px monospace";
          ctx.fillText(
            `Score: ${snakeScore}`,
            canvas.width / 2,
            canvas.height / 2
          );

          ctx.font = "16px monospace";
          ctx.fillText(
            "Type 'snake' to exit",
            canvas.width / 2,
            canvas.height / 2 + 50
          );

          snakeRafRef.current = requestAnimationFrame(updateGame);
          return;
        }

        // Update game at a fixed interval
        if (timestamp - lastUpdateTime >= gameSpeed) {
          lastUpdateTime = timestamp;

          // Clear the canvas
          ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Update snake position based on direction
          const head = { ...game.snake[0] };

          switch (game.direction) {
            case "up":
              head.y -= 1;
              break;
            case "down":
              head.y += 1;
              break;
            case "left":
              head.x -= 1;
              break;
            case "right":
              head.x += 1;
              break;
          }

          // Check for collisions with walls
          if (
            head.x < 0 ||
            head.y < 0 ||
            head.x >= Math.floor(canvas.width / cellWidth) ||
            head.y >= Math.floor(canvas.height / cellHeight)
          ) {
            game.gameOver = true;
          }

          // Check for collisions with self
          for (const segment of game.snake) {
            if (head.x === segment.x && head.y === segment.y) {
              game.gameOver = true;
              break;
            }
          }

          if (!game.gameOver) {
            // Check if snake has eaten food
            if (game.food && head.x === game.food.x && head.y === game.food.y) {
              // Spawn new food
              game.food = spawnFood();
              // Don't remove tail, which makes snake grow
              setSnakeScore((prevScore) => prevScore + 1);
            } else {
              // Remove the tail segment if no food was eaten
              game.snake.pop();
            }

            // Add new head segment
            game.snake.unshift(head);
          }

          // Draw the snake
          ctx.fillStyle = "#0f0";
          for (const segment of game.snake) {
            ctx.fillRect(
              segment.x * cellWidth,
              segment.y * cellHeight,
              cellWidth - 1,
              cellHeight - 1
            );
          }

          // Draw the food
          if (game.food) {
            ctx.fillStyle = "red";
            ctx.fillRect(
              game.food.x * cellWidth,
              game.food.y * cellHeight,
              cellWidth - 1,
              cellHeight - 1
            );
          }

          // Draw score
          ctx.fillStyle = "#fff";
          ctx.font = "20px monospace";
          ctx.textAlign = "left";
          ctx.fillText(`Score: ${snakeScore}`, 20, 30);
        }

        snakeRafRef.current = requestAnimationFrame(updateGame);
      };

      // Start the game loop
      snakeRafRef.current = requestAnimationFrame(updateGame);

      // Clear animation on cleanup
      return () => {
        if (snakeRafRef.current) {
          cancelAnimationFrame(snakeRafRef.current);
        }
      };
    }
  }, [snakeActivated, snakeScore]);

  // Add keyframes for all animations
  useEffect(() => {
    // Create style element for animations
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      @keyframes shake {
        0% { transform: translateX(0); }
        10% { transform: translateX(-5px); }
        20% { transform: translateX(5px); }
        30% { transform: translateX(-5px); }
        40% { transform: translateX(5px); }
        50% { transform: translateX(-5px); }
        60% { transform: translateX(5px); }
        70% { transform: translateX(-5px); }
        80% { transform: translateX(5px); }
        90% { transform: translateX(-5px); }
        100% { transform: translateX(0); }
      }
      
      @keyframes party-card {
        0% { transform: translateY(0); }
        25% { transform: translateY(-5px) rotate(-1deg); }
        50% { transform: translateY(0) rotate(1deg); }
        75% { transform: translateY(5px) rotate(-1deg); }
        100% { transform: translateY(0); }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <>
      {/* Matrix effect overlay */}
      {matrixActivated && (
        <canvas
          ref={matrixCanvasRef}
          className="fixed inset-0 z-40 pointer-events-none"
        />
      )}

      {/* Snake game overlay */}
      {snakeActivated && (
        <canvas ref={snakeCanvasRef} className="fixed inset-0 z-40" />
      )}

      {/* Key display in the bottom right */}
      <div className="fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {lastKey && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-black/80 text-white px-3 py-1 rounded-none text-sm font-mono"
              key={lastKey + Date.now()}
            >
              {lastKey}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-1 mt-2 justify-end">
          {keys.slice(-5).map((key, i) => (
            <motion.div
              key={`key-${i}-${key}`}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-primary/20 dark:bg-primary/30 text-xs w-6 h-6 flex items-center justify-center rounded-none"
            >
              {key === " " ? "␣" : key.length > 1 ? key.slice(0, 1) : key}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Konami code success message */}
      <AnimatePresence>
        {konamiActivated && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
          >
            <div className="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-none shadow-lg">
              <h2 className="text-3xl font-bold mb-2">
                ⭐ Konami Code Activated! ⭐
              </h2>
              <p>You've unlocked the secret! +30 lives.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Help tooltip for available commands */}
      <AnimatePresence>
        {lastKey === "?" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-20 right-4 z-50 bg-black/90 text-white p-4 rounded-none shadow-lg text-sm font-mono"
          >
            <div className="text-accent font-bold mb-2">
              Easter Egg Commands:
            </div>
            <ul className="space-y-1">
              <li>
                Type <span className="text-primary">tilt</span> - Tilt the page
              </li>
              <li>
                Type <span className="text-primary">spin</span> - Spin the page
              </li>
              <li>
                Type <span className="text-primary">shake</span> - Shake the
                page
              </li>
              <li>
                Type <span className="text-primary">party</span> - Party mode
              </li>
              <li>
                Type <span className="text-primary">invert</span> - Invert
                colors
              </li>
              <li>
                Type <span className="text-primary">matrix</span> - Enter the
                Matrix
              </li>
              <li>
                Type <span className="text-primary">snake</span> - Play snake
                game
              </li>
              <li>
                Press <span className="text-primary">?</span> - Show this help
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
