require('dotenv').config();
var Trello = require('trello');
var trello = new Trello(process.env.TRELLO_KEY, process.env.TRELLO_TOKEN);

const paintColorlessLabel = async (color) => {
  const boards = await trello.getBoards(process.env.TRELLO_MBID).catch(err => {
    console.log('An error occured:', err);
  });

  const board = boards.filter(board => {
    return board.shortLink === process.env.TRELLO_BOARDID;
  })[0];

  const labels = await trello.getLabelsForBoard(board.id).catch(err => {
    console.log('An error occured:', err);
  });
  const labelsNoColor = labels.filter(label => {
    return label.color === null;
  });
  for (const label of labelsNoColor) {
    trello.updateLabelColor(label.id, color).catch(err => {
      console.log('An error occured:', err);
    });
  }
};

paintColorlessLabel('your-color-here');
