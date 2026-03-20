import json
import random

def generate_handcrafted():
    return [
        {
            "id": "r_001",
            "name": "经典红烧肉 (中式)",
            "time": 60,
            "difficulty": "中级",
            "image": "https://images.unsplash.com/photo-1544025162-811c761ccfc2?w=800&q=80",
            "ingredients": [
                {"name": "五花肉", "amount": "500g"},
                {"name": "冰糖", "amount": "30g"},
                {"name": "老抽", "amount": "2汤匙"},
                {"name": "生抽", "amount": "2汤匙"},
                {"name": "八角/桂皮/香叶", "amount": "少许"},
                {"name": "大葱", "amount": "1根"},
                {"name": "生姜", "amount": "1块"}
            ],
            "steps": [
                {
                    "title": "处理五花肉",
                    "action": "切块",
                    "instruction": "五花肉洗净，切成2厘米见方的块。",
                    "hasTimer": False
                },
                {
                    "title": "焯水去腥",
                    "action": "冷水下锅",
                    "instruction": "五花肉冷水下锅，加葱段姜片和一勺料酒。大火煮开后撇去浮沫。",
                    "hasTimer": True,
                    "timeSeconds": 300,
                    "hasParallel": True,
                    "parallelTask": "准备香料：八角2颗，桂皮1小块，香叶2片洗净备用。"
                },
                {
                    "title": "炒糖色",
                    "action": "小火熬糖",
                    "instruction": "锅中放少许油，下入冰糖，小火慢慢熬化，直到冒起密集的棕红色小泡。",
                    "hasTimer": False
                },
                {
                    "title": "煸炒上色",
                    "action": "翻炒",
                    "instruction": "迅速倒入焯好的五花肉，翻炒均匀，让每块肉都裹上糖色。加入香料和葱姜炒香。",
                    "hasTimer": False
                },
                {
                    "title": "炖煮入味 (核心步骤)",
                    "action": "加水慢炖",
                    "instruction": "加入没过肉的开水，倒入生抽老抽。大火烧开后转小火加盖慢炖40分钟。",
                    "hasTimer": True,
                    "timeSeconds": 2400,
                    "hasParallel": True,
                    "parallelTask": "现在你有长达40分钟的空闲时间，可以去洗洗青菜，或者准备一个凉菜！"
                },
                {
                    "title": "大火收汁",
                    "action": "收汁",
                    "instruction": "40分钟后开盖，挑出香料残渣，转大火不断翻炒，直到汤汁浓稠裹在肉上即可出锅！",
                    "hasTimer": True,
                    "timeSeconds": 180,
                    "hasParallel": False
                }
            ]
        },
        {
            "id": "r_002",
            "name": "西式香煎西冷牛排配芦笋",
            "time": 20,
            "difficulty": "初级",
            "image": "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
            "ingredients": [
                {"name": "西冷牛排 (厚切)", "amount": "250g"},
                {"name": "海盐", "amount": "适量"},
                {"name": "黑胡椒", "amount": "适量"},
                {"name": "黄油", "amount": "20g"},
                {"name": "大蒜", "amount": "3瓣"},
                {"name": "迷迭香", "amount": "1根"},
                {"name": "新鲜芦笋", "amount": "1把"}
            ],
            "steps": [
                {
                    "title": "牛排回温",
                    "action": "静置",
                    "instruction": "牛排提前30分钟从冰箱取出，用厨房纸吸干表面水分。两面均匀撒上海盐和现磨黑胡椒按摩入味。",
                    "hasTimer": True,
                    "timeSeconds": 1800,
                    "hasParallel": True,
                    "parallelTask": "切断芦笋根部，大蒜拍扁。不粘锅加少许橄榄油，把芦笋稍微煎熟备用。"
                },
                {
                    "title": "热锅",
                    "action": "大火空烧",
                    "instruction": "将厚底铸铁锅用大火空烧至冒白烟，倒入少许高烟点食用油。",
                    "hasTimer": False
                },
                {
                    "title": "封边煎制 (五分熟)",
                    "action": "大火快煎",
                    "instruction": "放入牛排，每面大火煎约1分钟至表面微焦产生美拉德反应。",
                    "hasTimer": True,
                    "timeSeconds": 120,
                    "hasParallel": False
                },
                {
                    "title": "黄油增香",
                    "action": "淋油",
                    "instruction": "转中火，加入黄油、大蒜和迷迭香。将融化的黄油不断用勺子淋在牛排表面，持续约30秒。",
                    "hasTimer": True,
                    "timeSeconds": 30,
                    "hasParallel": False
                },
                {
                    "title": "静置锁汁 (至关重要)",
                    "action": "移出静置",
                    "instruction": "将牛排盛出放在热盘子上，静置5分钟让肉汁重新分布，千万不要马上切开！",
                    "hasTimer": True,
                    "timeSeconds": 300,
                    "hasParallel": True,
                    "parallelTask": "利用残留的牛排黄油底油，稍微复热一下刚才的芦笋，摆盘入位。"
                }
            ]
        },
        {
            "id": "r_003",
            "name": "奶油蘑菇培根意大利面",
            "time": 25,
            "difficulty": "初级",
            "image": "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
            "ingredients": [
                {"name": "意大利面", "amount": "200g"},
                {"name": "培根片", "amount": "3片"},
                {"name": "白蘑菇", "amount": "1盒"},
                {"name": "淡奶油", "amount": "150ml"},
                {"name": "洋葱", "amount": "半个"},
                {"name": "大蒜", "amount": "2瓣"},
                {"name": "黑胡椒/盐/奶酪粉", "amount": "适量"}
            ],
            "steps": [
                {
                    "title": "备菜",
                    "action": "切片",
                    "instruction": "洋葱和大蒜切碎，培根切小段，蘑菇切片备用。",
                    "hasTimer": False
                },
                {
                    "title": "煮意面",
                    "action": "下锅煮",
                    "instruction": "大锅加足量水，加入一勺盐。水开后呈放射状下入意面，煮10分钟至面条中心带一点硬芯即可。",
                    "hasTimer": True,
                    "timeSeconds": 600,
                    "hasParallel": True,
                    "parallelTask": "在面煮制期间，另起一锅，不放油下入培根煎出油脂至焦脆，盛出备用。"
                },
                {
                    "title": "炒制底料",
                    "action": "煸炒",
                    "instruction": "利用培根油（不够可补黄油），下入洋葱大蒜爆香，加入蘑菇片炒软。",
                    "hasTimer": False
                },
                {
                    "title": "加入奶油调汁",
                    "action": "熬汁",
                    "instruction": "倒入淡奶油，小火煮至微微冒泡。加入刚刚炒好的培根，撒盐和黑胡椒调味。",
                    "hasTimer": True,
                    "timeSeconds": 120,
                    "hasParallel": False
                },
                {
                    "title": "混合包浆",
                    "action": "翻拌",
                    "instruction": "将煮好的意面捞出直接放入奶油酱中，加少许煮面水，中小火翻拌2分钟，让每根面条裹满浓郁酱汁！",
                    "hasTimer": True,
                    "timeSeconds": 120,
                    "hasParallel": True,
                    "parallelTask": "出锅前最后撒上一把帕玛森奶酪粉增加灵魂风味。"
                }
            ]
        }
    ]

def generate_bulk(start_idx, count):
    # 生成占位的其余经典菜谱名
    bulk = []
    names = [
        "鱼香肉丝", "宫保鸡丁", "麻婆豆腐", "酸菜鱼", "干锅花菜", "手撕包菜", "西红柿鸡蛋汤",
        "青椒肉丝", "糖醋排骨", "可乐鸡翅", "口水鸡", "清蒸鲈鱼", "红烧茄子", "地三鲜",
        "水煮肉片", "香干炒肉", "蒜蓉西兰花", "番茄土豆牛腩", "洋葱炒牛肉", "香煎三文鱼",
        "法式奶油炖鸡", "意大利肉酱面", "西班牙海鲜饭", "凯撒沙拉", "罗宋汤", "日式咖喱饭",
        "照烧鸡鱼饭", "韩式拌饭", "冬阴功汤", "泰式菠萝炒饭", "越南春卷", "蒜香排骨",
        "孜然羊肉", "葱烧海参", "白灼虾", "蒜蓉粉丝蒸扇贝", "剁椒鱼头", "回锅肉",
        "红烧狮子头", "松鼠桂鱼", "东坡肉", "油焖大虾", "辣子鸡丁", "毛血旺", "土豆丝",
        "农家小炒肉", "金汤肥牛"
    ]
    
    for i in range(count):
        name = names[i % len(names)]
        time = random.choice([15, 20, 30, 45, 60])
        difficulty = random.choice(["入门", "初级", "中级"])
        
        bulk.append({
            "id": f"r_{start_idx + i}",
            "name": name,
            "time": time,
            "difficulty": difficulty,
            "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
            "ingredients": [
                {"name": "主料", "amount": "500g"},
                {"name": "辅料", "amount": "适量"},
                {"name": "特制调味料", "amount": "1勺"}
            ],
            "steps": [
                {
                    "title": "准备食材",
                    "action": "切配",
                    "instruction": f"将{name}所需的食材认真清洗、切配完毕。",
                    "hasTimer": False
                },
                {
                    "title": "开始烹饪",
                    "action": "热油下锅",
                    "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
                    "hasTimer": True,
                    "timeSeconds": 120,
                    "hasParallel": False
                },
                {
                    "title": "调味与收尾",
                    "action": "大火收汁",
                    "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
                    "hasTimer": False
                }
            ]
        })
    return bulk

all_recipes = generate_handcrafted() + generate_bulk(4, 47)

js_content = f"const recipesData = {json.dumps(all_recipes, ensure_ascii=False, indent=2)};"

with open("recipes.js", "w", encoding="utf-8") as f:
    f.write(js_content)
print("recipes.js generated successfully with 50 recipes.")
