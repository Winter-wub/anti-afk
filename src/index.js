const { mouse, straightTo, Point } = require("@nut-tree/nut-js");

async function moveMouse() {
  const oldPosition = await mouse.getPosition();
  const newPosition = new Point(oldPosition.x + 1, oldPosition.y + 1);
  await mouse.move(straightTo(newPosition));
  await mouse.move(straightTo(oldPosition));
  console.log("move!! ", oldPosition, "  ", newPosition);
}

setInterval(() => {
  try {
    moveMouse();
  } catch (e) {
    console.log(e);
  }
}, 10000);
