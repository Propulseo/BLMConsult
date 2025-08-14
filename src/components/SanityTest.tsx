import { useEffect, useState } from 'react'
import { client } from '../config/sanity'

export const SanityTest = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Test simple de connexion avec une requête basique
        const result = await client.fetch('*[_type == "post"][0...1]')
        setIsConnected(true)
        console.log('✅ Connexion Sanity réussie!', result)
      } catch (err) {
        setIsConnected(false)
        setError(err instanceof Error ? err.message : 'Erreur inconnue')
        console.error('❌ Erreur de connexion Sanity:', err)
      }
    }

    testConnection()
  }, [])

  if (isConnected === null) {
    return <div className="text-blue-600 text-center py-4">🔄 Test de connexion en cours...</div>
  }

  if (isConnected) {
    return <div className="text-green-600 text-center py-4 font-semibold">✅ Connexion Sanity réussie!</div>
  }

  return (
    <div className="text-red-600 text-center py-4">
      ❌ Erreur de connexion: {error}
    </div>
  )
}
