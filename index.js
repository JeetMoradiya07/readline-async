import readline from "readline";
import process from "process";

/**
 * @returns {Promise<string>} User input as resolved promise
 */
export default function rl(query) {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        // Ensure prompt starts on new line for better visibility
        const formattedQuery = query.endsWith("\n") ? query : query + "\n";

        rl.question(formattedQuery, (answer) => {
            cleanup();
            resolve(answer);
        });

        rl.on("error", (err) => {
            cleanup();
            reject(err);
        });

        // Cleanup handlers for process termination signals
        const exitHandler = () => {
            process.stdout.write("\n");
            cleanup();
        };

        const cleanup = () => {
            rl.close();
            // Remove all process listeners to prevent memory leaks
            process.off("SIGINT", exitHandler);
            process.off("SIGTERM", exitHandler);
            process.off("exit", exitHandler);
        };

        // Register cleanup for common termination scenarios
        process.on("SIGINT", exitHandler);
        process.on("SIGTERM", exitHandler);
        process.on("exit", exitHandler);
    });
}
