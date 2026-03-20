const recipesData = [
  {
    "id": "r_001",
    "name": "经典红烧肉 (中式)",
    "time": 60,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1544025162-811c761ccfc2?w=800&q=80",
    "ingredients": [
      {
        "name": "五花肉",
        "amount": "500g"
      },
      {
        "name": "冰糖",
        "amount": "30g"
      },
      {
        "name": "老抽",
        "amount": "2汤匙"
      },
      {
        "name": "生抽",
        "amount": "2汤匙"
      },
      {
        "name": "八角/桂皮/香叶",
        "amount": "少许"
      },
      {
        "name": "大葱",
        "amount": "1根"
      },
      {
        "name": "生姜",
        "amount": "1块"
      }
    ],
    "steps": [
      {
        "title": "处理五花肉",
        "action": "切块",
        "instruction": "五花肉洗净，切成2厘米见方的块。",
        "hasTimer": false
      },
      {
        "title": "焯水去腥",
        "action": "冷水下锅",
        "instruction": "五花肉冷水下锅，加葱段姜片和一勺料酒。大火煮开后撇去浮沫。",
        "hasTimer": true,
        "timeSeconds": 300,
        "hasParallel": true,
        "parallelTask": "准备香料：八角2颗，桂皮1小块，香叶2片洗净备用。"
      },
      {
        "title": "炒糖色",
        "action": "小火熬糖",
        "instruction": "锅中放少许油，下入冰糖，小火慢慢熬化，直到冒起密集的棕红色小泡。",
        "hasTimer": false
      },
      {
        "title": "煸炒上色",
        "action": "翻炒",
        "instruction": "迅速倒入焯好的五花肉，翻炒均匀，让每块肉都裹上糖色。加入香料和葱姜炒香。",
        "hasTimer": false
      },
      {
        "title": "炖煮入味 (核心步骤)",
        "action": "加水慢炖",
        "instruction": "加入没过肉的开水，倒入生抽老抽。大火烧开后转小火加盖慢炖40分钟。",
        "hasTimer": true,
        "timeSeconds": 2400,
        "hasParallel": true,
        "parallelTask": "现在你有长达40分钟的空闲时间，可以去洗洗青菜，或者准备一个凉菜！"
      },
      {
        "title": "大火收汁",
        "action": "收汁",
        "instruction": "40分钟后开盖，挑出香料残渣，转大火不断翻炒，直到汤汁浓稠裹在肉上即可出锅！",
        "hasTimer": true,
        "timeSeconds": 180,
        "hasParallel": false
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
      {
        "name": "西冷牛排 (厚切)",
        "amount": "250g"
      },
      {
        "name": "海盐",
        "amount": "适量"
      },
      {
        "name": "黑胡椒",
        "amount": "适量"
      },
      {
        "name": "黄油",
        "amount": "20g"
      },
      {
        "name": "大蒜",
        "amount": "3瓣"
      },
      {
        "name": "迷迭香",
        "amount": "1根"
      },
      {
        "name": "新鲜芦笋",
        "amount": "1把"
      }
    ],
    "steps": [
      {
        "title": "牛排回温",
        "action": "静置",
        "instruction": "牛排提前30分钟从冰箱取出，用厨房纸吸干表面水分。两面均匀撒上海盐和现磨黑胡椒按摩入味。",
        "hasTimer": true,
        "timeSeconds": 1800,
        "hasParallel": true,
        "parallelTask": "切断芦笋根部，大蒜拍扁。不粘锅加少许橄榄油，把芦笋稍微煎熟备用。"
      },
      {
        "title": "热锅",
        "action": "大火空烧",
        "instruction": "将厚底铸铁锅用大火空烧至冒白烟，倒入少许高烟点食用油。",
        "hasTimer": false
      },
      {
        "title": "封边煎制 (五分熟)",
        "action": "大火快煎",
        "instruction": "放入牛排，每面大火煎约1分钟至表面微焦产生美拉德反应。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "黄油增香",
        "action": "淋油",
        "instruction": "转中火，加入黄油、大蒜和迷迭香。将融化的黄油不断用勺子淋在牛排表面，持续约30秒。",
        "hasTimer": true,
        "timeSeconds": 30,
        "hasParallel": false
      },
      {
        "title": "静置锁汁 (至关重要)",
        "action": "移出静置",
        "instruction": "将牛排盛出放在热盘子上，静置5分钟让肉汁重新分布，千万不要马上切开！",
        "hasTimer": true,
        "timeSeconds": 300,
        "hasParallel": true,
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
      {
        "name": "意大利面",
        "amount": "200g"
      },
      {
        "name": "培根片",
        "amount": "3片"
      },
      {
        "name": "白蘑菇",
        "amount": "1盒"
      },
      {
        "name": "淡奶油",
        "amount": "150ml"
      },
      {
        "name": "洋葱",
        "amount": "半个"
      },
      {
        "name": "大蒜",
        "amount": "2瓣"
      },
      {
        "name": "黑胡椒/盐/奶酪粉",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "title": "备菜",
        "action": "切片",
        "instruction": "洋葱和大蒜切碎，培根切小段，蘑菇切片备用。",
        "hasTimer": false
      },
      {
        "title": "煮意面",
        "action": "下锅煮",
        "instruction": "大锅加足量水，加入一勺盐。水开后呈放射状下入意面，煮10分钟至面条中心带一点硬芯即可。",
        "hasTimer": true,
        "timeSeconds": 600,
        "hasParallel": true,
        "parallelTask": "在面煮制期间，另起一锅，不放油下入培根煎出油脂至焦脆，盛出备用。"
      },
      {
        "title": "炒制底料",
        "action": "煸炒",
        "instruction": "利用培根油（不够可补黄油），下入洋葱大蒜爆香，加入蘑菇片炒软。",
        "hasTimer": false
      },
      {
        "title": "加入奶油调汁",
        "action": "熬汁",
        "instruction": "倒入淡奶油，小火煮至微微冒泡。加入刚刚炒好的培根，撒盐和黑胡椒调味。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "混合包浆",
        "action": "翻拌",
        "instruction": "将煮好的意面捞出直接放入奶油酱中，加少许煮面水，中小火翻拌2分钟，让每根面条裹满浓郁酱汁！",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": true,
        "parallelTask": "出锅前最后撒上一把帕玛森奶酪粉增加灵魂风味。"
      }
    ]
  },
  {
    "id": "r_4",
    "name": "鱼香肉丝",
    "time": 60,
    "difficulty": "入门",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将鱼香肉丝所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_5",
    "name": "宫保鸡丁",
    "time": 60,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将宫保鸡丁所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_6",
    "name": "麻婆豆腐",
    "time": 30,
    "difficulty": "入门",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将麻婆豆腐所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_7",
    "name": "酸菜鱼",
    "time": 20,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将酸菜鱼所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_8",
    "name": "干锅花菜",
    "time": 45,
    "difficulty": "入门",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将干锅花菜所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_9",
    "name": "手撕包菜",
    "time": 30,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将手撕包菜所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_10",
    "name": "西红柿鸡蛋汤",
    "time": 20,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将西红柿鸡蛋汤所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_11",
    "name": "青椒肉丝",
    "time": 15,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将青椒肉丝所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_12",
    "name": "糖醋排骨",
    "time": 20,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将糖醋排骨所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_13",
    "name": "可乐鸡翅",
    "time": 15,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将可乐鸡翅所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_14",
    "name": "口水鸡",
    "time": 30,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将口水鸡所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_15",
    "name": "清蒸鲈鱼",
    "time": 45,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将清蒸鲈鱼所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_16",
    "name": "红烧茄子",
    "time": 15,
    "difficulty": "入门",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将红烧茄子所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_17",
    "name": "地三鲜",
    "time": 15,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将地三鲜所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_18",
    "name": "水煮肉片",
    "time": 15,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将水煮肉片所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_19",
    "name": "香干炒肉",
    "time": 30,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将香干炒肉所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_20",
    "name": "蒜蓉西兰花",
    "time": 60,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将蒜蓉西兰花所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_21",
    "name": "番茄土豆牛腩",
    "time": 15,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将番茄土豆牛腩所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_22",
    "name": "洋葱炒牛肉",
    "time": 15,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将洋葱炒牛肉所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_23",
    "name": "香煎三文鱼",
    "time": 30,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将香煎三文鱼所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_24",
    "name": "法式奶油炖鸡",
    "time": 45,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将法式奶油炖鸡所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_25",
    "name": "意大利肉酱面",
    "time": 15,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将意大利肉酱面所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_26",
    "name": "西班牙海鲜饭",
    "time": 15,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将西班牙海鲜饭所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_27",
    "name": "凯撒沙拉",
    "time": 20,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将凯撒沙拉所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_28",
    "name": "罗宋汤",
    "time": 60,
    "difficulty": "入门",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将罗宋汤所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_29",
    "name": "日式咖喱饭",
    "time": 15,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将日式咖喱饭所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_30",
    "name": "照烧鸡鱼饭",
    "time": 60,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将照烧鸡鱼饭所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_31",
    "name": "韩式拌饭",
    "time": 20,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将韩式拌饭所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_32",
    "name": "冬阴功汤",
    "time": 30,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将冬阴功汤所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_33",
    "name": "泰式菠萝炒饭",
    "time": 60,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将泰式菠萝炒饭所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_34",
    "name": "越南春卷",
    "time": 15,
    "difficulty": "入门",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将越南春卷所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_35",
    "name": "蒜香排骨",
    "time": 15,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将蒜香排骨所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_36",
    "name": "孜然羊肉",
    "time": 45,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将孜然羊肉所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_37",
    "name": "葱烧海参",
    "time": 15,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将葱烧海参所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_38",
    "name": "白灼虾",
    "time": 30,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将白灼虾所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_39",
    "name": "蒜蓉粉丝蒸扇贝",
    "time": 20,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将蒜蓉粉丝蒸扇贝所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_40",
    "name": "剁椒鱼头",
    "time": 30,
    "difficulty": "入门",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将剁椒鱼头所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_41",
    "name": "回锅肉",
    "time": 20,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将回锅肉所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_42",
    "name": "红烧狮子头",
    "time": 30,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将红烧狮子头所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_43",
    "name": "松鼠桂鱼",
    "time": 15,
    "difficulty": "入门",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将松鼠桂鱼所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_44",
    "name": "东坡肉",
    "time": 30,
    "difficulty": "中级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将东坡肉所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_45",
    "name": "油焖大虾",
    "time": 20,
    "difficulty": "入门",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将油焖大虾所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_46",
    "name": "辣子鸡丁",
    "time": 60,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将辣子鸡丁所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_47",
    "name": "毛血旺",
    "time": 15,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将毛血旺所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_48",
    "name": "土豆丝",
    "time": 15,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将土豆丝所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_49",
    "name": "农家小炒肉",
    "time": 15,
    "difficulty": "入门",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将农家小炒肉所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  },
  {
    "id": "r_50",
    "name": "金汤肥牛",
    "time": 15,
    "difficulty": "初级",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    "ingredients": [
      {
        "name": "主料",
        "amount": "500g"
      },
      {
        "name": "辅料",
        "amount": "适量"
      },
      {
        "name": "特制调味料",
        "amount": "1勺"
      }
    ],
    "steps": [
      {
        "title": "准备食材",
        "action": "切配",
        "instruction": "将金汤肥牛所需的食材认真清洗、切配完毕。",
        "hasTimer": false
      },
      {
        "title": "开始烹饪",
        "action": "热油下锅",
        "instruction": "油热后放入葱姜蒜爆香，随后加入主料不停翻炒。",
        "hasTimer": true,
        "timeSeconds": 120,
        "hasParallel": false
      },
      {
        "title": "调味与收尾",
        "action": "大火收汁",
        "instruction": "加入酱油、盐等调味料，大火翻炒入味后即可出锅。",
        "hasTimer": false
      }
    ]
  }
];