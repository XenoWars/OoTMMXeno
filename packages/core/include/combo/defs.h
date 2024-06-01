#ifndef COMBO_DEFS_H
#define COMBO_DEFS_H

#define COMBO_EXTRA_DMA_VROM        0xf0000000
#define COMBO_VROM_DATA             0xf0200000
#define COMBO_VROM_STARTING_ITEMS   0xf0300000
#define COMBO_VROM_MUSIC_NAMES      0xf1000000

#if defined(GAME_OOT)
#define COMBO_VROM_PAYLOAD      (COMBO_EXTRA_DMA_VROM | 0x00000000)
#define COMBO_VROM_CHECKS       (COMBO_EXTRA_DMA_VROM | 0x00400000)
#define COMBO_VROM_HINTS        (COMBO_EXTRA_DMA_VROM | 0x00600000)
#define COMBO_VROM_ENTRANCES    (COMBO_EXTRA_DMA_VROM | 0x00800000)
#else
#define COMBO_VROM_PAYLOAD      (COMBO_EXTRA_DMA_VROM | 0x00100000)
#define COMBO_VROM_CHECKS       (COMBO_EXTRA_DMA_VROM | 0x00500000)
#define COMBO_VROM_HINTS        (COMBO_EXTRA_DMA_VROM | 0x00700000)
#define COMBO_VROM_ENTRANCES    (COMBO_EXTRA_DMA_VROM | 0x00900000)
#endif

#define COMBO_META_ROM      0x03fff000
#define COMBO_CTX_ADDR_OOT 0x80006584
#define COMBO_CTX_ADDR_MM  0x80098280

#ifdef GAME_OOT
# define HEAP_BASE      0x80700000
# define HEAP_SIZE      0x100000
# define PAYLOAD_RAM    0x80400000
# define PAYLOAD_SIZE   0x80000
# define LOADER_ADDR    0x80006600

# define COMBO_CTX_ADDR_READ    COMBO_CTX_ADDR_OOT
# define COMBO_CTX_ADDR_WRITE   COMBO_CTX_ADDR_MM
#endif

#ifdef GAME_MM
# define PAYLOAD_SIZE   0x50000
# define PAYLOAD_RAM    (0x80780000 - PAYLOAD_SIZE)
# define HEAP_SIZE      0x40000
# define HEAP_BASE      (PAYLOAD_RAM - HEAP_SIZE)
# define LOADER_ADDR    0x800982b0

# define COMBO_CTX_ADDR_READ    COMBO_CTX_ADDR_MM
# define COMBO_CTX_ADDR_WRITE   COMBO_CTX_ADDR_OOT
#endif

#define MM_BASE       0x4d9f40

#define MASK_FOREIGN_OBJECT     0x1000
#define MASK_CUSTOM_OBJECT      0x2000
#define MASK_FOREIGN_ENTRANCE   0x80000000

#endif /* COMBO_DEFS_H */
