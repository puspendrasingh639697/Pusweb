
import React, { useEffect, useState, useRef } from "react";

export default function GlobalReach() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        setMousePos({
            x: e.clientX,
            y: e.clientY
        });
    };

    const content = [
        { type: "h1", text: "What is Lorem Ipsum?" },
        { type: "p", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { type: "p", text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages." },
        { type: "h2", text: "Why do we use it?" },
        { type: "p", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters." },
        { type: "p", text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." },
        { type: "h2", text: "Where does it come from?" },
        { type: "p", text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },
        { type: "p", text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage." },
        { type: "p", text: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" by Cicero, written in 45 BC." },
        { type: "p", text: "This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32." },
    ];

    const WordSpan = ({ word }) => {
        const spanRef = useRef(null);
        const [brightness, setBrightness] = useState(0.2);

        // CONTINUOUS UPDATE - Har frame par check
        useEffect(() => {
            const updateBrightness = () => {
                if (!spanRef.current) return;

                const rect = spanRef.current.getBoundingClientRect();
                const wordCenterX = rect.left + rect.width / 2;
                const wordCenterY = rect.top + rect.height / 2;
                const elementTop = rect.top;
                const windowHeight = window.innerHeight;

                // HOVER MODE - Box effect
                if (isHovering) {
                    const boxWidth = 600;
                    const boxHeight = 400;
                    const boxLeft = mousePos.x - boxWidth / 2;
                    const boxRight = mousePos.x + boxWidth / 2;
                    const boxTop = mousePos.y - boxHeight / 2;
                    const boxBottom = mousePos.y + boxHeight / 2;

                    if (
                        wordCenterX >= boxLeft &&
                        wordCenterX <= boxRight &&
                        wordCenterY >= boxTop &&
                        wordCenterY <= boxBottom
                    ) {
                        const distX = Math.abs(wordCenterX - mousePos.x) / (boxWidth / 2);
                        const distY = Math.abs(wordCenterY - mousePos.y) / (boxHeight / 2);
                        const dist = Math.max(distX, distY);
                        setBrightness(1 - dist * 0.2);
                    } else {
                        setBrightness(0.2);
                    }
                }
                // SCROLL MODE - Continuous fade
                else {
                    const topZone = windowHeight * 0.3;
                    const fadeZone = windowHeight * 0.7;

                    if (elementTop < 0) {
                        setBrightness(0.2); // Already scrolled past
                    } else if (elementTop < topZone) {
                        setBrightness(1); // Top bright
                    } else if (elementTop < fadeZone) {
                        const fadeProgress = (elementTop - topZone) / (fadeZone - topZone);
                        setBrightness(1 - fadeProgress * 0.8);
                    } else {
                        setBrightness(0.2); // Bottom dark
                    }
                }
            };

            // Jab hover ho, mouse move par update
            if (isHovering) {
                updateBrightness();
            } else {
                // Jab scroll mode ho, continuous check karo
                updateBrightness();
                const handleScroll = () => {
                    requestAnimationFrame(updateBrightness);
                };

                window.addEventListener("scroll", handleScroll, { passive: true });
                return () => window.removeEventListener("scroll", handleScroll);
            }
        }, [mousePos, isHovering]);

        return (
            <span
                ref={spanRef}
                className="transition-colors duration-200"
                style={{
                    color: `rgba(255, 255, 255, ${brightness})`
                }}
            >
                {word}
            </span>
        );
    };

    const renderText = (text) => {
        const words = text.split(' ');
        return words.map((word, i) => (
            <React.Fragment key={i}>
                <WordSpan word={word} />
                {i < words.length - 1 && ' '}
            </React.Fragment>
        ));
    };

    return (
        <div className="w-full bg-black min-h-screen">
            <div
                ref={containerRef}
                className="max-w-4xl mx-auto px-6 py-16 relative"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {/* BADA Box Spotlight */}
                {isHovering && (
                    <div
                        className="fixed pointer-events-none z-20 transition-all duration-75"
                        style={{
                            left: mousePos.x - 300,
                            top: mousePos.y - 200,
                            width: '0px',
                            height: '0px',
                            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, transparent 80%)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: '20px',
                            boxShadow: '0 0 60px rgba(255,255,255,0.15), inset 0 0 30px rgba(255,255,255,0.05)'
                        }}
                    />
                )}

                {/* Background glow */}
                {isHovering && (
                    <div
                        className="fixed inset-0 pointer-events-none z-10"
                        style={{
                            background: `radial-gradient(900px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 50%, transparent 70%)`
                        }}
                    />
                )}

                <div className="relative z-30">
                    {content.map((item, index) => {
                        if (item.type === "h1") {
                            return (
                                <h1 key={index} className="text-5xl font-bold mb-8">
                                    {renderText(item.text)}
                                </h1>
                            );
                        } else if (item.type === "h2") {
                            return (
                                <h2 key={index} className="text-4xl font-bold mt-16 mb-6">
                                    {renderText(item.text)}
                                </h2>
                            );
                        } else {
                            return (
                                <p key={index} className="text-xl leading-relaxed mb-6">
                                    {renderText(item.text)}
                                </p>
                            );
                        }
                    })}
                </div>
            </div>

            <div className="h-screen"></div>
        </div>
    );
}
