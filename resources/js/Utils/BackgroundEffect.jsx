import { useEffect, useRef, useState } from "react";

const ConnectingDots = () => {
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState(null);
    const dotsRef = useRef([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.width = width;
            canvasRef.current.height = height;
            const context = canvasRef.current.getContext("2d");
            setCtx(context);

            const minDots = 10;
            const maxDots = 80;
            const minWidth = 1000;
            const maxWidth = 1920;
            const numDots = Math.round(
                minDots +
                    ((maxDots - minDots) / (maxWidth - minWidth)) *
                        (width - minWidth)
            );

            let initialDots = [...Array(numDots > minDots ? numDots : 0)].map(
                () => ({
                    x: Math.floor(Math.random() * width),
                    y: Math.floor(Math.random() * height),
                    vx: Math.random() * 3 - 1.5,
                    vy: Math.random() * 3 - 1.5,
                })
            );

            const minSpeed = 0.5;
            initialDots.forEach((dot) => {
                if (Math.abs(dot.vx) < minSpeed) {
                    if (dot.vx > 0) dot.vx += minSpeed;
                    else dot.vx -= minSpeed;
                }
                if (Math.abs(dot.vy) < minSpeed) {
                    if (dot.vy > 0) dot.vy += minSpeed;
                    else dot.vy -= minSpeed;
                }
            });
            dotsRef.current = initialDots;

            const interval = setInterval(() => {
                updateDots();
                drawConnections();
            }, 25);

            return () => clearInterval(interval);
        }
    }, [width, height, ctx]);

    const updateDots = () => {
        dotsRef.current.forEach((dot) => {
            dot.x = dot.x + dot.vx;
            dot.y = dot.y + dot.vy;
            if (dot.x < -200 || dot.x > width + 200) dot.vx *= -1;
            if (dot.y < -100 || dot.y > height + 100) dot.vy *= -1;
        });
    };

    const drawConnections = () => {
        if (ctx) {
            const dots = dotsRef.current; // Access dots from dotsRef
            ctx.clearRect(0, 0, width, height);

            dots.forEach((dot, index) => {
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, 3, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
                ctx.fill();

                dots.slice(index + 1).forEach((otherDot) => {
                    const distanceSquared =
                        Math.pow(otherDot.x - dot.x, 2) +
                        Math.pow(otherDot.y - dot.y, 2);
                    const thresholdSquared = 200 * 200; // Square of the threshold distance

                    if (distanceSquared < thresholdSquared) {
                        ctx.beginPath();
                        ctx.moveTo(dot.x, dot.y);
                        ctx.lineTo(otherDot.x, otherDot.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${
                            1 - Math.sqrt(distanceSquared) / 200
                        })`;
                        ctx.stroke();
                    }
                });
            });
        }
    };

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: -1,
                backgroundImage: "url('./assets/logo/logo.png')",
                backgroundSize: "40%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <canvas ref={canvasRef} style={{ filter: "blur(2.5px)" }} />
        </div>
    );
};

export default ConnectingDots;
