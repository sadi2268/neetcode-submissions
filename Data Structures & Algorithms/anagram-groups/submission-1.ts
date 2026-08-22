class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length === 1) {
            return [strs]
        }
        const map = new Map<string, string[]>()
        for (const str of strs) {
            const key = str.split('').sort().join('')
            if (map.has(key)) {
                const value = map.get(key)
                map.set(key, [...value, str])
            } else {
                map.set(key, [str])
            }
            // console.log(map)
        }
        return Array.from(map.values())
    }
}
