/* Rebuilt configuration + data for Pseudomon Revision Arena+ */

const APP_CONFIG = {
  "appTitle": "Pseudomon Revision Arena+",
  "storagePrefix": "pseudomon0478v6",
  "quizLength": 10,
  "dailyPackLimit": 6,
  "defaultCoins": 0,
  "rewards": {
    "correctAnswerCoins": 10,
    "quizCompletionCoins": 20,
    "perfectQuizBonus": 25,
    "battleRoundWinCoins": 8,
    "battleMatchWinCoins": 30,
    "battleDrawCoins": 12
  },
  "battle": {
    "teamSize": 7,
    "randomBonusMin": 0,
    "randomBonusMax": 15
  },
  "packs": {
    "singleBasic": {
      "label": "Single Pack",
      "emoji": "🎴",
      "cost": 15,
      "packSize": 1,
      "odds": {
        "Bronze": 0.86,
        "Silver": 0.12,
        "Gold": 0.02,
        "Legend": 0.0
      },
      "description": "Budget single-card pull. Mostly Bronze, occasionally Silver, rarely Gold."
    },
    "singlePremium": {
      "label": "Single Premium",
      "emoji": "✨",
      "cost": 35,
      "packSize": 1,
      "odds": {
        "Bronze": 0.55,
        "Silver": 0.28,
        "Gold": 0.14,
        "Legend": 0.03
      },
      "description": "Single-card premium pull with much better premium-card odds."
    },
    "tripleStandard": {
      "label": "Triple Pack",
      "emoji": "📦",
      "cost": 75,
      "packSize": 3,
      "odds": {
        "Bronze": 0.48,
        "Silver": 0.34,
        "Gold": 0.15,
        "Legend": 0.03
      },
      "description": "Three cards, more expensive than singles, and a much stronger chance of premium cards."
    },
    "triplePremium": {
      "label": "Triple Premium",
      "emoji": "🎁",
      "cost": 120,
      "packSize": 3,
      "odds": {
        "Bronze": 0.22,
        "Silver": 0.4,
        "Gold": 0.3,
        "Legend": 0.08
      },
      "description": "Three-card premium bundle with strong Gold and Legend chances."
    },
    "mega5": {
      "label": "Mega Five Pack",
      "emoji": "🪩",
      "cost": 185,
      "packSize": 5,
      "odds": {
        "Bronze": 0.08,
        "Silver": 0.32,
        "Gold": 0.46,
        "Legend": 0.14
      },
      "description": "Five-card spectacle with the best odds in the shop."
    }
  }
};

const TRAINERS = [
  {
    "id": "trainer-debug",
    "name": "Debug Master Dottie",
    "title": "Patch Wizard",
    "stat": "Debug",
    "bonus": 10,
    "cost": 200,
    "description": "Gives your squad +10 Debug. Spots errors from across the room."
  },
  {
    "id": "trainer-speed",
    "name": "Sprint Sir",
    "title": "Loop Coach",
    "stat": "Speed",
    "bonus": 10,
    "cost": 200,
    "description": "Gives your squad +10 Speed. Everything feels more urgent."
  },
  {
    "id": "trainer-chaos",
    "name": "Chaos Goblin",
    "title": "Randomness Consultant",
    "stat": "Chaos",
    "bonus": 10,
    "cost": 200,
    "description": "Gives your squad +10 Chaos. Educationally questionable, tactically hilarious."
  },
  {
    "id": "trainer-lambda",
    "name": "Professor Lambda",
    "title": "Legendary Mentor",
    "stat": "ALL",
    "bonus": 5,
    "cost": 500,
    "description": "Gives your whole squad +5 to battle power calculations."
  }
];

const PSEUDOMON_ROSTER = [
  {
    "id": "psu-001",
    "name": "Cachearoo",
    "theme": "Memory",
    "rarity": "Bronze",
    "funnyDescription": "Stores half a sandwich, three semicolons, and yesterday's homework results.",
    "stats": {
      "Logic": 32,
      "Speed": 48,
      "Chaos": 41,
      "Debug": 18
    },
    "sellValue": 12,
    "power": 33.9,
    "imagePath": "psu-001.svg"
  },
  {
    "id": "psu-002",
    "name": "Bytegeist",
    "theme": "Data Representation",
    "rarity": "Bronze",
    "funnyDescription": "Haunts binary strings and whispers, 'Have you checked the bit depth?'",
    "stats": {
      "Logic": 37,
      "Speed": 29,
      "Chaos": 53,
      "Debug": 20
    },
    "sellValue": 12,
    "power": 33.1,
    "imagePath": "psu-002.svg"
  },
  {
    "id": "psu-003",
    "name": "Loopalope",
    "theme": "Iteration",
    "rarity": "Bronze",
    "funnyDescription": "Will keep running until somebody remembers the stopping condition.",
    "stats": {
      "Logic": 35,
      "Speed": 40,
      "Chaos": 46,
      "Debug": 21
    },
    "sellValue": 12,
    "power": 34.4,
    "imagePath": "psu-003.svg"
  },
  {
    "id": "psu-004",
    "name": "Pixelfin",
    "theme": "Images",
    "rarity": "Bronze",
    "funnyDescription": "Claims every blurry picture is an artistic low-resolution choice.",
    "stats": {
      "Logic": 31,
      "Speed": 39,
      "Chaos": 44,
      "Debug": 23
    },
    "sellValue": 12,
    "power": 33.0,
    "imagePath": "psu-004.svg"
  },
  {
    "id": "psu-005",
    "name": "Datadillo",
    "theme": "Storage",
    "rarity": "Bronze",
    "funnyDescription": "Rolls into a ball whenever somebody says 'backup schedule'.",
    "stats": {
      "Logic": 38,
      "Speed": 26,
      "Chaos": 35,
      "Debug": 24
    },
    "sellValue": 12,
    "power": 31.0,
    "imagePath": "psu-005.svg"
  },
  {
    "id": "psu-006",
    "name": "Bittern",
    "theme": "Binary",
    "rarity": "Bronze",
    "funnyDescription": "Can only count to two but does it with astonishing confidence.",
    "stats": {
      "Logic": 40,
      "Speed": 34,
      "Chaos": 32,
      "Debug": 22
    },
    "sellValue": 12,
    "power": 32.8,
    "imagePath": "psu-006.svg"
  },
  {
    "id": "psu-007",
    "name": "Spammoth",
    "theme": "Cyber Security",
    "rarity": "Bronze",
    "funnyDescription": "Charges through inboxes yelling about unbelievably cheap sunglasses.",
    "stats": {
      "Logic": 28,
      "Speed": 27,
      "Chaos": 57,
      "Debug": 18
    },
    "sellValue": 12,
    "power": 29.6,
    "imagePath": "psu-007.svg"
  },
  {
    "id": "psu-008",
    "name": "Packetpuff",
    "theme": "Networks",
    "rarity": "Bronze",
    "funnyDescription": "Arrives in small packets, occasionally out of order, always cheerful.",
    "stats": {
      "Logic": 34,
      "Speed": 43,
      "Chaos": 39,
      "Debug": 20
    },
    "sellValue": 12,
    "power": 33.5,
    "imagePath": "psu-008.svg"
  },
  {
    "id": "psu-009",
    "name": "Firewallaby",
    "theme": "Security",
    "rarity": "Silver",
    "funnyDescription": "Bounces suspicious packets back where they came from with polite aggression.",
    "stats": {
      "Logic": 58,
      "Speed": 44,
      "Chaos": 28,
      "Debug": 50
    },
    "sellValue": 30,
    "power": 48.0,
    "imagePath": "psu-009.svg"
  },
  {
    "id": "psu-010",
    "name": "Routertoot",
    "theme": "Networks",
    "rarity": "Silver",
    "funnyDescription": "Knows the best route through a network and still gets lost near the canteen.",
    "stats": {
      "Logic": 55,
      "Speed": 52,
      "Chaos": 24,
      "Debug": 35
    },
    "sellValue": 30,
    "power": 44.6,
    "imagePath": "psu-010.svg"
  },
  {
    "id": "psu-011",
    "name": "Booleanian",
    "theme": "Boolean Logic",
    "rarity": "Silver",
    "funnyDescription": "Only answers in TRUE, FALSE, or dramatic eyebrow raises.",
    "stats": {
      "Logic": 64,
      "Speed": 33,
      "Chaos": 18,
      "Debug": 54
    },
    "sellValue": 30,
    "power": 46.9,
    "imagePath": "psu-011.svg"
  },
  {
    "id": "psu-012",
    "name": "Queryquill",
    "theme": "Databases",
    "rarity": "Silver",
    "funnyDescription": "Spikes every badly normalised table it can find.",
    "stats": {
      "Logic": 60,
      "Speed": 36,
      "Chaos": 21,
      "Debug": 47
    },
    "sellValue": 30,
    "power": 44.9,
    "imagePath": "psu-012.svg"
  },
  {
    "id": "psu-013",
    "name": "Defragon",
    "theme": "Utilities",
    "rarity": "Silver",
    "funnyDescription": "Rearranges cluttered file systems and your pencil case if left unattended.",
    "stats": {
      "Logic": 62,
      "Speed": 41,
      "Chaos": 20,
      "Debug": 58
    },
    "sellValue": 30,
    "power": 49.5,
    "imagePath": "psu-013.svg"
  },
  {
    "id": "psu-014",
    "name": "Arraynold",
    "theme": "Arrays",
    "rarity": "Silver",
    "funnyDescription": "Insists on lining everybody up by index, then misplaces index zero.",
    "stats": {
      "Logic": 59,
      "Speed": 37,
      "Chaos": 26,
      "Debug": 49
    },
    "sellValue": 30,
    "power": 46.0,
    "imagePath": "psu-014.svg"
  },
  {
    "id": "psu-015",
    "name": "Pseudopuff",
    "theme": "Algorithms",
    "rarity": "Silver",
    "funnyDescription": "Explains every plan in immaculate pseudocode nobody asked for.",
    "stats": {
      "Logic": 66,
      "Speed": 42,
      "Chaos": 18,
      "Debug": 51
    },
    "sellValue": 30,
    "power": 49.0,
    "imagePath": "psu-015.svg"
  },
  {
    "id": "psu-016",
    "name": "Phishling",
    "theme": "Internet Safety",
    "rarity": "Silver",
    "funnyDescription": "Pretends to be your principal but always signs emails with too many exclamation marks.",
    "stats": {
      "Logic": 45,
      "Speed": 55,
      "Chaos": 37,
      "Debug": 39
    },
    "sellValue": 30,
    "power": 44.8,
    "imagePath": "psu-016.svg"
  },
  {
    "id": "psu-017",
    "name": "Compressadon",
    "theme": "Compression",
    "rarity": "Gold",
    "funnyDescription": "Can fold an entire folder into a lunchbox and still leave room for dessert.",
    "stats": {
      "Logic": 75,
      "Speed": 61,
      "Chaos": 19,
      "Debug": 68
    },
    "sellValue": 70,
    "power": 61.4,
    "imagePath": "psu-017.svg"
  },
  {
    "id": "psu-018",
    "name": "Syntaxolotl",
    "theme": "Programming",
    "rarity": "Gold",
    "funnyDescription": "Looks adorable while judging your missing bracket choices.",
    "stats": {
      "Logic": 72,
      "Speed": 49,
      "Chaos": 25,
      "Debug": 80
    },
    "sellValue": 70,
    "power": 61.2,
    "imagePath": "psu-018.svg"
  },
  {
    "id": "psu-019",
    "name": "Cloudoodle",
    "theme": "Internet",
    "rarity": "Gold",
    "funnyDescription": "Floats above the network layer and stores everybody's revision notes in a fluffy server farm.",
    "stats": {
      "Logic": 68,
      "Speed": 77,
      "Chaos": 22,
      "Debug": 64
    },
    "sellValue": 70,
    "power": 62.3,
    "imagePath": "psu-019.svg"
  },
  {
    "id": "psu-020",
    "name": "Checksumurai",
    "theme": "Validation",
    "rarity": "Gold",
    "funnyDescription": "Slices corrupted data with terrifying accuracy and excellent posture.",
    "stats": {
      "Logic": 84,
      "Speed": 72,
      "Chaos": 14,
      "Debug": 71
    },
    "sellValue": 70,
    "power": 67.2,
    "imagePath": "psu-020.svg"
  },
  {
    "id": "psu-021",
    "name": "Bugbearrister",
    "theme": "Debugging",
    "rarity": "Gold",
    "funnyDescription": "Cross-examines runtime errors until they confess.",
    "stats": {
      "Logic": 80,
      "Speed": 52,
      "Chaos": 17,
      "Debug": 84
    },
    "sellValue": 70,
    "power": 64.5,
    "imagePath": "psu-021.svg"
  },
  {
    "id": "psu-022",
    "name": "Cryptofluff",
    "theme": "Encryption",
    "rarity": "Gold",
    "funnyDescription": "Wraps secrets in seven layers of fluff and one very smug padlock.",
    "stats": {
      "Logic": 79,
      "Speed": 63,
      "Chaos": 21,
      "Debug": 67
    },
    "sellValue": 70,
    "power": 63.3,
    "imagePath": "psu-022.svg"
  },
  {
    "id": "psu-023",
    "name": "Truthibbit",
    "theme": "Logic Gates",
    "rarity": "Gold",
    "funnyDescription": "Croaks only in completed truth tables and judges incomplete ones silently.",
    "stats": {
      "Logic": 85,
      "Speed": 58,
      "Chaos": 16,
      "Debug": 70
    },
    "sellValue": 70,
    "power": 64.2,
    "imagePath": "psu-023.svg"
  },
  {
    "id": "psu-024",
    "name": "Cloudchomper",
    "theme": "Web",
    "rarity": "Gold",
    "funnyDescription": "Eats stale cookies, not browser cookies. Mostly.",
    "stats": {
      "Logic": 71,
      "Speed": 74,
      "Chaos": 29,
      "Debug": 60
    },
    "sellValue": 70,
    "power": 62.7,
    "imagePath": "psu-024.svg"
  },
  {
    "id": "psu-025",
    "name": "Neuralnarwhal",
    "theme": "Emerging Technologies",
    "rarity": "Legend",
    "funnyDescription": "Predicts your next typo before you make it, then is disappointed anyway.",
    "stats": {
      "Logic": 96,
      "Speed": 88,
      "Chaos": 31,
      "Debug": 79
    },
    "sellValue": 180,
    "power": 80.0,
    "imagePath": "psu-025.svg"
  },
  {
    "id": "psu-026",
    "name": "Hexacorn",
    "theme": "Hexadecimal",
    "rarity": "Legend",
    "funnyDescription": "Gallops in sixteens and leaves glittery memory addresses behind.",
    "stats": {
      "Logic": 91,
      "Speed": 83,
      "Chaos": 35,
      "Debug": 82
    },
    "sellValue": 180,
    "power": 78.3,
    "imagePath": "psu-026.svg"
  },
  {
    "id": "psu-027",
    "name": "Quantum Quokka",
    "theme": "Automated and Emerging Technologies",
    "rarity": "Legend",
    "funnyDescription": "Exists in multiple states at once, mainly cheerful and mildly overpowered.",
    "stats": {
      "Logic": 99,
      "Speed": 94,
      "Chaos": 38,
      "Debug": 88
    },
    "sellValue": 180,
    "power": 85.9,
    "imagePath": "psu-027.svg"
  },
  {
    "id": "psu-028",
    "name": "Stacktopus",
    "theme": "Programming",
    "rarity": "Legend",
    "funnyDescription": "Has eight arms and still somehow wants more recursion.",
    "stats": {
      "Logic": 94,
      "Speed": 81,
      "Chaos": 36,
      "Debug": 90
    },
    "sellValue": 180,
    "power": 81.1,
    "imagePath": "psu-028.svg"
  },
  {
    "id": "psu-029",
    "name": "Nettlenaut",
    "theme": "Networks",
    "rarity": "Legend",
    "funnyDescription": "Navigates packet storms while muttering subnet masks like sea shanties.",
    "stats": {
      "Logic": 92,
      "Speed": 89,
      "Chaos": 28,
      "Debug": 84
    },
    "sellValue": 180,
    "power": 79.6,
    "imagePath": "psu-029.svg"
  },
  {
    "id": "psu-030",
    "name": "Chronocache",
    "theme": "Memory",
    "rarity": "Legend",
    "funnyDescription": "Remembers everything except where it left its own legend badge.",
    "stats": {
      "Logic": 97,
      "Speed": 79,
      "Chaos": 33,
      "Debug": 86
    },
    "sellValue": 180,
    "power": 80.1,
    "imagePath": "psu-030.svg"
  }
];

const QUESTION_BANK = [
  {
    "id": "dr-001",
    "topic": "Data representation",
    "type": "mcq",
    "question": "How many bits are in one byte?",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "correctAnswer": "8",
    "explanation": "One byte contains 8 bits.",
    "difficulty": "easy",
    "tags": [
      "bits",
      "bytes"
    ]
  },
  {
    "id": "dr-002",
    "topic": "Data representation",
    "type": "mcq",
    "question": "What is the denary value of binary 101101?",
    "options": [
      "45",
      "44",
      "53",
      "37"
    ],
    "correctAnswer": "45",
    "explanation": "101101 = 32 + 8 + 4 + 1 = 45.",
    "difficulty": "medium",
    "tags": [
      "binary",
      "denary"
    ]
  },
  {
    "id": "dr-003",
    "topic": "Data representation",
    "type": "mcq",
    "question": "Which pair most affects image file size?",
    "options": [
      "Resolution and colour depth",
      "Font and margin",
      "Refresh rate and volume",
      "Clock speed and cache"
    ],
    "correctAnswer": "Resolution and colour depth",
    "explanation": "Image file size depends on the pixel count and the bits per pixel.",
    "difficulty": "medium",
    "tags": [
      "images"
    ]
  },
  {
    "id": "dr-004",
    "topic": "Data representation",
    "type": "mcq",
    "question": "Which hexadecimal digit comes after 9?",
    "options": [
      "A",
      "B",
      "10",
      "F"
    ],
    "correctAnswer": "A",
    "explanation": "Hexadecimal uses the symbols 0–9 then A–F.",
    "difficulty": "easy",
    "tags": [
      "hexadecimal"
    ]
  },
  {
    "id": "dr-005",
    "topic": "Data representation",
    "type": "truefalse",
    "question": "Increasing sample rate usually increases the size of a sound file.",
    "correctAnswer": true,
    "explanation": "More samples per second means more data is stored.",
    "difficulty": "easy",
    "tags": [
      "sound"
    ]
  },
  {
    "id": "dr-006",
    "topic": "Data representation",
    "type": "truefalse",
    "question": "Lossless compression removes some of the original data permanently.",
    "correctAnswer": false,
    "explanation": "Lossless compression allows the original data to be recovered exactly.",
    "difficulty": "easy",
    "tags": [
      "compression"
    ]
  },
  {
    "id": "dr-007",
    "topic": "Data representation",
    "type": "typed",
    "question": "What is the base-16 number system called?",
    "acceptableAnswers": [
      "hexadecimal",
      "hex"
    ],
    "explanation": "Hexadecimal is a base-16 number system.",
    "difficulty": "easy",
    "tags": [
      "hexadecimal"
    ]
  },
  {
    "id": "dr-008",
    "topic": "Data representation",
    "type": "typed",
    "question": "What term is used for the number of bits used to represent each sound sample?",
    "acceptableAnswers": [
      "sample resolution",
      "bit depth"
    ],
    "explanation": "Sample resolution, or bit depth, is the number of bits per sample.",
    "difficulty": "medium",
    "tags": [
      "sound",
      "bit depth"
    ]
  },
  {
    "id": "dt-001",
    "topic": "Data transmission",
    "type": "mcq",
    "question": "Which transmission medium uses pulses of light?",
    "options": [
      "Twisted pair",
      "Coaxial cable",
      "Fibre optic cable",
      "Copper bus"
    ],
    "correctAnswer": "Fibre optic cable",
    "explanation": "Fibre optic cable transmits data using light signals.",
    "difficulty": "easy",
    "tags": [
      "media"
    ]
  },
  {
    "id": "dt-002",
    "topic": "Data transmission",
    "type": "mcq",
    "question": "Which method sends data bit by bit along one channel?",
    "options": [
      "Parallel",
      "Serial",
      "Simplex",
      "Broadcast"
    ],
    "correctAnswer": "Serial",
    "explanation": "Serial transmits one bit at a time.",
    "difficulty": "easy",
    "tags": [
      "serial"
    ]
  },
  {
    "id": "dt-003",
    "topic": "Data transmission",
    "type": "mcq",
    "question": "Which form of encryption uses one public key and one private key?",
    "options": [
      "Symmetric",
      "Asymmetric",
      "Lossy",
      "Parallel"
    ],
    "correctAnswer": "Asymmetric",
    "explanation": "Asymmetric encryption uses a public/private key pair.",
    "difficulty": "easy",
    "tags": [
      "encryption"
    ]
  },
  {
    "id": "dt-004",
    "topic": "Data transmission",
    "type": "mcq",
    "question": "Which technique checks whether transmitted data has been altered?",
    "options": [
      "Error detection",
      "Compression",
      "Defragmentation",
      "Rendering"
    ],
    "correctAnswer": "Error detection",
    "explanation": "Checksums and parity are examples of error-detection methods.",
    "difficulty": "medium",
    "tags": [
      "errors"
    ]
  },
  {
    "id": "dt-005",
    "topic": "Data transmission",
    "type": "truefalse",
    "question": "Packet switching breaks data into packets that may take different routes.",
    "correctAnswer": true,
    "explanation": "Packets can travel independently then be reassembled.",
    "difficulty": "easy",
    "tags": [
      "packet switching"
    ]
  },
  {
    "id": "dt-006",
    "topic": "Data transmission",
    "type": "truefalse",
    "question": "Parallel transmission is usually preferred over long distances because it avoids skewing.",
    "correctAnswer": false,
    "explanation": "Serial is preferred over long distances because parallel can suffer from skewing.",
    "difficulty": "medium",
    "tags": [
      "parallel",
      "serial"
    ]
  },
  {
    "id": "dt-007",
    "topic": "Data transmission",
    "type": "typed",
    "question": "What is the term for unwanted disturbance that affects a signal during transmission?",
    "acceptableAnswers": [
      "noise",
      "interference"
    ],
    "explanation": "Noise or interference can corrupt signals during transmission.",
    "difficulty": "medium",
    "tags": [
      "interference"
    ]
  },
  {
    "id": "dt-008",
    "topic": "Data transmission",
    "type": "typed",
    "question": "What kind of encryption uses the same key for encrypting and decrypting?",
    "acceptableAnswers": [
      "symmetric",
      "symmetric encryption"
    ],
    "explanation": "Symmetric encryption uses a single shared key.",
    "difficulty": "medium",
    "tags": [
      "encryption"
    ]
  },
  {
    "id": "hw-001",
    "topic": "Hardware",
    "type": "mcq",
    "question": "Which part of the CPU performs arithmetic and logical operations?",
    "options": [
      "Control unit",
      "ALU",
      "Cache",
      "Bus"
    ],
    "correctAnswer": "ALU",
    "explanation": "The ALU performs arithmetic and logic operations.",
    "difficulty": "easy",
    "tags": [
      "cpu"
    ]
  },
  {
    "id": "hw-002",
    "topic": "Hardware",
    "type": "mcq",
    "question": "Which type of memory is volatile?",
    "options": [
      "ROM",
      "SSD",
      "RAM",
      "Optical disc"
    ],
    "correctAnswer": "RAM",
    "explanation": "RAM loses contents when power is turned off.",
    "difficulty": "easy",
    "tags": [
      "memory"
    ]
  },
  {
    "id": "hw-003",
    "topic": "Hardware",
    "type": "mcq",
    "question": "Which storage medium is magnetic?",
    "options": [
      "USB flash drive",
      "Blu-ray disc",
      "Hard disk drive",
      "ROM chip"
    ],
    "correctAnswer": "Hard disk drive",
    "explanation": "Hard disk drives use magnetic platters.",
    "difficulty": "easy",
    "tags": [
      "storage"
    ]
  },
  {
    "id": "hw-004",
    "topic": "Hardware",
    "type": "mcq",
    "question": "Which device is an output device?",
    "options": [
      "MICR",
      "Touchscreen",
      "Plotter",
      "Barcode reader"
    ],
    "correctAnswer": "Plotter",
    "explanation": "A plotter produces output, often large-scale drawings.",
    "difficulty": "easy",
    "tags": [
      "devices"
    ]
  },
  {
    "id": "hw-005",
    "topic": "Hardware",
    "type": "truefalse",
    "question": "ROM is generally used to store startup instructions such as firmware.",
    "correctAnswer": true,
    "explanation": "ROM stores startup instructions that should remain available when power is off.",
    "difficulty": "easy",
    "tags": [
      "rom"
    ]
  },
  {
    "id": "hw-006",
    "topic": "Hardware",
    "type": "truefalse",
    "question": "An SSD stores data using spinning magnetic platters.",
    "correctAnswer": false,
    "explanation": "Spinning magnetic platters are used by hard disk drives, not SSDs.",
    "difficulty": "easy",
    "tags": [
      "ssd"
    ]
  },
  {
    "id": "hw-007",
    "topic": "Hardware",
    "type": "typed",
    "question": "What is the shortened name often used for the fetch-decode-execute cycle?",
    "acceptableAnswers": [
      "fde cycle",
      "fetch execute cycle",
      "fetch-decode-execute cycle"
    ],
    "explanation": "The repeated CPU process is often shortened to the FDE cycle.",
    "difficulty": "medium",
    "tags": [
      "cpu"
    ]
  },
  {
    "id": "hw-008",
    "topic": "Hardware",
    "type": "typed",
    "question": "What does RAM stand for?",
    "acceptableAnswers": [
      "random access memory"
    ],
    "explanation": "RAM stands for Random Access Memory.",
    "difficulty": "easy",
    "tags": [
      "ram"
    ]
  },
  {
    "id": "sw-001",
    "topic": "Software",
    "type": "mcq",
    "question": "Which is an example of application software?",
    "options": [
      "Operating system",
      "Device driver",
      "Spreadsheet",
      "Utility program"
    ],
    "correctAnswer": "Spreadsheet",
    "explanation": "A spreadsheet is application software used by end users.",
    "difficulty": "easy",
    "tags": [
      "software"
    ]
  },
  {
    "id": "sw-002",
    "topic": "Software",
    "type": "mcq",
    "question": "Which translator converts the whole source program into machine code before execution?",
    "options": [
      "Interpreter",
      "Assembler",
      "Compiler",
      "Loader"
    ],
    "correctAnswer": "Compiler",
    "explanation": "A compiler translates the whole program before it runs.",
    "difficulty": "easy",
    "tags": [
      "compiler"
    ]
  },
  {
    "id": "sw-003",
    "topic": "Software",
    "type": "mcq",
    "question": "Which IDE feature helps a programmer run code one line at a time and inspect variables?",
    "options": [
      "Syntax colouring",
      "Debugger",
      "Auto-save",
      "Spell checker"
    ],
    "correctAnswer": "Debugger",
    "explanation": "A debugger helps step through code and inspect values.",
    "difficulty": "medium",
    "tags": [
      "ide"
    ]
  },
  {
    "id": "sw-004",
    "topic": "Software",
    "type": "mcq",
    "question": "What is the main role of an operating system?",
    "options": [
      "Draw charts",
      "Manage hardware and software resources",
      "Store all files forever",
      "Convert images to sound"
    ],
    "correctAnswer": "Manage hardware and software resources",
    "explanation": "The operating system manages memory, files, hardware and processes.",
    "difficulty": "easy",
    "tags": [
      "os"
    ]
  },
  {
    "id": "sw-005",
    "topic": "Software",
    "type": "truefalse",
    "question": "A utility program can be used to defragment a hard disk.",
    "correctAnswer": true,
    "explanation": "Defragmenters are utility software.",
    "difficulty": "easy",
    "tags": [
      "utility"
    ]
  },
  {
    "id": "sw-006",
    "topic": "Software",
    "type": "truefalse",
    "question": "An interpreter always creates a separate machine-code executable file before the program runs.",
    "correctAnswer": false,
    "explanation": "Interpreters translate and execute line by line rather than producing a separate executable first.",
    "difficulty": "medium",
    "tags": [
      "interpreter"
    ]
  },
  {
    "id": "sw-007",
    "topic": "Software",
    "type": "typed",
    "question": "What is the name of software that controls a specific hardware device such as a printer?",
    "acceptableAnswers": [
      "device driver",
      "driver"
    ],
    "explanation": "A driver lets the OS communicate with a specific device.",
    "difficulty": "easy",
    "tags": [
      "driver"
    ]
  },
  {
    "id": "sw-008",
    "topic": "Software",
    "type": "typed",
    "question": "What type of translator converts assembly language into machine code?",
    "acceptableAnswers": [
      "assembler",
      "an assembler"
    ],
    "explanation": "An assembler translates assembly language into machine code.",
    "difficulty": "easy",
    "tags": [
      "assembler"
    ]
  },
  {
    "id": "it-001",
    "topic": "The internet and its uses",
    "type": "mcq",
    "question": "Which protocol is used to retrieve web pages securely?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctAnswer": "HTTPS",
    "explanation": "HTTPS is the secure version of HTTP.",
    "difficulty": "easy",
    "tags": [
      "protocols"
    ]
  },
  {
    "id": "it-002",
    "topic": "The internet and its uses",
    "type": "mcq",
    "question": "What is the role of a DNS server?",
    "options": [
      "Store cookies",
      "Translate domain names to IP addresses",
      "Send emails",
      "Encrypt web pages"
    ],
    "correctAnswer": "Translate domain names to IP addresses",
    "explanation": "DNS maps domain names to IP addresses.",
    "difficulty": "easy",
    "tags": [
      "dns"
    ]
  },
  {
    "id": "it-003",
    "topic": "The internet and its uses",
    "type": "mcq",
    "question": "Which statement best describes blockchain in basic terms?",
    "options": [
      "A wireless cable",
      "A time-stamped digital ledger",
      "A type of browser",
      "A compression algorithm"
    ],
    "correctAnswer": "A time-stamped digital ledger",
    "explanation": "Blockchain is commonly described as a digital ledger of linked records.",
    "difficulty": "medium",
    "tags": [
      "blockchain"
    ]
  },
  {
    "id": "it-004",
    "topic": "The internet and its uses",
    "type": "mcq",
    "question": "Which cyber-security threat repeatedly tries many passwords to gain access?",
    "options": [
      "Phishing",
      "Brute-force attack",
      "Compression",
      "Defragmentation"
    ],
    "correctAnswer": "Brute-force attack",
    "explanation": "A brute-force attack repeatedly attempts different passwords.",
    "difficulty": "easy",
    "tags": [
      "security"
    ]
  },
  {
    "id": "it-005",
    "topic": "The internet and its uses",
    "type": "truefalse",
    "question": "Cookies can be used to remember user preferences on a website.",
    "correctAnswer": true,
    "explanation": "Cookies can store settings, carts, and login information.",
    "difficulty": "easy",
    "tags": [
      "cookies"
    ]
  },
  {
    "id": "it-006",
    "topic": "The internet and its uses",
    "type": "truefalse",
    "question": "The World Wide Web and the internet are exactly the same thing.",
    "correctAnswer": false,
    "explanation": "The web is a service that runs on top of the internet.",
    "difficulty": "easy",
    "tags": [
      "www"
    ]
  },
  {
    "id": "it-007",
    "topic": "The internet and its uses",
    "type": "typed",
    "question": "What does URL stand for?",
    "acceptableAnswers": [
      "uniform resource locator"
    ],
    "explanation": "URL stands for Uniform Resource Locator.",
    "difficulty": "easy",
    "tags": [
      "url"
    ]
  },
  {
    "id": "it-008",
    "topic": "The internet and its uses",
    "type": "typed",
    "question": "What type of attack tricks a user into giving away personal information by pretending to be trustworthy?",
    "acceptableAnswers": [
      "phishing",
      "a phishing attack"
    ],
    "explanation": "Phishing attempts to trick users into revealing passwords or personal details.",
    "difficulty": "easy",
    "tags": [
      "security"
    ]
  },
  {
    "id": "ae-001",
    "topic": "Automated and emerging technologies",
    "type": "mcq",
    "question": "Which device is most likely to be used as an input in an automated temperature control system?",
    "options": [
      "Motor",
      "Sensor",
      "Actuator",
      "Speaker"
    ],
    "correctAnswer": "Sensor",
    "explanation": "A sensor gathers input data such as temperature.",
    "difficulty": "easy",
    "tags": [
      "sensor"
    ]
  },
  {
    "id": "ae-002",
    "topic": "Automated and emerging technologies",
    "type": "mcq",
    "question": "Which item provides movement in a robotic system?",
    "options": [
      "Actuator",
      "Register",
      "Compiler",
      "Cookie"
    ],
    "correctAnswer": "Actuator",
    "explanation": "Actuators cause physical movement or action.",
    "difficulty": "easy",
    "tags": [
      "robotics"
    ]
  },
  {
    "id": "ae-003",
    "topic": "Automated and emerging technologies",
    "type": "mcq",
    "question": "Which term describes a system that can learn patterns from data?",
    "options": [
      "Machine learning",
      "Packet switching",
      "Defragmentation",
      "Checksum"
    ],
    "correctAnswer": "Machine learning",
    "explanation": "Machine learning systems use data to improve their predictions or decisions.",
    "difficulty": "easy",
    "tags": [
      "ai"
    ]
  },
  {
    "id": "ae-004",
    "topic": "Automated and emerging technologies",
    "type": "mcq",
    "question": "In a control system, what is the purpose of feedback?",
    "options": [
      "To colour the interface",
      "To compare output with the desired result",
      "To compress files",
      "To increase screen resolution"
    ],
    "correctAnswer": "To compare output with the desired result",
    "explanation": "Feedback is used to monitor output and adjust the system if needed.",
    "difficulty": "medium",
    "tags": [
      "control systems"
    ]
  },
  {
    "id": "ae-005",
    "topic": "Automated and emerging technologies",
    "type": "truefalse",
    "question": "Robotics often combines sensors, processors, and actuators.",
    "correctAnswer": true,
    "explanation": "Robotic systems often sense data, process it, then act.",
    "difficulty": "easy",
    "tags": [
      "robotics"
    ]
  },
  {
    "id": "ae-006",
    "topic": "Automated and emerging technologies",
    "type": "truefalse",
    "question": "Artificial intelligence always guarantees perfectly correct decisions.",
    "correctAnswer": false,
    "explanation": "AI systems can still make mistakes and depend on their data and design.",
    "difficulty": "easy",
    "tags": [
      "ai"
    ]
  },
  {
    "id": "ae-007",
    "topic": "Automated and emerging technologies",
    "type": "typed",
    "question": "What is the general name for an electronic device that detects changes in the environment, such as heat or light?",
    "acceptableAnswers": [
      "sensor",
      "a sensor"
    ],
    "explanation": "A sensor detects input from the surrounding environment.",
    "difficulty": "easy",
    "tags": [
      "sensor"
    ]
  },
  {
    "id": "ae-008",
    "topic": "Automated and emerging technologies",
    "type": "typed",
    "question": "What is the term for a system that performs tasks automatically by following rules and input data?",
    "acceptableAnswers": [
      "automated system",
      "an automated system"
    ],
    "explanation": "An automated system performs tasks using sensors, logic and outputs with limited human input.",
    "difficulty": "medium",
    "tags": [
      "automation"
    ]
  },
  {
    "id": "al-001",
    "topic": "Algorithm design and problem-solving",
    "type": "mcq",
    "question": "Which approach breaks a complex problem into smaller sub-problems?",
    "options": [
      "Compression",
      "Decomposition",
      "Encryption",
      "Defragmentation"
    ],
    "correctAnswer": "Decomposition",
    "explanation": "Decomposition breaks a problem into smaller, more manageable parts.",
    "difficulty": "easy",
    "tags": [
      "decomposition"
    ]
  },
  {
    "id": "al-002",
    "topic": "Algorithm design and problem-solving",
    "type": "mcq",
    "question": "Which set best names the three main programming control structures?",
    "options": [
      "Bits, bytes, words",
      "Sequence, selection, iteration",
      "ROM, RAM, cache",
      "Input, storage, output only"
    ],
    "correctAnswer": "Sequence, selection, iteration",
    "explanation": "These are the three main control structures used in algorithms.",
    "difficulty": "easy",
    "tags": [
      "control structures"
    ]
  },
  {
    "id": "al-003",
    "topic": "Algorithm design and problem-solving",
    "type": "mcq",
    "question": "What is the best purpose of a trace table?",
    "options": [
      "To compress images",
      "To follow variable values step by step",
      "To connect to a network",
      "To encrypt files"
    ],
    "correctAnswer": "To follow variable values step by step",
    "explanation": "Trace tables help track variable values during a dry run of an algorithm.",
    "difficulty": "easy",
    "tags": [
      "trace table"
    ]
  },
  {
    "id": "al-004",
    "topic": "Algorithm design and problem-solving",
    "type": "mcq",
    "question": "Which type of test data checks the largest or smallest values allowed?",
    "options": [
      "Normal",
      "Live",
      "Boundary",
      "Random"
    ],
    "correctAnswer": "Boundary",
    "explanation": "Boundary data tests the edges of acceptable ranges.",
    "difficulty": "medium",
    "tags": [
      "test data"
    ]
  },
  {
    "id": "al-005",
    "topic": "Algorithm design and problem-solving",
    "type": "truefalse",
    "question": "Validation checks whether data is sensible before it is processed.",
    "correctAnswer": true,
    "explanation": "Validation checks data against rules such as range, type, or format.",
    "difficulty": "easy",
    "tags": [
      "validation"
    ]
  },
  {
    "id": "al-006",
    "topic": "Algorithm design and problem-solving",
    "type": "truefalse",
    "question": "Verification checks that data entered is definitely correct in the real world.",
    "correctAnswer": false,
    "explanation": "Verification checks that data has been copied accurately, not that it is logically true.",
    "difficulty": "medium",
    "tags": [
      "verification"
    ]
  },
  {
    "id": "al-007",
    "topic": "Algorithm design and problem-solving",
    "type": "typed",
    "question": "What is the term for checking that data entered matches the original source?",
    "acceptableAnswers": [
      "verification"
    ],
    "explanation": "Verification checks that entered data matches the source data.",
    "difficulty": "easy",
    "tags": [
      "verification"
    ]
  },
  {
    "id": "al-008",
    "topic": "Algorithm design and problem-solving",
    "type": "typed",
    "question": "What name is given to manually working through an algorithm using sample data to see what happens?",
    "acceptableAnswers": [
      "dry run",
      "a dry run"
    ],
    "explanation": "A dry run means stepping through an algorithm manually, often using a trace table.",
    "difficulty": "medium",
    "tags": [
      "trace table"
    ]
  },
  {
    "id": "pr-001",
    "topic": "Programming",
    "type": "mcq",
    "question": "Which data type is most suitable for storing TRUE or FALSE?",
    "options": [
      "Integer",
      "Boolean",
      "String",
      "Character"
    ],
    "correctAnswer": "Boolean",
    "explanation": "Boolean values can only be TRUE or FALSE.",
    "difficulty": "easy",
    "tags": [
      "data types"
    ]
  },
  {
    "id": "pr-002",
    "topic": "Programming",
    "type": "mcq",
    "question": "Which pseudocode statement is most likely to repeat a set number of times?",
    "options": [
      "IF ... THEN ... ELSE",
      "FOR ... TO ... NEXT",
      "PRINT",
      "INPUT"
    ],
    "correctAnswer": "FOR ... TO ... NEXT",
    "explanation": "A FOR loop is count-controlled and repeats a set number of times.",
    "difficulty": "easy",
    "tags": [
      "loops"
    ]
  },
  {
    "id": "pr-003",
    "topic": "Programming",
    "type": "mcq",
    "question": "What does MOD return?",
    "options": [
      "The whole-number quotient",
      "The remainder of a division",
      "A rounded value",
      "A random value"
    ],
    "correctAnswer": "The remainder of a division",
    "explanation": "MOD returns the remainder after division.",
    "difficulty": "medium",
    "tags": [
      "operators"
    ]
  },
  {
    "id": "pr-004",
    "topic": "Programming",
    "type": "mcq",
    "question": "Which built-in string routine returns part of a string?",
    "options": [
      "RANDOM",
      "SUBSTRING",
      "ROUND",
      "MOD"
    ],
    "correctAnswer": "SUBSTRING",
    "explanation": "SUBSTRING returns a section of a string.",
    "difficulty": "medium",
    "tags": [
      "strings"
    ]
  },
  {
    "id": "pr-005",
    "topic": "Programming",
    "type": "truefalse",
    "question": "A variable can change value while a program runs.",
    "correctAnswer": true,
    "explanation": "Variables store values that can change during execution.",
    "difficulty": "easy",
    "tags": [
      "variables"
    ]
  },
  {
    "id": "pr-006",
    "topic": "Programming",
    "type": "truefalse",
    "question": "A local variable can be accessed anywhere in the whole program by default.",
    "correctAnswer": false,
    "explanation": "Local variables are usually only available inside the function or procedure where they are declared.",
    "difficulty": "medium",
    "tags": [
      "scope"
    ]
  },
  {
    "id": "pr-007",
    "topic": "Programming",
    "type": "typed",
    "question": "What is the name of a named block of code that performs a task and may return a value?",
    "acceptableAnswers": [
      "function",
      "a function"
    ],
    "explanation": "A function performs a task and returns a value.",
    "difficulty": "medium",
    "tags": [
      "functions"
    ]
  },
  {
    "id": "pr-008",
    "topic": "Programming",
    "type": "typed",
    "question": "What is the name of the data structure that stores multiple values under one identifier using index positions?",
    "acceptableAnswers": [
      "array",
      "an array"
    ],
    "explanation": "An array stores multiple values that can be accessed by index.",
    "difficulty": "easy",
    "tags": [
      "arrays"
    ]
  },
  {
    "id": "db-001",
    "topic": "Databases",
    "type": "mcq",
    "question": "What is the main purpose of a primary key?",
    "options": [
      "To colour records",
      "To uniquely identify each record",
      "To sort values automatically",
      "To encrypt a table"
    ],
    "correctAnswer": "To uniquely identify each record",
    "explanation": "A primary key uniquely identifies each record in a table.",
    "difficulty": "easy",
    "tags": [
      "primary key"
    ]
  },
  {
    "id": "db-002",
    "topic": "Databases",
    "type": "mcq",
    "question": "Which SQL keyword is used to choose which fields to display?",
    "options": [
      "FROM",
      "SELECT",
      "WHERE",
      "COUNT"
    ],
    "correctAnswer": "SELECT",
    "explanation": "SELECT chooses the fields to show in the query result.",
    "difficulty": "easy",
    "tags": [
      "sql"
    ]
  },
  {
    "id": "db-003",
    "topic": "Databases",
    "type": "mcq",
    "question": "Which clause is used to filter records in SQL?",
    "options": [
      "WHERE",
      "SUM",
      "FROM",
      "ASC"
    ],
    "correctAnswer": "WHERE",
    "explanation": "WHERE filters records that match a condition.",
    "difficulty": "easy",
    "tags": [
      "sql"
    ]
  },
  {
    "id": "db-004",
    "topic": "Databases",
    "type": "mcq",
    "question": "Which data type is most suitable for storing whether a student has submitted homework: yes or no?",
    "options": [
      "Real",
      "Date/Time",
      "Boolean",
      "Text"
    ],
    "correctAnswer": "Boolean",
    "explanation": "Boolean stores two possible states such as yes/no.",
    "difficulty": "easy",
    "tags": [
      "data types"
    ]
  },
  {
    "id": "db-005",
    "topic": "Databases",
    "type": "truefalse",
    "question": "A field is a single item of data stored about a record.",
    "correctAnswer": true,
    "explanation": "A field is one attribute within a record, such as Name or DateOfBirth.",
    "difficulty": "easy",
    "tags": [
      "records"
    ]
  },
  {
    "id": "db-006",
    "topic": "Databases",
    "type": "truefalse",
    "question": "COUNT is used in SQL to add all the values in a numeric field together.",
    "correctAnswer": false,
    "explanation": "SUM adds values together; COUNT returns the number of rows.",
    "difficulty": "medium",
    "tags": [
      "sql"
    ]
  },
  {
    "id": "db-007",
    "topic": "Databases",
    "type": "typed",
    "question": "What is the name of a row in a database table?",
    "acceptableAnswers": [
      "record",
      "a record"
    ],
    "explanation": "A row in a database table is called a record.",
    "difficulty": "easy",
    "tags": [
      "record"
    ]
  },
  {
    "id": "db-008",
    "topic": "Databases",
    "type": "typed",
    "question": "What SQL command arranges query results into a chosen order?",
    "acceptableAnswers": [
      "order by",
      "order by ascending",
      "order by descending",
      "order by asc",
      "order by desc"
    ],
    "explanation": "ORDER BY sorts the query results, for example ascending or descending.",
    "difficulty": "medium",
    "tags": [
      "sql"
    ]
  },
  {
    "id": "bl-001",
    "topic": "Boolean logic",
    "type": "mcq",
    "question": "Which gate gives a TRUE output only when both inputs are TRUE?",
    "options": [
      "OR",
      "AND",
      "NOT",
      "XOR"
    ],
    "correctAnswer": "AND",
    "explanation": "AND outputs TRUE only when both inputs are TRUE.",
    "difficulty": "easy",
    "tags": [
      "logic gates"
    ]
  },
  {
    "id": "bl-002",
    "topic": "Boolean logic",
    "type": "mcq",
    "question": "Which gate outputs TRUE when the inputs are different?",
    "options": [
      "NOR",
      "AND",
      "XOR",
      "NOT"
    ],
    "correctAnswer": "XOR",
    "explanation": "XOR outputs TRUE when exactly one input is TRUE.",
    "difficulty": "easy",
    "tags": [
      "logic gates"
    ]
  },
  {
    "id": "bl-003",
    "topic": "Boolean logic",
    "type": "mcq",
    "question": "Which gate is a single-input gate?",
    "options": [
      "AND",
      "OR",
      "NOT",
      "NAND"
    ],
    "correctAnswer": "NOT",
    "explanation": "NOT is the single-input logic gate in this section.",
    "difficulty": "easy",
    "tags": [
      "logic gates"
    ]
  },
  {
    "id": "bl-004",
    "topic": "Boolean logic",
    "type": "mcq",
    "question": "What is the output of an OR gate when both inputs are FALSE?",
    "options": [
      "TRUE",
      "FALSE",
      "1 and 0",
      "Undefined"
    ],
    "correctAnswer": "FALSE",
    "explanation": "OR only outputs TRUE when at least one input is TRUE.",
    "difficulty": "easy",
    "tags": [
      "or gate"
    ]
  },
  {
    "id": "bl-005",
    "topic": "Boolean logic",
    "type": "truefalse",
    "question": "A NAND gate is the opposite of an AND gate.",
    "correctAnswer": true,
    "explanation": "NAND outputs the inverse of AND.",
    "difficulty": "easy",
    "tags": [
      "nand"
    ]
  },
  {
    "id": "bl-006",
    "topic": "Boolean logic",
    "type": "truefalse",
    "question": "Logic circuits in this syllabus may use an unlimited number of inputs and outputs.",
    "correctAnswer": false,
    "explanation": "In syllabus examples the circuits are constrained rather than unlimited.",
    "difficulty": "medium",
    "tags": [
      "circuits"
    ]
  },
  {
    "id": "bl-007",
    "topic": "Boolean logic",
    "type": "typed",
    "question": "What single word describes a value that can only be TRUE or FALSE?",
    "acceptableAnswers": [
      "boolean",
      "bool"
    ],
    "explanation": "A Boolean value has only two possible states: TRUE or FALSE.",
    "difficulty": "easy",
    "tags": [
      "boolean"
    ]
  },
    {
    "id": "bl-0079",
    "topic": "Boolean logic",
    "type": "typed",
    "question": "What gate has only ONE input?",
    "acceptableAnswers": [
      "NOT",
      "Not",
      "not"
    ],
    "explanation": "A Boolean value has only two possible states: TRUE or FALSE.",
    "difficulty": "easy",
    "tags": [
      "boolean"
    ]
  },
  {
    "id": "bl-008",
    "topic": "Boolean logic",
    "type": "typed",
    "question": "What is the name of the table that shows every possible input combination and the corresponding output?",
    "acceptableAnswers": [
      "truth table",
      "a truth table"
    ],
    "explanation": "A truth table lists all input combinations and the output for each one.",
    "difficulty": "easy",
    "tags": [
      "truth table"
    ]
  }
];
