events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: '#forge:ores/ender',
                output: Item.of('#forge:shards/ender'),
                xp: 0.5
            },
            {
                input: '#forge:ores/amber',
                output: Item.of('#forge:shards/amber'),
                xp: 0.5
            },
            {
                input: '#forge:ores/netherite',
                output: Item.of('minecraft:netherite_scrap'),
                xp: 2.0
            },
            {
                input: '#forge:ores/thallasium',
                output: Item.of('#forge:ingots/thallasium'),
                xp: 0.7
            },
            {
                input: 'farmersdelight:iron_knife',
                output: Item.of('#forge:nuggets/iron'),
                xp: 0.1
            },
            {
                input: 'farmersdelight:golden_knife',
                output: Item.of('#forge:nuggets/gold'),
                xp: 0.1
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input).xp(recipe.xp);
    });

    var stones = ['granite', 'diorite', 'andesite', 'limestone', 'weathered_limestone', 'dolomite', 'gabbro', 'scoria', 'dark_scoria']
    stones.forEach((cobblestone) => {
        var stone = 'create:' + cobblestone;
        if(!Item.exists(stone)) {
            stone = 'minecraft:' + cobblestone;
        }
        event.smelting(stone, 'create:' + cobblestone + '_cobblestone');
    })
});
