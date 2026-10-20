async function sendMessage() {

    const input =
        document.getElementById("messageInput");

    const chatBox =
        document.getElementById("chatBox");

    const message =
        input.value.trim();


    if (message === "") {
        return;
    }


    // Show user's message
    chatBox.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;


    input.value = "";


    // Send message to Python
    const response = await fetch("/chat", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            message: message
        })

    });


    const data = await response.json();


    // Show AI response
    chatBox.innerHTML += `
        <div class="ai-message">
            ${data.reply}
        </div>
    `;


    chatBox.scrollTop =
        chatBox.scrollHeight;
}


// Press ENTER to send
function handleEnter(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

}


// Image generator
async function generateImage() {

    const prompt =
        document.getElementById("imagePrompt").value;

    const result =
        document.getElementById("imageResult");


    if (prompt.trim() === "") {

        result.innerHTML =
            "Please describe an image first.";

        return;
    }


    result.innerHTML =
        "🎨 Creating your image...";


    const response =
        await fetch("/generate-image", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                prompt: prompt
            })

        });


    const data =
        await response.json();


    result.innerHTML =
        `<p>${data.reply}</p>`;
}