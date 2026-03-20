import json
import random

def create_recipe(id, name_zh, name_en, cuisine, tags, time, diff_zh, diff_en, img, ingredients, steps):
    return {
        "id": id,
        "name_zh": name_zh,
        "name_en": name_en,
        "cuisine": cuisine,
        "tags": tags,
        "time": time,
        "difficulty_zh": diff_zh,
        "difficulty_en": diff_en,
        "image": img,
        "ingredients": ingredients,
        "steps": steps
    }

recipes = []

# 1. Sichuan (川菜)
recipes.append(create_recipe(
    "r_001", "经典红烧肉", "Classic Red Braised Pork Belly", "lu", ["猪肉", "红烧", "经典", "pork", "braised"], 60, "中级", "Medium",
    "./images/hong_shao_rou.png",
    [{"name_zh":"五花肉", "name_en":"Pork Belly", "amount":"500g"}, {"name_zh":"老抽", "name_en":"Dark Soy Sauce", "amount":"2勺"}, {"name_zh":"冰糖", "name_en":"Rock Sugar", "amount":"30g"}],
    [
        {"action": "切配", "instruction_zh": "五花肉切成3厘米见方的块。", "instruction_en": "Cut pork belly into 3cm cubes.", "hasTimer": False},
        {"action": "焯水", "instruction_zh": "冷水下锅，加姜片和料酒，大火煮沸后撇去浮沫，捞出控干。", "instruction_en": "Boil in cold water with ginger and wine, skim foam, drain.", "hasTimer": True, "timeSeconds": 300, "hasParallel": True, "parallelTask_zh": "洗净葱姜准备八角/桂皮。", "parallelTask_en": "Wash scallions and prepare star anise/cinnamon."},
        {"action": "翻炒", "instruction_zh": "热锅少油，下五花肉煸炒至微微出油，表面金黄。", "instruction_en": "Fry pork in a bit of oil until fat renders and edges are golden.", "hasTimer": False},
        {"action": "调味", "instruction_zh": "放入冰糖炒出糖色，加入生抽、老抽翻炒上色。", "instruction_en": "Melt rock sugar to caramelize, add soy sauces to color the meat.", "hasTimer": False},
        {"action": "炖煮", "instruction_zh": "加入没过肉的开水，放入葱姜大料。大火烧开后转小火慢炖 45 分钟。", "instruction_en": "Add boiling water to cover, add spices. Simmer on low heat for 45 mins.", "hasTimer": True, "timeSeconds": 2700, "hasParallel": True, "parallelTask_zh": "趁现在可以清扫厨房台面或准备另一道配菜。", "parallelTask_en": "Clean the kitchen counter or prep another dish."},
        {"action": "收汁", "instruction_zh": "捡出调料渣，转大火翻炒收汁，汤汁粘稠即可出锅。", "instruction_en": "Remove spices, turn to high heat to reduce sauce until sticky. Serve.", "hasTimer": False}
    ]
))

recipes.append(create_recipe(
    "r_002", "麻婆豆腐", "Mapo Tofu", "sichuan", ["豆腐", "辣", "下饭", "tofu", "spicy"], 20, "入门", "Easy",
    "https://images.unsplash.com/photo-1556910103-1c02745a872f?w=600&q=80",
    [{"name_zh":"嫩豆腐", "name_en":"Silken Tofu", "amount":"1块"}, {"name_zh":"牛肉沫", "name_en":"Minced Beef", "amount":"100g"}, {"name_zh":"郫县豆瓣酱", "name_en":"Pixian Bean Paste", "amount":"1.5勺"}],
    [
        {"action": "切配", "instruction_zh": "豆腐切2厘米小块。", "instruction_en": "Cut tofu into 2cm cubes.", "hasTimer": False},
        {"action": "焯水", "instruction_zh": "水开后加少许盐，放入豆腐焯水去豆腥味，捞出备用。", "instruction_en": "Boil tofu in salted water to remove raw taste, drain.", "hasTimer": True, "timeSeconds": 120},
        {"action": "爆香", "instruction_zh": "油热下牛肉沫炒至酥香，加入豆瓣酱和豆豉炒出红油。", "instruction_en": "Fry minced beef until crispy, add bean paste and stir until red oil releases.", "hasTimer": False},
        {"action": "煮", "instruction_zh": "加一小碗水煮开，滑入豆腐，中火慢嘟3分钟。", "instruction_en": "Add a small bowl of water, slide in tofu, simmer for 3 mins.", "hasTimer": True, "timeSeconds": 180},
        {"action": "勾芡", "instruction_zh": "分三次淋入水淀粉推匀，最后撒上花椒粉和葱花出锅。", "instruction_en": "Thicken with starch slurry in 3 batches. Top with Sichuan peppercorn powder and scallions.", "hasTimer": False}
    ]
))

recipes.append(create_recipe(
    "r_003", "宫保鸡丁", "Kung Pao Chicken", "sichuan", ["鸡肉", "花生", "酸甜", "chicken", "peanut"], 25, "中级", "Medium",
    "https://images.unsplash.com/photo-1556910103-1c02745a872f?w=600&q=80",
    [{"name_zh":"鸡腿肉", "name_en":"Chicken Thigh", "amount":"300g"}, {"name_zh":"炸花生米", "name_en":"Fried Peanuts", "amount":"一把"}, {"name_zh":"干辣椒/花椒", "name_en":"Dried Chili/Peppercorn", "amount":"适量"}],
    [
        {"action": "切配", "instruction_zh": "鸡肉切丁，加生抽、料酒、淀粉抓匀腌制10分钟。", "instruction_en": "Dice chicken, marinate with soy sauce, wine, starch for 10 mins.", "hasTimer": True, "timeSeconds": 600, "hasParallel":True, "parallelTask_zh": "调一个宫保汁（糖醋酱油水地瓜粉）。", "parallelTask_en":"Mix Kung Pao sauce (sugar, vinegar, soy sauce, starch)."},
        {"action": "翻炒", "instruction_zh": "热锅凉油，下鸡丁滑熟捞出。", "instruction_en": "Fry chicken in oil until cooked, take out.", "hasTimer": False},
        {"action": "爆香", "instruction_zh": "底油爆香干辣椒和花椒，下葱姜蒜末炒香。", "instruction_en": "Fry chili and peppercorn in remaining oil, add aromatics.", "hasTimer": False},
        {"action": "调匀", "instruction_zh": "倒入鸡丁，淋入调好的宫保汁大火翻炒收汁。", "instruction_en": "Add chicken back, pour in sauce and stir-fry on high heat.", "hasTimer": False},
        {"action": "混合", "instruction_zh": "关火，倒入炸花生米迅速翻匀出锅。", "instruction_en": "Turn off heat, toss in fried peanuts and serve quickly.", "hasTimer": False}
    ]
))

# 2. Yue (粤菜)
recipes.append(create_recipe(
    "r_004", "清蒸鲈鱼", "Steamed Sea Bass", "yue", ["海鲜", "清淡", "蒸", "seafood", "steamed"], 20, "入门", "Easy",
    "https://images.unsplash.com/photo-1556910103-1c02745a872f?w=600&q=80",
    [{"name_zh":"鲈鱼", "name_en":"Sea Bass", "amount":"1条(约500g)"}, {"name_zh":"蒸鱼豉油", "name_en":"Seasoned Soy Sauce", "amount":"3勺"}, {"name_zh":"葱姜丝", "name_en":"Scallion & Ginger", "amount":"一把"}],
    [
        {"action": "切配", "instruction_zh": "鱼身划刀，盘底和鱼腹塞入姜片葱段。", "instruction_en": "Score fish, stuff ginger and scallion into belly and under it.", "hasTimer": False},
        {"action": "蒸", "instruction_zh": "水烧开后上锅蒸 8 分钟，关火虚蒸 2 分钟。", "instruction_en": "Steam over boiling water for 8 mins, rest for 2 mins with heat off.", "hasTimer": True, "timeSeconds": 480, "hasParallel": True, "parallelTask_zh": "切大量的极细葱丝和姜丝。", "parallelTask_en": "Julienne scallions and ginger very finely."},
        {"action": "调味", "instruction_zh": "弃去蒸出来的腥水和旧葱姜，铺上新鲜葱姜丝。", "instruction_en": "Discard cooking liquid and old aromatics, top with fresh julienne.", "hasTimer": False},
        {"action": "炝油", "instruction_zh": "烧两大勺热油，呲啦一声泼在葱姜丝上，最后沿锅边淋入蒸鱼豉油即可。", "instruction_en": "Pour smoking hot oil over aromatics, then drizzle soy sauce around edges.", "hasTimer": False}
    ]
))

# 3. Italian (意餐)
recipes.append(create_recipe(
    "r_005", "经典培根蛋酱意面", "Classic Spaghetti Carbonara", "italian", ["意面", "奶香", "西餐", "pasta", "bacon"], 20, "入门", "Easy",
    "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80",
    [{"name_zh":"意面", "name_en":"Spaghetti", "amount":"200g"}, {"name_zh":"培根/风干猪颊肉", "name_en":"Pancetta/Bacon", "amount":"100g"}, {"name_zh":"帕玛森干酪及蛋黄", "name_en":"Parmesan & Egg Yolks", "amount":"适量"}],
    [
        {"action": "煮", "instruction_zh": "海盐水中煮意面，比包装建议少煮1分钟以保持咬劲。", "instruction_en": "Boil pasta in salted water 1 min less than package instructions.", "hasTimer": True, "timeSeconds": 480, "hasParallel": True, "parallelTask_zh": "把蛋黄、全蛋、大量黑胡椒和擦碎的奶酪打匀成酱汁。", "parallelTask_en": "Whisk egg yolks, whole egg, black pepper, and grated cheese."},
        {"action": "煎", "instruction_zh": "冷锅下培根丁，小火煎出油脂至酥脆，关火倒出多余油脂。", "instruction_en": "Fry bacon from cold pan until crispy. Turn off heat, drain excess fat.", "hasTimer": False},
        {"action": "混匀", "instruction_zh": "将煮好的意面捞入装有培根的平底锅（离开火源），加两勺煮面水让温度微降。", "instruction_en": "Move pasta to bacon pan (off heat), add pasta water to cool slightly.", "hasTimer": False},
        {"action": "拌", "instruction_zh": "倒入蛋奶酪酱，疯狂搅拌至形成浓郁丝滑的酱汁，切忌开火变成炒鸡蛋！", "instruction_en": "Pour in egg mixture, stir vigorously off heat until creamy avoiding scrambled eggs!", "hasTimer": False}
    ]
))

recipes.append(create_recipe(
    "r_006", "西式香煎西冷牛排配芦笋", "Pan-Seared Sirloin Steak", "italian", ["牛排", "高蛋白", "西式", "steak", "meat"], 15, "中级", "Medium",
    "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
    [{"name_zh":"西冷牛排", "name_en":"Sirloin Steak", "amount":"1块(厚2.5cm)"}, {"name_zh":"黄油", "name_en":"Butter", "amount":"20g"}, {"name_zh":"大蒜及迷迭香", "name_en":"Garlic & Rosemary", "amount":"少许"}],
    [
        {"action": "静置", "instruction_zh": "牛排提前30分钟回温，用厨房纸吸干表面水分，撒海盐和黑胡椒。", "instruction_en": "Rest steak to room temp for 30 mins, pat dry, season with salt/pepper.", "hasTimer": True, "timeSeconds": 1800, "hasParallel": True, "parallelTask_zh": "清洗芦笋并切去老根，准备大蒜粒。", "parallelTask_en": "Wash asparagus, trim ends, prep garlic."},
        {"action": "煎", "instruction_zh": "铁锅烧至冒烟，倒少许油，下牛排每面煎1分钟至焦褐感。", "instruction_en": "Sear in smoking hot pan, 1 min per side until crusted.", "hasTimer": True, "timeSeconds": 120},
        {"action": "淋油", "instruction_zh": "转中火，加入黄油、大蒜、迷迭香，将融化的黄油不断淋在牛排上 1 分钟。", "instruction_en": "Reduce heat, add butter/garlic/rosemary, baste steak with melted butter for 1 min.", "hasTimer": True, "timeSeconds": 60},
        {"action": "静置", "instruction_zh": "牛排盛出在热盘子上静置 5 分钟锁住肉汁。原锅余温把芦笋简单煎熟。", "instruction_en": "Rest steak on a warm plate for 5 mins to lock juices. Cook asparagus in same pan.", "hasTimer": True, "timeSeconds": 300}
    ]
))

# 4. French (法餐)
recipes.append(create_recipe(
    "r_007", "法式洋葱汤", "French Onion Soup", "french", ["法餐", "汤", "经典", "soup", "french"], 50, "中级", "Medium",
    "https://images.unsplash.com/photo-1556910103-1c02745a872f?w=600&q=80",
    [{"name_zh":"黄洋葱", "name_en":"Yellow Onions", "amount":"4个"}, {"name_zh":"牛肉高汤", "name_en":"Beef Broth", "amount":"800ml"}, {"name_zh":"法棍及芝士", "name_en":"Baguette & Gruyere", "amount":"适量"}],
    [
        {"action": "切配", "instruction_zh": "洋葱切成细丝。", "instruction_en": "Slice onions thinly.", "hasTimer": False},
        {"action": "翻炒", "instruction_zh": "锅中融化黄油，中小火极其耐心地炒洋葱丝，整个过程大概需要30分钟，直到彻底焦糖化变成深褐色。", "instruction_en": "Melt butter, caramelize onions patiently on low heat for 30 mins until deep amber.", "hasTimer": True, "timeSeconds": 1800, "hasParallel": True, "parallelTask_zh": "切片法棍，撒上厚厚的擦碎芝士备用。", "parallelTask_en": "Slice baguette, top with grated cheese."},
        {"action": "煮", "instruction_zh": "倒入少量白葡萄酒除锅底焦痕，然后倒入高汤慢炖 15 分钟。", "instruction_en": "Deglaze with white wine, add broth and simmer for 15 mins.", "hasTimer": True, "timeSeconds": 900},
        {"action": "烤", "instruction_zh": "将汤盛入烤碗，盖上法棍和芝士片，放入烤箱 200 度烤 5 分钟至芝士融化焦黄。", "instruction_en": "Ladle soup into bowls, top with bread/cheese, broil at 200°C for 5 mins until bubbly.", "hasTimer": True, "timeSeconds": 300}
    ]
))

# Generate remaining fillers up to 12 as stubs to show scale
genres = [
    ("sichuan", "川菜精选"), ("lu", "鲁菜风味"), ("yue", "粤菜海鲜"), 
    ("italian", "意式风情"), ("french", "浪漫法餐"), ("huaiyang", "淮扬名菜")
]
for i in range(8, 16):
    r_c = random.choice(genres)
    recipes.append(create_recipe(
        f"r_00{i}" if i < 10 else f"r_0{i}",
        f"地道美味的{r_c[1]} - {i}",
        f"Authentic {r_c[0].capitalize()} Dish - {i}",
        r_c[0],
        ["美味", "快速", "delish", "fast"],
        20 + random.randint(0, 30),
        "入门", "Easy",
        "https://images.unsplash.com/photo-1556910103-1c02745a872f?w=600&q=80",
        [{"name_zh":"神秘食材", "name_en":"Mystery Ingredient", "amount":"少许"}],
        [
            {"action": "准备", "instruction_zh": "将所有食材备好。", "instruction_en": "Prepare all ingredients.", "hasTimer": False},
            {"action": "烹饪", "instruction_zh": "大火翻炒即可。", "instruction_en": "Stir fry on high heat.", "hasTimer": True, "timeSeconds": 120}
        ]
    ))

output_js = f"const recipesData_v2 = {json.dumps(recipes, ensure_ascii=False, indent=2)};\n"
with open("recipes.js", "w", encoding="utf-8") as f:
    f.write(output_js)
print("Data generated to recipes.js successfully!")
