"use client";
import React, { useEffect, useRef, useState } from "react";

type TerminalProps = {
  commands: string[];
  outputs?: Record<number, string[]>;
  typingSpeed?: number; // ms per char
  delayBetweenCommands?: number; // ms to wait after finishing a command
};

export function Terminal({
  commands,
  outputs = {},
  typingSpeed = 45,
  delayBetweenCommands = 1000,
}: TerminalProps) {
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyOutputs, setHistoryOutputs] = useState<string[][]>([]);
  const typingRef = useRef<number | null>(null);

  useEffect(() => {
    if (currentCmdIndex >= commands.length) return;

    const full = commands[currentCmdIndex];
    let i = 0;
    const tick = () => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        if (typingRef.current) {
          window.clearInterval(typingRef.current);
          typingRef.current = null;
        }

        setHistory((h) => [...h, full]);

        const out = outputs[currentCmdIndex] ?? [];
        if (out.length > 0) {
          setTimeout(() => {
            setHistoryOutputs((ho) => [...ho, out]);
          }, 120);
        } else {
          setHistoryOutputs((ho) => [...ho, []]);
        }

        setTyped("");
        setTimeout(() => {
          setCurrentCmdIndex((c) => c + 1);
        }, delayBetweenCommands);
      }
    };

    typingRef.current = window.setInterval(tick, typingSpeed);

    return () => {
      if (typingRef.current) {
        window.clearInterval(typingRef.current);
        typingRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCmdIndex]);

  return (
    <div className="bg-black text-green-300 font-mono rounded-md p-4 text-sm">
      {history.map((cmd, idx) => (
        <div key={idx} className="mb-2">
          <div>
            <span className="text-green-400">$</span> {cmd}
          </div>
          {historyOutputs[idx] && historyOutputs[idx].length > 0 && (
            <div className="pl-4 mt-1 text-gray-300">
              {historyOutputs[idx].map((line, li) => (
                <div key={li}>{line}</div>
              ))}
            </div>
          )}
        </div>
      ))}

      {currentCmdIndex < commands.length && (
        <div>
          <span className="text-green-400">$</span> {typed}
          <span className="animate-pulse">█</span>
        </div>
      )}
    </div>
  );
}

export function TerminalDemoCustom() {
  return (
    <section className="w-full py-10 md:py-20">
      <Terminal
        commands={[
          "pnpm install",
          "pnpm dev",
          "npx shadcn@latest init",
          "npx shadcn@latest add button card",
        ]}
        outputs={{
          0: ["Packages installed successfully."],
          1: ["vite v4.0.0 dev server running at http://localhost:5173"],
          2: ["✔ Initialized shadcn config."],
          3: ["✔ Added components: button, card"],
        }}
        typingSpeed={30}
        delayBetweenCommands={900}
      />
    </section>
  );
}

export default TerminalDemoCustom;
