const recipesData_v2 = [
  {
    "id": "i01",
    "name_zh": "培根蛋酱意面",
    "name_en": "Classic Carbonara",
    "cuisine": "italian",
    "tags": [
      "pasta",
      "cheese",
      "quick"
    ],
    "time": 15,
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
        "name_zh": "培根",
        "name_en": "Pancetta",
        "amount": "100g"
      },
      {
        "name_zh": "芝士与蛋黄",
        "name_en": "Cheese & Yolks",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "煮面",
        "instruction_zh": "盐水煮意面8分钟。",
        "instruction_en": "Boil pasta for 8 mins.",
        "hasTimer": true,
        "timeSeconds": 480
      },
      {
        "action": "煎肉",
        "instruction_zh": "小火冷锅煎脆培根片。",
        "instruction_en": "Fry bacon from cold pan.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "离火",
        "instruction_zh": "意面连同少许面汤倒入培根锅，关键是必须关火。",
        "instruction_en": "Move pasta to bacon pan off heat.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "乳化",
        "instruction_zh": "疯狂拌入蛋黄芝士糊，利用余温烫成金黄浓酱。",
        "instruction_en": "Vigorously stir in yolk mix until creamy.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "i02",
    "name_zh": "番茄肉酱意面",
    "name_en": "Pasta Bolognese",
    "cuisine": "italian",
    "tags": [
      "pasta",
      "beef",
      "classic"
    ],
    "time": 90,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "牛肉糜",
        "name_en": "Ground Beef",
        "amount": "300g"
      },
      {
        "name_zh": "洋葱胡萝卜西芹",
        "name_en": "Mirepoix",
        "amount": "各半个"
      },
      {
        "name_zh": "番茄罐头",
        "name_en": "Canned Tomato",
        "amount": "1罐"
      }
    ],
    "steps": [
      {
        "action": "炒底",
        "instruction_zh": "黄油慢炒洋葱胡萝卜西芹末10分钟至极软。",
        "instruction_en": "Saute mirepoix slowly till soft.",
        "hasTimer": true,
        "timeSeconds": 600
      },
      {
        "action": "炒肉",
        "instruction_zh": "下肉糜炒至变色收干水，加红酒挥发。",
        "instruction_en": "Brown meat, deglaze with wine.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "慢炖",
        "instruction_zh": "倒入番茄泥盖上小火慢炖至少1小时以上。",
        "instruction_en": "Add tomato, simmer for 1 hour.",
        "hasTimer": true,
        "timeSeconds": 3600
      },
      {
        "action": "拌面",
        "instruction_zh": "肉酱浓缩后与宽面拌匀，撒帕玛森干酪。",
        "instruction_en": "Toss with pasta and parmesan.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "i03",
    "name_zh": "蒜香橄榄油意面",
    "name_en": "Aglio e Olio",
    "cuisine": "italian",
    "tags": [
      "pasta",
      "vegetarian",
      "quick"
    ],
    "time": 10,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "意面",
        "name_en": "Spaghetti",
        "amount": "200g"
      },
      {
        "name_zh": "初榨橄榄油",
        "name_en": "Olive Oil",
        "amount": "50ml"
      },
      {
        "name_zh": "大蒜与干辣椒",
        "name_en": "Garlic & Chili",
        "amount": "大量"
      }
    ],
    "steps": [
      {
        "action": "煮面",
        "instruction_zh": "水烧开加盐煮意面。保留煮面水！",
        "instruction_en": "Boil pasta, KEEP pasta water.",
        "hasTimer": true,
        "timeSeconds": 450
      },
      {
        "action": "熬油",
        "instruction_zh": "冷锅下蒜片橄榄油，极其小火慢煎至微黄。",
        "instruction_en": "Slowly fry garlic in cold oil till pale gold.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "乳化",
        "instruction_zh": "下干辣椒，马上倒小半碗煮面水与油剧烈乳化。",
        "instruction_en": "Add chili, instantly add pasta water to emulsify.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "裹汁",
        "instruction_zh": "捞出意面放入锅中猛火翻炒挂汁。",
        "instruction_en": "Toss pasta vigorously on high heat to glaze.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "i04",
    "name_zh": "平底锅玛格丽特披萨",
    "name_en": "Pan Margherita Pizza",
    "cuisine": "italian",
    "tags": [
      "pizza",
      "cheese"
    ],
    "time": 20,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/pizza.png",
    "ingredients": [
      {
        "name_zh": "披萨面饼",
        "name_en": "Pizza Dough",
        "amount": "1张"
      },
      {
        "name_zh": "新鲜水牛奶酪",
        "name_en": "Fresh Mozzarella",
        "amount": "1球"
      },
      {
        "name_zh": "罗勒与番茄泥",
        "name_en": "Basil & Tomato",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "烙饼",
        "instruction_zh": "极其热的平底锅干烙饼底至焦脆冒泡。",
        "instruction_en": "Dry sear dough in extremely hot pan till charred.",
        "hasTimer": true,
        "timeSeconds": 180
      },
      {
        "action": "涂酱",
        "instruction_zh": "关小火，饼面涂上薄薄的无调味番茄泥。",
        "instruction_en": "Lower heat, spread thin tomato paste.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "铺料",
        "instruction_zh": "撕上奶酪球，进烤箱最上层最高温炙烤3分钟。",
        "instruction_en": "Add mozzarella, broil in oven on max heat 3 mins.",
        "hasTimer": true,
        "timeSeconds": 180
      },
      {
        "action": "点缀",
        "instruction_zh": "出炉立刻撒上新鲜罗勒叶并淋橄榄油。",
        "instruction_en": "Top with fresh basil and olive oil.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "i05",
    "name_zh": "提拉米苏",
    "name_en": "Tiramisu",
    "cuisine": "italian",
    "tags": [
      "dessert",
      "coffee"
    ],
    "time": 30,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/tiramisu.png",
    "ingredients": [
      {
        "name_zh": "马斯卡彭干酪",
        "name_en": "Mascarpone",
        "amount": "250g"
      },
      {
        "name_zh": "手指饼干",
        "name_en": "Ladyfingers",
        "amount": "1包"
      },
      {
        "name_zh": "浓缩咖啡与可可粉",
        "name_en": "Espresso & Cocoa",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "打发",
        "instruction_zh": "蛋黄加糖隔水加热打至发白，拌入马斯卡彭。",
        "instruction_en": "Whisk yolks with sugar over heat, fold in mascarpone.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "打发蛋清",
        "instruction_zh": "蛋清打起泡，分次轻轻混入芝士糊。",
        "instruction_en": "Whip egg whites and fold gently into cheese mix.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "蘸酒",
        "instruction_zh": "手指饼干快速浸泡冷却的咖啡酒液，铺入模具。",
        "instruction_en": "Quickly dip ladyfingers in espresso/liqueur, line dish.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "冷藏",
        "instruction_zh": "铺一层糊一层饼干，放冰箱冷藏至少4小时以上。",
        "instruction_en": "Layer paste and biscuits, refrigerate 4+ hrs.",
        "hasTimer": true,
        "timeSeconds": 14400
      }
    ]
  },
  {
    "id": "i06",
    "name_zh": "蘑菇烩饭",
    "name_en": "Mushroom Risotto",
    "cuisine": "italian",
    "tags": [
      "rice",
      "vegetarian"
    ],
    "time": 35,
    "difficulty_zh": "高级",
    "difficulty_en": "Hard",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "意大利米(Arborio)",
        "name_en": "Risotto Rice",
        "amount": "200g"
      },
      {
        "name_zh": "鲜蘑菇/牛肝菌",
        "name_en": "Mushrooms/Porcini",
        "amount": "200g"
      },
      {
        "name_zh": "鸡高汤",
        "name_en": "Chicken Stock",
        "amount": "1L"
      }
    ],
    "steps": [
      {
        "action": "炒菇",
        "instruction_zh": "黄油炒香切片的蘑菇，盛出备用。",
        "instruction_en": "Saute mushrooms in butter, set aside.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "炒米",
        "instruction_zh": "洋葱碎炒软，倒入生米拌炒裹油，加白葡萄酒挥发。",
        "instruction_en": "Saute onions, toast raw rice, deglaze with wine.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "慢熬",
        "instruction_zh": "保持高汤微沸，每次只加一汤勺，不停搅拌至米吸干再加，持续20分钟。",
        "instruction_en": "Gradually ladle hot stock, stirring constantly for 20 mins.",
        "hasTimer": true,
        "timeSeconds": 1200
      },
      {
        "action": "收汁",
        "instruction_zh": "关火混入蘑菇、大块黄油和超多干酪，疯狂翻拌至泥石流质感。",
        "instruction_en": "Off heat, vigorous stir in butter/cheese till fluid.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "i07",
    "name_zh": "千层面",
    "name_en": "Lasagna",
    "cuisine": "italian",
    "tags": [
      "pasta",
      "cheese",
      "beef"
    ],
    "time": 90,
    "difficulty_zh": "高级",
    "difficulty_en": "Hard",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "千层饼皮",
        "name_en": "Lasagna Sheets",
        "amount": "1包"
      },
      {
        "name_zh": "肉酱",
        "name_en": "Meat Ragu",
        "amount": "500g"
      },
      {
        "name_zh": "白汁(Bechamel)",
        "name_en": "Bechamel Sauce",
        "amount": "400ml"
      }
    ],
    "steps": [
      {
        "action": "熬白汁",
        "instruction_zh": "黄油面粉炒香，分次加牛奶熬至浓稠无颗粒。",
        "instruction_en": "Make bechamel with butter, flour, and milk.",
        "hasTimer": true,
        "timeSeconds": 600
      },
      {
        "action": "铺层",
        "instruction_zh": "底层铺肉酱，放面皮，再涂白汁和肉酱，往复堆叠。",
        "instruction_en": "Layer meat sauce, pasta, bechamel, repeat.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "撒芝士",
        "instruction_zh": "顶层盖上面皮，涂满厚厚白汁和大量马苏里拉芝士。",
        "instruction_en": "Top with pasta, thick bechamel, and mozzarella.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "烘烤",
        "instruction_zh": "锡纸盖住烤20分钟，揭开再烤15分钟至焦黄。",
        "instruction_en": "Bake covered 20m, uncovered 15m till golden.",
        "hasTimer": true,
        "timeSeconds": 2100
      }
    ]
  },
  {
    "id": "i08",
    "name_zh": "意式番茄罗勒烤面包",
    "name_en": "Tomato Bruschetta",
    "cuisine": "italian",
    "tags": [
      "appetizer",
      "vegetarian"
    ],
    "time": 15,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "法棍/乡村包",
        "name_en": "Baguette",
        "amount": "半根"
      },
      {
        "name_zh": "成熟番茄",
        "name_en": "Ripe Tomatoes",
        "amount": "2个"
      },
      {
        "name_zh": "大蒜与罗勒",
        "name_en": "Garlic & Basil",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "切丁",
        "instruction_zh": "番茄切微小的丁，加罗勒碎、橄榄油、盐和黑胡椒拌匀腌制。",
        "instruction_en": "Dice tomatoes, mix with basil, oil, salt, pepper.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "烤包",
        "instruction_zh": "面包切厚片，烤箱200度烤脆。",
        "instruction_en": "Slice bread, toast in oven till crisp.",
        "hasTimer": true,
        "timeSeconds": 300
      },
      {
        "action": "抹蒜",
        "instruction_zh": "趁热用生蒜瓣的切面疯狂摩擦硬硬的面包表面。",
        "instruction_en": "Rub toasted bread vigorously with raw garlic clove.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "装盘",
        "instruction_zh": "铺上番茄丁，淋上剩下的汁水即可食用。",
        "instruction_en": "Top with tomato mix and juices.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "i09",
    "name_zh": "卡普里沙拉",
    "name_en": "Caprese Salad",
    "cuisine": "italian",
    "tags": [
      "salad",
      "vegetarian"
    ],
    "time": 5,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/salad.png",
    "ingredients": [
      {
        "name_zh": "新鲜水牛奶酪",
        "name_en": "Fresh Mozzarella",
        "amount": "1大球"
      },
      {
        "name_zh": "大番茄",
        "name_en": "Large Tomatoes",
        "amount": "2个"
      },
      {
        "name_zh": "罗勒及黑醋",
        "name_en": "Basil & Balsamic",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "切片",
        "instruction_zh": "将番茄和马苏里拉奶酪切成厚度均匀的圆片。",
        "instruction_en": "Slice tomatoes and mozzarella evenly.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "摆盘",
        "instruction_zh": "将番茄、奶酪、罗勒叶交替层叠摆放成环形。",
        "instruction_en": "Arrange tomato, cheese, basil in an alternating ring.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "调味",
        "instruction_zh": "撒海盐黑胡椒，大量淋上优质冷榨橄榄油和浓缩黑醋汁。",
        "instruction_en": "Season, drizzle generously with EVOO and balsamic glaze.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "i10",
    "name_zh": "意式蔬菜汤",
    "name_en": "Minestrone Soup",
    "cuisine": "italian",
    "tags": [
      "soup",
      "vegetarian"
    ],
    "time": 40,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "杂菜(胡萝卜西葫芦土豆)",
        "name_en": "Mixed Veggies",
        "amount": "适量"
      },
      {
        "name_zh": "白扁豆",
        "name_en": "Cannellini Beans",
        "amount": "1罐"
      },
      {
        "name_zh": "小通心粉",
        "name_en": "Short Pasta",
        "amount": "一把"
      }
    ],
    "steps": [
      {
        "action": "炒底",
        "instruction_zh": "橄榄油炒香洋葱碎、大蒜和培根丁。",
        "instruction_en": "Saute onion, garlic, and pancetta in oil.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "超菜",
        "instruction_zh": "所有蔬菜切成一致的小丁，下锅翻炒至微微变软。",
        "instruction_en": "Dice all veggies uniformly, saute until slightly soft.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "煨煮",
        "instruction_zh": "加入去皮番茄块和鸡汤大火煮沸，转小火慢煨20分钟。",
        "instruction_en": "Add tomatoes/broth, bring to boil, simmer 20m.",
        "hasTimer": true,
        "timeSeconds": 1200
      },
      {
        "action": "下面",
        "instruction_zh": "直接把干通心粉和白扁豆丢进汤里，继续煮10分钟至面软。",
        "instruction_en": "Add dry pasta and beans, boil 10m till pasta cooked.",
        "hasTimer": true,
        "timeSeconds": 600
      }
    ]
  },
  {
    "id": "f01",
    "name_zh": "法式洋葱汤",
    "name_en": "French Onion Soup",
    "cuisine": "french",
    "tags": [
      "soup",
      "cheese"
    ],
    "time": 60,
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
        "name_zh": "牛肉清汤",
        "name_en": "Beef Broth",
        "amount": "800ml"
      },
      {
        "name_zh": "法棍及干酪",
        "name_en": "Baguette & Gruyere",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "切丝",
        "instruction_zh": "洋葱全部切极其细的丝。",
        "instruction_en": "Slice onions extremely thinly.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "焦化",
        "instruction_zh": "黄油小火耐心地炒洋葱丝至少30分钟，直到变成深褐色的焦糖状酱泥！",
        "instruction_en": "Patiently caramelize onions in butter on low for 30m till deep amber.",
        "hasTimer": true,
        "timeSeconds": 1800
      },
      {
        "action": "熬煮",
        "instruction_zh": "洒面粉炒匀，倒入半杯白葡萄酒和牛肉汤炖煮15分钟。",
        "instruction_en": "Deglaze with wine, add broth and simmer 15 mins.",
        "hasTimer": true,
        "timeSeconds": 900
      },
      {
        "action": "顶层烤",
        "instruction_zh": "汤盛入烤碗，顶上铺薄脆法棍和海量芝士，烤箱最高温炙烤至焦黄沸腾。",
        "instruction_en": "Top with bread and cheese, broil till meltingly golden.",
        "hasTimer": true,
        "timeSeconds": 300
      }
    ]
  },
  {
    "id": "f02",
    "name_zh": "普罗旺斯炖菜",
    "name_en": "Ratatouille",
    "cuisine": "french",
    "tags": [
      "veggie",
      "healthy"
    ],
    "time": 50,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "西葫芦茄子大番茄",
        "name_en": "Zucchini/Eggplant/Tomato",
        "amount": "各1根"
      },
      {
        "name_zh": "红椒与洋葱",
        "name_en": "Bell Pepper & Onion",
        "amount": "适量"
      },
      {
        "name_zh": "香草",
        "name_en": "Herbs de Provence",
        "amount": "大量"
      }
    ],
    "steps": [
      {
        "action": "切片",
        "instruction_zh": "各种颜色的蔬菜切成厚度绝对一致的薄片。",
        "instruction_en": "Slice squashes and tomatoes into perfectly uniform thin rounds.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "炒底",
        "instruction_zh": "将洋葱青椒和碎番茄炒成浓郁的红酱铺在烤盘底。",
        "instruction_en": "Saute onions/peppers/tomatoes into red sauce, spread in dish.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "排列",
        "instruction_zh": "将蔬菜片红绿相间交错叠放排成美丽的螺旋状。",
        "instruction_en": "Arrange vegetable rounds in alternating spirals.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "烘烤",
        "instruction_zh": "淋橄榄油盖上锡纸180度烤30分钟，揭开锡纸再烤15分钟脱水。",
        "instruction_en": "Bake covered 30m, uncovered 15m to condense flavor.",
        "hasTimer": true,
        "timeSeconds": 2700
      }
    ]
  },
  {
    "id": "f03",
    "name_zh": "勃艮第炖牛肉",
    "name_en": "Beef Bourguignon",
    "cuisine": "french",
    "tags": [
      "beef",
      "stew",
      "royal"
    ],
    "time": 180,
    "difficulty_zh": "高级",
    "difficulty_en": "Hard",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "牛腱肉",
        "name_en": "Beef Chuck",
        "amount": "800g"
      },
      {
        "name_zh": "勃艮第红酒",
        "name_en": "Burgundy Wine",
        "amount": "1瓶"
      },
      {
        "name_zh": "小洋葱与白蘑菇",
        "name_en": "Pearl Onions/Mushrooms",
        "amount": "各少许"
      }
    ],
    "steps": [
      {
        "action": "完美煎肉",
        "instruction_zh": "肉表面按干，锅极热猛煎大块牛肉至四周形成彻底的焦褐硬壳。",
        "instruction_en": "Absolute dry beef, sear intensely until deep brown crust all over.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "呛酒",
        "instruction_zh": "把肉和锅里的蔬菜混合，加入整瓶红酒和牛肉高汤。",
        "instruction_en": "Combine meat and mirepoix, pour entire bottle of red wine and stock.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "漫长慢炖",
        "instruction_zh": "加入百里香和香叶，连锅移入烤箱150度烤炖长达3小时至酥烂。",
        "instruction_en": "Add herbs, transfer to 150C oven for 3 hours covered.",
        "hasTimer": true,
        "timeSeconds": 10800
      },
      {
        "action": "配菜",
        "instruction_zh": "开盖大火收稠浓郁的红酒汁，混入单独炒熟的小洋葱和白蘑菇。",
        "instruction_en": "Reduce sauce on stove, mix in separately sauteed pearl onions/mushrooms.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "f04",
    "name_zh": "白汁奶油炖鸡",
    "name_en": "Chicken Fricassee",
    "cuisine": "french",
    "tags": [
      "chicken",
      "creamy"
    ],
    "time": 40,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "鸡腿块",
        "name_en": "Chicken Thighs",
        "amount": "4块"
      },
      {
        "name_zh": "白蘑菇",
        "name_en": "White Mushrooms",
        "amount": "200g"
      },
      {
        "name_zh": "淡奶油/蛋黄",
        "name_en": "Cream & Yolks",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "白煎",
        "instruction_zh": "用黄油中小火慢慢把鸡腿煎熟但绝对不要上色（保持雪白）。",
        "instruction_en": "Saute chicken in butter without letting it brown.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "炖煮",
        "instruction_zh": "加入蘑菇，倒半杯白葡萄酒蒸发，倒入鸡汤勉强没过肉慢煮20分钟。",
        "instruction_en": "Add mushrooms, white wine, chicken broth and simmer 20m.",
        "hasTimer": true,
        "timeSeconds": 1200
      },
      {
        "action": "打乳液",
        "instruction_zh": "在碗里把淡奶油和蛋黄搅匀。千万不要直接倒进开水锅里！",
        "instruction_en": "Whisk cream and yolks in a bowl. Do not boil directly!",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "离火勾厚",
        "instruction_zh": "关火，将汤一点点舀入碗里缓温，再全倒回锅内搅拌成天鹅绒般的纯白浓汤。",
        "instruction_en": "Off heat, temper liaison with hot broth, then return to pot forming velvety sauce.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "f05",
    "name_zh": "洛林法式乡村咸派",
    "name_en": "Quiche Lorraine",
    "cuisine": "french",
    "tags": [
      "pie",
      "brunch",
      "bacon"
    ],
    "time": 60,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "法式酥皮底",
        "name_en": "Pie Crust",
        "amount": "1片"
      },
      {
        "name_zh": "厚切培根",
        "name_en": "Thick Bacon",
        "amount": "150g"
      },
      {
        "name_zh": "淡奶油/牛奶/鸡蛋",
        "name_en": "Cream/Milk/Eggs",
        "amount": "超大量"
      }
    ],
    "steps": [
      {
        "action": "盲烤派皮",
        "instruction_zh": "派皮铺在模具上用重物压住200度先空烤15分钟定型。",
        "instruction_en": "Blind bake pie crust at 200C for 15m.",
        "hasTimer": true,
        "timeSeconds": 900
      },
      {
        "action": "炒馅",
        "instruction_zh": "小火炒香厚培根丁和一点点洋葱丝，铺在派底。",
        "instruction_en": "Fry thick bacon bits, spread onto baked pie crust.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "蛋液",
        "instruction_zh": "把3个蛋、大量淡奶油、少许现磨粗黑胡椒搅打均匀倒进派里。",
        "instruction_en": "Whisk eggs and lots of heavy cream, pour inside pie.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "烘烤",
        "instruction_zh": "撒上一层格律耶尔干酪，放入180度烤箱烤至表面金黄内部微颤即可。",
        "instruction_en": "Top with cheese, bake at 180C till golden but jiggly in center.",
        "hasTimer": true,
        "timeSeconds": 1800
      }
    ]
  },
  {
    "id": "f06",
    "name_zh": "法式薄饼可丽饼",
    "name_en": "Crêpes",
    "cuisine": "french",
    "tags": [
      "dessert",
      "pancake"
    ],
    "time": 15,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "低筋面粉",
        "name_en": "Cake Flour",
        "amount": "125g"
      },
      {
        "name_zh": "温牛奶",
        "name_en": "Warm Milk",
        "amount": "250ml"
      },
      {
        "name_zh": "鸡蛋",
        "name_en": "Eggs",
        "amount": "2只"
      },
      {
        "name_zh": "融化黄油",
        "name_en": "Melted Butter",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "action": "调糊",
        "instruction_zh": "所有材料混合搅打至绝对没有任何颗粒的水样面糊，冷藏静置30分钟极佳。",
        "instruction_en": "Whisk all to a watery lump-free batter. Rest 30m if possible.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "摊饼",
        "instruction_zh": "平底锅微热抹黄油，倒入一小勺面糊立刻转动锅子形成极薄的圆形大饼。",
        "instruction_en": "Pour ladle of batter into warm buttered pan, swirl to paper thin circle.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "单面烙",
        "instruction_zh": "烙30秒边缘微微卷起时迅速翻面再烙10秒即出锅。",
        "instruction_en": "Cook 30s till edges curl, flip quickly for 10s.",
        "hasTimer": true,
        "timeSeconds": 40
      },
      {
        "action": "搭配",
        "instruction_zh": "涂上 Nutella 巧克力酱抹上切片香蕉草莓，折叠成三角片食用。",
        "instruction_en": "Spread nutella/fruits, fold into triangles.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "f07",
    "name_zh": "尼斯沙拉",
    "name_en": "Salade Niçoise",
    "cuisine": "french",
    "tags": [
      "salad",
      "healthy"
    ],
    "time": 15,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "吞拿鱼罐头",
        "name_en": "Canned Tuna",
        "amount": "1听"
      },
      {
        "name_zh": "白煮蛋",
        "name_en": "Hard Boiled Eggs",
        "amount": "2个"
      },
      {
        "name_zh": "四季豆/小番茄/黑橄榄",
        "name_en": "Beans/Tomatoes/Olives",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "焯水",
        "instruction_zh": "四季豆折断入盐水焯熟，立刻过冰水保持脆绿翠性。",
        "instruction_en": "Blanch green beans, shock in ice water.",
        "hasTimer": true,
        "timeSeconds": 120
      },
      {
        "action": "煮蛋",
        "instruction_zh": "鸡蛋水煮7分半钟做成溏心白煮蛋，一切四瓣。",
        "instruction_en": "Boil eggs 7.5 mins for soft center, quarter them.",
        "hasTimer": true,
        "timeSeconds": 450
      },
      {
        "action": "摆盘",
        "instruction_zh": "沙拉碗底铺生菜，将吞拿鱼块、鸡蛋、四季豆、黑橄榄、小番茄按区域整齐摆放。",
        "instruction_en": "Arrange tuna, eggs, beans, olives, tomatoes beautifully on lettuce.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "淋汁",
        "instruction_zh": "用橄榄油、第戎芥末酱、红酒醋搅匀成油醋汁，粗放地淋在表面。",
        "instruction_en": "Vinaigrette: olive oil, Dijon mustard, red wine vinegar. Drizzle.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "f08",
    "name_zh": "香煎鸭胸肉配香橙汁",
    "name_en": "Duck à l'Orange",
    "cuisine": "french",
    "tags": [
      "duck",
      "fruit",
      "fancy"
    ],
    "time": 30,
    "difficulty_zh": "高级",
    "difficulty_en": "Hard",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "鸭胸肉",
        "name_en": "Duck Breast",
        "amount": "1块"
      },
      {
        "name_zh": "鲜橙子",
        "name_en": "Fresh Oranges",
        "amount": "2个"
      },
      {
        "name_zh": "君度橙酒或白兰地",
        "name_en": "Grand Marnier",
        "amount": "一小勺"
      }
    ],
    "steps": [
      {
        "action": "切花刀",
        "instruction_zh": "鸭皮表面切极密的菱形花刀（绝不能切到瘦肉）。",
        "instruction_en": "Score duck skin in tight diamond pattern without cutting meat.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "逼油",
        "instruction_zh": "冷锅！鸭皮朝下放入，极其微小的火慢煎15分钟逼出海量鸭油，至皮脆如纸。",
        "instruction_en": "COLD PAN, skin down. Render fat critically on lowest heat for 15m till crispy.",
        "hasTimer": true,
        "timeSeconds": 900
      },
      {
        "action": "煎肉",
        "instruction_zh": "翻面大火煎鸭肉那一面2分钟锁住粉色肉汁。鸭胸起锅静置5分钟！",
        "instruction_en": "Flip, sear meat side on high for 2m. Remove and REST breast 5m.",
        "hasTimer": true,
        "timeSeconds": 120
      },
      {
        "action": "法式橙汁",
        "instruction_zh": "倒掉鸭油，用橙汁、橙皮屑、一点糖和酒在锅中熬煮至粘稠发光，切片淋汁！",
        "instruction_en": "Deglaze with orange juice, zest, liquor. Reduce to glaze and pour over sliced duck.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "f09",
    "name_zh": "克拉芙缇樱桃烤饼",
    "name_en": "Cherry Clafoutis",
    "cuisine": "french",
    "tags": [
      "dessert",
      "fruit"
    ],
    "time": 45,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "新鲜黑樱桃",
        "name_en": "Fresh Dark Cherries",
        "amount": "300g"
      },
      {
        "name_zh": "全脂牛奶及淡奶油",
        "name_en": "Milk & Cream",
        "amount": "各半杯"
      },
      {
        "name_zh": "鸡蛋/面粉/糖",
        "name_en": "Eggs/Flour/Sugar",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "洗果",
        "instruction_zh": "新鲜樱桃洗净（正宗法式不忍心去核保留杏仁香，但为了牙齿建议去核）。",
        "instruction_en": "Wash cherries (traditionally unpitted for almond flavor, but pit them safely).",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "倒液",
        "instruction_zh": "其实就是加厚的可丽饼糊：鸡蛋面粉牛奶糖搅匀即可。",
        "instruction_en": "Whisk eggs, flow, milk, sugar into a thick crepe-like batter.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "烘烤",
        "instruction_zh": "烤碗抹黄油，倒入樱桃，淋满面糊，180度烤35分钟至膨胀且边缘微焦。",
        "instruction_en": "Butter dish, add cherries, pour batter. Bake 180C 35m till puffed/golden.",
        "hasTimer": true,
        "timeSeconds": 2100
      },
      {
        "action": "撒粉",
        "instruction_zh": "稍稍放凉塌陷后，表面筛上厚厚的糖霜。温热或冷藏食用皆可。",
        "instruction_en": "Cool slightly, dust heavily with powdered sugar.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "f10",
    "name_zh": "法式火腿干酪三明治",
    "name_en": "Croque Monsieur",
    "cuisine": "french",
    "tags": [
      "sandwich",
      "cheese"
    ],
    "time": 20,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "厚切吐司",
        "name_en": "Thick Toast",
        "amount": "2片"
      },
      {
        "name_zh": "巴黎火腿片",
        "name_en": "Ham Slices",
        "amount": "2张"
      },
      {
        "name_zh": "格吕耶尔干酪与白汁",
        "name_en": "Gruyere & Bechamel",
        "amount": "大量"
      }
    ],
    "steps": [
      {
        "action": "抹酱",
        "instruction_zh": "每片吐司内侧抹上一层浓浓的法式白汁（黄油面粉牛奶熬的）。",
        "instruction_en": "Spread béchamel sauce on inside of both bread slices.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "叠料",
        "instruction_zh": "铺上火腿片，大把撒入擦碎的格吕耶尔干酪，合上面包。",
        "instruction_en": "Add ham, pile on grated Gruyere, close sandwich.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "顶层豪华",
        "instruction_zh": "在三明治的最顶层再抹一层重重的白汁并疯狂堆满干酪。",
        "instruction_en": "Spread MORE bechamel and heaps of cheese on the TOP outer crust.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "炙烤",
        "instruction_zh": "入烤箱最高温烤制到顶层干酪完全熔化起泡焦黄成壳。",
        "instruction_en": "Broil on high until top cheese bubbles into an intensely golden crust.",
        "hasTimer": true,
        "timeSeconds": 300
      }
    ]
  },
  {
    "id": "c01",
    "name_zh": "经典麻婆豆腐",
    "name_en": "Mapo Tofu",
    "cuisine": "sichuan",
    "tags": [
      "辣",
      "豆腐"
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
        "name_zh": "豆瓣酱与花椒粉",
        "name_en": "Bean Paste & Pepper",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "切配焯水",
        "instruction_zh": "切小块，沸盐水焯烫除腥捞出备用。",
        "instruction_en": "Boil tofu cubes in salted water, drain.",
        "hasTimer": true,
        "timeSeconds": 120
      },
      {
        "action": "爆香底料",
        "instruction_zh": "温油酥炒肉沫，加入豆瓣酱炒出红亮油脂。",
        "instruction_en": "Fry beef and bean paste till red oil renders.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "咕嘟",
        "instruction_zh": "倒入大半碗水煮沸，滑入豆腐转小火慢炖入味。",
        "instruction_en": "Add water, slide in tofu, simmer gently.",
        "hasTimer": true,
        "timeSeconds": 180
      },
      {
        "action": "勾芡出锅",
        "instruction_zh": "最关键的要分三次淋入水淀粉推匀至浓稠，死死裹住豆腐，表面狂撒花椒面。",
        "instruction_en": "Thicken iteratively with starch slurry. Top heavy with Sichuan pepper.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "c02",
    "name_zh": "宫保鸡丁",
    "name_en": "Kung Pao Chicken",
    "cuisine": "sichuan",
    "tags": [
      "酸甜",
      "鸡肉"
    ],
    "time": 20,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/kung_pao_chicken.png",
    "ingredients": [
      {
        "name_zh": "鸡胸或鸡腿肉",
        "name_en": "Chicken",
        "amount": "300g"
      },
      {
        "name_zh": "大葱与干辣椒",
        "name_en": "Scallion & Chilis",
        "amount": "适量"
      },
      {
        "name_zh": "花生米",
        "name_en": "Peanuts",
        "amount": "一小碗"
      }
    ],
    "steps": [
      {
        "action": "腌制",
        "instruction_zh": "鸡肉切丁加盐料酒蛋清淀粉抓匀。调一个“糖醋酱油水干淀粉”的灵魂碗汁。",
        "instruction_en": "Marinate chicken. Mix sweet and sour sauce bowl.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "滑炒",
        "instruction_zh": "热锅滑熟鸡丁倒出控油。",
        "instruction_en": "Fry chicken until just cooked, remove.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "炝锅",
        "instruction_zh": "底油爆香干辣椒花椒及葱姜蒜片，激发出麻辣香糊味。",
        "instruction_en": "Fry dried chilies and aromatics to release fiery oils.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "合体",
        "instruction_zh": "倒入鸡丁淋入碗汁大火快速颠勺挂汁，关火撒入酥脆花生。",
        "instruction_en": "Toss chicken and sauce on high heat. Add peanuts off-heat.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "c03",
    "name_zh": "水煮肉片",
    "name_en": "Boiled Spicy Pork",
    "cuisine": "sichuan",
    "tags": [
      "辣",
      "猪肉"
    ],
    "time": 30,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "猪里脊",
        "name_en": "Pork Tenderloin",
        "amount": "300g"
      },
      {
        "name_zh": "白菜或豆芽",
        "name_en": "Veggies",
        "amount": "适量"
      },
      {
        "name_zh": "刀口辣椒面",
        "name_en": "Sichuan Chili Flakes",
        "amount": "三大勺"
      }
    ],
    "steps": [
      {
        "action": "切肉",
        "instruction_zh": "肉切薄大片反复揉洗，极其水嫩后裹满蛋清淀粉。",
        "instruction_en": "Slice pork thinly, marinate heavily with starch and egg white.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "垫底",
        "instruction_zh": "蔬菜干炒至断生，铺入巨型大碗底。",
        "instruction_en": "Stir fry veggies, line bottom of large bowl.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "煮汤",
        "instruction_zh": "豆瓣酱火锅底料炒香，加水熬成红汤打去料渣。肉片一片片滑入彻底烫白柔嫩。",
        "instruction_en": "Boil spicy broth. Gently slide in pork till floating tender.",
        "hasTimer": true,
        "timeSeconds": 300
      },
      {
        "action": "泼油",
        "instruction_zh": "肉同汤倒在蔬菜上，顶部堆成山的蒜末和辣椒面，滚烫的热油“呲啦”一声浇上！",
        "instruction_en": "Pour extremely hot oil over the raw garlic/chili flakes topping!",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "c04",
    "name_zh": "回锅肉",
    "name_en": "Twice Cooked Pork",
    "cuisine": "sichuan",
    "tags": [
      "猪肉",
      "辣"
    ],
    "time": 25,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "二刀肉(肥瘦分明)",
        "name_en": "Pork Rump/Belly",
        "amount": "350g"
      },
      {
        "name_zh": "青蒜苗",
        "name_en": "Garlic Sprouts",
        "amount": "一大把"
      },
      {
        "name_zh": "甜面酱",
        "name_en": "Sweet Bean Paste",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "action": "白煮",
        "instruction_zh": "整块肉煮20分钟至断生，捞出彻底放凉，切成硬币厚度大片。",
        "instruction_en": "Boil chunk of pork 20m, chill, slice thinly.",
        "hasTimer": true,
        "timeSeconds": 1200
      },
      {
        "action": "煸炒",
        "instruction_zh": "极少油，下肉片中小火慢火煸炒至透明并微微卷起“灯盏窝”。",
        "instruction_en": "Fry slices till fat renders and slices curl into cups.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "炒料",
        "instruction_zh": "将肉拨到一边，底油爆香豆瓣酱甜面酱，再混合肉片翻炒上色。",
        "instruction_en": "Fry bean paste, mix to coat pork.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "加蒜苗",
        "instruction_zh": "倒入青蒜苗大火狂翻1分钟断生立刻起锅。",
        "instruction_en": "Add sprouts, toss wildly on max heat for 1 min, serve!",
        "hasTimer": true,
        "timeSeconds": 60
      }
    ]
  },
  {
    "id": "c05",
    "name_zh": "农家小炒肉",
    "name_en": "Hunan Stir Fried Pork",
    "cuisine": "hunan",
    "tags": [
      "猪肉",
      "超级辣"
    ],
    "time": 15,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "前腿肉",
        "name_en": "Pork Shoulder",
        "amount": "300g"
      },
      {
        "name_zh": "螺丝椒或青尖椒",
        "name_en": "Green Hot Chilis",
        "amount": "很多"
      },
      {
        "name_zh": "豆豉及大蒜",
        "name_en": "Fermented Black Beans",
        "amount": "必须有"
      }
    ],
    "steps": [
      {
        "action": "擂椒",
        "instruction_zh": "不用一滴油，把切断的青椒下白锅干煸擂压至表皮起虎皮焦斑，盛出备用。",
        "instruction_en": "Dry pan fry green chilies, press down until charred tiger spots appear.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "炒肉",
        "instruction_zh": "肥肉炼油，下瘦肉片猛火炒至断生微干。",
        "instruction_en": "Render fat pork piece, then fry lean pork slices on max mode.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "爆香",
        "instruction_zh": "下豆豉、大片生姜和大蒜爆出极致的香味。",
        "instruction_en": "Add black beans, garlic, ginger and explode flavors.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "混炒",
        "instruction_zh": "倒回青椒，撒酱油和一点点盐提鲜，大火翻炒10秒锅气冲天即可装盘。",
        "instruction_en": "Return chilies, add soy sauce, toss 10s with immense wok hei.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "y01",
    "name_zh": "清蒸鲈鱼",
    "name_en": "Steamed Sea Bass",
    "cuisine": "yue",
    "tags": [
      "海鲜",
      "清淡"
    ],
    "time": 15,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/steamed_sea_bass.png",
    "ingredients": [
      {
        "name_zh": "活体鲈鱼",
        "name_en": "Live Sea Bass",
        "amount": "1条约一斤"
      },
      {
        "name_zh": "葱段姜丝",
        "name_en": "Scallion & Ginger",
        "amount": "大量"
      },
      {
        "name_zh": "蒸鱼豉油",
        "name_en": "Seasoned Soy Sauce",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "改刀",
        "instruction_zh": "洗净鱼，背部厚肉处划刀，盘底铺葱段垫高以便热气流通。",
        "instruction_en": "Score fish back, prop on scallions in dish for steam flow.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "大火蒸",
        "instruction_zh": "水一定是完全沸腾滚开，放入鱼，大火猛蒸8分钟，关火虚蒸2分钟。",
        "instruction_en": "Steam on viciously boiling water for 8m, turn off and rest 2m.",
        "hasTimer": true,
        "timeSeconds": 480
      },
      {
        "action": "弃水",
        "instruction_zh": "极其关键：倒掉盘里所有恶臭蒸发出来的腥水，丢掉旧葱姜！",
        "instruction_en": "CRITICAL: Pour off foul fish water from plate, discard old ginger!",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "泼油淋汁",
        "instruction_zh": "铺上全新的极细葱丝，滚油泼香，最后沿盘边淋上一圈优质蒸鱼豉油。",
        "instruction_en": "Top with fresh julienne scallions, pour smoking oil, drizzle soy sauce.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "y02",
    "name_zh": "菠萝咕噜肉",
    "name_en": "Sweet and Sour Pork",
    "cuisine": "yue",
    "tags": [
      "猪肉",
      "酸甜大王"
    ],
    "time": 30,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/sweet_sour_pork.png",
    "ingredients": [
      {
        "name_zh": "梅条肉",
        "name_en": "Pork Collar",
        "amount": "300g"
      },
      {
        "name_zh": "菠萝大块",
        "name_en": "Pineapple",
        "amount": "150g"
      },
      {
        "name_zh": "青红菜椒片",
        "name_en": "Bell Peppers",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "action": "炸肉块",
        "instruction_zh": "肉块腌制后裹死干淀粉，油温六成下锅炸熟，八成油温复炸至金黄爆脆响。",
        "instruction_en": "Coat marinated pork in dry starch, fry twice until explosive crispy.",
        "hasTimer": true,
        "timeSeconds": 420
      },
      {
        "action": "调酸甜汁",
        "instruction_zh": "番茄酱、糖、白醋、一点点盐加水搅匀备用。",
        "instruction_en": "Mix ketchup, sugar, white vinegar, salt, water.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "熬芡汁",
        "instruction_zh": "底油爆香一点蒜茸，倒入酸甜汁大火熬至浓稠起大泡亮晶晶。",
        "instruction_en": "Boil sweet and sour sauce until sticky glossy bubbles form.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "秒出锅",
        "instruction_zh": "将极脆的炸肉、菠萝、彩椒倒入锅中，离火颠勺五次立刻装盘，维持酥脆口感！",
        "instruction_en": "Toss crispy pork/pineapple in hot glaze off-heat instantly to retain crunch.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "y03",
    "name_zh": "广式蜜汁叉烧",
    "name_en": "Cantonese Char Siu",
    "cuisine": "yue",
    "tags": [
      "猪肉",
      "烧腊"
    ],
    "time": 180,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "梅花肉",
        "name_en": "Pork Collar",
        "amount": "500g"
      },
      {
        "name_zh": "叉烧酱(或海鲜酱南乳)",
        "name_en": "Char Siu Sauce",
        "amount": "三大勺"
      },
      {
        "name_zh": "洋葱大蒜去腥",
        "name_en": "Onion & Garlic",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "漫长腌制",
        "instruction_zh": "条状猪肉包裹大量酱料放入冰箱冷藏腌制至少漫长的一夜。",
        "instruction_en": "Marinate pork strips heavily overnight in fridge.",
        "hasTimer": true,
        "timeSeconds": 43200
      },
      {
        "action": "初烤",
        "instruction_zh": "烤箱预热200度，放入肉条中层烤制20分钟。",
        "instruction_en": "Roast in oven 200C for 20 mins.",
        "hasTimer": true,
        "timeSeconds": 1200
      },
      {
        "action": "刷蜜复烤",
        "instruction_zh": "取出翻面，表面狠狠刷上麦芽糖或蜂蜜水，再烤10分钟至边缘微焦发亮。",
        "instruction_en": "Flip, generously brush with maltose/honey, roast 10m to caramelize edges.",
        "hasTimer": true,
        "timeSeconds": 600
      },
      {
        "action": "切片",
        "instruction_zh": "室温稍静置5分钟锁汁，切成一厘米厚的诱人亮红色肉片。",
        "instruction_en": "Rest 5m, slice into thick stunning red pieces.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "y04",
    "name_zh": "白灼基围虾",
    "name_en": "Poached Live Shrimp",
    "cuisine": "yue",
    "tags": [
      "海鲜",
      "极简美味"
    ],
    "time": 10,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "鲜活大虾",
        "name_en": "Live Shrimp",
        "amount": "500g"
      },
      {
        "name_zh": "葱姜",
        "name_en": "Scallion/Ginger",
        "amount": "一撮"
      },
      {
        "name_zh": "海鲜酱油汁",
        "name_en": "Seafood Soy Dip",
        "amount": "一碟"
      }
    ],
    "steps": [
      {
        "action": "下锅",
        "instruction_zh": "宽水烧大开，加料酒姜片葱段。倒入活蹦乱跳的虾。",
        "instruction_en": "Boil water with ginger/wine, pour in bouncing live shrimp.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "时间控制",
        "instruction_zh": "虾壳逐渐变红翻滚，水再次将开未开的瞬间（仅仅1-2分钟），马上捞出！",
        "instruction_en": "Once red and water almost reboils (~1.5 min), scoop out immediately!",
        "hasTimer": true,
        "timeSeconds": 90
      },
      {
        "action": "冰镇弹牙",
        "instruction_zh": "将热虾瞬间投进冰水里激5秒钟捞起排盘，虾肉会异常紧实弹牙。",
        "instruction_en": "Shock in ice water for 5s to tighten meat.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "蘸料",
        "instruction_zh": "纯天然海鲜蘸料或极简酱油圈沙姜食用即可。",
        "instruction_en": "Serve merely with soy sauce and minced sand ginger.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "y05",
    "name_zh": "滑蛋虾仁",
    "name_en": "Shrimp & Egg Stir-fry",
    "cuisine": "yue",
    "tags": [
      "鸡蛋",
      "鲜香柔嫩"
    ],
    "time": 10,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "大青虾仁",
        "name_en": "Large Raw Shrimp",
        "amount": "150g"
      },
      {
        "name_zh": "鸡蛋",
        "name_en": "Eggs",
        "amount": "4个"
      },
      {
        "name_zh": "水淀粉与葱花",
        "name_en": "Starch Slurry & Scallions",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "action": "洗虾",
        "instruction_zh": "虾仁加盐反复抓洗至透明，吸干水分，少许盐蛋清淀粉上浆。",
        "instruction_en": "Wash shrimp with salt till clear, dry, marinate with egg white/starch.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "炒虾",
        "instruction_zh": "油锅温热将虾仁滑至8分熟捞出稍微降温。",
        "instruction_en": "Lightly pan fry shrimp till 80% done, remove.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "调蛋液",
        "instruction_zh": "鸡蛋打散，关键：加入两勺水淀粉和葱末拌匀，倒入温热的虾仁。",
        "instruction_en": "Beat eggs, CRITICAL: add starch slurry and shrimp to eggs.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "推蛋",
        "instruction_zh": "猛火热锅多油，倒入蛋液立刻关小火，用锅铲呈十字形状慢推，蛋液八成凝固还有蛋汁就要起锅！",
        "instruction_en": "Hot pan, pour egg, drop heat. Push slowly into folds. Remove when 80% set but still wet!",
        "hasTimer": true,
        "timeSeconds": 60
      }
    ]
  },
  {
    "id": "l01",
    "name_zh": "绝对正宗糖醋里脊",
    "name_en": "Sweet & Sour Pork Tender",
    "cuisine": "lu",
    "tags": [
      "猪肉",
      "炸脆"
    ],
    "time": 30,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "通脊肉",
        "name_en": "Pork Loin",
        "amount": "300g"
      },
      {
        "name_zh": "纯土豆淀粉",
        "name_en": "Potato Starch",
        "amount": "大半碗"
      },
      {
        "name_zh": "糖与米醋",
        "name_en": "Sugar & Vinegar",
        "amount": "高频使用"
      }
    ],
    "steps": [
      {
        "action": "水法挂糊",
        "instruction_zh": "土豆淀粉加水静置，倒掉清水面留底部浓浆，加入少许油，与盐腌过的肉条抓匀成非牛顿流体。",
        "instruction_en": "Make stiff potato starch slurry, coat pork strips fully.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "一炸定型",
        "instruction_zh": "六成热宽油下肉条炸熟，微黄捞出。",
        "instruction_en": "Fry until cooked pale golden.",
        "hasTimer": true,
        "timeSeconds": 300
      },
      {
        "action": "二炸酥脆",
        "instruction_zh": "八成极热油，下锅十秒极速催脆！捞出控油。",
        "instruction_en": "Flash fry at max temp for 10s till extremely crispy.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "糖醋汁",
        "instruction_zh": "不加番茄酱的最正宗！锅留底油爆极少蒜末，白糖米醋清水1",
        "instruction_en": "1:1熬出大泡粘稠汁液，下肉离火翻匀！:Authentic way has no ketchup. Boil sugar/vinegar/water till sticky, toss meat instantly!",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "l02",
    "name_zh": "葱爆羊肉",
    "name_en": "Scallion Lamb",
    "cuisine": "lu",
    "tags": [
      "羊肉",
      "极速"
    ],
    "time": 10,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "羊后腿肉或羊肉片",
        "name_en": "Lamb Slices",
        "amount": "300g"
      },
      {
        "name_zh": "大葱白",
        "name_en": "Leek Whites",
        "amount": "两根极粗的"
      },
      {
        "name_zh": "生抽老抽米醋",
        "name_en": "Soy sauces & Vinegar",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "切配",
        "instruction_zh": "大葱白斜刀切跟羊肉片同等大小的滚刀块或片。羊肉片若带血水可抓少许盐酱油。",
        "instruction_en": "Slice leeks thickly diagonally. Marinate lamb simply.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "猛火爆肉",
        "instruction_zh": "锅必须烧到冒大烟！！倒凉油立刻下羊肉片，猛翻十秒羊肉变色立刻盛出（不能老出水）。",
        "instruction_en": "Wok MUST literally smoke! Add oil, instantly fry lamb 10s till barely browned. Remove.",
        "hasTimer": true,
        "timeSeconds": 60
      },
      {
        "action": "超葱",
        "instruction_zh": "利用羊肉余油，下大葱猛火翻炒15秒爆起葱香略带微焦。",
        "instruction_en": "Stir fry leeks in intense lamb fat till fragrant and slightly charred.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "合体",
        "instruction_zh": "倒入羊肉，沿锅边一圈生抽一圈醋（不可少这口醋气），翻拌五秒出锅起菜！",
        "instruction_en": "Return lamb, splash soy sauce and tiny vinegar on wok edge, toss 5s! Serve!",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "l03",
    "name_zh": "经典北方红烧肉",
    "name_en": "Lu Braised Pork",
    "cuisine": "lu",
    "tags": [
      "猪肉",
      "红烧大菜"
    ],
    "time": 60,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/hong_shao_rou.png",
    "ingredients": [
      {
        "name_zh": "带皮五花肉",
        "name_en": "Pork Belly",
        "amount": "500g"
      },
      {
        "name_zh": "冰糖与八角",
        "name_en": "Rock Sugar & Anise",
        "amount": "必备"
      },
      {
        "name_zh": "大葱生姜红干椒",
        "name_en": "Aromatics",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "煸肉",
        "instruction_zh": "焯完水的方块五花肉不放油下热锅小火慢煎，逼出大量多余油脂，边缘微黄。捞出倒油。",
        "instruction_en": "Render fat slowly from boiled pork chunks in dry pan until edges golden.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "神级糖色",
        "instruction_zh": "极小火冷油下冰糖，用铲子慢慢敲碎推融，直至全部变成琥珀色大泡转为密集红褐色小泡，极速下肉块疯狂翻拌裹满酒红光泽。",
        "instruction_en": "Melt rock sugar till dark auburn foam, violently toss pork in it to coat completely red.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "加盖慢熬",
        "instruction_zh": "下八角桂皮葱姜老抽料酒，倒入盖过肉极多的开水！！开小火盖上锅盖让时间做功45分钟。",
        "instruction_en": "Add spices/aromatics/boiling water. Slow simmer covered blindly for 45 mins.",
        "hasTimer": true,
        "timeSeconds": 2700
      },
      {
        "action": "暴力收汁",
        "instruction_zh": "时间到，挑出所有调料渣不可食用。转最大火猛烈翻滚收汁至油亮浓稠，即可出锅。",
        "instruction_en": "Discard spices, hit max heat to violently reduce liquid to pure sticky gloss.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "l04",
    "name_zh": "老北京炸酱面",
    "name_en": "Zha Jiang Mian",
    "cuisine": "lu",
    "tags": [
      "面食",
      "浓酱"
    ],
    "time": 45,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "干黄酱与甜面酱",
        "name_en": "Yellow & Sweet Bean Paste",
        "amount": "7/3比例"
      },
      {
        "name_zh": "五花肉丁",
        "name_en": "Pork Belly Dice",
        "amount": "250g"
      },
      {
        "name_zh": "手擀面与八大菜码",
        "name_en": "Noodles & Veggies",
        "amount": "海量"
      }
    ],
    "steps": [
      {
        "action": "泄酱",
        "instruction_zh": "黄酱甜面酱按比例加入黄酒清水搅匀稀释成稀糊糊备用。",
        "instruction_en": "Dilute bean pastes with cooking wine and water into slurry.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "煸肉",
        "instruction_zh": "五花碎丁（肥瘦四六开）下锅煸炒至吐油微干焦黄。",
        "instruction_en": "Fry fatty pork dice till crispy and rendered.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "漫长熬酱",
        "instruction_zh": "倒入酱汁，放八角大葱。转极最小极最小的火！不断用铲子贴底推炒防糊，长达30分钟以上分离出酱油分离的完美炸酱！",
        "instruction_en": "Pour paste mix, simmer on incredibly low heat stirring for 30m till oil separates.",
        "hasTimer": true,
        "timeSeconds": 1800
      },
      {
        "action": "切菜拌面",
        "instruction_zh": "现煮手擀面带点冷水过凉。黄瓜丝心里美白菜丝等八大菜码摆满，顶上一大勺黑亮的小碗干炸！",
        "instruction_en": "Boil handmade noodles. Top with 8 shredded veggies and a massive dollop of the black sauce.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "l05",
    "name_zh": "木须肉",
    "name_en": "Moo Shu Pork",
    "cuisine": "lu",
    "tags": [
      "猪肉",
      "木耳鸡蛋家常菜"
    ],
    "time": 15,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "里脊肉片",
        "name_en": "Pork Slices",
        "amount": "200g"
      },
      {
        "name_zh": "黄花菜与黑木耳",
        "name_en": "Lily flower & Wood ear",
        "amount": "一小碗"
      },
      {
        "name_zh": "鸡蛋与黄瓜片",
        "name_en": "Eggs & Cucumber",
        "amount": "极多"
      }
    ],
    "steps": [
      {
        "action": "备料",
        "instruction_zh": "木耳黄花温水泡发洗净。肉片上薄浆。鸡蛋炒块捞出。",
        "instruction_en": "Hydrate fungus/lily. Marinate pork. Scramble eggs softly and remove.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "滑肉",
        "instruction_zh": "油锅滑熟猪肉片并捞出备用，动作要快。",
        "instruction_en": "Fry pork slices briefly till cooked, remove.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "爆炒",
        "instruction_zh": "余油下葱花蒜片爆香，下木耳黄花大翻炒两下（防炸锅）。",
        "instruction_en": "Fry aromatics, add wood ear and lily flower tossing intensely.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "融合",
        "instruction_zh": "倒回肉片鸡蛋加入鲜脆的黄瓜片（不能炒老），放盐生抽猛火乱炒10秒淋一点香油出锅！",
        "instruction_en": "Return eggs/pork, add cucumber slices, season and toss rapidly, drizzle sesame oil.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "h01",
    "name_zh": "江南红烧狮子头",
    "name_en": "Braised Lion's Head",
    "cuisine": "huaiyang",
    "tags": [
      "猪肉",
      "炖煮功夫"
    ],
    "time": 120,
    "difficulty_zh": "高级",
    "difficulty_en": "Hard",
    "image": "./images/lions_head.png",
    "ingredients": [
      {
        "name_zh": "六分肥四分瘦五花肉",
        "name_en": "Fatty Pork Belly",
        "amount": "500g"
      },
      {
        "name_zh": "马蹄(荸荠)或藕",
        "name_en": "Water Chestnut",
        "amount": "100g"
      },
      {
        "name_zh": "葱姜水",
        "name_en": "Scallion Water",
        "amount": "1碗"
      }
    ],
    "steps": [
      {
        "action": "细切粗剁",
        "instruction_zh": "极其关键！将肉切成石榴籽大小的微小方块，再轻轻剁两下（不能剁成肉泥）。混合切碎的马蹄。",
        "instruction_en": "CRITICAL: Dice pork into micro cubes, DO NOT MINCE into paste. Mix with diced water chestnut.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "打水上劲",
        "instruction_zh": "肉中少量多次加入葱姜水搅打极其粘稠，加一点盐糊化，团成巨大的四个大肉丸，在两手间左右摔打至成团结实不散。",
        "instruction_en": "Whip scallion water iteratively into pork until ultra sticky. Form 4 giant meatballs tossing between hands.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "油炸定型",
        "instruction_zh": "巨大的肉圆入七成热深油中炸制表面结成焦黄硬定型外壳，捞出控油。",
        "instruction_en": "Deep fry meatballs till a firm golden outer crust forms holding shape.",
        "hasTimer": true,
        "timeSeconds": 300
      },
      {
        "action": "慢火蒸或砂锅炖",
        "instruction_zh": "砂锅底部垫大量白菜帮防御糊底。放入肉圆注入高汤加入生抽冰糖老抽八角等调料。微火慢炖2小时至入口即化！",
        "instruction_en": "Place in claypot on cabbage bed, add broth/spices, stew gently for 2 hours till literally melts.",
        "hasTimer": true,
        "timeSeconds": 7200
      }
    ]
  },
  {
    "id": "h02",
    "name_zh": "松鼠桂鱼(平民简化版)",
    "name_en": "Squirrel Fish (Simplified)",
    "cuisine": "huaiyang",
    "tags": [
      "海鲜",
      "酸甜大菜"
    ],
    "time": 40,
    "difficulty_zh": "高级",
    "difficulty_en": "Hard",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "整条桂鱼或鲈鱼",
        "name_en": "Whole Mandarin/Sea Bass",
        "amount": "1条"
      },
      {
        "name_zh": "玉米淀粉",
        "name_en": "Corn Starch",
        "amount": "大量"
      },
      {
        "name_zh": "茄汁甜酸酱汁",
        "name_en": "Sweet Sour Ketchup Sauce",
        "amount": "一大碗"
      }
    ],
    "steps": [
      {
        "action": "取肉划刀",
        "instruction_zh": "切掉鱼头。沿脊骨片下两条带皮鱼肉（尾部不切断）。在肉面斜刀斜切出菱形深缝隙，切到鱼皮但绝不能破皮！",
        "instruction_en": "Filet the fish leaving tail attached. Deep cross-hatch cuts into meat side stopping exactly at skin.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "拍粉提尾",
        "instruction_zh": "鱼肉洗净腌制后每一个缝隙都死死拍满干粉，拎起鱼尾抖掉多余淀粉，鱼肉呈现出刺猬状。",
        "instruction_en": "Dust every crevice with starch, shake off excess. Fish will look like a hedgehog.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "炸制定型",
        "instruction_zh": "极其大量的热油，手提鱼尾将有花纹的肉朝下贴入热油炸定型松鼠状，最后整条炸至金黄酥透装盘拼好。",
        "instruction_en": "Deep fry while holding tail to set the squirrel shape, then submerge till golden crisp.",
        "hasTimer": true,
        "timeSeconds": 480
      },
      {
        "action": "浇汁",
        "instruction_zh": "另起锅熬浓稠滚烫的茄汁糖醋浓汁加点油增加亮度，上桌前直接滚烫沸腾地浇在鱼身上听“滋溜溜”的声音！",
        "instruction_en": "Boil thick glossy sweet & sour sauce. Pour boiling hot over fish at table to hear the sizzle!",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "h03",
    "name_zh": "镇江香醋排骨",
    "name_en": "Zhenjiang Ribs",
    "cuisine": "huaiyang",
    "tags": [
      "猪肉",
      "酸甜"
    ],
    "time": 40,
    "difficulty_zh": "中级",
    "difficulty_en": "Medium",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "猪肋排",
        "name_en": "Pork Spare Ribs",
        "amount": "500g"
      },
      {
        "name_zh": "镇江恒顺香醋",
        "name_en": "Zhenjiang Black Vinegar",
        "amount": "3大勺"
      },
      {
        "name_zh": "冰糖",
        "name_en": "Rock Sugar",
        "amount": "一大把"
      }
    ],
    "steps": [
      {
        "action": "焯水",
        "instruction_zh": "排骨切小段冷水下锅加大葱姜片料酒煮出血沫捞出洗净。",
        "instruction_en": "Cut ribs, boil from cold water to clean.",
        "hasTimer": true,
        "timeSeconds": 300
      },
      {
        "action": "黄金比例调汁",
        "instruction_zh": "一酒二酱三糖四醋五水（一勺料酒，两勺生抽，三勺白糖或冰糖，四勺陈醋，五勺清水）极其万能的配方。",
        "instruction_en": "Make 1:2:3:4:5 ratio sauce (1 wine, 2 soy, 3 sugar, 4 black vinegar, 5 water).",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "熬煮",
        "instruction_zh": "排骨入锅微煎出香，倒满这碗秘制黄金糖醋汁。大火烧开转小火慢熬30分钟让醋酸蒸发留住醋香。",
        "instruction_en": "Fry ribs briefly, pour sauce, simmer 30m. Vinegar acid flies away leaving pure aroma.",
        "hasTimer": true,
        "timeSeconds": 1800
      },
      {
        "action": "强力收汁",
        "instruction_zh": "开盖开最大火，不断翻拌以防糊底。看汤汁卷起拉丝包裹住排骨变亮后撒白芝麻赶紧出锅！",
        "instruction_en": "Max heat rapid reduce till sticky sticky glaze coats ribs. Sprinkle sesame!",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "h04",
    "name_zh": "西湖牛肉羹",
    "name_en": "West Lake Beef Soup",
    "cuisine": "huaiyang",
    "tags": [
      "汤",
      "柔滑清淡"
    ],
    "time": 15,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/generic_food.png",
    "ingredients": [
      {
        "name_zh": "牛肉泥",
        "name_en": "Minced Beef",
        "amount": "150g"
      },
      {
        "name_zh": "内酯嫩豆腐",
        "name_en": "Silken Tofu",
        "amount": "半盒"
      },
      {
        "name_zh": "香菜与蛋清",
        "name_en": "Cilantro & Egg Whites",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "细切洗净",
        "instruction_zh": "牛肉必须剁得很细碎，洗去血水。嫩豆腐切极小颗粒。香菜切碎。",
        "instruction_en": "Mince beef heavily. Dice tofu micro small. Chop cilantro.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "牛沫去腥",
        "instruction_zh": "冷水下牛肉沫，逐渐加热水煮沸将深色血杂质全部撇干净，留下清汤。",
        "instruction_en": "Boil beef starting in cold water, skim absolutely all scum for clear broth.",
        "hasTimer": true,
        "timeSeconds": 300
      },
      {
        "action": "滑豆腐",
        "instruction_zh": "下豆腐粒稍微煮开。加盐白胡椒粉调个极其清淡的咸鲜底味。",
        "instruction_en": "Slide in tofu, season very lightly with salt and white pepper.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "勾芡飘雪花蛋",
        "instruction_zh": "用水淀粉淋入勾出相对浓厚的玻璃芡汁。关火！迅速淋入打散的纯蛋清，搅拌拉出雪白的云丝片片。出锅狂撒香菜碎！",
        "instruction_en": "Thicken broth with starch. OFF HEAT! Stream in egg whites while stirring to make white cloud ribbons.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  },
  {
    "id": "h05",
    "name_zh": "苏式阳春面",
    "name_en": "Yangchun Noodles",
    "cuisine": "huaiyang",
    "tags": [
      "面点",
      "清汤素面"
    ],
    "time": 5,
    "difficulty_zh": "入门",
    "difficulty_en": "Easy",
    "image": "./images/noodles.png",
    "ingredients": [
      {
        "name_zh": "极细挂面或生切面",
        "name_en": "Thin Noodles",
        "amount": "1把"
      },
      {
        "name_zh": "猪油",
        "name_en": "Lard",
        "amount": "1大勺（灵魂）"
      },
      {
        "name_zh": "极品生抽及香葱末",
        "name_en": "High-End Soy Sauce & Scallion",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "action": "炼猪油底",
        "instruction_zh": "碗底挖一勺灵魂猪油！倒两勺最棒的特级生抽，撒满一大把极细嫩绿的葱花。",
        "instruction_en": "Add spoonful of Lard, premium soy sauce, and mass minced scallions to bottom of bowl.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "煮面与冲汤",
        "instruction_zh": "水大开，煮一把细如发丝的面。在面快熟时拿面汤大火冲进碗底（猪油瞬间融化芳香四溢）。",
        "instruction_en": "Boil thin noodles. Pour boiling starchy pasta water forcefully into the prepared bowl to melt lard.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "折面",
        "instruction_zh": "用长筷子将煮好的面整齐如梳子排列好，放入面碗里！",
        "instruction_en": "Fold cooked noodles neatly like a comb into the steaming broth.",
        "hasTimer": false,
        "timeSeconds": 0
      },
      {
        "action": "品鉴",
        "instruction_zh": "这碗面讲究“汤清如镜，面滑如丝，葱香扑鼻，不见一点肉确有脂香”。端起来尽情嗦即可。",
        "instruction_en": "Enjoy the ultimate minimal comfort bowl.",
        "hasTimer": false,
        "timeSeconds": 0
      }
    ]
  }
];
