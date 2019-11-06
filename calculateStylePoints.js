const calculateStylePoints = (styleNotes) => {
    let minNote = Math.min(...styleNotes);
    let maxNote = Math.max(...styleNotes);

    let noteSum = 0; 

    for (let i=0; i < styleNotes.length; i++ ) { // sum every note form judges
        noteSum = noteSum + styleNotes[i];
    }

    return noteSum - (minNote + maxNote) // return final sum minus min and max notes

  };

  module.exports = calculateStylePoints ;