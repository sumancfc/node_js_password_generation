document
  .getElementById("passwordForm")!
  .addEventListener("submit", async function (event: Event) {
    event.preventDefault();

    const length = (document.getElementById("length") as HTMLInputElement)
      .value;
    const includeSymbols = (
      document.getElementById("includeSymbols") as HTMLInputElement
    ).checked;
    const includeNumbers = (
      document.getElementById("includeNumbers") as HTMLInputElement
    ).checked;
    const customSet = (document.getElementById("customSet") as HTMLInputElement)
      .value;

    const response = await fetch("/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        length,
        includeSymbols,
        includeNumbers,
        customSet,
      }),
    });

    const data = await response.json();
    document.getElementById("generatedPassword")!.innerText = data.password;
  });
