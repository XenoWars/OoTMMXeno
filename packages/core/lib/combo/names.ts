import { ItemID } from './items/defs';

const ITEM_NAMES: {[k in ItemID]: string} = {
  MM_ARROW_FIRE: "Fire Arrows (MM)",
  MM_ARROW_ICE: "Ice Arrows (MM)",
  MM_ARROW_LIGHT: "Light Arrows (MM)",
  MM_ARROWS_10: "10 Arrows (MM)",
  MM_ARROWS_30: "30 Arrows (MM)",
  MM_ARROWS_40: "40 Arrows (MM)",
  MM_BOMB_BAG: "Bomb Bag (MM)",
  MM_BOMB: "Bomb (MM)",
  MM_BOMBCHU_10: "10 Bombchu (MM)",
  MM_BOMBCHU_20: "20 Bombchu (MM)",
  MM_BOMBCHU_5: "5 Bombchu (MM)",
  MM_BOMBCHU: "1 Bombchu (MM)",
  MM_BOMBER_NOTEBOOK: "Bombers' Notebook",
  MM_BOMBS_10: "10 Bombs (MM)",
  MM_BOMBS_20: "20 Bombs (MM)",
  MM_BOMBS_30: "30 Bombs (MM)",
  MM_BOMBS_5: "5 Bombs (MM)",
  MM_BOSS_KEY_GB: "Boss Key (Great Bay Temple)",
  MM_BOSS_KEY_SH: "Boss Key (Snowhead Temple)",
  MM_BOSS_KEY_ST: "Boss Key (Stone Tower Temple)",
  MM_BOSS_KEY_WF: "Boss Key (Woodfall Temple)",
  MM_BOTTLE_CHATEAU: "Bottle of Chateau Romani",
  MM_BOTTLE_EMPTY: "Empty Bottle (MM)",
  MM_BOTTLE_MILK: "Bottle of Milk (MM)",
  MM_BOTTLE_POTION_RED: "Bottle of Red Potion (MM)",
  MM_BOTTLE_POTION_GREEN: "Bottle of Green Potion (MM)",
  MM_BOTTLE_POTION_BLUE: "Bottle of Blue Potion (MM)",
  OOT_BOTTLE_POTION_RED: "Bottle of Red Potion (OoT)",
  OOT_BOTTLE_POTION_GREEN: "Bottle of Green Potion (OoT)",
  OOT_BOTTLE_POTION_BLUE: "Bottle of Blue Potion (OoT)",
  MM_BOTTLED_GOLD_DUST: "Bottle of Gold Dust",
  MM_BOW: "Hero's Bow (MM)",
  MM_BUGS: "Bugs (MM)",
  MM_CHATEAU: "Chateau Romani Refill (MM)",
  MM_COMPASS_GB: "Compass (Great Bay Temple)",
  MM_COMPASS_SH: "Compass (Snowhead Temple)",
  MM_COMPASS_ST: "Compass (Stone Tower Temple)",
  MM_COMPASS_WF: "Compass (Woodfall Temple)",
  MM_DEED_LAND: "Land Title Deed",
  MM_DEED_MOUNTAIN: "Mountain Title Deed",
  MM_DEED_OCEAN: "Ocean Title Deed",
  MM_DEED_SWAMP: "Swamp Title Deed",
  MM_DEFENSE_UPGRADE: "Double Defense (MM)",
  MM_FAIRY: "Fairy (MM)",
  MM_FISH: "Fish (MM)",
  MM_GREAT_FAIRY_SWORD: "Great Fairy's Sword",
  MM_GS_TOKEN_OCEAN: "Ocean Skulltula Token",
  MM_GS_TOKEN_SWAMP: "Swamp Skulltula Token",
  MM_HEART_CONTAINER: "Heart Container (MM)",
  MM_HEART_PIECE: "Piece of Heart (MM)",
  MM_HOOKSHOT: "Hookshot (MM)",
  MM_KEY_RING_GB: "Key Ring (Great Bay)",
  MM_KEY_RING_SH: "Key Ring (Snowhead)",
  MM_KEY_RING_ST: "Key Ring (Stone Tower)",
  MM_KEY_RING_WF: "Key Ring (Woodfall)",
  MM_LENS: "Lens of Truth (MM)",
  MM_LETTER_TO_KAFEI: "Letter to Kafei",
  MM_LETTER_TO_MAMA: "Letter to Mama",
  MM_MAGIC_BEAN: "Magic Bean (MM)",
  MM_MAGIC_UPGRADE: "Magic Upgrade (MM)",
  MM_MAP_GB: "Map (Great Bay Temple)",
  MM_MAP_SH: "Map (Snowhead Temple)",
  MM_MAP_ST: "Map (Stone Tower Temple)",
  MM_MAP_WF: "Map (Woodfall Temple)",
  MM_MASK_ALL_NIGHT: "All-Night Mask",
  MM_MASK_BLAST: "Blast Mask",
  MM_MASK_BREMEN: "Bremen Mask",
  MM_MASK_BUNNY: "Bunny Hood (MM)",
  MM_MASK_CAPTAIN: "Captain's Hat",
  MM_MASK_COUPLE: "Couple's Mask",
  MM_MASK_DEKU: "Deku Mask",
  MM_MASK_DON_GERO: "Don Gero's Mask",
  MM_MASK_FIERCE_DEITY: "Fierce Deity's Mask",
  MM_MASK_GARO: "Garo's Mask",
  MM_MASK_GIANT: "Giant's Mask",
  MM_MASK_GIBDO: "Gibdo Mask",
  MM_MASK_GORON: "Goron Mask (MM)",
  MM_MASK_GREAT_FAIRY: "Great Fairy's Mask",
  MM_MASK_KAFEI: "Kafei's Mask",
  MM_MASK_KAMARO: "Kamaro's Mask",
  MM_MASK_KEATON: "Keaton Mask",
  MM_MASK_POSTMAN: "Postman's Hat",
  MM_MASK_ROMANI: "Romani's Mask",
  MM_MASK_SCENTS: "Mask of Scents",
  MM_MASK_STONE: "Stone Mask",
  MM_MASK_TROUPE_LEADER: "Circus Leader's Mask",
  MM_MASK_TRUTH: "Mask of Truth (MM)",
  MM_MASK_ZORA: "Zora Mask (MM)",
  MM_MILK: "Romani Milk",
  MM_MOON_TEAR: "Moon's Tear",
  MM_NUT: "Nut (MM)",
  MM_NUTS_10: "10 Deku Nuts (MM)",
  MM_NUTS_5: "5 Deku Nuts (MM)",
  MM_OCARINA: "Ocarina (MM)",
  MM_OWL_CLOCK_TOWN: "Owl Statue (Clock Town)",
  MM_OWL_GREAT_BAY: "Owl Statue (Great Bay)",
  MM_OWL_IKANA_CANYON: "Owl Statue (Ikana Canyon)",
  MM_OWL_MILK_ROAD: "Owl Statue (Milk Road)",
  MM_OWL_MOUNTAIN_VILLAGE: "Owl Statue (Mountain Village)",
  MM_OWL_SNOWHEAD: "Owl Statue (Snowhead)",
  MM_OWL_SOUTHERN_SWAMP: "Owl Statue (Southern Swamp)",
  MM_OWL_STONE_TOWER: "Owl Statue (Stone Tower)",
  MM_OWL_WOODFALL: "Owl Statue (Woodfall)",
  MM_OWL_ZORA_CAPE: "Owl Statue (Zora Cape)",
  MM_PENDANT_OF_MEMORIES: "Pendant of Memories",
  MM_PICTOGRAPH_BOX: "Pictograph Box",
  MM_POTION_BLUE: "Blue Potion (MM)",
  MM_POTION_GREEN: "Green Potion (MM)",
  MM_POTION_RED: "Red Potion (MM)",
  MM_POWDER_KEG: "Powder Keg",
  MM_RECOVERY_HEART: "Recovery Heart (MM)",
  MM_REMAINS_GOHT: "Goht's Remains",
  MM_REMAINS_GYORG: "Gyorg's Remains",
  MM_REMAINS_ODOLWA: "Odolwa's Remains",
  MM_REMAINS_TWINMOLD: "Twinmold's Remains",
  MM_ROOM_KEY: "Room Key",
  MM_RUPEE_BLUE: "Blue Rupee (MM)",
  MM_RUPEE_GOLD: "Gold Rupee (MM)",
  MM_RUPEE_GREEN: "Green Rupee (MM)",
  MM_RUPEE_PURPLE: "Purple Rupee (MM)",
  MM_RUPEE_RED: "Red Rupee (MM)",
  MM_RUPEE_SILVER: "Silver Rupee (MM)",
  MM_SHIELD_HERO: "Hero's Shield",
  MM_SHIELD_MIRROR: "Mirror Shield (MM)",
  MM_SHIELD: "Progressive Shield (MM)",
  MM_SKELETON_KEY: "Skeleton Key (MM)",
  MM_SMALL_KEY_GB: "Small Key (Great Bay Temple)",
  MM_SMALL_KEY_SH: "Small Key (Snowhead Temple)",
  MM_SMALL_KEY_ST: "Small Key (Stone Tower Temple)",
  MM_SMALL_KEY_WF: "Small Key (Woodfall Temple)",
  MM_SONG_AWAKENING: "Sonata of Awakening",
  MM_SONG_EMPTINESS: "Elegy of Emptiness",
  MM_SONG_EPONA: "Epona's Song (MM)",
  MM_SONG_GORON_HALF: "Progressive Goron Lullaby",
  MM_SONG_GORON: "Goron Lullaby",
  MM_SONG_HEALING: "Song of Healing",
  MM_SONG_ORDER: "Oath to Order",
  MM_SONG_SOARING: "Song of Soaring",
  MM_SONG_STORMS: "Song of Storms (MM)",
  MM_SONG_SUN: "Sun's Song (MM)",
  MM_SONG_TIME: "Song of Time (MM)",
  MM_SONG_ZORA: "New Wave Bossa Nova",
  MM_SOUL_ENEMY_ARMOS: "Soul of Armos (MM)",
  MM_SOUL_ENEMY_BAD_BAT: "Soul of Bad Bats (MM)",
  MM_SOUL_ENEMY_BEAMOS: "Soul of Beamos (MM)",
  MM_SOUL_ENEMY_BIO_BABA: "Soul of Bio Babas (MM)",
  MM_SOUL_ENEMY_BOE: "Soul of Boes (MM)",
  MM_SOUL_ENEMY_BUBBLE: "Soul of Bubbles (MM)",
  MM_SOUL_ENEMY_CAPTAIN_KEETA: "Soul of Captain Keeta (MM)",
  MM_SOUL_ENEMY_CHUCHU: "Soul of Chuchus (MM)",
  MM_SOUL_ENEMY_DEEP_PYTHON: "Soul of Deep Python (MM)",
  MM_SOUL_ENEMY_DEKU_BABA: "Soul of Deku Babas (MM)",
  MM_SOUL_ENEMY_DEKU_SCRUB: "Soul of Deku Scrubs (MM)",
  MM_SOUL_ENEMY_DEXIHAND: "Soul of Dexihands (MM)",
  MM_SOUL_ENEMY_DODONGO: "Soul of Dodongos (MM)",
  MM_SOUL_ENEMY_DRAGONFLY: "Soul of Dragonflies (MM)",
  MM_SOUL_ENEMY_EENO: "Soul of Eenoes (MM)",
  MM_SOUL_ENEMY_EYEGORE: "Soul of Eyegores (MM)",
  MM_SOUL_ENEMY_FLOORMASTER: "Soul of Floormasters (MM)",
  MM_SOUL_ENEMY_FLYING_POT: "Soul of Flying Pots (MM)",
  MM_SOUL_ENEMY_FREEZARD: "Soul of Freezards (MM)",
  MM_SOUL_ENEMY_GARO: "Soul of Garo (MM)",
  MM_SOUL_ENEMY_GEKKO: "Soul of Gekkos (MM)",
  MM_SOUL_BOSS_GOHT: "Soul of Goht (MM)",
  MM_SOUL_ENEMY_GOMESS: "Soul of Gomess (MM)",
  MM_SOUL_ENEMY_GUAY: "Soul of Guays (MM)",
  MM_SOUL_BOSS_GYORG: "Soul of Gyorg (MM)",
  MM_SOUL_ENEMY_HIPLOOP: "Soul of Hiploops (MM)",
  MM_SOUL_BOSS_IGOS: "Soul of Igos (MM)",
  MM_SOUL_ENEMY_IRON_KNUCKLE: "Soul of Iron Knuckles (MM)",
  MM_SOUL_ENEMY_KEESE: "Soul of Keese (MM)",
  MM_SOUL_ENEMY_LEEVER: "Soul of Leevers (MM)",
  MM_SOUL_ENEMY_LIKE_LIKE: "Soul of Like Likes (MM)",
  MM_SOUL_ENEMY_LIZALFOS_DINALFOS: "Soul of Lizalfos/Dinolfos (MM)",
  MM_SOUL_ENEMY_NEJIRON: "Soul of Nejirons (MM)",
  MM_SOUL_ENEMY_OCTOROK: "Soul of Octoroks (MM)",
  MM_SOUL_BOSS_ODOLWA: "Soul of Odolwa (MM)",
  MM_SOUL_ENEMY_PEAHAT: "Soul of Peahats (MM)",
  MM_SOUL_ENEMY_REAL_BOMBCHU: "Soul of Real Bombchu (MM)",
  MM_SOUL_ENEMY_REDEAD_GIBDO: "Soul of ReDeads/Gibdos (MM)",
  MM_SOUL_ENEMY_SHELL_BLADE: "Soul of Shell Blades (MM)",
  MM_SOUL_ENEMY_SKULLFISH: "Soul of Skullfish (MM)",
  MM_SOUL_ENEMY_SKULLTULA: "Soul of Skulltulas (MM)",
  MM_SOUL_ENEMY_SKULLWALLTULA: "Soul of Skullwalltulas (MM)",
  MM_SOUL_ENEMY_SNAPPER: "Soul of Snappers (MM)",
  MM_SOUL_ENEMY_STALCHILD: "Soul of Stalchildren (MM)",
  MM_SOUL_ENEMY_TAKKURI: "Soul of Takkuri (MM)",
  MM_SOUL_ENEMY_TEKTITE: "Soul of Tektites (MM)",
  MM_SOUL_BOSS_TWINMOLD: "Soul of Twinmold (MM)",
  MM_SOUL_ENEMY_WALLMASTER: "Soul of Wallmasters (MM)",
  MM_SOUL_ENEMY_WART: "Soul of Warts (MM)",
  MM_SOUL_ENEMY_WIZZROBE: "Soul of Wizzrobes (MM)",
  MM_SOUL_ENEMY_WOLFOS: "Soul of Wolfos (MM)",
  MM_SPIN_UPGRADE: "Spin Attack",
  MM_STICK: "Deku Stick (MM)",
  MM_STRAY_FAIRY_GB: "Stray Fairy (Great Bay Temple)",
  MM_STRAY_FAIRY_SH: "Stray Fairy (Snowhead Temple)",
  MM_STRAY_FAIRY_ST: "Stray Fairy (Stone Tower Temple)",
  MM_STRAY_FAIRY_TOWN: "Stray Fairy (Clock Town)",
  MM_STRAY_FAIRY_WF: "Stray Fairy (Woodfall Temple)",
  MM_SWORD: "Progressive Sword (MM)",
  MM_WALLET: "Progressive Wallet (MM)",
  MM_WORLD_MAP_CLOCK_TOWN: "World Map of Clock Town",
  MM_WORLD_MAP_GREAT_BAY: "World Map of Great Bay",
  MM_WORLD_MAP_ROMANI_RANCH: "World Map of Ranch",
  MM_WORLD_MAP_SNOWHEAD: "World Map of Snowhead",
  MM_WORLD_MAP_STONE_TOWER: "World Map of Stone Tower",
  MM_WORLD_MAP_WOODFALL: "World Map of Woodfall",
  OOT_ARROW_FIRE: "Fire Arrows (OoT)",
  OOT_ARROW_ICE: "Ice Arrows (OoT)",
  OOT_ARROW_LIGHT: "Light Arrows (OoT)",
  OOT_ARROWS_10: "10 Arrows (OoT)",
  OOT_ARROWS_30: "30 Arrows (OoT)",
  OOT_ARROWS_5: "5 Arrows (OoT)",
  OOT_BLUE_FIRE: "Bottle - Blue Fire",
  OOT_BOMB_BAG: "Bomb Bag (OoT)",
  OOT_BOMB: "Bomb (OoT)",
  OOT_BOMBCHU_10: "10 Bombchu (OoT)",
  OOT_BOMBCHU_20: "20 Bombchu (OoT)",
  OOT_BOMBCHU_5: "5 Bombchu (OoT)",
  OOT_BOMBS_10: "10 Bombs (OoT)",
  OOT_BOMBS_20: "20 Bombs (OoT)",
  OOT_BOMBS_30: "30 Bombs (OoT)",
  OOT_BOMBS_5: "5 Bombs (OoT)",
  OOT_BOOMERANG: "Boomerang",
  OOT_BOOTS_HOVER: "Hover Boots",
  OOT_BOOTS_IRON: "Iron Boots",
  OOT_BOSS_KEY_FIRE: "Boss Key (Fire Temple)",
  OOT_BOSS_KEY_FOREST: "Boss Key (Forest Temple)",
  OOT_BOSS_KEY_GANON: "Boss Key (Ganon's Castle)",
  OOT_BOSS_KEY_SHADOW: "Boss Key (Shadow Temple)",
  OOT_BOSS_KEY_SPIRIT: "Boss Key (Spirit Temple)",
  OOT_BOSS_KEY_WATER: "Boss Key (Water Temple)",
  OOT_BOTTLE_EMPTY: "Empty Bottle (OoT)",
  OOT_BOTTLE_MILK: "Bottle of Milk (OoT)",
  OOT_BOW: "Fairy Bow (OoT)",
  OOT_BROKEN_GORON_SWORD: "Broken Goron's Sword",
  OOT_BUG: "Bottle - Bugs (OoT)",
  OOT_BUGS: "Bugs (OoT)",
  OOT_CHICKEN: "Chicken",
  OOT_CLAIM_CHECK: "Claim Check",
  OOT_COIN_BLUE: "Coin (Blue)",
  OOT_COIN_GREEN: "Coin (Green)",
  OOT_COIN_RED: "Coin (Red)",
  OOT_COIN_YELLOW: "Coin (Yellow)",
  OOT_COJIRO: "Cojiro",
  OOT_COMPASS_BOTW: "Compass (Bottom of the Well)",
  OOT_COMPASS_DC: "Compass (Dodongo's Cavern)",
  OOT_COMPASS_DT: "Compass (Deku Tree)",
  OOT_COMPASS_FIRE: "Compass (Fire Temple)",
  OOT_COMPASS_FOREST: "Compass (Forest Temple)",
  OOT_COMPASS_IC: "Compass (Ice Cavern)",
  OOT_COMPASS_JJ: "Compass (Jabu-Jabu's Belly)",
  OOT_COMPASS_SHADOW: "Compass (Shadow Temple)",
  OOT_COMPASS_SPIRIT: "Compass (Spirit Temple)",
  OOT_COMPASS_WATER: "Compass (Water Temple)",
  OOT_DEFENSE_UPGRADE: "Double Defense (OoT)",
  OOT_DEKU_SEEDS_30: "30 Deku Seeds",
  OOT_DEKU_SEEDS_5: "5 Deku Seeds (OoT)",
  OOT_EYE_DROPS: "Eye Drops",
  OOT_EYEBALL_FROG: "Eyeball Frog",
  OOT_FAIRY: "Fairy (OoT)",
  OOT_FISH: "Fish (OoT)",
  OOT_GERUDO_CARD: "Gerudo's Membership Card",
  OOT_GS_TOKEN: "Gold Skulltula Token",
  OOT_HAMMER: "Megaton Hammer",
  OOT_HEART_CONTAINER: "Heart Container (OoT)",
  OOT_HEART_PIECE: "Piece of Heart (OoT)",
  OOT_HOOKSHOT: "Progressive Hookshot (OoT)",
  OOT_ICE_TRAP: "Ice Trap (OoT)",
  OOT_KEY_RING_BOTW: "Key Ring (Well)",
  OOT_KEY_RING_FIRE: "Key Ring (Fire)",
  OOT_KEY_RING_FOREST: "Key Ring (Forest)",
  OOT_KEY_RING_GANON: "Key Ring (Ganon)",
  OOT_KEY_RING_GF: "Key Ring (Hideout)",
  OOT_KEY_RING_GTG: "Key Ring (GTG)",
  OOT_KEY_RING_TCG: "Key Ring (Chest Game)",
  OOT_KEY_RING_SHADOW: "Key Ring (Shadow)",
  OOT_KEY_RING_SPIRIT: "Key Ring (Spirit)",
  OOT_KEY_RING_WATER: "Key Ring (Water)",
  OOT_LENS: "Lens of Truth (OoT)",
  OOT_MAGIC_BEAN: "Magic Beans (OoT)",
  OOT_MAGIC_UPGRADE: "Magic Upgrade (OoT)",
  OOT_MAP_BOTW: "Map (Bottom of the Well)",
  OOT_MAP_DC: "Map (Dodongo's Cavern)",
  OOT_MAP_DT: "Map (Deku Tree)",
  OOT_MAP_FIRE: "Map (Fire Temple)",
  OOT_MAP_FOREST: "Map (Forest Temple)",
  OOT_MAP_IC: "Map (Ice Cavern)",
  OOT_MAP_JJ: "Map (Jabu-Jabu's Belly)",
  OOT_MAP_SHADOW: "Map (Shadow Temple)",
  OOT_MAP_SPIRIT: "Map (Spirit Temple)",
  OOT_MAP_WATER: "Map (Water Temple)",
  OOT_MASK_BUNNY: "Bunny Hood (OoT)",
  OOT_MASK_GERUDO: "Gerudo Mask",
  OOT_MASK_GORON: "Goron Mask (OoT)",
  OOT_MASK_KEATON: "Keaton Mask (OoT)",
  OOT_MASK_SKULL: "Skull Mask",
  OOT_MASK_SPOOKY: "Spooky Mask",
  OOT_MASK_TRUTH: "Mask of Truth (OoT)",
  OOT_MASK_ZORA: "Zora Mask (OoT)",
  OOT_MEDALLION_FIRE: "Fire Medallion",
  OOT_MEDALLION_FOREST: "Forest Medallion",
  OOT_MEDALLION_LIGHT: "Light Medallion",
  OOT_MEDALLION_SHADOW: "Shadow Medallion",
  OOT_MEDALLION_SPIRIT: "Spirit Medallion",
  OOT_MEDALLION_WATER: "Water Medallion",
  OOT_MILK: "Lon Lon Milk (OoT)",
  OOT_NUT_UPGRADE: "Deku Nut Upgrade",
  OOT_NUTS_10: "10 Deku Nuts (OoT)",
  OOT_NUTS_5_ALT: "5 Deku Nuts (OoT)",
  OOT_NUTS_5: "5 Deku Nuts (OoT)",
  OOT_OCARINA: "Progressive Ocarina (OoT)",
  OOT_ODD_MUSHROOM: "Odd Mushroom",
  OOT_ODD_POTION: "Odd Potion",
  OOT_POACHER_SAW: "Poacher's Saw",
  OOT_POCKET_CUCCO: "Pocket Cucco",
  OOT_POCKET_EGG: "Pocket Egg",
  OOT_POE: "Poe (OoT)",
  OOT_POTION_BLUE: "Blue Potion (OoT)",
  OOT_POTION_GREEN: "Green Potion (OoT)",
  OOT_POTION_RED: "Red Potion (OoT)",
  OOT_PRESCRIPTION: "Prescription",
  OOT_RECOVERY_HEART: "Recovery Heart (OoT)",
  OOT_RUPEE_BLUE: "Blue Rupee (OoT)",
  OOT_RUPEE_GREEN: "Green Rupee (OoT)",
  OOT_RUPEE_HUGE: "Gold Rupee (OoT)",
  OOT_RUPEE_PURPLE: "Purple Rupee (OoT)",
  OOT_RUPEE_RED: "Red Rupee (OoT)",
  OOT_RUPEE_SILVER_BOTW: "Silver Rupee (Bottom of the Well)",
  OOT_RUPEE_SILVER_DC: "Silver Rupee (Dodongo's Cavern)",
  OOT_RUPEE_SILVER_GANON_FIRE: "Silver Rupee (Ganon's Castle - Fire Trial)",
  OOT_RUPEE_SILVER_GANON_FOREST: "Silver Rupee (Ganon's Castle - Forest Trial)",
  OOT_RUPEE_SILVER_GANON_LIGHT: "Silver Rupee (Ganon's Castle - Light Trial)",
  OOT_RUPEE_SILVER_GANON_SHADOW: "Silver Rupee (Ganon's Castle - Shadow Trial)",
  OOT_RUPEE_SILVER_GANON_SPIRIT: "Silver Rupee (Ganon's Castle - Spirit Trial)",
  OOT_RUPEE_SILVER_GANON_WATER: "Silver Rupee (Ganon's Castle - Water Trial)",
  OOT_RUPEE_SILVER_GTG_LAVA: "Silver Rupee (Gerudo Training Ground - Lava)",
  OOT_RUPEE_SILVER_GTG_SLOPES: "Silver Rupee (Gerudo Training Ground - Slopes)",
  OOT_RUPEE_SILVER_GTG_WATER: "Silver Rupee (Gerudo Training Ground - Water)",
  OOT_RUPEE_SILVER_IC_BLOCK: "Silver Rupee (Ice Cavern - Block)",
  OOT_RUPEE_SILVER_IC_SCYTHE: "Silver Rupee (Ice Cavern - Scythe)",
  OOT_RUPEE_SILVER_SHADOW_BLADES: "Silver Rupee (Shadow Temple - Invisible Blades)",
  OOT_RUPEE_SILVER_SHADOW_PIT: "Silver Rupee (Shadow Temple - Large Pits)",
  OOT_RUPEE_SILVER_SHADOW_SCYTHE: "Silver Rupee (Shadow Temple - Scythe)",
  OOT_RUPEE_SILVER_SHADOW_SPIKES: "Silver Rupee (Shadow Temple - Spikes)",
  OOT_RUPEE_SILVER_SPIRIT_ADULT: "Silver Rupee (Spirit Temple - Adult)",
  OOT_RUPEE_SILVER_SPIRIT_BOULDERS: "Silver Rupee (Spirit Temple - Boulders)",
  OOT_RUPEE_SILVER_SPIRIT_CHILD: "Silver Rupee (Spirit Temple - Child)",
  OOT_RUPEE_SILVER_SPIRIT_LOBBY: "Silver Rupee (Spirit Temple - Lobby)",
  OOT_RUPEE_SILVER_SPIRIT_SUN: "Silver Rupee (Spirit Temple - Sun Block)",
  OOT_POUCH_SILVER_BOTW: "Silver Rupee Pouch (Bottom of the Well)",
  OOT_POUCH_SILVER_DC: "Silver Rupee Pouch (Dodongo's Cavern)",
  OOT_POUCH_SILVER_GANON_FIRE: "Silver Rupee Pouch (Ganon's Castle - Fire Trial)",
  OOT_POUCH_SILVER_GANON_FOREST: "Silver Rupee Pouch (Ganon's Castle - Forest Trial)",
  OOT_POUCH_SILVER_GANON_LIGHT: "Silver Rupee Pouch (Ganon's Castle - Light Trial)",
  OOT_POUCH_SILVER_GANON_SHADOW: "Silver Rupee Pouch (Ganon's Castle - Shadow Trial)",
  OOT_POUCH_SILVER_GANON_SPIRIT: "Silver Rupee Pouch (Ganon's Castle - Spirit Trial)",
  OOT_POUCH_SILVER_GANON_WATER: "Silver Rupee Pouch (Ganon's Castle - Water Trial)",
  OOT_POUCH_SILVER_GTG_LAVA: "Silver Rupee Pouch (Gerudo Training Ground - Lava)",
  OOT_POUCH_SILVER_GTG_SLOPES: "Silver Rupee Pouch (Gerudo Training Ground - Slopes)",
  OOT_POUCH_SILVER_GTG_WATER: "Silver Rupee Pouch (Gerudo Training Ground - Water)",
  OOT_POUCH_SILVER_IC_BLOCK: "Silver Rupee Pouch (Ice Cavern - Block)",
  OOT_POUCH_SILVER_IC_SCYTHE: "Silver Rupee Pouch (Ice Cavern - Scythe)",
  OOT_POUCH_SILVER_SHADOW_BLADES: "Silver Rupee Pouch (Shadow Temple - Invisible Blades)",
  OOT_POUCH_SILVER_SHADOW_PIT: "Silver Rupee Pouch (Shadow Temple - Large Pits)",
  OOT_POUCH_SILVER_SHADOW_SCYTHE: "Silver Rupee Pouch (Shadow Temple - Scythe)",
  OOT_POUCH_SILVER_SHADOW_SPIKES: "Silver Rupee Pouch (Shadow Temple - Spikes)",
  OOT_POUCH_SILVER_SPIRIT_ADULT: "Silver Rupee Pouch (Spirit Temple - Adult)",
  OOT_POUCH_SILVER_SPIRIT_BOULDERS: "Silver Rupee Pouch (Spirit Temple - Boulders)",
  OOT_POUCH_SILVER_SPIRIT_CHILD: "Silver Rupee Pouch (Spirit Temple - Child)",
  OOT_POUCH_SILVER_SPIRIT_LOBBY: "Silver Rupee Pouch (Spirit Temple - Lobby)",
  OOT_POUCH_SILVER_SPIRIT_SUN: "Silver Rupee Pouch (Spirit Temple - Sun Block)",
  OOT_RUPEE_MAGICAL: "Magical Silver Rupee",
  OOT_RUTO_LETTER: "Ruto's Letter",
  OOT_SCALE: "Progressive Scale",
  OOT_SHIELD_DEKU: "Deku Shield",
  OOT_SHIELD_HYLIAN: "Hylian Shield",
  OOT_SHIELD_MIRROR: "Mirror Shield (OoT)",
  OOT_SHIELD: "Progressive Shield (OoT)",
  OOT_SKELETON_KEY: "Skeleton Key (OoT)",
  OOT_SLINGSHOT: "Fairy Slingshot",
  OOT_SMALL_KEY_BOTW: "Small Key (Bottom of the Well)",
  OOT_SMALL_KEY_FIRE: "Small Key (Fire Temple)",
  OOT_SMALL_KEY_FOREST: "Small Key (Forest Temple)",
  OOT_SMALL_KEY_GANON: "Small Key (Ganon's Castle)",
  OOT_SMALL_KEY_GF: "Small Key (Gerudo's Fortress)",
  OOT_SMALL_KEY_GTG: "Small Key (Gerudo's Training Ground)",
  OOT_SMALL_KEY_SHADOW: "Small Key (Shadow Temple)",
  OOT_SMALL_KEY_SPIRIT: "Small Key (Spirit Temple)",
  OOT_SMALL_KEY_WATER: "Small Key (Water Temple)",
  OOT_SMALL_KEY_TCG: "Small Key (Chest Game)",
  OOT_SONG_EPONA: "Epona's Song (OoT)",
  OOT_SONG_SARIA: "Saria's Song",
  OOT_SONG_STORMS: "Song of Storms (OoT)",
  OOT_SONG_SUN: "Sun's Song (OoT)",
  OOT_SONG_TIME: "Song of Time (OoT)",
  OOT_SONG_TP_FIRE: "Bolero of Fire",
  OOT_SONG_TP_FOREST: "Minuet of Forest",
  OOT_SONG_TP_LIGHT: "Prelude of Light",
  OOT_SONG_TP_SHADOW: "Nocturne of Shadow",
  OOT_SONG_TP_SPIRIT: "Requiem of Spirit",
  OOT_SONG_TP_WATER: "Serenade of Water",
  OOT_SONG_ZELDA: "Zelda's Lullaby",
  OOT_SOUL_ENEMY_ANUBIS: "Soul of Anubis",
  OOT_SOUL_ENEMY_ARMOS: "Soul of Armos (OoT)",
  OOT_SOUL_ENEMY_BABY_DODONGO: "Soul of Baby Dodongos",
  OOT_SOUL_BOSS_BARINADE: "Soul of Barinade",
  OOT_SOUL_ENEMY_BEAMOS: "Soul of Beamos (OoT)",
  OOT_SOUL_ENEMY_BIRI_BARI: "Soul of Biris/Baris",
  OOT_SOUL_BOSS_BONGO_BONGO: "Soul of Bongo Bongo",
  OOT_SOUL_ENEMY_BUBBLE: "Soul of Bubbles (OoT)",
  OOT_SOUL_ENEMY_DARK_LINK: "Soul of Dark Link",
  OOT_SOUL_ENEMY_DEAD_HAND: "Soul of Dead Hands",
  OOT_SOUL_ENEMY_DEKU_BABA: "Soul of Deku Babas (OoT)",
  OOT_SOUL_ENEMY_DEKU_SCRUB: "Soul of Deku Scrubs (OoT)",
  OOT_SOUL_ENEMY_DODONGO: "Soul of Dodongos (OoT)",
  OOT_SOUL_ENEMY_FLARE_DANCER: "Soul of Flare Dancers",
  OOT_SOUL_ENEMY_FLOORMASTER: "Soul of Floormasters (OoT)",
  OOT_SOUL_ENEMY_FLYING_POT: "Soul of Flying Pots (OoT)",
  OOT_SOUL_ENEMY_FREEZARD: "Soul of Freezards (OoT)",
  OOT_SOUL_ENEMY_GOHMA_LARVA: "Soul of Gohma Larvaes",
  OOT_SOUL_ENEMY_GUAY: "Soul of Guays (OoT)",
  OOT_SOUL_ENEMY_IRON_KNUCKLE: "Soul of Iron Knuckles (OoT)",
  OOT_SOUL_ENEMY_KEESE: "Soul of Keese (OoT)",
  OOT_SOUL_BOSS_KING_DODONGO: "Soul of King Dodongo",
  OOT_SOUL_ENEMY_LEEVER: "Soul of Leevers (OoT)",
  OOT_SOUL_ENEMY_LIKE_LIKE: "Soul of Like Likes (OoT)",
  OOT_SOUL_ENEMY_LIZALFOS_DINALFOS: "Soul of Lizalfos/Dinolfos (OoT)",
  OOT_SOUL_ENEMY_MOBLIN: "Soul of Moblins",
  OOT_SOUL_BOSS_MORPHA: "Soul of Morpha",
  OOT_SOUL_ENEMY_OCTOROK: "Soul of Octoroks (OoT)",
  OOT_SOUL_ENEMY_PARASITE: "Soul of Jabu-Jabu's Parasites",
  OOT_SOUL_ENEMY_PEAHAT: "Soul of Peahats (OoT)",
  OOT_SOUL_BOSS_PHANTOM_GANON: "Soul of Phantom Ganon",
  OOT_SOUL_BOSS_QUEEN_GOHMA: "Soul of Queen Gohma",
  OOT_SOUL_ENEMY_REDEAD_GIBDO: "Soul of ReDeads/Gibdos (OoT)",
  OOT_SOUL_ENEMY_SHABOM: "Soul of Shaboms",
  OOT_SOUL_ENEMY_SHELL_BLADE: "Soul of Shell Blades (OoT)",
  OOT_SOUL_ENEMY_SKULL_KID: "Soul of Skull Kids (OoT)",
  OOT_SOUL_ENEMY_SKULLTULA: "Soul of Skulltulas (OoT)",
  OOT_SOUL_ENEMY_SKULLWALLTULA: "Soul of Skullwalltulas (OoT)",
  OOT_SOUL_ENEMY_SPIKE: "Soul of Spikes",
  OOT_SOUL_ENEMY_STALCHILD: "Soul of Stalchildren (OoT)",
  OOT_SOUL_ENEMY_STALFOS: "Soul of Stalfos (OoT)",
  OOT_SOUL_ENEMY_STINGER: "Soul of Stingers",
  OOT_SOUL_ENEMY_TAILPASARN: "Soul of Tailpasarans",
  OOT_SOUL_ENEMY_TEKTITE: "Soul of Tektites (OoT)",
  OOT_SOUL_ENEMY_TORCH_SLUG: "Soul of Torch Slugs",
  OOT_SOUL_BOSS_TWINROVA: "Soul of Twinrova",
  OOT_SOUL_BOSS_VOLVAGIA: "Soul of Volvagia",
  OOT_SOUL_ENEMY_WALLMASTER: "Soul of Wallmasters (OoT)",
  OOT_SOUL_ENEMY_WOLFOS: "Soul of Wolfoses (OoT)",
  OOT_SPELL_FIRE: "Din's Fire",
  OOT_SPELL_LOVE: "Nayru's Love",
  OOT_SPELL_WIND: "Farore's Wind",
  OOT_STICK_UPGRADE: "Deku Stick Upgrade",
  OOT_STICK: "Deku Stick (OoT)",
  OOT_STICKS_10: "10 Deku Sticks (OoT)",
  OOT_STICKS_5: "5 Deku Sticks (OoT)",
  OOT_STONE_EMERALD: "Kokiri's Emerald",
  OOT_STONE_OF_AGONY: "Stone of Agony",
  OOT_STONE_RUBY: "Goron's Ruby",
  OOT_STONE_SAPPHIRE: "Zora's Sapphire",
  OOT_STRENGTH: "Progressive Strength",
  OOT_SWORD_BIGGORON: "Biggoron's Sword",
  OOT_SWORD_GORON: "Progressive Goron Sword",
  OOT_SWORD_KNIFE: "Giant's Knife",
  OOT_SWORD_KOKIRI: "Kokiri Sword (OoT)",
  OOT_SWORD_MASTER: "Master Sword",
  OOT_SWORD: "Progressive Sword (OoT)",
  OOT_TUNIC_GORON: "Goron Tunic",
  OOT_TUNIC_ZORA: "Zora Tunic",
  OOT_WALLET: "Progressive Wallet (OoT)",
  OOT_WEIRD_EGG: "Weird Egg",
  OOT_ZELDA_LETTER: "Zelda's Letter",
  SHARED_ARROW_FIRE: "Shared Fire Arrows",
  SHARED_ARROW_ICE: "Shared Ice Arrows",
  SHARED_ARROW_LIGHT: "Shared Light Arrows",
  SHARED_ARROWS_10: "10 Arrows",
  SHARED_ARROWS_30: "30 Arrows",
  SHARED_ARROWS_40: "40 Arrows",
  SHARED_ARROWS_5: "5 Arrows",
  SHARED_BOMB_BAG: "Shared Bomb Bag",
  SHARED_BOMB: "1 Bomb",
  SHARED_BOMBCHU_10: "10 Bombchu",
  SHARED_BOMBCHU_20: "20 Bombchu",
  SHARED_BOMBCHU_5: "5 Bombchu",
  SHARED_BOMBCHU: "Bombchu",
  SHARED_BOMBS_10: "10 Bombs",
  SHARED_BOMBS_20: "20 Bombs",
  SHARED_BOMBS_30: "30 Bombs",
  SHARED_BOMBS_5: "5 Bombs",
  SHARED_BOW: "Shared Bow",
  SHARED_DEFENSE_UPGRADE: "Double Defense",
  SHARED_HEART_CONTAINER: "Heart Container",
  SHARED_HEART_PIECE: "Piece of Heart",
  SHARED_HOOKSHOT: "Progressive Hookshot",
  SHARED_LENS: "Lens of Truth",
  SHARED_MAGIC_UPGRADE: "Shared Magic Upgrade",
  SHARED_MASK_BUNNY: "Bunny Hood",
  SHARED_MASK_GORON: "Goron Mask",
  SHARED_MASK_KEATON: "Keaton Mask",
  SHARED_MASK_TRUTH: "Mask of Truth",
  SHARED_MASK_ZORA: "Zora Mask",
  SHARED_NUT: "Deku Nut",
  SHARED_NUTS_10: "10 Deku Nuts",
  SHARED_NUTS_5: "5 Deku Nuts",
  SHARED_OCARINA: "Progressive Ocarina",
  SHARED_RECOVERY_HEART: "Recovery Heart",
  SHARED_RUPEE_BLUE: "Blue Rupee",
  SHARED_RUPEE_GOLD: "Gold Rupee",
  SHARED_RUPEE_GREEN: "Green Rupee",
  SHARED_RUPEE_PURPLE: "Purple Rupee",
  SHARED_RUPEE_RED: "Red Rupee",
  SHARED_RUPEE_SILVER: "Silver Rupee",
  SHARED_SKELETON_KEY: "Skeleton Key",
  SHARED_SONG_EPONA: "Epona's Song",
  SHARED_SONG_STORMS: "Song of Storms",
  SHARED_SONG_SUN: "Sun's Song",
  SHARED_SONG_TIME: "Song of Time",
  SHARED_SOUL_ENEMY_ARMOS: "Soul of Armos",
  SHARED_SOUL_ENEMY_BEAMOS: "Soul of Beamos",
  SHARED_SOUL_ENEMY_BUBBLE: "Soul of Bubbles",
  SHARED_SOUL_ENEMY_DEKU_BABA: "Soul of Deku Babas",
  SHARED_SOUL_ENEMY_DEKU_SCRUB: "Soul of Deku Scrubs",
  SHARED_SOUL_ENEMY_DODONGO: "Soul of Dodongos",
  SHARED_SOUL_ENEMY_FLOORMASTER: "Soul of Floormasters",
  SHARED_SOUL_ENEMY_FLYING_POT: "Soul of Flying Pots",
  SHARED_SOUL_ENEMY_FREEZARD: "Soul of Freezards",
  SHARED_SOUL_ENEMY_GUAY: "Soul of Guays",
  SHARED_SOUL_ENEMY_IRON_KNUCKLE: "Soul of Iron Knuckles",
  SHARED_SOUL_ENEMY_KEESE: "Soul of Keese",
  SHARED_SOUL_ENEMY_LEEVER: "Soul of Leevers",
  SHARED_SOUL_ENEMY_LIKE_LIKE: "Soul of Like Likes",
  SHARED_SOUL_ENEMY_LIZALFOS_DINALFOS: "Soul of Lizalfos/Dinolfos",
  SHARED_SOUL_ENEMY_OCTOROK: "Soul of Octoroks",
  SHARED_SOUL_ENEMY_PEAHAT: "Soul of Peahats",
  SHARED_SOUL_ENEMY_REDEAD_GIBDO: "Soul of ReDeads/Gibdos",
  SHARED_SOUL_ENEMY_SHELL_BLADE: "Soul of Shell Blades",
  SHARED_SOUL_ENEMY_SKULLTULA: "Soul of Skulltulas",
  SHARED_SOUL_ENEMY_SKULLWALLTULA: "Soul of Skullwalltulas",
  SHARED_SOUL_ENEMY_STALCHILD: "Soul of Stalchildren",
  SHARED_SOUL_ENEMY_TEKTITE: "Soul of Tektites",
  SHARED_SOUL_ENEMY_WALLMASTER: "Soul of Wallmasters",
  SHARED_SOUL_ENEMY_WOLFOS: "Soul of Wolfos",
  SHARED_STICK: "Deku Stick",
  SHARED_STICKS_10: "10 Deku Sticks",
  SHARED_STICKS_5: "5 Deku Sticks",
  SHARED_TRIFORCE_COURAGE: "Triforce of Courage",
  SHARED_TRIFORCE_POWER: "Triforce of Power",
  SHARED_TRIFORCE_WISDOM: "Triforce of Wisdom",
  SHARED_TRIFORCE: "Triforce Piece",
  SHARED_WALLET: "Progressive Wallet",
  OOT_BUTTON_A: "A Button (OoT)",
  OOT_BUTTON_C_RIGHT: "C-Right Button (OoT)",
  OOT_BUTTON_C_LEFT: "C-Left Button (OoT)",
  OOT_BUTTON_C_UP: "C-Up Button (OoT)",
  OOT_BUTTON_C_DOWN: "C-Down Button (OoT)",
  MM_BUTTON_A: "A Button (MM)",
  MM_BUTTON_C_RIGHT: "C-Right Button (MM)",
  MM_BUTTON_C_LEFT: "C-Left Button (MM)",
  MM_BUTTON_C_UP: "C-Up Button (MM)",
  MM_BUTTON_C_DOWN: "C-Down Button (MM)",
  SHARED_BUTTON_A: "A Button",
  SHARED_BUTTON_C_RIGHT: "C-Right Button",
  SHARED_BUTTON_C_LEFT: "C-Left Button",
  SHARED_BUTTON_C_UP: "C-Up Button",
  SHARED_BUTTON_C_DOWN: "C-Down Button",
  OOT_SOUL_NPC_SARIA: "Soul of Saria",
  OOT_SOUL_NPC_DARUNIA: "Soul of Darunia",
  OOT_SOUL_NPC_RUTO: "Soul of Ruto",
  OOT_SOUL_NPC_KING_ZORA: "Soul of King Zora",
  OOT_SOUL_NPC_ZELDA: "Soul of Zelda",
  OOT_SOUL_NPC_SHEIK: "Soul of Sheik",
  OOT_SOUL_NPC_CUCCO_LADY: "Soul of Cucco Lady",
  OOT_SOUL_NPC_CARPENTERS: "Soul of Carpenters",
  OOT_SOUL_NPC_GURU_GURU: "Soul of Guru-Guru",
  OOT_SOUL_NPC_MIDO: "Soul of Mido",
  OOT_SOUL_NPC_KOKIRI: "Soul of Kokiri",
  OOT_SOUL_NPC_KOKIRI_SHOPKEEPER: "Soul of Kokiri Shopkeeper",
  OOT_SOUL_NPC_HYLIAN_GUARD: "Soul of Hylian Guard",
  OOT_SOUL_NPC_HYLIAN_CITIZEN: "Soul of Hylian Citizen",
  OOT_SOUL_NPC_MALON: "Soul of Malon",
  OOT_SOUL_NPC_TALON: "Soul of Talon",
  OOT_SOUL_NPC_FISHING_POND_OWNER: "Soul of Fishing Pond Owner",
  OOT_SOUL_NPC_GORON: "Soul of Goron",
  OOT_SOUL_NPC_MEDIGORON: "Soul of Medigoron",
  OOT_SOUL_NPC_BIGGORON: "Soul of Biggoron",
  OOT_SOUL_NPC_GORON_CHILD: "Soul of Goron Child",
  OOT_SOUL_NPC_GORON_SHOPKEEPER: "Soul of Goron Shopkeeper",
  OOT_SOUL_NPC_ZORA: "Soul of Zora",
  OOT_SOUL_NPC_ZORA_SHOPKEEPER: "Soul of Zora Shopkeeper",
  OOT_SOUL_NPC_BAZAAR_SHOPKEEPER: "Soul of Bazaar Shopkeeper",
  OOT_SOUL_NPC_BOMBCHU_SHOPKEEPER: "Soul of Bombchu Shopkeeper",
  OOT_SOUL_NPC_POTION_SHOPKEEPER: "Soul of Potion Shopkeeper",
  OOT_SOUL_NPC_BOMBCHU_BOWLING_LADY: "Soul of Bombchu Bowling Lady",
  OOT_SOUL_NPC_TRASURE_CHEST_GAME_OWNER: "Soul of Treasure CHest Game Owner",
  OOT_SOUL_NPC_SHOOTING_GALLERY_OWNER: "Soul of Shooting Gallery Owner",
  OOT_SOUL_NPC_DAMPE: "Soul of Dampe",
  OOT_SOUL_NPC_GRAVEYARD_KID: "Soul of Graveyard Kid",
  OOT_SOUL_NPC_POE_COLLECTOR: "Soul of Poe Collector",
  OOT_FISHING_POND_CHILD_FISH: 'Child Fish (Placeholder)',
  OOT_FISHING_POND_ADULT_FISH: 'Adult Fish (Placeholder)',
  OOT_FISHING_POND_CHILD_LOACH: 'Child Loach (Placeholder)',
  OOT_FISHING_POND_ADULT_LOACH: 'Adult Loach (Placeholder)',
  OOT_FISHING_POND_CHILD_FISH_2LBS: 'Child Fish (2 pounds)',
  OOT_FISHING_POND_CHILD_FISH_3LBS: 'Child Fish (3 pounds)',
  OOT_FISHING_POND_CHILD_FISH_4LBS: 'Child Fish (4 pounds)',
  OOT_FISHING_POND_CHILD_FISH_5LBS: 'Child Fish (5 pounds)',
  OOT_FISHING_POND_CHILD_FISH_6LBS: 'Child Fish (6 pounds)',
  OOT_FISHING_POND_CHILD_FISH_7LBS: 'Child Fish (7 pounds)',
  OOT_FISHING_POND_CHILD_FISH_8LBS: 'Child Fish (8 pounds)',
  OOT_FISHING_POND_CHILD_FISH_9LBS: 'Child Fish (9 pounds)',
  OOT_FISHING_POND_CHILD_FISH_10LBS: 'Child Fish (10 pounds)',
  OOT_FISHING_POND_CHILD_FISH_11LBS: 'Child Fish (11 pounds)',
  OOT_FISHING_POND_CHILD_FISH_12LBS: 'Child Fish (12 pounds)',
  OOT_FISHING_POND_CHILD_FISH_13LBS: 'Child Fish (13 pounds)',
  OOT_FISHING_POND_CHILD_FISH_14LBS: 'Child Fish (14 pounds)',
  OOT_FISHING_POND_ADULT_FISH_4LBS: 'Adult Fish (4 pounds)',
  OOT_FISHING_POND_ADULT_FISH_5LBS: 'Adult Fish (5 pounds)',
  OOT_FISHING_POND_ADULT_FISH_6LBS: 'Adult Fish (6 pounds)',
  OOT_FISHING_POND_ADULT_FISH_7LBS: 'Adult Fish (7 pounds)',
  OOT_FISHING_POND_ADULT_FISH_8LBS: 'Adult Fish (8 pounds)',
  OOT_FISHING_POND_ADULT_FISH_9LBS: 'Adult Fish (9 pounds)',
  OOT_FISHING_POND_ADULT_FISH_10LBS: 'Adult Fish (10 pounds)',
  OOT_FISHING_POND_ADULT_FISH_11LBS: 'Adult Fish (11 pounds)',
  OOT_FISHING_POND_ADULT_FISH_12LBS: 'Adult Fish (12 pounds)',
  OOT_FISHING_POND_ADULT_FISH_13LBS: 'Adult Fish (13 pounds)',
  OOT_FISHING_POND_ADULT_FISH_14LBS: 'Adult Fish (14 pounds)',
  OOT_FISHING_POND_ADULT_FISH_15LBS: 'Adult Fish (15 pounds)',
  OOT_FISHING_POND_ADULT_FISH_16LBS: 'Adult Fish (16 pounds)',
  OOT_FISHING_POND_ADULT_FISH_17LBS: 'Adult Fish (17 pounds)',
  OOT_FISHING_POND_ADULT_FISH_18LBS: 'Adult Fish (18 pounds)',
  OOT_FISHING_POND_ADULT_FISH_19LBS: 'Adult Fish (19 pounds)',
  OOT_FISHING_POND_ADULT_FISH_20LBS: 'Adult Fish (20 pounds)',
  OOT_FISHING_POND_ADULT_FISH_21LBS: 'Adult Fish (21 pounds)',
  OOT_FISHING_POND_ADULT_FISH_22LBS: 'Adult Fish (22 pounds)',
  OOT_FISHING_POND_ADULT_FISH_23LBS: 'Adult Fish (23 pounds)',
  OOT_FISHING_POND_ADULT_FISH_24LBS: 'Adult Fish (24 pounds)',
  OOT_FISHING_POND_ADULT_FISH_25LBS: 'Adult Fish (25 pounds)',
  OOT_FISHING_POND_CHILD_LOACH_14LBS: 'Child Loach (14 pounds)',
  OOT_FISHING_POND_CHILD_LOACH_15LBS: 'Child Loach (15 pounds)',
  OOT_FISHING_POND_CHILD_LOACH_16LBS: 'Child Loach (16 pounds)',
  OOT_FISHING_POND_CHILD_LOACH_17LBS: 'Child Loach (17 pounds)',
  OOT_FISHING_POND_CHILD_LOACH_18LBS: 'Child Loach (18 pounds)',
  OOT_FISHING_POND_CHILD_LOACH_19LBS: 'Child Loach (19 pounds)',
  OOT_FISHING_POND_ADULT_LOACH_29LBS: 'Adult Loach (29 pounds)',
  OOT_FISHING_POND_ADULT_LOACH_30LBS: 'Adult Loach (30 pounds)',
  OOT_FISHING_POND_ADULT_LOACH_31LBS: 'Adult Loach (31 pounds)',
  OOT_FISHING_POND_ADULT_LOACH_32LBS: 'Adult Loach (32 pounds)',
  OOT_FISHING_POND_ADULT_LOACH_33LBS: 'Adult Loach (33 pounds)',
  OOT_FISHING_POND_ADULT_LOACH_34LBS: 'Adult Loach (34 pounds)',
  OOT_FISHING_POND_ADULT_LOACH_35LBS: 'Adult Loach (35 pounds)',
  OOT_FISHING_POND_ADULT_LOACH_36LBS: 'Adult Loach (36 pounds)',
  SHARED_SHIELD_HYLIAN: "Hylian/Hero Shield",
  SHARED_SHIELD_MIRROR: "Mirror Shield",
  SHARED_SHIELD: "Progressive Shield",
  OOT_BOTTLE_FAIRY: "Bottled Fairy (OoT)",
  MM_BOTTLE_FAIRY: "Bottled Fairy (MM)",
  OOT_BOTTLE_POE: "Bottled Poe (OoT)",
  MM_BOTTLE_POE: "Bottled Poe (MM)",
  OOT_BOTTLE_BIG_POE: "Bottled Big Poe (OoT)",
  MM_BOTTLE_BIG_POE: "Bottled Big Poe (MM)",
  MM_POE: "Poe (MM)",
  OOT_BIG_POE: "Big Poe (OoT)",
  MM_BIG_POE: "Big Poe (MM)",
  OOT_MAGIC_JAR_SMALL: "Small Magic Jar (OoT)",
  OOT_MAGIC_JAR_LARGE: "Large Magic Jar (OoT)",
  MM_MAGIC_JAR_SMALL: "Small Magic Jar (MM)",
  MM_MAGIC_JAR_LARGE: "Large Magic Jar (MM)",
  SHARED_MAGIC_JAR_SMALL: "Small Magic Jar",
  SHARED_MAGIC_JAR_LARGE: "Large Magic Jar",
  NOTHING: 'Nothing',
  OOT_FAIRY_BIG: 'Big Fairy (OoT)',
  MM_FAIRY_BIG: 'Big Fairy (MM)',
  SHARED_FAIRY_BIG: 'Big Fairy',
};

export function itemName(item: string) {
  if (ITEM_NAMES.hasOwnProperty(item)) {
    return ITEM_NAMES[item as ItemID];
  } else {
    return item;
  }
}
