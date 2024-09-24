import { writeFile } from "@tauri-apps/api/fs";

export function exportGame(gameData: any) {
    const fileContent = JSON.stringify(gameData);
    writeFile({ path: "game.json", contents: fileContent })
        .then(() => console.log("Game exported!"))
        .catch((err) => console.error("Error exporting game:", err));
}
