#include <combo.h>

/* Remove the random chance of getting nothing */
PATCH_START 0x80b8e9b8
  li at,0xfff
PATCH_END

/* Skip most of the cutscene */
PATCH_START 0x80b79634
  li t3,0xce40
PATCH_END

/* GI renumbering */
PATCH_START 0x80b90128
  li a2,GI_MM_RUPEE_GOLD
PATCH_END

PATCH_START 0x80b90118
  li a2,GI_MM_MASK_ROMANI
PATCH_END

/* Use our handler */
PATCH_START 0x80b9059c
  lui    t6,%HI(EnMaYto_WarpWrapper)
  addiu  t6,%LO(EnMaYto_WarpWrapper)
PATCH_END

PATCH_START 0x80b91a64
.int 0
.int 0
PATCH_END
