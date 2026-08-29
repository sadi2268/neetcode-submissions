class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        /* 
        1. count occurrences in a map
        2. sort the map based on values
        3. return top K
        */

        const counts = new Map<number, number>()
        // 1
        for (const n of nums) {
            counts.set(n, (counts.get(n) ?? 0) + 1)
        }
        console.log(counts)

        // 2
        const countsSortedDesc = new Map([...counts.entries()].sort((a, b) => b[1] - a[1]))
        console.log(countsSortedDesc)
        // 3
        const answer = [...countsSortedDesc.keys()].slice(0, k)
        return answer
    }
}
