import json

recipes = []
def add_r(id_str, n_zh, n_en, cuisine, tags, time, d_zh, d_en, img, ings, steps):
    recipes.append({
        "id": id_str, "name_zh": n_zh, "name_en": n_en, "cuisine": cuisine,
        "tags": tags, "time": time, "difficulty_zh": d_zh, "difficulty_en": d_en,
        "image": img, "ingredients": ings, "steps": steps
    })

data = [
    # ================= 1. ITALIAN (10) =================
    ("i01", "培根蛋酱意面", "Classic Carbonara", "italian", ["pasta","cheese","quick"], 15, "入门", "Easy", "./images/spaghetti_carbonara.png",
     "意面:Spaghetti:200g|培根:Pancetta:100g|芝士与蛋黄:Cheese & Yolks:适量",
     "煮面:盐水煮意面8分钟。:Boil pasta for 8 mins.:480|煎肉:小火冷锅煎脆培根片。:Fry bacon from cold pan.:0|离火:意面连同少许面汤倒入培根锅，关键是必须关火。:Move pasta to bacon pan off heat.:0|乳化:疯狂拌入蛋黄芝士糊，利用余温烫成金黄浓酱。:Vigorously stir in yolk mix until creamy.:0"),
    ("i02", "番茄肉酱意面", "Pasta Bolognese", "italian", ["pasta","beef","classic"], 90, "中级", "Medium", "./images/generic_food.png",
     "牛肉糜:Ground Beef:300g|洋葱胡萝卜西芹:Mirepoix:各半个|番茄罐头:Canned Tomato:1罐",
     "炒底:黄油慢炒洋葱胡萝卜西芹末10分钟至极软。:Saute mirepoix slowly till soft.:600|炒肉:下肉糜炒至变色收干水，加红酒挥发。:Brown meat, deglaze with wine.:0|慢炖:倒入番茄泥盖上小火慢炖至少1小时以上。:Add tomato, simmer for 1 hour.:3600|拌面:肉酱浓缩后与宽面拌匀，撒帕玛森干酪。:Toss with pasta and parmesan.:0"),
    ("i03", "蒜香橄榄油意面", "Aglio e Olio", "italian", ["pasta","vegetarian","quick"], 10, "入门", "Easy", "./images/generic_food.png",
     "意面:Spaghetti:200g|初榨橄榄油:Olive Oil:50ml|大蒜与干辣椒:Garlic & Chili:大量",
     "煮面:水烧开加盐煮意面。保留煮面水！:Boil pasta, KEEP pasta water.:450|熬油:冷锅下蒜片橄榄油，极其小火慢煎至微黄。:Slowly fry garlic in cold oil till pale gold.:0|乳化:下干辣椒，马上倒小半碗煮面水与油剧烈乳化。:Add chili, instantly add pasta water to emulsify.:0|裹汁:捞出意面放入锅中猛火翻炒挂汁。:Toss pasta vigorously on high heat to glaze.:0"),
    ("i04", "平底锅玛格丽特披萨", "Pan Margherita Pizza", "italian", ["pizza","cheese"], 20, "中级", "Medium", "./images/pizza.png",
     "披萨面饼:Pizza Dough:1张|新鲜水牛奶酪:Fresh Mozzarella:1球|罗勒与番茄泥:Basil & Tomato:适量",
     "烙饼:极其热的平底锅干烙饼底至焦脆冒泡。:Dry sear dough in extremely hot pan till charred.:180|涂酱:关小火，饼面涂上薄薄的无调味番茄泥。:Lower heat, spread thin tomato paste.:0|铺料:撕上奶酪球，进烤箱最上层最高温炙烤3分钟。:Add mozzarella, broil in oven on max heat 3 mins.:180|点缀:出炉立刻撒上新鲜罗勒叶并淋橄榄油。:Top with fresh basil and olive oil.:0"),
    ("i05", "提拉米苏", "Tiramisu", "italian", ["dessert","coffee"], 30, "中级", "Medium", "./images/tiramisu.png",
     "马斯卡彭干酪:Mascarpone:250g|手指饼干:Ladyfingers:1包|浓缩咖啡与可可粉:Espresso & Cocoa:适量",
     "打发:蛋黄加糖隔水加热打至发白，拌入马斯卡彭。:Whisk yolks with sugar over heat, fold in mascarpone.:0|打发蛋清:蛋清打起泡，分次轻轻混入芝士糊。:Whip egg whites and fold gently into cheese mix.:0|蘸酒:手指饼干快速浸泡冷却的咖啡酒液，铺入模具。:Quickly dip ladyfingers in espresso/liqueur, line dish.:0|冷藏:铺一层糊一层饼干，放冰箱冷藏至少4小时以上。:Layer paste and biscuits, refrigerate 4+ hrs.:14400"),
    ("i06", "蘑菇烩饭", "Mushroom Risotto", "italian", ["rice","vegetarian"], 35, "高级", "Hard", "./images/generic_food.png",
     "意大利米(Arborio):Risotto Rice:200g|鲜蘑菇/牛肝菌:Mushrooms/Porcini:200g|鸡高汤:Chicken Stock:1L",
     "炒菇:黄油炒香切片的蘑菇，盛出备用。:Saute mushrooms in butter, set aside.:0|炒米:洋葱碎炒软，倒入生米拌炒裹油，加白葡萄酒挥发。:Saute onions, toast raw rice, deglaze with wine.:0|慢熬:保持高汤微沸，每次只加一汤勺，不停搅拌至米吸干再加，持续20分钟。:Gradually ladle hot stock, stirring constantly for 20 mins.:1200|收汁:关火混入蘑菇、大块黄油和超多干酪，疯狂翻拌至泥石流质感。:Off heat, vigorous stir in butter/cheese till fluid.:0"),
    ("i07", "千层面", "Lasagna", "italian", ["pasta","cheese","beef"], 90, "高级", "Hard", "./images/generic_food.png",
     "千层饼皮:Lasagna Sheets:1包|肉酱:Meat Ragu:500g|白汁(Bechamel):Bechamel Sauce:400ml",
     "熬白汁:黄油面粉炒香，分次加牛奶熬至浓稠无颗粒。:Make bechamel with butter, flour, and milk.:600|铺层:底层铺肉酱，放面皮，再涂白汁和肉酱，往复堆叠。:Layer meat sauce, pasta, bechamel, repeat.:0|撒芝士:顶层盖上面皮，涂满厚厚白汁和大量马苏里拉芝士。:Top with pasta, thick bechamel, and mozzarella.:0|烘烤:锡纸盖住烤20分钟，揭开再烤15分钟至焦黄。:Bake covered 20m, uncovered 15m till golden.:2100"),
    ("i08", "意式番茄罗勒烤面包", "Tomato Bruschetta", "italian", ["appetizer","vegetarian"], 15, "入门", "Easy", "./images/generic_food.png",
     "法棍/乡村包:Baguette:半根|成熟番茄:Ripe Tomatoes:2个|大蒜与罗勒:Garlic & Basil:适量",
     "切丁:番茄切微小的丁，加罗勒碎、橄榄油、盐和黑胡椒拌匀腌制。:Dice tomatoes, mix with basil, oil, salt, pepper.:0|烤包:面包切厚片，烤箱200度烤脆。:Slice bread, toast in oven till crisp.:300|抹蒜:趁热用生蒜瓣的切面疯狂摩擦硬硬的面包表面。:Rub toasted bread vigorously with raw garlic clove.:0|装盘:铺上番茄丁，淋上剩下的汁水即可食用。:Top with tomato mix and juices.:0"),
    ("i09", "卡普里沙拉", "Caprese Salad", "italian", ["salad","vegetarian"], 5, "入门", "Easy", "./images/salad.png",
     "新鲜水牛奶酪:Fresh Mozzarella:1大球|大番茄:Large Tomatoes:2个|罗勒及黑醋:Basil & Balsamic:适量",
     "切片:将番茄和马苏里拉奶酪切成厚度均匀的圆片。:Slice tomatoes and mozzarella evenly.:0|摆盘:将番茄、奶酪、罗勒叶交替层叠摆放成环形。:Arrange tomato, cheese, basil in an alternating ring.:0|调味:撒海盐黑胡椒，大量淋上优质冷榨橄榄油和浓缩黑醋汁。:Season, drizzle generously with EVOO and balsamic glaze.:0"),
    ("i10", "意式蔬菜汤", "Minestrone Soup", "italian", ["soup","vegetarian"], 40, "中级", "Medium", "./images/generic_food.png",
     "杂菜(胡萝卜西葫芦土豆):Mixed Veggies:适量|白扁豆:Cannellini Beans:1罐|小通心粉:Short Pasta:一把",
     "炒底:橄榄油炒香洋葱碎、大蒜和培根丁。:Saute onion, garlic, and pancetta in oil.:0|超菜:所有蔬菜切成一致的小丁，下锅翻炒至微微变软。:Dice all veggies uniformly, saute until slightly soft.:0|煨煮:加入去皮番茄块和鸡汤大火煮沸，转小火慢煨20分钟。:Add tomatoes/broth, bring to boil, simmer 20m.:1200|下面:直接把干通心粉和白扁豆丢进汤里，继续煮10分钟至面软。:Add dry pasta and beans, boil 10m till pasta cooked.:600"),

    # ================= 2. FRENCH (10) =================
    ("f01", "法式洋葱汤", "French Onion Soup", "french", ["soup","cheese"], 60, "中级", "Medium", "./images/french_onion_soup.png",
     "黄洋葱:Yellow Onions:4个|牛肉清汤:Beef Broth:800ml|法棍及干酪:Baguette & Gruyere:适量",
     "切丝:洋葱全部切极其细的丝。:Slice onions extremely thinly.:0|焦化:黄油小火耐心地炒洋葱丝至少30分钟，直到变成深褐色的焦糖状酱泥！:Patiently caramelize onions in butter on low for 30m till deep amber.:1800|熬煮:洒面粉炒匀，倒入半杯白葡萄酒和牛肉汤炖煮15分钟。:Deglaze with wine, add broth and simmer 15 mins.:900|顶层烤:汤盛入烤碗，顶上铺薄脆法棍和海量芝士，烤箱最高温炙烤至焦黄沸腾。:Top with bread and cheese, broil till meltingly golden.:300"),
    ("f02", "普罗旺斯炖菜", "Ratatouille", "french", ["veggie","healthy"], 50, "入门", "Easy", "./images/generic_food.png",
     "西葫芦茄子大番茄:Zucchini/Eggplant/Tomato:各1根|红椒与洋葱:Bell Pepper & Onion:适量|香草:Herbs de Provence:大量",
     "切片:各种颜色的蔬菜切成厚度绝对一致的薄片。:Slice squashes and tomatoes into perfectly uniform thin rounds.:0|炒底:将洋葱青椒和碎番茄炒成浓郁的红酱铺在烤盘底。:Saute onions/peppers/tomatoes into red sauce, spread in dish.:0|排列:将蔬菜片红绿相间交错叠放排成美丽的螺旋状。:Arrange vegetable rounds in alternating spirals.:0|烘烤:淋橄榄油盖上锡纸180度烤30分钟，揭开锡纸再烤15分钟脱水。:Bake covered 30m, uncovered 15m to condense flavor.:2700"),
    ("f03", "勃艮第炖牛肉", "Beef Bourguignon", "french", ["beef","stew","royal"], 180, "高级", "Hard", "./images/generic_food.png",
     "牛腱肉:Beef Chuck:800g|勃艮第红酒:Burgundy Wine:1瓶|小洋葱与白蘑菇:Pearl Onions/Mushrooms:各少许",
     "完美煎肉:肉表面按干，锅极热猛煎大块牛肉至四周形成彻底的焦褐硬壳。:Absolute dry beef, sear intensely until deep brown crust all over.:0|呛酒:把肉和锅里的蔬菜混合，加入整瓶红酒和牛肉高汤。:Combine meat and mirepoix, pour entire bottle of red wine and stock.:0|漫长慢炖:加入百里香和香叶，连锅移入烤箱150度烤炖长达3小时至酥烂。:Add herbs, transfer to 150C oven for 3 hours covered.:10800|配菜:开盖大火收稠浓郁的红酒汁，混入单独炒熟的小洋葱和白蘑菇。:Reduce sauce on stove, mix in separately sauteed pearl onions/mushrooms.:0"),
    ("f04", "白汁奶油炖鸡", "Chicken Fricassee", "french", ["chicken","creamy"], 40, "中级", "Medium", "./images/generic_food.png",
     "鸡腿块:Chicken Thighs:4块|白蘑菇:White Mushrooms:200g|淡奶油/蛋黄:Cream & Yolks:适量",
     "白煎:用黄油中小火慢慢把鸡腿煎熟但绝对不要上色（保持雪白）。:Saute chicken in butter without letting it brown.:0|炖煮:加入蘑菇，倒半杯白葡萄酒蒸发，倒入鸡汤勉强没过肉慢煮20分钟。:Add mushrooms, white wine, chicken broth and simmer 20m.:1200|打乳液:在碗里把淡奶油和蛋黄搅匀。千万不要直接倒进开水锅里！:Whisk cream and yolks in a bowl. Do not boil directly!:0|离火勾厚:关火，将汤一点点舀入碗里缓温，再全倒回锅内搅拌成天鹅绒般的纯白浓汤。:Off heat, temper liaison with hot broth, then return to pot forming velvety sauce.:0"),
    ("f05", "洛林法式乡村咸派", "Quiche Lorraine", "french", ["pie","brunch","bacon"], 60, "中级", "Medium", "./images/generic_food.png",
     "法式酥皮底:Pie Crust:1片|厚切培根:Thick Bacon:150g|淡奶油/牛奶/鸡蛋:Cream/Milk/Eggs:超大量",
     "盲烤派皮:派皮铺在模具上用重物压住200度先空烤15分钟定型。:Blind bake pie crust at 200C for 15m.:900|炒馅:小火炒香厚培根丁和一点点洋葱丝，铺在派底。:Fry thick bacon bits, spread onto baked pie crust.:0|蛋液:把3个蛋、大量淡奶油、少许现磨粗黑胡椒搅打均匀倒进派里。:Whisk eggs and lots of heavy cream, pour inside pie.:0|烘烤:撒上一层格律耶尔干酪，放入180度烤箱烤至表面金黄内部微颤即可。:Top with cheese, bake at 180C till golden but jiggly in center.:1800"),
    ("f06", "法式薄饼可丽饼", "Crêpes", "french", ["dessert","pancake"], 15, "入门", "Easy", "./images/generic_food.png",
     "低筋面粉:Cake Flour:125g|温牛奶:Warm Milk:250ml|鸡蛋:Eggs:2只|融化黄油:Melted Butter:少许",
     "调糊:所有材料混合搅打至绝对没有任何颗粒的水样面糊，冷藏静置30分钟极佳。:Whisk all to a watery lump-free batter. Rest 30m if possible.:0|摊饼:平底锅微热抹黄油，倒入一小勺面糊立刻转动锅子形成极薄的圆形大饼。:Pour ladle of batter into warm buttered pan, swirl to paper thin circle.:0|单面烙:烙30秒边缘微微卷起时迅速翻面再烙10秒即出锅。:Cook 30s till edges curl, flip quickly for 10s.:40|搭配:涂上 Nutella 巧克力酱抹上切片香蕉草莓，折叠成三角片食用。:Spread nutella/fruits, fold into triangles.:0"),
    ("f07", "尼斯沙拉", "Salade Niçoise", "french", ["salad","healthy"], 15, "入门", "Easy", "./images/generic_food.png",
     "吞拿鱼罐头:Canned Tuna:1听|白煮蛋:Hard Boiled Eggs:2个|四季豆/小番茄/黑橄榄:Beans/Tomatoes/Olives:适量",
     "焯水:四季豆折断入盐水焯熟，立刻过冰水保持脆绿翠性。:Blanch green beans, shock in ice water.:120|煮蛋:鸡蛋水煮7分半钟做成溏心白煮蛋，一切四瓣。:Boil eggs 7.5 mins for soft center, quarter them.:450|摆盘:沙拉碗底铺生菜，将吞拿鱼块、鸡蛋、四季豆、黑橄榄、小番茄按区域整齐摆放。:Arrange tuna, eggs, beans, olives, tomatoes beautifully on lettuce.:0|淋汁:用橄榄油、第戎芥末酱、红酒醋搅匀成油醋汁，粗放地淋在表面。:Vinaigrette: olive oil, Dijon mustard, red wine vinegar. Drizzle.:0"),
    ("f08", "香煎鸭胸肉配香橙汁", "Duck à l'Orange", "french", ["duck","fruit","fancy"], 30, "高级", "Hard", "./images/generic_food.png",
     "鸭胸肉:Duck Breast:1块|鲜橙子:Fresh Oranges:2个|君度橙酒或白兰地:Grand Marnier:一小勺",
     "切花刀:鸭皮表面切极密的菱形花刀（绝不能切到瘦肉）。:Score duck skin in tight diamond pattern without cutting meat.:0|逼油:冷锅！鸭皮朝下放入，极其微小的火慢煎15分钟逼出海量鸭油，至皮脆如纸。:COLD PAN, skin down. Render fat critically on lowest heat for 15m till crispy.:900|煎肉:翻面大火煎鸭肉那一面2分钟锁住粉色肉汁。鸭胸起锅静置5分钟！:Flip, sear meat side on high for 2m. Remove and REST breast 5m.:120|法式橙汁:倒掉鸭油，用橙汁、橙皮屑、一点糖和酒在锅中熬煮至粘稠发光，切片淋汁！:Deglaze with orange juice, zest, liquor. Reduce to glaze and pour over sliced duck.:0"),
    ("f09", "克拉芙缇樱桃烤饼", "Cherry Clafoutis", "french", ["dessert","fruit"], 45, "入门", "Easy", "./images/generic_food.png",
     "新鲜黑樱桃:Fresh Dark Cherries:300g|全脂牛奶及淡奶油:Milk & Cream:各半杯|鸡蛋/面粉/糖:Eggs/Flour/Sugar:适量",
     "洗果:新鲜樱桃洗净（正宗法式不忍心去核保留杏仁香，但为了牙齿建议去核）。:Wash cherries (traditionally unpitted for almond flavor, but pit them safely).:0|倒液:其实就是加厚的可丽饼糊：鸡蛋面粉牛奶糖搅匀即可。:Whisk eggs, flow, milk, sugar into a thick crepe-like batter.:0|烘烤:烤碗抹黄油，倒入樱桃，淋满面糊，180度烤35分钟至膨胀且边缘微焦。:Butter dish, add cherries, pour batter. Bake 180C 35m till puffed/golden.:2100|撒粉:稍稍放凉塌陷后，表面筛上厚厚的糖霜。温热或冷藏食用皆可。:Cool slightly, dust heavily with powdered sugar.:0"),
    ("f10", "法式火腿干酪三明治", "Croque Monsieur", "french", ["sandwich","cheese"], 20, "入门", "Easy", "./images/generic_food.png",
     "厚切吐司:Thick Toast:2片|巴黎火腿片:Ham Slices:2张|格吕耶尔干酪与白汁:Gruyere & Bechamel:大量",
     "抹酱:每片吐司内侧抹上一层浓浓的法式白汁（黄油面粉牛奶熬的）。:Spread béchamel sauce on inside of both bread slices.:0|叠料:铺上火腿片，大把撒入擦碎的格吕耶尔干酪，合上面包。:Add ham, pile on grated Gruyere, close sandwich.:0|顶层豪华:在三明治的最顶层再抹一层重重的白汁并疯狂堆满干酪。:Spread MORE bechamel and heaps of cheese on the TOP outer crust.:0|炙烤:入烤箱最高温烤制到顶层干酪完全熔化起泡焦黄成壳。:Broil on high until top cheese bubbles into an intensely golden crust.:300"),

    # ================= 3. CHINESE SICHUAN & HUNAN (5) =================
    ("c01", "经典麻婆豆腐", "Mapo Tofu", "sichuan", ["辣", "豆腐"], 20, "入门", "Easy", "./images/mapo_tofu.png",
     "嫩豆腐:Silken Tofu:1块|牛肉沫:Minced Beef:100g|豆瓣酱与花椒粉:Bean Paste & Pepper:适量",
     "切配焯水:切小块，沸盐水焯烫除腥捞出备用。:Boil tofu cubes in salted water, drain.:120|爆香底料:温油酥炒肉沫，加入豆瓣酱炒出红亮油脂。:Fry beef and bean paste till red oil renders.:0|咕嘟:倒入大半碗水煮沸，滑入豆腐转小火慢炖入味。:Add water, slide in tofu, simmer gently.:180|勾芡出锅:最关键的要分三次淋入水淀粉推匀至浓稠，死死裹住豆腐，表面狂撒花椒面。:Thicken iteratively with starch slurry. Top heavy with Sichuan pepper.:0"),
    ("c02", "宫保鸡丁", "Kung Pao Chicken", "sichuan", ["酸甜", "鸡肉"], 20, "中级", "Medium", "./images/kung_pao_chicken.png",
     "鸡胸或鸡腿肉:Chicken:300g|大葱与干辣椒:Scallion & Chilis:适量|花生米:Peanuts:一小碗",
     "腌制:鸡肉切丁加盐料酒蛋清淀粉抓匀。调一个“糖醋酱油水干淀粉”的灵魂碗汁。:Marinate chicken. Mix sweet and sour sauce bowl.:0|滑炒:热锅滑熟鸡丁倒出控油。:Fry chicken until just cooked, remove.:0|炝锅:底油爆香干辣椒花椒及葱姜蒜片，激发出麻辣香糊味。:Fry dried chilies and aromatics to release fiery oils.:0|合体:倒入鸡丁淋入碗汁大火快速颠勺挂汁，关火撒入酥脆花生。:Toss chicken and sauce on high heat. Add peanuts off-heat.:0"),
    ("c03", "水煮肉片", "Boiled Spicy Pork", "sichuan", ["辣", "猪肉"], 30, "中级", "Medium", "./images/generic_food.png",
     "猪里脊:Pork Tenderloin:300g|白菜或豆芽:Veggies:适量|刀口辣椒面:Sichuan Chili Flakes:三大勺",
     "切肉:肉切薄大片反复揉洗，极其水嫩后裹满蛋清淀粉。:Slice pork thinly, marinate heavily with starch and egg white.:0|垫底:蔬菜干炒至断生，铺入巨型大碗底。:Stir fry veggies, line bottom of large bowl.:0|煮汤:豆瓣酱火锅底料炒香，加水熬成红汤打去料渣。肉片一片片滑入彻底烫白柔嫩。:Boil spicy broth. Gently slide in pork till floating tender.:300|泼油:肉同汤倒在蔬菜上，顶部堆成山的蒜末和辣椒面，滚烫的热油“呲啦”一声浇上！:Pour extremely hot oil over the raw garlic/chili flakes topping!:0"),
    ("c04", "回锅肉", "Twice Cooked Pork", "sichuan", ["猪肉", "辣"], 25, "中级", "Medium", "./images/generic_food.png",
     "二刀肉(肥瘦分明):Pork Rump/Belly:350g|青蒜苗:Garlic Sprouts:一大把|甜面酱:Sweet Bean Paste:1勺",
     "白煮:整块肉煮20分钟至断生，捞出彻底放凉，切成硬币厚度大片。:Boil chunk of pork 20m, chill, slice thinly.:1200|煸炒:极少油，下肉片中小火慢火煸炒至透明并微微卷起“灯盏窝”。:Fry slices till fat renders and slices curl into cups.:0|炒料:将肉拨到一边，底油爆香豆瓣酱甜面酱，再混合肉片翻炒上色。:Fry bean paste, mix to coat pork.:0|加蒜苗:倒入青蒜苗大火狂翻1分钟断生立刻起锅。:Add sprouts, toss wildly on max heat for 1 min, serve!:60"),
    ("c05", "农家小炒肉", "Hunan Stir Fried Pork", "hunan", ["猪肉", "超级辣"], 15, "入门", "Easy", "./images/generic_food.png",
     "前腿肉:Pork Shoulder:300g|螺丝椒或青尖椒:Green Hot Chilis:很多|豆豉及大蒜:Fermented Black Beans:必须有",
     "擂椒:不用一滴油，把切断的青椒下白锅干煸擂压至表皮起虎皮焦斑，盛出备用。:Dry pan fry green chilies, press down until charred tiger spots appear.:0|炒肉:肥肉炼油，下瘦肉片猛火炒至断生微干。:Render fat pork piece, then fry lean pork slices on max mode.:0|爆香:下豆豉、大片生姜和大蒜爆出极致的香味。:Add black beans, garlic, ginger and explode flavors.:0|混炒:倒回青椒，撒酱油和一点点盐提鲜，大火翻炒10秒锅气冲天即可装盘。:Return chilies, add soy sauce, toss 10s with immense wok hei.:0"),

    # ================= 4. CHINESE YUE (Cantonese) (5) =================
    ("y01", "清蒸鲈鱼", "Steamed Sea Bass", "yue", ["海鲜", "清淡"], 15, "入门", "Easy", "./images/steamed_sea_bass.png",
     "活体鲈鱼:Live Sea Bass:1条约一斤|葱段姜丝:Scallion & Ginger:大量|蒸鱼豉油:Seasoned Soy Sauce:适量",
     "改刀:洗净鱼，背部厚肉处划刀，盘底铺葱段垫高以便热气流通。:Score fish back, prop on scallions in dish for steam flow.:0|大火蒸:水一定是完全沸腾滚开，放入鱼，大火猛蒸8分钟，关火虚蒸2分钟。:Steam on viciously boiling water for 8m, turn off and rest 2m.:480|弃水:极其关键：倒掉盘里所有恶臭蒸发出来的腥水，丢掉旧葱姜！:CRITICAL: Pour off foul fish water from plate, discard old ginger!:0|泼油淋汁:铺上全新的极细葱丝，滚油泼香，最后沿盘边淋上一圈优质蒸鱼豉油。:Top with fresh julienne scallions, pour smoking oil, drizzle soy sauce.:0"),
    ("y02", "菠萝咕噜肉", "Sweet and Sour Pork", "yue", ["猪肉", "酸甜大王"], 30, "中级", "Medium", "./images/sweet_sour_pork.png",
     "梅条肉:Pork Collar:300g|菠萝大块:Pineapple:150g|青红菜椒片:Bell Peppers:少许",
     "炸肉块:肉块腌制后裹死干淀粉，油温六成下锅炸熟，八成油温复炸至金黄爆脆响。:Coat marinated pork in dry starch, fry twice until explosive crispy.:420|调酸甜汁:番茄酱、糖、白醋、一点点盐加水搅匀备用。:Mix ketchup, sugar, white vinegar, salt, water.:0|熬芡汁:底油爆香一点蒜茸，倒入酸甜汁大火熬至浓稠起大泡亮晶晶。:Boil sweet and sour sauce until sticky glossy bubbles form.:0|秒出锅:将极脆的炸肉、菠萝、彩椒倒入锅中，离火颠勺五次立刻装盘，维持酥脆口感！:Toss crispy pork/pineapple in hot glaze off-heat instantly to retain crunch.:0"),
    ("y03", "广式蜜汁叉烧", "Cantonese Char Siu", "yue", ["猪肉", "烧腊"], 180, "中级", "Medium", "./images/generic_food.png",
     "梅花肉:Pork Collar:500g|叉烧酱(或海鲜酱南乳):Char Siu Sauce:三大勺|洋葱大蒜去腥:Onion & Garlic:适量",
     "漫长腌制:条状猪肉包裹大量酱料放入冰箱冷藏腌制至少漫长的一夜。:Marinate pork strips heavily overnight in fridge.:43200|初烤:烤箱预热200度，放入肉条中层烤制20分钟。:Roast in oven 200C for 20 mins.:1200|刷蜜复烤:取出翻面，表面狠狠刷上麦芽糖或蜂蜜水，再烤10分钟至边缘微焦发亮。:Flip, generously brush with maltose/honey, roast 10m to caramelize edges.:600|切片:室温稍静置5分钟锁汁，切成一厘米厚的诱人亮红色肉片。:Rest 5m, slice into thick stunning red pieces.:0"),
    ("y04", "白灼基围虾", "Poached Live Shrimp", "yue", ["海鲜", "极简美味"], 10, "入门", "Easy", "./images/generic_food.png",
     "鲜活大虾:Live Shrimp:500g|葱姜:Scallion/Ginger:一撮|海鲜酱油汁:Seafood Soy Dip:一碟",
     "下锅:宽水烧大开，加料酒姜片葱段。倒入活蹦乱跳的虾。:Boil water with ginger/wine, pour in bouncing live shrimp.:0|时间控制:虾壳逐渐变红翻滚，水再次将开未开的瞬间（仅仅1-2分钟），马上捞出！:Once red and water almost reboils (~1.5 min), scoop out immediately!:90|冰镇弹牙:将热虾瞬间投进冰水里激5秒钟捞起排盘，虾肉会异常紧实弹牙。:Shock in ice water for 5s to tighten meat.:0|蘸料:纯天然海鲜蘸料或极简酱油圈沙姜食用即可。:Serve merely with soy sauce and minced sand ginger.:0"),
    ("y05", "滑蛋虾仁", "Shrimp & Egg Stir-fry", "yue", ["鸡蛋", "鲜香柔嫩"], 10, "入门", "Easy", "./images/generic_food.png",
     "大青虾仁:Large Raw Shrimp:150g|鸡蛋:Eggs:4个|水淀粉与葱花:Starch Slurry & Scallions:少许",
     "洗虾:虾仁加盐反复抓洗至透明，吸干水分，少许盐蛋清淀粉上浆。:Wash shrimp with salt till clear, dry, marinate with egg white/starch.:0|炒虾:油锅温热将虾仁滑至8分熟捞出稍微降温。:Lightly pan fry shrimp till 80% done, remove.:0|调蛋液:鸡蛋打散，关键：加入两勺水淀粉和葱末拌匀，倒入温热的虾仁。:Beat eggs, CRITICAL: add starch slurry and shrimp to eggs.:0|推蛋:猛火热锅多油，倒入蛋液立刻关小火，用锅铲呈十字形状慢推，蛋液八成凝固还有蛋汁就要起锅！:Hot pan, pour egg, drop heat. Push slowly into folds. Remove when 80% set but still wet!:60"),

    # ================= 5. CHINESE LU/NORTH (5) =================
    ("l01", "绝对正宗糖醋里脊", "Sweet & Sour Pork Tender", "lu", ["猪肉", "炸脆"], 30, "中级", "Medium", "./images/generic_food.png",
     "通脊肉:Pork Loin:300g|纯土豆淀粉:Potato Starch:大半碗|糖与米醋:Sugar & Vinegar:高频使用",
     "水法挂糊:土豆淀粉加水静置，倒掉清水面留底部浓浆，加入少许油，与盐腌过的肉条抓匀成非牛顿流体。:Make stiff potato starch slurry, coat pork strips fully.:0|一炸定型:六成热宽油下肉条炸熟，微黄捞出。:Fry until cooked pale golden.:300|二炸酥脆:八成极热油，下锅十秒极速催脆！捞出控油。:Flash fry at max temp for 10s till extremely crispy.:0|糖醋汁:不加番茄酱的最正宗！锅留底油爆极少蒜末，白糖米醋清水1:1:1熬出大泡粘稠汁液，下肉离火翻匀！:Authentic way has no ketchup. Boil sugar/vinegar/water till sticky, toss meat instantly!:0"),
    ("l02", "葱爆羊肉", "Scallion Lamb", "lu", ["羊肉", "极速"], 10, "入门", "Easy", "./images/generic_food.png",
     "羊后腿肉或羊肉片:Lamb Slices:300g|大葱白:Leek Whites:两根极粗的|生抽老抽米醋:Soy sauces & Vinegar:适量",
     "切配:大葱白斜刀切跟羊肉片同等大小的滚刀块或片。羊肉片若带血水可抓少许盐酱油。:Slice leeks thickly diagonally. Marinate lamb simply.:0|猛火爆肉:锅必须烧到冒大烟！！倒凉油立刻下羊肉片，猛翻十秒羊肉变色立刻盛出（不能老出水）。:Wok MUST literally smoke! Add oil, instantly fry lamb 10s till barely browned. Remove.:60|超葱:利用羊肉余油，下大葱猛火翻炒15秒爆起葱香略带微焦。:Stir fry leeks in intense lamb fat till fragrant and slightly charred.:0|合体:倒入羊肉，沿锅边一圈生抽一圈醋（不可少这口醋气），翻拌五秒出锅起菜！:Return lamb, splash soy sauce and tiny vinegar on wok edge, toss 5s! Serve!:0"),
    ("l03", "经典北方红烧肉", "Lu Braised Pork", "lu", ["猪肉", "红烧大菜"], 60, "中级", "Medium", "./images/hong_shao_rou.png",
     "带皮五花肉:Pork Belly:500g|冰糖与八角:Rock Sugar & Anise:必备|大葱生姜红干椒:Aromatics:适量",
     "煸肉:焯完水的方块五花肉不放油下热锅小火慢煎，逼出大量多余油脂，边缘微黄。捞出倒油。:Render fat slowly from boiled pork chunks in dry pan until edges golden.:0|神级糖色:极小火冷油下冰糖，用铲子慢慢敲碎推融，直至全部变成琥珀色大泡转为密集红褐色小泡，极速下肉块疯狂翻拌裹满酒红光泽。:Melt rock sugar till dark auburn foam, violently toss pork in it to coat completely red.:0|加盖慢熬:下八角桂皮葱姜老抽料酒，倒入盖过肉极多的开水！！开小火盖上锅盖让时间做功45分钟。:Add spices/aromatics/boiling water. Slow simmer covered blindly for 45 mins.:2700|暴力收汁:时间到，挑出所有调料渣不可食用。转最大火猛烈翻滚收汁至油亮浓稠，即可出锅。:Discard spices, hit max heat to violently reduce liquid to pure sticky gloss.:0"),
    ("l04", "老北京炸酱面", "Zha Jiang Mian", "lu", ["面食", "浓酱"], 45, "中级", "Medium", "./images/generic_food.png",
     "干黄酱与甜面酱:Yellow & Sweet Bean Paste:7/3比例|五花肉丁:Pork Belly Dice:250g|手擀面与八大菜码:Noodles & Veggies:海量",
     "泄酱:黄酱甜面酱按比例加入黄酒清水搅匀稀释成稀糊糊备用。:Dilute bean pastes with cooking wine and water into slurry.:0|煸肉:五花碎丁（肥瘦四六开）下锅煸炒至吐油微干焦黄。:Fry fatty pork dice till crispy and rendered.:0|漫长熬酱:倒入酱汁，放八角大葱。转极最小极最小的火！不断用铲子贴底推炒防糊，长达30分钟以上分离出酱油分离的完美炸酱！:Pour paste mix, simmer on incredibly low heat stirring for 30m till oil separates.:1800|切菜拌面:现煮手擀面带点冷水过凉。黄瓜丝心里美白菜丝等八大菜码摆满，顶上一大勺黑亮的小碗干炸！:Boil handmade noodles. Top with 8 shredded veggies and a massive dollop of the black sauce.:0"),
    ("l05", "木须肉", "Moo Shu Pork", "lu", ["猪肉", "木耳鸡蛋家常菜"], 15, "入门", "Easy", "./images/generic_food.png",
     "里脊肉片:Pork Slices:200g|黄花菜与黑木耳:Lily flower & Wood ear:一小碗|鸡蛋与黄瓜片:Eggs & Cucumber:极多",
     "备料:木耳黄花温水泡发洗净。肉片上薄浆。鸡蛋炒块捞出。:Hydrate fungus/lily. Marinate pork. Scramble eggs softly and remove.:0|滑肉:油锅滑熟猪肉片并捞出备用，动作要快。:Fry pork slices briefly till cooked, remove.:0|爆炒:余油下葱花蒜片爆香，下木耳黄花大翻炒两下（防炸锅）。:Fry aromatics, add wood ear and lily flower tossing intensely.:0|融合:倒回肉片鸡蛋加入鲜脆的黄瓜片（不能炒老），放盐生抽猛火乱炒10秒淋一点香油出锅！:Return eggs/pork, add cucumber slices, season and toss rapidly, drizzle sesame oil.:0"),

    # ================= 6. CHINESE JIANGNAN/HUAIYANG (5) =================
    ("h01", "江南红烧狮子头", "Braised Lion's Head", "huaiyang", ["猪肉", "炖煮功夫"], 120, "高级", "Hard", "./images/lions_head.png",
     "六分肥四分瘦五花肉:Fatty Pork Belly:500g|马蹄(荸荠)或藕:Water Chestnut:100g|葱姜水:Scallion Water:1碗",
     "细切粗剁:极其关键！将肉切成石榴籽大小的微小方块，再轻轻剁两下（不能剁成肉泥）。混合切碎的马蹄。:CRITICAL: Dice pork into micro cubes, DO NOT MINCE into paste. Mix with diced water chestnut.:0|打水上劲:肉中少量多次加入葱姜水搅打极其粘稠，加一点盐糊化，团成巨大的四个大肉丸，在两手间左右摔打至成团结实不散。:Whip scallion water iteratively into pork until ultra sticky. Form 4 giant meatballs tossing between hands.:0|油炸定型:巨大的肉圆入七成热深油中炸制表面结成焦黄硬定型外壳，捞出控油。:Deep fry meatballs till a firm golden outer crust forms holding shape.:300|慢火蒸或砂锅炖:砂锅底部垫大量白菜帮防御糊底。放入肉圆注入高汤加入生抽冰糖老抽八角等调料。微火慢炖2小时至入口即化！:Place in claypot on cabbage bed, add broth/spices, stew gently for 2 hours till literally melts.:7200"),
    ("h02", "松鼠桂鱼(平民简化版)", "Squirrel Fish (Simplified)", "huaiyang", ["海鲜", "酸甜大菜"], 40, "高级", "Hard", "./images/generic_food.png",
     "整条桂鱼或鲈鱼:Whole Mandarin/Sea Bass:1条|玉米淀粉:Corn Starch:大量|茄汁甜酸酱汁:Sweet Sour Ketchup Sauce:一大碗",
     "取肉划刀:切掉鱼头。沿脊骨片下两条带皮鱼肉（尾部不切断）。在肉面斜刀斜切出菱形深缝隙，切到鱼皮但绝不能破皮！:Filet the fish leaving tail attached. Deep cross-hatch cuts into meat side stopping exactly at skin.:0|拍粉提尾:鱼肉洗净腌制后每一个缝隙都死死拍满干粉，拎起鱼尾抖掉多余淀粉，鱼肉呈现出刺猬状。:Dust every crevice with starch, shake off excess. Fish will look like a hedgehog.:0|炸制定型:极其大量的热油，手提鱼尾将有花纹的肉朝下贴入热油炸定型松鼠状，最后整条炸至金黄酥透装盘拼好。:Deep fry while holding tail to set the squirrel shape, then submerge till golden crisp.:480|浇汁:另起锅熬浓稠滚烫的茄汁糖醋浓汁加点油增加亮度，上桌前直接滚烫沸腾地浇在鱼身上听“滋溜溜”的声音！:Boil thick glossy sweet & sour sauce. Pour boiling hot over fish at table to hear the sizzle!:0"),
    ("h03", "镇江香醋排骨", "Zhenjiang Ribs", "huaiyang", ["猪肉", "酸甜"], 40, "中级", "Medium", "./images/generic_food.png",
     "猪肋排:Pork Spare Ribs:500g|镇江恒顺香醋:Zhenjiang Black Vinegar:3大勺|冰糖:Rock Sugar:一大把",
     "焯水:排骨切小段冷水下锅加大葱姜片料酒煮出血沫捞出洗净。:Cut ribs, boil from cold water to clean.:300|黄金比例调汁:一酒二酱三糖四醋五水（一勺料酒，两勺生抽，三勺白糖或冰糖，四勺陈醋，五勺清水）极其万能的配方。:Make 1:2:3:4:5 ratio sauce (1 wine, 2 soy, 3 sugar, 4 black vinegar, 5 water).:0|熬煮:排骨入锅微煎出香，倒满这碗秘制黄金糖醋汁。大火烧开转小火慢熬30分钟让醋酸蒸发留住醋香。:Fry ribs briefly, pour sauce, simmer 30m. Vinegar acid flies away leaving pure aroma.:1800|强力收汁:开盖开最大火，不断翻拌以防糊底。看汤汁卷起拉丝包裹住排骨变亮后撒白芝麻赶紧出锅！:Max heat rapid reduce till sticky sticky glaze coats ribs. Sprinkle sesame!:0"),
    ("h04", "西湖牛肉羹", "West Lake Beef Soup", "huaiyang", ["汤", "柔滑清淡"], 15, "入门", "Easy", "./images/generic_food.png",
     "牛肉泥:Minced Beef:150g|内酯嫩豆腐:Silken Tofu:半盒|香菜与蛋清:Cilantro & Egg Whites:适量",
     "细切洗净:牛肉必须剁得很细碎，洗去血水。嫩豆腐切极小颗粒。香菜切碎。:Mince beef heavily. Dice tofu micro small. Chop cilantro.:0|牛沫去腥:冷水下牛肉沫，逐渐加热水煮沸将深色血杂质全部撇干净，留下清汤。:Boil beef starting in cold water, skim absolutely all scum for clear broth.:300|滑豆腐:下豆腐粒稍微煮开。加盐白胡椒粉调个极其清淡的咸鲜底味。:Slide in tofu, season very lightly with salt and white pepper.:0|勾芡飘雪花蛋:用水淀粉淋入勾出相对浓厚的玻璃芡汁。关火！迅速淋入打散的纯蛋清，搅拌拉出雪白的云丝片片。出锅狂撒香菜碎！:Thicken broth with starch. OFF HEAT! Stream in egg whites while stirring to make white cloud ribbons.:0"),
    ("h05", "苏式阳春面", "Yangchun Noodles", "huaiyang", ["面点", "清汤素面"], 5, "入门", "Easy", "./images/noodles.png",
     "极细挂面或生切面:Thin Noodles:1把|猪油:Lard:1大勺（灵魂）|极品生抽及香葱末:High-End Soy Sauce & Scallion:适量",
     "炼猪油底:碗底挖一勺灵魂猪油！倒两勺最棒的特级生抽，撒满一大把极细嫩绿的葱花。:Add spoonful of Lard, premium soy sauce, and mass minced scallions to bottom of bowl.:0|煮面与冲汤:水大开，煮一把细如发丝的面。在面快熟时拿面汤大火冲进碗底（猪油瞬间融化芳香四溢）。:Boil thin noodles. Pour boiling starchy pasta water forcefully into the prepared bowl to melt lard.:0|折面:用长筷子将煮好的面整齐如梳子排列好，放入面碗里！:Fold cooked noodles neatly like a comb into the steaming broth.:0|品鉴:这碗面讲究“汤清如镜，面滑如丝，葱香扑鼻，不见一点肉确有脂香”。端起来尽情嗦即可。:Enjoy the ultimate minimal comfort bowl.:0")
]

for d in data:
    add_r(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], 
        [ {"name_zh":i.split(":")[0], "name_en":i.split(":")[1], "amount":i.split(":")[2]} for i in d[9].split("|") ],
        [ {"action":s.split(":")[0], "instruction_zh":s.split(":")[1], "instruction_en":s.split(":", 2)[2].rsplit(":", 1)[0], "hasTimer":int(s.rsplit(":", 1)[1])>0, "timeSeconds":int(s.rsplit(":", 1)[1])} for s in d[10].split("|") ]
    )

with open("recipes.js", "w", encoding="utf-8") as f:
    f.write(f"const recipesData_v2 = {json.dumps(recipes, ensure_ascii=False, indent=2)};\n")

print(f"BAM! Successfully baked {len(recipes)} masterpiece absolute classic recipes into recipes.js!")
