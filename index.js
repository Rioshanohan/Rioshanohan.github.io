const roll = (sides, mult = 1, mod = 0) => {
  console.log(sides);
  console.log(mult);
  console.log(mod);
}

const getRoll = () => {
  let sid = document.getElementById("sides").value;
  let mul = document.getElementById("mult").value;
  let md = document.getElementById("mod").value;
  roll(sid, mul, md);
}
