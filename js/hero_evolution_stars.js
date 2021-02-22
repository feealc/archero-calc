
function calcStar()
{
    kTEXT_HEROSTAR_MIN = document.getElementById(kTEXT_HEROSTAR_MIN_ID)
    kTEXT_HEROSTAR_MAX = document.getElementById(kTEXT_HEROSTAR_MAX_ID)

    level_min = kTEXT_HEROSTAR_MIN.value
    level_max = kTEXT_HEROSTAR_MAX.value
    // console.log("level_min [%s] level_max [%s]", level_min, level_max)

    if (!validate_star(level_min, "min"))
        return
    if (!validate_star(level_max, "max"))
        return

    var chips = 0
    var chips_gold = 0
    var chips_gold_total = 0
    var shards = 0
    var shards_gold = 0
    var gold_total = 0
    for (var i = parseInt(level_min); i <= parseInt(level_max); i++)
    {
        chips_gold = 0

        var info = get_star_info(i)
        // console.log("=======================================")
        // dump_obj_console(info)
        if (info.no_info)
        {
            alert(kMSG_HELP.replace("XXX", String((i - 1))))
            break
        }

        if (info && info.chips && info.shards)
        {
            // chips
            info.chips.forEach(function(value, index, array){
                chips += value.cost
                chips_gold += value.gold
                // console.log("chips gold [%s] gold each [%s]", chips_gold.toLocaleString(), value.gold.toLocaleString())
            })
            chips_gold_total += chips_gold

            // shards
            shards += info.shards.cost
            shards_gold += info.shards.gold
        }
    }
    gold_total = chips_gold_total + shards_gold
    // console.log("chips [%s] gold [%s]", chips, chips_gold.toLocaleString())
    // console.log("shards [%s] gold [%s]", shards, shards_gold.toLocaleString())
    // console.log("gold total [%s]", gold_total.toLocaleString())

    kSPAN_HEROSTAR_CHIPS = document.getElementById(kSPAN_HEROSTAR_CHIPS_ID)
    kSPAN_HEROSTAR_CHIPS.textContent = "Evolution Chips: " + chips.toLocaleString() + " (Gold: " + chips_gold_total.toLocaleString() + ")"
    kSPAN_HEROSTAR_SHARDS = document.getElementById(kSPAN_HEROSTAR_SHARDS_ID)
    kSPAN_HEROSTAR_SHARDS.textContent = "Shards: " + shards.toLocaleString() + " (Gold: " + shards_gold.toLocaleString() + ")"
    kSPAN_HEROSTAR_GOLD_TOTAL = document.getElementById(kSPAN_HEROSTAR_GOLD_TOTAL_ID)
    kSPAN_HEROSTAR_GOLD_TOTAL.textContent = "Total Gold: " + gold_total.toLocaleString()
}

function validate_star(level, order)
{
    if (isNaN(level) || level < 1 || level > 7)
    {
        alert("Star invalid. Values accepted is 1 to 7.")
        if (order == "min")
            kTEXT_HEROSTAR_MIN.focus()
        else if (order == "max")
            kTEXT_HEROSTAR_MAX.focus()

        return false
    }

    return true
}

function get_star_info(level)
{
    var info

    switch (level)
    {
        case 1:
            info = {
                chips: [
                    { cost: 20, gold: 1000 },
                    { cost: 20, gold: 1500 },
                    { cost: 20, gold: 2000 },
                    { cost: 20, gold: 2500 },
                    { cost: 20, gold: 3000 },
                ],
                shards: {
                    cost: 10,
                    gold: 10000,
                },
            }
            break

        case 2:
            info = {
                chips: [
                    { cost: 30, gold: 3500 },
                    { cost: 30, gold: 4000 },
                    { cost: 30, gold: 4500 },
                    { cost: 30, gold: 5000 },
                    { cost: 30, gold: 5500 },
                    { cost: 30, gold: 6000 },
                    { cost: 30, gold: 6500 },
                    { cost: 30, gold: 7000 },
                    { cost: 30, gold: 7500 },
                    { cost: 30, gold: 8000 },
                ],
                shards: {
                    cost: 20,
                    gold: 30000,
                },
            }
            break

        case 3:
            info = {
                chips: [
                    { cost: 50, gold: 8500 },
                    { cost: 50, gold: 9000 },
                    { cost: 50, gold: 9500 },
                    { cost: 50, gold: 10000 },
                    { cost: 50, gold: 10500 },
                    { cost: 50, gold: 11000 },
                    { cost: 50, gold: 11500 },
                    { cost: 50, gold: 12000 },
                    { cost: 50, gold: 12500 },
                    { cost: 50, gold: 13000 },
                ],
                shards: {
                    cost: 40,
                    gold: 50000,
                },
            }
            break

        case 4:
            info = {
                chips: [
                    { cost: 100, gold: 14000 },
                    { cost: 100, gold: 15000 },
                    { cost: 100, gold: 16000 },
                    { cost: 100, gold: 17000 },
                    { cost: 100, gold: 18000 },
                    { cost: 100, gold: 19000 },
                    { cost: 100, gold: 20000 },
                    { cost: 100, gold: 21000 },
                    { cost: 100, gold: 22000 },
                    { cost: 100, gold: 23000 },
                ],
                shards: {
                    cost: 80,
                    gold: 100000,
                },
            }
            break

        case 5:
            info = {
                no_info: true,
                // chips: [
                //     { cost: ??, gold: ?? },
                // ],
                // shards: {
                //     cost: 150,
                //     gold: 200000,
                // },
            }
            break

        case 6:
            info = {
                no_info: true,
                // chips: [
                //     { cost: ??, gold: ?? },
                // ],
                // shards: {
                //     cost: 250,
                //     gold: 350000,
                // },
            }
            break

        case 7:
            info = {
                no_info: true,
                // chips: [
                //     { cost: 500, gold: 88000 },
                // ],
                // shards: {
                //     cost: ??,
                //     gold: ??,
                // },
            }
            break
    }

    return info
}
