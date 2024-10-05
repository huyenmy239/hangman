const wordList = [
    {
        'word': "elephant",
        'hint': "A large mammal with a trunk."
    },
    {
        'word': "python",
        'hint': "A type of programming language, also a large snake."
    },
    {
        'word': "ocean",
        'hint': "A large body of saltwater that covers much of the Earth."
    },
    {
        'word': "sunflower",
        'hint': "A tall plant with a large yellow flower that follows the sun."
    },
    {
        'word': "giraffe",
        'hint': "The tallest land animal with a very long neck."
    },
    {
        'word': "volcano",
        'hint': "A mountain that erupts with lava."
    },
    {
        'word': "keyboard",
        'hint': "A computer input device with keys."
    },
    {
        'word': "strawberry",
        'hint': "A small red fruit with seeds on the outside."
    },
    {
        'word': "rainbow",
        'hint': "An arc of colors seen in the sky after rain."
    },
    {
        'word': "library",
        'hint': "A place where books are kept."
    },
    {
        'word': "astronaut",
        'hint': "A person trained to travel in space."
    },
    {
        'word': "bicycle",
        'hint': "A vehicle with two wheels that you pedal to move."
    },
    {
        'word': "mountain",
        'hint': "A large natural elevation of the earth's surface."
    },
    {
        'word': "penguin",
        'hint': "A flightless bird that lives in cold regions."
    },
    {
        'word': "pyramid",
        'hint': "A monumental structure with a square or triangular base and sloping sides."
    },
    {
        'word': "clock",
        'hint': "A device used to tell time."
    },
    {
        'word': "balloon",
        'hint': "An inflatable object usually filled with air or helium."
    },
    {
        'word': "kangaroo",
        'hint': "A marsupial from Australia that hops on its hind legs."
    },
    {
        'word': "computer",
        'hint': "An electronic device for storing and processing data."
    },
    {
        'word': "dragon",
        'hint': "A mythical creature that breathes fire."
    },
    {
        'word': "island",
        'hint': "A piece of land surrounded by water."
    },
    {
        'word': "jungle",
        'hint': "A dense forest, usually in tropical regions."
    },
    {
        'word': "koala",
        'hint': "A tree-dwelling marsupial native to Australia."
    },
    {
        'word': "ladder",
        'hint': "A device used for climbing up or down."
    },
    {
        'word': "moose",
        'hint': "A large animal with antlers, found in northern regions."
    },
    {
        'word': "nebula",
        'hint': "A cloud of gas and dust in space."
    },
    {
        'word': "octopus",
        'hint': "A sea creature with eight arms."
    },
    {
        'word': "piano",
        'hint': "A large musical instrument with keys."
    },
    {
        'word': "quartz",
        'hint': "A hard, crystalline mineral composed of silicon and oxygen."
    },
    {
        'word': "robot",
        'hint': "A machine capable of carrying out a series of actions automatically."
    },
    {
        'word': "satellite",
        'hint': "An artificial body placed in orbit around the earth."
    },
    {
        'word': "telescope",
        'hint': "An optical instrument for viewing distant objects."
    },
    {
        'word': "unicorn",
        'hint': "A mythical horse with a single horn on its forehead."
    },
    {
        'word': "violin",
        'hint': "A stringed musical instrument played with a bow."
    },
    {
        'word': "whale",
        'hint': "A large marine mammal."
    },
    {
        'word': "xylophone",
        'hint': "A musical instrument made of wooden bars."
    },
    {
        'word': "yacht",
        'hint': "A medium-sized sailing boat."
    },
    {
        'word': "zebra",
        'hint': "An African wild horse with black-and-white stripes."
    },
    {
        'word': "avocado",
        'hint': "A green fruit with a large seed and creamy texture."
    },
    {
        'word': "ballet",
        'hint': "A form of dance with precise and highly formalized steps."
    },
    {
        'word': "canyon",
        'hint': "A deep gorge, typically one with a river flowing through it."
    },
    {
        'word': "dinosaur",
        'hint': "A large extinct reptile from the Mesozoic era."
    },
    {
        'word': "emerald",
        'hint': "A precious green gemstone."
    },
    {
        'word': "falcon",
        'hint': "A bird of prey known for its speed."
    },
    {
        'word': "glacier",
        'hint': "A slowly moving mass of ice."
    },
    {
        'word': "hedgehog",
        'hint': "A small mammal with spines on its back."
    },
    {
        'word': "igloo",
        'hint': "A dome-shaped hut made of snow."
    },
    {
        'word': "jellyfish",
        'hint': "A sea creature with a gelatinous body and tentacles."
    },
    {
        'word': "kite",
        'hint': "A light frame covered with paper or cloth, flown in the wind."
    },
    {
        'word': "lantern",
        'hint': "A portable light source."
    },
    {
        'word': "mermaid",
        'hint': "A mythical creature with the upper body of a woman and the tail of a fish."
    },
    {
        'word': "noodle",
        'hint': "A long, thin strip of dough typically used in cooking."
    },
    {
        'word': "obelisk",
        'hint': "A tall, four-sided stone monument."
    },
    {
        'word': "parrot",
        'hint': "A colorful bird known for mimicking sounds."
    },
    {
        'word': "quokka",
        'hint': "A small marsupial native to Australia, known for its smile."
    },
    {
        'word': "rhinoceros",
        'hint': "A large mammal with one or two horns on its nose."
    },
    {
        'word': "sphinx",
        'hint': "A mythical creature with a lion's body and a human head."
    },
    {
        'word': "tornado",
        'hint': "A violently rotating column of air."
    },
    {
        'word': "umbrella",
        'hint': "A device used for protection from rain or sun."
    },
    {
        'word': "vulture",
        'hint': "A large bird of prey that feeds on carrion."
    },
    {
        'word': "walrus",
        'hint': "A large marine mammal with tusks."
    },
    {
        'word': "yogurt",
        'hint': "A dairy product made by fermenting milk."
    },
    {
        'word': "zeppelin",
        'hint': "A large airship."
    },
    {
        'word': "amber",
        'hint': "A fossilized tree resin, often used in jewelry."
    },
    {
        'word': "beehive",
        'hint': "A structure where bees live and produce honey."
    },
    {
        'word': "cactus",
        'hint': "A spiny plant that grows in deserts."
    },
    {
        'word': "dolphin",
        'hint': "A highly intelligent marine mammal."
    },
    {
        'word': "eagle",
        'hint': "A bird of prey with sharp eyesight."
    },
    {
        'word': "flamingo",
        'hint': "A wading bird with pink or reddish feathers."
    },
    {
        'word': "galaxy",
        'hint': "A system of millions or billions of stars."
    },
    {
        'word': "hedgehog",
        'hint': "A small mammal with spines on its back."
    },
    {
        'word': "iris",
        'hint': "A type of flowering plant, also part of the eye."
    },
    {
        'word': "jaguar",
        'hint': "A large wild cat native to the Americas."
    },
    {
        'word': "kiwi",
        'hint': "A small flightless bird from New Zealand, also a fruit."
    },
    {
        'word': "llama",
        'hint': "A domesticated pack animal from South America."
    },
    {
        'word': "mango",
        'hint': "A sweet tropical fruit with a pit."
    },
    {
        'word': "nectar",
        'hint': "A sweet liquid produced by flowers."
    },
    {
        'word': "ostrich",
        'hint': "The largest bird, which cannot fly."
    },
    {
        'word': "peacock",
        'hint': "A bird known for its colorful, fan-like tail."
    },
    {
        'word': "quiver",
        'hint': "A container for holding arrows."
    },
    {
        'word': "raccoon",
        'hint': "A nocturnal mammal known for its black 'mask'."
    },
    {
        'word': "sapphire",
        'hint': "A precious blue gemstone."
    },
    {
        'word': "tiger",
        'hint': "A large feline with black stripes."
    },
    {
        'word': "urchin",
        'hint': "A small, spiny sea creature."
    },
    {
        'word': "violet",
        'hint': "A small plant with purple or blue flowers."
    },
    {
        'word': "wolf",
        'hint': "A wild canine animal known for howling."
    },
    {
        'word': "xenon",
        'hint': "A chemical element used in lighting."
    },
    {
        'word': "yak",
        'hint': "A long-haired bovine found in Asia."
    },
    {
        'word': "zephyr",
        'hint': "A soft, gentle breeze."
    }
]