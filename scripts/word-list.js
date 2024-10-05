const wordList = [
    {
        'word': "bohemian rhapsody",
        'hint': "An iconic rock opera by Queen."
    },
    {
        'word': "shape of you",
        'hint': "A popular dance-pop track by Ed Sheeran."
    },
    {
        'word': "hotel california",
        'hint': "A classic rock song by Eagles."
    },
    {
        'word': "rolling in the deep",
        'hint': "A powerful ballad by Adele."
    },
    {
        'word': "thriller",
        'hint': "A hit pop song by Michael Jackson, known for its spooky music video."
    },
    {
        'word': "blinding lights",
        'hint': "A synth-pop song by The Weeknd."
    },
    {
        'word': "stairway to heaven",
        'hint': "A legendary rock ballad by Led Zeppelin."
    },
    {
        'word': "smells like teen spirit",
        'hint': "An iconic grunge anthem by Nirvana."
    },
    {
        'word': "shake it off",
        'hint': "A catchy pop song by Taylor Swift."
    },
    {
        'word': "someone like you",
        'hint': "A heartfelt piano ballad by Adele."
    },
    {
        'word': "yesterday",
        'hint': "A soft, melancholic tune by The Beatles."
    },
    {
        'word': "hello",
        'hint': "A soulful comeback single by Adele."
    },
    {
        'word': "bad guy",
        'hint': "A quirky pop hit by Billie Eilish."
    },
    {
        'word': "umbrella",
        'hint': "A pop hit by Rihanna featuring Jay-Z."
    },
    {
        'word': "uptown funk",
        'hint': "A funky dance track by Mark Ronson featuring Bruno Mars."
    },
    {
        'word': "like a rolling stone",
        'hint': "A rock classic by Bob Dylan."
    },
    {
        'word': "hey jude",
        'hint': "A sing-along classic by The Beatles."
    },
    {
        'word': "all of me",
        'hint': "A romantic ballad by John Legend."
    },
    {
        'word': "blowin' in the wind",
        'hint': "A folk anthem by Bob Dylan."
    },
    {
        'word': "bad romance",
        'hint': "A pop anthem by Lady Gaga."
    },
    {
        'word': "bohemian like you",
        'hint': "A garage rock song by The Dandy Warhols."
    },
    {
        'word': "rolling stones",
        'hint': "A reference to a legendary rock band."
    },
    {
        'word': "american pie",
        'hint': "A folk rock ballad by Don McLean."
    },
    {
        'word': "toxic",
        'hint': "A dance-pop track by Britney Spears."
    },
    {
        'word': "wonderwall",
        'hint': "An iconic Britpop song by Oasis."
    },
    {
        'word': "dancing queen",
        'hint': "A disco classic by ABBA."
    },
    {
        'word': "billie jean",
        'hint': "A groundbreaking hit by Michael Jackson."
    },
    {
        'word': "sweet child o' mine",
        'hint': "A rock classic by Guns N' Roses."
    },
    {
        'word': "call me maybe",
        'hint': "A viral pop song by Carly Rae Jepsen."
    },
    {
        'word': "let it be",
        'hint': "A famous song by The Beatles."
    },
    {
        'word': "imagine",
        'hint': "A peace anthem by John Lennon."
    },
    {
        'word': "god's plan",
        'hint': "A chart-topping rap track by Drake."
    },
    {
        'word': "i will always love you",
        'hint': "A powerful ballad by Whitney Houston."
    },
    {
        'word': "boombayah",
        'hint': "A K-pop debut single by Blackpink."
    },
    {
        'word': "my heart will go on",
        'hint': "A theme song from Titanic by Celine Dion."
    },
    {
        'word': "gangnam style",
        'hint': "A viral dance hit by PSY."
    },
    {
        'word': "i want it that way",
        'hint': "A signature pop song by Backstreet Boys."
    },
    {
        'word': "radioactive",
        'hint': "An alternative rock hit by Imagine Dragons."
    },
    {
        'word': "skyfall",
        'hint': "A James Bond theme by Adele."
    },
    {
        'word': "take on me",
        'hint': "A synth-pop song by A-ha."
    },
    {
        'word': "despacito",
        'hint': "A reggaeton hit by Luis Fonsi and Daddy Yankee."
    },
    {
        'word': "happy",
        'hint': "A feel-good song by Pharrell Williams."
    },
    {
        'word': "roar",
        'hint': "A pop empowerment anthem by Katy Perry."
    },
    {
        'word': "bad blood",
        'hint': "A pop hit by Taylor Swift featuring Kendrick Lamar."
    },
    {
        'word': "shallow",
        'hint': "A duet by Lady Gaga and Bradley Cooper from A Star Is Born."
    },
    {
        'word': "all the stars",
        'hint': "A track by Kendrick Lamar and SZA for Black Panther."
    },
    {
        'word': "purple rain",
        'hint': "A song by Prince, also the name of his 1984 album and movie."
    },
    {
        'word': "faded",
        'hint': "A hit electronic song by Alan Walker."
    },
    {
        'word': "one dance",
        'hint': "A summer hit by Drake."
    },
    {
        'word': "senorita",
        'hint': "A romantic duet by Shawn Mendes and Camila Cabello."
    },
    {
        'word': "lean on",
        'hint': "A dance track by Major Lazer and DJ Snake featuring MØ."
    },
    {
        'word': "stitches",
        'hint': "A hit by Shawn Mendes."
    },
    {
        'word': "rockstar",
        'hint': "A rap track by Post Malone featuring 21 Savage."
    },
    {
        'word': "believer",
        'hint': "A motivational anthem by Imagine Dragons."
    },
    {
        'word': "god is a woman",
        'hint': "A pop track by Ariana Grande."
    },
    {
        'word': "havana",
        'hint': "A catchy hit by Camila Cabello featuring Young Thug."
    },
    {
        'word': "wrecking ball",
        'hint': "A dramatic ballad by Miley Cyrus."
    },
    {
        'word': "lucid dreams",
        'hint': "A hit by Juice WRLD."
    },
    {
        'word': "thank u, next",
        'hint': "A breakup anthem by Ariana Grande."
    },
    {
        'word': "sunflower",
        'hint': "A song by Post Malone and Swae Lee from Spider-Man: Into the Spider-Verse."
    },
    {
        'word': "old town road",
        'hint': "A viral country rap by Lil Nas X featuring Billy Ray Cyrus."
    },
    {
        'word': "closer",
        'hint': "A catchy song by The Chainsmokers featuring Halsey."
    },
    {
        'word': "hotline bling",
        'hint': "A viral track by Drake."
    },
    {
        'word': "sicko mode",
        'hint': "A hip-hop hit by Travis Scott."
    },
    {
        'word': "in the end",
        'hint': "A rock song by Linkin Park."
    },
    {
        'word': "applause",
        'hint': "A hit single by Lady Gaga."
    },
    {
        'word': "paradise",
        'hint': "A dreamy track by Coldplay."
    },
    {
        'word': "yellow",
        'hint': "A classic song by Coldplay."
    },
    {
        'word': "fight song",
        'hint': "A motivational anthem by Rachel Platten."
    },
    {
        'word': "chandelier",
        'hint': "A powerful vocal track by Sia."
    },
    {
        'word': "team",
        'hint': "A track by Lorde."
    },
    {
        'word': "cheap thrills",
        'hint': "A dance track by Sia featuring Sean Paul."
    },
    {
        'word': "diamonds",
        'hint': "A song by Rihanna."
    },
    {
        'word': "wildest dreams",
        'hint': "A soft pop song by Taylor Swift."
    },
    {
        'word': "stressed out",
        'hint': "A track by Twenty One Pilots."
    },
    {
        'word': "shape of my heart",
        'hint': "A track by Sting."
    },
    {
        'word': "blank space",
        'hint': "A hit by Taylor Swift."
    },
    {
        'word': "when i was your man",
        'hint': "A piano ballad by Bruno Mars."
    },
    {
        'word': "blessings",
        'hint': "A song by Big Sean featuring Drake."
    }
]