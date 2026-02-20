"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * BackgroundRippleEffect implementing the exact logic requested by Aceternity / ShadCN ripple.
 * Uses CSS Animation 'cell-ripple'.
 */
export const BackgroundRipple = React.memo(
    ({
        className,
        cellClassName,
    }: {
        className?: string;
        cellClassName?: string;
    }) => {
        // We use a high-performance CSS Grid approach.
        const [columns, setColumns] = useState(0);
        const [rows, setRows] = useState(0);

        useEffect(() => {
            const calculateGrid = () => {
                if (typeof window === "undefined") return;
                const width = window.innerWidth;
                const height = window.innerHeight;
                // Cell size ~ 40px
                setColumns(Math.ceil(width / 40));
                setRows(Math.ceil(height / 40));
            };

            calculateGrid();
            window.addEventListener("resize", calculateGrid);

            return () => window.removeEventListener("resize", calculateGrid);
        }, []);

        // We memoize the grid items to avoid full re-renders unless layout changes.
        const gridItems = React.useMemo(() => {
            return Array.from({ length: columns * rows }).map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        "group relative border-r border-b border-white/[0.1] transition-colors hover:bg-white/[0.02]",
                        cellClassName
                    )}
                >
                    <div
                        className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 group-hover:animate-cell-ripple"
                        style={{
                            animationDuration: '600ms',
                        }}
                    />
                </div>
            ));
        }, [columns, rows, cellClassName]);

        return (
            <div
                className={cn(
                    "absolute inset-0 z-0 flex h-full w-full items-center justify-center overflow-hidden bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
                    className
                )}
            >
                <div
                    className="grid h-full w-full pointer-events-auto"
                    style={{
                        gridTemplateColumns: `repeat(${columns}, 1fr)`,
                        gridTemplateRows: `repeat(${rows}, 1fr)`,
                    }}
                >
                    {gridItems}
                </div>

                {/* Soft edge fade for premium look */}
                <div className="absolute inset-0 bg-background/50 pointer-events-none" />
            </div>
        );
    }
);

BackgroundRipple.displayName = "BackgroundRipple";
