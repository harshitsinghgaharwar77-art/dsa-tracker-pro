
export const REVISION_STAGES = [1, 3, 7, 15, 30];

export const JOURNEY_TOPIC_ORDER = [
  'Arrays',
  'Strings',
  'Searching & Sorting',
  'Matrix',
  'Linked List',
  'Stacks & Queues',
  'Binary Trees',
  'Binary Search Trees',
  'Heap',
  'Trie',
  'Graph',
  'Backtracking',
  'Dynamic Programming',
  'Greedy',
  'Bit Manipulation',
];

export const JOURNEY_TOPIC_ICONS: Record<string, string> = {
  Arrays: '🔢',
  Strings: '🔤',
  'Searching & Sorting': '🔍',
  Matrix: '🧮',
  'Linked List': '🔗',
  'Stacks & Queues': '📚',
  'Binary Trees': '🌳',
  'Binary Search Trees': '🌲',
  Heap: '⛰️',
  Trie: '🔡',
  Graph: '🕸️',
  Backtracking: '🧭',
  'Dynamic Programming': '🧩',
  Greedy: '🪙',
  'Bit Manipulation': '🧬',
};

export const TOPIC_PALETTE = [
  '#6366f1', // Indigo
  '#3b82f6', // Blue
  '#06b6d4', // Cyan
  '#10b981', // Emerald
  '#84cc16', // Lime
  '#eab308', // Yellow
  '#f97316', // Orange
  '#ef4444', // Red
  '#ec4899', // Pink
  '#a855f7', // Purple
  '#8b5cf6', // Violet
  '#14b8a6', // Teal
  '#f43f5e', // Rose
  '#0ea5e9', // Sky
  '#d946ef', // Fuchsia
];


export const STARTER_CODE: Record<string, string> = {
  javascript: `// JavaScript — runs instantly client-side in your browser!
// You can use standard console.log() and process stdin lines if provided.

function solve() {
  console.log("Hello, DSA Master!");
  
  // Example: Two Sum
  const nums = [2, 7, 11, 15];
  const target = 9;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      console.log("Indices found:", [map.get(complement), i]);
      return;
    }
    map.set(nums[i], i);
  }
}

solve();
`,
  python: `# Python — runs directly in your browser or Piston backend!
def solve():
    print("Hello, DSA Master!")
    
    # Example: Binary Search
    arr = [1, 3, 5, 7, 9, 11, 13, 15]
    target = 7
    left, right = 0, len(arr) - 1
    found = -1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            found = mid
            break
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    print(f"Target {target} found at index: {found}")

solve()
`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    cout << "Hello, C++ DSA!" << endl;
    return 0;
}
`,
  java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java DSA!");
    }
}
`,
  c: `#include <stdio.h>

int main() {
    printf("Hello, C DSA!\\n");
    return 0;
}
`,
  go: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go DSA!")
}
`,
  rust: `fn main() {
    println!("Hello, Rust DSA!");
}
`,
  typescript: `// TypeScript
function solve(): void {
  console.log("Hello, TypeScript DSA!");
}

solve();
`,
};

export const PISTON_LANG_MAP: Record<string, string> = {
  cpp: 'cpp',
  c: 'c',
  java: 'java',
  go: 'go',
  rust: 'rust',
  typescript: 'typescript',
  python: 'python',
  javascript: 'javascript',
};

export const DEFAULT_DAILY_GOAL = 5;
export const SOLVED_TIER_ICONS = ['🥉', '🥈', '🥇', '💎', '👑'];
export const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const MONTH_LABELS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const MONTH_LABELS_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
