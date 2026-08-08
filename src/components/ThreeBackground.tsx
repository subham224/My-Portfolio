'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { 
    Zap, 
    Layers, 
    Database, 
    Bell, 
    Activity,
} from 'lucide-react';
import { useState } from 'react';

// --- Configuration: Architecture Map ---

const NODES = [
    // Producer (The Source)
    { id: 'source', label: 'Event Source', icon: Zap, x: 100, y: 300, color: '#facc15' }, // Yellow

    // The Broker (Kafka/RabbitMQ)
    { id: 'broker', label: 'Event Bus', icon: Layers, x: 400, y: 300, color: '#a78bfa' }, // Purple

    // Consumers (Fan-Out)
    { id: 'db', label: 'Data Store', icon: Database, x: 750, y: 150, color: '#38bdf8' }, // Blue
    { id: 'analytics', label: 'Real-time Analytics', icon: Activity, x: 750, y: 300, color: '#f472b6' }, // Pink
    { id: 'notify', label: 'Notification Svc', icon: Bell, x: 750, y: 450, color: '#34d399' }, // Green
];

const STREAMS = [
    // Ingest Stream (Source -> Broker)
    { id: 'ingest', path: 'M 100,300 L 400,300', color: '#facc15', particles: 3, speed: 2 },
    
    // Fan-Out Streams (Broker -> Consumers)
    { id: 'stream-db', path: 'M 400,300 C 500,300 500,150 750,150', color: '#38bdf8', particles: 4, speed: 3 },
    { id: 'stream-analytics', path: 'M 400,300 L 750,300', color: '#f472b6', particles: 5, speed: 2.5 },
    { id: 'stream-notify', path: 'M 400,300 C 500,300 500,450 750,450', color: '#34d399', particles: 2, speed: 4 },
];

export default function EventDrivenUniverse() {
    const { scrollY } = useScroll();
    
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0.2]); // Fade out background nodes to focus on content

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-slate-950 flex items-center justify-center pointer-events-none">

            {/* Outer wrapper handles responsive scaling via a real CSS class (not inline style),
                so it doesn't get clobbered by the framer-motion scroll-linked inline transform below. */}
            <div className="scale-[0.38] xs:scale-[0.45] sm:scale-[0.6] md:scale-[0.8] lg:scale-100 origin-center transition-transform">
                <motion.div
                    style={{ scale, opacity }}
                    className="relative w-[900px] h-[600px]"
                >
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                        <defs>
                            <radialGradient id="burst-gradient">
                                <stop offset="0%" stopColor="white" stopOpacity="1" />
                                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        {STREAMS.map((stream) => (
                            <EventStream key={stream.id} stream={stream} />
                        ))}
                    </svg>

                    {NODES.map((node) => (
                        <EventNode key={node.id} node={node} />
                    ))}
                </motion.div>
            </div>

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.3)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />
        </div>
    );
}

// --- Sub-Components ---

function EventNode({ node }: { node: typeof NODES[0] }) {
    // Deterministic per-node repeat delay derived from its id, so it stays
    // stable across re-renders instead of calling Math.random() during render.
    const repeatDelay = (node.id.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % 10) / 5;

    return (
        <div 
            className="absolute flex flex-col items-center justify-center pointer-events-auto"
            style={{ 
                left: node.x, 
                top: node.y, 
                transform: 'translate(-50%, -50%)' 
            }}
        >
            {/* Burst Effect behind node */}
            <motion.div
                className="absolute inset-0 rounded-full bg-white blur-xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.3, 0], scale: [1, 1.5, 2] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay }}
                style={{ backgroundColor: node.color }}
            />

            {/* Node Icon */}
            <div className="relative z-10 w-16 h-16 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center shadow-2xl group cursor-crosshair hover:border-white transition-colors">
                <node.icon size={28} color={node.color} />
            </div>

            {/* Label */}
            <div className="mt-2 px-2 py-1 bg-slate-900/90 border border-slate-800 rounded text-[10px] font-mono uppercase tracking-widest text-slate-400">
                {node.label}
            </div>
        </div>
    );
}

function EventStream({ stream }: { stream: typeof STREAMS[0] }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <g 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            className="pointer-events-auto cursor-pointer"
        >
            {/* The Wire (Track) */}
            <path
                d={stream.path}
                stroke={stream.color}
                strokeWidth="2"
                fill="none"
                strokeOpacity="0.2"
                strokeDasharray="5,5"
            />

            {/* Hover Interaction: Highlight the stream */}
            <motion.path
                d={stream.path}
                stroke={stream.color}
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                strokeOpacity="0.5"
            />

            {/* The Events (Particles) */}
            {Array.from({ length: stream.particles }).map((_, i) => (
                <Particle 
                    key={i} 
                    stream={stream} 
                    delay={i * (stream.speed / stream.particles)} 
                    isPaused={isHovered}
                />
            ))}
        </g>
    );
}

function Particle({ stream, delay, isPaused }: { stream: typeof STREAMS[0], delay: number, isPaused: boolean }) {
    return (
        <motion.circle
            r="4"
            fill="white"
            initial={{ opacity: 0 }}
            animate={isPaused ? {} : { opacity: [0, 1, 1, 0] }} // Stops opacity cycle on pause
            transition={{
                duration: stream.speed,
                repeat: Infinity,
                ease: "linear",
                delay: delay,
                times: [0, 0.1, 0.9, 1]
            }}
        >
            {/* The movement along the path */}
            <animateMotion 
                dur={isPaused ? "9999s" : `${stream.speed}s`} // Effectively pauses motion
                repeatCount="indefinite" 
                path={stream.path}
                begin={`-${delay}s`} 
            />
        </motion.circle>
    );
}