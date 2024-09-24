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

export function percentageCalculator (todo, id) {

    if (Array.isArray(todo.subtasks)) {
        const completedSubtasks = todo.subtasks.filter((subtask) => subtask.isCompleted);

        const incompleteSubtasks = todo.subtasks.filter((subtask) => !subtask.isCompleted);

        const percentage = Math.floor((completedSubtasks.length / todo.subtasks.length) * 100);

        if (todo.isCompleted) {
            if (todo.subtasks.length === 0) {
                return 100;
            } else {
                if (incompleteSubtasks.length > 0) {
                    incompleteSubtasks.map((subtask) => {
                        if (subtask.id === id) {
                            subtask.isCompleted = !subtask.isCompleted;
                        }
                    });
                }
                return 100;
            }
        } else {
            if (todo.subtasks.length) {
                return percentage;
            }
            return 0;
        }
    }
    return 100;
}