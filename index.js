


function point_is_in_box(pointX, pointY, boxTopCornerX, boxTopCornerY, boxWidth,
    boxHeight) {
    if (arguments.length < 6) {
        throw new Error("All parameters must be provided");
    }
    const params = [pointX, pointY, boxTopCornerX, boxTopCornerY, boxWidth, boxHeight];
    for (const p of params) {
        if (p === undefined || p === null) {
            throw new Error("All parameters must be defined");
        }
    }
    const inX = pointX >= boxTopCornerX && pointX <= (boxTopCornerX + boxWidth);
    const inY = pointY >= boxTopCornerY && pointY <= (boxTopCornerY + boxHeight);
    return inX && inY;
}

function compute_damage(weapon_power, playerX, playerY, explosionX, explosionY) {
    // Calculate distance from explosion
    const dist = Math.hypot(playerX - explosionX, playerY - explosionY);

    // If farther than 500 units, damage is zero
    if (dist >= 500) return 0;

    //damage decreases to zero when more than 500 units away
    const damage = (100 - dist * 10) * weapon_power;

    return Math.max(0, Math.round(damage));
}

module.exports = { point_is_in_box, compute_damage };