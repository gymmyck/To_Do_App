import { useState, useEffect } from "react";

export function levelDescription(item) {

    switch (true) {
        case item === null || item === undefined || item === 0:
            return <div>Low (0/10)</div>;

        case item > 0 && item < 5:
            return `Low (${item}/10)`;

        case item >= 5 && item < 8:
            return `Moderate (${item}/10)`;

        case item >= 8:
            return `High (${item}/10)`;
    }
}