//the possible word list, any words can be changed
const words = `
about above after again among began begin
black bring build carry cause check class
clear close color could cover cross drive
early earth every field final first force
found front great green group heard horse
house large laugh learn leave light might
money music never night north often order
other paper piece place plain plane plant
point pound power press quick reach ready
right river round serve shape short since
`.split(/[\s\n]+/).filter( item => !!item );
// the double exclamation operator converts an Object to Boolean

module.exports = words;



