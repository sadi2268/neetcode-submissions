class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false
        }
        const sTable = this.createTableFromString(s)
        const tTable = this.createTableFromString(t)
        
        for (let [ key, value ] of sTable) {
            if (tTable.get(key) !== value) {
                return false
            }
        }

        return true
    }

    createTableFromString(word: string): Map<string, number> {
        const hashTable = new Map<string, number>()
        for (let i = 0; i<word.length; i++) {
            const char = word[i]
            if (hashTable.has(char)) {
                const currentCount = hashTable.get(char)
                hashTable.set(char, currentCount + 1)
            } else {
                hashTable.set(char, 1)
            }
        }

        return hashTable
    }
}
