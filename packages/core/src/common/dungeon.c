#include <combo.h>
#include <combo/dungeon.h>

void comboDungeonSetFlags(int dungeonId, int mmCycle)
{
    switch (dungeonId)
    {
    case DUNGEONID_DEKU_TREE:
        BITMAP16_SET(gOotSave.eventsChk, EV_OOT_CHK_EMERALD_TREE_DEAD);
        BITMAP16_SET(gOotSave.eventsChk, EV_OOT_CHK_GOHMA);
        BITMAP16_SET(gOotSave.eventsChk, EV_OOT_CHK_TREE_DEAD);
        BITMAP16_SET(gOotSave.eventsChk, EV_OOT_CHK_MIDO_TREE_DEAD);
        gMiscFlags.dekuClear = 1;
        break;
    case DUNGEONID_DODONGO_CAVERN:
        gMiscFlags.dodongoClear = 1;
        break;
    case DUNGEONID_JABU_JABU:
        gMiscFlags.jabuClear = 1;
        break;
    case DUNGEONID_TEMPLE_FOREST:
        gMiscFlags.forestClear = 1;
        break;
    case DUNGEONID_TEMPLE_FIRE:
        gMiscFlags.fireClear = 1;
        break;
    case DUNGEONID_TEMPLE_WATER:
        BITMAP16_SET(gOotSave.eventsChk, EV_OOT_CHK_LAKE_HYLIA_WATER);
        gMiscFlags.waterClear = 1;
        break;
    case DUNGEONID_TEMPLE_SPIRIT:
        gMiscFlags.spiritClear = 1;
        break;
    case DUNGEONID_TEMPLE_SHADOW:
        gMiscFlags.shadowClear = 1;
        break;
    case DUNGEONID_TEMPLE_WOODFALL:
        gMmExtraBoss.boss |= (1 << 0);
        if (mmCycle)
        {
            MM_SET_EVENT_WEEK(EV_MM_WEEK_DUNGEON_WF);
            if (comboConfig(CFG_MM_CLEAR_OPEN_WF))
            {
                MM_SET_EVENT_WEEK(EV_MM_WEEK_WOODFALL_TEMPLE_RISE);
            }
        }
        gMiscFlags.woodfallClear = 1;
        break;
    case DUNGEONID_TEMPLE_SNOWHEAD:
        gMmExtraBoss.boss |= (1 << 1);
        if (mmCycle)
        {
            MM_SET_EVENT_WEEK(EV_MM_WEEK_DUNGEON_SH);
        }
        gMiscFlags.snowheadClear = 1;
        break;
    case DUNGEONID_TEMPLE_GREAT_BAY:
        gMmExtraBoss.boss |= (1 << 2);
        if (mmCycle)
        {
            MM_SET_EVENT_WEEK(EV_MM_WEEK_DUNGEON_GB);
            if (comboConfig(CFG_MM_CLEAR_OPEN_GB))
            {
                MM_SET_EVENT_WEEK(EV_MM_WEEK_GREAT_BAY_TURTLE);
            }
        }
        gMiscFlags.greatBayClear = 1;
        break;
    case DUNGEONID_TEMPLE_STONE_TOWER_INVERTED:
        gMmExtraBoss.boss |= (1 << 3);
        if (mmCycle)
        {
            MM_SET_EVENT_WEEK(EV_MM_WEEK_DUNGEON_ST);
        }
        gMiscFlags.ikanaClear = 1;
        break;
    }
}

int comboBossDungeon(int dungeonId)
{
    for (int i = 0; i <= BOSSID_TWINMOLD; ++i)
    {
        if (gComboData.boss[i] == dungeonId)
            return i;
    }
    return -1;
}
