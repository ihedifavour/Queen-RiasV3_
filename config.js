require("dotenv").config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || ".", // Command prefix

    ownerName: process.env.OWNER_NAME || "Toxxic-Boy", // Owner name

    ownerNumber: process.env.OWNER_NUMBER || "2348165846414", // Your WhatsApp number

    mode: process.env.MODE || "public", // Bot mode: 'public' or 'private'

    region: process.env.REGION || "Nigeria", // Region

    botName: process.env.BOT_NAME || "Rias Gremory V3", // Bot name

    exifPack: process.env.EXIF_PACK || "RIAS V3 LOVES", // Sticker pack name

    exifAuthor: process.env.EXIF_AUTHOR || "Toxxic", // Author of the sticker pack

    timeZone: process.env.TIME_ZONE || "Africa/Lagos", // Time zone

    presenceStatus: process.env.PRESENCE_STATUS || "available", // Bot presence status

    autoRead: process.env.AUTO_READ === "true", // Auto-read messages (true or false)

    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true", // Auto-view statuses (true or false)

    autoReact: process.env.AUTO_REACT === "true", // Auto-react (true or false)

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVvQnFGOFY2eFRDNTl5YmZUVklSVjRkRFcwM0d3Z0llV1Znc3dZY2RsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tSbTBEbk1SVTdDVHFTd3FHcEFBLzdueURIL3Y0cEFOamdhdjNuNWxBTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SW02SWJlQkkzdHlsZnc5RXlnNWdoV1VWVHpqK042QXFNS0MrYnBESTNRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFbmJZbWhFZTYrdk81Mmdaa3NvTTNPdEJmU25TS0R6MGdmR0xaY3hQV2dNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdORmUzeDRWd0drUm1hWklGaXpLMStsMSs2N0UvOUdKbUdJS0tSZ1ZBbVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFxajBaYU1Rd3kzRkZoWmNsVjRzNzN4anZ4QkkrSURneFNoQjlUUEk1REU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS015K0plRjhQelhaSFJpdmNGa3ZDdnFvT1RUejNKK1VRWmdqR0gvU0NVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3NNN3NiVUg0KzIyTGpzOFlNUlBUVEF3QWp2RXJwZGJVMnp5eFFTeFdnOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJFbjBrQ2h1QnNEUm9ZSEpKNkYvVnQvdDdvZEtHcWZlTDRuVFdqczI5UGNaRWcySncyVW9XWXlTYURkMDJXOVZRTFB5Z28vWFNmemF4T1RGOXBPZ2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6InNXS1JQUldkU3VsZGxmeGNqek05TVI1L05rZklQNlA1bTNGWjVZd3RHU3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjNORDdWRVhEIiwibWUiOnsiaWQiOiIyMzQ5MDM2MzEwNjMzOjE3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjY2MjA2NjAyODcwODc5OjE3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1hlMkN3UXRNUzl2QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT0Fwd2o3eVpUNFhOVjRXUU1CR1REb3pkZ2M5N2VjUW1ycVlTVWVlaEFBST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUnpFYVpXVFhCM1Z5Z2tMMFlkUVY4MmFFaWduVk9Wb3UxYWlUalpHZnFaaUhjNlRkR0d0QXg3QlV3em14L3FrMmcvOHZON1RTZkcwMllRZUozS1pVaUE9PSIsImRldmljZVNpZ25hdHVyZSI6IlVoSWxYTFd5RDB1VERlV3E4SGZLQXVDeDNHTTJWb05aUG1qTDlYeUpYcnE2TVJaYnJneENkeW0yRW9IV05iL3NtSkpMcEUxdjBTZVpBUVgvait1d2pnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAzNjMxMDYzMzoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUZ0tjSSs4bVUrRnpWZUZrREFSa3c2TTNZSFBlM25FSnE2bUVsSG5vUUFDIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNzQ1MDA1MCwibGFzdFByb3BIYXNoIjoiMkc0QW11In0=", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false", // Auto-reject calls feature (true or false)
};
