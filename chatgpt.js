require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

(async () => {
    try {
        // 1. Chat with GPT-4o
        const gpt4o = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [{ role: "user", content: "Summarize AI in 1 sentence." }]
        });
        console.log("GPT-4o:", gpt4o.choices[0].message.content);

        // 2. Chat with GPT-4 Turbo
        const gpt4turbo = await openai.chat.completions.create({
            model: "gpt-4-turbo",
            messages: [{ role: "user", content: "What is quantum computing?" }]
        });
        console.log("GPT-4 Turbo:", gpt4turbo.choices[0].message.content);

        // 3. Chat with GPT-3.5 Turbo
        const gpt35 = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "Tell me a joke." }]
        });
        console.log("GPT-3.5:", gpt35.choices[0].message.content);

        // 4. Whisper (Speech-to-Text)
        const whisperFile = fs.createReadStream("./audio_sample.mp3"); // Provide your own file
        const transcript = await openai.audio.transcriptions.create({
            model: "whisper-1",
            file: whisperFile
        });
        console.log("Whisper transcription:", transcript.text);

        // 5. DALL·E (Image Generation)
        const image = await openai.images.generate({
            model: "dall-e-3",
            prompt: "A futuristic city skyline at night",
            n: 1,
            size: "1024x1024"
        });
        console.log("Image URL:", image.data[0].url);

        // 6. Text-to-Speech (TTS)
        const speech = await openai.audio.speech.create({
            model: "tts-1",
            voice: "nova",
            input: "Hello! This is an AI-generated voice."
        });
        const outFile = path.join(__dirname, "output.mp3");
        fs.writeFileSync(outFile, Buffer.from(await speech.arrayBuffer()));
        console.log("TTS saved to output.mp3");

        // 7. Embeddings
        const embedding = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: "Machine learning is fascinating."
        });
        console.log("Embedding vector (length):", embedding.data[0].embedding.length);

        // 8. Moderation
        const moderation = await openai.moderations.create({
            input: "I want to hurt someone."
        });
        console.log("Moderation flagged:", moderation.results[0].flagged);

    } catch (error) {
        console.error("Error:", error);
    }
})();
