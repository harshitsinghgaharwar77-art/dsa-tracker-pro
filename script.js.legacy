const STORAGE_KEY = "lb_dsa_questions_v2";

/* ── SEED DATA ─────────────────────────────────────────────── */
// Add your questions here as the default set.
// Each object: { id, title, link, topic, difficulty, notes, solved }
const SEED_QUESTIONS = [
  // ─── Arrays ────────────────────────────────────────
  {
    id: "a1",
    title: "Reverse the array",
    link: "https://www.geeksforgeeks.org/problems/reverse-an-array/1",
    topic: "Arrays",
    difficulty: "Easy",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a2",
    title: "Find the maximum and minimum element in an array",
    link: "https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1",
    topic: "Arrays",
    difficulty: "Easy",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a3",
    title: 'Find the "Kth" max and min element of an array',
    link: "https://practice.geeksforgeeks.org/problems/kth-smallest-element/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a4",
    title:
      "Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo",
    link: "https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a5",
    title: "Move all the negative elements to one side of the array",
    link: "https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a6",
    title: "Find the Union and Intersection of the two sorted arrays",
    link: "https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a7",
    title: "Write a program to cyclically rotate an array by one",
    link: "https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a8",
    title: "find Largest sum contiguous Subarray",
    link: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "a9",
    title: "Minimise the maximum difference between heights",
    link: "https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "a10",
    title: "Minimum no. of Jumps to reach end of an array",
    link: "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a11",
    title: "find duplicate in an array of N+1 Integers",
    link: "https://leetcode.com/problems/find-the-duplicate-number/",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a12",
    title: "Merge 2 sorted arrays without using Extra space",
    link: "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a13",
    title: "Kadane's Algo",
    link: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "a14",
    title: "Merge Intervals",
    link: "https://leetcode.com/problems/merge-intervals/",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a15",
    title: "Next Permutation",
    link: "https://leetcode.com/problems/next-permutation/",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a16",
    title: "Count Inversion",
    link: "https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a17",
    title: "Best time to buy and Sell stock",
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a18",
    title: "find all pairs on integer array whose sum is equal to given number",
    link: "https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a19",
    title: "find common elements In 3 sorted arrays",
    link: "https://practice.geeksforgeeks.org/problems/common-elements1132/1",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a20",
    title:
      "Rearrange the array in alternating positive and negative items with O(1) extra space",
    link: "https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a21",
    title: "Find if there is any subarray with sum equal to 0",
    link: "https://practice.geeksforgeeks.org/problems/subarray-with-0-sum/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a22",
    title: "Find factorial of a large number",
    link: "https://practice.geeksforgeeks.org/problems/factorials-of-large-numbers/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a23",
    title: "find maximum product subarray",
    link: "https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a24",
    title: "Find longest coinsecutive subsequence",
    link: "https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a25",
    title:
      'Given an array of size n and a number k, fin all elements that appear more than " n/k " times',
    link: "https://www.geeksforgeeks.org/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-nk-times/",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a26",
    title: "Maximum profit by buying and selling a share atmost twice",
    link: "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a27",
    title: "Find whether an array is a subset of another array",
    link: "https://practice.geeksforgeeks.org/problems/array-subset-of-another-array/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a28",
    title: "Find the triplet that sum to a given value",
    link: "https://practice.geeksforgeeks.org/problems/triplet-sum-in-array/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a29",
    title: "Trapping Rain water problem",
    link: "https://practice.geeksforgeeks.org/problems/trapping-rain-water/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a30",
    title: "Chocolate Distribution problem",
    link: "https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a31",
    title: "Smallest Subarray with sum greater than a given value",
    link: "https://practice.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a32",
    title: "Three way partitioning of an array around a given value",
    link: "https://practice.geeksforgeeks.org/problems/three-way-partitioning/1",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a33",
    title: "Minimum swaps required bring elements less equal K together",
    link: "https://practice.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a34",
    title: "Minimum no. of operations required to make an array palindrome",
    link: "https://practice.geeksforgeeks.org/problems/palindromic-array/0",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a35",
    title: "Median of 2 sorted arrays of equal size",
    link: "https://practice.geeksforgeeks.org/problems/find-the-median0527/1",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "a36",
    title: "Median of 2 sorted arrays of different size",
    link: "https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/",
    topic: "Arrays",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  // ─── Matrix ────────────────────────────────────────
  {
    id: "mx1",
    title: "Spiral traversal on a Matrix",
    link: "https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix/0",
    topic: "Matrix",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "mx2",
    title: "Search an element in a matriix",
    link: "https://leetcode.com/problems/search-a-2d-matrix/",
    topic: "Matrix",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "mx3",
    title: "Find median in a row wise sorted matrix",
    link: "https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
    topic: "Matrix",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "mx4",
    title: "Find row with maximum no. of 1's",
    link: "https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1",
    topic: "Matrix",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "mx5",
    title: "Print elements in sorted order using row-column wise sorted matrix",
    link: "https://practice.geeksforgeeks.org/problems/sorted-matrix/0",
    topic: "Matrix",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "mx6",
    title: "Maximum size rectangle",
    link: "https://practice.geeksforgeeks.org/problems/max-rectangle/1",
    topic: "Matrix",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "mx7",
    title: "Find a specific pair in matrix",
    link: "https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/",
    topic: "Matrix",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "mx8",
    title: "Rotate matrix by 90 degrees",
    link: "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/",
    topic: "Matrix",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "mx9",
    title: "Kth smallest element in a row-cpumn wise sorted matrix",
    link: "https://practice.geeksforgeeks.org/problems/kth-element-in-matrix/1",
    topic: "Matrix",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "mx10",
    title: "Common elements in all rows of a given matrix",
    link: "https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/",
    topic: "Matrix",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  // ─── Strings ────────────────────────────────────────
  {
    id: "s1",
    title: "Reverse a String",
    link: "https://leetcode.com/problems/reverse-string/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s2",
    title: "Check whether a String is Palindrome or not",
    link: "https://practice.geeksforgeeks.org/problems/palindrome-string0817/1",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s3",
    title: "Find Duplicate characters in a string",
    link: "https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s4",
    title: "Why strings are immutable in Java?",
    link: "",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s5",
    title: "Write a Code to check whether one string is a rotation of another",
    link: "https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s6",
    title:
      "Write a Program to check whether a string is a valid shuffle of two strings or not",
    link: "https://www.programiz.com/java-programming/examples/check-valid-shuffle-of-strings",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s7",
    title: "Count and Say problem",
    link: "https://leetcode.com/problems/count-and-say/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s8",
    title:
      "Write a program to find the longest Palindrome in a string.[ Longest palindromic Substring]",
    link: "https://practice.geeksforgeeks.org/problems/longest-palindrome-in-a-string/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s9",
    title: "Find Longest Recurring Subsequence in String",
    link: "https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s10",
    title: "Print all Subsequences of a string",
    link: "https://www.geeksforgeeks.org/print-subsequences-string/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s11",
    title: "Print all the permutations of the given string",
    link: "https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s12",
    title: "Split the Binary string into two substring with equal 0’s and 1’s",
    link: "https://www.geeksforgeeks.org/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s13",
    title: "Word Wrap Problem",
    link: "https://practice.geeksforgeeks.org/problems/word-wrap/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "s14",
    title: "EDIT Distance",
    link: "https://practice.geeksforgeeks.org/problems/edit-distance3702/1",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "s15",
    title: "Find next greater number with same set of digits",
    link: "https://practice.geeksforgeeks.org/problems/next-permutation/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "s16",
    title: "Balanced Parenthesis problem",
    link: "https://practice.geeksforgeeks.org/problems/parenthesis-checker/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "s17",
    title: "Word break Problem",
    link: "https://practice.geeksforgeeks.org/problems/word-break/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "s18",
    title: "Rabin Karp Algo",
    link: "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s19",
    title: "KMP Algo",
    link: "https://practice.geeksforgeeks.org/problems/longest-prefix-suffix2527/1",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s20",
    title:
      "Convert a Sentence into its equivalent mobile numeric keypad sequence",
    link: "https://www.geeksforgeeks.org/convert-sentence-equivalent-mobile-numeric-keypad-sequence/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s21",
    title:
      "Minimum number of bracket reversals needed to make an expression balanced",
    link: "https://practice.geeksforgeeks.org/problems/count-the-reversals/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s22",
    title: "Count All Palindromic Subsequence in a given String",
    link: "https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s23",
    title: "Count of number of given string in 2D character array",
    link: "https://www.geeksforgeeks.org/find-count-number-given-string-present-2d-character-array/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s24",
    title: "Search a Word in a 2D Grid of characters",
    link: "https://practice.geeksforgeeks.org/problems/find-the-string-in-grid/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s25",
    title: "Boyer Moore Algorithm for Pattern Searching",
    link: "https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s26",
    title: "Converting Roman Numerals to Decimal",
    link: "https://practice.geeksforgeeks.org/problems/roman-number-to-integer/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s27",
    title: "Longest Common Prefix",
    link: "https://leetcode.com/problems/longest-common-prefix/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s28",
    title: "Number of flips to make binary string alternate",
    link: "https://practice.geeksforgeeks.org/problems/min-number-of-flips/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s29",
    title: "Find the first repeated word in string",
    link: "https://practice.geeksforgeeks.org/problems/second-most-repeated-string-in-a-sequence/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s30",
    title: "Minimum number of swaps for bracket balancing",
    link: "https://practice.geeksforgeeks.org/problems/minimum-swaps-for-bracket-balancing/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s31",
    title: "Find the longest common subsequence between two strings",
    link: "https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s32",
    title:
      "Program to generate all possible valid IP addresses from given string",
    link: "https://www.geeksforgeeks.org/program-generate-possible-valid-ip-addresses-given-string/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s33",
    title:
      "Write a program tofind the smallest window that contains all characters of string itself",
    link: "https://practice.geeksforgeeks.org/problems/smallest-distant-window/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s34",
    title:
      "Rearrange characters in a string such that no two adjacent are same",
    link: "https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s35",
    title: "Minimum characters to be added at front to make string palindrome",
    link: "https://www.geeksforgeeks.org/minimum-characters-added-front-make-string-palindrome/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s36",
    title: "Given a sequence of words, print all anagrams together",
    link: "https://practice.geeksforgeeks.org/problems/k-anagrams-1/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s37",
    title:
      "Find the smallest window in a string containing all characters of another string",
    link: "https://practice.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s38",
    title: "Recursively remove all adjacent duplicates",
    link: "https://practice.geeksforgeeks.org/problems/consecutive-elements/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s39",
    title: "String matching where one string contains wildcard characters",
    link: "https://practice.geeksforgeeks.org/problems/wildcard-string-matching/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s40",
    title: "Function to find Number of customers who could not get a computer",
    link: "https://www.geeksforgeeks.org/function-to-find-number-of-customers-who-could-not-get-a-computer/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s41",
    title:
      "Transform One String to Another using Minimum Number of Given Operation",
    link: "https://www.geeksforgeeks.org/transform-one-string-to-another-using-minimum-number-of-given-operation/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s42",
    title: "Check if two given strings are isomorphic to each other",
    link: "https://practice.geeksforgeeks.org/problems/isomorphic-strings/0",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "s43",
    title:
      "Recursively print all sentences that can be formed from list of word lists",
    link: "https://www.geeksforgeeks.org/recursively-print-all-sentences-that-can-be-formed-from-list-of-word-lists/",
    topic: "Strings",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  // ─── Searching & Sorting ────────────────────────────────────────
  {
    id: "ss1",
    title: "Find first and last positions of an element in a sorted array",
    link: "https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss2",
    title: "Find a Fixed Point (Value equal to index) in a given array",
    link: "https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss3",
    title: "Search in a rotated sorted array",
    link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss4",
    title: "square root of an integer",
    link: "https://practice.geeksforgeeks.org/problems/count-squares3649/1",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss5",
    title:
      "Maximum and minimum of an array using minimum number of comparisons",
    link: "https://practice.geeksforgeeks.org/problems/middle-of-three2926/1",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss6",
    title: "Optimum location of point to minimize total distance",
    link: "https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss7",
    title: "Find the repeating and the missing",
    link: "https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss8",
    title: "find majority element",
    link: "https://practice.geeksforgeeks.org/problems/majority-element/0",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss9",
    title: "Searching in an array where adjacent differ by at most k",
    link: "https://www.geeksforgeeks.org/searching-array-adjacent-differ-k/",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss10",
    title: "find a pair with a given difference",
    link: "https://practice.geeksforgeeks.org/problems/find-pair-given-difference/0",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss11",
    title: "find four elements that sum to a given value",
    link: "https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers/0",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss12",
    title: "maximum sum such that no 2 elements are adjacent",
    link: "https://practice.geeksforgeeks.org/problems/stickler-theif/0",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss13",
    title: "Count triplet with sum smaller than a given value",
    link: "https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss14",
    title: "merge 2 sorted arrays",
    link: "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss15",
    title: "print all subarrays with 0 sum",
    link: "https://practice.geeksforgeeks.org/problems/zero-sum-subarrays/0",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss16",
    title: "Product array Puzzle",
    link: "https://practice.geeksforgeeks.org/problems/product-array-puzzle/0",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss17",
    title: "Sort array according to count of set bits",
    link: "https://practice.geeksforgeeks.org/problems/sort-by-set-bit-count/0",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss18",
    title: "minimum no. of swaps required to sort the array",
    link: "https://practice.geeksforgeeks.org/problems/minimum-swaps/1",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss19",
    title: "Bishu and Soldiers",
    link: "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/bishu-and-soldiers/",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss20",
    title: "Rasta and Kheshtak",
    link: "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss21",
    title: "Kth smallest number again",
    link: "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/kth-smallest-number-again-2/",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss22",
    title: "Find pivot element in a sorted array",
    link: "http://theoryofprogramming.com/2017/12/16/find-pivot-element-sorted-rotated-array/",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss23",
    title: "K-th Element of Two Sorted Arrays",
    link: "https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array/0",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss24",
    title: "Aggressive cows",
    link: "https://www.spoj.com/problems/AGGRCOW/",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss25",
    title: "Book Allocation Problem",
    link: "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss26",
    title: "EKOSPOJ:",
    link: "https://www.spoj.com/problems/EKO/",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss27",
    title: "Job Scheduling Algo",
    link: "https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss28",
    title: "Missing Number in AP",
    link: "https://practice.geeksforgeeks.org/problems/arithmetic-number/0",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss29",
    title: "Smallest number with atleastn trailing zeroes infactorial",
    link: "https://practice.geeksforgeeks.org/problems/smallest-factorial-number5929/1",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss30",
    title: "Painters Partition Problem:",
    link: "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss31",
    title: "ROTI-Prata SPOJ",
    link: "https://www.spoj.com/problems/PRATA/",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss32",
    title: "DoubleHelix SPOJ",
    link: "https://www.spoj.com/problems/ANARC05B/",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss33",
    title: "Subset Sums",
    link: "https://www.spoj.com/problems/SUBSUMS/",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss34",
    title: "Findthe inversion count",
    link: "https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss35",
    title: "Implement Merge-sort in-place",
    link: "https://www.geeksforgeeks.org/in-place-merge-sort/",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ss36",
    title: "Partitioning and Sorting Arrays with Many Repeated Entries",
    link: "https://www.baeldung.com/java-sorting-arrays-with-repeated-entries",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  // ─── Linked List ────────────────────────────────────────
  {
    id: "ll1",
    title:
      "Write a Program to reverse the Linked List. (Both Iterative and recursive)",
    link: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll2",
    title: "Reverse a Linked List in group of Given Size",
    link: "https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "ll3",
    title: "Write a program to Detect loop in a linked list",
    link: "https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll4",
    title: "Write a program to Delete loop in a linked list",
    link: "https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll5",
    title: "Find the starting point of the loop",
    link: "https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll6",
    title: "Remove Duplicates in a sorted Linked List",
    link: "https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll7",
    title: "Remove Duplicates in a Un-sorted Linked List",
    link: "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll8",
    title: "Write a Program to Move the last element to Front in a Linked List",
    link: "https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll9",
    title: "Add “1” to a number represented as a Linked List",
    link: "https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll10",
    title: "Add two numbers represented by linked lists",
    link: "https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll11",
    title: "Intersection of two Sorted Linked List",
    link: "https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll12",
    title: "Intersection Point of two Linked Lists",
    link: "https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll13",
    title: "Merge Sort For Linked lists",
    link: "https://practice.geeksforgeeks.org/problems/sort-a-linked-list/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "ll14",
    title: "Quicksort for Linked Lists",
    link: "https://practice.geeksforgeeks.org/problems/quick-sort-on-linked-list/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "ll15",
    title: "Find the middle Element of a linked list",
    link: "https://leetcode.com/problems/middle-of-the-linked-list/",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll16",
    title: "Check if a linked list is a circular linked list",
    link: "https://practice.geeksforgeeks.org/problems/circular-linked-list/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll17",
    title: "Split a Circular linked list into two halves",
    link: "https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll18",
    title:
      "Write a Program to check whether the Singly Linked list is a palindrome or not",
    link: "https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll19",
    title: "Deletion from a Circular Linked List",
    link: "https://www.geeksforgeeks.org/deletion-circular-linked-list/",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll20",
    title: "Reverse a Doubly Linked list",
    link: "https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll21",
    title: "Find pairs with a given sum in a DLL",
    link: "https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll22",
    title:
      "Count triplets in a sorted DLL whose sum is equal to given value “X”",
    link: "https://www.geeksforgeeks.org/count-triplets-sorted-doubly-linked-list-whose-sum-equal-given-value-x/",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll23",
    title: "Sort a “k”sorted Doubly Linked list",
    link: "https://www.geeksforgeeks.org/sort-k-sorted-doubly-linked-list/",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "ll24",
    title: "Rotate DoublyLinked list by N nodes",
    link: "https://www.geeksforgeeks.org/rotate-doubly-linked-list-n-nodes/",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll25",
    title: "Rotate a Doubly Linked list in group of Given Size",
    link: "https://www.geeksforgeeks.org/reverse-doubly-linked-list-groups-given-size/",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "ll26",
    title: "Can we reverse a linked list in less than O(n) ?",
    link: "",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll27",
    title:
      "Why Quicksort is preferred for. Arrays and Merge Sort for LinkedLists ?",
    link: "",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll28",
    title: "Flatten a Linked List",
    link: "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll29",
    title: "Sort a LL of 0's, 1's and 2's",
    link: "https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll30",
    title: "Clone a linked list with next and random pointer",
    link: "https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll31",
    title: "Merge K sorted Linked list",
    link: "https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll32",
    title: "Multiply 2 no. represented by LL",
    link: "https://practice.geeksforgeeks.org/problems/multiply-two-linked-lists/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll33",
    title: "Delete nodes which have a greater value on right side",
    link: "https://practice.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll34",
    title: "Segregate even and odd nodes in a Linked List",
    link: "https://practice.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list/0",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll35",
    title: "Program for n’th node from the end of a Linked List",
    link: "https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "ll36",
    title: "Find the first non-repeating character from a stream of characters",
    link: "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
    topic: "Linked List",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  // ─── Binary Trees ────────────────────────────────────────
  {
    id: "bt1",
    title: "level order traversal",
    link: "https://practice.geeksforgeeks.org/problems/level-order-traversal/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt2",
    title: "Reverse Level Order traversal",
    link: "https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt3",
    title: "Height of a tree",
    link: "https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt4",
    title: "Diameter of a tree",
    link: "https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt5",
    title: "Mirror of a tree",
    link: "https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt6",
    title: "Inorder Traversal of a tree both using recursion and Iteration",
    link: "https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt7",
    title: "Preorder Traversal of a tree both using recursion and Iteration",
    link: "https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt8",
    title: "Postorder Traversal of a tree both using recursion and Iteration",
    link: "https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt9",
    title: "Left View of a tree",
    link: "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt10",
    title: "Right View of Tree",
    link: "https://practice.geeksforgeeks.org/problems/right-view-of-binary-tree/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt11",
    title: "Top View of a tree",
    link: "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt12",
    title: "Bottom View of a tree",
    link: "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt13",
    title: "Zig-Zag traversal of a binary tree",
    link: "https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt14",
    title: "Check if a tree is balanced or not",
    link: "https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt15",
    title: "Diagnol Traversal of a Binary tree",
    link: "https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt16",
    title: "Boundary traversal of a Binary tree",
    link: "https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt17",
    title: "Construct Binary Tree from String with Bracket Representation",
    link: "https://www.geeksforgeeks.org/construct-binary-tree-string-bracket-representation/",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt18",
    title: "Convert Binary tree into Doubly Linked List",
    link: "https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt19",
    title: "Convert Binary tree into Sum tree",
    link: "https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt20",
    title: "Construct Binary tree from Inorder and preorder traversal",
    link: "https://practice.geeksforgeeks.org/problems/construct-tree-1/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt21",
    title: "Find minimum swaps required to convert a Binary tree into BST",
    link: "https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt22",
    title: "Check if Binary tree is Sum tree or not",
    link: "https://practice.geeksforgeeks.org/problems/sum-tree/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt23",
    title: "Check if all leaf nodes are at same level or not",
    link: "https://practice.geeksforgeeks.org/problems/leaf-at-same-level/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt24",
    title:
      "Check if a Binary Tree contains duplicate subtrees of size 2 or more",
    link: "https://practice.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "bt25",
    title: "Check if 2 trees are mirror or not",
    link: "https://practice.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree/0",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt26",
    title: "Sum of Nodes on the Longest path from root to leaf node",
    link: "https://practice.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt27",
    title: "Check if given graph is tree or not",
    link: "https://www.geeksforgeeks.org/check-given-graph-tree/",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "bt28",
    title: "Find Largest subtree sum in a tree",
    link: "https://www.geeksforgeeks.org/find-largest-subtree-sum-tree/",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt29",
    title: "Maximum Sum of nodes in Binary tree such that no two are adjacent",
    link: "https://www.geeksforgeeks.org/maximum-sum-nodes-binary-tree-no-two-adjacent/",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt30",
    title: 'Print all "K" Sum paths in a Binary tree',
    link: "https://www.geeksforgeeks.org/print-k-sum-paths-binary-tree/",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt31",
    title: "Find LCA in a Binary tree",
    link: "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt32",
    title: "Find distance between 2 nodes in a Binary tree",
    link: "https://practice.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt33",
    title: "Kth Ancestor of node in a Binary tree",
    link: "https://www.geeksforgeeks.org/kth-ancestor-node-binary-tree-set-2/",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bt34",
    title: "Find all Duplicate subtrees in a Binary tree",
    link: "https://practice.geeksforgeeks.org/problems/duplicate-subtrees/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "bt35",
    title: "Tree Isomorphism Problem",
    link: "https://practice.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1",
    topic: "Binary Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  // ─── Binary Search Trees ────────────────────────────────────────
  {
    id: "bst1",
    title: "Fina a value in a BST",
    link: "https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst2",
    title: "Deletion of a node in a BST",
    link: "https://leetcode.com/problems/delete-node-in-a-bst/",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst3",
    title: "Find min and max value in a BST",
    link: "https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst4",
    title: "Find inorder successor and inorder predecessor in a BST",
    link: "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst5",
    title: "Check if a tree is a BST or not",
    link: "https://practice.geeksforgeeks.org/problems/check-for-bst/1",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst6",
    title: "Populate Inorder successor of all nodes",
    link: "https://practice.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst7",
    title: "Find LCA of 2 nodes in a BST",
    link: "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst8",
    title: "Construct BST from preorder traversal",
    link: "https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversa/",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst9",
    title: "Convert Binary tree into BST",
    link: "https://practice.geeksforgeeks.org/problems/binary-tree-to-bst/1",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst10",
    title: "Convert a normal BST into a Balanced BST",
    link: "https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst11",
    title: "Merge two BST",
    link: "https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "bst12",
    title: "Find Kth largest element in a BST",
    link: "https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst13",
    title: "Find Kth smallest element in a BST",
    link: "https://practice.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst14",
    title: 'Count pairs from 2 BST whose sum is equal to given value "X"',
    link: "https://practice.geeksforgeeks.org/problems/brothers-from-different-root/1",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst15",
    title: "Find the median of BST in O(n) time and O(1) space",
    link: "https://www.geeksforgeeks.org/find-median-bst-time-o1-space/",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst16",
    title: "Count BST ndoes that lie in a given range",
    link: "https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst17",
    title: "Replace every element with the least greater element on its right",
    link: "https://www.geeksforgeeks.org/replace-every-element-with-the-least-greater-element-on-its-right/",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst18",
    title: 'Given "n" appointments, find the conflicting appointments',
    link: "https://www.geeksforgeeks.org/given-n-appointments-find-conflicting-appointments/",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst19",
    title: "Check preorder is valid or not",
    link: "https://practice.geeksforgeeks.org/problems/preorder-to-postorder/0",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst20",
    title: "Check whether BST contains Dead end",
    link: "https://practice.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bst21",
    title: "Largest BST in a Binary Tree",
    link: "https://practice.geeksforgeeks.org/problems/largest-bst/1",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "bst22",
    title: "Flatten BST to sorted list",
    link: "https://www.geeksforgeeks.org/flatten-bst-to-sorted-list-increasing-order/",
    topic: "Binary Search Trees",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  // ─── Greedy ────────────────────────────────────────
  {
    id: "gr1",
    title: "Activity Selection Problem",
    link: "https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr2",
    title: "Job SequencingProblem",
    link: "https://practice.geeksforgeeks.org/problems/job-sequencing-problem/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr3",
    title: "Huffman Coding",
    link: "https://practice.geeksforgeeks.org/problems/huffman-encoding/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr4",
    title: "Water Connection Problem",
    link: "https://practice.geeksforgeeks.org/problems/water-connection-problem/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr5",
    title: "Fractional Knapsack Problem",
    link: "https://practice.geeksforgeeks.org/problems/fractional-knapsack/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr6",
    title: "Greedy Algorithm to find Minimum number of Coins",
    link: "https://practice.geeksforgeeks.org/problems/coin-piles/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr7",
    title: "Maximum trains for which stoppage can be provided",
    link: "https://www.geeksforgeeks.org/maximum-trains-stoppage-can-provided/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr8",
    title: "Minimum Platforms Problem",
    link: "https://practice.geeksforgeeks.org/problems/minimum-platforms/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr9",
    title: "Buy Maximum Stocks if i stocks can be bought on i-th day",
    link: "https://www.geeksforgeeks.org/buy-maximum-stocks-stocks-can-bought-th-day/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr10",
    title: "Find the minimum and maximum amount to buy all N candies",
    link: "https://practice.geeksforgeeks.org/problems/shop-in-candy-store/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr11",
    title:
      "Minimize Cash Flow among a given set of friends who have borrowed money from each other",
    link: "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr12",
    title: "Minimum Cost to cut a board into squares",
    link: "https://www.geeksforgeeks.org/minimum-cost-cut-board-squares/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr13",
    title: "Check if it is possible to survive on Island",
    link: "https://www.geeksforgeeks.org/survival/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr14",
    title: "Find maximum meetings in one room",
    link: "https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr15",
    title: "Maximum product subset of an array",
    link: "https://www.geeksforgeeks.org/maximum-product-subset-array/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr16",
    title: "Maximize array sum after K negations",
    link: "https://practice.geeksforgeeks.org/problems/maximize-sum-after-k-negations/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr17",
    title: "Maximize the sum of arr[i]*i",
    link: "https://practice.geeksforgeeks.org/problems/maximize-arrii-of-an-array/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr18",
    title: "Maximum sum of absolute difference of an array",
    link: "https://www.geeksforgeeks.org/maximum-sum-absolute-difference-array/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr19",
    title: "Maximize sum of consecutive differences in a circular array",
    link: "https://practice.geeksforgeeks.org/problems/swap-and-maximize/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr20",
    title: "Minimum sum of absolute difference of pairs of two arrays",
    link: "https://www.geeksforgeeks.org/minimum-sum-absolute-difference-pairs-two-arrays/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr21",
    title: "Program for Shortest Job First (or SJF) CPU Scheduling",
    link: "https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr22",
    title: "Program for Least Recently Used (LRU) Page Replacement algorithm",
    link: "https://practice.geeksforgeeks.org/problems/page-faults-in-lru/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr23",
    title: "Smallest subset with sum greater than all other elements",
    link: "https://www.geeksforgeeks.org/smallest-subset-sum-greater-elements/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr24",
    title: "Chocolate Distribution Problem",
    link: "https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr25",
    title: "DEFKIN -Defense of a Kingdom",
    link: "https://www.spoj.com/problems/DEFKIN/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr26",
    title: "DIEHARD -DIE HARD",
    link: "https://www.spoj.com/problems/DIEHARD/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr27",
    title: "GERGOVIA -Wine trading in Gergovia",
    link: "https://www.spoj.com/problems/GERGOVIA/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr28",
    title: "Picking Up Chicks",
    link: "https://www.spoj.com/problems/GCJ101BB/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr29",
    title: "CHOCOLA –Chocolate",
    link: "https://www.spoj.com/problems/CHOCOLA/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr30",
    title: "ARRANGE -Arranging Amplifiers",
    link: "https://www.spoj.com/problems/ARRANGE/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr31",
    title: "K Centers Problem",
    link: "https://www.geeksforgeeks.org/k-centers-problem-set-1-greedy-approximate-algorithm/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr32",
    title: "Minimum Cost of ropes",
    link: "https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr33",
    title: "Find smallest number with given number of digits and sum of digits",
    link: "https://practice.geeksforgeeks.org/problems/smallest-number5829/1",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr34",
    title:
      "Rearrange characters in a string such that no two adjacent are same",
    link: "https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gr35",
    title: "Find maximum sum possible equal sum of three stacks",
    link: "https://www.geeksforgeeks.org/find-maximum-sum-possible-equal-sum-three-stacks/",
    topic: "Greedy",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  // ─── Backtracking ────────────────────────────────────────
  {
    id: "bk1",
    title: "Rat in a maze Problem",
    link: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk2",
    title: "Printing all solutions in N-Queen Problem",
    link: "https://www.geeksforgeeks.org/printing-solutions-n-queen-problem/",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk3",
    title: "Word Break Problem using Backtracking",
    link: "https://practice.geeksforgeeks.org/problems/word-break-part-2/0",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk4",
    title: "Remove Invalid Parentheses",
    link: "https://leetcode.com/problems/remove-invalid-parentheses/",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk5",
    title: "Sudoku Solver",
    link: "https://practice.geeksforgeeks.org/problems/solve-the-sudoku/0",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk6",
    title: "m Coloring Problem",
    link: "https://practice.geeksforgeeks.org/problems/m-coloring-problem/0",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk7",
    title: "Print all palindromic partitions of a string",
    link: "https://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk8",
    title: "Subset Sum Problem",
    link: "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk9",
    title: "The Knight’s tour problem",
    link: "https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk10",
    title: "Tug of War",
    link: "https://www.geeksforgeeks.org/tug-of-war/",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk11",
    title: "Find shortest safe route in a path with landmines",
    link: "https://www.geeksforgeeks.org/find-shortest-safe-route-in-a-path-with-landmines/",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk12",
    title: "Combinational Sum",
    link: "https://practice.geeksforgeeks.org/problems/combination-sum/0",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk13",
    title: "Find Maximum number possible by doing at-most K swaps",
    link: "https://practice.geeksforgeeks.org/problems/largest-number-in-k-swaps/0",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk14",
    title: "Print all permutations of a string",
    link: "https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk15",
    title: "Find if there is a path of more than k length from a source",
    link: "https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk16",
    title: "Longest Possible Route in a Matrix with Hurdles",
    link: "https://www.geeksforgeeks.org/longest-possible-route-in-a-matrix-with-hurdles/",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk17",
    title:
      "Print all possible paths from top left to bottom right of a mXn matrix",
    link: "https://www.geeksforgeeks.org/print-all-possible-paths-from-top-left-to-bottom-right-of-a-mxn-matrix/",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk18",
    title: "Partition of a set intoK subsets with equal sum",
    link: "https://practice.geeksforgeeks.org/problems/partition-array-to-k-subsets/1",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bk19",
    title: "Find the K-th Permutation Sequence of first N natural numbers",
    link: "https://www.geeksforgeeks.org/find-the-k-th-permutation-sequence-of-first-n-natural-numbers/",
    topic: "Backtracking",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  // ─── Stacks & Queues ────────────────────────────────────────
  {
    id: "sq1",
    title: "Implement Stack from Scratch",
    link: "https://www.tutorialspoint.com/javaexamples/data_stack.htm",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq2",
    title: "Implement Queue from Scratch",
    link: "https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq3",
    title: "Implement 2 stack in an array",
    link: "https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq4",
    title: "find the middle element of a stack",
    link: "https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq5",
    title: 'Implement "N" stacks in an Array',
    link: "https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq6",
    title: "Check the expression has valid or Balanced parenthesis or not",
    link: "https://practice.geeksforgeeks.org/problems/parenthesis-checker/0",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq7",
    title: "Reverse a String using Stack",
    link: "https://practice.geeksforgeeks.org/problems/reverse-a-string-using-stack/1",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq8",
    title:
      "Design a Stack that supports getMin() in O(1) time and O(1) extra space",
    link: "https://practice.geeksforgeeks.org/problems/special-stack/1",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq9",
    title: "Find the next Greater element",
    link: "https://practice.geeksforgeeks.org/problems/next-larger-element/0",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq10",
    title: "The celebrity Problem",
    link: "https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq11",
    title: "Arithmetic Expression evaluation",
    link: "https://www.geeksforgeeks.org/arithmetic-expression-evalution/",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq12",
    title: "Evaluation of Postfix expression",
    link: "https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression/0",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq13",
    title:
      "Implement a method to insert an element at its bottom without using any other data structure",
    link: "https://stackoverflow.com/questions/45130465/inserting-at-the-end-of-stack",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq14",
    title: "Reverse a stack using recursion",
    link: "https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq15",
    title: "Sort a Stack using recursion",
    link: "https://practice.geeksforgeeks.org/problems/sort-a-stack/1",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq16",
    title: "Merge Overlapping Intervals",
    link: "https://practice.geeksforgeeks.org/problems/overlapping-intervals/0",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq17",
    title: "Largest rectangular Area in Histogram",
    link: "https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram/0",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq18",
    title: "Length of the Longest Valid Substring",
    link: "https://practice.geeksforgeeks.org/problems/valid-substring0624/1",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq19",
    title: "Expression contains redundant bracket or not",
    link: "https://www.geeksforgeeks.org/expression-contains-redundant-bracket-not/",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq20",
    title: "Implement Stack using Queue",
    link: "https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq21",
    title: "Implement Stack using Deque",
    link: "https://www.geeksforgeeks.org/implement-stack-queue-using-deque/",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq22",
    title:
      "Stack Permutations (Check if an array is stack permutation of other)",
    link: "https://www.geeksforgeeks.org/stack-permutations-check-if-an-array-is-stack-permutation-of-other/",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq23",
    title: "Implement Queue using Stack",
    link: "https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq24",
    title: 'Implement "n" queue in an array',
    link: "https://www.geeksforgeeks.org/efficiently-implement-k-queues-single-array/",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq25",
    title: "Implement a Circular queue",
    link: "https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq26",
    title: "LRU Cache Implementationa",
    link: "https://practice.geeksforgeeks.org/problems/lru-cache/1",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq27",
    title: "Reverse a Queue using recursion",
    link: "https://practice.geeksforgeeks.org/problems/queue-reversal/1",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq28",
    title: "Reverse the first “K” elements of a queue",
    link: "https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq29",
    title: "Interleave the first half of the queue with second half",
    link: "https://www.geeksforgeeks.org/interleave-first-half-queue-second-half/",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq30",
    title: "Find the first circular tour that visits all Petrol Pumps",
    link: "https://practice.geeksforgeeks.org/problems/circular-tour/1",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq31",
    title: "Minimum time required to rot all oranges",
    link: "https://practice.geeksforgeeks.org/problems/rotten-oranges/0",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq32",
    title: "Distance of nearest cell having 1 in a binary matrix",
    link: "https://practice.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1/0",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq33",
    title: "First negative integer in every window of size “k”",
    link: "https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k/0",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq34",
    title: "Check if all levels of two trees are anagrams or not",
    link: "https://www.geeksforgeeks.org/check-if-all-levels-of-two-trees-are-anagrams-or-not/",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq35",
    title: "Sum of minimum and maximum elements of all subarrays of size “k”",
    link: "https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq36",
    title:
      "Minimum sum of squares of character counts in a given string after removing “k” characters",
    link: "https://practice.geeksforgeeks.org/problems/game-with-string/0",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq37",
    title: "Queue based approach or first non-repeating character in a stream",
    link: "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "sq38",
    title: "Next Smaller Element",
    link: "https://www.geeksforgeeks.org/next-smaller-element/",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  // ─── Heap ────────────────────────────────────────
  {
    id: "hp1",
    title: "Implement a Maxheap/MinHeap using arrays and recursion",
    link: "https://www.geeksforgeeks.org/building-heap-from-array/",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp2",
    title: "Sort an Array using heap. (HeapSort)",
    link: "https://www.geeksforgeeks.org/heap-sort/",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp3",
    title: "Maximum of all subarrays of size k",
    link: "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp4",
    title: "“k” largest element in an array",
    link: "https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp5",
    title: "Kth smallest and largest element in an unsorted array",
    link: "https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp6",
    title: "Merge “K” sorted arrays",
    link: "https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "hp7",
    title: "Merge 2 Binary Max Heaps",
    link: "https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap/0",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp8",
    title: "Kth largest sum continuous subarrays",
    link: "https://www.geeksforgeeks.org/k-th-largest-sum-contiguous-subarray/",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp9",
    title: "Leetcode- reorganize strings",
    link: "https://leetcode.com/problems/reorganize-string/",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp10",
    title: "Merge “K” Sorted Linked Lists",
    link: "https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "hp11",
    title: "Smallest range in “K” Lists",
    link: "https://practice.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp12",
    title: "Median in a stream of Integers",
    link: "https://practice.geeksforgeeks.org/problems/find-median-in-a-stream/0",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp13",
    title: "Check if a Binary Tree is Heap",
    link: "https://practice.geeksforgeeks.org/problems/is-binary-tree-heap/1",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp14",
    title: "Connect “n” ropes with minimum cost",
    link: "https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp15",
    title: "Convert BST to Min Heap",
    link: "https://www.geeksforgeeks.org/convert-bst-min-heap/",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp16",
    title: "Convert min heap to max heap",
    link: "https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp17",
    title:
      "Rearrange characters in a string such that no two adjacent are same",
    link: "https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "hp18",
    title: "Minimum sum of two numbers formed from digits of an array",
    link: "https://practice.geeksforgeeks.org/problems/minimum-sum4058/1",
    topic: "Heap",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  // ─── Graph ────────────────────────────────────────
  {
    id: "gp1",
    title: "Create a Graph, print it",
    link: "https://1drv.ms/t/s!AqTOHFO77CqEiRua06v1PATyiFg5",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp2",
    title: "Implement BFS algorithm",
    link: "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp3",
    title: "Implement DFS Algo",
    link: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp4",
    title: "Detect Cycle in Directed Graph using BFS/DFS Algo",
    link: "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp5",
    title: "Detect Cycle in UnDirected Graph using BFS/DFS Algo",
    link: "https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp6",
    title: "Search in a Maze",
    link: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp7",
    title: "Minimum Step by Knight",
    link: "https://practice.geeksforgeeks.org/problems/steps-by-knight/0",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp8",
    title: "flood fill algo",
    link: "https://leetcode.com/problems/flood-fill/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp9",
    title: "Clone a graph",
    link: "https://leetcode.com/problems/clone-graph/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp10",
    title: "Making wired Connections",
    link: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp11",
    title: "word Ladder",
    link: "https://leetcode.com/problems/word-ladder/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp12",
    title: "Dijkstra algo",
    link: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp13",
    title: "Implement Topological Sort",
    link: "https://practice.geeksforgeeks.org/problems/topological-sort/1",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp14",
    title:
      "Minimum time taken by each job to be completed given by a Directed Acyclic Graph",
    link: "https://www.geeksforgeeks.org/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp15",
    title:
      "Find whether it is possible to finish all tasks or not from given dependencies",
    link: "https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp16",
    title: "Find the no. of Isalnds",
    link: "https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp17",
    title:
      "Given a sorted Dictionary of an Alien Language, find order of characters",
    link: "https://practice.geeksforgeeks.org/problems/alien-dictionary/1",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp18",
    title: "Implement Kruksal’sAlgorithm",
    link: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp19",
    title: "Implement Prim’s Algorithm",
    link: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp20",
    title: "Total no. of Spanning tree in a graph",
    link: "https://www.geeksforgeeks.org/total-number-spanning-trees-graph/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp21",
    title: "Implement Bellman Ford Algorithm",
    link: "https://practice.geeksforgeeks.org/problems/negative-weight-cycle/0",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp22",
    title: "Implement Floyd warshallAlgorithm",
    link: "https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall/0",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp23",
    title: "Travelling Salesman Problem",
    link: "https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp24",
    title: "Graph ColouringProblem",
    link: "https://www.geeksforgeeks.org/graph-coloring-applications/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp25",
    title: "Snake and Ladders Problem",
    link: "https://leetcode.com/problems/snakes-and-ladders/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp26",
    title: "Find bridge in a graph",
    link: "https://www.geeksforgeeks.org/bridge-in-a-graph/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp27",
    title: "Count Strongly connected Components(Kosaraju Algo)",
    link: "https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp28",
    title: "Check whether a graph is Bipartite or Not",
    link: "https://www.geeksforgeeks.org/bipartite-graph/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp29",
    title: "Detect Negative cycle in a graph",
    link: "https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp30",
    title: "Longest path in a Directed Acyclic Graph",
    link: "https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp31",
    title: "Journey to the Moon",
    link: "https://www.hackerrank.com/challenges/journey-to-the-moon/problem",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp32",
    title: "Cheapest Flights Within K Stops",
    link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/description/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp33",
    title: "Oliver and the Game",
    link: "https://www.hackerearth.com/practice/algorithms/graphs/topological-sort/practice-problems/algorithm/oliver-and-the-game-3/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp34",
    title: "Water Jug problem using BFS",
    link: "https://www.geeksforgeeks.org/water-jug-problem-using-bfs/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp35",
    title: "Water Jug problem using BFS",
    link: "https://www.geeksforgeeks.org/water-jug-problem-using-bfs/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp36",
    title: "Find if there is a path of more thank length from a source",
    link: "https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp37",
    title: "M-ColouringProblem",
    link: "https://practice.geeksforgeeks.org/problems/m-coloring-problem/0",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp38",
    title: "Minimum edges to reverse o make path from source to destination",
    link: "https://www.geeksforgeeks.org/minimum-edges-reverse-make-path-source-destination/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp39",
    title: "Paths to travel each nodes using each edge(Seven Bridges)",
    link: "https://www.geeksforgeeks.org/paths-travel-nodes-using-edgeseven-bridges-konigsberg/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp40",
    title: "Vertex Cover Problem",
    link: "https://www.geeksforgeeks.org/vertex-cover-problem-set-1-introduction-approximate-algorithm-2/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp41",
    title: "Chinese Postman or Route Inspection",
    link: "https://www.geeksforgeeks.org/chinese-postman-route-inspection-set-1-introduction/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp42",
    title: "Number of Triangles in a Directed and Undirected Graph",
    link: "https://www.geeksforgeeks.org/number-of-triangles-in-directed-and-undirected-graphs/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp43",
    title:
      "Minimise the cashflow among a given set of friends who have borrowed money from each other",
    link: "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "gp44",
    title: "Two Clique Problem",
    link: "https://www.geeksforgeeks.org/two-clique-problem-check-graph-can-divided-two-cliques/",
    topic: "Graph",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  // ─── Trie ────────────────────────────────────────
  {
    id: "tr1",
    title: "Construct a trie from scratch",
    link: "https://www.geeksforgeeks.org/trie-insert-and-search/",
    topic: "Trie",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "tr2",
    title: "Find shortest unique prefix for every word in a given list",
    link: "https://www.geeksforgeeks.org/find-all-shortest-unique-prefixes-to-represent-each-word-in-a-given-list/",
    topic: "Trie",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "tr3",
    title: "Word Break Problem | (Trie solution)",
    link: "https://www.geeksforgeeks.org/word-break-problem-trie-solution/",
    topic: "Trie",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "tr4",
    title: "Given a sequence of words, print all anagrams together",
    link: "https://practice.geeksforgeeks.org/problems/k-anagrams-1/0",
    topic: "Trie",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "tr5",
    title: "Implement a Phone Directory",
    link: "https://practice.geeksforgeeks.org/problems/phone-directory/0",
    topic: "Trie",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "tr6",
    title: "Print unique rows in a given boolean matrix",
    link: "https://practice.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1",
    topic: "Trie",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  // ─── Dynamic Programming ────────────────────────────────────────
  {
    id: "dp1",
    title: "Coin ChangeProblem",
    link: "https://practice.geeksforgeeks.org/problems/coin-change2448/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp2",
    title: "Knapsack Problem",
    link: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp3",
    title: "Binomial CoefficientProblem",
    link: "https://practice.geeksforgeeks.org/problems/ncr1019/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp4",
    title: "Permutation CoefficientProblem",
    link: "https://www.geeksforgeeks.org/permutation-coefficient/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp5",
    title: "Program for nth Catalan Number",
    link: "https://www.geeksforgeeks.org/program-nth-catalan-number/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp6",
    title: "Matrix Chain Multiplication",
    link: "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp7",
    title: "Edit Distance",
    link: "https://practice.geeksforgeeks.org/problems/edit-distance3702/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp8",
    title: "Subset Sum Problem",
    link: "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp9",
    title: "Friends Pairing Problem",
    link: "https://practice.geeksforgeeks.org/problems/friends-pairing-problem5425/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp10",
    title: "Gold Mine Problem",
    link: "https://www.geeksforgeeks.org/gold-mine-problem/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp11",
    title: "Assembly Line SchedulingProblem",
    link: "https://www.geeksforgeeks.org/assembly-line-scheduling-dp-34/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp12",
    title: "Painting the Fenceproblem",
    link: "https://practice.geeksforgeeks.org/problems/painting-the-fence3727/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp13",
    title: "Maximize The Cut Segments",
    link: "https://practice.geeksforgeeks.org/problems/cutted-segments/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp14",
    title: "Longest Common Subsequence",
    link: "https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp15",
    title: "Longest Repeated Subsequence",
    link: "https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp16",
    title: "Longest Increasing Subsequence",
    link: "https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp17",
    title: "Space Optimized Solution of LCS",
    link: "https://www.geeksforgeeks.org/space-optimized-solution-lcs/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp18",
    title: "LCS (Longest Common Subsequence) of three strings",
    link: "https://practice.geeksforgeeks.org/problems/lcs-of-three-strings/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp19",
    title: "Maximum Sum Increasing Subsequence",
    link: "https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp20",
    title: "Count all subsequences having product less than K",
    link: "https://www.geeksforgeeks.org/count-subsequences-product-less-k/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp21",
    title: "Longest subsequence such that difference between adjacent is one",
    link: "https://practice.geeksforgeeks.org/problems/longest-subsequence-such-that-difference-between-adjacents-is-one4724/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp22",
    title: "Maximum subsequence sum such that no three are consecutive",
    link: "https://www.geeksforgeeks.org/maximum-subsequence-sum-such-that-no-three-are-consecutive/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp23",
    title: "Egg Dropping Problem",
    link: "https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp24",
    title: "Maximum Length Chain of Pairs",
    link: "https://practice.geeksforgeeks.org/problems/max-length-chain/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp25",
    title: "Maximum size square sub-matrix with all 1s",
    link: "https://practice.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp26",
    title: "Maximum sum of pairs with specific difference",
    link: "https://practice.geeksforgeeks.org/problems/pairs-with-specific-difference/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp27",
    title: "Min Cost PathProblem",
    link: "https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp28",
    title: "Maximum difference of zeros and ones in binary string",
    link: "https://practice.geeksforgeeks.org/problems/maximum-difference-of-zeros-and-ones-in-binary-string4111/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp29",
    title: "Minimum number of jumps to reach end",
    link: "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp30",
    title: "Minimum cost to fill given weight in a bag",
    link: "https://practice.geeksforgeeks.org/problems/minimum-cost-to-fill-given-weight-in-a-bag1956/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp31",
    title: "Minimum removals from array to make max –min <= K",
    link: "https://www.geeksforgeeks.org/minimum-removals-array-make-max-min-k/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp32",
    title: "Longest Common Substring",
    link: "https://practice.geeksforgeeks.org/problems/longest-common-substring/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp33",
    title: "Count number of ways to reacha given score in a game",
    link: "https://practice.geeksforgeeks.org/problems/reach-a-given-score/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp34",
    title: "Count Balanced Binary Trees of Height h",
    link: "https://practice.geeksforgeeks.org/problems/bbt-counter/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp35",
    title: "LargestSum Contiguous Subarray",
    link: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "dp36",
    title: "Smallest sum contiguous subarray",
    link: "https://www.geeksforgeeks.org/smallest-sum-contiguous-subarray/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp37",
    title: "Unbounded Knapsack (Repetition of items allowed)",
    link: "https://practice.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp38",
    title: "Word Break Problem",
    link: "https://practice.geeksforgeeks.org/problems/word-break/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp39",
    title: "Largest Independent Set Problem",
    link: "https://www.geeksforgeeks.org/largest-independent-set-problem-dp-26/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp40",
    title: "Partition problem",
    link: "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp41",
    title: "Longest Palindromic Subsequence",
    link: "https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp42",
    title: "Count All Palindromic Subsequence in a given String",
    link: "https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp43",
    title: "Longest Palindromic Substring",
    link: "https://leetcode.com/problems/longest-palindromic-substring/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp44",
    title: "Longest alternating subsequence",
    link: "https://practice.geeksforgeeks.org/problems/longest-alternating-subsequence/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp45",
    title: "Weighted Job Scheduling",
    link: "https://www.geeksforgeeks.org/weighted-job-scheduling/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp46",
    title: "Coin game winner where every player has three choices",
    link: "https://www.geeksforgeeks.org/coin-game-winner-every-player-three-choices/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp47",
    title:
      "Count Derangements (Permutation such that no element appears in its original position)",
    link: "https://www.geeksforgeeks.org/count-derangements-permutation-such-that-no-element-appears-in-its-original-position/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "dp48",
    title: "Maximum profit by buying and selling a share at most twice",
    link: "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "dp49",
    title: "Optimal Strategy for a Game",
    link: "https://practice.geeksforgeeks.org/problems/optimal-strategy-for-a-game/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp50",
    title: "Optimal Binary Search Tree",
    link: "https://www.geeksforgeeks.org/optimal-binary-search-tree-dp-24/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp51",
    title: "Palindrome PartitioningProblem",
    link: "https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp52",
    title: "Word Wrap Problem",
    link: "https://practice.geeksforgeeks.org/problems/word-wrap/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp53",
    title: "Mobile Numeric Keypad Problem",
    link: "https://practice.geeksforgeeks.org/problems/mobile-numeric-keypad5456/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "dp54",
    title: "Boolean Parenthesization Problem",
    link: "https://practice.geeksforgeeks.org/problems/boolean-parenthesization/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp55",
    title: "Largest rectangular sub-matrix whose sum is 0",
    link: "https://www.geeksforgeeks.org/largest-rectangular-sub-matrix-whose-sum-0/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp56",
    title:
      "Largest area rectangular sub-matrix with equal number of 1’s and 0’s",
    link: "https://www.geeksforgeeks.org/largest-area-rectangular-sub-matrix-equal-number-1s-0s/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: true,
  },
  {
    id: "dp57",
    title: "Maximum sum rectangle in a 2D matrix",
    link: "https://practice.geeksforgeeks.org/problems/maximum-sum-rectangle/0",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp58",
    title: "Maximum profit by buying and selling a share at most k times",
    link: "https://practice.geeksforgeeks.org/problems/maximum-profit4657/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp59",
    title: "Find if a string is interleaved of two other strings",
    link: "https://practice.geeksforgeeks.org/problems/interleaved-strings/1",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "dp60",
    title: "Maximum Length of Pair Chain",
    link: "https://leetcode.com/problems/maximum-length-of-pair-chain/",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  // ─── Bit Manipulation ────────────────────────────────────────
  {
    id: "bm1",
    title: "Count set bits in an integer",
    link: "https://practice.geeksforgeeks.org/problems/set-bits0143/1",
    topic: "Bit Manipulation",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bm2",
    title:
      "Find the two non-repeating elements in an array of repeating elements",
    link: "https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1",
    topic: "Bit Manipulation",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bm3",
    title: "Count number of bits to be flipped to convert A to B",
    link: "https://practice.geeksforgeeks.org/problems/bit-difference/0",
    topic: "Bit Manipulation",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bm4",
    title: "Count total set bits in all numbers from 1 to n",
    link: "https://practice.geeksforgeeks.org/problems/count-total-set-bits/0",
    topic: "Bit Manipulation",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bm5",
    title: "Program to find whether a no is power of two",
    link: "https://practice.geeksforgeeks.org/problems/power-of-2/0",
    topic: "Bit Manipulation",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bm6",
    title: "Find position of the only set bit",
    link: "https://practice.geeksforgeeks.org/problems/find-position-of-set-bit3706/1",
    topic: "Bit Manipulation",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bm7",
    title: "Copy set bits in a range",
    link: "https://www.geeksforgeeks.org/copy-set-bits-in-a-range/",
    topic: "Bit Manipulation",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bm8",
    title:
      "Divide two integers without using multiplication, division and mod operator",
    link: "https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/",
    topic: "Bit Manipulation",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bm9",
    title: "Calculate square of a number without using *, / and pow()",
    link: "https://www.geeksforgeeks.org/calculate-square-of-a-number-without-using-and-pow/",
    topic: "Bit Manipulation",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
  {
    id: "bm10",
    title: "Power Set",
    link: "https://practice.geeksforgeeks.org/problems/power-set4302/1",
    topic: "Bit Manipulation",
    difficulty: "Medium",
    notes: "",
    solved: false,
    important: false,
  },
];
/* ── SOUND EFFECTS ─────────────────────────────────────────────
   Small synthesized sound effects via the Web Audio API — no
   external audio files to fetch/cache, so it works offline in the
   installed PWA just like everything else here. Two effects:
     - playSolveSound(): a short cheerful "ding" when a question
       is marked solved.
     - playStreakSound(): a fire "whoosh" when solving extends the
       current day-streak (i.e. this is the first solve of a new
       streak day). Built from filtered noise with a rising sweep
       plus a low thump, aiming for a quick ignition/whoosh feel.
   Muted entirely if the user turns off sound via the header toggle
   (persisted in localStorage); state also read at call time. */
const SOUND_PREF_KEY = "sfxEnabled";
let sfxCtx = null;

function isSoundEnabled() {
  return localStorage.getItem(SOUND_PREF_KEY) !== "off";
}

function getAudioCtx() {
  if (!sfxCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    sfxCtx = new Ctx();
  }
  if (sfxCtx.state === "suspended") sfxCtx.resume();
  return sfxCtx;
}

function playSolveSound() {
  if (!isSoundEnabled()) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.value = 0.22;
  master.connect(ctx.destination);

  // Two quick ascending notes — a friendly "ding-ding"
  [880, 1320].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const start = now + i * 0.09;
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, start);
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(1, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.28);
    osc.connect(gain);
    gain.connect(master);
    osc.start(start);
    osc.stop(start + 0.3);
  });
}

function playStreakSound() {
  if (!isSoundEnabled()) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const duration = 0.65;

  const master = ctx.createGain();
  master.gain.value = 0.3;
  master.connect(ctx.destination);

  // Filtered white-noise burst with a rising-then-falling bandpass
  // sweep -> the "whoosh" body of the fire sound.
  const bufferSize = Math.floor(ctx.sampleRate * duration);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.Q.value = 0.9;
  filter.frequency.setValueAtTime(300, now);
  filter.frequency.exponentialRampToValueAtTime(2600, now + duration * 0.45);
  filter.frequency.exponentialRampToValueAtTime(500, now + duration);

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.0001, now);
  noiseGain.gain.exponentialRampToValueAtTime(1, now + 0.08);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(master);

  // Low sine "thump" underneath for the ignition punch
  const thump = ctx.createOscillator();
  const thumpGain = ctx.createGain();
  thump.type = "sine";
  thump.frequency.setValueAtTime(160, now);
  thump.frequency.exponentialRampToValueAtTime(60, now + 0.3);
  thumpGain.gain.setValueAtTime(0.9, now);
  thumpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
  thump.connect(thumpGain);
  thumpGain.connect(master);

  noise.start(now);
  noise.stop(now + duration);
  thump.start(now);
  thump.stop(now + 0.35);
}

function initSoundToggle() {
  const btn = document.getElementById("sound-toggle-btn");
  const iconOn = document.getElementById("sound-icon-on");
  const iconOff = document.getElementById("sound-icon-off");
  if (!btn) return;

  function reflect() {
    const on = isSoundEnabled();
    btn.setAttribute("aria-pressed", String(on));
    btn.title = on
      ? "Sound effects on (click to mute)"
      : "Sound effects muted (click to unmute)";
    iconOn && iconOn.classList.toggle("hidden", !on);
    iconOff && iconOff.classList.toggle("hidden", on);
  }
  reflect();

  btn.addEventListener("click", () => {
    localStorage.setItem(SOUND_PREF_KEY, isSoundEnabled() ? "off" : "on");
    reflect();
    if (isSoundEnabled()) playSolveSound(); // quick audible confirmation it's back on
  });
}
document.addEventListener("DOMContentLoaded", initSoundToggle);

/* ── CONFETTI / PARTY POPPER ANIMATION ────────────────────────
   A small self-contained canvas particle system — no dependency.
   fireConfettiBurst() radiates particles outward from a point
   (used for a single solved question). fireConfettiShower() rains
   particles down across the whole width, layered with a couple of
   extra bursts, for the bigger streak-extended celebration.
   Respects prefers-reduced-motion by skipping the animation.

   Perf notes (this is what makes it smooth rather than janky):
   - Physics runs on a delta-time multiplier (normalized against a
     60fps baseline) instead of fixed per-frame increments, so the
     motion stays visually consistent even if the browser can't
     hold a steady frame rate — no per-frame reallocation, no
     .filter() building a brand-new array every tick (that was
     generating a lot of garbage-collector pressure), and a hard
     cap on the total live particle count so rapid repeated clicks
     can't make the workload balloon. */
const confettiCanvas = document.getElementById("confetti-canvas");
const confettiCtx = confettiCanvas
  ? confettiCanvas.getContext("2d", { alpha: true })
  : null;
let confettiParticles = [];
let confettiRunning = false;
let confettiLastTime = 0;
let confettiW = window.innerWidth;
let confettiH = window.innerHeight;
let confettiDPR = 1;
const CONFETTI_MAX_PARTICLES = 260;

const CONFETTI_COLORS = [
  "#6c63ff",
  "#ff6b6b",
  "#ffd166",
  "#06d6a0",
  "#4cc9f0",
  "#f72585",
];

function resizeConfettiCanvas() {
  if (!confettiCanvas || !confettiCtx) return;
  confettiW = window.innerWidth;
  confettiH = window.innerHeight;
  confettiDPR = Math.min(window.devicePixelRatio || 1, 2); // cap DPR: sharp enough, without doubling paint cost on 3x screens
  confettiCanvas.width = Math.round(confettiW * confettiDPR);
  confettiCanvas.height = Math.round(confettiH * confettiDPR);
  confettiCanvas.style.width = confettiW + "px";
  confettiCanvas.style.height = confettiH + "px";
}
resizeConfettiCanvas();
window.addEventListener("resize", resizeConfettiCanvas);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function confettiTick(now) {
  if (!confettiCtx) return;
  const dt = confettiLastTime ? Math.min(now - confettiLastTime, 48) : 16.7; // clamp so a tab-switch stutter doesn't teleport particles
  confettiLastTime = now;
  const step = dt / 16.7; // normalized to "frames at 60fps" so existing speed/gravity tuning still reads the same

  // Reuse the cached viewport size from the last resize event instead of
  // reading window.innerWidth/innerHeight here — those force a synchronous
  // layout flush whenever anything else on the page has pending layout
  // changes, which is exactly what was making the shower stutter for its
  // whole fall (not just the first frame) whenever a re-render landed
  // mid-animation.
  const w = confettiW;
  const h = confettiH;
  const dpr = confettiDPR;

  // Clear in physical-pixel/identity space — the loop below sets its own
  // per-particle transform, so this stays a plain full-canvas clear.
  confettiCtx.setTransform(1, 0, 0, 1, 0, 0);
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  let writeIndex = 0;
  for (let i = 0; i < confettiParticles.length; i++) {
    const p = confettiParticles[i];
    p.x += p.vx * step;
    p.y += p.vy * step;
    p.vy += p.gravity * step;
    p.vx *= Math.pow(p.drag, step);
    p.rotation += p.rotSpeed * step;
    p.life += step;

    const alive = p.life < p.maxLife && p.y < h + 60;
    if (!alive) continue; // drop it by simply not copying it forward — no splice/filter needed

    const alpha = Math.max(0, 1 - p.life / p.maxLife);
    confettiCtx.globalAlpha = alpha;
    confettiCtx.fillStyle = p.color;

    // One setTransform call per particle instead of save()+translate()+
    // rotate()+restore() — the save/restore pair has to snapshot and pop
    // the entire canvas state stack, which is real, measurable overhead
    // once you're doing it 100+ times a frame on a Retina-size canvas.
    // Circles are rotation-invariant, so they skip the trig and rotation
    // terms entirely and just translate+scale.
    if (p.shape === "circle") {
      confettiCtx.setTransform(dpr, 0, 0, dpr, p.x * dpr, p.y * dpr);
      confettiCtx.beginPath();
      confettiCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      confettiCtx.fill();
    } else {
      const cos = Math.cos(p.rotation);
      const sin = Math.sin(p.rotation);
      confettiCtx.setTransform(
        cos * dpr,
        sin * dpr,
        -sin * dpr,
        cos * dpr,
        p.x * dpr,
        p.y * dpr,
      );
      confettiCtx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    }

    confettiParticles[writeIndex++] = p;
  }
  confettiParticles.length = writeIndex; // truncate in place instead of allocating a new filtered array

  if (confettiParticles.length) {
    requestAnimationFrame(confettiTick);
  } else {
    confettiRunning = false;
    confettiLastTime = 0;
    confettiCtx.setTransform(1, 0, 0, 1, 0, 0);
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

function ensureConfettiLoop() {
  if (!confettiRunning) {
    confettiRunning = true;
    confettiLastTime = 0;
    requestAnimationFrame(confettiTick);
  }
}

function addConfettiParticle(particle) {
  if (confettiParticles.length >= CONFETTI_MAX_PARTICLES) return;
  confettiParticles.push(particle);
}

function fireConfettiBurst(x, y, count = 40, colors = CONFETTI_COLORS) {
  if (!confettiCtx || prefersReducedMotion()) return;
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 3.5 + Math.random() * 6;
    addConfettiParticle({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      size: 6 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.random() < 0.5 ? "rect" : "circle",
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.3,
      life: 0,
      maxLife: 55 + Math.random() * 35,
      gravity: 0.22 + Math.random() * 0.1,
      drag: 0.99,
    });
  }
  ensureConfettiLoop();
}

function fireConfettiShower(count = 90, colors = CONFETTI_COLORS) {
  if (!confettiCtx || prefersReducedMotion()) return;
  const w = confettiW;
  for (let i = 0; i < count; i++) {
    addConfettiParticle({
      x: Math.random() * w,
      y: -20 - Math.random() * 220,
      vx: (Math.random() - 0.5) * 2,
      vy: 2.5 + Math.random() * 3,
      size: 6 + Math.random() * 7,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.random() < 0.5 ? "rect" : "circle",
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.25,
      life: 0,
      maxLife: 220 + Math.random() * 90,
      gravity: 0.05,
      drag: 1,
    });
  }
  // A couple of extra side bursts make the streak moment feel bigger
  fireConfettiBurst(w * 0.2, confettiH * 0.35, 28);
  fireConfettiBurst(w * 0.8, confettiH * 0.35, 28);
}

/* ── STREAK CELEBRATION POPUP ──────────────────────────────────
   A center-screen card that appears whenever a solve extends the
   current day-streak, showing the day count and — on a milestone
   day (every MILESTONE_STEP days) — the matching achievement badge.
   Auto-dismisses after a few seconds, or can be closed manually. */
const streakPopupOverlay = document.getElementById("streak-popup-overlay");
const streakPopupCloseBtn = document.getElementById("streak-popup-close");
let streakPopupTimer = null;

function hideStreakPopup() {
  if (!streakPopupOverlay) return;
  streakPopupOverlay.classList.remove("show");
  clearTimeout(streakPopupTimer);
  streakPopupTimer = setTimeout(() => {
    streakPopupOverlay.classList.add("hidden");
  }, 300); // matches the overlay's fade-out transition duration
}

function showStreakPopup(streakCount) {
  if (!streakPopupOverlay) return;
  clearTimeout(streakPopupTimer);

  const countEl = document.getElementById("streak-popup-count");
  const titleEl = document.getElementById("streak-popup-title");
  const subEl = document.getElementById("streak-popup-sub");
  const badgeWrap = document.getElementById("streak-popup-badge");
  const badgeLabel = document.getElementById("streak-popup-badge-label");

  if (countEl) countEl.textContent = String(streakCount);
  if (titleEl)
    titleEl.textContent = streakCount === 1 ? "Day Streak" : "Day Streak";
  if (subEl) {
    subEl.textContent =
      streakCount === 1
        ? "Streak started — solve again tomorrow to keep it going!"
        : "You're building momentum — keep it up!";
  }

  const isMilestone =
    typeof MILESTONE_STEP !== "undefined" &&
    streakCount > 0 &&
    streakCount % MILESTONE_STEP === 0;
  if (badgeWrap) {
    badgeWrap.classList.toggle("hidden", !isMilestone);
    if (isMilestone && badgeLabel)
      badgeLabel.textContent = `${streakCount}-day streak badge unlocked`;
  }

  streakPopupOverlay.classList.remove("hidden");
  void streakPopupOverlay.offsetWidth; // force reflow so the transition replays every time
  streakPopupOverlay.classList.add("show");

  streakPopupTimer = setTimeout(hideStreakPopup, 4200);
}

streakPopupCloseBtn &&
  streakPopupCloseBtn.addEventListener("click", hideStreakPopup);
streakPopupOverlay &&
  streakPopupOverlay.addEventListener("click", (e) => {
    if (e.target === streakPopupOverlay) hideStreakPopup();
  });

/* ── STATE ─────────────────────────────────────────────────── */
let questions = [];
let filters = {
  search: "",
  topic: "all",
  status: "all",
  diff: "all",
  company: "all",
};

/* ── PERSISTENCE ───────────────────────────────────────────────
   Two layers, so a single blocked API can't wipe your progress:
     1) IndexedDB  — primary. Larger quota, survives longer, and
        is what installed PWAs rely on for durable storage.
     2) localStorage — fallback/mirror, and used to migrate data
        saved by older versions of this app.
   If BOTH are blocked (e.g. private/incognito windows, or the
   page opened directly via file://) we show a banner telling the
   user their progress won't survive a reload, and point them at
   the Export button so they can save a manual backup.
───────────────────────────────────────────────────────────── */
const DB_NAME = "dsa_tracker_db";
const DB_STORE = "kv";
let dbPromise = null;

function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB unavailable"));
      return;
    }
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(DB_STORE)) {
        req.result.createObjectStore(DB_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

function idbGet(key) {
  return openDB().then(
    (db) =>
      new Promise((resolve, reject) => {
        const tx = db.transaction(DB_STORE, "readonly");
        const req = tx.objectStore(DB_STORE).get(key);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      }),
  );
}

function idbSet(key, value) {
  return openDB().then(
    (db) =>
      new Promise((resolve, reject) => {
        const tx = db.transaction(DB_STORE, "readwrite");
        tx.objectStore(DB_STORE).put(value, key);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      }),
  );
}

function showStorageWarning() {
  const banner = document.getElementById("storage-warning");
  if (banner) banner.classList.remove("hidden");
}

async function loadData() {
  let stored = null;

  try {
    stored = await idbGet(STORAGE_KEY);
  } catch {
    /* IndexedDB blocked/unavailable — fall through */
  }

  if (!stored) {
    try {
      const ls = localStorage.getItem(STORAGE_KEY);
      if (ls) {
        stored = JSON.parse(ls);
        idbSet(STORAGE_KEY, stored).catch(() => {}); // migrate forward silently
      }
    } catch {
      /* localStorage blocked too */
    }
  }

  if (Array.isArray(stored) && stored.length) {
    questions = stored;
  } else {
    questions = SEED_QUESTIONS.map((q) => ({ ...q }));
    await saveData();
  }

  // Backfill fields introduced after the initial release, so old saved
  // data (and the seed list) always has them.
  questions.forEach(backfillQuestionFields);
}

function backfillQuestionFields(q) {
  if (q.important === undefined) q.important = false;
  if (q.solvedAt === undefined)
    q.solvedAt = q.solved ? q.solvedAt || null : null;
  if (!Array.isArray(q.company)) q.company = [];
  if (typeof q.timeSpent !== "number" || !Number.isFinite(q.timeSpent))
    q.timeSpent = 0;
  if (
    !Array.isArray(q.revisionsDone) ||
    q.revisionsDone.length !== REVISION_STAGES.length
  ) {
    q.revisionsDone = REVISION_STAGES.map(() => false);
  }
  // A question with no solve date has no revision schedule to run —
  // keep its stages cleared so it doesn't show up as "due".
  if (!q.solved || !q.solvedAt) {
    q.revisionsDone = REVISION_STAGES.map(() => false);
  }
}

async function saveData(opts = {}) {
  let idbOk = false;
  try {
    await idbSet(STORAGE_KEY, questions);
    idbOk = true;
  } catch {
    /* ignore, try the fallback below */
  }

  let lsOk = false;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
    lsOk = true;
  } catch {
    /* ignore */
  }

  if (!idbOk && !lsOk) showStorageWarning();

  // Mirror to the cloud too, same idea as the IndexedDB/localStorage
  // mirroring above — debounced so rapid edits don't spam Firestore.
  // Skipped right after we've just pulled this same data FROM the
  // cloud, so signing in doesn't immediately write it straight back.
  if (!opts.skipCloud) scheduleCloudPush();
}

async function requestPersistentStorage() {
  try {
    if (navigator.storage && navigator.storage.persist) {
      await navigator.storage.persist();
    }
  } catch {
    /* non-fatal */
  }
}

/* ── CLOUD SYNC (optional — Google / GitHub sign-in via Firebase) ──
   Fully opt-in: firebase-config.js ships with placeholder keys, and
   until real ones are filled in, `cloudSyncEnabled` is false, the
   Sync button stays hidden, and none of this runs — the app behaves
   exactly as it did before. Once configured, this mirrors the
   `questions` array to Firestore under users/{uid}, same spirit as
   the IndexedDB/localStorage mirroring above, so progress can follow
   you to another browser/device. IndexedDB/localStorage stay the
   source of truth for offline use; the cloud copy is just another
   mirror kept in sync in the background.
───────────────────────────────────────────────────────────── */
const cloudSyncEnabled =
  typeof FIREBASE_CONFIG !== "undefined" &&
  typeof firebase !== "undefined" &&
  !!FIREBASE_CONFIG.apiKey &&
  FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY";

let cloudUser = null;
let cloudDb = null;
let cloudPushTimer = null;

function seedLooksUntouched() {
  return questions.every(
    (q) =>
      !q.solved &&
      !q.important &&
      !q.timeSpent &&
      (!q.notes || !q.notes.trim()) &&
      (!q.company || q.company.length === 0),
  );
}

function setSyncDot(state) {
  const dot = document.getElementById("sync-dot");
  if (!dot) return;
  dot.classList.remove("is-signed-in", "is-syncing", "is-error");
  if (state) dot.classList.add(state);
}

function setSyncStatusLine(text, isError) {
  const line = document.getElementById("sync-status-line");
  if (!line) return;
  line.textContent = text;
  line.classList.toggle("is-error", !!isError);
}

function renderSyncUI() {
  const signedOut = document.getElementById("sync-signed-out");
  const signedIn = document.getElementById("sync-signed-in");
  const signOutBtn = document.getElementById("sync-signout-btn");
  const syncNowBtn = document.getElementById("sync-now-btn");
  const notConfigured = document.getElementById("sync-not-configured");
  const googleBtn = document.getElementById("sync-google-btn");
  const githubBtn = document.getElementById("sync-github-btn");

  if (!cloudSyncEnabled) {
    signedOut && signedOut.classList.remove("hidden");
    signedIn && signedIn.classList.add("hidden");
    notConfigured && notConfigured.classList.remove("hidden");
    if (googleBtn) googleBtn.disabled = true;
    if (githubBtn) githubBtn.disabled = true;
    return;
  }

  if (cloudUser) {
    signedOut && signedOut.classList.add("hidden");
    signedIn && signedIn.classList.remove("hidden");
    signOutBtn && signOutBtn.classList.remove("hidden");
    syncNowBtn && syncNowBtn.classList.remove("hidden");
    const avatar = document.getElementById("sync-avatar");
    if (avatar) avatar.src = cloudUser.photoURL || "icon-192.png";
    const nameEl = document.getElementById("sync-account-name");
    if (nameEl) nameEl.textContent = cloudUser.displayName || "Signed in";
    const emailEl = document.getElementById("sync-account-email");
    if (emailEl) emailEl.textContent = cloudUser.email || "";
    setSyncDot("is-signed-in");
  } else {
    signedOut && signedOut.classList.remove("hidden");
    signedIn && signedIn.classList.add("hidden");
    signOutBtn && signOutBtn.classList.add("hidden");
    syncNowBtn && syncNowBtn.classList.add("hidden");
    setSyncDot(null);
  }
}

async function pullFromCloudOnSignIn(user) {
  try {
    setSyncDot("is-syncing");
    const snap = await cloudDb.collection("users").doc(user.uid).get();
    if (snap.exists) {
      const cloud = snap.data();
      if (Array.isArray(cloud.questions) && cloud.questions.length) {
        const localHasProgress = !seedLooksUntouched();
        let useCloud = true;
        if (localHasProgress) {
          useCloud = confirm(
            "This account has a cloud backup from a previous sync.\n\n" +
              "Load it and replace the progress on THIS device? " +
              "Choose Cancel to keep this device's data instead " +
              "(it will overwrite the cloud backup).",
          );
        }
        if (useCloud) {
          questions = cloud.questions;
          await saveData({ skipCloud: true });
          renderAll();
        } else {
          await pushToCloud();
        }
      } else {
        await pushToCloud();
      }
    } else {
      await pushToCloud();
    }
    setSyncStatusLine("Synced just now.");
  } catch (err) {
    console.warn("Cloud pull failed:", err);
    setSyncDot("is-error");
    setSyncStatusLine(
      "Couldn't reach the cloud — will retry on the next change.",
      true,
    );
  }
}

function scheduleCloudPush() {
  if (!cloudSyncEnabled || !cloudUser) return;
  clearTimeout(cloudPushTimer);
  cloudPushTimer = setTimeout(pushToCloud, 1500);
}

async function pushToCloud() {
  if (!cloudSyncEnabled || !cloudUser || !cloudDb) return;
  try {
    setSyncDot("is-syncing");
    await cloudDb.collection("users").doc(cloudUser.uid).set({
      questions,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setSyncDot("is-signed-in");
    setSyncStatusLine("Synced just now.");
  } catch (err) {
    console.warn("Cloud push failed:", err);
    setSyncDot("is-error");
    setSyncStatusLine(
      "Sync failed — check your connection and try again.",
      true,
    );
  }
}

function signInWithGoogle() {
  firebase
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .catch((err) => alert("Sign-in failed: " + err.message));
}

function signInWithGithub() {
  firebase
    .auth()
    .signInWithPopup(new firebase.auth.GithubAuthProvider())
    .catch((err) => alert("Sign-in failed: " + err.message));
}

function signOutCloud() {
  firebase.auth().signOut();
}

function initCloudSync() {
  const syncBtn = document.getElementById("sync-btn");
  if (!cloudSyncEnabled) return; // button stays hidden, nothing else to do

  syncBtn && syncBtn.classList.remove("hidden");
  if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
  cloudDb = firebase.firestore();

  firebase.auth().onAuthStateChanged(async (user) => {
    cloudUser = user;
    renderSyncUI();
    if (user) await pullFromCloudOnSignIn(user);
  });

  const overlay = document.getElementById("sync-overlay");
  const openModal = () => {
    renderSyncUI();
    overlay && overlay.classList.remove("hidden");
  };
  const closeModal = () => overlay && overlay.classList.add("hidden");

  syncBtn && syncBtn.addEventListener("click", openModal);
  document.getElementById("sync-close")?.addEventListener("click", closeModal);
  document
    .getElementById("sync-cancel-btn")
    ?.addEventListener("click", closeModal);
  overlay &&
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  document
    .getElementById("sync-google-btn")
    ?.addEventListener("click", signInWithGoogle);
  document
    .getElementById("sync-github-btn")
    ?.addEventListener("click", signInWithGithub);
  document
    .getElementById("sync-signout-btn")
    ?.addEventListener("click", signOutCloud);
  document
    .getElementById("sync-now-btn")
    ?.addEventListener("click", async () => {
      setSyncStatusLine("Syncing…");
      await pushToCloud();
    });
}

/* ── EXPORT / IMPORT (manual backup, works regardless of storage) ── */
function exportData() {
  const blob = new Blob([JSON.stringify(questions, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `dsa-progress-backup-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function importDataFromFile(file) {
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    if (
      !Array.isArray(data) ||
      !data.every((q) => q && typeof q.id === "string")
    ) {
      throw new Error("Unexpected format");
    }
    questions = data;
    questions.forEach(backfillQuestionFields);
    await saveData();
    renderAll();
    alert("Progress imported successfully.");
  } catch {
    alert(
      "Could not import that file — make sure it's a backup exported from this app.",
    );
  }
}

/* ── TIMER TRACK (per-question solving time) ──────────────────
   Only one timer can run at a time. The active timer (question id +
   start timestamp) is persisted so it survives a reload; the actual
   solved seconds are only folded into q.timeSpent when the timer is
   stopped (or when switching to a different question's timer).
───────────────────────────────────────────────────────────── */
const TIMER_KEY = "lb_dsa_active_timer";
let activeTimer = null; // { id, startedAt } or null
let timerTickId = null;
// Which rows currently have their remark panel expanded — kept in memory only,
// so a re-render (e.g. toggling a different question) doesn't collapse it.
let expandedRemarkIds = new Set();

function loadActiveTimer() {
  try {
    activeTimer = JSON.parse(localStorage.getItem(TIMER_KEY) || "null");
  } catch {
    activeTimer = null;
  }
}

function saveActiveTimer() {
  try {
    if (activeTimer)
      localStorage.setItem(TIMER_KEY, JSON.stringify(activeTimer));
    else localStorage.removeItem(TIMER_KEY);
  } catch {
    /* non-fatal */
  }
}

function formatDuration(totalSeconds) {
  const sec = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${String(s).padStart(2, "0")}s`;
  return `${s}s`;
}

// Folds the running elapsed time into q.timeSpent and clears activeTimer,
// without touching the DOM/render — callers decide whether to re-render.
function stopActiveTimerFor(id) {
  if (!activeTimer || activeTimer.id !== id) return;
  const q = questions.find((x) => x.id === id);
  if (q) {
    const elapsed = (Date.now() - activeTimer.startedAt) / 1000;
    q.timeSpent = (q.timeSpent || 0) + elapsed;
  }
  activeTimer = null;
  saveActiveTimer();
  stopTimerTicking();
}

function toggleTimer(id) {
  if (activeTimer && activeTimer.id === id) {
    stopActiveTimerFor(id);
  } else {
    if (activeTimer) stopActiveTimerFor(activeTimer.id); // only one at a time
    activeTimer = { id, startedAt: Date.now() };
    saveActiveTimer();
    startTimerTicking();
  }
  saveData();
  render();
}

function startTimerTicking() {
  stopTimerTicking();
  timerTickId = setInterval(updateActiveTimerDisplay, 1000);
}
function stopTimerTicking() {
  if (timerTickId) clearInterval(timerTickId);
  timerTickId = null;
}
function updateActiveTimerDisplay() {
  if (!activeTimer) return;
  const q = questions.find((x) => x.id === activeTimer.id);
  if (!q) return;
  const el = document.querySelector(
    `.q-timer-elapsed[data-id="${activeTimer.id}"]`,
  );
  if (el) {
    const elapsed =
      (q.timeSpent || 0) + (Date.now() - activeTimer.startedAt) / 1000;
    el.textContent = formatDuration(elapsed);
  }
}

function totalTimePracticed() {
  const base = questions.reduce((sum, q) => sum + (q.timeSpent || 0), 0);
  const live = activeTimer ? (Date.now() - activeTimer.startedAt) / 1000 : 0;
  return base + live;
}

// Resets one question's accumulated time back to 0. Updates the row's DOM
// directly (rather than a full render()) so it doesn't disturb any expanded
// remark panels elsewhere in the list.
function resetTimerFor(id) {
  const q = questions.find((x) => x.id === id);
  if (!q) return;

  if (activeTimer && activeTimer.id === id) {
    activeTimer = null;
    saveActiveTimer();
    stopTimerTicking();
  }
  q.timeSpent = 0;
  saveData();
  renderDashboard();

  const btnEl = document.querySelector(`.q-timer-btn[data-id="${id}"]`);
  if (btnEl) {
    btnEl.classList.remove("running");
    btnEl.textContent = "▶";
    btnEl.title = "Start timer";
  }
  const elEl = document.querySelector(`.q-timer-elapsed[data-id="${id}"]`);
  if (elEl) {
    elEl.classList.remove("live");
    elEl.textContent = formatDuration(0);
  }
}

/* ── HELPERS ───────────────────────────────────────────────── */
function uniqueTopics() {
  return [...new Set(questions.map((q) => q.topic))].sort();
}

function uniqueCompanies() {
  const set = new Set();
  questions.forEach((q) => (q.company || []).forEach((c) => set.add(c)));
  return [...set].sort();
}

function filteredQuestions() {
  return questions.filter((q) => {
    const s = filters.search.toLowerCase();
    if (
      s &&
      !q.title.toLowerCase().includes(s) &&
      !q.topic.toLowerCase().includes(s) &&
      !(q.company || []).some((c) => c.toLowerCase().includes(s))
    )
      return false;
    if (filters.topic !== "all" && q.topic !== filters.topic) return false;
    if (filters.status === "solved" && !q.solved) return false;
    if (filters.status === "unsolved" && q.solved) return false;
    if (filters.status === "important" && !q.important) return false;
    if (filters.diff !== "all" && q.difficulty !== filters.diff) return false;
    if (
      filters.company !== "all" &&
      !(q.company || []).includes(filters.company)
    )
      return false;
    return true;
  });
}

function groupByTopic(qs) {
  return qs.reduce((acc, q) => {
    (acc[q.topic] = acc[q.topic] || []).push(q);
    return acc;
  }, {});
}

function genId() {
  return "q" + Date.now() + Math.random().toString(36).slice(2, 5);
}

/* ── STATS ─────────────────────────────────────────────────── */
function updateStats() {
  const total = questions.length;
  const solved = questions.filter((q) => q.solved).length;
  const pct = total ? Math.round((solved / total) * 100) : 0;

  document.getElementById("solved-count").textContent = solved;
  document.getElementById("total-count").textContent = total;
  document.getElementById("ring-percent").textContent = pct + "%";

  const circ = 2 * Math.PI * 18; // 113.1
  const fill = circ - (pct / 100) * circ;
  document.getElementById("ring-fill").style.strokeDashoffset = fill;
}

/* ── TOPIC FILTER DATALIST ─────────────────────────────────── */
function refreshTopicSelects() {
  const topics = uniqueTopics();

  // Header filter <select>
  const sel = document.getElementById("topic-filter");
  const current = sel.value;
  sel.innerHTML = '<option value="all">All Topics</option>';
  topics.forEach((t) => {
    const o = document.createElement("option");
    o.value = t;
    o.textContent = t;
    sel.appendChild(o);
  });
  if ([...sel.options].some((o) => o.value === current)) sel.value = current;

  // Modal datalist
  const dl = document.getElementById("topic-list");
  dl.innerHTML = "";
  topics.forEach((t) => {
    const o = document.createElement("option");
    o.value = t;
    dl.appendChild(o);
  });

  // Company filter <select> + modal datalist
  const companies = uniqueCompanies();
  const companySel = document.getElementById("company-filter");
  if (companySel) {
    const currentCompany = companySel.value;
    companySel.innerHTML = '<option value="all">All Companies</option>';
    companies.forEach((c) => {
      const o = document.createElement("option");
      o.value = c;
      o.textContent = c;
      companySel.appendChild(o);
    });
    if ([...companySel.options].some((o) => o.value === currentCompany))
      companySel.value = currentCompany;
  }
  const companyDl = document.getElementById("company-list");
  if (companyDl) {
    companyDl.innerHTML = "";
    companies.forEach((c) => {
      const o = document.createElement("option");
      o.value = c;
      companyDl.appendChild(o);
    });
  }

  // Reset-menu topic select
  const resetSel = document.getElementById("reset-topic-select");
  if (resetSel) {
    const currentReset = resetSel.value;
    resetSel.innerHTML = "";
    topics.forEach((t) => {
      const o = document.createElement("option");
      o.value = t;
      o.textContent = t;
      resetSel.appendChild(o);
    });
    if ([...resetSel.options].some((o) => o.value === currentReset))
      resetSel.value = currentReset;
  }
}

/* ── RENDER ────────────────────────────────────────────────── */
function render() {
  const qs = filteredQuestions();
  const groups = groupByTopic(qs);
  const container = document.getElementById("topic-sections");
  const empty = document.getElementById("empty-state");

  container.innerHTML = "";

  if (qs.length === 0) {
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");

  // Stable topic -> color map (same assignment order/palette as the
  // Progress tab's donut+bars) so a topic's color matches everywhere.
  const colorGroups = groupByTopic(questions);
  const topicColors = {};
  Object.keys(colorGroups).forEach((t, idx) => {
    topicColors[t] = TOPIC_PALETTE[idx % TOPIC_PALETTE.length];
  });

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  Object.entries(groups).forEach(([topic, topicQs], i) => {
    const allInTopic = questions.filter((q) => q.topic === topic);
    const solvedCount = allInTopic.filter((q) => q.solved).length;
    const pct = allInTopic.length
      ? Math.round((solvedCount / allInTopic.length) * 100)
      : 0;

    const color = topicColors[topic] || TOPIC_PALETTE[i % TOPIC_PALETTE.length];
    const dark = darkenColor(color, 34);

    const section = document.createElement("div");
    section.className = "topic-section";
    section.dataset.topic = topic;

    section.innerHTML = `
      <div class="topic-header" data-topic="${topic}">
        <span class="topic-title">${topic}</span>
        <span class="topic-badge">${solvedCount} / ${allInTopic.length}</span>
        <span class="topic-chevron">▾</span>
      </div>
      <div class="topic-progress-bar">
        <div class="topic-progress-fill" style="width:${pct}%; background:${dark}"></div>
      </div>
      <div class="topic-table">
        <div class="table-head">
          <span></span>
          <span>Question</span>
          <span>Link</span>
          <span>Difficulty</span>
          <span></span>
          <span></span>
        </div>
        ${topicQs.map((q) => rowHTML(q)).join("")}
      </div>
    `;

    container.appendChild(section);

    // Bar is already the correct color/width the instant it's painted.
    // Shimmer is purely decorative, sweeping across the visible fill.
    if (!reduceMotion && pct > 0) {
      const fillEl = section.querySelector(".topic-progress-fill");
      fillEl.style.animationDelay = `${i * 0.03}s`;
      fillEl.classList.add("bar-shimmer");
      fillEl.addEventListener("animationend", (e) => {
        if (e.animationName === "bar-shimmer-sweep") {
          fillEl.classList.remove("bar-shimmer");
        }
      });
    }
  });

  // Collapse toggle
  container.querySelectorAll(".topic-header").forEach((header) => {
    header.addEventListener("click", () => {
      header.closest(".topic-section").classList.toggle("collapsed");
    });
  });

  // Checkbox
  container.querySelectorAll(".q-check").forEach((box) => {
    box.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = box.dataset.id;
      const q = questions.find((x) => x.id === id);
      if (!q) return;

      const wasSolvedToday = questions.some(
        (x) =>
          x.solved && x.solvedAt && dateKey(x.solvedAt) === dateKey(new Date()),
      );

      q.solved = !q.solved;
      q.solvedAt = q.solved ? new Date().toISOString() : null;
      if (!q.solved) q.revisionsDone = REVISION_STAGES.map(() => false);
      if (q.solved) stopActiveTimerFor(q.id); // auto-stop the clock once solved
      saveData();

      if (q.solved) {
        playSolveSound();
        const rect = box.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;
        // First solve of today extends (or starts) the current streak
        if (!wasSolvedToday) {
          playStreakSound();
          fireConfettiShower();
          const newStreak = computeStreak(new Set(solvedDateKeys()));
          showStreakPopup(newStreak);
        } else {
          fireConfettiBurst(originX, originY);
        }
      }

      // Instant visual feedback on the actual clicked element, plus a
      // one-shot tick animation when marking (not unmarking) a question.
      // This stays synchronous and *before* the heavier re-renders below —
      // forcing the reflow here (while the DOM is still cheap to measure)
      // is what keeps the tick-pop + confetti's first falling frames from
      // stalling behind the big dashboard/achievements/journey rebuilds.
      box.classList.toggle("checked", q.solved);
      const row = box.closest(".question-row");
      row && row.classList.toggle("solved", q.solved);

      if (q.solved) {
        box.classList.remove("tick-pop");
        void box.offsetWidth; // force reflow so the animation restarts on rapid re-clicks
        box.classList.add("tick-pop");
        box.addEventListener(
          "animationend",
          () => {
            box.classList.remove("tick-pop");
            render(); // re-apply filters (e.g. an "Unsolved" filter) after the tick plays
          },
          { once: true },
        );
      } else {
        render();
      }

      // The other views aren't necessarily even visible right now, and
      // rebuilding all four of them (plus the stats pass) synchronously in
      // the same tick as the confetti burst is what made the shower look
      // like it stutters right as it starts falling — this whole block was
      // blocking the main thread long enough to delay the browser's first
      // paint of the falling particles. Pushing it to a macrotask lets the
      // browser paint the checkbox/tick/confetti first, then catch up.
      setTimeout(() => {
        updateStats();
        renderProgressView();
        renderDashboard();
        renderAchievements();
        renderJourneyMap();
        renderRevisionView();
        updateRevisionBadge();
      }, 0);
    });
  });

  // Star / important toggle
  container.querySelectorAll(".q-star-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const q = questions.find((x) => x.id === id);
      if (q) {
        q.important = !q.important;
        saveData();
        renderAll();
      }
    });
  });

  // Delete
  container.querySelectorAll(".q-del-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (confirm("Remove this question?")) {
        if (activeTimer && activeTimer.id === id) {
          activeTimer = null;
          saveActiveTimer();
          stopTimerTicking();
        }
        expandedRemarkIds.delete(id);
        questions = questions.filter((q) => q.id !== id);
        saveData();
        renderAll();
      }
    });
  });

  // Timer start/stop
  container.querySelectorAll(".q-timer-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleTimer(btn.dataset.id);
    });
  });

  // Timer reset
  container.querySelectorAll(".q-timer-reset-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const q = questions.find((x) => x.id === id);
      if (!q) return;
      if (!q.timeSpent && !(activeTimer && activeTimer.id === id)) return; // nothing to reset
      if (confirm("Reset the timer for this question back to 0?")) {
        resetTimerFor(id);
      }
    });
  });

  // Remark: expand/collapse — toggled directly on the existing DOM nodes
  // (no render()) so the CSS grid-template-rows transition actually plays.
  container.querySelectorAll(".q-remark-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const panel = container.querySelector(`.q-remark-panel[data-id="${id}"]`);
      if (!panel) return;
      const nowExpanded = panel.classList.toggle("expanded");
      btn.classList.toggle("active", nowExpanded);
      if (nowExpanded) {
        expandedRemarkIds.add(id);
        const ta = panel.querySelector(".q-remark-input");
        if (ta) setTimeout(() => ta.focus(), 260);
      } else {
        expandedRemarkIds.delete(id);
      }
    });
  });

  // Remark: save as the user types, and keep the collapsed note preview in sync
  container.querySelectorAll(".q-remark-input").forEach((ta) => {
    ta.addEventListener("click", (e) => e.stopPropagation());
    ta.addEventListener("input", () => {
      const q = questions.find((x) => x.id === ta.dataset.id);
      if (q) q.notes = ta.value;
    });
    ta.addEventListener("blur", () => {
      saveData();
      syncNotePreview(ta.dataset.id);
    });
  });

  // Code button -> jump to Compiler
  container.querySelectorAll(".q-code-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const q = questions.find((x) => x.id === id);
      if (q) openInCompiler(q);
    });
  });
}

function rowHTML(q) {
  const checked = q.solved ? "checked" : "";
  const solved = q.solved ? "solved" : "";
  const codeBtn = `<button class="q-code-btn" data-id="${q.id}" title="Open in Compiler">
         <svg viewBox="0 0 14 14" fill="none"><path d="M4.5 3.5L1 7l3.5 3.5M9.5 3.5L13 7l-3.5 3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
         Code
       </button>`;
  const link = q.link
    ? `<a class="q-link-btn" href="${q.link}" target="_blank" rel="noopener">
         <svg viewBox="0 0 12 12" fill="none"><path d="M5 2H2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V8M7 1h4m0 0v4m0-4L5.5 6.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
         Solve
       </a>`
    : `<span class="q-no-link">No link</span>`;

  const companyTags = (q.company || []).length
    ? `<div class="q-company-tags">${q.company.map((c) => `<span class="company-tag">${escapeHTML(c)}</span>`).join("")}</div>`
    : "";

  const isTiming = !!(activeTimer && activeTimer.id === q.id);
  const displaySeconds =
    (q.timeSpent || 0) +
    (isTiming ? (Date.now() - activeTimer.startedAt) / 1000 : 0);
  const timerBlock = `
        <div class="q-timer">
          <button class="q-timer-btn ${isTiming ? "running" : ""}" data-id="${q.id}" title="${isTiming ? "Stop timer" : "Start timer"}">${isTiming ? "⏸" : "▶"}</button>
          <span class="q-timer-elapsed ${isTiming ? "live" : ""}" data-id="${q.id}">${formatDuration(displaySeconds)}</span>
        </div>`;

  const isExpanded = expandedRemarkIds.has(q.id);

  const revInfo = getQuestionRevisionInfo(q);
  const revisionTag =
    revInfo && (revInfo.state === "overdue" || revInfo.state === "today")
      ? `<span class="q-revision-tag is-${revInfo.state}" title="Spaced-repetition revision due">
           🔁 ${revInfo.state === "overdue" ? "Revise (overdue)" : "Revise today"} · Day ${REVISION_STAGES[revInfo.stageIdx]}
         </span>`
      : "";

  return `
    <div class="question-item" data-id="${q.id}">
    <div class="question-row ${solved}" data-id="${q.id}">
      <div class="q-check ${checked}" data-id="${q.id}"></div>
      <div class="q-title-cell">
        <span class="q-title">${escapeHTML(q.title)}</span>
        ${q.notes ? `<span class="q-note">${escapeHTML(q.notes)}</span>` : ""}
        ${companyTags}
        <div class="q-meta-row">
          ${timerBlock}
          <button class="q-timer-reset-btn" data-id="${q.id}" title="Reset timer to 0">↺</button>
          <button class="q-remark-btn ${isExpanded ? "active" : ""}" data-id="${q.id}" title="Add or edit a remark">
            📝 Remark <span class="chevron">▾</span>
          </button>
          ${revisionTag}
        </div>
        <div class="q-remark-panel ${isExpanded ? "expanded" : ""}" data-id="${q.id}">
          <div class="q-remark-inner">
            <textarea class="q-remark-input" data-id="${q.id}" rows="2" placeholder="Add a remark, approach, or pattern…">${escapeHTML(q.notes || "")}</textarea>
          </div>
        </div>
      </div>
      <div class="q-link-cell">${codeBtn}${link}</div>
      <div><span class="diff-badge ${q.difficulty}">${q.difficulty}</span></div>
      <button class="q-star-btn ${q.important ? "starred" : ""}" data-id="${q.id}" title="Mark as important">${q.important ? "★" : "☆"}</button>
      <button class="q-del-btn" data-id="${q.id}" title="Remove question">
        <svg viewBox="0 0 16 16" fill="none"><path d="M3 4h10M6 4V3h4v1M5 4l.5 9h5L11 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
    </div>`;
}

function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Keeps the small collapsed "note" preview line in sync after an inline
// remark edit, without a full re-render (which would collapse open panels).
function syncNotePreview(id) {
  const q = questions.find((x) => x.id === id);
  if (!q) return;
  const cell = document.querySelector(
    `.question-row[data-id="${id}"] .q-title-cell`,
  );
  if (!cell) return;
  let noteEl = cell.querySelector(".q-note");
  if (q.notes) {
    if (!noteEl) {
      noteEl = document.createElement("span");
      noteEl.className = "q-note";
      cell.querySelector(".q-title").after(noteEl);
    }
    noteEl.textContent = q.notes;
  } else if (noteEl) {
    noteEl.remove();
  }
}

function renderAll() {
  refreshTopicSelects();
  updateStats();
  render();
  renderProgressView();
  renderDashboard();
  renderAchievements();
  renderJourneyMap();
  renderCalendarView();
  renderRevisionView();
  updateRevisionBadge();
}

/* ── DASHBOARD (streak, monthly activity, goals, etc.) ──────── */
const DAILY_GOAL_KEY = "lb_dsa_daily_goal";
const DEFAULT_DAILY_GOAL = 5;

function getDailyGoal() {
  const v = parseInt(localStorage.getItem(DAILY_GOAL_KEY), 10);
  return Number.isFinite(v) && v > 0 ? v : DEFAULT_DAILY_GOAL;
}
function setDailyGoal(n) {
  localStorage.setItem(DAILY_GOAL_KEY, String(n));
}

// Local YYYY-MM-DD key, so streaks line up with the user's own calendar day
// rather than UTC (which would flip the "day" mid-evening for most users).
function dateKey(d) {
  const dt = new Date(d);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function solvedDateKeys() {
  return questions
    .filter((q) => q.solved && q.solvedAt)
    .map((q) => dateKey(q.solvedAt));
}

/* ── REVISION SCHEDULER (spaced repetition: Day 1, 3, 7, 15, 30) ──
   Every solved question gets a fixed revision schedule anchored to
   its solvedAt date — cards come due 1/3/7/15/30 days after you
   first solved it, same idea as most DSA sheets' revision trackers.
   `q.revisionsDone` is a 5-length boolean array lined up with
   REVISION_STAGES; each entry is marked true independently when you
   revise that stage, regardless of whether earlier stages were done
   on time. Unsolving a question (or resetting progress) clears the
   whole schedule — see backfillQuestionFields/resetProgressFor.
───────────────────────────────────────────────────────────── */
const REVISION_STAGES = [1, 3, 7, 15, 30];
let revisionFilterMode = "pending"; // "pending" | "upcoming" | "all"

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

// Returns the next pending revision stage for a solved question, or
// null if it's not solved / has no schedule / every stage is done.
// { stageIdx, dueDate, state: "overdue" | "today" | "upcoming" }
function getQuestionRevisionInfo(q) {
  if (!q.solved || !q.solvedAt || !Array.isArray(q.revisionsDone)) return null;
  const todayKey = dateKey(new Date());
  for (let i = 0; i < REVISION_STAGES.length; i++) {
    if (q.revisionsDone[i]) continue;
    const dueDate = addDays(q.solvedAt, REVISION_STAGES[i]);
    const dueKey = dateKey(dueDate);
    const state =
      dueKey < todayKey
        ? "overdue"
        : dueKey === todayKey
          ? "today"
          : "upcoming";
    return { stageIdx: i, dueDate, dueKey, state };
  }
  return { allDone: true };
}

function markRevisionStageDone(id, stageIdx) {
  const q = questions.find((x) => x.id === id);
  if (!q || !Array.isArray(q.revisionsDone)) return;
  q.revisionsDone[stageIdx] = true;
  saveData();
  renderRevisionView();
  updateRevisionBadge();
  render(); // refresh the inline tag on the Problems row too
}

function revisionDueLabel(info) {
  if (info.state === "overdue") {
    const daysLate = Math.round(
      (new Date(dateKey(new Date())) - new Date(info.dueKey)) / 86400000,
    );
    return `Overdue by ${daysLate} day${daysLate === 1 ? "" : "s"}`;
  }
  if (info.state === "today") return "Due today";
  const daysLeft = Math.round(
    (new Date(info.dueKey) - new Date(dateKey(new Date()))) / 86400000,
  );
  return `In ${daysLeft} day${daysLeft === 1 ? "" : "s"}`;
}

function updateRevisionBadge() {
  const badge = document.getElementById("revision-tab-badge");
  if (!badge) return;
  const count = questions.reduce((n, q) => {
    const info = getQuestionRevisionInfo(q);
    return info && (info.state === "overdue" || info.state === "today")
      ? n + 1
      : n;
  }, 0);
  badge.textContent = String(count);
  badge.classList.toggle("hidden", count === 0);
}

function revisionCardHTML(q, info) {
  const dueText =
    info.state === "overdue"
      ? `<span class="revision-stage-pill">Day ${REVISION_STAGES[info.stageIdx]}</span> ${escapeHTML(revisionDueLabel(info))}`
      : info.state === "today"
        ? `<span class="revision-stage-pill">Day ${REVISION_STAGES[info.stageIdx]}</span> Due today`
        : `<span class="revision-stage-pill">Day ${REVISION_STAGES[info.stageIdx]}</span> ${escapeHTML(revisionDueLabel(info))} (${info.dueKey})`;

  const dots = REVISION_STAGES.map((day, i) => {
    let cls = "";
    if (q.revisionsDone[i]) cls = "is-done";
    else if (i === info.stageIdx && info.state === "overdue")
      cls = "is-overdue";
    else if (i === info.stageIdx && info.state === "today") cls = "is-today";
    return `<span class="revision-stage-dot ${cls}" title="Day ${day}"></span>`;
  }).join("");

  return `
    <div class="revision-card is-${info.state}" data-id="${q.id}">
      <div class="revision-card-body">
        <div class="revision-card-title">${escapeHTML(q.title)}</div>
        <div class="revision-card-meta">
          ${dueText}
          <span class="diff-badge ${q.difficulty}">${q.difficulty}</span>
          <span>${escapeHTML(q.topic)}</span>
        </div>
      </div>
      <div class="revision-stage-dots">${dots}</div>
      <div class="revision-card-actions">
        <button class="revision-mark-btn" data-id="${q.id}" data-stage="${info.stageIdx}">
          Mark Revised
        </button>
      </div>
    </div>`;
}

function revisionDoneCardHTML(q) {
  return `
    <div class="revision-card is-done" data-id="${q.id}">
      <div class="revision-card-body">
        <div class="revision-card-title">${escapeHTML(q.title)}</div>
        <div class="revision-card-meta">
          <span class="diff-badge ${q.difficulty}">${q.difficulty}</span>
          <span>${escapeHTML(q.topic)}</span>
          <span>All 5 revisions complete 🎉</span>
        </div>
      </div>
      <div class="revision-stage-dots">
        ${REVISION_STAGES.map((day) => `<span class="revision-stage-dot is-done" title="Day ${day}"></span>`).join("")}
      </div>
    </div>`;
}

function renderRevisionView() {
  const list = document.getElementById("revision-list");
  if (!list) return; // view not in the DOM yet

  const solved = questions.filter((q) => q.solved && q.solvedAt);
  const infos = solved.map((q) => ({ q, info: getQuestionRevisionInfo(q) }));

  const overdue = infos.filter((x) => x.info && x.info.state === "overdue");
  const dueToday = infos.filter((x) => x.info && x.info.state === "today");
  const upcoming = infos.filter((x) => x.info && x.info.state === "upcoming");
  const fullyDone = infos.filter((x) => x.info && x.info.allDone);

  const setCount = (id, n) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(n);
  };
  setCount("revision-overdue-count", overdue.length);
  setCount("revision-today-count", dueToday.length);
  setCount("revision-upcoming-count", upcoming.length);
  setCount("revision-done-count", fullyDone.length);

  let rows = [];
  if (revisionFilterMode === "pending") {
    rows = [...overdue, ...dueToday].sort((a, b) =>
      a.info.dueKey.localeCompare(b.info.dueKey),
    );
  } else if (revisionFilterMode === "upcoming") {
    rows = upcoming.sort((a, b) => a.info.dueKey.localeCompare(b.info.dueKey));
  } else {
    rows = [...overdue, ...dueToday, ...upcoming].sort((a, b) =>
      a.info.dueKey.localeCompare(b.info.dueKey),
    );
  }

  if (!rows.length && revisionFilterMode !== "all") {
    list.innerHTML = `<p class="revision-empty">${
      revisionFilterMode === "pending"
        ? "Nothing due right now — solve a few more questions and check back."
        : "No upcoming revisions scheduled."
    }</p>`;
  } else if (revisionFilterMode === "all") {
    const html = rows.map(({ q, info }) => revisionCardHTML(q, info)).join("");
    const doneHtml = fullyDone.map(({ q }) => revisionDoneCardHTML(q)).join("");
    list.innerHTML =
      html + doneHtml ||
      `<p class="revision-empty">Solve a question to start its revision schedule.</p>`;
  } else {
    list.innerHTML = rows
      .map(({ q, info }) => revisionCardHTML(q, info))
      .join("");
  }

  list.querySelectorAll(".revision-mark-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      markRevisionStageDone(btn.dataset.id, Number(btn.dataset.stage));
    });
  });
}

const revisionFilterSelect = document.getElementById("revision-filter-select");
revisionFilterSelect &&
  revisionFilterSelect.addEventListener("change", () => {
    revisionFilterMode = revisionFilterSelect.value;
    renderRevisionView();
  });

function computeStreak(dateSet) {
  let cursor = new Date();
  if (!dateSet.has(dateKey(cursor))) {
    // No solves yet today — the streak is still "alive" as long as
    // yesterday was solved; it just hasn't been extended today.
    cursor.setDate(cursor.getDate() - 1);
  }
  let streak = 0;
  while (dateSet.has(dateKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

// Longest streak ever reached (not just the current one) — this is what
// achievement badges unlock against, so a broken streak never takes a
// badge away once earned.
function computeLongestStreak(dateSet) {
  if (!dateSet.size) return 0;
  const ONE_DAY = 86400000;
  const days = [...dateSet]
    .map((k) => {
      const [y, m, d] = k.split("-").map(Number);
      return new Date(y, m - 1, d).getTime();
    })
    .sort((a, b) => a - b);

  let longest = 1;
  let current = 1;
  for (let i = 1; i < days.length; i++) {
    current = days[i] - days[i - 1] === ONE_DAY ? current + 1 : 1;
    longest = Math.max(longest, current);
  }
  return longest;
}

function daysPracticedThisMonth(dateSet) {
  const now = new Date();
  const prefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  return [...dateSet].filter((k) => k.startsWith(prefix)).length;
}

function currentTopicName() {
  const solvedWithDates = questions.filter((q) => q.solved && q.solvedAt);
  if (solvedWithDates.length) {
    solvedWithDates.sort((a, b) => new Date(b.solvedAt) - new Date(a.solvedAt));
    return solvedWithDates[0].topic;
  }
  const stats = topicStats().sort((a, b) => b.total - a.total);
  const inProgress =
    stats.find((s) => s.pct > 0 && s.pct < 100) ||
    stats.find((s) => s.pct < 100);
  return inProgress ? inProgress.topic : stats[0] ? stats[0].topic : "—";
}

function renderDashboard() {
  const dash = document.getElementById("stat-dash");
  if (!dash) return;

  const dateSet = new Set(solvedDateKeys());
  const streak = computeStreak(dateSet);
  const monthDays = daysPracticedThisMonth(dateSet);
  const todayKey = dateKey(new Date());
  const solvedToday = questions.filter(
    (q) => q.solved && q.solvedAt && dateKey(q.solvedAt) === todayKey,
  ).length;
  const totalSolved = questions.filter((q) => q.solved).length;
  const totalQuestions = questions.length;
  const importantPending = questions.filter(
    (q) => q.important && !q.solved,
  ).length;
  const goal = getDailyGoal();
  const goalPct = Math.min(100, Math.round((solvedToday / goal) * 100));

  document.getElementById("stat-streak-value").textContent = streak;
  document.getElementById("stat-month-value").textContent = monthDays;
  document.getElementById("stat-today-value").textContent =
    `${solvedToday} / ${goal}`;
  document.getElementById("stat-total-value").textContent =
    `${totalSolved} / ${totalQuestions}`;
  document.getElementById("stat-topic-value").textContent = currentTopicName();
  document.getElementById("stat-important-value").textContent =
    importantPending;
  const statTimeEl = document.getElementById("stat-time-value");
  if (statTimeEl) statTimeEl.textContent = formatDuration(totalTimePracticed());
  document.getElementById("stat-goal-frac").textContent = `${goalPct}%`;
  document.getElementById("stat-goal-fill").style.width = `${goalPct}%`;
}

const statGoalCard = document.getElementById("stat-goal");
statGoalCard &&
  statGoalCard.addEventListener("click", () => {
    const current = getDailyGoal();
    const input = prompt("Set your daily question goal:", current);
    if (input === null) return;
    const n = parseInt(input, 10);
    if (Number.isFinite(n) && n > 0) {
      setDailyGoal(n);
      renderDashboard();
    }
  });

const statImportantCard = document.getElementById("stat-important");
statImportantCard &&
  statImportantCard.addEventListener("click", () => {
    document.getElementById("status-filter").value = "important";
    filters.status = "important";
    switchView("tracker");
    render();
  });

/* ── ACHIEVEMENTS (streak & solved-count badges) ───────────────
   Badges unlock permanently once a milestone is reached (streak
   badges use the *longest* streak ever hit, not the current one,
   so a broken streak never takes a badge away). The unlock-pop
   animation is only shown the first time a badge is ever seen —
   tracked in localStorage — so re-renders don't replay it.
───────────────────────────────────────────────────────────── */
const ACHIEVEMENTS_SEEN_KEY = "lb_dsa_achievements_seen";
const MILESTONE_STEP = 50;
const SOLVED_TIER_ICONS = ["🥉", "🥈", "🥇", "💎", "👑"];

function loadSeenAchievements() {
  try {
    return new Set(
      JSON.parse(localStorage.getItem(ACHIEVEMENTS_SEEN_KEY) || "[]"),
    );
  } catch {
    return new Set();
  }
}
function saveSeenAchievements(set) {
  try {
    localStorage.setItem(ACHIEVEMENTS_SEEN_KEY, JSON.stringify([...set]));
  } catch {
    /* non-fatal */
  }
}
let seenAchievements = loadSeenAchievements();

// Always shows at least 4 milestones (so the list has upcoming targets to
// aim for even at 0 progress), and keeps extending by one step past
// whatever's already been reached. `cap`, if given, stops it from growing
// past a hard ceiling (used for solved-count, which is bounded by the
// question list size).
function buildMilestones(current, step, cap) {
  const minCount = 4;
  let count = Math.max(minCount, Math.ceil((current + step) / step));
  if (cap) count = Math.min(count, Math.max(1, Math.floor(cap / step)));
  return Array.from({ length: count }, (_, i) => (i + 1) * step);
}

function badgeHTML(kind, milestone, currentValue, icon, unit) {
  const achieved = currentValue >= milestone;
  const id = `${kind}-${milestone}`;
  const isNew = achieved && !seenAchievements.has(id);
  if (achieved) seenAchievements.add(id);

  const pct = Math.max(
    4,
    Math.min(96, Math.round((currentValue / milestone) * 100)),
  );
  return `
    <div class="badge ${achieved ? "unlocked" : "locked"}${isNew ? " badge-unlock-pop" : ""}"
         title="${achieved ? `Unlocked — ${milestone} ${unit}` : `${currentValue}/${milestone} ${unit}`}">
      <span class="badge-icon">${achieved ? icon : "🔒"}</span>
      <span class="badge-label">${milestone}</span>
      ${
        achieved
          ? `<span class="badge-check">✓</span>`
          : `<span class="badge-progress-track"><span class="badge-progress-fill" style="width:${pct}%"></span></span>`
      }
    </div>
  `;
}

function renderAchievements() {
  const streakGrid = document.getElementById("streak-badge-grid");
  const solvedGrid = document.getElementById("solved-badge-grid");
  const summaryEl = document.getElementById("achievements-summary");
  if (!streakGrid || !solvedGrid) return;

  const dateSet = new Set(solvedDateKeys());
  const bestStreak = computeLongestStreak(dateSet);
  const currentStreak = computeStreak(dateSet);
  const totalSolved = questions.filter((q) => q.solved).length;
  const totalQuestions = questions.length;

  const streakMilestones = buildMilestones(bestStreak, MILESTONE_STEP);
  const solvedCap = Math.max(
    MILESTONE_STEP,
    Math.ceil(totalQuestions / MILESTONE_STEP) * MILESTONE_STEP,
  );
  const solvedMilestones = buildMilestones(
    totalSolved,
    MILESTONE_STEP,
    solvedCap,
  );

  streakGrid.innerHTML = streakMilestones
    .map((m) => badgeHTML("streak", m, bestStreak, "🔥", "day streak"))
    .join("");
  solvedGrid.innerHTML = solvedMilestones
    .map((m, i) =>
      badgeHTML(
        "solved",
        m,
        totalSolved,
        SOLVED_TIER_ICONS[i % SOLVED_TIER_ICONS.length],
        "solved",
      ),
    )
    .join("");

  saveSeenAchievements(seenAchievements);

  if (summaryEl) {
    summaryEl.textContent = `Current streak: ${currentStreak} day${currentStreak === 1 ? "" : "s"} · Best streak: ${bestStreak} day${bestStreak === 1 ? "" : "s"}`;
  }
}

/* ── PROGRESS VIEW (topic-wise donut + legend + bars) ───────── */
const TOPIC_PALETTE = [
  "#6c63ff",
  "#ff6b6b",
  "#34d399",
  "#fbbf24",
  "#38bdf8",
  "#f472b6",
  "#a78bfa",
  "#fb923c",
  "#4ade80",
  "#facc15",
  "#22d3ee",
  "#f87171",
  "#c084fc",
  "#2dd4bf",
  "#e879f9",
];

// Shift a hex color toward white (positive percent) or black (negative
// percent). Used to derive "light" / "dark" variants of each topic's base
// color for the progress-view entrance animations, while the resting
// (non-animating) state always falls back to the original palette color.
function shadeColor(hex, percent) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  const target = percent < 0 ? 0 : 255;
  const p = Math.min(Math.abs(percent), 100) / 100;
  const r = num >> 16;
  const g = (num >> 8) & 0x00ff;
  const b = num & 0x0000ff;
  const nr = Math.round((target - r) * p) + r;
  const ng = Math.round((target - g) * p) + g;
  const nb = Math.round((target - b) * p) + b;
  return (
    "#" + (0x1000000 + nr * 0x10000 + ng * 0x100 + nb).toString(16).slice(1)
  );
}
function lightenColor(hex, percent = 55) {
  return shadeColor(hex, Math.abs(percent));
}
function darkenColor(hex, percent = 32) {
  return shadeColor(hex, -Math.abs(percent));
}

function topicStats() {
  const groups = groupByTopic(questions);
  return Object.entries(groups)
    .map(([topic, qs], i) => {
      const total = qs.length;
      const solved = qs.filter((q) => q.solved).length;
      const pct = total ? Math.round((solved / total) * 100) : 0;
      return {
        topic,
        total,
        solved,
        pct,
        color: TOPIC_PALETTE[i % TOPIC_PALETTE.length],
      };
    })
    .sort((a, b) => b.total - a.total);
}

/* ── DSA JOURNEY MAP (topic roadmap, unlockable in learning order) ──
   Purely a motivational overlay on top of the tracker — it doesn't
   actually block solving anything in other topics, it just visualizes
   suggested learning order and gates the *visual* unlock state on
   finishing the topic before it.
───────────────────────────────────────────────────────────── */
const JOURNEY_TOPIC_ORDER = [
  "Arrays",
  "Strings",
  "Searching & Sorting",
  "Matrix",
  "Linked List",
  "Stacks & Queues",
  "Binary Trees",
  "Binary Search Trees",
  "Heap",
  "Trie",
  "Graph",
  "Backtracking",
  "Dynamic Programming",
  "Greedy",
  "Bit Manipulation",
];
const JOURNEY_TOPIC_ICONS = {
  Arrays: "🔢",
  Strings: "🔤",
  "Searching & Sorting": "🔍",
  Matrix: "🧮",
  "Linked List": "🔗",
  "Stacks & Queues": "📚",
  "Binary Trees": "🌳",
  "Binary Search Trees": "🌲",
  Heap: "⛰️",
  Trie: "🔡",
  Graph: "🕸️",
  Backtracking: "🧭",
  "Dynamic Programming": "🧩",
  Greedy: "🪙",
  "Bit Manipulation": "🧬",
};

// Curated topics first (in learning order), then any custom/unknown
// topics the user has added, appended alphabetically at the end.
function journeyOrderedStats() {
  const stats = topicStats();
  const byTopic = new Map(stats.map((s) => [s.topic, s]));
  const ordered = [];

  JOURNEY_TOPIC_ORDER.forEach((t) => {
    if (byTopic.has(t)) {
      ordered.push(byTopic.get(t));
      byTopic.delete(t);
    }
  });
  [...byTopic.values()]
    .sort((a, b) => a.topic.localeCompare(b.topic))
    .forEach((s) => ordered.push(s));

  return ordered;
}

function goToJourneyTopic(topic) {
  const topicSel = document.getElementById("topic-filter");
  filters.topic = topic;
  if (topicSel) topicSel.value = topic;
  syncTickerActiveState();
  switchView("tracker");
  render();
}

function renderJourneyMap() {
  const track = document.getElementById("journey-track");
  if (!track) return;

  const stats = journeyOrderedStats();
  let unlocked = true; // the first station always starts open

  track.innerHTML = stats
    .map((s) => {
      const completed = s.total > 0 && s.solved === s.total;
      const isThisUnlocked = unlocked;
      const status = !isThisUnlocked
        ? "locked"
        : completed
          ? "completed"
          : "current";
      // Once we hit a station that isn't fully cleared, everything after it stays locked.
      unlocked = isThisUnlocked && completed;

      const icon = JOURNEY_TOPIC_ICONS[s.topic] || "📌";
      const title =
        status === "locked"
          ? `Locked — finish the previous topic to unlock ${escapeHTML(s.topic)}`
          : `${escapeHTML(s.topic)}: ${s.solved}/${s.total} solved`;

      return `
        <div class="journey-node ${status}${completed ? " line-active" : ""}"
             data-topic="${escapeHTML(s.topic)}" title="${title}">
          <div class="journey-node-circle">
            ${status === "locked" ? "🔒" : icon}
            ${completed ? `<span class="journey-node-badge">✓</span>` : ""}
          </div>
          <span class="journey-node-label">${escapeHTML(s.topic)}</span>
          <span class="journey-node-count">${s.solved}/${s.total}</span>
        </div>
      `;
    })
    .join("");

  track.querySelectorAll(".journey-node").forEach((node) => {
    if (node.classList.contains("locked")) return;
    node.addEventListener("click", () => goToJourneyTopic(node.dataset.topic));
  });
}

function polarToXY(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

// Donut slice path: outer arc + inner arc back, sized by `fraction` of the
// full circle, starting at `startAngle` (degrees). Colored by that topic's
// own solved% (via CSS custom opacity) so incomplete topics look muted.
function donutSlicePath(cx, cy, rOuter, rInner, startAngle, sweepAngle) {
  const endAngle = startAngle + sweepAngle;
  const large = sweepAngle > 180 ? 1 : 0;
  const p1 = polarToXY(cx, cy, rOuter, startAngle);
  const p2 = polarToXY(cx, cy, rOuter, endAngle);
  const p3 = polarToXY(cx, cy, rInner, endAngle);
  const p4 = polarToXY(cx, cy, rInner, startAngle);
  return [
    `M ${p1.x} ${p1.y}`,
    `A ${rOuter} ${rOuter} 0 ${large} 1 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${rInner} ${rInner} 0 ${large} 0 ${p4.x} ${p4.y}`,
    "Z",
  ].join(" ");
}

function renderProgressView() {
  const donut = document.getElementById("progress-donut");
  const legend = document.getElementById("progress-legend");
  const bars = document.getElementById("progress-bars");
  const pctEl = document.getElementById("progress-donut-pct");
  if (!donut || !legend || !bars) return;

  const stats = topicStats();
  const totalQs = questions.length;
  const totalSolved = questions.filter((q) => q.solved).length;
  pctEl.textContent = totalQs
    ? Math.round((totalSolved / totalQs) * 100) + "%"
    : "0%";

  donut.innerHTML = "";
  legend.innerHTML = "";
  bars.innerHTML = "";

  if (!totalQs) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // "Semi-circle spin" entrance: the donut spins in from an extra rotation
  // proportional to the overall solved fraction (more solved = bigger
  // flourish, capped at a half turn), then settles at its resting -90deg.
  if (!reduceMotion) {
    const overallFrac = totalQs ? totalSolved / totalQs : 0;
    const extraSpin = 180 * overallFrac;
    donut.style.setProperty("--spin-start", `${-90 - extraSpin}deg`);
    donut.style.setProperty("--spin-end", "-90deg");
    donut.classList.remove("donut-spin-in");
    void donut.offsetWidth; // restart animation on repeated view entries
    donut.classList.add("donut-spin-in");
  } else {
    donut.classList.remove("donut-spin-in");
  }

  const cx = 110,
    cy = 110,
    rOuter = 100,
    rInner = 62;
  let angle = 0;

  stats.forEach((s, i) => {
    const sweep = (s.total / totalQs) * 360;
    const solvedFrac = s.total ? s.solved / s.total : 0;
    const svgNS = "http://www.w3.org/2000/svg";

    // Each topic is a group: a faded backdrop wedge sized to its share of
    // all questions, plus a darker "progress" overlay covering only the
    // solved fraction of that wedge — so e.g. 50% solved reads as the
    // first half of the wedge turning into a dark version of its color.
    const group = document.createElementNS(svgNS, "g");
    group.classList.add("donut-slice");

    const title = document.createElementNS(svgNS, "title");
    title.textContent = `${s.topic}: ${s.solved}/${s.total} solved (${s.pct}%)`;
    group.appendChild(title);

    const base = document.createElementNS(svgNS, "path");
    base.setAttribute(
      "d",
      donutSlicePath(cx, cy, rOuter, rInner, angle, Math.max(sweep, 0.01)),
    );
    base.setAttribute("fill", s.color);
    base.setAttribute("fill-opacity", "0.3");
    base.setAttribute("stroke", "var(--bg)");
    base.setAttribute("stroke-width", "2");
    group.appendChild(base);

    if (s.solved > 0) {
      const overlaySweep = Math.max(sweep * solvedFrac, 0.01);
      const overlay = document.createElementNS(svgNS, "path");
      overlay.setAttribute(
        "d",
        donutSlicePath(cx, cy, rOuter, rInner, angle, overlaySweep),
      );
      overlay.setAttribute("fill", darkenColor(s.color, 34));
      overlay.setAttribute("stroke", "var(--bg)");
      overlay.setAttribute("stroke-width", "2");

      // Entrance sweep: the progress overlay washes in from a light tint
      // to its resting dark tint of the same color.
      if (!reduceMotion) {
        overlay.style.setProperty("--slice-light", lightenColor(s.color, 55));
        overlay.style.setProperty("--slice-dark", darkenColor(s.color, 34));
        overlay.style.animationDelay = `${i * 0.05}s`;
        overlay.classList.add("slice-color-in");
        overlay.addEventListener(
          "animationend",
          () => overlay.classList.remove("slice-color-in"),
          { once: true },
        );
      }

      group.appendChild(overlay);
    }

    donut.appendChild(group);

    angle += sweep;

    const legendItem = document.createElement("div");
    legendItem.className = "legend-item";
    legendItem.innerHTML = `
      <span class="legend-swatch" style="background:${s.color}"></span>
      <span class="legend-name">${escapeHTML(s.topic)}</span>
      <span class="legend-stat"><strong>${s.pct}%</strong> · ${s.solved}/${s.total}</span>
    `;
    legend.appendChild(legendItem);

    const dark = darkenColor(s.color, 34);

    const barRow = document.createElement("div");
    barRow.className = "progress-bar-row";
    barRow.innerHTML = `
      <span class="pb-topic">${escapeHTML(s.topic)}</span>
      <span class="progress-bar-track"><span class="progress-bar-fill" style="width:${s.pct}%; background:${dark}"></span></span>
      <span class="pb-count">${s.solved}/${s.total}</span>
    `;
    bars.appendChild(barRow);

    // The bar's color/width are already correct the instant it's painted
    // (no waiting on animation frames to "reveal" the real value). The
    // shimmer is purely decorative — a shine that sweeps left-to-right
    // across the already-visible fill, staggered per row.
    if (!reduceMotion && s.pct > 0) {
      const fillEl = barRow.querySelector(".progress-bar-fill");
      fillEl.style.animationDelay = `${i * 0.05}s`;
      fillEl.classList.add("bar-shimmer");
      fillEl.addEventListener("animationend", (e) => {
        if (e.animationName === "bar-shimmer-sweep") {
          fillEl.classList.remove("bar-shimmer");
        }
      });
    }
  });
}

/* ── CALENDAR VIEW (GitHub-style contribution heatmap) ────────
   Reuses the same solvedAt/dateKey plumbing as the streak stats,
   laid out as a full year of weekly columns instead of a single
   month grid, like GitHub's profile contribution graph.
───────────────────────────────────────────────────────────── */
let calendarViewYear = new Date().getFullYear();
let calendarSelectedKey = null;

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_LABELS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const MONTH_LABELS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function solvedQuestionsByDateKey() {
  const map = {};
  questions.forEach((q) => {
    if (q.solved && q.solvedAt) {
      const k = dateKey(q.solvedAt);
      (map[k] = map[k] || []).push(q);
    }
  });
  return map;
}

// 0–4 heat level, scaled relative to the busiest day in the visible year
// (so a heavy grinder's "1 solve" day and a light user's "1 solve" day
// don't both get painted as maximally dark).
function heatLevel(count, max) {
  if (!count) return 0;
  if (max <= 1) return count > 5 ? 4 : 2;
  const frac = count / max;
  if (frac >= 0.8 || count > 5) return 4;
  if (frac >= 0.55) return 3;
  if (frac >= 0.3) return 2;
  return 1;
}

function renderCalendarDayPanel(key, dayMap) {
  const panel = document.getElementById("calendar-day-panel");
  if (!panel) return;

  if (!key) {
    panel.innerHTML = `<p class="calendar-day-panel-empty">Click a day to see what you solved.</p>`;
    return;
  }

  const items = dayMap[key] || [];
  const [y, m, d] = key.split("-").map(Number);
  const label = `${MONTH_LABELS[m - 1]} ${d}, ${y}`;

  if (!items.length) {
    panel.innerHTML = `
      <p class="calendar-day-panel-title">${label}</p>
      <p class="calendar-day-panel-empty">Nothing solved this day.</p>
    `;
    return;
  }

  panel.innerHTML = `
    <p class="calendar-day-panel-title">${label} — ${items.length} solved</p>
    <div class="calendar-day-list">
      ${items
        .map(
          (q) => `
        <div class="calendar-day-item">
          <span>${escapeHTML(q.title)}</span>
          <span class="calendar-day-item-topic">${escapeHTML(q.topic)}</span>
        </div>`,
        )
        .join("")}
    </div>
  `;
}

let heatTooltipHideTimer = null;
function showHeatTooltip(cellEl, text) {
  const tip = document.getElementById("calendar-heatmap-tooltip");
  if (!tip) return;
  clearTimeout(heatTooltipHideTimer);
  const rect = cellEl.getBoundingClientRect();
  tip.innerHTML = text;
  tip.style.left = `${rect.left + rect.width / 2}px`;
  tip.style.top = `${rect.top}px`;
  tip.classList.add("visible");
}
function hideHeatTooltip() {
  const tip = document.getElementById("calendar-heatmap-tooltip");
  if (!tip) return;
  tip.classList.remove("visible");
}

function renderCalendarView() {
  const grid = document.getElementById("calendar-grid");
  const monthsRow = document.getElementById("calendar-heatmap-months");
  const weekdayCol = document.getElementById("calendar-heatmap-weekdays");
  const yearLabel = document.getElementById("cal-year-label");
  const totalEl = document.getElementById("cal-heatmap-total");
  if (!grid || !yearLabel) return;

  const year = calendarViewYear;
  yearLabel.textContent = String(year);

  const dayMap = solvedQuestionsByDateKey();
  const todayKey = dateKey(new Date());

  // Weekday labels (only Mon/Wed/Fri shown, GitHub-style, to cut clutter).
  if (weekdayCol) {
    weekdayCol.innerHTML = WEEKDAY_LABELS.map((w, i) =>
      i === 1 || i === 3 || i === 5
        ? `<span>${w.slice(0, 3)}</span>`
        : "<span></span>",
    ).join("");
  }

  // Grid spans the Sunday on/before Jan 1 through the Saturday on/after
  // Dec 31, so every week column is a complete 7-day strip.
  const yearStart = new Date(year, 0, 1);
  const yearEnd = new Date(year, 11, 31);
  const gridStart = new Date(yearStart);
  gridStart.setDate(gridStart.getDate() - gridStart.getDay());
  const gridEnd = new Date(yearEnd);
  gridEnd.setDate(gridEnd.getDate() + (6 - gridEnd.getDay()));

  const days = [];
  for (let d = new Date(gridStart); d <= gridEnd; d.setDate(d.getDate() + 1)) {
    const date = new Date(d);
    const key = dateKey(date);
    const inYear = date.getFullYear() === year;
    const count = inYear ? (dayMap[key] || []).length : 0;
    days.push({ date, key, inYear, count });
  }

  const maxCount = days.reduce(
    (m, day) => (day.inYear && day.count > m ? day.count : m),
    0,
  );
  const totalSolvedThisYear = days.reduce(
    (sum, day) => sum + (day.inYear ? day.count : 0),
    0,
  );
  if (totalEl) {
    totalEl.textContent = `${totalSolvedThisYear} solved in ${year}`;
  }

  // Month labels, placed above the week-column where each month begins.
  if (monthsRow) {
    monthsRow.innerHTML = "";
    let lastMonth = -1;
    for (let w = 0; w < days.length; w += 7) {
      const weekStart = days[w].date;
      const span = document.createElement("span");
      if (
        weekStart.getMonth() !== lastMonth &&
        weekStart.getFullYear() === year
      ) {
        span.textContent = MONTH_LABELS_SHORT[weekStart.getMonth()];
        lastMonth = weekStart.getMonth();
      }
      monthsRow.appendChild(span);
    }
  }

  grid.innerHTML = "";
  days.forEach((day) => {
    const cell = document.createElement("div");
    cell.className = "calendar-heat-cell";

    if (!day.inYear) {
      cell.classList.add("out-of-year");
      grid.appendChild(cell);
      return;
    }

    const level = heatLevel(day.count, maxCount);
    cell.dataset.level = String(level);
    cell.dataset.key = day.key;
    if (day.count > 5) cell.classList.add("on-fire");
    if (day.key === todayKey) cell.classList.add("today");
    if (day.key === calendarSelectedKey) cell.classList.add("selected");

    const label = `${MONTH_LABELS[day.date.getMonth()]} ${day.date.getDate()}, ${day.date.getFullYear()}`;
    const tipText = day.count
      ? `<strong>${day.count} solved</strong> · ${label}`
      : `No solves · ${label}`;

    cell.addEventListener("mouseenter", () => showHeatTooltip(cell, tipText));
    cell.addEventListener("mouseleave", hideHeatTooltip);
    cell.addEventListener("click", () => {
      calendarSelectedKey = calendarSelectedKey === day.key ? null : day.key;
      renderCalendarView();
      renderCalendarDayPanel(calendarSelectedKey, dayMap);
    });

    grid.appendChild(cell);
  });

  renderCalendarDayPanel(calendarSelectedKey, dayMap);
}

const calPrevBtn = document.getElementById("cal-prev");
const calNextBtn = document.getElementById("cal-next");
const calTodayBtn = document.getElementById("cal-today-btn");

calPrevBtn &&
  calPrevBtn.addEventListener("click", () => {
    calendarViewYear -= 1;
    calendarSelectedKey = null;
    renderCalendarView();
  });
calNextBtn &&
  calNextBtn.addEventListener("click", () => {
    calendarViewYear += 1;
    calendarSelectedKey = null;
    renderCalendarView();
  });
calTodayBtn &&
  calTodayBtn.addEventListener("click", () => {
    calendarViewYear = new Date().getFullYear();
    calendarSelectedKey = dateKey(new Date());
    renderCalendarView();
  });

/* ── HERO TICKER FILTER ────────────────────────────────────── */
// Maps each ticker label to the exact topic value used in the data
// (some are shortened/pluralized differently for the hero display).
const TICKER_TOPIC_MAP = {
  Arrays: "Arrays",
  Strings: "Strings",
  "Linked List": "Linked List",
  Trees: "Binary Trees",
  Graphs: "Graph",
  DP: "Dynamic Programming",
  Backtracking: "Backtracking",
  Heaps: "Heap",
  Greedy: "Greedy",
};

function syncTickerActiveState() {
  document.querySelectorAll(".hero-ticker span").forEach((s) => {
    const label = s.textContent.trim();
    const mapped = TICKER_TOPIC_MAP[label] || label;
    const isActive = filters.topic === mapped;
    s.classList.toggle("active", isActive);
    s.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function toggleTickerTopic(span) {
  const label = span.textContent.trim();
  const topicSel = document.getElementById("topic-filter");
  const mapped = TICKER_TOPIC_MAP[label] || label;
  const isAlreadyActive = filters.topic === mapped;

  if (isAlreadyActive) {
    // Clicking the active pill again clears the filter.
    filters.topic = "all";
    topicSel.value = "all";
  } else {
    const match = [...topicSel.options].find((o) => o.value === mapped);
    filters.topic = match ? match.value : mapped;
    topicSel.value = filters.topic;
  }

  syncTickerActiveState();
  render();
}

document.querySelectorAll(".hero-ticker span").forEach((span) => {
  span.addEventListener("click", () => toggleTickerTopic(span));
  span.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTickerTopic(span);
    }
  });
});

/* ── FILTER EVENTS ─────────────────────────────────────────── */
document.getElementById("search-input").addEventListener("input", (e) => {
  filters.search = e.target.value;
  render();
});
document.getElementById("topic-filter").addEventListener("change", (e) => {
  filters.topic = e.target.value;
  syncTickerActiveState();
  render();
});
document.getElementById("status-filter").addEventListener("change", (e) => {
  filters.status = e.target.value;
  render();
});
document.getElementById("diff-filter").addEventListener("change", (e) => {
  filters.diff = e.target.value;
  render();
});
const companyFilterEl = document.getElementById("company-filter");
companyFilterEl &&
  companyFilterEl.addEventListener("change", (e) => {
    filters.company = e.target.value;
    render();
  });

/* ── MODAL ─────────────────────────────────────────────────── */
const overlay = document.getElementById("modal-overlay");
const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("modal-close");
const cancelBtn = document.getElementById("modal-cancel");
const saveBtn = document.getElementById("modal-save");
const formErr = document.getElementById("form-error");

function openModal() {
  overlay.classList.remove("hidden");
  document.getElementById("q-title").focus();
  formErr.classList.add("hidden");
}
function closeModal() {
  overlay.classList.add("hidden");
  ["q-title", "q-link", "q-topic", "q-notes", "q-company"].forEach(
    (id) => (document.getElementById(id).value = ""),
  );
  document.getElementById("q-diff").value = "Medium";
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

saveBtn.addEventListener("click", () => {
  const title = document.getElementById("q-title").value.trim();
  const link = document.getElementById("q-link").value.trim();
  const topic = document.getElementById("q-topic").value.trim();
  const diff = document.getElementById("q-diff").value;
  const notes = document.getElementById("q-notes").value.trim();
  const company = document
    .getElementById("q-company")
    .value.split(",")
    .map((c) => c.trim())
    .filter(Boolean);

  if (!title || !topic) {
    formErr.classList.remove("hidden");
    return;
  }

  questions.push({
    id: genId(),
    title,
    link,
    topic,
    difficulty: diff,
    notes,
    solved: false,
    solvedAt: null,
    important: false,
    company,
    timeSpent: 0,
    revisionsDone: [false, false, false, false, false],
  });
  saveData();
  renderAll();
  closeModal();
});

/* ── KEYBOARD SHORTCUTS ────────────────────────────────────── */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
  if (
    e.key === "n" &&
    !e.ctrlKey &&
    !e.metaKey &&
    document.activeElement.tagName !== "INPUT" &&
    document.activeElement.tagName !== "TEXTAREA"
  ) {
    openModal();
  }
});

/* ── HERO EYEBROW TYPEWRITER (cycles messages continuously) ── */
function typewriterCycle(el, messages, opts = {}) {
  if (!el || !messages || !messages.length) return;
  const typeSpeed = opts.typeSpeed ?? 55;
  const eraseSpeed = opts.eraseSpeed ?? 30;
  const holdMs = opts.holdMs ?? 2000; // pause once fully typed
  const restartMs = opts.restartMs ?? 500; // pause once fully erased

  let msgIdx = 0;
  let i = 0;

  function typeStep() {
    const text = messages[msgIdx];
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(typeStep, typeSpeed);
    } else {
      setTimeout(eraseStep, holdMs);
    }
  }

  function eraseStep() {
    const text = messages[msgIdx];
    if (i > 0) {
      i--;
      el.textContent = text.slice(0, i);
      setTimeout(eraseStep, eraseSpeed);
    } else {
      msgIdx = (msgIdx + 1) % messages.length;
      setTimeout(typeStep, restartMs);
    }
  }

  typeStep();
}
typewriterCycle(document.getElementById("hero-eyebrow-text"), [
  "Your DSA Journey",
  "Track • Practice • Master",
  "Solve Consistently",
  "Build Your Streak",
  "Crack Coding Interviews",
  "Master Problem Solving",
  "One Question at a Time",
  "Level Up Every Day",
]);

/* ── THEME PICKER ──────────────────────────────────────────── */
const THEME_KEY = "lb_dsa_theme";

const THEMES = [
  {
    id: "dark",
    name: "Dark",
    swatch: "linear-gradient(135deg, #0d0f14, #6c63ff)",
  },
  {
    id: "light",
    name: "Light",
    swatch: "linear-gradient(135deg, #ffffff, #6c63ff)",
  },
  {
    id: "amoled",
    name: "AMOLED",
    swatch: "linear-gradient(135deg, #000000, #7c5cff)",
  },
  {
    id: "ocean",
    name: "Ocean",
    swatch: "linear-gradient(135deg, #071b2c, #22d3ee)",
  },
  {
    id: "purple",
    name: "Purple",
    swatch: "linear-gradient(135deg, #160f2b, #b794f6)",
  },
  {
    id: "glass",
    name: "Glass",
    swatch: "linear-gradient(135deg, #8b7cff, #ff7eb6)",
  },
];
const THEME_IDS = new Set(THEMES.map((t) => t.id));

function applyTheme(theme) {
  const id = THEME_IDS.has(theme) ? theme : "dark";
  if (id === "dark") {
    delete document.body.dataset.theme; // dark is the default — no attribute needed
  } else {
    document.body.dataset.theme = id;
  }

  const meta = THEMES.find((t) => t.id === id);
  const labelEl = document.getElementById("theme-label");
  const dotEl = document.getElementById("theme-swatch-dot");
  if (labelEl && meta) labelEl.textContent = meta.name;
  if (dotEl && meta) dotEl.style.background = meta.swatch;

  document.querySelectorAll(".theme-menu-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.themeId === id);
  });
}

function buildThemeMenu() {
  const list = document.getElementById("theme-menu-list");
  if (!list) return;
  list.innerHTML = THEMES.map(
    (t) => `
      <button class="theme-menu-item" data-theme-id="${t.id}" role="menuitemradio">
        <span class="theme-menu-item-swatch" style="background:${t.swatch}"></span>
        <span class="theme-menu-item-name">${t.name}</span>
        <svg class="theme-menu-item-check" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>`,
  ).join("");

  list.querySelectorAll(".theme-menu-item").forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.dataset.themeId;
      localStorage.setItem(THEME_KEY, id);
      applyTheme(id);
      closeThemeMenu();
    });
  });
}

function initTheme() {
  buildThemeMenu();
  const saved = localStorage.getItem(THEME_KEY) || "dark";
  applyTheme(saved);
}

const themeMenuWrap = document.getElementById("theme-menu-wrap");
const themeToggleBtn = document.getElementById("theme-toggle");
const themeMenu = document.getElementById("theme-menu");

function closeThemeMenu() {
  if (!themeMenu) return;
  themeMenu.classList.add("hidden");
  themeToggleBtn && themeToggleBtn.setAttribute("aria-expanded", "false");
}

function toggleThemeMenu() {
  if (!themeMenu) return;
  const isHidden = themeMenu.classList.contains("hidden");
  if (isHidden) {
    themeMenu.classList.remove("hidden");
    themeToggleBtn && themeToggleBtn.setAttribute("aria-expanded", "true");
  } else {
    closeThemeMenu();
  }
}

themeToggleBtn &&
  themeToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleThemeMenu();
  });
themeMenu && themeMenu.addEventListener("click", (e) => e.stopPropagation());
document.addEventListener("click", (e) => {
  if (themeMenuWrap && !themeMenuWrap.contains(e.target)) closeThemeMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeThemeMenu();
});

/* ═══════════════════════════════════════════════════════════
   COMPILER
   JavaScript runs in a sandboxed Web Worker (instant, offline).
   Python runs via Pyodide (real CPython compiled to WASM, loads
   on first use from a CDN). Other languages are sent to a
   user-configurable Piston-compatible execution endpoint.
═══════════════════════════════════════════════════════════ */

const COMPILER_CODE_KEY = "lb_dsa_compiler_code_v1";
const COMPILER_LANG_KEY = "lb_dsa_compiler_lang_v1";
const EXEC_ENDPOINT_KEY = "lb_dsa_exec_endpoint_v1";
const EXEC_APIKEY_KEY = "lb_dsa_exec_key_v1";
const TESTCASES_KEY = "lb_dsa_compiler_cases_v1";

const STARTER_CODE = {
  javascript: `// JavaScript — runs instantly, right in your browser.
// Use readLine() to pull a line from the Input panel below.

function solve() {
  console.log("Hello, DSA!");
}

solve();
`,
  python: `# Python — powered by Pyodide (real CPython via WebAssembly).
# The first run downloads the Python runtime, so it may take a
# few seconds. After that it's instant.

def solve():
    print("Hello, DSA!")

solve()
`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    cout << "Hello, DSA!" << endl;
    return 0;
}
`,
  c: `#include <stdio.h>

int main() {
    printf("Hello, DSA!\\n");
    return 0;
}
`,
  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, DSA!");
    }
}
`,
  csharp: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, DSA!");
    }
}
`,
  go: `package main

import "fmt"

func main() {
    fmt.Println("Hello, DSA!")
}
`,
  rust: `fn main() {
    println!("Hello, DSA!");
}
`,
  ruby: `puts "Hello, DSA!"
`,
  typescript: `// TypeScript
function solve(): void {
  console.log("Hello, DSA!");
}

solve();
`,
};

// Languages that run entirely client-side, no external server needed.
const NATIVE_LANGS = new Set(["javascript", "python"]);

const PISTON_LANG_MAP = {
  cpp: "cpp",
  c: "c",
  java: "java",
  csharp: "csharp",
  go: "go",
  rust: "rust",
  ruby: "ruby",
  typescript: "typescript",
};

let compilerCodeStore = {};
function loadCompilerCode() {
  try {
    compilerCodeStore = JSON.parse(
      localStorage.getItem(COMPILER_CODE_KEY) || "{}",
    );
  } catch {
    compilerCodeStore = {};
  }
}
function saveCompilerCode() {
  localStorage.setItem(COMPILER_CODE_KEY, JSON.stringify(compilerCodeStore));
}

const langSelect = document.getElementById("lang-select");
const codeEditor = document.getElementById("code-editor");
const codeHighlightEl = document.getElementById("code-highlight-code");
const runBtn = document.getElementById("run-code-btn");
const resetBtn = document.getElementById("reset-code-btn");
const statusEl = document.getElementById("compiler-status");

/* ── SYNTAX HIGHLIGHTING (lightweight, no dependency) ─────────
   The visible textarea is transparent; this colors a <pre> sitting
   behind it. Keywords/strings/comments/numbers only — good enough
   to read code at a glance without pulling in a full editor lib. */
const KEYWORDS = {
  javascript: [
    "const",
    "let",
    "var",
    "function",
    "return",
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "class",
    "extends",
    "new",
    "this",
    "super",
    "import",
    "export",
    "default",
    "from",
    "as",
    "try",
    "catch",
    "finally",
    "throw",
    "typeof",
    "instanceof",
    "in",
    "of",
    "async",
    "await",
    "yield",
    "static",
    "void",
    "delete",
    "null",
    "undefined",
    "true",
    "false",
  ],
  typescript: [
    "const",
    "let",
    "var",
    "function",
    "return",
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "class",
    "extends",
    "new",
    "this",
    "super",
    "import",
    "export",
    "default",
    "from",
    "as",
    "try",
    "catch",
    "finally",
    "throw",
    "typeof",
    "instanceof",
    "in",
    "of",
    "async",
    "await",
    "yield",
    "static",
    "void",
    "delete",
    "null",
    "undefined",
    "true",
    "false",
    "interface",
    "type",
    "enum",
    "implements",
    "public",
    "private",
    "protected",
    "readonly",
    "namespace",
    "declare",
  ],
  python: [
    "def",
    "return",
    "if",
    "elif",
    "else",
    "for",
    "while",
    "break",
    "continue",
    "pass",
    "class",
    "import",
    "from",
    "as",
    "try",
    "except",
    "finally",
    "raise",
    "with",
    "lambda",
    "yield",
    "global",
    "nonlocal",
    "assert",
    "del",
    "in",
    "is",
    "not",
    "and",
    "or",
    "None",
    "True",
    "False",
    "async",
    "await",
  ],
  cpp: [
    "int",
    "float",
    "double",
    "char",
    "void",
    "long",
    "short",
    "unsigned",
    "signed",
    "const",
    "static",
    "struct",
    "class",
    "public",
    "private",
    "protected",
    "virtual",
    "override",
    "namespace",
    "using",
    "template",
    "typename",
    "new",
    "delete",
    "return",
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "default",
    "sizeof",
    "typedef",
    "enum",
    "union",
    "include",
    "auto",
    "nullptr",
    "true",
    "false",
    "this",
    "friend",
    "inline",
    "volatile",
    "extern",
    "operator",
    "try",
    "catch",
    "throw",
  ],
  c: [
    "int",
    "float",
    "double",
    "char",
    "void",
    "long",
    "short",
    "unsigned",
    "signed",
    "const",
    "static",
    "struct",
    "return",
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "default",
    "sizeof",
    "typedef",
    "enum",
    "union",
    "include",
    "auto",
    "extern",
    "volatile",
  ],
  java: [
    "public",
    "private",
    "protected",
    "class",
    "interface",
    "extends",
    "implements",
    "static",
    "final",
    "void",
    "int",
    "double",
    "float",
    "long",
    "short",
    "char",
    "boolean",
    "byte",
    "new",
    "return",
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "default",
    "try",
    "catch",
    "finally",
    "throw",
    "throws",
    "import",
    "package",
    "this",
    "super",
    "null",
    "true",
    "false",
    "abstract",
    "synchronized",
    "volatile",
    "transient",
    "enum",
    "instanceof",
  ],
  csharp: [
    "public",
    "private",
    "protected",
    "class",
    "interface",
    "extends",
    "implements",
    "static",
    "final",
    "void",
    "int",
    "double",
    "float",
    "long",
    "short",
    "char",
    "bool",
    "string",
    "new",
    "return",
    "if",
    "else",
    "for",
    "foreach",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "default",
    "try",
    "catch",
    "finally",
    "throw",
    "using",
    "namespace",
    "this",
    "base",
    "null",
    "true",
    "false",
    "abstract",
    "readonly",
    "var",
    "async",
    "await",
    "get",
    "set",
    "delegate",
    "event",
  ],
  go: [
    "func",
    "package",
    "import",
    "var",
    "const",
    "type",
    "struct",
    "interface",
    "map",
    "chan",
    "go",
    "defer",
    "select",
    "switch",
    "case",
    "default",
    "if",
    "else",
    "for",
    "range",
    "return",
    "break",
    "continue",
    "fallthrough",
    "nil",
    "true",
    "false",
    "make",
    "new",
  ],
  rust: [
    "fn",
    "let",
    "mut",
    "const",
    "struct",
    "enum",
    "impl",
    "trait",
    "pub",
    "use",
    "mod",
    "match",
    "if",
    "else",
    "for",
    "while",
    "loop",
    "break",
    "continue",
    "return",
    "self",
    "Self",
    "true",
    "false",
    "None",
    "Some",
    "Ok",
    "Err",
    "async",
    "await",
    "move",
    "ref",
    "dyn",
    "where",
    "unsafe",
    "static",
  ],
  ruby: [
    "def",
    "end",
    "if",
    "elsif",
    "else",
    "unless",
    "while",
    "until",
    "for",
    "do",
    "class",
    "module",
    "return",
    "break",
    "next",
    "yield",
    "begin",
    "rescue",
    "ensure",
    "raise",
    "require",
    "require_relative",
    "nil",
    "true",
    "false",
    "self",
    "then",
    "case",
    "when",
  ],
};

function highlightCode(code, lang) {
  const kwList = KEYWORDS[lang] || KEYWORDS.javascript;
  const hashComments = lang === "python" || lang === "ruby";
  const commentSrc = hashComments ? "#.*" : "\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/";
  const stringSrc =
    "\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*'|`(?:\\\\.|[^`\\\\])*`";
  const kwSrc = "\\b(?:" + kwList.join("|") + ")\\b";
  const numberSrc = "\\b\\d+(?:\\.\\d+)?\\b";
  const master = new RegExp(
    `(${commentSrc})|(${stringSrc})|(${kwSrc})|(${numberSrc})`,
    "g",
  );

  let out = "";
  let lastIndex = 0;
  let m;
  while ((m = master.exec(code)) !== null) {
    out += escapeHtml(code.slice(lastIndex, m.index));
    const [full, comment, string, keyword, number] = m;
    if (comment !== undefined)
      out += `<span class="tok-comment">${escapeHtml(full)}</span>`;
    else if (string !== undefined)
      out += `<span class="tok-string">${escapeHtml(full)}</span>`;
    else if (keyword !== undefined)
      out += `<span class="tok-keyword">${escapeHtml(full)}</span>`;
    else out += `<span class="tok-number">${escapeHtml(full)}</span>`;
    lastIndex = m.index + full.length;
  }
  out += escapeHtml(code.slice(lastIndex));
  return out;
}

function updateCodeHighlight() {
  if (!codeHighlightEl || !codeEditor) return;
  codeHighlightEl.innerHTML =
    highlightCode(codeEditor.value, currentLang()) + "\n";
}

codeEditor &&
  codeHighlightEl &&
  codeEditor.addEventListener("scroll", () => {
    const pre = codeHighlightEl.parentElement;
    if (pre) {
      pre.scrollTop = codeEditor.scrollTop;
      pre.scrollLeft = codeEditor.scrollLeft;
    }
    if (acItems.length) positionAutocomplete();
  });

/* ── AUTO-CLOSING BRACKETS/QUOTES + WORD AUTOCOMPLETE ─────────
   Two independent, lightweight editor conveniences (no library):
   1) Typing an opening bracket/quote inserts its partner and
      places the caret between them; typing the closer again just
      steps over it; Backspace between an empty pair removes both.
   2) A small suggestion popup lists matching language keywords
      and identifiers already used elsewhere in the buffer, filtered
      by whatever word is currently being typed. */
const AUTO_PAIRS = {
  "(": ")",
  "[": "]",
  "{": "}",
  '"': '"',
  "'": "'",
  "`": "`",
};
const AUTO_CLOSERS = new Set(Object.values(AUTO_PAIRS));

function syncEditorChange() {
  compilerCodeStore[currentLang()] = codeEditor.value;
  saveCompilerCode();
  updateCodeHighlight();
}

const acPopup = document.getElementById("autocomplete-popup");
let acItems = [];
let acIndex = -1;
let acWordStart = 0;
let acMirror = null;

function hideAutocomplete() {
  acItems = [];
  acIndex = -1;
  if (acPopup) {
    acPopup.classList.add("hidden");
    acPopup.innerHTML = "";
  }
}

function acceptAutocomplete() {
  if (!acItems.length || acIndex < 0 || !codeEditor) return;
  const chosen = acItems[acIndex].text;
  const value = codeEditor.value;
  const end = codeEditor.selectionStart;
  codeEditor.value = value.slice(0, acWordStart) + chosen + value.slice(end);
  const newPos = acWordStart + chosen.length;
  codeEditor.selectionStart = codeEditor.selectionEnd = newPos;
  hideAutocomplete();
  syncEditorChange();
  codeEditor.focus();
}

function getCurrentWordRange() {
  if (codeEditor.selectionStart !== codeEditor.selectionEnd) return null;
  const pos = codeEditor.selectionStart;
  const value = codeEditor.value;
  let start = pos;
  while (start > 0 && /[A-Za-z0-9_]/.test(value[start - 1])) start--;
  return { start, word: value.slice(start, pos) };
}

function buildAutocompleteCandidates(lang) {
  const kwList = KEYWORDS[lang] || KEYWORDS.javascript;
  const bufferWords = codeEditor.value.match(/[A-Za-z_]\w*/g) || [];
  const seen = new Set();
  const out = [];
  kwList.forEach((k) => {
    if (!seen.has(k)) {
      seen.add(k);
      out.push({ text: k, tag: "keyword" });
    }
  });
  bufferWords.forEach((w) => {
    if (w.length < 2 || seen.has(w)) return;
    seen.add(w);
    out.push({ text: w, tag: "word" });
  });
  return out;
}

function renderAutocomplete() {
  if (!acPopup) return;
  acPopup.innerHTML = "";
  acItems.forEach((item, i) => {
    const row = document.createElement("div");
    row.className = "autocomplete-item" + (i === acIndex ? " active" : "");
    const label = document.createElement("span");
    label.textContent = item.text;
    row.appendChild(label);
    const tag = document.createElement("span");
    tag.className = "ac-tag";
    tag.textContent = item.tag === "keyword" ? "kw" : "";
    row.appendChild(tag);
    row.addEventListener("mousedown", (e) => {
      e.preventDefault(); // keep the textarea focused/selection intact
      acIndex = i;
      acceptAutocomplete();
    });
    acPopup.appendChild(row);
  });
  acPopup.classList.remove("hidden");
}

function positionAutocomplete() {
  if (!acPopup || !codeEditor) return;
  const stack = document.getElementById("code-editor-stack");
  if (!stack) return;

  if (!acMirror) {
    acMirror = document.createElement("div");
    acMirror.style.position = "absolute";
    acMirror.style.top = "0";
    acMirror.style.left = "0";
    acMirror.style.visibility = "hidden";
    acMirror.style.whiteSpace = "pre-wrap";
    acMirror.style.wordWrap = "break-word";
    acMirror.style.pointerEvents = "none";
    stack.appendChild(acMirror);
  }

  const cs = getComputedStyle(codeEditor);
  [
    "fontFamily",
    "fontSize",
    "fontWeight",
    "lineHeight",
    "letterSpacing",
    "paddingTop",
    "paddingLeft",
    "paddingRight",
    "paddingBottom",
    "borderLeftWidth",
    "borderTopWidth",
    "boxSizing",
    "tabSize",
  ].forEach((prop) => {
    acMirror.style[prop] = cs[prop];
  });
  acMirror.style.width = codeEditor.clientWidth + "px";

  const caretPos = codeEditor.selectionStart;
  acMirror.textContent = "";
  acMirror.appendChild(
    document.createTextNode(codeEditor.value.slice(0, caretPos)),
  );
  const marker = document.createElement("span");
  marker.textContent = "\u200b";
  acMirror.appendChild(marker);

  const lineHeight = parseFloat(cs.lineHeight) || 18;
  const top = marker.offsetTop - codeEditor.scrollTop + lineHeight;
  let left = marker.offsetLeft - codeEditor.scrollLeft;

  acPopup.style.top = top + "px";
  acPopup.style.left = left + "px";

  requestAnimationFrame(() => {
    const stackRect = stack.getBoundingClientRect();
    const popupRect = acPopup.getBoundingClientRect();
    if (popupRect.right > stackRect.right) {
      left = Math.max(0, left - (popupRect.right - stackRect.right) - 8);
      acPopup.style.left = left + "px";
    }
    if (popupRect.bottom > stackRect.bottom) {
      acPopup.style.top = top - lineHeight - popupRect.height + "px";
    }
  });
}

function maybeShowAutocomplete() {
  const range = getCurrentWordRange();
  if (!range || range.word.length < 2) {
    hideAutocomplete();
    return;
  }
  const candidates = buildAutocompleteCandidates(currentLang());
  const wordLower = range.word.toLowerCase();
  const matches = candidates
    .filter(
      (c) =>
        c.text.toLowerCase().startsWith(wordLower) &&
        c.text.toLowerCase() !== wordLower,
    )
    .sort((a, b) =>
      a.tag === b.tag
        ? a.text.localeCompare(b.text)
        : a.tag === "keyword"
          ? -1
          : 1,
    )
    .slice(0, 8);

  if (!matches.length) {
    hideAutocomplete();
    return;
  }
  acItems = matches;
  acIndex = 0;
  acWordStart = range.start;
  renderAutocomplete();
  positionAutocomplete();
}

codeEditor && codeEditor.addEventListener("click", hideAutocomplete);
codeEditor &&
  codeEditor.addEventListener("blur", () => setTimeout(hideAutocomplete, 120));

/* ── COMPILER PANEL RESIZER: drag to resize editor vs test/output ── */
(function setupPanelResizer() {
  const resizer = document.getElementById("panel-resizer");
  const editorPanel = document.getElementById("editor-panel");
  const panels = document.querySelector(".compiler-panels");
  if (!resizer || !editorPanel || !panels) return;

  const MIN_EDITOR = 320;
  const MIN_IO = 280;
  const STORAGE_KEY = "compilerEditorWidth";

  function clamp(px) {
    const total = panels.getBoundingClientRect().width;
    const resizerW = resizer.getBoundingClientRect().width || 14;
    const maxEditor = Math.max(MIN_EDITOR, total - resizerW - MIN_IO);
    return Math.min(Math.max(px, MIN_EDITOR), maxEditor);
  }

  function applyWidth(px) {
    editorPanel.style.flex = `0 0 ${px}px`;
  }

  // Restore saved width (only meaningful on wide/desktop layouts)
  const saved = parseFloat(localStorage.getItem(STORAGE_KEY));
  if (saved && window.matchMedia("(min-width: 641px)").matches) {
    requestAnimationFrame(() => applyWidth(clamp(saved)));
  }

  let dragging = false;
  let startX = 0;
  let startWidth = 0;

  function onPointerDown(e) {
    if (!window.matchMedia("(min-width: 641px)").matches) return; // resizer hidden on mobile anyway
    dragging = true;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    startWidth = editorPanel.getBoundingClientRect().width;
    resizer.classList.add("dragging");
    document.body.classList.add("resizing-panels");
    e.preventDefault();
  }

  function onPointerMove(e) {
    if (!dragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const next = clamp(startWidth + (x - startX));
    applyWidth(next);
  }

  function onPointerUp() {
    if (!dragging) return;
    dragging = false;
    resizer.classList.remove("dragging");
    document.body.classList.remove("resizing-panels");
    localStorage.setItem(
      STORAGE_KEY,
      String(editorPanel.getBoundingClientRect().width),
    );
  }

  resizer.addEventListener("mousedown", onPointerDown);
  resizer.addEventListener("touchstart", onPointerDown, { passive: false });
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("touchmove", onPointerMove, { passive: false });
  window.addEventListener("mouseup", onPointerUp);
  window.addEventListener("touchend", onPointerUp);

  // Keyboard support for accessibility
  resizer.addEventListener("keydown", (e) => {
    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    e.preventDefault();
    const current = editorPanel.getBoundingClientRect().width;
    const step = e.shiftKey ? 40 : 12;
    const next = clamp(current + (e.key === "ArrowRight" ? step : -step));
    applyWidth(next);
    localStorage.setItem(STORAGE_KEY, String(next));
  });

  window.addEventListener("resize", () => {
    const current = editorPanel.getBoundingClientRect().width;
    if (current) applyWidth(clamp(current));
  });
})();

/* ── TEST CASES: tabbed input/expected-output per language ─── */
const tcTabsEl = document.getElementById("tc-tabs");
const tcAddBtn = document.getElementById("tc-add-btn");
const tcInputEl = document.getElementById("tc-input");
const tcExpectedEl = document.getElementById("tc-expected");
const outputResultsEl = document.getElementById("output-results");
const tcSummaryEl = document.getElementById("tc-summary");

let testCasesStore = {}; // { [lang]: [{id, name, input, expected}] }
let activeCaseIdx = {}; // { [lang]: number }

function loadTestCases() {
  try {
    testCasesStore = JSON.parse(localStorage.getItem(TESTCASES_KEY) || "{}");
  } catch {
    testCasesStore = {};
  }
}
function saveTestCases() {
  localStorage.setItem(TESTCASES_KEY, JSON.stringify(testCasesStore));
}
function makeCaseId() {
  return Math.random().toString(36).slice(2, 9);
}
function getCasesFor(lang) {
  if (!testCasesStore[lang] || !testCasesStore[lang].length) {
    testCasesStore[lang] = [
      { id: makeCaseId(), name: "Case 1", input: "", expected: "" },
    ];
  }
  return testCasesStore[lang];
}
function escapeHtml(s) {
  return (s == null ? "" : String(s)).replace(
    /[&<>"']/g,
    (m) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        m
      ],
  );
}

function renderTabs() {
  const lang = currentLang();
  const cases = getCasesFor(lang);
  if (activeCaseIdx[lang] == null || activeCaseIdx[lang] >= cases.length) {
    activeCaseIdx[lang] = 0;
  }
  tcTabsEl.innerHTML = "";
  cases.forEach((c, i) => {
    const tab = document.createElement("div");
    tab.className = "tc-tab" + (i === activeCaseIdx[lang] ? " active" : "");
    tab.innerHTML =
      `<span class="tc-tab-name" title="Double-click to rename">${escapeHtml(c.name)}</span>` +
      (cases.length > 1
        ? `<button class="tc-tab-close" data-idx="${i}" title="Remove this case">✕</button>`
        : "");
    tab.addEventListener("click", (e) => {
      if (e.target.closest(".tc-tab-close")) return;
      if (e.target.isContentEditable) return;
      saveActiveCaseFields();
      activeCaseIdx[lang] = i;
      renderTabs();
      loadActiveCaseFields();
    });

    const nameEl = tab.querySelector(".tc-tab-name");
    nameEl.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      nameEl.contentEditable = "true";
      nameEl.focus();
      document.execCommand("selectAll", false, null);
    });
    nameEl.addEventListener("blur", () => {
      nameEl.contentEditable = "false";
      const val = nameEl.textContent.trim() || `Case ${i + 1}`;
      c.name = val;
      saveTestCases();
      renderTabs();
    });
    nameEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        nameEl.blur();
      }
    });

    const closeBtn = tab.querySelector(".tc-tab-close");
    closeBtn &&
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (cases.length <= 1) return;
        cases.splice(i, 1);
        if (activeCaseIdx[lang] >= cases.length) {
          activeCaseIdx[lang] = cases.length - 1;
        }
        saveTestCases();
        renderTabs();
        loadActiveCaseFields();
      });

    tcTabsEl.appendChild(tab);
  });
}

function loadActiveCaseFields() {
  const lang = currentLang();
  const cases = getCasesFor(lang);
  const c = cases[activeCaseIdx[lang] || 0];
  tcInputEl.value = c.input || "";
  tcExpectedEl.value = c.expected || "";
}
function saveActiveCaseFields() {
  const lang = currentLang();
  const cases = getCasesFor(lang);
  const c = cases[activeCaseIdx[lang] || 0];
  if (!c) return;
  c.input = tcInputEl.value;
  c.expected = tcExpectedEl.value;
  saveTestCases();
}

tcInputEl && tcInputEl.addEventListener("input", saveActiveCaseFields);
tcExpectedEl && tcExpectedEl.addEventListener("input", saveActiveCaseFields);

tcAddBtn &&
  tcAddBtn.addEventListener("click", () => {
    const lang = currentLang();
    saveActiveCaseFields();
    const cases = getCasesFor(lang);
    cases.push({
      id: makeCaseId(),
      name: `Case ${cases.length + 1}`,
      input: "",
      expected: "",
    });
    activeCaseIdx[lang] = cases.length - 1;
    saveTestCases();
    renderTabs();
    loadActiveCaseFields();
  });

function resetOutputPanel() {
  outputResultsEl.innerHTML =
    '<p class="output-results-empty">Run your code to see output here.</p>';
  tcSummaryEl.textContent = "";
  tcSummaryEl.classList.remove("all-pass");
}

function currentLang() {
  return langSelect.value;
}

function getCodeFor(lang) {
  if (compilerCodeStore[lang] !== undefined) return compilerCodeStore[lang];
  return STARTER_CODE[lang] || "";
}

function loadEditorForLang() {
  const lang = currentLang();
  codeEditor.value = getCodeFor(lang);
  updateCodeHighlight();
  localStorage.setItem(COMPILER_LANG_KEY, lang);
  renderTabs();
  loadActiveCaseFields();
  resetOutputPanel();
  setStatus("");
}

codeEditor &&
  codeEditor.addEventListener("input", () => {
    compilerCodeStore[currentLang()] = codeEditor.value;
    saveCompilerCode();
    updateCodeHighlight();
    maybeShowAutocomplete();
  });

langSelect && langSelect.addEventListener("change", loadEditorForLang);

resetBtn &&
  resetBtn.addEventListener("click", () => {
    const lang = currentLang();
    if (!confirm("Reset code for " + lang + " back to the starter snippet?"))
      return;
    delete compilerCodeStore[lang];
    saveCompilerCode();
    codeEditor.value = STARTER_CODE[lang] || "";
    updateCodeHighlight();
  });

function setStatus(text, kind) {
  statusEl.textContent = text;
  statusEl.classList.remove("ok", "err");
  if (kind) statusEl.classList.add(kind);
}

function setRunning(isRunning) {
  runBtn.disabled = isRunning;
  runBtn.style.opacity = isRunning ? "0.6" : "";
}

/* ── JAVASCRIPT: sandboxed Web Worker ─────────────────────── */
function runJavaScript(code, stdin) {
  return new Promise((resolve) => {
    const workerSrc = `
      const __lines = ${JSON.stringify((stdin || "").split(/\\r?\\n/))};
      let __lineIdx = 0;
      function readLine() {
        if (__lineIdx < __lines.length) return __lines[__lineIdx++];
        return null;
      }
      let __out = [];
      const __fmt = (a) => a.map(x => {
        if (typeof x === 'string') return x;
        try { return JSON.stringify(x); } catch { return String(x); }
      }).join(' ');
      const console = {
        log:   (...a) => __out.push(__fmt(a)),
        error: (...a) => __out.push('Error: ' + __fmt(a)),
        warn:  (...a) => __out.push('Warning: ' + __fmt(a)),
        info:  (...a) => __out.push(__fmt(a)),
      };
      self.onmessage = () => {
        try {
          (function() {
            ${code}
          })();
          self.postMessage({ ok: true, output: __out.join('\\n') });
        } catch (e) {
          self.postMessage({ ok: false, output: __out.join('\\n'), error: (e && e.stack) ? e.stack : String(e) });
        }
      };
    `;
    const blob = new Blob([workerSrc], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);
    const worker = new Worker(url);
    let settled = false;

    const timeout = setTimeout(() => {
      if (settled) return;
      settled = true;
      worker.terminate();
      URL.revokeObjectURL(url);
      resolve({
        ok: false,
        output: "",
        error: "Execution timed out (8s limit) — check for infinite loops.",
      });
    }, 8000);

    worker.onmessage = (e) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      worker.terminate();
      URL.revokeObjectURL(url);
      resolve(e.data);
    };
    worker.onerror = (e) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      worker.terminate();
      URL.revokeObjectURL(url);
      resolve({ ok: false, output: "", error: e.message || "Worker error" });
    };
    worker.postMessage("start");
  });
}

/* ── PYTHON: Pyodide (WebAssembly CPython) ────────────────── */
let pyodidePromise = null;
function loadPyodideRuntime() {
  if (pyodidePromise) return pyodidePromise;
  pyodidePromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
    script.onload = async () => {
      try {
        const pyodide = await self.loadPyodide();
        resolve(pyodide);
      } catch (err) {
        reject(err);
      }
    };
    script.onerror = () =>
      reject(new Error("Could not load the Python runtime from the CDN."));
    document.head.appendChild(script);
  });
  return pyodidePromise;
}

async function runPython(code, stdin) {
  let pyodide;
  try {
    setStatus("Loading Python runtime…");
    pyodide = await loadPyodideRuntime();
  } catch (err) {
    return {
      ok: false,
      output: "",
      error: "Failed to load Python runtime: " + err.message,
    };
  }

  const lines = (stdin || "").split(/\r?\n/);
  let idx = 0;
  let out = "";

  pyodide.setStdout({
    batched: (s) => {
      out += s + "\n";
    },
  });
  pyodide.setStderr({
    batched: (s) => {
      out += s + "\n";
    },
  });
  pyodide.setStdin({
    stdin: () => (idx < lines.length ? lines[idx++] : ""),
  });

  try {
    setStatus("Running…");
    await pyodide.runPythonAsync(code);
    return { ok: true, output: out.replace(/\n$/, "") };
  } catch (err) {
    return { ok: false, output: out.replace(/\n$/, ""), error: String(err) };
  }
}

/* ── OTHER LANGUAGES: user-configured execution endpoint ──── */
async function runViaEndpoint(lang, code, stdin) {
  const endpoint = localStorage.getItem(EXEC_ENDPOINT_KEY) || "";
  if (!endpoint) {
    return {
      ok: false,
      output: "",
      error: `Running ${langSelect.options[langSelect.selectedIndex].text} needs a compiler server.\n\nClick the ⚙ settings icon above to point this at a Piston-compatible execution API (self-hosted, or one you have a key for). JavaScript and Python don't need this — they run right in your browser.`,
    };
  }
  const apiKey = localStorage.getItem(EXEC_APIKEY_KEY) || "";
  const headers = { "Content-Type": "application/json" };
  if (apiKey) headers["X-Auth-Token"] = apiKey;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        language: PISTON_LANG_MAP[lang] || lang,
        version: "*",
        files: [{ content: code }],
        stdin: stdin || "",
      }),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return {
        ok: false,
        output: "",
        error: `Server responded ${res.status}: ${text.slice(0, 300)}`,
      };
    }
    const data = await res.json();
    const run = data.run || data;
    const compile = data.compile;
    let out = "";
    if (compile && compile.stderr) out += compile.stderr + "\n";
    if (run) {
      if (run.stdout) out += run.stdout;
      if (run.stderr) out += (out ? "\n" : "") + run.stderr;
    }
    return { ok: !(run && run.code), output: out.trim() || "(no output)" };
  } catch (err) {
    return {
      ok: false,
      output: "",
      error:
        "Request failed: " +
        err.message +
        "\n\nCheck the endpoint URL in settings, and that it allows requests from the browser (CORS).",
    };
  }
}

/* ── RUN DISPATCH: executes every test case for the current lang ─ */
async function runOne(lang, code, stdin) {
  if (lang === "javascript") return runJavaScript(code, stdin);
  if (lang === "python") return runPython(code, stdin);
  return runViaEndpoint(lang, code, stdin);
}

function normalizeForCompare(s) {
  return (s || "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.replace(/[ \t]+$/, ""))
    .join("\n")
    .trim();
}

function renderRunningPlaceholder(total) {
  outputResultsEl.innerHTML = `<p class="output-results-empty">Running ${total} test case${total === 1 ? "" : "s"}…</p>`;
  tcSummaryEl.textContent = "";
  tcSummaryEl.classList.remove("all-pass");
}

function renderResults(entries, elapsed) {
  outputResultsEl.innerHTML = "";
  let passCount = 0;
  let totalWithExpected = 0;
  let anyError = false;

  entries.forEach(({ name, result, hasExpected, expected }) => {
    if (!result.ok) anyError = true;
    let verdict = null;
    if (hasExpected) {
      totalWithExpected++;
      const pass =
        result.ok &&
        normalizeForCompare(result.output) === normalizeForCompare(expected);
      verdict = pass ? "pass" : "fail";
      if (pass) passCount++;
    }

    const combinedOutput =
      [result.output, result.error].filter(Boolean).join("\n\n") ||
      "(no output)";

    const badge = verdict
      ? `<span class="result-badge ${verdict}">${verdict === "pass" ? "✓ Passed" : "✗ Failed"}</span>`
      : result.ok
        ? `<span class="result-badge neutral">Ran</span>`
        : `<span class="result-badge fail">✗ Error</span>`;

    const card = document.createElement("div");
    card.className =
      "result-card" +
      (verdict ? " result-" + verdict : result.ok ? "" : " result-fail");
    card.innerHTML = `
      <div class="result-head">
        <span class="result-name">${escapeHtml(name)}</span>
        ${badge}
      </div>
      <pre class="result-output${result.ok ? "" : " output-error"}">${escapeHtml(combinedOutput)}</pre>
      ${
        hasExpected
          ? `<div class="result-expected"><span class="result-expected-label">Expected</span><pre>${escapeHtml(expected)}</pre></div>`
          : ""
      }
    `;
    outputResultsEl.appendChild(card);
  });

  if (totalWithExpected > 0) {
    tcSummaryEl.textContent = `${passCount}/${totalWithExpected} passed · ${elapsed}s`;
    tcSummaryEl.classList.toggle("all-pass", passCount === totalWithExpected);
    setStatus(
      passCount === totalWithExpected
        ? "✓ All passed"
        : `✗ ${totalWithExpected - passCount} failed`,
      passCount === totalWithExpected ? "ok" : "err",
    );
  } else {
    tcSummaryEl.textContent = `${elapsed}s`;
    tcSummaryEl.classList.remove("all-pass");
    setStatus(
      anyError ? "✗ Error" : `✓ Finished in ${elapsed}s`,
      anyError ? "err" : "ok",
    );
  }
}

async function executeCode() {
  const lang = currentLang();
  const code = codeEditor.value;
  saveActiveCaseFields();
  const cases = getCasesFor(lang).map((c) => ({ ...c }));

  setRunning(true);
  setStatus("Running…");
  renderRunningPlaceholder(cases.length);

  const startedAt = performance.now();
  const entries = [];
  for (const c of cases) {
    let result;
    try {
      result = await runOne(lang, code, c.input);
    } catch (err) {
      result = {
        ok: false,
        output: "",
        error: "Unexpected error: " + err.message,
      };
    }
    entries.push({
      name: c.name,
      result,
      hasExpected: !!(c.expected && c.expected.trim()),
      expected: c.expected || "",
    });
  }
  const elapsed = ((performance.now() - startedAt) / 1000).toFixed(2);
  setRunning(false);
  renderResults(entries, elapsed);
}

runBtn && runBtn.addEventListener("click", executeCode);

codeEditor &&
  codeEditor.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      executeCode();
      return;
    }

    // Autocomplete popup takes priority over normal Tab/Enter/Arrow behavior
    if (acItems.length) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        acIndex = (acIndex + 1) % acItems.length;
        renderAutocomplete();
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        acIndex = (acIndex - 1 + acItems.length) % acItems.length;
        renderAutocomplete();
        return;
      }
      if (e.key === "Enter" || e.key === "Tab") {
        e.preventDefault();
        acceptAutocomplete();
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        hideAutocomplete();
        return;
      }
    }

    // Auto-close brackets/quotes, skip over an existing closer, and
    // wrap a selection when typing an opener around it.
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const start = codeEditor.selectionStart,
        end = codeEditor.selectionEnd;
      const value = codeEditor.value;

      if (AUTO_PAIRS[e.key] && start !== end) {
        e.preventDefault();
        const selected = value.slice(start, end);
        codeEditor.value =
          value.slice(0, start) +
          e.key +
          selected +
          AUTO_PAIRS[e.key] +
          value.slice(end);
        codeEditor.selectionStart = start + 1;
        codeEditor.selectionEnd = start + 1 + selected.length;
        syncEditorChange();
        return;
      }

      if (AUTO_CLOSERS.has(e.key) && start === end && value[start] === e.key) {
        e.preventDefault();
        codeEditor.selectionStart = codeEditor.selectionEnd = start + 1;
        return;
      }

      if (AUTO_PAIRS[e.key] && start === end) {
        const isQuote = e.key === '"' || e.key === "'" || e.key === "`";
        const nextIsWordChar = /[A-Za-z0-9_]/.test(value[start] || "");
        if (!(isQuote && nextIsWordChar)) {
          e.preventDefault();
          codeEditor.value =
            value.slice(0, start) +
            e.key +
            AUTO_PAIRS[e.key] +
            value.slice(start);
          codeEditor.selectionStart = codeEditor.selectionEnd = start + 1;
          syncEditorChange();
          return;
        }
      }
    }

    // Backspace between an empty auto-inserted pair removes both sides
    if (e.key === "Backspace") {
      const start = codeEditor.selectionStart,
        end = codeEditor.selectionEnd;
      if (start === end && start > 0) {
        const value = codeEditor.value;
        const before = value[start - 1];
        const after = value[start];
        if (AUTO_PAIRS[before] && AUTO_PAIRS[before] === after) {
          e.preventDefault();
          codeEditor.value = value.slice(0, start - 1) + value.slice(start + 1);
          codeEditor.selectionStart = codeEditor.selectionEnd = start - 1;
          syncEditorChange();
          maybeShowAutocomplete();
          return;
        }
      }
    }

    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
      hideAutocomplete();
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const start = codeEditor.selectionStart,
        end = codeEditor.selectionEnd;
      codeEditor.value =
        codeEditor.value.slice(0, start) + "  " + codeEditor.value.slice(end);
      codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
      compilerCodeStore[currentLang()] = codeEditor.value;
      saveCompilerCode();
      updateCodeHighlight();
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const start = codeEditor.selectionStart,
        end = codeEditor.selectionEnd;
      const value = codeEditor.value;

      // Indentation of the line the cursor is currently on
      const lineStart = value.lastIndexOf("\n", start - 1) + 1;
      const currentLine = value.slice(lineStart, start);
      const indent = (currentLine.match(/^[ \t]*/) || [""])[0];

      const charBefore = value[start - 1];
      const charAfter = value[end];
      const pairs = { "{": "}", "[": "]", "(": ")" };
      const isOpener = Object.prototype.hasOwnProperty.call(pairs, charBefore);
      const isMatchingPair = isOpener && charAfter === pairs[charBefore];

      let insert, caretOffset;
      if (isMatchingPair) {
        // e.g. cursor between { and } -> split into 3 lines, indent the middle
        const middle = "\n" + indent + "  ";
        const closing = "\n" + indent;
        insert = middle + closing;
        caretOffset = middle.length;
      } else if (isOpener) {
        insert = "\n" + indent + "  ";
        caretOffset = insert.length;
      } else {
        insert = "\n" + indent;
        caretOffset = insert.length;
      }

      codeEditor.value = value.slice(0, start) + insert + value.slice(end);
      codeEditor.selectionStart = codeEditor.selectionEnd = start + caretOffset;
      compilerCodeStore[currentLang()] = codeEditor.value;
      saveCompilerCode();
      updateCodeHighlight();
    }
  });

/* ═══════════════════════════════════════════════════════════
   COMPLEXITY ANALYZER
   A free, entirely local, pattern-based static analyzer. It
   never sends your code anywhere — it just scans the text for
   loop nesting, recursion, memoization signals, and sort/search
   calls, and turns that into a best-effort Big-O estimate.
   This is a heuristic, not a guarantee — treat it as a sanity
   check on your solution, not ground truth.
═══════════════════════════════════════════════════════════ */

const INDENT_LANGS = new Set(["python", "ruby"]);

function stripCommentsAndStrings(code, lang) {
  let s = code;
  s = s.replace(/"(?:\\.|[^"\\\n])*"/g, '""');
  s = s.replace(/'(?:\\.|[^'\\\n])*'/g, "''");
  if (INDENT_LANGS.has(lang)) {
    s = s.replace(/#.*$/gm, "");
  } else {
    s = s.replace(/\/\/.*$/gm, "");
    s = s.replace(/\/\*[\s\S]*?\*\//g, "");
  }
  return s;
}

// Brace-based languages: track nesting depth, push a marker whenever a
// for/while keyword is immediately followed (eventually) by its `{`.
function maxLoopNestingBraces(code) {
  let depth = 0;
  const stack = [];
  let maxNesting = 0;
  let pendingLoop = false;
  for (let i = 0; i < code.length; i++) {
    const ch = code[i];
    if (ch === "{") {
      depth++;
      if (pendingLoop) {
        stack.push(depth);
        maxNesting = Math.max(maxNesting, stack.length);
        pendingLoop = false;
      }
    } else if (ch === "}") {
      if (stack.length && stack[stack.length - 1] === depth) stack.pop();
      depth--;
    } else if (/[a-zA-Z]/.test(ch)) {
      const prevChar = i > 0 ? code[i - 1] : " ";
      if (!/\w/.test(prevChar)) {
        const rest = code.slice(i, i + 6);
        if (/^for\b/.test(rest) || /^while\b/.test(rest)) pendingLoop = true;
      }
    }
  }
  return maxNesting;
}

// Indentation-based languages (Python/Ruby): a loop's nesting level is
// however many earlier loop-headers have a smaller indent than it.
function maxLoopNestingIndent(code) {
  const lines = code.split("\n");
  const stack = [];
  let maxNesting = 0;
  for (const raw of lines) {
    if (!raw.trim()) continue;
    const indent = raw.match(/^[ \t]*/)[0].replace(/\t/g, "    ").length;
    while (stack.length && indent <= stack[stack.length - 1]) stack.pop();
    if (
      /^[ \t]*(for|while)\b.*:\s*$/.test(raw) ||
      /^[ \t]*(for|while)\b.*\bdo\s*$/.test(raw)
    ) {
      stack.push(indent);
      maxNesting = Math.max(maxNesting, stack.length);
    }
  }
  return maxNesting;
}

function detectRecursion(code, lang) {
  const names = new Set();
  if (INDENT_LANGS.has(lang) && lang === "python") {
    const re = /\bdef\s+([a-zA-Z_]\w*)\s*\(/g;
    let m;
    while ((m = re.exec(code))) names.add(m[1]);
  } else if (lang === "ruby") {
    const re = /\bdef\s+([a-zA-Z_]\w*[?!]?)/g;
    let m;
    while ((m = re.exec(code))) names.add(m[1]);
  } else {
    const re =
      /\b(?:function\s+([a-zA-Z_]\w*)|([a-zA-Z_]\w*)\s*\([^;{}()]*\)\s*\{)/g;
    let m;
    while ((m = re.exec(code))) {
      const name = m[1] || m[2];
      if (name) names.add(name);
    }
  }
  for (const name of names) {
    if (!name) continue;
    const callRe = new RegExp(
      "\\b" + name.replace(/[?!]/g, "\\$&") + "\\s*\\(",
      "g",
    );
    const count = (code.match(callRe) || []).length;
    if (count >= 2) return true; // one for the definition, one+ for an internal call
  }
  return false;
}

function estimateComplexity(rawCode, lang) {
  const code = stripCommentsAndStrings(rawCode, lang);
  const nesting = INDENT_LANGS.has(lang)
    ? maxLoopNestingIndent(code)
    : maxLoopNestingBraces(code);
  const recursive = detectRecursion(code, lang);
  const memoized =
    /\b(memo|cache|dp)\b/i.test(code) ||
    /lru_cache/.test(code) ||
    /unordered_map|std::map|HashMap|Dictionary\s*</.test(code);
  const sorts =
    /\.sort\(|sorted\(|Arrays\.sort|std::sort|Collections\.sort/i.test(code);
  const binSearch = /binary.?search|lower_bound|upper_bound|bisect/i.test(code);
  const extraDs =
    /\[\s*\]\s*(=|;)|new\s+(int|long|float|double|char)\s*\[|vector\s*<|ArrayList|std::vector|\bdict\(|\bset\(|HashMap|unordered_map|unordered_set|Dictionary\s*</i.test(
      code,
    );

  const notes = [];
  let time;
  if (recursive && !memoized) {
    time = "Exponential — O(2^n) (or worse, if recursion branches further)";
    notes.push(
      "Recursive call(s) detected without an obvious cache/memo/dp pattern. If each call spawns multiple recursive sub-calls, runtime can blow up exponentially.",
    );
  } else if (recursive && memoized) {
    time = "Polynomial — exact order depends on the size of the state space";
    notes.push(
      "Recursion paired with what looks like a cache/memo/dp structure — this usually collapses to (number of distinct states) × (work per state) rather than exponential.",
    );
  } else if (nesting >= 3) {
    time = `O(n^${nesting}) or worse`;
    notes.push(`Found ${nesting} levels of nested loops.`);
  } else if (nesting === 2) {
    time = "O(n^2)";
    notes.push("Found 2 levels of nested loops.");
    if (sorts)
      notes.push(
        "A sort call is also present, but it's dominated by the nested loops.",
      );
  } else if (nesting === 1) {
    if (sorts) {
      time = "O(n log n)";
      notes.push("Single loop plus a sort call — the sort dominates the loop.");
    } else if (binSearch) {
      time =
        "O(n log n) (or O(log n) if the loop doesn't scale with input size)";
      notes.push("Single loop combined with a binary-search-style call.");
    } else {
      time = "O(n)";
      notes.push("Single loop over the input detected, no sort or recursion.");
    }
  } else {
    if (sorts) {
      time = "O(n log n)";
      notes.push("No explicit loops found, but a sort call is present.");
    } else if (binSearch) {
      time = "O(log n)";
      notes.push("Binary-search-style call detected with no surrounding loop.");
    } else {
      time =
        "O(1) (could be more if it calls out to library/built-in functions not visible here)";
      notes.push("No loops or recursion detected in the code as written.");
    }
  }

  let space = "O(1) — no extra data structures detected";
  if (recursive && !memoized) {
    space = "O(n) — call-stack depth (more if recursion branches)";
  } else if (recursive && memoized) {
    space = "O(n) or O(states) — memo table plus call-stack depth";
  } else if (extraDs) {
    space =
      "O(n) — appears to build an extra array/list/map sized with the input";
  }

  return { time, space, notes, nesting, recursive, memoized, sorts };
}

function renderComplexity(r) {
  const complexityBody = document.getElementById("complexity-body");
  if (!complexityBody) return;
  complexityBody.innerHTML = `
    <div class="complexity-grid">
      <div class="complexity-stat">
        <div class="complexity-stat-label">Time Complexity</div>
        <div class="complexity-stat-value">${escapeHtml(r.time)}</div>
      </div>
      <div class="complexity-stat">
        <div class="complexity-stat-label">Space Complexity</div>
        <div class="complexity-stat-value">${escapeHtml(r.space)}</div>
      </div>
    </div>
    <ul class="complexity-notes">
      ${r.notes.map((n) => `<li>${escapeHtml(n)}</li>`).join("")}
    </ul>
    <p class="complexity-disclaimer">Free, local, heuristic estimate — based on pattern-matching (loop nesting, recursion, memoization, sort/search calls), not real execution or profiling. Your code never leaves the browser for this. Treat it as a sanity check, not ground truth.</p>
  `;
}

const analyzeBtn = document.getElementById("analyze-complexity-btn");
const complexityPanel = document.getElementById("complexity-panel");
const complexityCloseBtn = document.getElementById("complexity-close");

analyzeBtn &&
  analyzeBtn.addEventListener("click", () => {
    const lang = currentLang();
    const code = codeEditor.value;
    if (!code.trim()) {
      renderComplexity({
        time: "—",
        space: "—",
        notes: ["Write some code first, then analyze it."],
      });
    } else {
      renderComplexity(estimateComplexity(code, lang));
    }
    complexityPanel.classList.remove("hidden");
    complexityPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
complexityCloseBtn &&
  complexityCloseBtn.addEventListener("click", () =>
    complexityPanel.classList.add("hidden"),
  );

/* ── COMPILER SETTINGS MODAL ──────────────────────────────── */
const settingsOverlay = document.getElementById("compiler-settings-overlay");
const settingsBtn = document.getElementById("compiler-settings-btn");
const settingsClose = document.getElementById("compiler-settings-close");
const settingsCancel = document.getElementById("compiler-settings-cancel");
const settingsSave = document.getElementById("compiler-settings-save");
const execEndpointEl = document.getElementById("exec-endpoint");
const execKeyEl = document.getElementById("exec-key");

function openSettings() {
  execEndpointEl.value = localStorage.getItem(EXEC_ENDPOINT_KEY) || "";
  execKeyEl.value = localStorage.getItem(EXEC_APIKEY_KEY) || "";
  settingsOverlay.classList.remove("hidden");
}
function closeSettings() {
  settingsOverlay.classList.add("hidden");
}

settingsBtn && settingsBtn.addEventListener("click", openSettings);
settingsClose && settingsClose.addEventListener("click", closeSettings);
settingsCancel && settingsCancel.addEventListener("click", closeSettings);
settingsOverlay &&
  settingsOverlay.addEventListener("click", (e) => {
    if (e.target === settingsOverlay) closeSettings();
  });
settingsSave &&
  settingsSave.addEventListener("click", () => {
    localStorage.setItem(EXEC_ENDPOINT_KEY, execEndpointEl.value.trim());
    localStorage.setItem(EXEC_APIKEY_KEY, execKeyEl.value.trim());
    closeSettings();
  });

function openInCompiler(q) {
  switchView("compiler");
  const lang = currentLang();
  const commentChar = { python: "#", ruby: "#" }[lang] || "//";
  const header = `${commentChar} ${q.title}${q.link ? " — " + q.link : ""}\n\n`;
  const isBlankOrDefault =
    !codeEditor.value.trim() ||
    codeEditor.value.trim() === (STARTER_CODE[lang] || "").trim();

  if (isBlankOrDefault) {
    codeEditor.value = header + (STARTER_CODE[lang] || "");
    compilerCodeStore[lang] = codeEditor.value;
    saveCompilerCode();
    updateCodeHighlight();
  }
  setStatus(`Solving: ${q.title}`);
  codeEditor.focus();
}

/* ── VIEW SWITCHING (Problems ↔ Compiler ↔ Dashboard) ─────── */
const viewTracker = document.getElementById("view-tracker");
const viewCompiler = document.getElementById("view-compiler");
const viewDashboard = document.getElementById("view-dashboard");
const viewRevision = document.getElementById("view-revision");
const viewTabs = document.querySelectorAll(".view-tab");
const trackerOnlyEls = [
  document.getElementById("tracker-stat-pill"),
  document.getElementById("tracker-ring-wrap"),
  document.getElementById("open-modal-btn"),
  document.querySelector(".controls-bar"),
].filter(Boolean);

function switchView(view) {
  const targets = {
    tracker: viewTracker,
    compiler: viewCompiler,
    dashboard: viewDashboard,
    revision: viewRevision,
  };
  const nextEl = targets[view];
  if (!nextEl) return;

  const currentEl = Object.values(targets).find(
    (el) => el && !el.classList.contains("hidden"),
  );

  trackerOnlyEls.forEach((el) =>
    el.classList.toggle("hidden", view !== "tracker"),
  );
  viewTabs.forEach((t) =>
    t.classList.toggle("active", t.dataset.view === view),
  );

  if (currentEl === nextEl) return; // already showing this view

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  function activateNext() {
    nextEl.classList.remove("hidden");
    if (!reduceMotion) {
      nextEl.classList.add("view-fade-in");
      void nextEl.offsetWidth; // force reflow so the removal below actually transitions
      requestAnimationFrame(() => nextEl.classList.remove("view-fade-in"));
    }

    if (
      view === "compiler" &&
      !codeEditor.value &&
      !compilerCodeStore[currentLang()]
    ) {
      codeEditor.value = STARTER_CODE[currentLang()] || "";
    }
    if (view === "compiler") updateCodeHighlight();
    if (view === "dashboard") {
      renderProgressView();
      renderAchievements();
      renderJourneyMap();
      renderCalendarView();
    }
    if (view === "revision") renderRevisionView();
  }

  if (currentEl && !reduceMotion) {
    currentEl.classList.add("view-fade-out");
    setTimeout(() => {
      currentEl.classList.add("hidden");
      currentEl.classList.remove("view-fade-out");
      activateNext();
    }, 200);
  } else {
    if (currentEl) currentEl.classList.add("hidden");
    activateNext();
  }
}

viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => switchView(tab.dataset.view));
});

/* ── COMPILER BOOT ─────────────────────────────────────────── */
loadCompilerCode();
loadTestCases();
if (langSelect) {
  const savedLang = localStorage.getItem(COMPILER_LANG_KEY);
  if (savedLang && STARTER_CODE[savedLang]) langSelect.value = savedLang;
  loadEditorForLang();
}

/* ── EXPORT / IMPORT UI WIRING ─────────────────────────────── */
const exportBtn = document.getElementById("export-btn");
const importBtn = document.getElementById("import-btn");
initCloudSync();
const importFileInput = document.getElementById("import-file-input");

exportBtn && exportBtn.addEventListener("click", exportData);
importBtn && importBtn.addEventListener("click", () => importFileInput.click());
importFileInput &&
  importFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) importDataFromFile(file);
    e.target.value = "";
  });

/* ── RESET PROGRESS (topic-wise or complete) ───────────────────
   Clears solved status, solvedAt, and timeSpent so streak/calendar/
   progress stats recompute from scratch. Notes, important flags,
   and the question list itself are left untouched — this only
   resets *progress*, not the data you've entered.
───────────────────────────────────────────────────────────── */
function resetProgressFor(matchFn) {
  questions.forEach((q) => {
    if (matchFn(q)) {
      q.solved = false;
      q.solvedAt = null;
      q.timeSpent = 0;
      q.revisionsDone = REVISION_STAGES.map(() => false);
    }
  });
  saveData();
  renderAll();
}

const resetMenuWrap = document.getElementById("reset-menu-wrap");
const resetProgressBtn = document.getElementById("reset-progress-btn");
const resetMenu = document.getElementById("reset-menu");
const resetTopicSelect = document.getElementById("reset-topic-select");
const resetTopicBtn = document.getElementById("reset-topic-btn");
const resetAllBtn = document.getElementById("reset-all-btn");

function closeResetMenu() {
  if (!resetMenu) return;
  resetMenu.classList.add("hidden");
  resetProgressBtn.setAttribute("aria-expanded", "false");
}

function toggleResetMenu() {
  if (!resetMenu) return;
  const isHidden = resetMenu.classList.contains("hidden");
  if (isHidden) {
    resetMenu.classList.remove("hidden");
    resetProgressBtn.setAttribute("aria-expanded", "true");
  } else {
    closeResetMenu();
  }
}

resetProgressBtn &&
  resetProgressBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleResetMenu();
  });

resetMenu && resetMenu.addEventListener("click", (e) => e.stopPropagation());

document.addEventListener("click", (e) => {
  if (resetMenuWrap && !resetMenuWrap.contains(e.target)) closeResetMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeResetMenu();
});

resetTopicBtn &&
  resetTopicBtn.addEventListener("click", () => {
    const topic = resetTopicSelect.value;
    if (!topic) return;
    const count = questions.filter((q) => q.topic === topic && q.solved).length;
    if (!count) {
      alert(`No solved questions in "${topic}" to reset.`);
      return;
    }
    const ok = confirm(
      `Reset progress for "${topic}"?\n\nThis will mark ${count} solved question(s) in this topic as unsolved. Notes and starred questions are kept. This can't be undone.`,
    );
    if (!ok) return;
    resetProgressFor((q) => q.topic === topic);
    closeResetMenu();
  });

resetAllBtn &&
  resetAllBtn.addEventListener("click", () => {
    const count = questions.filter((q) => q.solved).length;
    if (!count) {
      alert("No solved questions to reset.");
      return;
    }
    const ok = confirm(
      `Reset ALL progress?\n\nThis will mark all ${count} solved question(s) across every topic as unsolved, and clear your streak & time tracked. Notes and starred questions are kept. This can't be undone.`,
    );
    if (!ok) return;
    const okAgain = confirm(
      "Are you sure? This is your complete progress across all topics.",
    );
    if (!okAgain) return;
    resetProgressFor(() => true);
    closeResetMenu();
  });

/* ── NOTIFICATION PERMISSION ───────────────────────────────────
   Browsers show their own native permission dialog with fixed
   wording we can't customize, so we show this banner first to
   explain *why* we're asking before that dialog appears — and
   only trigger the native prompt from an explicit button click,
   since browsers require a user gesture anyway.
───────────────────────────────────────────────────────────── */
const NOTIF_DISMISS_KEY = "lb_dsa_notif_dismissed_session";

function maybeShowNotifBanner() {
  const banner = document.getElementById("notif-banner");
  if (!banner) return;
  if (!("Notification" in window)) return; // unsupported browser
  if (Notification.permission !== "default") return; // already answered
  if (sessionStorage.getItem(NOTIF_DISMISS_KEY)) return; // dismissed this visit
  banner.classList.remove("hidden");
}

const notifBanner = document.getElementById("notif-banner");
const notifEnableBtn = document.getElementById("notif-enable-btn");
const notifDismissBtn = document.getElementById("notif-dismiss-btn");

notifEnableBtn &&
  notifEnableBtn.addEventListener("click", async () => {
    try {
      const perm = await Notification.requestPermission();
      if (perm === "granted") {
        new Notification("DSA Tracker Pro", {
          body: "Notifications are on — we'll nudge you to keep solving and protect your streak.",
          icon: "icon-192.png",
        });
      }
    } catch {
      /* Notification API blocked/unsupported mid-flow — ignore */
    }
    notifBanner.classList.add("hidden");
  });

notifDismissBtn &&
  notifDismissBtn.addEventListener("click", () => {
    try {
      sessionStorage.setItem(NOTIF_DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    notifBanner.classList.add("hidden");
  });

/* ── BOOT ──────────────────────────────────────────────────── */
initTheme();
(async () => {
  await loadData();
  loadActiveTimer();
  renderAll();
  if (activeTimer && !questions.some((q) => q.id === activeTimer.id)) {
    // Question the timer pointed at is gone (e.g. imported over) — drop it.
    activeTimer = null;
    saveActiveTimer();
  } else if (activeTimer) {
    startTimerTicking();
  }
  maybeShowNotifBanner();
  requestPersistentStorage();
})();
