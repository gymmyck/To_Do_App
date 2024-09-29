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

export function calculateDueDays(date) {
    const dueDate = new Date(date);
    const currentDate = new Date();
    const timeDiff = dueDate.getTime() - currentDate.getTime();
    const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
    return days;
}

export function setDueDaysColor(isCompleted, days) {
    const colors = ["#ff9f1c", "#ffffc7", "#97dffc", '#74c69d']
    if (!isCompleted) {
        switch (true) {
            case days >= 0 && days <= 1:
                return colors[0];
            case days >= 0 && days <= 3:
                return colors[1];
            case days > 3:
                return colors[2];
        }
    } else { return colors[3]; }
    return '#d90429';
}

export function percentageCalculator(todo, id) {

    if (Array.isArray(todo.subtasks)) {
        const completedSubtasks = todo.subtasks.filter((subtask) => subtask.isCompleted);
        const incompleteSubtasks = todo.subtasks.filter((subtask) => !subtask.isCompleted);
        const percentage = Math.floor((completedSubtasks.length / todo.subtasks.length) * 100);

        if (completedSubtasks.length === todo.subtasks.length) {
            todo.isCompleted = !todo.isCompleted;
        }

        if (todo.isCompleted) {
            if (todo.subtasks.length === 0) {
                return 100;
            } else {
                if (incompleteSubtasks.length > 0) {
                    todo.isCompleted = !todo.isCompleted;
                    return percentage;
                }
                return 100;
            }
        }
        else {
            if (todo.subtasks.length) {
                return percentage;
            }
            return 0;
        }
    }
    return 100;
}

export function completeAllSubtasks(todo) {
    todo.isCompleted = !todo.isCompleted;
    if (todo.subtasks.length) {
        todo.subtasks.map((subtask) =>
            subtask.isCompleted = !subtask.isCompleted
        )
    }
}



// if (todo.isCompleted) {
//     subtask.isCompleted = false;
// } else {
//     if (!todo.isCompleted) {
//         subtask.isCompleted = true;
//     }}

// incompleteSubtasks.map((subtask) => {
//     if (subtask.id === id) {
//         subtask.isCompleted = !subtask.isCompleted;
//     }
// });
// // if (incompleteSubtasks.length === 0) {
// //     todo.isCompleted = !todo.isCompleted;
// // }


// if (todo.isCompleted) {
//     todo.subtasks.map((subtask) => {
//         subtask.isCompleted = true;
//     })
// }