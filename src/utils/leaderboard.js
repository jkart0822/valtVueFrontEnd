export const generateLeaderboardData = () => {
  const names = [
    'CryptoWhale', 'DataNinja', 'BlockMaster', 'ValtPro', 'ChainWizard',
    'ByteHunter', 'TokenKing', 'HashQueen', 'CipherPro', 'WebWizard',
    'NodeRunner', 'DataDragon', 'AlgoAce', 'MetaMaster', 'ChainChamp',
    'BitBoss', 'NetNinja', 'ProxyPro', 'VaultKeeper', 'StreamKing',
  ]

  return Array.from({ length: 50 }, (_, i) => {
    const basePoints = 150000 - i * 2500 + Math.floor(Math.random() * 1000)
    const username = i < 20 ? names[i] : `User${Math.floor(Math.random() * 10000)}`
    const isCurrentUser = i === 12

    if (isCurrentUser) {
      localStorage.setItem('username', username)
    }

    return {
      rank: i + 1,
      username,
      points: basePoints,
      isCurrentUser,
    }
  })
}