export const addNote = (note) => {
  return (dispatch, getState, { getFireStore }) => {
    const firestore = getFireStore();
    firestore.collection('notes')
      .add({
        ...note,
        favorite: false,
        createAt: new Date()
      })
      .then(() => {
        console.log('add the note successfully')
      })
      .catch(err => {
        console.log(err)
      })
  }
}