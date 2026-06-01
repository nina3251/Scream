import { Character } from "../types";

export async function getGhostfaceInsight(character: Character): Promise<string> {
  try {
    const response = await fetch('/api/insight', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ character }),
    });

    if (!response.ok) {
      throw new Error(`Server returned error status: ${response.status}`);
    }

    const data = await response.json();
    return data.insight || "";
  } catch (error) {
    console.error("Error getting Ghostface insight:", error);
    return "Error: Signal lost in the Woodsboro woods...";
  }
}
