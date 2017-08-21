const scribble = require('scribbletune');

let kick, bass;

let cMajor = scribble.scale('c','major');

let clip1 = scribble.clip({
  notes: cMajor.filter((a, x) => x % 2 === 0),
  pattern: '--x-x---x-x-x-x-'
});

let clip2 = scribble.clip({
  notes: cMajor.filter((a, x) => x % 2),
  pattern: 'x-x-x-x-x-x-x-x-'
});

scribble.midi(clip1.concat(clip2));

kick = scribble.clip({
	notes: ['c2'],
	pattern: 'x---'.repeat(4)
});
scribble.midi(kick, 'kick.mid');

bass = scribble.clip({
	notes: scribble.scale('a', 'minor', 2).slice(0, 3),
	pattern: '--x-'.repeat(4),
	shuffle: true
});
scribble.midi(bass, 'bass.mid');

const getRiff = (note) => {
  return scribble.clip({
    notes: [note, 'g#3', 'a3'],
    pattern: 'x_xx'.repeat(8)
  });
}

let f = getRiff('f#3')
let e = getRiff('e3')
let d = getRiff('d3')
let c = getRiff('c#3')
scribble.midi(f.concat(e,d,c),'outro-synth.mid');
