# Bubble Sort

Bubble Sort is one of the simplest sorting algorithms to understand and implement. While it's not the most efficient for large datasets, it's an excellent starting point for learning about sorting algorithms and algorithm analysis.

## How Bubble Sort Works

Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they're in the wrong order. The process is repeated until the list is sorted. The algorithm gets its name because smaller elements "bubble" to the beginning of the list.

### Algorithm Steps

1. Start with the first element of the array
2. Compare it with the next element
3. If the first element is greater than the second, swap them
4. Move to the next pair and repeat
5. Continue until you reach the end of the array
6. Repeat the entire process until no swaps are needed

## Visual Example

Let's sort the array `[64, 34, 25, 12, 22, 11, 90]`:

```
Pass 1: [64, 34, 25, 12, 22, 11, 90]
        [34, 64, 25, 12, 22, 11, 90] // 64 > 34, swap
        [34, 25, 64, 12, 22, 11, 90] // 64 > 25, swap  
        [34, 25, 12, 64, 22, 11, 90] // 64 > 12, swap
        [34, 25, 12, 22, 64, 11, 90] // 64 > 22, swap
        [34, 25, 12, 22, 11, 64, 90] // 64 > 11, swap
        // 64 < 90, no swap - largest element is now at the end

Pass 2: [34, 25, 12, 22, 11, 64, 90]
        [25, 34, 12, 22, 11, 64, 90] // 34 > 25, swap
        [25, 12, 34, 22, 11, 64, 90] // 34 > 12, swap
        // ... and so on
```

## Go Implementation

```go
package main

import "fmt"

// BubbleSort sorts an array of integers using the bubble sort algorithm
func BubbleSort(arr []int) {
    n := len(arr)
    
    // Outer loop for number of passes
    for i := 0; i < n-1; i++ {
        swapped := false // Flag to optimize - if no swaps, array is sorted
        
        // Inner loop for comparisons in current pass
        // Last i elements are already sorted
        for j := 0; j < n-i-1; j++ {
            // Compare adjacent elements
            if arr[j] > arr[j+1] {
                // Swap if they're in wrong order
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = true
            }
        }
        
        // If no swapping occurred, array is sorted
        if !swapped {
            break
        }
    }
}

// Example usage
func main() {
    arr := []int{64, 34, 25, 12, 22, 11, 90}
    fmt.Println("Original array:", arr)
    
    BubbleSort(arr)
    fmt.Println("Sorted array:", arr)
}
```

## Optimized Version

The basic implementation can be optimized by noting that after each pass, the largest element is in its correct position:

```go
func OptimizedBubbleSort(arr []int) {
    n := len(arr)
    
    for i := 0; i < n-1; i++ {
        swapped := false
        
        // Reduce the range in each pass
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = true
            }
        }
        
        // Early termination if array is sorted
        if !swapped {
            fmt.Printf("Array sorted after %d passes\\n", i+1)
            break
        }
    }
}
```

## Complexity Analysis

### Time Complexity
- **Best Case**: O(n) - When the array is already sorted (with optimization)
- **Average Case**: O(n²) - When elements are in random order
- **Worst Case**: O(n²) - When the array is sorted in reverse order

### Space Complexity
- **O(1)** - Bubble sort is an in-place sorting algorithm, requiring only a constant amount of additional memory

## Advantages and Disadvantages

### Advantages ✅
- Simple to understand and implement
- No additional memory space needed (in-place)
- Stable sorting algorithm (maintains relative order of equal elements)
- Can detect if the list is already sorted

### Disadvantages ❌
- Inefficient for large datasets due to O(n²) time complexity
- More swaps compared to other O(n²) algorithms like selection sort
- Generally outperformed by more advanced algorithms

## When to Use Bubble Sort

Bubble Sort is primarily useful for:
- **Educational purposes**: Learning about sorting algorithms and complexity analysis
- **Small datasets**: When simplicity is more important than efficiency
- **Nearly sorted data**: The optimized version performs well on nearly sorted arrays
- **Situations where code simplicity is crucial**

## Practice Exercises

1. **Modify the algorithm** to sort in descending order
2. **Count comparisons and swaps** - track how many operations are performed
3. **Implement a version** that sorts strings alphabetically
4. **Create a generic version** that works with any comparable type

## Next Steps

Now that you understand Bubble Sort, you're ready to explore more efficient sorting algorithms:
- Quick Sort - Divide and conquer approach (coming soon)
- Merge Sort - Stable O(n log n) algorithm (coming soon)
- Heap Sort - In-place O(n log n) algorithm (coming soon)

Understanding Bubble Sort gives you a solid foundation for analyzing and comparing these more advanced algorithms! 🚀
