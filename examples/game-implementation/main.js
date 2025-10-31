
import colo from "colo-sdk";

// All colo function calls are still open for discussion.

const canvas = document.createElement("canvas");
canvas.id = "gameCanvas";
canvas.width = 800;
canvas.height = 600;
document.getElementById("container").appendChild(canvas);

colo.init({
  canvas: "#gameCanvas",
  meta: {
    title: "Example Game",
    width: 800,
    height: 600,
  },
});

let player = {}; // Dummy player object for demonstration

async function gameLoop() {
  if (colo.shouldPause()) {
    requestAnimationFrame(gameLoop);
    return;
  }

  if (player.clickedSomething) {
    const result = await colo.rewardedAd()
    if (result.completed) {
      // player.giveReward();
    } else {
      console.log("Ad not completed, no reward given.");
    }
  }

  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
