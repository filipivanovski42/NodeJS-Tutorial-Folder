console.log('Starting notes.js');

var addNote = (title, body) =>
{
  console.log('Adding note', title, body);
};

var getAll = () =>
{
  console.log('Getting all notes');
};

var getNote = () =>
{
  console.log('Getting a note');
};

var removeNote = () =>
{
  console.log('Removing a note');
};

module.exports =
{
  addNote,
  getAll,
  getNote,
  removeNote
};
