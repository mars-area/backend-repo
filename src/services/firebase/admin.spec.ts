import firebaseAdmin from './admin'

export default function() {
  describe('Firebase admin testing', () => {
    it('should return a firebase admin object', () => {
      expect(firebaseAdmin).toBeDefined()
    })
  })
}
