#include <combo.h>

#define RUPEES_REWARD_1    200
#define RUPEES_REWARD_2    500
#define RUPEES_REWARD_3   1000
#define RUPEES_MAX        9999

/* Force the regular wallet as the first reward */
PATCH_START 0x80a655f0
  li t8,0
PATCH_END

/* Patch the rupee reward amounts */
PATCH_START 0x80a648d4
  sltiu at,v1,RUPEES_REWARD_1
PATCH_END

PATCH_START 0x80a648e4
  slti at,t3,RUPEES_REWARD_1
PATCH_END

PATCH_START 0x80a648dc
  sltiu at,v1,RUPEES_REWARD_2
PATCH_END

PATCH_START 0x80a648ec
  sltiu at,v1,RUPEES_REWARD_2
PATCH_END

PATCH_START 0x80a64920
  sltiu at,v1,RUPEES_REWARD_2
PATCH_END

PATCH_START 0x80a64930
  slti at,t7,RUPEES_REWARD_2
PATCH_END

PATCH_START 0x80a64928
  sltiu at,v1,RUPEES_REWARD_3
PATCH_END

PATCH_START 0x80a64938
  sltiu at,v1,RUPEES_REWARD_3
PATCH_END

PATCH_START 0x80a6496c
  sltiu at,v1,RUPEES_REWARD_3
PATCH_END

PATCH_START 0x80a64984
  slti at,v0,RUPEES_REWARD_3
PATCH_END

PATCH_START 0x80a64ba8
  sltiu at,t5,RUPEES_MAX
PATCH_END

PATCH_START 0x80a64e44
  sltiu at,t8,RUPEES_REWARD_3
PATCH_END

/* GI renumbering */
PATCH_START 0x80a65610
  addiu a2,GI_MM_WALLET2
PATCH_END

PATCH_START 0x80a655e0
  li a2,GI_MM_RUPEE_BLUE
PATCH_END

PATCH_START 0x80a65648
  li a2,GI_MM_RUPEE_BLUE
PATCH_END

PATCH_START 0x80a65690
  li a2,GI_MM_HEART_PIECE
PATCH_END

PATCH_START 0x80a65678
  li a2,GI_MM_RUPEE_BLUE
PATCH_END

/* Use the raw rupee handlers */
PATCH_START 0x80a65030
  jal AddRupees
PATCH_END

PATCH_START 0x80a65320
  jal AddRupees
PATCH_END
