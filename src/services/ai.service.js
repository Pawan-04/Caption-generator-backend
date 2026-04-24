const {GoogleGenAI} = require("@google/genai");

const ai = new GoogleGenAI({});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// await main();

async function generateCaption(base64ImageFile){
    const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: base64ImageFile,
    },
  },
  { text: "Caption this image." },
];

const response = await ai.models.generateContent({
  model: "gemini-3-flash-preview",
  contents: contents,
  config:{
    systemInstruction:`You are expert in caption generation fro image.
    You generate single line caption for the image>
    Your caption should short and concise.
    You use hastags and emojis in caption.`
  }
});
return response.text;
}


module.exports = generateCaption