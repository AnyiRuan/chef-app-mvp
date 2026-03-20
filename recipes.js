const recipesData_v2 = [
  {
    "id": "r_001",
    "name_zh": "经典红烧肉",
    "name_en": "Classic Red Braised Pork Belly",
    "cuisine": "lu",
    "tags": [
      "猪肉",
      "红烧",
      "经典",
      "pork",
      "braised"
    ],
    "time": 60,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/hong_shao_rou.png",
    "ingredients": [
      {
        "name_zh": "五花肉",
        "name_en": "Pork Belly",
        "amount": "500g"
      },
      {
        "name_zh": "老抽",
        "name_en": "Dark Soy Sauce",
        "amount": "2勺"
      },
      {
        "name_zh": "冰糖",
        "name_en": "Rock Sugar",
        "amount": "30g"
      }
    ],
    "steps": [
      {
        "action": "切配",
        "instruction_zh": "五花肉切成3厘米见方的块。",
        "instruction_en": "Cut pork belly into 3cm cubes.",
        "hasTimer": false
      },
      {
        "action": "焯水",
        "instruction_zh": "冷水下锅，加姜片和料酒，大火煮沸后撇去浮沫，捞出控干。",
        "instruction_en": "Boil in cold water with ginger and wine, skim foam, drain.",
        "hasTimer": true,
        "timeSeconds": 300,
        "hasParallel": true,
        "parallelTask_zh": "洗净葱姜准备八角/桂皮。",
        "parallelTask_en": "Wash scallions and prepare star anise/cinnamon."
      },
      {
        "action": "翻炒",
        "instruction_zh": "热锅少油，下五花肉煸炒至微微出油，表面金黄。",
        "instruction_en": "Fry pork in a bit of oil until fat renders and edges are golden.",
        "hasTimer": false
      },
      {
        "action": "调味",
        "instruction_zh": "放入冰糖炒出糖色，加入生抽、老抽翻炒上色。",
        "instruction_en": "Melt rock sugar to caramelize, add soy sauces to color the meat.",
        "hasTimer": false
      },
      {
        "action": "炖煮",
        "instruction_zh": "加入没过肉的开水，放入葱姜大料。大火烧开后转小火慢炖 45 分钟。",
        "instruction_en": "Add boiling water to cover, add spices. Simmer on low heat for 45 mins.",
        "hasTimer": true,
        "timeSeconds": 2700,
        "hasParallel": true,
        "parallelTask_zh": "趁现在可以清扫厨房台面或准备另一道配菜。",
        "parallelTask_en": "Clean the kitchen counter or prep another dish."
      },
      {
        "action": "收汁",
        "instruction_zh": "捡出调料渣，转大火翻炒收汁，汤汁粘稠即可出锅。",
        "instruction_en": "Remove spices, turn to high heat to reduce sauce until sticky. Serve.",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_002",
    "name_zh": "麻婆豆腐",
    "name_en": "Mapo Tofu",
    "cuisine": "sichuan",
    "tags": [
      "豆腐",
      "辣",
      "下饭",
      "tofu",
      "spicy"
    ],
    "time": 20,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/mapo_tofu.png",
    "ingredients": [
      {
        "name_zh": "嫩豆腐",
        "name_en": "Silken Tofu",
        "amount": "1块"
      },
      {
        "name_zh": "牛肉沫",
        "name_en": "Minced Beef",
        "amount": "100g"
      },
      {
        "name_zh": "郫县豆瓣酱",
        "name_en": "Pixian Bean Paste",
        "amount": "1.5勺"
      }
    ],
    "steps": [
      {
        "action": "切配",
        "instruction_zh": "豆腐切2厘米小块。",
        "instruction_en": "Cut tofu into 2cm cubes.",
        "hasTimer": false
      },
      {
        "action": "焯水",
        "instruction_zh": "水开后加少许盐，放入豆腐焯水去豆腥味，捞出备用。",
        "instruction_en": "Boil tofu in salted water to remove raw taste, drain.",
        "hasTimer": true,
        "timeSeconds": 120
      },
      {
        "action": "爆香",
        "instruction_zh": "油热下牛肉沫炒至酥香，加入豆瓣酱和豆豉炒出红油。",
        "instruction_en": "Fry minced beef until crispy, add bean paste and stir until red oil releases.",
        "hasTimer": false
      },
      {
        "action": "煮",
        "instruction_zh": "加一小碗水煮开，滑入豆腐，中火慢嘟3分钟。",
        "instruction_en": "Add a small bowl of water, slide in tofu, simmer for 3 mins.",
        "hasTimer": true,
        "timeSeconds": 180
      },
      {
        "action": "勾芡",
        "instruction_zh": "分三次淋入水淀粉推匀，最后撒上花椒粉和葱花出锅。",
        "instruction_en": "Thicken with starch slurry in 3 batches. Top with Sichuan peppercorn powder and scallions.",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_003",
    "name_zh": "宫保鸡丁",
    "name_en": "Kung Pao Chicken",
    "cuisine": "sichuan",
    "tags": [
      "鸡肉",
      "花生",
      "酸甜",
      "chicken",
      "peanut"
    ],
    "time": 25,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/kung_pao_chicken.png",
    "ingredients": [
      {
        "name_zh": "鸡腿肉",
        "name_en": "Chicken Thigh",
        "amount": "300g"
      },
      {
        "name_zh": "炸花生米",
        "name_en": "Fried Peanuts",
        "amount": "一把"
      },
      {
        "name_zh": "干辣椒/花椒",
        "name_en": "Dried Chili/Peppercorn",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "切配",
        "instruction_zh": "鸡肉切丁，加生抽、料酒、淀粉抓匀腌制10分钟。",
        "instruction_en": "Dice chicken, marinate with soy sauce, wine, starch for 10 mins.",
        "hasTimer": true,
        "timeSeconds": 600,
        "hasParallel": true,
        "parallelTask_zh": "调一个宫保汁（糖醋酱油水地瓜粉）。",
        "parallelTask_en": "Mix Kung Pao sauce (sugar, vinegar, soy sauce, starch)."
      },
      {
        "action": "翻炒",
        "instruction_zh": "热锅凉油，下鸡丁滑熟捞出。",
        "instruction_en": "Fry chicken in oil until cooked, take out.",
        "hasTimer": false
      },
      {
        "action": "爆香",
        "instruction_zh": "底油爆香干辣椒和花椒，下葱姜蒜末炒香。",
        "instruction_en": "Fry chili and peppercorn in remaining oil, add aromatics.",
        "hasTimer": false
      },
      {
        "action": "调匀",
        "instruction_zh": "倒入鸡丁，淋入调好的宫保汁大火翻炒收汁。",
        "instruction_en": "Add chicken back, pour in sauce and stir-fry on high heat.",
        "hasTimer": false
      },
      {
        "action": "混合",
        "instruction_zh": "关火，倒入炸花生米迅速翻匀出锅。",
        "instruction_en": "Turn off heat, toss in fried peanuts and serve quickly.",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_004",
    "name_zh": "清蒸鲈鱼",
    "name_en": "Steamed Sea Bass",
    "cuisine": "yue",
    "tags": [
      "海鲜",
      "清淡",
      "蒸",
      "seafood",
      "steamed"
    ],
    "time": 20,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/steamed_sea_bass.png",
    "ingredients": [
      {
        "name_zh": "鲈鱼",
        "name_en": "Sea Bass",
        "amount": "1条(约500g)"
      },
      {
        "name_zh": "蒸鱼豉油",
        "name_en": "Seasoned Soy Sauce",
        "amount": "3勺"
      },
      {
        "name_zh": "葱姜丝",
        "name_en": "Scallion & Ginger",
        "amount": "一把"
      }
    ],
    "steps": [
      {
        "action": "切配",
        "instruction_zh": "鱼身划刀，盘底和鱼腹塞入姜片葱段。",
        "instruction_en": "Score fish, stuff ginger and scallion into belly and under it.",
        "hasTimer": false
      },
      {
        "action": "蒸",
        "instruction_zh": "水烧开后上锅蒸 8 分钟，关火虚蒸 2 分钟。",
        "instruction_en": "Steam over boiling water for 8 mins, rest for 2 mins with heat off.",
        "hasTimer": true,
        "timeSeconds": 480,
        "hasParallel": true,
        "parallelTask_zh": "切大量的极细葱丝和姜丝。",
        "parallelTask_en": "Julienne scallions and ginger very finely."
      },
      {
        "action": "调味",
        "instruction_zh": "弃去蒸出来的腥水和旧葱姜，铺上新鲜葱姜丝。",
        "instruction_en": "Discard cooking liquid and old aromatics, top with fresh julienne.",
        "hasTimer": false
      },
      {
        "action": "炝油",
        "instruction_zh": "烧两大勺热油，呲啦一声泼在葱姜丝上，最后沿锅边淋入蒸鱼豉油即可。",
        "instruction_en": "Pour smoking hot oil over aromatics, then drizzle soy sauce around edges.",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_005",
    "name_zh": "经典培根蛋酱意面",
    "name_en": "Classic Spaghetti Carbonara",
    "cuisine": "italian",
    "tags": [
      "意面",
      "奶香",
      "西餐",
      "pasta",
      "bacon"
    ],
    "time": 20,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/spaghetti_carbonara.png",
    "ingredients": [
      {
        "name_zh": "意面",
        "name_en": "Spaghetti",
        "amount": "200g"
      },
      {
        "name_zh": "培根/风干猪颊肉",
        "name_en": "Pancetta/Bacon",
        "amount": "100g"
      },
      {
        "name_zh": "帕玛森干酪及蛋黄",
        "name_en": "Parmesan & Egg Yolks",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "煮",
        "instruction_zh": "海盐水中煮意面，比包装建议少煮1分钟以保持咬劲。",
        "instruction_en": "Boil pasta in salted water 1 min less than package instructions.",
        "hasTimer": true,
        "timeSeconds": 480,
        "hasParallel": true,
        "parallelTask_zh": "把蛋黄、全蛋、大量黑胡椒和擦碎的奶酪打匀成酱汁。",
        "parallelTask_en": "Whisk egg yolks, whole egg, black pepper, and grated cheese."
      },
      {
        "action": "煎",
        "instruction_zh": "冷锅下培根丁，小火煎出油脂至酥脆，关火倒出多余油脂。",
        "instruction_en": "Fry bacon from cold pan until crispy. Turn off heat, drain excess fat.",
        "hasTimer": false
      },
      {
        "action": "混匀",
        "instruction_zh": "将煮好的意面捞入装有培根的平底锅（离开火源），加两勺煮面水让温度微降。",
        "instruction_en": "Move pasta to bacon pan (off heat), add pasta water to cool slightly.",
        "hasTimer": false
      },
      {
        "action": "拌",
        "instruction_zh": "倒入蛋奶酪酱，疯狂搅拌至形成浓郁丝滑的酱汁，切忌开火变成炒鸡蛋！",
        "instruction_en": "Pour in egg mixture, stir vigorously off heat until creamy avoiding scrambled eggs!",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_006",
    "name_zh": "西式香煎西冷牛排配芦笋",
    "name_en": "Pan-Seared Sirloin Steak",
    "cuisine": "italian",
    "tags": [
      "牛排",
      "高蛋白",
      "西式",
      "steak",
      "meat"
    ],
    "time": 15,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/sirloin_steak.png",
    "ingredients": [
      {
        "name_zh": "西冷牛排",
        "name_en": "Sirloin Steak",
        "amount": "1块(厚2.5cm)"
      },
      {
        "name_zh": "黄油",
        "name_en": "Butter",
        "amount": "20g"
      },
      {
        "name_zh": "大蒜及迷迭香",
        "name_en": "Garlic & Rosemary",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "action": "静置",
        "instruction_zh": "牛排提前30分钟回温，用厨房纸吸干表面水分，撒海盐和黑胡椒。",
        "instruction_en": "Rest steak to room temp for 30 mins, pat dry, season with salt/pepper.",
        "hasTimer": true,
        "timeSeconds": 1800,
        "hasParallel": true,
        "parallelTask_zh": "清洗芦笋并切去老根，准备大蒜粒。",
        "parallelTask_en": "Wash asparagus, trim ends, prep garlic."
      },
      {
        "action": "煎",
        "instruction_zh": "铁锅烧至冒烟，倒少许油，下牛排每面煎1分钟至焦褐感。",
        "instruction_en": "Sear in smoking hot pan, 1 min per side until crusted.",
        "hasTimer": true,
        "timeSeconds": 120
      },
      {
        "action": "淋油",
        "instruction_zh": "转中火，加入黄油、大蒜、迷迭香，将融化的黄油不断淋在牛排上 1 分钟。",
        "instruction_en": "Reduce heat, add butter/garlic/rosemary, baste steak with melted butter for 1 min.",
        "hasTimer": true,
        "timeSeconds": 60
      },
      {
        "action": "静置",
        "instruction_zh": "牛排盛出在热盘子上静置 5 分钟锁住肉汁。原锅余温把芦笋简单煎熟。",
        "instruction_en": "Rest steak on a warm plate for 5 mins to lock juices. Cook asparagus in same pan.",
        "hasTimer": true,
        "timeSeconds": 300
      }
    ]
  },
  {
    "id": "r_007",
    "name_zh": "法式洋葱汤",
    "name_en": "French Onion Soup",
    "cuisine": "french",
    "tags": [
      "法餐",
      "汤",
      "经典",
      "soup",
      "french"
    ],
    "time": 50,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/french_onion_soup.png",
    "ingredients": [
      {
        "name_zh": "黄洋葱",
        "name_en": "Yellow Onions",
        "amount": "4个"
      },
      {
        "name_zh": "牛肉高汤",
        "name_en": "Beef Broth",
        "amount": "800ml"
      },
      {
        "name_zh": "法棍及芝士",
        "name_en": "Baguette & Gruyere",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "切配",
        "instruction_zh": "洋葱切成细丝。",
        "instruction_en": "Slice onions thinly.",
        "hasTimer": false
      },
      {
        "action": "翻炒",
        "instruction_zh": "锅中融化黄油，中小火极其耐心地炒洋葱丝，整个过程大概需要30分钟，直到彻底焦糖化变成深褐色。",
        "instruction_en": "Melt butter, caramelize onions patiently on low heat for 30 mins until deep amber.",
        "hasTimer": true,
        "timeSeconds": 1800,
        "hasParallel": true,
        "parallelTask_zh": "切片法棍，撒上厚厚的擦碎芝士备用。",
        "parallelTask_en": "Slice baguette, top with grated cheese."
      },
      {
        "action": "煮",
        "instruction_zh": "倒入少量白葡萄酒除锅底焦痕，然后倒入高汤慢炖 15 分钟。",
        "instruction_en": "Deglaze with white wine, add broth and simmer for 15 mins.",
        "hasTimer": true,
        "timeSeconds": 900
      },
      {
        "action": "烤",
        "instruction_zh": "将汤盛入烤碗，盖上法棍和芝士片，放入烤箱 200 度烤 5 分钟至芝士融化焦黄。",
        "instruction_en": "Ladle soup into bowls, top with bread/cheese, broil at 200°C for 5 mins until bubbly.",
        "hasTimer": true,
        "timeSeconds": 300
      }
    ]
  },
  {
    "id": "r_008",
    "name_zh": "地道美味的鲁菜风味 - 8",
    "name_en": "Authentic Lu Dish - 8",
    "cuisine": "lu",
    "tags": [
      "美味",
      "快速",
      "delish",
      "fast"
    ],
    "time": 41,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "神秘食材",
        "name_en": "Mystery Ingredient",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "action": "准备",
        "instruction_zh": "将所有食材备好。",
        "instruction_en": "Prepare all ingredients.",
        "hasTimer": false
      },
      {
        "action": "烹饪",
        "instruction_zh": "大火翻炒即可。",
        "instruction_en": "Stir fry on high heat.",
        "hasTimer": true,
        "timeSeconds": 120
      }
    ]
  },
  {
    "id": "r_009",
    "name_zh": "地道美味的川菜精选 - 9",
    "name_en": "Authentic Sichuan Dish - 9",
    "cuisine": "sichuan",
    "tags": [
      "美味",
      "快速",
      "delish",
      "fast"
    ],
    "time": 40,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "神秘食材",
        "name_en": "Mystery Ingredient",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "action": "准备",
        "instruction_zh": "将所有食材备好。",
        "instruction_en": "Prepare all ingredients.",
        "hasTimer": false
      },
      {
        "action": "烹饪",
        "instruction_zh": "大火翻炒即可。",
        "instruction_en": "Stir fry on high heat.",
        "hasTimer": true,
        "timeSeconds": 120
      }
    ]
  },
  {
    "id": "r_010",
    "name_zh": "地道美味的川菜精选 - 10",
    "name_en": "Authentic Sichuan Dish - 10",
    "cuisine": "sichuan",
    "tags": [
      "美味",
      "快速",
      "delish",
      "fast"
    ],
    "time": 26,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "神秘食材",
        "name_en": "Mystery Ingredient",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "action": "准备",
        "instruction_zh": "将所有食材备好。",
        "instruction_en": "Prepare all ingredients.",
        "hasTimer": false
      },
      {
        "action": "烹饪",
        "instruction_zh": "大火翻炒即可。",
        "instruction_en": "Stir fry on high heat.",
        "hasTimer": true,
        "timeSeconds": 120
      }
    ]
  },
  {
    "id": "r_011",
    "name_zh": "地道美味的鲁菜风味 - 11",
    "name_en": "Authentic Lu Dish - 11",
    "cuisine": "lu",
    "tags": [
      "美味",
      "快速",
      "delish",
      "fast"
    ],
    "time": 41,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "神秘食材",
        "name_en": "Mystery Ingredient",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "action": "准备",
        "instruction_zh": "将所有食材备好。",
        "instruction_en": "Prepare all ingredients.",
        "hasTimer": false
      },
      {
        "action": "烹饪",
        "instruction_zh": "大火翻炒即可。",
        "instruction_en": "Stir fry on high heat.",
        "hasTimer": true,
        "timeSeconds": 120
      }
    ]
  },
  {
    "id": "r_012",
    "name_zh": "地道美味的浪漫法餐 - 12",
    "name_en": "Authentic French Dish - 12",
    "cuisine": "french",
    "tags": [
      "美味",
      "快速",
      "delish",
      "fast"
    ],
    "time": 33,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "神秘食材",
        "name_en": "Mystery Ingredient",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "action": "准备",
        "instruction_zh": "将所有食材备好。",
        "instruction_en": "Prepare all ingredients.",
        "hasTimer": false
      },
      {
        "action": "烹饪",
        "instruction_zh": "大火翻炒即可。",
        "instruction_en": "Stir fry on high heat.",
        "hasTimer": true,
        "timeSeconds": 120
      }
    ]
  },
  {
    "id": "r_013",
    "name_zh": "地道美味的鲁菜风味 - 13",
    "name_en": "Authentic Lu Dish - 13",
    "cuisine": "lu",
    "tags": [
      "美味",
      "快速",
      "delish",
      "fast"
    ],
    "time": 45,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "神秘食材",
        "name_en": "Mystery Ingredient",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "action": "准备",
        "instruction_zh": "将所有食材备好。",
        "instruction_en": "Prepare all ingredients.",
        "hasTimer": false
      },
      {
        "action": "烹饪",
        "instruction_zh": "大火翻炒即可。",
        "instruction_en": "Stir fry on high heat.",
        "hasTimer": true,
        "timeSeconds": 120
      }
    ]
  },
  {
    "id": "r_014",
    "name_zh": "地道美味的鲁菜风味 - 14",
    "name_en": "Authentic Lu Dish - 14",
    "cuisine": "lu",
    "tags": [
      "美味",
      "快速",
      "delish",
      "fast"
    ],
    "time": 27,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "神秘食材",
        "name_en": "Mystery Ingredient",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "action": "准备",
        "instruction_zh": "将所有食材备好。",
        "instruction_en": "Prepare all ingredients.",
        "hasTimer": false
      },
      {
        "action": "烹饪",
        "instruction_zh": "大火翻炒即可。",
        "instruction_en": "Stir fry on high heat.",
        "hasTimer": true,
        "timeSeconds": 120
      }
    ]
  },
  {
    "id": "r_015",
    "name_zh": "地道美味的鲁菜风味 - 15",
    "name_en": "Authentic Lu Dish - 15",
    "cuisine": "lu",
    "tags": [
      "美味",
      "快速",
      "delish",
      "fast"
    ],
    "time": 20,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "神秘食材",
        "name_en": "Mystery Ingredient",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "action": "准备",
        "instruction_zh": "将所有食材备好。",
        "instruction_en": "Prepare all ingredients.",
        "hasTimer": false
      },
      {
        "action": "烹饪",
        "instruction_zh": "大火翻炒即可。",
        "instruction_en": "Stir fry on high heat.",
        "hasTimer": true,
        "timeSeconds": 120
      }
    ]
  }
];
