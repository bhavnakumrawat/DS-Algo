function towerOfHanoi(n, source, destination, auxiliary) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }

  // Move (n-1) disks from source to auxiliary using the destination peg as an auxiliary.
  towerOfHanoi(n - 1, source, auxiliary, destination);

  // Move the remaining top disk from the source to the destination.
  console.log(`Move disk ${n} from ${source} to ${destination}`);
// n-1,s,d,z
// print
// n-1,z,s,d
  // Move (n-1) disks from auxiliary to destination using the source peg as an auxiliary.
  towerOfHanoi(n - 1, auxiliary, destination, source);
}

// Example usage:
const n = 3; // Number of disks
const sourcePeg = 'A';
const destinationPeg = 'C';
const auxiliaryPeg = 'B';

towerOfHanoi(n, sourcePeg, destinationPeg, auxiliaryPeg);
