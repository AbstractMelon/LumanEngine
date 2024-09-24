export function parseScript(scriptContent: string): Function {
    try {
      // Parse the script as a function that will receive the entity and delta time
      const scriptFunc = new Function('entity', 'delta', scriptContent);
      return scriptFunc;
    } catch (e) {
      console.error("Error parsing script:", e);
      return () => {};
    }
  }
  