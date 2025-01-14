const beasts = [
  {
    "name": "Allosaurus",
    "img": "https://upload.wikimedia.org/wikipedia/commons/5/55/Allosaurus_BW_mirrored.jpg",
    "size": "Large",
    "hp": 60,
    "roll": "6d10 + 18",
    "ac": 15,
    "speed": 60,
    "str": 19,
    "dex": 13,
    "con": 17,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "skills": "Perception +5",
    "passive": 15,
    "cr": "2 ",
    "traits": [
      {
        "name": "Pounce",
        "text": "If the allosaurus moves at least 30 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage.",
        "attack": "Bite|6|2d10+4"
      },
      {
        "name": "Claw",
        "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage.",
        "attack": "Claw|6|1d8+4"
      }
    ],
    "environments": ["Grassland"]
  },
  {
    "name": "Ankylosaurus",
    "img": "https://2e.aonprd.com/Images/Monsters/Dinosaur_Ankylosaurus.png?AspxAutoDetectCookieSupport=1",
    "size": "Huge",
    "hp": 68,
    "roll": "8d12 + 16",
    "ac": 15,
    "speed": 30,
    "str": 19,
    "dex": 11,
    "con": 15,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "passive": 11,
    "cr": "3 ",
    "actions": [
      {
        "name": "Tail",
        "text": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 18 (4d6 + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
      }
    ],
    "environments": ["Grassland"]
  },
  {
    "name": "Ape",
    "img": "https://angrygolem-games.com/wp-content/uploads/2021/12/Carnivorous-Ape.jpg",
    "size": "Medium",
    "hp": 19,
    "roll": "3d8 + 6",
    "ac": 12,
    "speed": 30,
    "climb": 30,
    "str": 16,
    "dex": 14,
    "con": 14,
    "int": 6,
    "wis": 12,
    "cha": 7,
    "skills": "Athletics +5, Perception +3",
    "passive": 13,
    "cr": "1/2",
    "actions": [
      {
        "name": "Multiattack",
        "text": "The ape makes two fist attacks."
      },
      {
        "name": "Fist",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
        "attack": "Fist|5|1d6+3"
      },
      {
        "name": "Rock",
        "text": "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
        "attack": "Rock|5|1d6+3"
      }
    ],
    "environments": ["Forest"]
  },
  {
    "name": "Axe Beak",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/5/5b/Axe_beak-5e.jpg",
    "size": "Large",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 11,
    "speed": 50,
    "str": 14,
    "dex": 12,
    "con": 12,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "passive": 10,
    "cr": "1/4",
    "actions": [
      {
        "name": "Beak",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage.",
        "attack": "Beak|4|1d8+2"
      }
    ],
    "environments": ["Grassland", "Hill"]
  },
  {
    "name": "Baboon",
    "img": "https://img.freepik.com/fotos-premium/baboon-corpo-inteiro-contorno-preto-cores-naturais-desenho-comico-em-fundo-branco-gerado-por-ia_29654-4206.jpg",
    "size": "Small",
    "hp": 3,
    "roll": "1d6",
    "ac": 12,
    "speed": 30,
    "climb": 30,
    "str": 8,
    "dex": 14,
    "con": 11,
    "int": 4,
    "wis": 12,
    "cha": 6,
    "passive": 11,
    "cr": "0 ",
    "traits": [
      {
        "name": "Pack Tactics",
        "text": "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) piercing damage.",
        "attack": "Bite|1|1d4-1"
      }
    ],
    "environments": ["Forest", "Hill"]
  },
  {
    "name": "Badger",
    "img": "https://angrygolem-games.com/wp-content/uploads/2021/11/Badger.jpg",
    "size": "Tiny",
    "hp": 3,
    "roll": "1d4 + 1",
    "ac": 10,
    "speed": 20,
    "burrow": 5,
    "str": 4,
    "dex": 11,
    "con": 12,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "senses": "Darkvision 30 ft.",
    "passive": 11,
    "cr": "0 ",
    "traits": [
      {
        "name": "Keen Smell",
        "text": "The badger has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        "attack": "Bite|2|1"
      }
    ],
    "environments": ["Forest"]
  },
  {
    "name": "Bat",
    "img": "https://img.freepik.com/premium-photo/there-is-bat-that-is-flying-sky-with-its-wings-spread-generative-ai_958078-41948.jpg",
    "size": "Tiny",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 12,
    "speed": 5,
    "fly": 30,
    "str": 2,
    "dex": 15,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 4,
    "senses": "Blindsight 60 ft.",
    "passive": 11,
    "cr": "0 ",
    "traits": [
      {
        "name": "Echolocation",
        "text": "The bat can't use its blindsight while deafened."
      },
      {
        "name": "Keen Hearing",
        "text": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
        "attack": "Bite||1"
      }
    ],
    "environments": []
  },
  {
    "name": "Black Bear",
    "img": "https://static.wikia.nocookie.net/farcry/images/b/bd/FC4_Animal_%284%29.png",
    "size": "Medium",
    "hp": 19,
    "roll": "3d8 + 6",
    "ac": 11,
    "speed": 40,
    "climb": 30,
    "str": 15,
    "dex": 10,
    "con": 14,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "passive": 13,
    "cr": "1/2",
    "traits": [
      {
        "name": "Keen Smell",
        "text": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "text": "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        "attack": "Bite|3|1d6+2"
      },
      {
        "name": "Claws",
        "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage.",
        "attack": "Claws|3|2d4+2"
      }
    ],
    "environments": ["Forest"]
  },
  {
    "name": "Blood Hawk",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/d/df/Hawk_5e.jpg",
    "size": "Small",
    "hp": 7,
    "roll": "2d6",
    "ac": 12,
    "speed": 10,
    "fly": 60,
    "str": 6,
    "dex": 14,
    "con": 10,
    "int": 3,
    "wis": 14,
    "cha": 5,
    "skills": "Perception +4",
    "passive": 14,
    "cr": "1/8",
    "traits": [
      {
        "name": "Keen Sight",
        "text": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
      },
      {
        "name": "Pack Tactics",
        "text": "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    "actions": [
      {
        "name": "Beak",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        "attack": "Beak|4|1d4+2"
      }
    ],
    "environments": ["Arctic", "Coastal", "Forest", "Grassland", "Hill", "Mountain"]
  },
  {
    "name": "Boar",
    "img": "https://trpgtdnd.weebly.com/uploads/6/5/4/6/6546502/boar_orig.jpg",
    "size": "Medium",
    "hp": 11,
    "roll": "2d8 + 2",
    "ac": 11,
    "speed": 40,
    "str": 13,
    "dex": 11,
    "con": 12,
    "int": 2,
    "wis": 9,
    "cha": 5,
    "passive": 9,
    "cr": "1/4",
    "traits": [
      {
        "name": "Charge",
        "text": "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
        "attack": "Charge||1d6"
      },
      {
        "name": "Relentless (Recharges after a Short or Long Rest)",
        "text": "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
      }
    ],
    "actions": [
      {
        "name": "Tusk",
        "text": "Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
        "attack": "Tusk|3|1d6+1"
      }
    ],
    "environments": ["Forest", "Grassland", "Hill"]
  },
  {
    "name": "Brown Bear",
    "img": "https://www.pngitem.com/pimgs/m/206-2060206_image-result-for-d-dungeons-and-dragons-brown.png",
    "size": "Large",
    "hp": 34,
    "roll": "4d10 + 12",
    "ac": 11,
    "speed": 40,
    "climb": 30,
    "str": 19,
    "dex": 10,
    "con": 16,
    "int": 2,
    "wis": 13,
    "cha": 7,
    "skills": "Perception +3",
    "passive": 13,
    "cr": "1 ",
    "traits": [
      {
        "name": "Keen Smell",
        "text": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "text": "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        "name": "Bite",
        "text": "Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
        "attack": "Bite|5|1d8+4"
      },
      {
        "name": "Claws",
        "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        "attack": "Claws|5|2d6+4"
      }
    ],
    "environments": ["Arctic", "Forest", "Hill"]
  },
  {
    "name": "Camel",
    "img": "https://www.kryxrpg.com/static/674863252c7330157ffbfaeafa8f499f/57dfe/camel.png",
    "size": "Large",
    "hp": 15,
    "roll": "2d10 + 4",
    "ac": 9,
    "speed": 50,
    "str": 16,
    "dex": 8,
    "con": 14,
    "int": 2,
    "wis": 8,
    "cha": 5,
    "passive": 9,
    "cr": "1/8",
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
        "attack": "Bite|5|1d4"
      }
    ],
    "environments": ["Desert"]
  },
  {
    "name": "Cat",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/3/32/Cat1.png",
    "size": "Tiny",
    "hp": 2,
    "roll": "1d4",
    "ac": 12,
    "speed": 40,
    "climb": 30,
    "str": 3,
    "dex": 15,
    "con": 10,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "skills": "Perception +3, Stealth +4",
    "passive": 13,
    "cr": "0 ",
    "traits": [
      {
        "name": "Keen Smell",
        "text": "The cat has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "actions": [
      {
        "name": "Claws",
        "text": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
        "attack": "Claws||1"
      }
    ],
    "environments": ["Desert", "Forest", "Grassland", "Urban"]
  },
  {
    "name": "Cave Bear",
    "img": "https://www.kryxrpg.com/static/e2ccbf80ba572578e3026fb07aa57738/53b4f/cave-bear.png",
    "size": "Large",
    "hp": 42,
    "roll": "5d10 + 15",
    "ac": 12,
    "speed": 40,
    "swim": 30,
    "str": 20,
    "dex": 10,
    "con": 16,
    "int": 2,
    "wis": 13,
    "cha": 7,
    "skills": "Perception +3",
    "senses": "Darkvision 60 ft.",
    "passive": 13,
    "cr": "2 ",
    "traits": [
      {
        "name": "Keen Smell",
        "text": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "text": "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.",
        "attack": "Bite|7|1d8+5"
      },
      {
        "name": "Claws",
        "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
        "attack": "Claws|7|2d6+5"
      }
    ],
    "environments": []
  },
  {
    "name": "Constrictor Snake",
    "img": "https://www.worldanvil.com/uploads/images/6bf1e9db4220de11382bd63c57d285df.jpg",
    "size": "Large",
    "hp": 13,
    "roll": "2d10 + 2",
    "ac": 12,
    "speed": 30,
    "swim": 30,
    "str": 15,
    "dex": 14,
    "con": 12,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "senses": "Blindsight 10 ft.",
    "passive": 10,
    "cr": "1/4",
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.",
        "attack": "Bite|4|1d6+2"
      },
      {
        "name": "Constrict",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
        "attack": "Constrict|4|1d8+2"
      }
    ],
    "environments": ["Desert", "Forest", "Swamp", "Underwater"]
  },
  {
    "name": "Crab",
    "img": "https://t4.ftcdn.net/jpg/06/65/80/19/360_F_665801944_tAQpVoEoTWHcDVunL2hiLxHMdlxuxy9O.jpg",
    "size": "Tiny",
    "hp": 2,
    "roll": "1d4",
    "ac": 11,
    "speed": 20,
    "swim": 20,
    "str": 2,
    "dex": 11,
    "con": 10,
    "int": 1,
    "wis": 8,
    "cha": 2,
    "skills": "Stealth +2",
    "senses": "Blindsight 30 ft.",
    "passive": 9,
    "cr": "0 ",
    "traits": [
      {
        "name": "Amphibious",
        "text": "The crab can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "text": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage.",
        "attack": "Claw||1"
      }
    ],
    "environments": ["Coastal"]
  },
  {
    "name": "Crocodile",
    "img": "https://i.pinimg.com/originals/6d/12/f1/6d12f18106c82e346e1dc26bc0f380d4.png",
    "size": "Large",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 12,
    "speed": 20,
    "swim": 20,
    "str": 15,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "skills": "Stealth +2",
    "passive": 10,
    "cr": "1/2",
    "traits": [
      {
        "name": "Hold Breath",
        "text": "The crocodile can hold its breath for 15 minutes."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target",
        "attack": "Bite|4|1d10+2"
      }
    ],
    "environments": ["Swamp", "Urban"]
  },
  {
    "name": "Deer",
    "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f055b11-30d4-4a48-85a1-774dc8d792cd/dfzftvi-b5a178b5-13fa-4b81-9614-b572da8e6168.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmMDU1YjExLTMwZDQtNGE0OC04NWExLTc3NGRjOGQ3OTJjZFwvZGZ6ZnR2aS1iNWExNzhiNS0xM2ZhLTRiODEtOTYxNC1iNTcyZGE4ZTYxNjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3SsuWMHoaX1KfaQZ0-6cbtmT7-LtK3jM45Kfdeujfls",
    "size": "Medium",
    "hp": 4,
    "roll": "1d8",
    "ac": 13,
    "speed": 50,
    "str": 11,
    "dex": 16,
    "con": 11,
    "int": 2,
    "wis": 14,
    "cha": 5,
    "passive": 12,
    "cr": "0 ",
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.",
        "attack": "Bite|2|1d4"
      }
    ],
    "environments": ["Forest", "Grassland"]
  },
  {
    "name": "Dire Wolf",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/16/484/1000/1000/636376300478361995.jpeg",
    "size": "Large",
    "hp": 37,
    "roll": "5d10 + 10",
    "ac": 14,
    "speed": 50,
    "str": 17,
    "dex": 15,
    "con": 15,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "skills": "Perception +3, Stealth +4",
    "passive": 13,
    "cr": "1 ",
    "traits": [
      {
        "name": "Keen Hearing and Smell",
        "text": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        "name": "Pack Tactics",
        "text": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
        "attack": "Bite|5|2d6+3"
      }
    ],
    "environments": ["Forest", "Hill"]
  },
  {
    "name": "Draft Horse",
    "img": "https://www.worldanvil.com/uploads/images/5e14d66a8f058cd5de447fa88d1107c1.jpeg",
    "size": "Large",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 10,
    "speed": 40,
    "str": 18,
    "dex": 10,
    "con": 12,
    "int": 2,
    "wis": 11,
    "cha": 7,
    "passive": 10,
    "cr": "1/4",
    "actions": [
      {
        "name": "Hooves",
        "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) bludgeoning damage.",
        "attack": "Hooves|6|2d4+4"
      }
    ],
    "environments": ["Urban"]
  },
  {
    "name": "Eagle",
    "img": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/515/1000/1000/636376317171111968.jpeg",
    "size": "Small",
    "hp": 3,
    "roll": "1d6",
    "ac": 12,
    "speed": 10,
    "fly": 60,
    "str": 6,
    "dex": 15,
    "con": 10,
    "int": 2,
    "wis": 14,
    "cha": 7,
    "skills": "Perception +4",
    "passive": 14,
    "cr": "0 ",
    "traits": [
      {
        "name": "Keen Sight",
        "text": "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "actions": [
      {
        "name": "Talons",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
        "attack": "Talons|4|1d4+2"
      }
    ],
    "environments": ["Coastal", "Grassland", "Hill", "Mountain"]
  },
  {
    "name": "Elephant",
    "img": "https://dungeonedraghi.it/wp-content/uploads/2020/03/elefante.jpg",
    "size": "Huge",
    "hp": 76,
    "roll": "8d12 + 24",
    "ac": 12,
    "speed": 40,
    "str": 22,
    "dex": 9,
    "con": 17,
    "int": 3,
    "wis": 11,
    "cha": 6,
    "passive": 10,
    "cr": "4 ",
    "traits": [
      {
        "name": "Trampling Charge",
        "text": "If the elephant moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action."
      }
    ],
    "actions": [
      {
        "name": "Gore",
        "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (3d8 + 5) piercing damage.",
        "attack": "Gore|8|3d8+5"
      },
      {
        "name": "Stomp",
        "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. Hit: 21 (3d10 + 5) bludgeoning damage.",
        "attack": "Stomp|8|3d10+5"
      }
    ],
    "environments": ["Grassland"]
  },
  {
    "name": "Elk",
    "img": "https://www.worldanvil.com/uploads/images/d5f3ce423ba85ce8744e877772afed48.jpg",
    "size": "Large",
    "hp": 13,
    "roll": "2d10 + 2",
    "ac": 10,
    "speed": 50,
    "str": 16,
    "dex": 10,
    "con": 12,
    "int": 2,
    "wis": 10,
    "cha": 6,
    "passive": 10,
    "cr": "1/4",
    "traits": [
      {
        "name": "Charge",
        "text": "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
        "attack": "Charge||2d6"
      }
    ],
    "actions": [
      {
        "name": "Ram",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."
      },
      {
        "name": "Hooves",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one prone creature. Hit: 8 (2d4 + 3) bludgeoning damage."
      }
    ],
    "environments": ["Forest", "Grassland", "Hill"]
  },
  {
    "name": "Flying Snake",
    "img": "https://i.pinimg.com/564x/6f/6f/42/6f6f428370fe6815fb0418bebd393459.jpg",
    "size": "Tiny",
    "hp": 5,
    "roll": "2d4",
    "ac": 14,
    "speed": 30,
    "swim": 30,
    "fly": 60,
    "str": 4,
    "dex": 18,
    "con": 11,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "senses": "Blindsight 10 ft.",
    "passive": 11,
    "cr": "1/8",
    "traits": [
      {
        "name": "Flyby",
        "text": "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 piercing damage plus 7 (3d4) poison damage.",
        "attack": "Bite|6|1"
      }
    ],
    "environments": ["Desert", "Forest", "Grassland", "Urban"]
  },
  {
    "name": "Frog",
    "img": "https://thumbs.dreamstime.com/b/drawn-colored-cute-toad-frog-white-background-bufo-isolated-funny-adorable-soft-watercolor-art-illustration-278109874.jpg",
    "size": "Tiny",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 11,
    "speed": 20,
    "swim": 20,
    "str": 1,
    "dex": 13,
    "con": 8,
    "int": 1,
    "wis": 8,
    "cha": 3,
    "skills": "Perception +1, Stealth +3",
    "senses": "Darkvision 30 ft.",
    "passive": 11,
    "cr": "0 ",
    "traits": [
      {
        "name": "Amphibious",
        "text": "The frog can breathe air and water"
      },
      {
        "name": "Standing Leap",
        "text": "The frog's long jump is up to 10 ft. and its high jump is up to 5 ft., with or without a running start."
      }
    ],
    "environments": []
  },
  {
    "name": "Giant Badger",
    "img": "https://www.worldanvil.com/uploads/images/dbc40679bc67d9022fbba2395774774e.jpg",
    "size": "Medium",
    "hp": 13,
    "roll": "2d8 + 4",
    "ac": 10,
    "speed": 30,
    "burrow": 10,
    "str": 13,
    "dex": 10,
    "con": 15,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "senses": "Darkvision 30 ft.",
    "passive": 11,
    "cr": "1/4",
    "traits": [
      {
        "name": "Keen Smell",
        "text": "The badger has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "text": "The badger makes two attacks: one with its bite and one with its claws."
      },
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.",
        "attack": "Bite|3|1d6+1"
      },
      {
        "name": "Claws",
        "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage.",
        "attack": "Claws|3|2d4+1"
      }
    ],
    "environments": ["Forest"]
  },
  {
    "name": "Giant Bat",
    "img": "https://i.pinimg.com/1200x/50/3c/74/503c744179d2880f15a26b0fe7a42dc6.jpg",
    "size": "Large",
    "hp": 22,
    "roll": "4d10",
    "ac": 13,
    "speed": 10,
    "fly": 60,
    "str": 15,
    "dex": 16,
    "con": 11,
    "int": 2,
    "wis": 12,
    "cha": 6,
    "senses": "Blindsight 60 ft.",
    "passive": 11,
    "cr": "1/4",
    "traits": [
      {
        "name": "Echolocation",
        "text": "The bat can't use its blindsight while deafened."
      },
      {
        "name": "Keen Hearing",
        "text": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.",
        "attack": "Bite|4|1d6+2"
      }
    ],
    "environments": ["Forest", "Underdark"]
  },
  {
    "name": "Giant Boar",
    "img": "https://i.pinimg.com/474x/34/72/33/3472332b715693d4471c7efdc89106a9.jpg",
    "size": "Large",
    "hp": 42,
    "roll": "5d10 + 5",
    "ac": 12,
    "speed": 40,
    "str": 17,
    "dex": 10,
    "con": 16,
    "int": 2,
    "wis": 7,
    "cha": 5,
    "passive": 8,
    "cr": "2 ",
    "traits": [
      {
        "name": "Charge",
        "text": "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
        "attack": "Charge||2d6"
      },
      {
        "name": "Relentless (Recharges after a Short or Long Rest)",
        "text": "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
      }
    ],
    "actions": [
      {
        "name": "Tusk",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
        "attack": "Tusk|5|2d6+3"
      }
    ],
    "environments": ["Forest", "Grassland", "Hill"]
  },
  {
    "name": "Giant Centipede",
    "img": "https://ironbombs.wordpress.com/wp-content/uploads/2014/03/giant-centipede-smaller.jpg",
    "size": "Small",
    "hp": 4,
    "roll": "1d6 + 1",
    "ac": 13,
    "speed": 30,
    "climb": 30,
    "str": 5,
    "dex": 14,
    "con": 12,
    "int": 1,
    "wis": 7,
    "cha": 3,
    "senses": "Blindsight 30 ft.",
    "passive": 8,
    "cr": "1/4",
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        "attack": "Bite|4|1d4+2"
      }
    ],
    "environments": ["Underdark", "Urban"]
  },
  {
    "name": "Giant Constrictor Snake",
    "img": "https://www.epicpath.org/images/thumb/c/c2/Giant_Constrictor_Snake_1.jpg/600px-Giant_Constrictor_Snake_1.jpg",
    "size": "Huge",
    "hp": 60,
    "roll": "8d12 + 8",
    "ac": 12,
    "speed": 30,
    "swim": 30,
    "str": 19,
    "dex": 14,
    "con": 12,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "skills": "Perception +2",
    "senses": "Blindsight 10 ft.",
    "passive": 12,
    "cr": "2 ",
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage.",
        "attack": "Bite|6|2d6+4"
      },
      {
        "name": "Constrict",
        "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
        "attack": "Constrict|6|2d8+4"
      }
    ],
    "environments": ["Desert", "Forest", "Swamp", "Underdark", "Underwater"]
  },
  {
    "name": "Giant Crab",
    "img": "https://2e.aonprd.com/Images/Monsters/Crab_GiantCrab.png",
    "size": "Medium",
    "hp": 13,
    "roll": "3d8",
    "ac": 15,
    "speed": 30,
    "swim": 30,
    "str": 13,
    "dex": 15,
    "con": 11,
    "int": 1,
    "wis": 9,
    "cha": 3,
    "skills": "Stealth +4",
    "senses": "Blindsight 30 ft.",
    "passive": 9,
    "cr": "1/8",
    "traits": [
      {
        "name": "Amphibious",
        "text": "The crab can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target.",
        "attack": "Claw|3|1d6+1"
      }
    ],
    "environments": ["Coastal"]
  },
  {
    "name": "Giant Crocodile",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/2/27/Crocodile.jpeg",
    "size": "Huge",
    "hp": 85,
    "roll": "9d12 + 27",
    "ac": 14,
    "speed": 30,
    "swim": 50,
    "str": 21,
    "dex": 9,
    "con": 17,
    "int": 2,
    "wis": 10,
    "cha": 7,
    "skills": "Stealth +5",
    "passive": 10,
    "cr": "5 ",
    "traits": [
      {
        "name": "Hold Breath",
        "text": "The crocodile can hold its breath for 30 minutes."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "text": "The crocodile makes two attacks: one with its bite and one with its tail."
      },
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target.",
        "attack": "Bite|8|3d10+5"
      },
      {
        "name": "Tail",
        "text": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone.",
        "attack": "Tail|8|2d8+5"
      }
    ],
    "environments": ["Swamp"]
  },
  {
    "name": "Giant Eagle",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVqo4qH0YVzKbvfR2GqBakiJPSGjv3nrZjl879klOjpw&s",
    "size": "Large",
    "hp": 26,
    "roll": "4d10 + 4",
    "ac": 13,
    "speed": 10,
    "fly": 80,
    "str": 16,
    "dex": 17,
    "con": 13,
    "int": 8,
    "wis": 14,
    "cha": 10,
    "skills": "Perception +4",
    "passive": 14,
    "cr": "1 ",
    "traits": [
      {
        "name": "Keen Sight",
        "text": "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "text": "The eagle makes two attacks: one with its beak and one with its talons."
      },
      {
        "name": "Beak",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
        "attack": "Beak|5|1d6+3"
      },
      {
        "name": "Talons",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
        "attack": "Talons|5|2d6+3"
      }
    ],
    "environments": ["Coastal", "Grassland", "Hill", "Mountain"]
  },
  {
    "name": "Giant Elk",
    "img": "https://static.wikia.nocookie.net/novum-terram/images/e/e1/Eucladoceros_%28SciiFii%29.png",
    "size": "Huge",
    "hp": 42,
    "roll": "5d12 + 10",
    "ac": 15,
    "speed": 60,
    "str": 19,
    "dex": 16,
    "con": 14,
    "int": 7,
    "wis": 14,
    "cha": 10,
    "skills": "Perception +4",
    "passive": 14,
    "cr": "2 ",
    "traits": [
      {
        "name": "Charge",
        "text": "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
        "attack": "Charge||2d6"
      }
    ],
    "actions": [
      {
        "name": "Ram",
        "text": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        "attack": "Ram|6|2d6+4"
      },
      {
        "name": "Hooves",
        "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8 + 4) bludgeoning damage.",
        "attack": "Hooves|6|4d8+4"
      }
    ],
    "environments": ["Forest", "Grassland", "Hill", "Mountain"]
  },
  {
    "name": "Giant Fire Beetle",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/9/896/1000/1000/636334287498492864.jpeg",
    "size": "Small",
    "hp": 4,
    "roll": "1d6 + 1",
    "ac": 13,
    "speed": 30,
    "str": 8,
    "dex": 10,
    "con": 12,
    "int": 1,
    "wis": 7,
    "cha": 3,
    "senses": "Blindsight 30 ft.",
    "passive": 8,
    "cr": "0 ",
    "traits": [
      {
        "name": "Illumination",
        "text": "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 ft.."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 - 1) slashing damage.",
        "attack": "Bite|1|1d6-1"
      }
    ],
    "environments": ["Underdark"]
  },
  {
    "name": "Giant Fly",
    "img": "https://static.wikia.nocookie.net/pathfinder/images/5/54/Giant_fly_and_maggot.jpg",
    "size": "Large",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 11,
    "speed": 30,
    "fly": 60,
    "str": 14,
    "dex": 13,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "senses": "Darkvision 60 ft.",
    "passive": 10,
    "cr": "0 ",
    "environments": []
  },
  {
    "name": "Giant Frog",
    "img": "https://i.pinimg.com/736x/b4/83/00/b4830019252d6014554aacc7f513437e.jpg",
    "size": "Medium",
    "hp": 18,
    "roll": "4d8",
    "ac": 11,
    "speed": 30,
    "swim": 30,
    "str": 12,
    "dex": 13,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "skills": "Perception +2, Stealth +3",
    "senses": "Darkvision 30 ft.",
    "passive": 12,
    "cr": "1/4",
    "traits": [
      {
        "name": "Amphibious",
        "text": "The frog can breathe air and water"
      },
      {
        "name": "Standing Leap",
        "text": "The frog's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target.",
        "attack": "Bite|3|1d6+1"
      },
      {
        "name": "Swallow",
        "text": "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 ft. of movement, exiting prone."
      }
    ],
    "environments": ["Forest", "Swamp"]
  },
  {
    "name": "Giant Goat",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/7/7e/Giant_ram_5e.png",
    "size": "Large",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 11,
    "speed": 40,
    "str": 17,
    "dex": 11,
    "con": 12,
    "int": 3,
    "wis": 12,
    "cha": 6,
    "passive": 11,
    "cr": "1/2",
    "traits": [
      {
        "name": "Charge",
        "text": "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
        "attack": "Charge||2d4"
      },
      {
        "name": "Sure-Footed",
        "text": "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
      }
    ],
    "actions": [
      {
        "name": "Ram",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.",
        "attack": "Ram|5|2d4+3"
      }
    ],
    "environments": ["Grassland", "Hill", "Mountain"]
  },
  {
    "name": "Giant Hyena",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/8/8d/Hyena_4e.jpg",
    "size": "Large",
    "hp": 45,
    "roll": "6d10 + 12",
    "ac": 12,
    "speed": 50,
    "str": 16,
    "dex": 14,
    "con": 14,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "skills": "Perception +3",
    "passive": 13,
    "cr": "1 ",
    "traits": [
      {
        "name": "Rampage",
        "text": "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
        "attack": "Bite|5|1d6+3"
      }
    ],
    "environments": ["Desert", "Forest", "Grassland", "Hill"]
  },
  {
    "name": "Giant Lizard",
    "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f055b11-30d4-4a48-85a1-774dc8d792cd/dg1l1gs-60e45388-f3b8-4da4-857d-4d880d30edf3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmMDU1YjExLTMwZDQtNGE0OC04NWExLTc3NGRjOGQ3OTJjZFwvZGcxbDFncy02MGU0NTM4OC1mM2I4LTRkYTQtODU3ZC00ZDg4MGQzMGVkZjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AOag1I3HCpawqNOiwBODFGFIrZCf60CqJrL8LwW_kh0",
    "size": "Large",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 12,
    "speed": 30,
    "climb": 30,
    "str": 15,
    "dex": 12,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "senses": "Darkvision 30 ft.",
    "passive": 10,
    "cr": "1/4",
    "traits": [
      {
        "name": "Variant: Hold Breath",
        "text": "The lizard can hold its breath for 15 minutes. (A lizard that has this trait also has a swimming speed of 30 feet.)"
      },
      {
        "name": "Variant: Spider Climb",
        "text": "The lizard can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
        "attack": "Bite|4|1d8+2"
      }
    ],
    "environments": ["Coastal", "Desert", "Forest", "Swamp", "Underdark"]
  },
  {
    "name": "Giant Octopus",
    "img": "https://2e.aonprd.com/Images/Monsters/OctopusGiant.png",
    "size": "Large",
    "hp": 52,
    "roll": "8d10 + 8",
    "ac": 11,
    "speed": 10,
    "swim": 60,
    "str": 17,
    "dex": 13,
    "con": 13,
    "int": 4,
    "wis": 10,
    "cha": 4,
    "skills": "Perception +4, Stealth +5",
    "senses": "Darkvision 60 ft.",
    "passive": 14,
    "cr": "1 ",
    "traits": [
      {
        "name": "Hold Breath",
        "text": "While out of water, the octopus can hold its breath for 1 hour."
      },
      {
        "name": "Underwater Camouflage",
        "text": "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
      },
      {
        "name": "Water Breathing",
        "text": "The octopus can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Tentacles",
        "text": "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target.",
        "attack": "Tentacles|5|2d6+3"
      },
      {
        "name": "Ink Cloud (Recharges after a Short or Long Rest)",
        "text": "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Giant Owl",
    "img": "https://static.wikia.nocookie.net/dungeonsdragons/images/b/b3/Giantowl.jpg",
    "size": "Large",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 12,
    "speed": 5,
    "fly": 60,
    "str": 13,
    "dex": 15,
    "con": 12,
    "int": 8,
    "wis": 13,
    "cha": 10,
    "skills": "Perception +5, Stealth +4",
    "senses": "Darkvision 120 ft.",
    "passive": 15,
    "cr": "1/4",
    "traits": [
      {
        "name": "Flyby",
        "text": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
      },
      {
        "name": "Keen Hearing and Sight",
        "text": "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
      }
    ],
    "actions": [
      {
        "name": "Talons",
        "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 1) slashing damage.",
        "attack": "Talons|3|2d6+1"
      }
    ],
    "environments": ["Arctic", "Forest", "Hill"]
  },
  {
    "name": "Giant Poisonous Snake",
    "img": "https://static.wikia.nocookie.net/dungeonsdragons/images/b/b3/Giantowl.jpg",
    "size": "Medium",
    "hp": 11,
    "roll": "2d8 + 2",
    "ac": 14,
    "speed": 30,
    "swim": 30,
    "str": 10,
    "dex": 18,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "skills": "Perception +2",
    "senses": "Blindsight 10 ft.",
    "passive": 12,
    "cr": "1/4",
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
        "attack": "Bite|6|1d4+4"
      }
    ],
    "environments": ["Desert", "Forest", "Grassland", "Swamp", "Underdark", "Urban"]
  },
  {
    "name": "Giant Rat",
    "img": "https://i.pinimg.com/originals/0b/7b/ed/0b7bedcb3236805cbe5a6d7274516fb0.png",
    "size": "Small",
    "hp": 7,
    "roll": "2d6",
    "ac": 12,
    "speed": 30,
    "str": 7,
    "dex": 15,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "senses": "Darkvision 60 ft.",
    "passive": 10,
    "cr": "1/8",
    "traits": [
      {
        "name": "Keen Smell",
        "text": "The rat has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "name": "Pack Tactics",
        "text": "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        "attack": "Bite|4|1d4+2"
      }
    ],
    "environments": ["Forest", "Swamp", "Underdark", "Urban"]
  },
  {
    "name": "Giant Rat (Diseased)",
    "img": "https://64.media.tumblr.com/3e95f33eafe06bac8a7a76641fb7496a/tumblr_nsgi08jVv81uqhshmo1_540.png",
    "size": "Small",
    "hp": 7,
    "roll": "2d6",
    "ac": 12,
    "speed": 30,
    "str": 7,
    "dex": 15,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "senses": "Darkvision 60 ft.",
    "passive": 10,
    "cr": "1/8",
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage. If the target is a creature, it must succeed on a DC 10 Constitution saving throw or contract a disease. Until the disease is cured, the target can't regain hit points except by magical means, and the target's hit point maximum decreases by 3 (1d6) every 24 hours. If the target's hit point maximum drops to 0 as a result of this disease, the target dies.",
        "attack": "Bite|3|1d4+1"
      }
    ],
    "environments": []
  },
  {
    "name": "Giant Scorpion",
    "img": "https://angrygolem-games.com/wp-content/uploads/2021/11/Giant-Scorpion.jpg",
    "size": "Large",
    "hp": 52,
    "roll": "7d10 + 14",
    "ac": 15,
    "speed": 40,
    "str": 15,
    "dex": 13,
    "con": 15,
    "int": 1,
    "wis": 9,
    "cha": 3,
    "senses": "Blindsight 60 ft.",
    "passive": 9,
    "cr": "3 ",
    "actions": [
      {
        "name": "Claw",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target.",
        "attack": "Claw|4|1d8+2"
      },
      {
        "name": "Multiattack",
        "text": "The scorpion makes three attacks: two with its claws and one with its sting."
      },
      {
        "name": "Sting",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one.",
        "attack": "Sting|4|1d10+2"
      }
    ],
    "environments": ["Desert"]
  },
  {
    "name": "Giant Sea Horse",
    "img": "https://static.wikia.nocookie.net/wowpedia/images/6/6e/Seahorse.png",
    "size": "Large",
    "hp": 16,
    "roll": "3d10",
    "ac": 13,
    "speed": 0,
    "swim": 40,
    "str": 12,
    "dex": 15,
    "con": 11,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "passive": 11,
    "cr": "1/2",
    "traits": [
      {
        "name": "Charge",
        "text": "If the sea horse moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
        "attack": "Charge||2d6"
      },
      {
        "name": "Water Breathing",
        "text": "The sea horse can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Ram",
        "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.",
        "attack": "|3|1d6+1"
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Giant Shark",
    "img": "https://angrygolem-games.com/wp-content/uploads/2021/10/Giant-Shark.jpg",
    "size": "Huge",
    "hp": 126,
    "roll": "11d12 + 55",
    "ac": 13,
    "speed": 0,
    "swim": 50,
    "str": 23,
    "dex": 11,
    "con": 21,
    "int": 1,
    "wis": 10,
    "cha": 5,
    "skills": "Perception +3",
    "senses": "Blindsight 60 ft.",
    "passive": 13,
    "cr": "5 ",
    "traits": [
      {
        "name": "Blood Frenzy",
        "text": "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
      },
      {
        "name": "Water Breathing",
        "text": "The shark can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing damage.",
        "attack": "Bite|9|3d10+6"
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Giant Spider",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/30849/299/1000/1000/638064499038216933.png",
    "size": "Large",
    "hp": 26,
    "roll": "4d10 + 4",
    "ac": 14,
    "speed": 30,
    "climb": 30,
    "str": 14,
    "dex": 16,
    "con": 12,
    "int": 2,
    "wis": 11,
    "cha": 4,
    "skills": "Stealth +7",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.",
    "passive": 10,
    "cr": "1 ",
    "traits": [
      {
        "name": "Spider Climb",
        "text": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "name": "Web Sense",
        "text": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
      },
      {
        "name": "Web Walker",
        "text": "The spider ignores movement restrictions caused by webbing."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        "attack": "Bite|5|1d8+3"
      },
      {
        "name": "Web (Recharge 5-6)",
        "text": "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).",
        "attack": "Web|5|0"
      }
    ],
    "environments": ["Desert", "Forest", "Swamp", "Underdark", "Urban"]
  },
  {
    "name": "Giant Toad",
    "img": "https://i.imgur.com/10l9yX9.png",
    "size": "Large",
    "hp": 39,
    "roll": "6d10 + 6",
    "ac": 11,
    "speed": 20,
    "swim": 40,
    "str": 15,
    "dex": 13,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 3,
    "senses": "Darkvision 30 ft.",
    "passive": 10,
    "cr": "1 ",
    "traits": [
      {
        "name": "Amphibious",
        "text": "The toad can breathe air and water"
      },
      {
        "name": "Standing Leap",
        "text": "The toad's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target.",
        "attack": "Bite|4|1d10+2"
      },
      {
        "name": "Swallow",
        "text": "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.\nIf the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
      }
    ],
    "environments": ["Coastal", "Desert", "Forest", "Swamp", "Underdark"]
  },
  {
    "name": "Giant Vulture",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/c/c4/Giantvulture.jpg",
    "size": "Large",
    "hp": 22,
    "roll": "3d10 + 6",
    "ac": 10,
    "speed": 10,
    "fly": 60,
    "str": 15,
    "dex": 10,
    "con": 15,
    "int": 6,
    "wis": 12,
    "cha": 7,
    "skills": "Perception +3",
    "passive": 13,
    "cr": "1 ",
    "traits": [
      {
        "name": "Keen Sight and Smell",
        "text": "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
      },
      {
        "name": "Pack Tactics",
        "text": "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "text": "The vulture makes two attacks: one with its beak and one with its talons."
      },
      {
        "name": "Beak",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage.",
        "attack": "Beak|4|2d4+2"
      },
      {
        "name": "Talons",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage.",
        "attack": "Talons|4|2d6+2"
      }
    ],
    "environments": ["Desert", "Grassland"]
  },
  {
    "name": "Giant Wasp",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/c/c4/Giantvulture.jpg",
    "size": "Medium",
    "hp": 13,
    "roll": "3d8",
    "ac": 12,
    "speed": 10,
    "fly": 50,
    "str": 10,
    "dex": 14,
    "con": 10,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "passive": 10,
    "cr": "1/2",
    "actions": [
      {
        "name": "Sting",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        "attack": "Sting|4|1d6+2"
      }
    ],
    "environments": ["Forest", "Grassland", "Urban"]
  },
  {
    "name": "Giant Weasel",
    "img": "https://i.pinimg.com/originals/29/30/81/293081e5d8170a8df4638d7da52d722b.jpg",
    "size": "Medium",
    "hp": 9,
    "roll": "2d8",
    "ac": 13,
    "speed": 40,
    "str": 11,
    "dex": 16,
    "con": 10,
    "int": 4,
    "wis": 12,
    "cha": 5,
    "skills": "Perception +3, Stealth +5",
    "senses": "Darkvision 60 ft.",
    "passive": 13,
    "cr": "1/8",
    "traits": [
      {
        "name": "Keen Hearing and Smell",
        "text": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
        "attack": "Bite|5|1d4+3"
      }
    ],
    "environments": ["Forest", "Grassland", "Hill"]
  },
  {
    "name": "Giant Wolf Spider",
    "img": "https://i.pinimg.com/564x/e9/9d/70/e99d700416c01a2b020ec41b7b64bf66.jpg",
    "size": "Medium",
    "hp": 11,
    "roll": "2d8 + 2",
    "ac": 13,
    "speed": 40,
    "climb": 40,
    "str": 12,
    "dex": 16,
    "con": 13,
    "int": 3,
    "wis": 12,
    "cha": 4,
    "skills": "Perception +3, Stealth +7",
    "senses": "Blindsight 10 ft., Darkvision 60 ft.",
    "passive": 13,
    "cr": "1/4",
    "traits": [
      {
        "name": "Spider Climb",
        "text": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "name": "Web Sense",
        "text": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
      },
      {
        "name": "Web Walker",
        "text": "The spider ignores movement restrictions caused by webbing."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        "attack": "Bite|3|1d6+1"
      }
    ],
    "environments": ["Coastal", "Desert", "Forest", "Grassland", "Hill"]
  },
  {
    "name": "Goat",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/1/14/Mountain_goat5e.jpeg",
    "size": "Medium",
    "hp": 4,
    "roll": "1d8",
    "ac": 10,
    "speed": 40,
    "str": 12,
    "dex": 10,
    "con": 11,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "passive": 10,
    "cr": "0 ",
    "traits": [
      {
        "name": "Charge",
        "text": "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone.",
        "attack": "Charge||1d4"
      },
      {
        "name": "Sure-Footed",
        "text": "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
      }
    ],
    "actions": [
      {
        "name": "Ram",
        "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
        "attack": "Ram|3|1d4+1"
      }
    ],
    "environments": ["Grassland", "Hill", "Mountain", "Urban"]
  },
  {
    "name": "Hawk",
    "img": "https://t3.ftcdn.net/jpg/05/70/08/30/360_F_570083074_ahODGPbZJ6KUWEuPpO07Vwsd7ByZFJ9R.jpg",
    "size": "Tiny",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 13,
    "speed": 10,
    "fly": 60,
    "str": 5,
    "dex": 16,
    "con": 8,
    "int": 2,
    "wis": 14,
    "cha": 6,
    "skills": "Perception +4",
    "passive": 14,
    "cr": "0 ",
    "traits": [
      {
        "name": "Keen Sight",
        "text": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
      }
    ],
    "actions": [
      {
        "name": "Talons",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
        "attack": "Talons|5|1"
      }
    ],
    "environments": []
  },
  {
    "name": "Hunter Shark",
    "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/011ad8e1-175a-4002-ba85-26ff6c10c094/d94akwz-62a55f35-017b-4c07-96cc-d36b9218ec70.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMWFkOGUxLTE3NWEtNDAwMi1iYTg1LTI2ZmY2YzEwYzA5NFwvZDk0YWt3ei02MmE1NWYzNS0wMTdiLTRjMDctOTZjYy1kMzZiOTIxOGVjNzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.k1F6rw6F-LUZzT8oI_vcLubbmUDYO7_vLq1ymAnSvhc",
    "size": "Large",
    "hp": 45,
    "roll": "6d10 + 12",
    "ac": 12,
    "swim": 40,
    "str": 18,
    "dex": 13,
    "con": 15,
    "int": 1,
    "wis": 10,
    "cha": 4,
    "skills": "Perception +2",
    "senses": "Darkvision 30 ft.",
    "passive": 12,
    "cr": "2 ",
    "traits": [
      {
        "name": "Blood Frenzy",
        "text": "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
      },
      {
        "name": "Water Breathing",
        "text": "The shark can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.",
        "attack": "Bite|6|2d8+4"
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Hyena",
    "img": "https://i.pinimg.com/736x/5e/f8/28/5ef828f0e2954f26df3e7db6011f3ef3.jpg",
    "size": "Medium",
    "hp": 5,
    "roll": "1d8 + 1",
    "ac": 11,
    "speed": 50,
    "str": 11,
    "dex": 13,
    "con": 12,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "skills": "Perception +3",
    "passive": 13,
    "cr": "0 ",
    "traits": [
      {
        "name": "Pack Tactics",
        "text": "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage.",
        "attack": "Bite|2|1d6"
      }
    ],
    "environments": ["Desert", "Forest", "Grassland", "Hill"]
  },
  {
    "name": "Jackal",
    "img": "https://angrygolem-games.com/wp-content/uploads/2021/11/Jackal.jpg",
    "size": "Small",
    "hp": 3,
    "roll": "1d6",
    "ac": 12,
    "speed": 40,
    "str": 8,
    "dex": 15,
    "con": 11,
    "int": 3,
    "wis": 12,
    "cha": 6,
    "skills": "Perception +3",
    "passive": 13,
    "cr": "0 ",
    "traits": [
      {
        "name": "Keen Hearing and Smell",
        "text": "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        "name": "Pack Tactics",
        "text": "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) piercing damage.",
        "attack": "Bite|1|1d4-1"
      }
    ],
    "environments": ["Desert", "Grassland"]
  },
  {
    "name": "Killer Whale",
    "img": "https://angrygolem-games.com/wp-content/uploads/2021/04/killer-whale.jpg",
    "size": "Huge",
    "hp": 90,
    "roll": "12d12 + 12",
    "ac": 12,
    "swim": 60,
    "str": 19,
    "dex": 10,
    "con": 13,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "skills": "Perception +3",
    "senses": "Blindsight 120 ft.",
    "passive": 13,
    "cr": "3 ",
    "traits": [
      {
        "name": "Echolocation",
        "text": "The whale can't use its blindsight while deafened."
      },
      {
        "name": "Hold Breath",
        "text": "The whale can hold its breath for 30 minutes"
      },
      {
        "name": "Keen Hearing",
        "text": "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6 + 4) piercing damage."
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Lion",
    "img": "https://5e.tools/img/bestiary/BGG/Spotted%20Lion.webp",
    "size": "Large",
    "hp": 26,
    "roll": "4d10 + 4",
    "ac": 12,
    "speed": 50,
    "str": 17,
    "dex": 15,
    "con": 13,
    "int": 3,
    "wis": 12,
    "cha": 8,
    "skills": "Perception +3, Stealth +6",
    "passive": 13,
    "cr": "1 ",
    "traits": [
      {
        "name": "Keen Smell",
        "text": "The lion has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "name": "Pack Tactics",
        "text": "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      },
      {
        "name": "Pounce",
        "text": "If the lion moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action."
      },
      {
        "name": "Running Leap",
        "text": "With a 10-foot running start, the lion can long jump up to 25 ft.."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
        "attack": "Bite|5|1d8+3"
      },
      {
        "name": "Claw",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
        "attack": "Claw|5|1d6+3"
      }
    ],
    "environments": ["Desert", "Grassland", "Hill", "Mountain"]
  },
  {
    "name": "Lizard",
    "img": "https://i.pinimg.com/originals/a3/e8/12/a3e812f75810022f6bb9ac42c73e97b7.png",
    "size": "Tiny",
    "hp": 2,
    "roll": "1d4",
    "ac": 10,
    "speed": 20,
    "climb": 20,
    "str": 2,
    "dex": 11,
    "con": 10,
    "int": 1,
    "wis": 8,
    "cha": 3,
    "senses": "Darkvision 30 ft.",
    "passive": 9,
    "cr": "0 ",
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        "attack": "Bite||1"
      }
    ],
    "environments": []
  },
  {
    "name": "Mammoth",
    "img": "https://www.pngitem.com/pimgs/m/236-2361840_d-d-5e-mammoth-png-download-mammoth-art.png",
    "size": "Huge",
    "hp": 126,
    "roll": "11d12 + 55",
    "ac": 13,
    "speed": 40,
    "str": 24,
    "dex": 9,
    "con": 21,
    "int": 3,
    "wis": 11,
    "cha": 6,
    "passive": 10,
    "cr": "6 ",
    "traits": [
      {
        "name": "Trampling Charge",
        "text": "If the mammoth moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action."
      }
    ],
    "actions": [
      {
        "name": "Gore",
        "text": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8 + 7) piercing damage.",
        "attack": "Gore|10|4d8+7"
      },
      {
        "name": "Stomp",
        "text": "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10 + 7) bludgeoning damage.",
        "attack": "Stomp|10|4d10+7"
      }
    ],
    "environments": ["Arctic"]
  },
  {
    "name": "Mastiff",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/30849/339/1000/1000/638064501182707662.png",
    "size": "Medium",
    "hp": 5,
    "roll": "1d8 + 1",
    "ac": 12,
    "speed": 40,
    "str": 13,
    "dex": 14,
    "con": 12,
    "int": 3,
    "wis": 12,
    "cha": 7,
    "skills": "Perception +3",
    "passive": 13,
    "cr": "1/8",
    "traits": [
      {
        "name": "Keen Hearing and Smell",
        "text": "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
        "attack": "Bite|3|1d6+1"
      }
    ],
    "environments": ["Forest", "Hill", "Urban"]
  },
  {
    "name": "Mule",
    "img": "https://img.freepik.com/premium-photo/donkey-2d-vector-illustration-cartoon-white-background_889056-22679.jpg",
    "size": "Medium",
    "hp": 11,
    "roll": "2d8 + 2",
    "ac": 10,
    "speed": 40,
    "str": 14,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 10,
    "cha": 5,
    "passive": 10,
    "cr": "1/8",
    "traits": [
      {
        "name": "Beast of Burden",
        "text": "The mule is considered to be a Large animal for the purpose of determining its carrying capacity."
      },
      {
        "name": "Sure-Footed",
        "text": "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
      }
    ],
    "actions": [
      {
        "name": "Hooves",
        "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.",
        "attack": "Hooves|4|1d4+2"
      }
    ],
    "environments": ["Desert", "Hill", "Urban"]
  },
  {
    "name": "Octopus",
    "img": "https://i.pinimg.com/736x/fb/a9/31/fba931410663726e49fecbdc0843ea2f.jpg",
    "size": "Small",
    "hp": 3,
    "roll": "1d6",
    "ac": 12,
    "speed": 5,
    "swim": 30,
    "str": 4,
    "dex": 15,
    "con": 11,
    "int": 3,
    "wis": 10,
    "cha": 4,
    "skills": "Perception +2, Stealth +4",
    "senses": "Darkvision 30 ft.",
    "passive": 12,
    "cr": "0 ",
    "traits": [
      {
        "name": "Hold Breath",
        "text": "While out of water, the octopus can hold its breath for 30 minutes."
      },
      {
        "name": "Underwater Camouflage",
        "text": "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
      },
      {
        "name": "Water Breathing",
        "text": "The octopus can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Tentacles",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target.",
        "attack": "Tentacles|4|1"
      },
      {
        "name": "Ink Cloud (Recharges after a Short or Long Rest)",
        "text": "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Owl",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/16/533/1000/1000/636376331660233857.jpeg",
    "size": "Tiny",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 11,
    "speed": 5,
    "fly": 60,
    "str": 3,
    "dex": 13,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "skills": "Perception +3, Stealth +3",
    "senses": "Darkvision 120 ft.",
    "passive": 13,
    "cr": "0 ",
    "traits": [
      {
        "name": "Flyby",
        "text": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
      },
      {
        "name": "Keen Hearing and Sight",
        "text": "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
      }
    ],
    "actions": [
      {
        "name": "Talons",
        "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
        "attack": "Talons|3|1"
      }
    ],
    "environments": ["Arctic", "Forest"]
  },
  {
    "name": "Panther",
    "img": "https://i.imgur.com/cEHre6m.png",
    "size": "Medium",
    "hp": 13,
    "roll": "3d8",
    "ac": 12,
    "speed": 50,
    "climb": 40,
    "str": 14,
    "dex": 15,
    "con": 10,
    "int": 3,
    "wis": 14,
    "cha": 7,
    "skills": "Perception +4, Stealth +6",
    "passive": 14,
    "cr": "1/4",
    "traits": [
      {
        "name": "Keen Smell",
        "text": "The panther has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "name": "Pounce",
        "text": "If the panther moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        "attack": "Bite|4|1d6+2"
      },
      {
        "name": "Claw",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
        "attack": "Claw|4|1d4+2"
      }
    ],
    "environments": ["Forest", "Grassland", "Hill"]
  },
  {
    "name": "Plesiosaurus",
    "img": "https://st3.depositphotos.com/1409882/35928/v/450/depositphotos_359281714-stock-illustration-illustration-plesiosaurs-extinct-mesozoic-marine.jpg",
    "size": "Large",
    "hp": 68,
    "roll": "8d10 + 24",
    "ac": 13,
    "speed": 20,
    "swim": 40,
    "str": 18,
    "dex": 15,
    "con": 16,
    "int": 2,
    "wis": 12,
    "cha": 5,
    "skills": "Perception +3, Stealth +4",
    "passive": 13,
    "cr": "2 ",
    "traits": [
      {
        "name": "Hold Breath",
        "text": "The plesiosaurus can hold its breath for 1 hour."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) piercing damage.",
        "attack": "Bite|6|3d6+4"
      }
    ],
    "environments": ["Coastal", "Underwater"]
  },
  {
    "name": "Poisonous Snake",
    "img": "https://www.worldanvil.com/uploads/images/d04201b3de85f66cae829b80b26a1144.jpg",
    "size": "Tiny",
    "hp": 2,
    "roll": "1d4",
    "ac": 13,
    "speed": 30,
    "swim": 30,
    "str": 2,
    "dex": 16,
    "con": 11,
    "int": 1,
    "wis": 10,
    "cha": 3,
    "senses": "Blindsight 10 ft.",
    "passive": 10,
    "cr": "1/8",
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one.",
        "attack": "Bite|5|1"
      }
    ],
    "environments": ["Coastal", "Desert", "Forest", "Grassland", "Hill", "Swamp"]
  },
  {
    "name": "Polar Bear",
    "img": "https://i.pinimg.com/736x/7e/8d/49/7e8d497c45deb55025d301e01ffdcd3f.jpg",
    "size": "Large",
    "hp": 42,
    "roll": "5d10 + 15",
    "ac": 12,
    "speed": 40,
    "swim": 30,
    "str": 20,
    "dex": 10,
    "con": 16,
    "int": 2,
    "wis": 13,
    "cha": 7,
    "skills": "Perception +3",
    "passive": 13,
    "cr": "2 ",
    "traits": [
      {
        "name": "Keen Smell",
        "text": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "text": "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.",
        "attack": "Bite|7|1d8+5"
      },
      {
        "name": "Claws",
        "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
        "attack": "Claws|7|2d6+5"
      }
    ],
    "environments": ["Arctic", "Underdark"]
  },
  {
    "name": "Pony",
    "img": "https://www.krydodan.com/mounts/vor2.png",
    "size": "Medium",
    "hp": 11,
    "roll": "2d8 + 2",
    "ac": 10,
    "speed": 40,
    "str": 15,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 11,
    "cha": 7,
    "passive": 10,
    "cr": "1/8",
    "actions": [
      {
        "name": "Hooves",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage.",
        "attack": "Hooves|4|2d4+2"
      }
    ],
    "environments": ["Urban"]
  },
  {
    "name": "Pteranodon",
    "img": "https://2e.aonprd.com/Images/Monsters/Pterosaur_Pteranodon.png",
    "size": "Medium",
    "hp": 13,
    "roll": "3d8",
    "ac": 13,
    "speed": 10,
    "fly": 60,
    "str": 12,
    "dex": 15,
    "con": 10,
    "int": 2,
    "wis": 9,
    "cha": 5,
    "skills": "Perception +1",
    "passive": 11,
    "cr": "1/4",
    "traits": [
      {
        "name": "Flyby",
        "text": "The pteranodon doesn't provoke opportunity attacks when it flies out of an enemy's reach."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) piercing damage"
      }
    ],
    "environments": ["Coastal", "Grassland", "Mountain"]
  },
  {
    "name": "Quipper",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/30849/309/1000/1000/638064499305106998.png",
    "size": "Tiny",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 13,
    "swim": 40,
    "str": 2,
    "dex": 16,
    "con": 9,
    "int": 1,
    "wis": 7,
    "cha": 2,
    "senses": "Darkvision 60 ft.",
    "passive": 8,
    "cr": "0 ",
    "traits": [
      {
        "name": "Blood Frenzy",
        "text": "The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points."
      },
      {
        "name": "Water Breathing",
        "text": "The quipper can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        "attack": "Bite|5|1"
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Rat",
    "img": "https://www.dandwiki.com/w/images/8/8b/Rat.png",
    "size": "Tiny",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 10,
    "speed": 20,
    "str": 2,
    "dex": 11,
    "con": 9,
    "int": 2,
    "wis": 10,
    "cha": 4,
    "senses": "Darkvision 30 ft.",
    "passive": 10,
    "cr": "0 ",
    "traits": [
      {
        "name": "Keen Smell",
        "text": "The rat has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        "attack": "Bite||1"
      }
    ],
    "environments": ["Swamp", "Urban"]
  },
  {
    "name": "Raven",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/16/553/1000/1000/636376341568391037.jpeg",
    "size": "Tiny",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 12,
    "speed": 10,
    "fly": 50,
    "str": 2,
    "dex": 14,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 6,
    "skills": "Perception +3",
    "passive": 13,
    "cr": "0 ",
    "traits": [
      {
        "name": "Mimicry",
        "text": "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
      }
    ],
    "actions": [
      {
        "name": "Beak",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage."
      }
    ],
    "environments": ["Hill", "Swamp", "Urban"]
  },
  {
    "name": "Reef Shark",
    "img": "https://i.postimg.cc/MK9LhHsv/Silvertip-Shark2.png",
    "size": "Medium",
    "hp": 22,
    "roll": "4d8 + 4",
    "ac": 12,
    "swim": 40,
    "str": 14,
    "dex": 13,
    "con": 13,
    "int": 1,
    "wis": 10,
    "cha": 4,
    "skills": "Perception +2",
    "senses": "Blindsight 30 ft.",
    "passive": 12,
    "cr": "1/2",
    "traits": [
      {
        "name": "Pack Tactics",
        "text": "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      },
      {
        "name": "Water Breathing",
        "text": "The shark can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
        "attack": "Bite|4|1d8+2"
      }
    ],
    "environments": ["Underwater"]
  },
  {
    "name": "Rhinoceros",
    "img": "https://static.wikia.nocookie.net/here-be-dragons/images/5/59/Woolly_Rhinoceros.jpg",
    "size": "Large",
    "hp": 45,
    "roll": "6d10 + 12",
    "ac": 11,
    "speed": 40,
    "str": 21,
    "dex": 8,
    "con": 15,
    "int": 2,
    "wis": 12,
    "cha": 6,
    "passive": 11,
    "cr": "2 ",
    "traits": [
      {
        "name": "Charge",
        "text": "If the rhinoceros moves at least 20 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
        "attack": "Charge||2d8"
      }
    ],
    "actions": [
      {
        "name": "Gore",
        "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.",
        "attack": "Gore|7|2d8+5"
      }
    ],
    "environments": ["Grassland"]
  },
  {
    "name": "Riding Horse",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/9/904/1000/1000/636334288913250513.jpeg",
    "size": "Large",
    "hp": 13,
    "roll": "2d10 + 2",
    "ac": 10,
    "speed": 60,
    "str": 16,
    "dex": 10,
    "con": 12,
    "int": 2,
    "wis": 11,
    "cha": 7,
    "passive": 10,
    "cr": "1/4",
    "actions": [
      {
        "name": "Hooves",
        "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.",
        "attack": "Hooves|2|2d4+3"
      }
    ],
    "environments": ["Grassland", "Urban"]
  },
  {
    "name": "Saber-Toothed Tiger",
    "img": "https://t3.ftcdn.net/jpg/06/67/58/74/360_F_667587417_qZnUqYdBkGn75j4MtO4g1xcDWW5wW7JY.jpg",
    "size": "Large",
    "hp": 52,
    "roll": "7d10 + 14",
    "ac": 12,
    "speed": 40,
    "str": 18,
    "dex": 14,
    "con": 15,
    "int": 3,
    "wis": 12,
    "cha": 8,
    "skills": "Perception +3, Stealth +6",
    "passive": 13,
    "cr": "2 ",
    "traits": [
      {
        "name": "Keen Smell",
        "text": "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "name": "Pounce",
        "text": "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) piercing damage.",
        "attack": "Bite|6|1d10+5"
      },
      {
        "name": "Claw",
        "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
        "attack": "Claw|6|2d6+5"
      }
    ],
    "environments": ["Arctic", "Mountain"]
  },
  {
    "name": "Scorpion",
    "img": "https://static.wikia.nocookie.net/teso_gamepedia/images/7/76/Concept_art_Giant_scorpion.png",
    "size": "Tiny",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 11,
    "speed": 10,
    "str": 2,
    "dex": 11,
    "con": 8,
    "int": 1,
    "wis": 8,
    "cha": 2,
    "senses": "Blindsight 10 ft.",
    "passive": 9,
    "cr": "0 ",
    "actions": [
      {
        "name": "Sting",
        "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one.",
        "attack": "Sting|2|1"
      }
    ],
    "environments": ["Desert"]
  },
  {
    "name": "Sea Horse",
    "img": "https://static.wikia.nocookie.net/wowpedia/images/6/6e/Seahorse.png",
    "size": "Tiny",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 11,
    "swim": 20,
    "str": 1,
    "dex": 12,
    "con": 8,
    "int": 1,
    "wis": 10,
    "cha": 2,
    "passive": 10,
    "cr": "0 ",
    "traits": [
      {
        "name": "Water Breathing",
        "text": "The sea horse can breathe only underwater."
      }
    ],
    "environments": []
  },
  {
    "name": "Spider",
    "img": "https://www.worldanvil.com/uploads/images/33efd1a6f45814e4541ca4cfdab0ed24.png",
    "size": "Tiny",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 12,
    "speed": 20,
    "climb": 20,
    "str": 2,
    "dex": 14,
    "con": 8,
    "int": 1,
    "wis": 10,
    "cha": 2,
    "skills": "Stealth +4",
    "senses": "Darkvision 30 ft.",
    "passive": 12,
    "cr": "0 ",
    "traits": [
      {
        "name": "Spider Climb",
        "text": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        "name": "Web Sense",
        "text": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
      },
      {
        "name": "Web Walker",
        "text": "The spider ignores movement restrictions caused by webbing."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage.",
        "attack": "Bite|4|1"
      }
    ],
    "environments": []
  },
  {
    "name": "Stirge",
    "img": "https://static.wikia.nocookie.net/forgottenrealms/images/8/86/Stirge-5e.png",
    "size": "Tiny",
    "hp": 2,
    "roll": "1d4",
    "ac": 14,
    "speed": 10,
    "fly": 40,
    "str": 4,
    "dex": 16,
    "con": 11,
    "int": 2,
    "wis": 8,
    "cha": 6,
    "senses": "Darkvision 60 ft.",
    "passive": 9,
    "cr": "1/8",
    "actions": [
      {
        "name": "Blood Drain",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss.\nThe stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge.",
        "attack": "Blood Drain|5|1d4+3"
      }
    ],
    "environments": [
      "Coastal",
      "Desert",
      "Forest",
      "Grassland",
      "Hill",
      "Mountain",
      "Swamp",
      "Underdark",
      "Urban"
    ]
  },
  {
    "name": "Tiger",
    "img": "https://static.wikia.nocookie.net/rythiae/images/7/71/Dire_Tiger.jpg",
    "size": "Large",
    "hp": 37,
    "roll": "5d10 + 10",
    "ac": 12,
    "speed": 40,
    "str": 17,
    "dex": 15,
    "con": 14,
    "int": 3,
    "wis": 12,
    "cha": 8,
    "skills": "Perception +3, Stealth +6",
    "senses": "Darkvision 60 ft.",
    "passive": 13,
    "cr": "1 ",
    "traits": [
      {
        "name": "Keen Smell",
        "text": "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        "name": "Pounce",
        "text": "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.",
        "attack": "Bite|5|1d10+3"
      },
      {
        "name": "Claw",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage."
      }
    ],
    "environments": ["Forest", "Grassland"]
  },
  {
    "name": "Triceratops",
    "img": "https://images.dinosaurpictures.org/torosaurus-latus-a-prehistoric-era-sergey-krasovskiy_1aa6.jpg",
    "size": "Huge",
    "hp": 95,
    "roll": "10d12 + 30",
    "ac": 13,
    "speed": 50,
    "str": 22,
    "dex": 9,
    "con": 17,
    "int": 2,
    "wis": 11,
    "cha": 5,
    "passive": 10,
    "cr": "5 ",
    "traits": [
      {
        "name": "Trampling Charge",
        "text": "If the triceratops moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action."
      }
    ],
    "actions": [
      {
        "name": "Gore",
        "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8 + 6) piercing damage.",
        "attack": "Gore|9|4d8+6"
      },
      {
        "name": "Stomp",
        "text": "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage",
        "attack": "Stomp|9|3d10+6"
      }
    ],
    "environments": ["Grassland"]
  },
  {
    "name": "Vulture",
    "img": "https://i.pinimg.com/originals/02/6d/2f/026d2ff39a89768ec17b71116fab3cc8.png",
    "size": "Medium",
    "hp": 5,
    "roll": "1d8 + 1",
    "ac": 10,
    "speed": 10,
    "fly": 50,
    "str": 7,
    "dex": 10,
    "con": 13,
    "int": 2,
    "wis": 12,
    "cha": 4,
    "skills": "Perception +3",
    "passive": 13,
    "cr": "0 ",
    "traits": [
      {
        "name": "Keen Sight and Smell",
        "text": "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
      },
      {
        "name": "Pack Tactics",
        "text": "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    "actions": [
      {
        "name": "Beak",
        "text": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.",
        "attack": "Beak|2|1d4"
      }
    ],
    "environments": ["Desert", "Grassland", "Hill"]
  },
  {
    "name": "Warhorse",
    "img": "https://angrygolem-games.com/wp-content/uploads/2021/11/Warhorse.jpg",
    "size": "Large",
    "hp": 19,
    "roll": "3d10 + 3",
    "ac": 11,
    "speed": 60,
    "str": 18,
    "dex": 12,
    "con": 13,
    "int": 2,
    "wis": 12,
    "cha": 7,
    "passive": 11,
    "cr": "1/2",
    "traits": [
      {
        "name": "Trampling Charge",
        "text": "If the horse moves at least 20 ft. straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action."
      }
    ],
    "actions": [
      {
        "name": "Hooves",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        "attack": "|4|2d6+4"
      }
    ],
    "environments": ["Urban"]
  },
  {
    "name": "Weasel",
    "img": "https://www.kryxrpg.com/static/a3295959eba1c63c1b3fd3ab3467114e/53c9b/weasel.png",
    "size": "Tiny",
    "hp": 1,
    "roll": "1d4-1",
    "ac": 13,
    "speed": 30,
    "str": 3,
    "dex": 16,
    "con": 8,
    "int": 2,
    "wis": 12,
    "cha": 3,
    "skills": "Perception +3, Stealth +5",
    "passive": 13,
    "cr": "0 ",
    "traits": [
      {
        "name": "Keen Hearing and Smell",
        "text": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
        "attack": "Bite|5|1"
      }
    ],
    "environments": []
  },
  {
    "name": "Wolf",
    "img": "https://i.pinimg.com/736x/03/5c/03/035c0395f48db185b97f7d3ba5ac7c59.jpg",
    "size": "Medium",
    "hp": 11,
    "roll": "2d8 + 2",
    "ac": 13,
    "speed": 40,
    "str": 12,
    "dex": 15,
    "con": 12,
    "int": 3,
    "wis": 12,
    "cha": 6,
    "skills": "Perception +3, Stealth +4",
    "passive": 13,
    "cr": "1/4",
    "traits": [
      {
        "name": "Keen Hearing and Smell",
        "text": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        "name": "Pack Tactics",
        "text": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "text": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
        "attack": "Bite|4|2d4+2"
      }
    ],
    "environments": ["Forest", "Grassland", "Hill"]
  },
  {
    "name": "Air Elemental",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/30783/689/1000/1000/638062015555039371.png",
    "type": "elemental",
    "size": "Large",
    "hp": 90,
    "roll": "12d10 + 24",
    "ac": 15,
    "speed": 0,
    "fly": 90,
    "flyDetails": "hover",
    "str": 14,
    "dex": 20,
    "con": 14,
    "int": 6,
    "wis": 10,
    "cha": 6,
    "resistances": "Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "immunities": "Poison",
    "conditionImmunities": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
    "senses": "Darkvision 60ft.",
    "passive": 10,
    "languages": "Auran",
    "cr": "5 ",
    "traits": [
      {
        "name": "Air Form",
        "text": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "text": "The elemental makes two slam attacks."
      },
      {
        "name": "Slam",
        "text": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."
      },
      {
        "name": "Whirlwind (Recharge 4-6)",
        "text": "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone.\n\nIf the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone."
      }
    ],
    "environments": ["Desert", "Mountain"]
  },
  {
    "name": "Earth Elemental",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/30783/692/1000/1000/638062015664899420.png",
    "type": "elemental",
    "size": "Large",
    "hp": 126,
    "roll": "12d10 + 60",
    "ac": 17,
    "speed": 30,
    "burrow": 30,
    "str": 20,
    "dex": 8,
    "con": 20,
    "int": 5,
    "wis": 10,
    "cha": 5,
    "vulnerabilities": "Thunder",
    "resistances": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "immunities": "Poison",
    "conditionImmunities": "Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
    "senses": "Darkvision 60 ft., Tremorsense 60 ft",
    "passive": 10,
    "languages": "Terran",
    "cr": "5 ",
    "traits": [
      {
        "name": "Earth Glide",
        "text": "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through."
      },
      {
        "name": "Siege Monster",
        "text": "The elemental deals double damage to objects and structures."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "text": "The elemental makes two slam attacks."
      },
      {
        "name": "Slam",
        "text": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."
      }
    ],
    "environments": ["Underdark"]
  },
  {
    "name": "Fire Elemental",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/30783/695/1000/1000/638062015772259390.png",
    "type": "elemental",
    "size": "Large",
    "hp": 102,
    "roll": "12d10 + 36",
    "ac": 13,
    "speed": 50,
    "str": 10,
    "dex": 17,
    "con": 16,
    "int": 6,
    "wis": 10,
    "cha": 7,
    "resistances": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "immunities": "Fire, Poison",
    "conditionImmunities": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
    "senses": "Darkvision 60 ft.",
    "passive": 10,
    "languages": "Ignan",
    "cr": "5 ",
    "traits": [
      {
        "name": "Fire Form",
        "text": "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns."
      },
      {
        "name": "Illumination",
        "text": "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 feet."
      },
      {
        "name": "Water Susceptibility",
        "text": "For every 5 feet the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "text": "The elemental makes two touch attacks."
      },
      {
        "name": "Touch",
        "text": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns."
      }
    ],
    "environments": ["Desert"]
  },
  {
    "name": "Water Elemental",
    "img": "https://www.dndbeyond.com/avatars/thumbnails/30783/698/1000/1000/638062015886859442.png",
    "type": "elemental",
    "size": "Large",
    "hp": 114,
    "roll": "12d10 + 48",
    "ac": 14,
    "speed": 30,
    "swim": 90,
    "str": 18,
    "dex": 14,
    "con": 18,
    "int": 5,
    "wis": 10,
    "cha": 8,
    "resistances": "Acid; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
    "immunities": "Poison",
    "conditionImmunities": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
    "senses": "Darkvision 60 ft.",
    "passive": 10,
    "languages": "Aquan",
    "cr": "5 ",
    "traits": [
      {
        "name": "Water Form",
        "text": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
      },
      {
        "name": "Freeze",
        "text": "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 feet until the end of its next turn."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "text": "The elemental makes two slam attacks."
      },
      {
        "name": "Slam",
        "text": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
      },
      {
        "name": "Whelm (Recharge 4–6)",
        "text": "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.\n\nThe elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding."
      }
    ],
    "environments": ["Coastal", "Swamp", "Underwater"]
  }
]

export default beasts