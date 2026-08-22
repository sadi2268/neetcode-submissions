class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Set<number>()

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            if (seen.has(num)) {
                return true
            } else {
                seen.add(num)
            }
        }

        return false
    }
}
