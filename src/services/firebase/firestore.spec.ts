import firebaseFirestore from './firestore'

export default function() {
  describe('Firebase firestore testing', () => {
    it('should return a firebase firestore object', () => {
      expect(firebaseFirestore).toBeDefined()
    })
  })
}
