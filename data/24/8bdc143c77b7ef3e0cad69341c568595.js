callback({
  "levelNumber": 24,
  "size": 11,
  "steps": 52,
  "successRatio": 1,
  "type": "obsolete",
  "author": "nanashi-juanto",
  "hash": "8bdc143c77b7ef3e0cad69341c568595",
  "path": "24-Mod-Module-12.57/11.53.obsolete-nanashi-juanto.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 24-Mod-Module - SIZE 11/12 - SPEED 53/57 --\n\n-- This solution is superseded by 11.50-jwueller.asm being funcitonally same\n-- with further optimization.\n\na:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    COPYFROM 0\nb:\n    SUB      1\n    JUMPN    c\n    JUMP     b\nc:\n    ADD      1\n    OUTBOX  \n    JUMP     a\n\n"
});