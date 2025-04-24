import { useEffect, useState } from "react";

const codeSnippets = [
  `// Developer Info
  const developer = {
  name: "Joy das",
  role: "Web Application Developer",
  github username: "Anirbandasjoy",
  linkedin username: "anirbandasjoy404",
  passion: "Solving web problems with ease"
};`,
];

export default function CodeTypingAnimation() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [snippetIndex, setSnippetIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const currentSnippet = codeSnippets[snippetIndex];
    setDisplayedCode("");

    const interval = setInterval(() => {
      setDisplayedCode((prev) => prev + currentSnippet[i]);
      i++;

      if (i >= currentSnippet.length - 1) {
        clearInterval(interval);
        setTimeout(() => {
          setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
        }, 2500);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [snippetIndex]);

  const lines = displayedCode.split("\n");

  return (
    <div className="absolute top-40 left-10 z-50 font-mono pointer-events-none select-none max-w-[29rem] w-full">
      <div className="bg-[#1e1e1e] dark:bg-[#302828] border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
        {/* Fake title bar */}
        <div className="bg-[#2d2d2d] h-8 flex items-center px-3 space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        {/* Code content */}
        <div className="p-4 text-sm sm:text-base md:text-xs text-green-400 leading-relaxed whitespace-pre-wrap">
          {displayedCode ? (
            <div
              className="space-y-0.5"
              dangerouslySetInnerHTML={{
                __html: lines
                  .map(
                    (line, idx) =>
                      `<div class="flex"><span class="text-gray-600 pr-4 select-none w-6 text-right">${
                        idx + 1
                      }</span><span class="whitespace-pre font-mono">${line
                        .replace(
                          /(\/\/.*)/g,
                          '<span class="text-gray-500 italic">$1</span>'
                        )

                        .replace(
                          /(".*?"|'.*?')/g,
                          '<span class="text-yellow-300">$1</span>'
                        )
                        .replace(
                          /(:)/g,
                          '<span class="text-gray-300">$1</span>'
                        )
                        .replace(
                          /(\{|\})/g,
                          '<span class="text-pink-400">$1</span>'
                        )}</span></div>`
                  )
                  .join(""),
              }}
            />
          ) : (
            <span className="text-gray-500">// Typing snippet...</span>
          )}
        </div>
      </div>
    </div>
  );
}
