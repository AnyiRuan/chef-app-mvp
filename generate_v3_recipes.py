import json

recipes = []

def add_r(id_str, n_zh, n_en, cuisine, tags, time, d_zh, d_en, img, ings, steps):
    recipes.append({
        "id": id_str,
        "name_zh": n_zh,
        "name_en": n_en,
        "cuisine": cuisine,
        "tags": tags,
        "time": time,
        "difficulty_zh": d_zh,
        "difficulty_en": d_en,
        "image": img,
        "ingredients": ings,
        "steps": steps
    })

# ================= 1. 四川/湘菜 SICHUAN =================
add_r("s_01", "麻婆豆腐", "Mapo Tofu", "sichuan", ["辣", "豆腐", "下饭", "spicy", "tofu"], 20, "入门", "Easy", "./images/mapo_tofu.png", 
      [{"name_zh":"嫩豆腐", "name_en":"Silken Tofu", "amount":"1块"}, {"name_zh":"牛肉沫", "name_en":"Minced Beef", "amount":"100g"}, {"name_zh":"郫县豆瓣酱", "name_en":"Pixian Bean Paste", "amount":"1.5勺"}],
      [
          {"action": "切配", "instruction_zh": "豆腐切2厘米小块。", "instruction_en": "Cut tofu into 2cm cubes.", "hasTimer": False},
          {"action": "焯水", "instruction_zh": "豆腐加盐焯水去豆腥味，捞出备用。", "instruction_en": "Boil tofu in salted water, drain.", "hasTimer": True, "timeSeconds": 120, "hasParallel": True, "parallelTask_zh": "切好葱姜蒜末。", "parallelTask_en": "Mince aromatics."},
          {"action": "爆香", "instruction_zh": "爆香肉沫和豆瓣酱炒出红油。", "instruction_en": "Fry beef and bean paste until red oil emerges.", "hasTimer": False},
          {"action": "炖煮", "instruction_zh": "加水烧开后滑入豆腐，慢煮入味。", "instruction_en": "Add water, slide in tofu, simmer.", "hasTimer": True, "timeSeconds": 180},
          {"action": "勾芡", "instruction_zh": "分三次勾入水淀粉推匀，撒花椒粉和葱花出锅。", "instruction_en": "Thicken with starch slurry in 3 batches. Top with Sichuan pepper.", "hasTimer": False}
      ])

add_r("s_02", "宫保鸡丁", "Kung Pao Chicken", "sichuan", ["酸甜", "鸡肉", "花生", "chicken", "peanut"], 25, "中级", "Medium", "./images/kung_pao_chicken.png",
      [{"name_zh":"鸡腿肉", "name_en":"Chicken Thigh", "amount":"300g"}, {"name_zh":"炸花生米", "name_en":"Fried Peanuts", "amount":"一把"}, {"name_zh":"干辣椒", "name_en":"Dried Chili", "amount":"适量"}],
      [
          {"action": "腌制", "instruction_zh": "鸡丁加生抽、料酒、淀粉抓匀腌制。", "instruction_en": "Marinate diced chicken with soy sauce, wine, starch.", "hasTimer": True, "timeSeconds": 600, "hasParallel": True, "parallelTask_zh": "调好糖醋汁备用。", "parallelTask_en": "Mix sweet and sour sauce."},
          {"action": "过油", "instruction_zh": "热锅温油滑熟鸡丁，捞起控油。", "instruction_en": "Fry chicken quickly until cooked, remove.", "hasTimer": False},
          {"action": "爆香", "instruction_zh": "底油爆香干辣椒、花椒及葱姜蒜。", "instruction_en": "Fry chilies, peppercorn and aromatics.", "hasTimer": False},
          {"action": "翻炒", "instruction_zh": "倒回鸡肉，淋入糖醋汁大火收汁。", "instruction_en": "Return chicken, pour sauce and stir fry on high.", "hasTimer": False},
          {"action": "装盘", "instruction_zh": "关火混入花生米迅速出锅。", "instruction_en": "Turn off heat, mix in peanuts and serve.", "hasTimer": False}
      ])

add_r("s_03", "水煮肉片", "Sichuan Boiled Pork", "sichuan", ["辣", "猪肉", "刺激", "spicy", "pork"], 35, "高级", "Hard", "./images/generic_food.png",
      [{"name_zh":"里脊肉", "name_en":"Pork Tenderloin", "amount":"300g"}, {"name_zh":"豆芽/青菜", "name_en":"Bean Sprouts/Veggies", "amount":"200g"}, {"name_zh":"干辣椒/花椒", "name_en":"Chili & Peppercorn", "amount":"大量"}],
      [
          {"action": "切配", "instruction_zh": "肉切薄片，用蛋清、料酒、淀粉抓匀上浆。", "instruction_en": "Slice pork thinly, marinate with egg white, wine, starch.", "hasTimer": True, "timeSeconds": 900},
          {"action": "垫底", "instruction_zh": "把豆芽和青菜下锅炒熟，铺在大碗底部备用。", "instruction_en": "Stir fry veggies and place at the bottom of a large bowl.", "hasTimer": False},
          {"action": "煮汤", "instruction_zh": "热锅炒香豆瓣酱，加水烧开制成红汤。", "instruction_en": "Fry bean paste, add water and bring to boil to make red broth.", "hasTimer": True, "timeSeconds": 300},
          {"action": "滑肉", "instruction_zh": "将肉片逐片滑入沸腾的红汤中，煮至变色发白连汤倒在青菜上。", "instruction_en": "Slide pork into boiling broth until cooked, pour everything over veggies.", "hasTimer": False},
          {"action": "炝油", "instruction_zh": "肉片上铺满干辣椒段、花椒面、蒜末，淋入滚烫的热油呲啦激发出香味！", "instruction_en": "Top with chilies, pepper powder, garlic. Pour smoking hot oil over them!", "hasTimer": False}
      ])

add_r("s_04", "鱼香肉丝", "Yuxiang Shredded Pork", "sichuan", ["酸甜", "微辣", "猪肉", "pork", "sweet"], 25, "中级", "Medium", "./images/generic_food.png",
      [{"name_zh":"里脊肉", "name_en":"Pork Tenderloin", "amount":"250g"}, {"name_zh":"冬笋丝", "name_en":"Winter Bamboo Shoots", "amount":"100g"}, {"name_zh":"泡椒及木耳丝", "name_en":"Pickled Chili & Wood Ear", "amount":"适量"}],
      [
          {"action": "切配", "instruction_zh": "里脊肉、冬笋、木耳全部切均匀细丝。肉丝上浆腌制。", "instruction_en": "Julienne pork, bamboo, and mushroom. Marinate pork.", "hasTimer": True, "timeSeconds": 600, "hasParallel": True, "parallelTask_zh": "调鱼香汁（糖、醋、生抽比例重要）。", "parallelTask_en": "Prepare Yuxiang sauce (sugar, vinegar, soy sauce)."},
          {"action": "滑炒", "instruction_zh": "温油把肉丝滑散变白，捞出。", "instruction_en": "Briefly stir fry pork shred until white, remove.", "hasTimer": False},
          {"action": "爆香", "instruction_zh": "油锅爆香剁碎的泡椒出红油，加葱姜蒜末。", "instruction_en": "Fry minced pickled chili until red, add aromatics.", "hasTimer": False},
          {"action": "混炒", "instruction_zh": "下笋丝木耳丝翻炒断生，倒入肉丝。", "instruction_en": "Stir fry veggies, then return pork.", "hasTimer": False},
          {"action": "收汁", "instruction_zh": "淋入鱼香汁大火翻炒，汤汁粘稠明亮即可出锅。", "instruction_en": "Pour in sauce, stir fry on high until sticky and glossy.", "hasTimer": False}
      ])

add_r("s_05", "回锅肉", "Twice Cooked Pork", "sichuan", ["猪肉", "辣", "家常", "pork", "spicy"], 30, "中级", "Medium", "./images/generic_food.png",
      [{"name_zh":"二刀肉/五花肉", "name_en":"Pork Belly/Rump", "amount":"400g"}, {"name_zh":"蒜苗(青蒜)", "name_en":"Garlic Sprouts", "amount":"150g"}, {"name_zh":"甜面酱/豆瓣酱", "name_en":"Sweet Paste/Bean Paste", "amount":"2勺"}],
      [
          {"action": "煮肉", "instruction_zh": "整块猪肉冷水下锅加姜葱煮20分钟至筷子可扎透形，捞出放凉切薄片（即“回锅”第一步）。", "instruction_en": "Boil whole pork chunk for 20 mins until cooked. Cool and slice thinly.", "hasTimer": True, "timeSeconds": 1200},
          {"action": "煸炒", "instruction_zh": "热锅少油，将肉片一片片煸炒至出油，边缘微微卷起成“灯盏窝”。", "instruction_en": "Fry pork slices until fat renders and edges curl up like cups.", "hasTimer": False},
          {"action": "调味", "instruction_zh": "拨到锅边，底油炒香豆瓣酱和甜面酱，再把肉混匀上色。", "instruction_en": "Push meat aside, fry bean paste and sweet paste, then mix well.", "hasTimer": False},
          {"action": "加蒜苗", "instruction_zh": "倒入切段的青蒜苗，大火快速翻炒断生（只需1分钟），立刻出锅。", "instruction_en": "Add garlic sprouts, stir fry quickly on high heat for 1 min, serve.", "hasTimer": True, "timeSeconds": 60}
      ])


# ================= 2. 经典粤菜 YUE =================
add_r("y_01", "清蒸鲈鱼", "Steamed Sea Bass", "yue", ["海鲜", "清淡", "高蛋白", "seafood", "steamed"], 20, "入门", "Easy", "./images/steamed_sea_bass.png",
      [{"name_zh":"鲈鱼", "name_en":"Sea Bass", "amount":"1条"}, {"name_zh":"蒸鱼豉油", "name_en":"Seasoned Soy Sauce", "amount":"适量"}, {"name_zh":"葱姜丝", "name_en":"Scallion/Ginger", "amount":"一把"}],
      [
          {"action": "切配", "instruction_zh": "鱼身划刀，腹部塞葱姜去腥。", "instruction_en": "Score fish, stuff with scallion and ginger.", "hasTimer": False},
          {"action": "蒸", "instruction_zh": "水开后大火蒸8分钟，关火虚蒸2分钟。", "instruction_en": "Steam on high for 8 mins, rest for 2 mins.", "hasTimer": True, "timeSeconds": 480, "hasParallel": True, "parallelTask_zh": "切新鲜细长的葱姜丝。", "parallelTask_en": "Julienne fresh ginger and scallions thinly."},
          {"action": "换料", "instruction_zh": "倒掉腥水，挑去旧葱姜，铺上新鲜葱丝姜丝。", "instruction_en": "Discard fish water and old aromatics. Add fresh julienne.", "hasTimer": False},
          {"action": "炝汁", "instruction_zh": "热油泼在葱段上炝香，边缘淋入蒸鱼豉油。", "instruction_en": "Pour hot oil over scallions, drizzle soy sauce around edges.", "hasTimer": False}
      ])

add_r("y_02", "菠萝咕噜肉", "Sweet & Sour Pork with Pineapple", "yue", ["猪肉", "酸甜", "水果", "pork", "sweet"], 35, "中级", "Medium", "./images/generic_food.png",
      [{"name_zh":"肉梅肉", "name_en":"Pork Collar", "amount":"300g"}, {"name_zh":"菠萝块", "name_en":"Pineapple Chunks", "amount":"150g"}, {"name_zh":"青红椒", "name_en":"Bell Peppers", "amount":"少许"}],
      [
          {"action": "腌制", "instruction_zh": "猪肉切块加盐蛋清上浆，裹上干生粉。", "instruction_en": "Dice pork, marinate with egg white, coat in dry starch.", "hasTimer": False},
          {"action": "初炸", "instruction_zh": "六成油温下锅炸至定型微黄捞出。", "instruction_en": "Deep fry medium heat until pale golden. Remove.", "hasTimer": True, "timeSeconds": 300},
          {"action": "复炸", "instruction_zh": "油温升高，复炸30秒逼出多余油脂使其极其酥脆。", "instruction_en": "Flash fry in very hot oil for 30s for extreme crispiness.", "hasTimer": True, "timeSeconds": 30, "hasParallel": True, "parallelTask_zh": "调配番茄酱酸甜汁。", "parallelTask_en": "Mix ketchup sweet and sour sauce."},
          {"action": "混合", "instruction_zh": "锅留底油炒香青红椒，倒入酸甜汁煮开浓稠，下炸肉和新鲜菠萝块迅速翻匀出锅保脆。", "instruction_en": "Boil sauce until sticky, toss in pork, pineapple, and peppers quickly.", "hasTimer": False}
      ])

add_r("y_03", "蜜汁叉烧", "Honey BBQ Pork (Char Siu)", "yue", ["猪肉", "烧烤", "甜味", "pork", "bbq"], 120, "中级", "Medium", "./images/generic_food.png",
      [{"name_zh":"梅花肉", "name_en":"Pork Collar", "amount":"500g"}, {"name_zh":"排骨酱/海鲜酱/南乳", "name_en":"Char Siu Sauce Mix", "amount":"3勺"}, {"name_zh":"蜂蜜", "name_en":"Honey", "amount":"适量"}],
      [
          {"action": "冷藏腌制", "instruction_zh": "猪肉切长条，用所有酱料抓匀密封冷藏腌制至少12小时入味。", "instruction_en": "Slice pork into logs, marinate strictly overnight in fridge.", "hasTimer": True, "timeSeconds": 43200, "hasParallel": True, "parallelTask_zh": "睡个好觉去吧！", "parallelTask_en": "Go get some good sleep!"},
          {"action": "烤制", "instruction_zh": "烤箱预热200度，肉放烤架上烤20分钟。", "instruction_en": "Preheat oven 200C. Roast on wire rack for 20 mins.", "hasTimer": True, "timeSeconds": 1200},
          {"action": "刷蜜", "instruction_zh": "取出翻面，刷上一层厚厚的蜂蜜水，再烤15分钟至边缘焦糖化。", "instruction_en": "Flip, brush generously with honey. Roast another 15 mins till charred.", "hasTimer": True, "timeSeconds": 900},
          {"action": "切片", "instruction_zh": "稍微放凉后切片装盘，可淋少许烤盘滴落的肉汁。", "instruction_en": "Cool slightly before slicing. Drizzle with pan drippings.", "hasTimer": False}
      ])

add_r("y_04", "白灼虾", "Poached Shrimp", "yue", ["海鲜", "极简", "高蛋白", "seafood", "quick"], 10, "入门", "Easy", "./images/generic_food.png",
      [{"name_zh":"鲜活基围虾", "name_en":"Live Shrimp", "amount":"500g"}, {"name_zh":"姜片葱段", "name_en":"Ginger & Scallion", "amount":"少许"}, {"name_zh":"海鲜蘸碟", "name_en":"Seafood Soy Sauce", "amount":"一碟"}],
      [
          {"action": "清洗", "instruction_zh": "活虾剪去虾须和虾枪，挑去虾线洗净。", "instruction_en": "Trim shrimp head spikes and whiskers, clean thoroughly.", "hasTimer": False},
          {"action": "白灼", "instruction_zh": "锅中水烧滚，加姜葱料酒，倒入鲜虾大火煮约2分钟。", "instruction_en": "Boil water with ginger/wine, add shrimp to intense boil for 2 mins.", "hasTimer": True, "timeSeconds": 120},
          {"action": "冰镇", "instruction_zh": "虾身变红弯曲后立刻捞出，投入冰水中浸泡10秒保持肉质极其紧实 Q 弹。", "instruction_en": "Once red and curled, plunge immediately into ice water for 10s for firm texture.", "hasTimer": False},
          {"action": "装盘", "instruction_zh": "沥干水分，配合姜末和海鲜酱油制成的蘸水享用。", "instruction_en": "Drain and serve with a dipping sauce of minced ginger and soy sauce.", "hasTimer": False}
      ])

add_r("y_05", "蚝油生菜", "Lettuce with Oyster Sauce", "yue", ["素菜", "极简", "健康", "veggie", "quick"], 5, "入门", "Easy", "./images/generic_food.png",
      [{"name_zh":"球生菜", "name_en":"Iceberg Lettuce", "amount":"1颗"}, {"name_zh":"蚝油", "name_en":"Oyster Sauce", "amount":"2勺"}, {"name_zh":"蒜末", "name_en":"Minced Garlic", "amount":"1勺"}],
      [
          {"action": "洗净", "instruction_zh": "生菜掰成大片洗净控水。", "instruction_en": "Tear lettuce into large leaves and wash.", "hasTimer": False},
          {"action": "焯水", "instruction_zh": "水开加几滴油和盐，下生菜焯水约10-15秒（绝对不能久），立刻捞出装盘。", "instruction_en": "Blanch in boiling water with a drop of oil/salt for exactly 10-15 seconds. Plate immediately.", "hasTimer": True, "timeSeconds": 15},
          {"action": "熬汁", "instruction_zh": "另起锅爆香蒜末，加清水、蚝油、糖煮开，勾薄芡。", "instruction_en": "Fry garlic, add water, oyster sauce, sugar, boil and thicken slightly.", "hasTimer": False},
          {"action": "淋汁", "instruction_zh": "将浓郁发亮的蚝油芡汁淋在脆嫩的生菜上即可。", "instruction_en": "Pour the glossy savory sauce over the crisp lettuce.", "hasTimer": False}
      ])


# ================= 3. 传统北方/鲁菜/其他名菜 LU/OTHER =================
add_r("l_01", "经典红烧肉", "Classic Red Braised Pork", "lu", ["猪肉", "红烧", "经典", "pork", "braised"], 60, "中级", "Medium", "./images/hong_shao_rou.png",
      [{"name_zh":"带皮五花肉", "name_en":"Pork Belly with skin", "amount":"500g"}, {"name_zh":"冰糖", "name_en":"Rock Sugar", "amount":"30g"}, {"name_zh":"八角桂皮", "name_en":"Anise & Cinnamon", "amount":"少许"}],
      [
          {"action": "焯水", "instruction_zh": "五花肉切方块，冷水入锅焯水撇沫洗净。", "instruction_en": "Cube pork, boil from cold water to remove scum.", "hasTimer": True, "timeSeconds": 300},
          {"action": "炒糖色", "instruction_zh": "油锅入冰糖小火炒化至冒起密集红褐色小泡。下肉块翻炒裹上糖色。", "instruction_en": "Caramelize rock sugar in oil until dark amber bubbles. Coat pork completely.", "hasTimer": False},
          {"action": "慢炖", "instruction_zh": "加入开水没过肉块，下生抽老抽料酒香料，大火烧开转最小火加盖慢炖45分钟以上。", "instruction_en": "Add boiling water, soy sauces, wine, spices. Simmer covered on very low heat 45+ mins.", "hasTimer": True, "timeSeconds": 2700, "hasParallel": True, "parallelTask_zh": "准备一些白米饭，这菜很下饭！", "parallelTask_en": "Cook some white rice, you'll need it!"},
          {"action": "收汁", "instruction_zh": "开盖，转大火不断翻拌收汁，直到汤汁极度粘稠亮红包裹住每一块肉。", "instruction_en": "Open lid, turn to high heat and stir until sauce reduces to a thick glossy glaze.", "hasTimer": False}
      ])

add_r("l_02", "糖醋里脊", "Sweet & Sour Tenderloin", "lu", ["猪肉", "酸甜", "炸物", "pork", "sweet"], 30, "中级", "Medium", "./images/generic_food.png",
      [{"name_zh":"里脊肉", "name_en":"Pork Tenderloin", "amount":"300g"}, {"name_zh":"土豆淀粉", "name_en":"Potato Starch", "amount":"1碗"}, {"name_zh":"番茄酱/糖/白醋", "name_en":"Ketchup/Sugar/Vinegar", "amount":"各2勺"}],
      [
          {"action": "挂糊", "instruction_zh": "肉切粗条。土豆淀粉加水静置沉淀后倒掉表层清水，用底层湿淀粉和少许油抓匀肉条抓出“非牛顿流体”的老面糊感。", "instruction_en": "Cut pork into strips. Coat entirely in thick wet potato starch slurry and some oil.", "hasTimer": False},
          {"action": "炸透", "instruction_zh": "宽油烧至6成热，一根根下肉炸定型。捞出后升高油温复炸至金黄酥脆极了。", "instruction_en": "Deep fry individually until set. Flash fry again at higher temp until super crispy.", "hasTimer": True, "timeSeconds": 400},
          {"action": "熬汁", "instruction_zh": "锅中下番茄酱、糖、醋、清水熬煮至冒大泡粘稠（切忌水太多）。", "instruction_en": "Boil ketchup, sugar, white vinegar until thick bubbles form.", "hasTimer": False},
          {"action": "裹汁", "instruction_zh": "倒入炸好的里脊，离火快速翻拍十下，让每根肉均匀沾上酸甜汁且保持酥脆。", "instruction_en": "Toss crispy pork in sauce extremely quickly off-heat to retain crunch.", "hasTimer": False}
      ])

add_r("l_03", "番茄炒蛋", "Tomato and Egg Stir-fry", "lu", ["素菜", "极简", "家常", "egg", "tomato"], 10, "入门", "Easy", "./images/generic_food.png",
      [{"name_zh":"熟透大番茄", "name_en":"Ripe Tomatoes", "amount":"2个"}, {"name_zh":"鸡蛋", "name_en":"Eggs", "amount":"3个"}, {"name_zh":"白糖", "name_en":"Sugar", "amount":"1小勺"}],
      [
          {"action": "炒蛋", "instruction_zh": "鸡蛋打散。热锅猛油倒蛋液，迅速膨胀后炒碎盛出备用（鸡蛋要滑嫩不要老）。", "instruction_en": "Beat eggs. Pour into smoking hot oil to puff up, scramble softly and remove.", "hasTimer": False},
          {"action": "熬茄", "instruction_zh": "切块的番茄下锅稍加盐中火翻炒，必须炒出红亮粘稠的番茄汁液！", "instruction_en": "Stir fry chopped tomatoes with a pinch of salt until red juices release entirely.", "hasTimer": True, "timeSeconds": 180},
          {"action": "混合", "instruction_zh": "倒回鸡蛋，加少许糖提鲜，翻匀让鸡蛋吸满番茄汁，撒葱花出锅。", "instruction_en": "Return eggs, add sugar, toss so eggs absorb the tomato nectar. Top with scallions.", "hasTimer": False}
      ])

add_r("l_04", "葱爆羊肉", "Scallion Stir-fried Lamb", "lu", ["羊肉", "爆炒", "重口", "lamb", "quick"], 10, "入门", "Easy", "./images/generic_food.png",
      [{"name_zh":"羊肉片/羊卷", "name_en":"Sliced Lamb", "amount":"300g"}, {"name_zh":"大葱", "name_en":"Leek/Scallion", "amount":"2大根"}, {"name_zh":"孜然粉", "name_en":"Cumin Powder", "amount":"少许"}],
      [
          {"action": "切配", "instruction_zh": "大葱切滚刀大块备用。", "instruction_en": "Cut leeks diagonally into large chunks.", "hasTimer": False},
          {"action": "滑羊肉", "instruction_zh": "锅烧极热，倒少许油，下羊片猛火爆炒至刚变色发白，立马盛出（绝不可老）。", "instruction_en": "Stir fry lamb in extremely hot wok until barely changed color. Remove immediately.", "hasTimer": True, "timeSeconds": 60},
          {"action": "炒大葱", "instruction_zh": "余油下大葱猛火翻炒十下出浓烈葱香味。", "instruction_en": "Stir fry leeks in remaining fat until fragrant.", "hasTimer": False},
          {"action": "混炒", "instruction_zh": "倒回羊肉，加生抽、老抽上色、盐和孜然粉，大火猛翻 30 秒出锅！", "instruction_en": "Return lamb, add soy sauces, salt, cumin. Toss fiercely for 30s and serve!", "hasTimer": True, "timeSeconds": 30}
      ])

add_r("l_05", "京酱肉丝", "Peking Pork Shreds", "lu", ["猪肉", "酱香", "面点", "pork", "wrap"], 25, "中级", "Medium", "./images/generic_food.png",
      [{"name_zh":"里脊肉", "name_en":"Pork Tenderloin", "amount":"300g"}, {"name_zh":"甜面酱", "name_en":"Sweet Bean Paste", "amount":"3大勺"}, {"name_zh":"豆腐皮及大葱丝", "name_en":"Tofu Skin & Julienne Scallion", "amount":"适量"}],
      [
          {"action": "备丝", "instruction_zh": "大葱白切极细的丝铺在盘底。豆腐皮切正方形烫软备用。", "instruction_en": "Julienne scallion whites and line plate. Blanch square tofu skins.", "hasTimer": False},
          {"action": "炒肉", "instruction_zh": "里脊切丝上浆，温油滑熟盛出。", "instruction_en": "Julienne and marinate pork, fry till cooked and remove.", "hasTimer": False},
          {"action": "炒酱", "instruction_zh": "锅中倒油，下甜面酱加点糖和香油小火炒香炒亮至冒泡。", "instruction_en": "Fry sweet bean paste with sugar and sesame oil on low until bubbly and glossy.", "hasTimer": True, "timeSeconds": 120},
          {"action": "包裹", "instruction_zh": "倒回肉丝迅速翻拍让酱全数裹在肉丝上，出锅装在葱丝上。用豆腐皮卷着吃！", "instruction_en": "Return pork, toss to coat fully. Plate over scallions. Eat by wrapping in tofu skin!", "hasTimer": False}
      ])


# ================= 4. 意式风情 ITALIAN =================
add_r("i_01", "培根蛋酱意面", "Classic Spaghetti Carbonara", "italian", ["意面", "奶香", "西式", "pasta", "cheese"], 20, "入门", "Easy", "./images/spaghetti_carbonara.png",
      [{"name_zh":"意面", "name_en":"Spaghetti", "amount":"200g"}, {"name_zh":"风干猪颊肉或培根", "name_en":"Guanciale or Bacon", "amount":"100g"}, {"name_zh":"佩科里诺或帕玛森干酪", "name_en":"Pecorino/Parmesan", "amount":"50g"}, {"name_zh":"蛋黄", "name_en":"Egg Yolks", "amount":"3个"}],
      [
          {"action": "煮面", "instruction_zh": "沸腾盐水中煮意面，比包装要求少1分钟。", "instruction_en": "Boil pasta in salted water 1 min less than package instructions.", "hasTimer": True, "timeSeconds": 480, "hasParallel": True, "parallelTask_zh": "蛋黄加海量黑胡椒和擦碎的干酪打均。", "parallelTask_en": "Whisk yolks with tons of black pepper and grated cheese."},
          {"action": "煎肉", "instruction_zh": "冷锅下培根丁小火慢煎出丰厚油脂，至边缘酥脆。关火。", "instruction_en": "Fry bacon on low heat to render fat until crispy. Turn off heat.", "hasTimer": False},
          {"action": "离火混面", "instruction_zh": "将捞出的意面直接扔进培根平底锅（确保离开火源），倒少许面粉水降温并混合油脂。", "instruction_en": "Toss cooked pasta into bacon pan (off heat!). Add a splash of pasta water.", "hasTimer": False},
          {"action": "疯狂乳化", "instruction_zh": "倒入蛋黄芝士糊，疯狂翻拌让余温融化并乳化出丝滑浓郁的金色酱汁（千万不能开火变炒鸡蛋）。", "instruction_en": "Pour egg mix instantly stirring vigorously. Let residual heat emulsify into a creamy golden sauce without scrambling!", "hasTimer": False}
      ])

add_r("i_02", "香煎西冷牛排配芦笋", "Pan-Seared Sirloin Steak", "italian", ["牛肉", "西式", "高蛋白", "steak", "meat"], 15, "中级", "Medium", "./images/sirloin_steak.png",
      [{"name_zh":"厚切西冷牛排", "name_en":"Thick Cut Sirloin", "amount":"1块"}, {"name_zh":"黄油及大蒜", "name_en":"Butter & Garlic", "amount":"适量"}, {"name_zh":"芦笋", "name_en":"Asparagus", "amount":"一把"}],
      [
          {"action": "静置", "instruction_zh": "牛排提前半小时从冰箱取出回温，厨房纸彻底吸干表面，撒海盐黑胡椒。", "instruction_en": "Rest steak to room temp 30mins. Pat bone dry, season with salt & pepper.", "hasTimer": True, "timeSeconds": 1800},
          {"action": "封边猛煎", "instruction_zh": "厚铁锅烧至冒烟，淋少许极热油，牛排下锅每面猛煎1分钟形成焦褐壳。", "instruction_en": "Sear heavily in smoking hot cast iron pan, 1 min per side for crust.", "hasTimer": True, "timeSeconds": 120},
          {"action": "淋黄油", "instruction_zh": "转中火，加入超大块黄油、拍碎大蒜和迷迭香。将融化的焦香黄油不断用勺子淋在牛排上方 1 分钟。", "instruction_en": "Drop heat, add mass butter, garlic, rosemary. Continuously baste steak with melted butter for 1 min.", "hasTimer": True, "timeSeconds": 60},
          {"action": "醒肉", "instruction_zh": "牛排夹出放在温热盘子上“醒肉” 5-8 分钟锁汁！原锅黄油顺手把芦笋煎熟。", "instruction_en": "REST THE STEAK for 5-8 mins to let juices redistribute. Sauté asparagus in pan drippings.", "hasTimer": True, "timeSeconds": 300}
      ])

add_r("i_03", "经典意式肉酱面", "Pasta Bolognese", "italian", ["西面", "番茄", "耗时", "pasta", "beef"], 120, "高级", "Hard", "./images/generic_food.png",
      [{"name_zh":"牛肉与猪肉混合肉馅", "name_en":"Ground Beef & Pork Blend", "amount":"300g"}, {"name_zh":"洋葱/胡萝卜/西芹", "name_en":"Onion/Carrot/Celery (Mirepoix)", "amount":"各半个"}, {"name_zh":"去皮番茄罐头", "name_en":"Canned Peeled Tomatoes", "amount":"1罐"}, {"name_zh":"红酒及全脂牛奶", "name_en":"Red Wine & Whole Milk", "amount":"少许"}],
      [
          {"action": "炒神圣三位一体", "instruction_zh": "将洋葱胡萝卜西芹切极其微小的碎丁。平底锅融化黄油橄榄油，小火耐心慢炒蔬菜碎15分钟至彻底绵软发甜。", "instruction_en": "Finely dice mirepoix. Sauté slowly in butter/oil for 15 mins until deeply soft and sweet.", "hasTimer": True, "timeSeconds": 900},
          {"action": "炒肉", "instruction_zh": "火力调大，下入肉馅炒散至变色微焦干香，倒入一杯红酒大火让酒精挥发刮起锅底焦褐物。", "instruction_en": "High heat, brown ground meat until dry and crusted. Deglaze with red wine until evaporated.", "hasTimer": False},
          {"action": "熬炖", "instruction_zh": "倒入番茄罐头（捏碎）、半杯牛奶。大火煮开后转极小火，开盖咕嘟慢炖 2 小时以上，中途需搅拌加水。", "instruction_en": "Add hand-crushed tomatoes and milk. Simmer uncovered on lowest heat for 2+ hours until it becomes a rich, deeply integrated ragu.", "hasTimer": True, "timeSeconds": 7200},
          {"action": "拌面", "instruction_zh": "将宽面条（Tagliatelle）煮熟后投入肉酱中，撒巨量帕玛森干酪拌匀享用。", "instruction_en": "Toss cooked wide pasta naturally with the ragu, shower in Parmesan and eat.", "hasTimer": False}
      ])

add_r("i_04", "蒜香橄榄油意面", "Spaghetti Aglio e Olio", "italian", ["素面", "极简", "蒜香", "pasta", "garlic"], 10, "入门", "Easy", "./images/generic_food.png",
      [{"name_zh":"细直意面", "name_en":"Spaghetti", "amount":"200g"}, {"name_zh":"初榨橄榄油", "name_en":"Extra Virgin Olive Oil", "amount":"50ml"}, {"name_zh":"大蒜及干辣椒碎", "name_en":"Garlic & Red Pepper Flakes", "amount":"大量"}],
      [
          {"action": "煮面", "instruction_zh": "沸盐水煮意面，务必保留半小碗淀粉煮面水备用。", "instruction_en": "Boil pasta in salted water. CRITICAL: Save pasta water.", "hasTimer": True, "timeSeconds": 450},
          {"action": "慢熬蒜油", "instruction_zh": "冷锅倒入大量优质橄榄油和切极薄的大蒜片，最小火慢煎至大蒜呈淡淡的浅金黄色（绝不可焦黑发苦）。", "instruction_en": "Cold pan, olive oil, thin garlic slices. Low heat very slowly until faintly golden.", "hasTimer": False},
          {"action": "加辣椒与水", "instruction_zh": "撒入干辣椒段，接着倒入半碗热煮面水，此时油水将产生剧烈反应乳化乳白汁液。", "instruction_en": "Add chili flakes, instantly pour in pasta water to stop frying and create an emulsion.", "hasTimer": False},
          {"action": "裹面", "instruction_zh": "捞出意面放入锅中，撒欧芹碎，大火猛翻让汤汁浓缩并紧紧挂在面上，油光锃亮。", "instruction_en": "Toss pasta in pan, add parsley. High heat to glaze noodles intensely.", "hasTimer": False}
      ])

add_r("i_05", "玛格丽特披萨 (平底锅平替版)", "Margherita Pizza (Pan version)", "italian", ["披萨", "芝士", "西餐", "pizza", "cheese"], 30, "中级", "Medium", "./images/generic_food.png",
      [{"name_zh":"披萨面团或薄饼底", "name_en":"Pizza Dough / Thin Crust", "amount":"1张"}, {"name_zh":"鲜水牛马苏里拉芝士", "name_en":"Fresh Buffalo Mozzarella", "amount":"1球"}, {"name_zh":"番茄泥及新鲜罗勒", "name_en":"Tomato Purée & Fresh Basil", "amount":"适量"}],
      [
          {"action": "煎饼底", "instruction_zh": "没有高温窑炉的话，将饼底放入极热的铸铁平底锅干烙到底部焦脆形成豹纹斑点。", "instruction_en": "Place dough in scorching hot dry cast iron pan until bottom crisps with leopard spotting.", "hasTimer": True, "timeSeconds": 180},
          {"action": "铺料", "instruction_zh": "关小火，在饼面上涂抹一薄层无调味番茄泥，撕上几块新鲜水牛奶酪球块。", "instruction_en": "Lower heat. Spread thin layer of unseasoned tomato purée, tear fresh mozzarella over it.", "hasTimer": False},
          {"action": "顶部快烤", "instruction_zh": "将整个平底锅放入预热到最高温（250度+）的烤箱最上层Broil（炙烤）模式 3 分钟直到芝士融化焦黄。", "instruction_en": "Transfer pan immediately under highest oven broiler for 3 mins until cheese bubbles and chars.", "hasTimer": True, "timeSeconds": 180},
          {"action": "点缀", "instruction_zh": "出炉后撒上一把新鲜罗勒叶，淋几滴初榨橄榄油即可。", "instruction_en": "Top immediately with fresh basil leaves and a drizzle of olive oil.", "hasTimer": False}
      ])


# ================= 5. 浪漫法餐 FRENCH =================
add_r("f_01", "法式洋葱汤", "French Onion Soup", "french", ["热汤", "耗时", "芝士", "soup", "cheese"], 60, "高级", "Hard", "./images/french_onion_soup.png",
      [{"name_zh":"黄洋葱", "name_en":"Yellow Onions", "amount":"4-5个"}, {"name_zh":"高品质牛肉清汤", "name_en":"Beef Consomme/Broth", "amount":"1L"}, {"name_zh":"法棍片及格吕耶尔芝士", "name_en":"Baguette & Gruyere Cheese", "amount":"充足"}],
      [
          {"action": "切配", "instruction_zh": "洋葱全部切成丝。需要一大盆，炒完缩水只剩一点点。", "instruction_en": "Slice all onions thinly. You need a mountain, they shrink to nothing.", "hasTimer": False},
          {"action": "焦糖化(极耗时)", "instruction_zh": "厚底锅融化黄油，下洋葱中小火炒制 30-45 分钟！！必须要有耐心让洋葱自身的糖分彻底焦糖化变成深红褐色果酱状的甜香糊糊。", "instruction_en": "Melt butter. Patiently caramelize onions for 40 mins on low heat until deep mahogany jam.", "hasTimer": True, "timeSeconds": 2400},
          {"action": "除痕与熬煮", "instruction_zh": "倒入半杯干白葡萄酒洗锅底（Deglaze），然后倒入牛肉汤煮沸，加盖小火煨煮20分钟融合风味。", "instruction_en": "Deglaze with white wine, pour beef broth. Simmer covered for 20 mins to marry flavors.", "hasTimer": True, "timeSeconds": 1200},
          {"action": "烤盖顶", "instruction_zh": "汤盛入防热瓷碗，顶上漂浮两片烤过的法棍，像雪崩一样撒满厚厚的芝士！放入烤箱顶火烤至芝士沸腾形成金黄脆壳。", "instruction_en": "Ladle soup into crocks. Top with toasted baguette and bury in cheese! Broil until bubbling golden crust.", "hasTimer": True, "timeSeconds": 300}
      ])

add_r("f_02", "勃艮第红酒炖牛肉", "Beef Bourguignon", "french", ["牛肉", "红酒", "奢侈", "beef", "stew"], 180, "特级", "Hard", "./images/generic_food.png",
      [{"name_zh":"牛腱或牛肋条", "name_en":"Beef Chuck/Rib", "amount":"800g"}, {"name_zh":"勃艮第干红葡萄酒", "name_en":"Burgundy Red Wine", "amount":"1整瓶"}, {"name_zh":"培根、小洋葱、鲜蘑菇", "name_en":"Bacon, Pearl Onions, Mushrooms", "amount":"必备配菜"}],
      [
          {"action": "煎牛焯肉", "instruction_zh": "培根切条煸炒出油捞出。用培根油脂将擦干的牛肉大块分批煎出极其浓烈的红褐焦壳！", "instruction_en": "Render bacon fat, remove bacon. Sear heavily dried beef chunks in batches until thoroughly deep brown.", "hasTimer": False},
          {"action": "炒菜底", "instruction_zh": "余油炒香胡萝卜块和洋葱块。撒两勺面粉炒熟以增加浓稠度。倒回牛肉与培根。", "instruction_en": "Sauté carrots/onions in fat. Sprinkle flour and cook out raw taste. Return meats.", "hasTimer": False},
          {"action": "沉醉慢炖", "instruction_zh": "极其奢侈地倒下整瓶红酒！放入香草束(百里香相叶迷迭香)。大火煮滚后放入160度烤箱加盖慢炖漫长的 2.5 小时。", "instruction_en": "Pour entire bottle of wine! Add bouquet garni. Boil, cover, move to 160C oven for 2.5 hours till fork tender.", "hasTimer": True, "timeSeconds": 9000, "hasParallel": True, "parallelTask_zh": "黄油独立炒香小珍珠洋葱和鲜白蘑菇。", "parallelTask_en": "Separately sauté pearl onions and mushrooms in butter."},
          {"action": "浓缩合体", "instruction_zh": "出炉后将独立炒香的洋葱蘑菇汇入锅中，开盖炉灶收汁至红酒酱汁浓重黏稠包裹每一寸牛肉。", "instruction_en": "Stir in the reserved mushrooms and onions. Reduce sauce on stovetop until deeply glazed.", "hasTimer": False}
      ])

add_r("f_03", "奶香白汁白蘑菇鸡肉炖汤 (Fricassee)", "Chicken Fricassee", "french", ["鸡肉", "奶香", "浓汤", "chicken", "cream"], 40, "中级", "Medium", "./images/generic_food.png",
      [{"name_zh":"带骨鸡腿肉", "name_en":"Chicken Thighs (bone in)", "amount":"4块"}, {"name_zh":"鲜白蘑菇", "name_en":"White Button Mushrooms", "amount":"200g"}, {"name_zh":"淡奶油及干白葡萄酒", "name_en":"Heavy Cream & White Wine", "amount":"1小碗"}],
      [
          {"action": "白灼煎", "instruction_zh": "黄油与橄榄油将鸡腿肉不带上色地煎至微熟（不要变成焦黄色，法式白炖需要保持颜色洁净）。", "instruction_en": "Sauté chicken in butter/oil without browning it (keep it pale).", "hasTimer": False},
          {"action": "煨煮", "instruction_zh": "加入蘑菇片翻炒。倒半杯干白葡萄酒蒸发酒精。加入鸡高汤刚好没过鸡盖小火煨煮 25 分钟。", "instruction_en": "Add sliced mushrooms. Deglaze with wine. Add chicken stock to cover and simmer 25 mins.", "hasTimer": True, "timeSeconds": 1500},
          {"action": "打入白汁(Liaison)", "instruction_zh": "将两颗蛋黄和浓奶油在碗中打匀（法式终极增稠剂）。关火！将汤汁逐渐舀入碗里缓温，再全倒回锅中！", "instruction_en": "Whisk yolks and heavy cream. TURN OFF HEAT. Temper liaison with hot broth, return to pot.", "hasTimer": False},
          {"action": "成型", "instruction_zh": "用余温不断搅拌，使汤汁变成天鹅绒般丝滑纯白的浓浆包裹鸡腿，滴几滴鲜柠檬汁提味。", "instruction_en": "Stir gently off heat until sauce becomes a velvety pale emulsion. Add drops of lemon juice.", "hasTimer": False}
      ])

add_r("f_04", "普罗旺斯炖菜 (Ratatouille)", "Ratatouille", "french", ["纯素", "蔬菜", "健康", "veggie", "healthy"], 45, "入门", "Easy", "./images/generic_food.png",
      [{"name_zh":"西葫芦/茄子/番茄", "name_en":"Zucchini/Eggplant/Tomato", "amount":"各1根/个"}, {"name_zh":"红青椒", "name_en":"Bell Peppers", "amount":"1个"}, {"name_zh":"普罗旺斯香草", "name_en":"Herbes de Provence", "amount":"必须有"}],
      [
          {"action": "精致切片", "instruction_zh": "将所有蔬菜如同强迫症般切成毫米级一样厚度的圆片（电影里那样，原版其实是切丁切块）。", "instruction_en": "Slice all vegetables into perfectly uniform thin rounds.", "hasTimer": False},
          {"action": "炒酱底", "instruction_zh": "洋葱碎大蒜碎同碎番茄、青椒丁炒烂成充满甜香气味的番茄杂菜泥（Piperade），平铺在烤盘底部。", "instruction_en": "Sauté onion, garlic, chopped peppers into a rich tomato piperade. Spread at base of baking dish.", "hasTimer": False},
          {"action": "艺术排列", "instruction_zh": "将切好的蔬菜片以“西葫芦-茄子-番茄”的循序交叠排列成美丽的螺旋状铺在酱泥上。", "instruction_en": "Arrange the vegetable rounds in alternating overlapping spirals over the sauce.", "hasTimer": False},
          {"action": "烘烤", "instruction_zh": "表面喷涂大量橄榄油，撒海盐黑胡椒和普罗旺斯香草。盖锡纸进入180度烤箱烤 30 分钟。最后揭纸烤15分钟析出水分浓缩风味。", "instruction_en": "Drizzle olive oil, herbs, salt. Bake covered at 180C for 30m, then open 15m to condense flavor.", "hasTimer": True, "timeSeconds": 2700}
      ])


output_js = f"const recipesData_v2 = {json.dumps(recipes, ensure_ascii=False, indent=2)};\n"
with open("recipes.js", "w", encoding="utf-8") as f:
    f.write(output_js)
print("Massive 25 recipe Global Database Generated successfully!")
