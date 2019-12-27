import FirestoreAdapter from 'emberfire/adapters/firestore'

export default class Firestore extends FirestoreAdapter {
  // Uncomment the following lines to enable offline persistence and multi-tab support
  enablePersistence = true
  persistenceSettings = { synchronizeTabs: true }
}
