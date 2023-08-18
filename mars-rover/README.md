# The Task
#### You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet.
#### Develop an API that translates the commands sent from earth to instructions that are understood by the rover.

## Requirements
- You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
- The rover can receive following sequence of commands:
  - (f, b) that move the rover forward or backward.
  - (l, r) that turns the rover left or right.
  - example: fllfrr will end up in the same spot facing the same direction.
- Implement wrapping at edges
- Implement obstacle detection before each move to a new square.
- If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.

## Rules
- Hardcore TDD. No Excuses!
- Be careful about edge cases and exceptions. We can not afford to lose our mars rover!

## Tasks

[x] rover only accepts valid inputs  
[x] l turns left  
[x] r turns right  
[x] rover can return current direction  
[ ] f moves forward  
[ ] b moves backward  
