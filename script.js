function showMessage(response) {
    if (response === "No") {
        const noButton = document.getElementById("no-button");
        const container = document.querySelector(".container");
        const maxWidth = container.clientWidth - noButton.offsetWidth;
        const maxHeight = container.clientHeight - noButton.offsetHeight;

        // Set button position to absolute
        noButton.style.position = "absolute";

        // Generate random coordinates within the visible container
        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        // Apply new coordinates to the button
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

        // Update text content and hide name message
        document.getElementById("question").textContent =
            "The no button is just for visuals";
    }

    if (response === "Yes") {
        // Remove no button
        document.getElementById("no-button").remove();

        // Update text content, show message
        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "YAAAAAY!!! :] (i have no idea if you pressed yes or no but plz lmk hehe?)";
        yesMessage.style.fontStyle = "normal";

        // Remove yes button
        document.getElementById("yesButton").remove();
    }
}
