callback({
  "levelNumber": 19,
  "size": 10,
  "steps": 125,
  "successRatio": 1,
  "author": "psanetra",
  "hash": "02621443a003e0d7b660b686564d2c19",
  "path": "19-Countdown-10.82/10.107-psanetra.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 19-Countdown - SIZE 10/10 - SPEED 107/82 --\r\n\r\na:\r\n    INBOX   \r\n    COPYTO   0\r\n    JUMP     c\r\nb:\r\n    BUMPUP   0\r\nc:\r\nd:\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    JUMPN    b\r\n    JUMPZ    a\r\n    BUMPDN   0\r\n    JUMP     d\r\n\r\n\r\n"
});