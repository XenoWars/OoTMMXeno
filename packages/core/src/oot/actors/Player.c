#include <combo.h>
#include <combo/sr.h>
#include <combo/dungeon.h>
#include <combo/custom.h>

void ArrowCycle_Handle(Actor_Player* link, GameState_Play* play);
void Ocarina_HandleCustomSongs(Actor_Player* link, GameState_Play* play);

void* Player_AllocObjectBuffer(u32 size)
{
    static void* sBuffer;

    if (!sBuffer)
        sBuffer = malloc(size);
    return sBuffer;
}

static void maskToggle(GameState_Play* play, Actor_Player* player, u8 maskId)
{
    /* Set the mask */
    if (player->mask)
        player->mask = 0;
    else
        player->mask = maskId;

    /* Play a sfx */
    PlaySound(0x835);
}

void comboPlayerUseItem(GameState_Play* play, Actor_Player* link, s16 itemId)
{
    void (*Player_UseItem)(GameState_Play* play, Actor_Player* link, s16 itemId);
    u8 prevMask;

    prevMask = link->mask;
    switch (itemId)
    {
    case ITEM_OOT_WEIRD_EGG:
        gComboTriggersData.events.weirdEgg = 1;
        break;
    case ITEM_OOT_POCKET_EGG:
        gComboTriggersData.events.pocketEgg = 1;
        break;
    case ITEM_OOT_MASK_BLAST:
        maskToggle(play, link, PLAYER_MASK_BLAST);
        break;
    case ITEM_OOT_MASK_STONE:
        maskToggle(play, link, PLAYER_MASK_STONE);
        break;
    default:
        Player_UseItem = OverlayAddr(0x80834000);
        Player_UseItem(play, link, itemId);
        break;
    }

    if (prevMask != link->mask)
        Interface_LoadItemIconImpl(play, 0);
}

PATCH_CALL(0x8083212c, comboPlayerUseItem);

static int prepareMask(GameState_Play* play, u16 objectId, int needsMatrix)
{
    void* obj;

    obj = comboGetObject(objectId);
    if (!obj)
        return 0;

    OPEN_DISPS(play->gs.gfx);
    if (needsMatrix)
        gSPMatrix(POLY_OPA_DISP++, 0x0d0001c0, G_MTX_NOPUSH | G_MTX_LOAD | G_MTX_MODELVIEW);
    gSPSegment(POLY_OPA_DISP++, 0x0a, obj);
    CLOSE_DISPS();

    return 1;
}

static void DrawExtendedMaskKeaton(GameState_Play* play, Actor_Player* link)
{
    if (!prepareMask(play, CUSTOM_OBJECT_ID_MASK_OOT_KEATON, 1))
        return;
    OPEN_DISPS(play->gs.gfx);
    gSPDisplayList(POLY_OPA_DISP++, CUSTOM_OBJECT_MASK_OOT_KEATON_0);
    CLOSE_DISPS();
}

static void DrawExtendedMaskSkull(GameState_Play* play, Actor_Player* link)
{
    if (!prepareMask(play, CUSTOM_OBJECT_ID_MASK_OOT_SKULL, 1))
        return;
    OPEN_DISPS(play->gs.gfx);
    gSPDisplayList(POLY_OPA_DISP++, CUSTOM_OBJECT_MASK_OOT_SKULL_0);
    CLOSE_DISPS();
}

static void DrawExtendedMaskSpooky(GameState_Play* play, Actor_Player* link)
{
    if (!prepareMask(play, CUSTOM_OBJECT_ID_MASK_OOT_SPOOKY, 1))
        return;
    OPEN_DISPS(play->gs.gfx);
    gSPDisplayList(POLY_OPA_DISP++, CUSTOM_OBJECT_MASK_OOT_SPOOKY_0);
    CLOSE_DISPS();
}

static void DrawExtendedMaskBunny(GameState_Play* play, Actor_Player* link)
{
    if (!prepareMask(play, CUSTOM_OBJECT_ID_MASK_OOT_BUNNY, 0))
        return;

    OPEN_DISPS(play->gs.gfx);
    gSPDisplayList(POLY_OPA_DISP++, CUSTOM_OBJECT_MASK_OOT_BUNNY_0);
    CLOSE_DISPS();
}

static void DrawExtendedMaskGoron(GameState_Play* play, Actor_Player* link)
{
    if (!prepareMask(play, CUSTOM_OBJECT_ID_MASK_OOT_GORON, 1))
        return;
    OPEN_DISPS(play->gs.gfx);
    gSPDisplayList(POLY_OPA_DISP++, CUSTOM_OBJECT_MASK_OOT_GORON_0);
    CLOSE_DISPS();
}

static void DrawExtendedMaskZora(GameState_Play* play, Actor_Player* link)
{
    if (!prepareMask(play, CUSTOM_OBJECT_ID_MASK_OOT_ZORA, 1))
        return;
    OPEN_DISPS(play->gs.gfx);
    gSPDisplayList(POLY_OPA_DISP++, CUSTOM_OBJECT_MASK_OOT_ZORA_0);
    CLOSE_DISPS();
}

static void DrawExtendedMaskGerudo(GameState_Play* play, Actor_Player* link)
{
    if (!prepareMask(play, CUSTOM_OBJECT_ID_MASK_OOT_GERUDO, 1))
        return;
    OPEN_DISPS(play->gs.gfx);
    gSPDisplayList(POLY_OPA_DISP++, CUSTOM_OBJECT_MASK_OOT_GERUDO_0);
    CLOSE_DISPS();
}

static void DrawExtendedMaskTruth(GameState_Play* play, Actor_Player* link)
{
    if (!prepareMask(play, CUSTOM_OBJECT_ID_MASK_OOT_TRUTH, 1))
        return;
    OPEN_DISPS(play->gs.gfx);
    gSPDisplayList(POLY_OPA_DISP++, CUSTOM_OBJECT_MASK_OOT_TRUTH_0);
    CLOSE_DISPS();
}

static void DrawExtendedMaskBlast(GameState_Play* play, Actor_Player* link)
{
    u8 opacity;

    if (!prepareMask(play, 0x01dd | MASK_FOREIGN_OBJECT, 1))
        return;
    if (gBlastMaskDelayAcc > 0x11)
        opacity = 0;
    else
        opacity = 0xff - (gBlastMaskDelayAcc * 0x0f);

    OPEN_DISPS(play->gs.gfx);
    gSPSegment(POLY_OPA_DISP++, 0x09, kDListEmpty);

    if (opacity)
    {
        gDPSetEnvColor(POLY_OPA_DISP++, 0, 0, 0, opacity);
        gSPDisplayList(POLY_OPA_DISP++, 0x0a0005c0);
    }
    else
    {
        gSPSegment(POLY_OPA_DISP++, 0x08, kDListEmpty);
        gDPSetEnvColor(POLY_OPA_DISP++, 0, 0, 0, 0xff);
        gSPDisplayList(POLY_OPA_DISP++, 0x0a000440);
    }
    CLOSE_DISPS();
}

static void DrawExtendedMaskStone(GameState_Play* play, Actor_Player* link)
{
    if (!prepareMask(play, 0x24e | MASK_FOREIGN_OBJECT, 1))
        return;

    OPEN_DISPS(play->gs.gfx);
    gSPDisplayList(POLY_OPA_DISP++, 0x0a000820);
    CLOSE_DISPS();
}

typedef void (*MaskCallback)(GameState_Play*, Actor_Player*);

static const MaskCallback kMaskCallbacks[] = {
    DrawExtendedMaskKeaton,
    DrawExtendedMaskSkull,
    DrawExtendedMaskSpooky,
    DrawExtendedMaskBunny,
    DrawExtendedMaskGoron,
    DrawExtendedMaskZora,
    DrawExtendedMaskGerudo,
    DrawExtendedMaskTruth,
    DrawExtendedMaskBlast,
    DrawExtendedMaskStone,
};

void comboDrawExtendedMask(void)
{
    GameState_Play* play;
    Actor_Player* link;
    MaskCallback cb;
    int index;

    play = gPlay;
    link = GET_LINK(play);

    if (link->mask == 0)
        return;
    index = link->mask - 1;
    if (index >= ARRAY_SIZE(kMaskCallbacks))
        return;
    cb = kMaskCallbacks[index];
    if (!cb)
        return;
    cb(play, link);
}

void Player_UpdateWrapper(Actor_Player* this, GameState_Play* play)
{
    if (gBlastMaskDelayAcc)
    {
        gBlastMaskDelayAcc--;
        if (!gBlastMaskDelayAcc)
            Interface_LoadItemIconImpl(play, 0);
    }

    ArrowCycle_Handle(this, play);
    Player_Update(this, play);
    Ocarina_HandleCustomSongs(this, play);
    comboDpadUpdate(play);
    comboDpadUse(play, DPF_EQUIP);

    if (!(this->state & (PLAYER_ACTOR_STATE_CLIMB | PLAYER_ACTOR_STATE_CLIMB2)))
    {
        if (g.delayedSwitchFlag != 0xff)
        {
            SetSwitchFlag(play, g.delayedSwitchFlag);
            g.delayedSwitchFlag = 0xff;
        }
    }

    comboSrUpdate(play);
    comboMultiProcessMessages(play);
}

int Player_DpadHook(Actor_Player* this, GameState_Play* play)
{
    if (Player_UsingItem(this))
        return 1;
    return comboDpadUse(play, DPF_ITEMS);
}

void EnGs_TalkedTo(Actor*, GameState_Play*);
void EnGm_TalkedTo(Actor*, GameState_Play*);
void EnMs_TalkedTo(Actor*, GameState_Play*);
void EnSsh_TalkedTo(Actor*, GameState_Play*);

void DemoEffect_TextRutoSapphire(GameState_Play*);

void Player_TalkDisplayTextBox(GameState_Play* play, s16 textId, Actor* actor)
{
    PlayerDisplayTextBox(play, textId, actor);
    if (actor)
    {
        switch (actor->id)
        {
        case AC_EN_GS:
            EnGs_TalkedTo(actor, play);
            break;
        case AC_EN_GM:
            EnGm_TalkedTo(actor, play);
            break;
        case AC_EN_MS:
            EnMs_TalkedTo(actor, play);
            break;
        case AC_EN_SSH:
            EnSsh_TalkedTo(actor, play);
            break;
        }
    }

    /* Ruto's Sapphire */
    if (textId == 0x4050)
        DemoEffect_TextRutoSapphire(play);
}

PATCH_CALL(0x80838464, Player_TalkDisplayTextBox);
PATCH_CALL(0x80055d50, Player_TalkDisplayTextBox);

u16 gBlastMaskDelayAcc;

static u16 blastMaskDelay(void)
{
    if (comboConfig(CFG_BLAST_MASK_DELAY_INSTANT)) return 0x001;
    if (comboConfig(CFG_BLAST_MASK_DELAY_VERYSHORT)) return 0x020;
    if (comboConfig(CFG_BLAST_MASK_DELAY_SHORT)) return 0x80;
    if (comboConfig(CFG_BLAST_MASK_DELAY_LONG)) return 0x200;
    if (comboConfig(CFG_BLAST_MASK_DELAY_VERYLONG)) return 0x400;
    return 0x136;
}

static void Player_BlastMask(GameState_Play* play, Actor_Player* link)
{
    Actor* bomb;
    s16* bombTimer;

    if (gBlastMaskDelayAcc)
        return;
    bomb = SpawnActor(&play->actorCtx, play, AC_EN_BOM, link->base.focus.pos.x, link->base.focus.pos.y, link->base.focus.pos.z, 0, 0, 0, 0);
    if (!bomb)
        return;
    bombTimer = (void*)((char*)bomb + 0x1e8);
    *bombTimer = 2;
    gBlastMaskDelayAcc = blastMaskDelay();
    Interface_LoadItemIconImpl(play, 0);
}

void Player_ProcessItemButtonsWrapper(Actor_Player* link, GameState_Play* play)
{
    void (*Player_ProcessItemButtons)(Actor_Player* link, GameState_Play* play);
    ControllerInput* input;
    int bPress;

    input = *(ControllerInput**)(OverlayAddr(0x80856734));
    Player_ProcessItemButtons = OverlayAddr(0x80831e64);
    bPress = !!(input->pressed.buttons & B_BUTTON);

    /* Handle masks that have B actions */
    if (bPress && !(link->state & (PLAYER_ACTOR_STATE_HOLD_ITEM | PLAYER_ACTOR_STATE_CUTSCENE_FROZEN)) && !Player_UsingItem(link))
    {
        switch (link->mask)
        {
        case 9:
            Player_BlastMask(play, link);
            input->pressed.buttons &= ~B_BUTTON;
            break;
        }
    }

    Player_ProcessItemButtons(link, play);
}

void Player_DrawDekuStick(void)
{
    GameState_Play* play;
    void* obj;

    play = gPlay;
    obj = comboGetObject(CUSTOM_OBJECT_ID_EQ_DEKU_STICK);
    if (!obj)
        return;

    OPEN_DISPS(play->gs.gfx);
    gSPSegment(POLY_OPA_DISP++, 0x0a, obj);
    gSPDisplayList(POLY_OPA_DISP++, CUSTOM_OBJECT_EQ_DEKU_STICK_0);
    CLOSE_DISPS();
}

void Player_AfterSetEquipmentData(GameState_Play* play)
{
    Actor_Player* player = GET_LINK(play);
    if (player->rightHandType != 0xd && /* PLAYER_MODELTYPE_RH_OCARINA */
        player->rightHandType != 0xe && /* PLAYER_MODELTYPE_RH_OOT */
        (player->heldItemAction == 0x1c || /* PLAYER_IA_OCARINA_FAIRY */
        player->heldItemAction == 0x1d)) /* PLAYER_IA_OCARINA_OF_TIME */
    {
        Player_SetModels(player, Player_ActionToModelGroup(player, player->heldItemAction));
    }
}

static Gfx sGfxCustomLeftHand[] = {
    gsSPDisplayList(0),
    gsSPSegment(0x0a, 0),
    gsSPBranchList(0),
};

static Gfx sGfxCustomRightHand[] = {
    gsSPDisplayList(0),
    gsSPSegment(0x0a, 0),
    gsSPBranchList(0),
};

static Gfx sGfxCustomSheathShield[] = {
    gsSPSegment(0x0a, 0),
    gsSPBranchList(0),
};

static Gfx sGfxCustomSheathSword[] = {
    gsSPSegment(0x0a, 0),
    gsSPBranchList(0),
};

static Gfx sGfxCustomSheath[] = {
    gsSPDisplayList(0),
    gsSPBranchList(0),
};

#define DLIST_INDIRECT(x)           (*(u32*)((x)))
#define DLIST_CHILD_LHAND_CLOSED    DLIST_INDIRECT(0x800f78ec)
#define DLIST_CHILD_RHAND_CLOSED    DLIST_INDIRECT(0x800f77c4)
#define DLIST_ADULT_LHAND_CLOSED    DLIST_INDIRECT(0x800f78e8)
#define DLIST_ADULT_RHAND_CLOSED    DLIST_INDIRECT(0x800f77b8)

static void* Player_CustomLeftHand(u32 handDlist, void* eqData, u32 eqDlist)
{
    if (!eqData)
        return NULL;

    ((u32*)sGfxCustomLeftHand)[1] = handDlist;
    ((u32*)sGfxCustomLeftHand)[3] = (u32)eqData;
    ((u32*)sGfxCustomLeftHand)[5] = eqDlist;

    osWritebackDCache(sGfxCustomLeftHand, sizeof(sGfxCustomLeftHand));

    return sGfxCustomLeftHand;
}

static void* Player_CustomRightHand(u32 handDlist, void* eqData, u32 eqDlist)
{
    if (!eqData)
        return NULL;

    ((u32*)sGfxCustomRightHand)[1] = handDlist;
    ((u32*)sGfxCustomRightHand)[3] = (u32)eqData;
    ((u32*)sGfxCustomRightHand)[5] = eqDlist;

    osWritebackDCache(sGfxCustomRightHand, sizeof(sGfxCustomRightHand));

    return sGfxCustomRightHand;
}

static void* Player_CustomSheathShield(void* eqData, u32 eqDlist)
{
    if (!eqData)
        return (void*)kDListEmpty;

    ((u32*)sGfxCustomSheathShield)[1] = (u32)eqData;
    ((u32*)sGfxCustomSheathShield)[3] = eqDlist;

    osWritebackDCache(sGfxCustomSheathShield, sizeof(sGfxCustomSheathShield));

    return sGfxCustomSheathShield;
}

static void* Player_CustomSheathSword(void* eqData, u32 eqDlist)
{
    if (!eqData)
        return (void*)kDListEmpty;

    ((u32*)sGfxCustomSheathSword)[1] = (u32)eqData;
    ((u32*)sGfxCustomSheathSword)[3] = eqDlist;

    osWritebackDCache(sGfxCustomSheathSword, sizeof(sGfxCustomSheathSword));

    return sGfxCustomSheathSword;
}

static void* dlistOrNothing(void* dlist)
{
    if (!dlist)
        return (void*)kDListEmpty;
    return dlist;
}

static void* Player_CustomSheath(void* shield, void* sword)
{
    ((u32*)sGfxCustomSheath)[1] = (u32)dlistOrNothing(shield);
    ((u32*)sGfxCustomSheath)[3] = (u32)dlistOrNothing(sword);

    osWritebackDCache(sGfxCustomSheath, sizeof(sGfxCustomSheath));

    return sGfxCustomSheath;
}

static void Player_OverrideCustomSheath(GameState_Play* play, Actor_Player* this, Gfx** dlist, int isPause)
{
    void*   shield;
    void*   sword;
    u8      swordInUse;
    u8      shieldOnBack;

    shield = NULL;
    sword = NULL;
    swordInUse = !!isPause;

    switch (this->leftHandType)
    {
    case PLAYER_MODELTYPE_LH_SWORD:
    case PLAYER_MODELTYPE_LH_SWORD_2:
    case PLAYER_MODELTYPE_LH_BGS:
        swordInUse = 1;
        break;
    }

    if (isPause)
    {
        shieldOnBack = 0;
        if (gSave.age == AGE_CHILD && gSave.equips.equipment.shields > 1)
            shieldOnBack = 1;
    }
    else
        shieldOnBack = !!(this->rightHandType != PLAYER_MODELTYPE_RH_SHIELD);
    if (shieldOnBack)
    {
        /* Shield on back */
        switch (gSave.equips.equipment.shields)
        {
        case 1:
            shield = Player_CustomSheathShield(comboGetObject(CUSTOM_OBJECT_ID_EQ_SHEATH_SHIELD_DEKU), CUSTOM_OBJECT_EQ_SHEATH_SHIELD_DEKU_0);
            break;
        case 2:
            if (gSave.age == AGE_CHILD)
                shield = Player_CustomSheathShield(comboGetObject(CUSTOM_OBJECT_ID_EQ_SHEATH_SHIELD_HYLIAN_CHILD), CUSTOM_OBJECT_EQ_SHEATH_SHIELD_HYLIAN_CHILD_0);
            else
                shield = Player_CustomSheathShield(comboGetObject(CUSTOM_OBJECT_ID_EQ_SHEATH_SHIELD_HYLIAN_ADULT), CUSTOM_OBJECT_EQ_SHEATH_SHIELD_HYLIAN_ADULT_0);
            break;
        case 3:
            shield = Player_CustomSheathShield(comboGetObject(CUSTOM_OBJECT_ID_EQ_SHEATH_SHIELD_MIRROR), CUSTOM_OBJECT_EQ_SHEATH_SHIELD_MIRROR_0);
            break;
        }
    }

    switch (gSave.equips.equipment.swords)
    {
    case 1:
        if (swordInUse)
            sword = Player_CustomSheathSword(comboGetObject(CUSTOM_OBJECT_ID_EQ_SHEATH_SWORD_OOT_CHILD_EMPTY), CUSTOM_OBJECT_EQ_SHEATH_SWORD_OOT_CHILD_EMPTY_0);
        else
            sword = Player_CustomSheathSword(comboGetObject(CUSTOM_OBJECT_ID_EQ_SHEATH_SWORD_OOT_CHILD_FULL), CUSTOM_OBJECT_EQ_SHEATH_SWORD_OOT_CHILD_FULL_0);
        break;
    case 2:
    case 3:
        if (swordInUse)
            sword = Player_CustomSheathSword(comboGetObject(CUSTOM_OBJECT_ID_EQ_SHEATH_SWORD_OOT_ADULT_EMPTY), CUSTOM_OBJECT_EQ_SHEATH_SWORD_OOT_ADULT_EMPTY_0);
        else
            sword = Player_CustomSheathSword(comboGetObject(CUSTOM_OBJECT_ID_EQ_SHEATH_SWORD_OOT_ADULT_FULL), CUSTOM_OBJECT_EQ_SHEATH_SWORD_OOT_ADULT_FULL_0);
        break;
    }

    *dlist = Player_CustomSheath(shield, sword);
}

static void Player_OverrideAdult(GameState_Play* play, Actor_Player* this, int limb, Gfx** dlist, int isPause)
{
    if (limb == PLAYER_LIMB_L_HAND)
    {
        if ((this->leftHandType == PLAYER_MODELTYPE_LH_SWORD || isPause) && gSave.equips.equipment.swords == 1)
        {
            *dlist = Player_CustomLeftHand(DLIST_ADULT_LHAND_CLOSED, comboGetObject(CUSTOM_OBJECT_ID_EQ_KOKIRI_SWORD), CUSTOM_OBJECT_EQ_KOKIRI_SWORD_0);
        }
    }

    if (limb == PLAYER_LIMB_R_HAND)
    {
        if ((this->rightHandType == PLAYER_MODELTYPE_RH_SHIELD) && gSave.equips.equipment.shields == 1)
            *dlist = Player_CustomRightHand(DLIST_ADULT_RHAND_CLOSED, comboGetObject(CUSTOM_OBJECT_ID_EQ_SHIELD_DEKU), CUSTOM_OBJECT_EQ_SHIELD_DEKU_0);
    }

    if (limb == PLAYER_LIMB_SHEATH)
    {
        if (gSave.equips.equipment.shields == 1 || gSave.equips.equipment.swords <= 1)
            Player_OverrideCustomSheath(play, this, dlist, isPause);
    }
}

static void Player_OverrideChild(GameState_Play* play, Actor_Player* this, int limb, Gfx** dlist, int isPause)
{
    if (limb == PLAYER_LIMB_L_HAND)
    {
        if ((this->leftHandType == PLAYER_MODELTYPE_LH_SWORD || this->leftHandType == PLAYER_MODELTYPE_LH_SWORD_2 || isPause) && gSave.equips.equipment.swords == 2)
            *dlist = Player_CustomLeftHand(DLIST_CHILD_LHAND_CLOSED, comboGetObject(CUSTOM_OBJECT_ID_EQ_MASTER_SWORD), CUSTOM_OBJECT_EQ_MASTER_SWORD_0);
        else if ((this->leftHandType == PLAYER_MODELTYPE_LH_BGS || isPause) && gSave.equips.equipment.swords == 3)
        {
            if (gSave.playerData.swordHealth)
                *dlist = Player_CustomLeftHand(DLIST_CHILD_LHAND_CLOSED, comboGetObject(CUSTOM_OBJECT_ID_EQ_BIGGORON_SWORD), CUSTOM_OBJECT_EQ_BIGGORON_SWORD_0);
            else
                *dlist = Player_CustomLeftHand(DLIST_CHILD_LHAND_CLOSED, comboGetObject(CUSTOM_OBJECT_ID_EQ_BIGGORON_SWORD_BROKEN), CUSTOM_OBJECT_EQ_BIGGORON_SWORD_BROKEN_0);
        }
        else if (this->leftHandType == PLAYER_MODELTYPE_LH_HAMMER)
            *dlist = Player_CustomLeftHand(DLIST_CHILD_LHAND_CLOSED, comboGetObject(CUSTOM_OBJECT_ID_EQ_HAMMER), CUSTOM_OBJECT_EQ_HAMMER_0);
    }

    if (limb == PLAYER_LIMB_R_HAND)
    {
        if ((this->rightHandType == PLAYER_MODELTYPE_RH_SHIELD) && gSave.equips.equipment.shields == 3)
            *dlist = Player_CustomRightHand(DLIST_CHILD_RHAND_CLOSED, comboGetObject(CUSTOM_OBJECT_ID_EQ_SHIELD_MIRROR), CUSTOM_OBJECT_EQ_SHIELD_MIRROR_0);
    }

    if (limb == PLAYER_LIMB_SHEATH)
    {
        if (gSave.equips.equipment.shields == 3 || gSave.equips.equipment.swords != 1)
            Player_OverrideCustomSheath(play, this, dlist, isPause);
    }
}

static void Player_OverrideCustom(GameState_Play* play, Actor_Player* this, int limb, Gfx** dlist, int isPause)
{
    if (gSave.age == AGE_CHILD)
        Player_OverrideChild(play, this, limb, dlist, isPause);
    else
        Player_OverrideAdult(play, this, limb, dlist, isPause);
}

int Player_OverrideLimbDrawGameplayDefaultWrapper(GameState_Play* play, s32 limbIndex, Gfx** dList, Vec3f* pos, Vec3s* rot, Actor_Player* player)
{
    /* Forward */
    if (Player_OverrideLimbDrawGameplayDefault(play, limbIndex, dList, pos, rot, player))
        return 0;

    Player_OverrideCustom(play, player, limbIndex, dList, 0);
    return 0;
}

int Player_OverrideLimbDrawPauseWrapper(GameState_Play* play, s32 limbIndex, Gfx** dList, Vec3f* pos, Vec3s* rot, Actor_Player* player)
{
    /* Forward */
    if (Player_OverrideLimbDrawPause(play, limbIndex, dList, pos, rot, player))
        return 0;

    Player_OverrideCustom(play, player, limbIndex, dList, 1);
    return 0;
}
